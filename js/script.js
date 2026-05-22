/* ALWAYS START AT TOP OF PAGE*/
window.history.scrollRestoration = "manual";
window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

/* MOBILE NAVIGATION */

const hamburger = document.getElementById("hamburger-menu");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

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
    threshold: 0.2,
  },
);

panels.forEach((panel) => panelObserver.observe(panel));
