import { useEffect, useState } from "react";

type GithubStats = {
  stars: number | null;
  forks: number | null;
  contributors: number | null;
};

type Cached = GithubStats & { fetchedAt: number };

const CACHE_KEY = "xircuits_gh_stats_v1";
const CACHE_TTL_MS = 1000 * 60 * 60 * 6; // 6 hours

function readCache(): Cached | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Cached;
    if (Date.now() - parsed.fetchedAt > CACHE_TTL_MS) return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeCache(stats: GithubStats) {
  if (typeof window === "undefined") return;
  try {
    const payload: Cached = { ...stats, fetchedAt: Date.now() };
    window.localStorage.setItem(CACHE_KEY, JSON.stringify(payload));
  } catch {
    /* quota / privacy mode — silently skip */
  }
}

/**
 * Fetches live GitHub numbers for the Xircuits repo. Returns nulls while
 * loading or on failure — the caller should fall back to a honest static
 * number rather than showing 0. Cached in localStorage for 6h to avoid
 * hammering the unauth rate limit (60/hr per IP).
 */
export function useGithubStats(): GithubStats {
  const [stats, setStats] = useState<GithubStats>(() => {
    const cached = readCache();
    return cached ?? { stars: null, forks: null, contributors: null };
  });

  useEffect(() => {
    let cancelled = false;
    const cached = readCache();
    if (cached) return; // still warm

    const run = async () => {
      try {
        const [repoRes, contribRes] = await Promise.all([
          fetch("https://api.github.com/repos/XpressAI/xircuits"),
          fetch(
            "https://api.github.com/repos/XpressAI/xircuits/contributors?per_page=100&anon=true"
          ),
        ]);

        if (!repoRes.ok || !contribRes.ok) return;
        const repo = await repoRes.json();
        const contributors = await contribRes.json();

        if (cancelled) return;

        const next: GithubStats = {
          stars: typeof repo?.stargazers_count === "number" ? repo.stargazers_count : null,
          forks: typeof repo?.forks_count === "number" ? repo.forks_count : null,
          contributors: Array.isArray(contributors) ? contributors.length : null,
        };
        setStats(next);
        writeCache(next);
      } catch {
        /* swallow — caller falls back */
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  return stats;
}
