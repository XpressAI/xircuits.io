#!/usr/bin/env node
/**
 * For each SVG in static/img/website/frameworks/, render to PNG, detect the
 * content bounding box by scanning non-transparent pixels, then update the
 * SVG's viewBox to the tight bounding box (in SVG coordinate space).
 * Backs up originals to .orig.svg before writing.
 */

import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const DIR = "static/img/website/frameworks";
const RENDER_WIDTH = 1200; // raster width for bbox detection

function parseViewBox(svgText) {
  const m = svgText.match(/viewBox=["']([\-\d\.\s,]+)["']/);
  if (!m) return null;
  const parts = m[1].trim().split(/[\s,]+/).map(Number);
  if (parts.length !== 4 || parts.some((n) => Number.isNaN(n))) return null;
  const [x, y, w, h] = parts;
  return { x, y, w, h };
}

function parseWidthHeight(svgText) {
  const wm = svgText.match(/\bwidth=["'](\d+(?:\.\d+)?)(?:px)?["']/);
  const hm = svgText.match(/\bheight=["'](\d+(?:\.\d+)?)(?:px)?["']/);
  if (!wm || !hm) return null;
  return { w: parseFloat(wm[1]), h: parseFloat(hm[1]) };
}

async function contentBBox(svgBuffer) {
  // Render at RENDER_WIDTH, then scan alpha channel for non-transparent pixels.
  const img = sharp(svgBuffer, {
    density: 72,
    unlimited: true,
    limitInputPixels: false,
  })
    .resize({ width: RENDER_WIDTH, withoutEnlargement: false })
    .png();
  const { data, info } = await img
    .raw()
    .ensureAlpha()
    .toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  let minX = width,
    minY = height,
    maxX = 0,
    maxY = 0;
  let hasPixel = false;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels + 3; // alpha
      if (data[idx] > 10) {
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
        hasPixel = true;
      }
    }
  }
  if (!hasPixel) return null;
  return {
    px: { minX, minY, maxX, maxY, width, height },
  };
}

async function run() {
  const files = (await fs.readdir(DIR))
    .filter((f) => f.toLowerCase().endsWith(".svg") && !/\.orig\.svg$/i.test(f))
    .sort();

  const report = [];
  for (const file of files) {
    const full = path.join(DIR, file);
    const raw = await fs.readFile(full, "utf8");
    let bbox;
    try {
      const buf = Buffer.from(raw);
      bbox = await contentBBox(buf);
    } catch (err) {
      report.push({ file, status: "render failed", err: err.message });
      continue;
    }
    if (!bbox) {
      report.push({ file, status: "empty / no pixels" });
      continue;
    }

    const vb = parseViewBox(raw);
    const wh = parseWidthHeight(raw);

    // We have the pixel bbox from a render at RENDER_WIDTH × (auto height).
    // To convert pixel coords back to SVG coords, we need the SVG's effective
    // viewBox (or width/height if no viewBox) to know the mapping.
    const source = vb
      ? { x: vb.x, y: vb.y, w: vb.w, h: vb.h }
      : wh
      ? { x: 0, y: 0, w: wh.w, h: wh.h }
      : null;

    if (!source) {
      report.push({ file, status: "no viewBox or width/height" });
      continue;
    }

    const { minX, minY, maxX, maxY, width, height } = bbox.px;
    const sx = source.w / width;
    const sy = source.h / height;
    const newX = source.x + minX * sx;
    const newY = source.y + minY * sy;
    const newW = (maxX - minX + 1) * sx;
    const newH = (maxY - minY + 1) * sy;

    const tight = {
      x: +newX.toFixed(2),
      y: +newY.toFixed(2),
      w: +newW.toFixed(2),
      h: +newH.toFixed(2),
    };

    // Heuristic: only rewrite if the tight box is substantially smaller than
    // the current viewBox (>10% area savings OR origin far from zero).
    const oldArea = source.w * source.h;
    const newArea = tight.w * tight.h;
    const savings = 1 - newArea / oldArea;
    const needsTrim =
      savings > 0.08 ||
      Math.abs(tight.x - source.x) > source.w * 0.03 ||
      Math.abs(tight.y - source.y) > source.h * 0.03;

    if (!needsTrim) {
      report.push({ file, status: "ok", savings: savings.toFixed(2) });
      continue;
    }

    // Backup and rewrite. If the SVG had no viewBox, add one. Also drop
    // width/height so the viewBox dictates layout.
    const origPath = full.replace(/\.svg$/i, ".orig.svg");
    try {
      await fs.access(origPath);
    } catch {
      await fs.writeFile(origPath, raw);
    }

    let next = raw;
    const newVbAttr = `viewBox="${tight.x} ${tight.y} ${tight.w} ${tight.h}"`;
    if (vb) {
      next = next.replace(/viewBox=["'][\-\d\.\s,]+["']/, newVbAttr);
    } else {
      next = next.replace(/<svg\b/, `<svg ${newVbAttr}`);
    }
    // strip width/height from the root <svg> (best-effort, single occurrence)
    next = next.replace(
      /(<svg\b[^>]*?)\s+width=["'][^"']*["']/,
      "$1"
    );
    next = next.replace(
      /(<svg\b[^>]*?)\s+height=["'][^"']*["']/,
      "$1"
    );

    await fs.writeFile(full, next);
    report.push({
      file,
      status: "trimmed",
      before: source,
      after: tight,
      savings: savings.toFixed(2),
    });
  }

  console.log(JSON.stringify(report, null, 2));
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
