import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

if (ExecutionEnvironment.canUseDOM) {
  const onScroll = () => {
    const nav = document.querySelector(".navbar");
    if (!nav) return;
    if (window.scrollY > 8) {
      nav.classList.add("navbar--scrolled");
    } else {
      nav.classList.remove("navbar--scrolled");
    }
  };

  const init = () => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  };

  if (document.readyState === "complete" || document.readyState === "interactive") {
    init();
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
}

export {};
