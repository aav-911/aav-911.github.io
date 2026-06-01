/* ALWAYS START AT TOP OF PAGE*/
window.history.scrollRestoration = "manual";
window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

/* MOBILE NAVIGATION */

const hamburger = document.getElementById("hamburger-menu");
const navLinks = document.getElementById("nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

/* PANEL REVEAL ANIMATION */

const panels = document.querySelectorAll(".panel");
const panelObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.05,
  },
);

panels.forEach((panel) => panelObserver.observe(panel));

/* INTRO MUSIC INITIALIZATION */
(function initBgMusic() {
  const audio = document.getElementById("bg-music");
  if (!audio) return;
  audio.volume = 0.5;
  audio.preload = "auto";

  function tryPlay() {
    const p = audio.play();
    if (p !== undefined) {
      p.catch(() => {
        const resume = () => {
          audio.play().catch(() => {});
          window.removeEventListener("click", resume);
          window.removeEventListener("keydown", resume);
        };
        window.addEventListener("click", resume);
        window.addEventListener("keydown", resume);
      });
    }
  }

  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    setTimeout(tryPlay, 200);
  } else {
    document.addEventListener("DOMContentLoaded", () =>
      setTimeout(tryPlay, 200),
    );
  }
})();

/* Ensure loader is removed after CSS fadeOut completes to avoid lingering overlay */
(function handleLoader() {
  const loader = document.querySelector(".loader");
  const page = document.querySelector(".page-content");
  if (!loader) return;

  function onAnimationEnd(e) {
    if (e.animationName === "fadeOut") {
      loader.style.pointerEvents = "none";
      loader.style.visibility = "hidden";
      loader.style.display = "none";
      if (page) page.style.opacity = "1";
      loader.removeEventListener("animationend", onAnimationEnd);
    }
  }

  loader.addEventListener("animationend", onAnimationEnd);
  // Also ensure loader is removed once the page-content finishes its fadeIn
  if (page) {
    const onPageAnimEnd = (ev) => {
      if (ev.animationName === "fadeIn") {
        loader.style.pointerEvents = "none";
        loader.style.visibility = "hidden";
        loader.style.display = "none";
        page.removeEventListener("animationend", onPageAnimEnd);
      }
    };
    page.addEventListener("animationend", onPageAnimEnd);
  }
  // Fallback: ensure loader is removed after 5s if animationend doesn't fire
  setTimeout(() => {
    if (getComputedStyle(loader).display !== "none") {
      loader.style.display = "none";
      if (page) page.style.opacity = "1";
    }
  }, 5000);
})();
