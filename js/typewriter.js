/* Typewriter Effect */
const typewriterLines = document.querySelectorAll("[data-typewriter-text]");
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

async function typeLine(line, text) {
  line.classList.add("active");
  line.textContent = "";

  const defaultTypingDelay = 42;
  const typingDelay = Number(line.dataset.typewriterSpeed);
  const delay =
    Number.isFinite(typingDelay) && typingDelay > 0
      ? typingDelay
      : defaultTypingDelay;

  for (let index = 0; index < text.length; index += 1) {
    line.textContent += text[index];
    await new Promise((resolve) => setTimeout(resolve, delay));
  }

  line.classList.remove("active");
  line.classList.add("complete");
  await new Promise((resolve) => setTimeout(resolve, 160));
}

async function runTypewriter() {
  if (typewriterLines.length === 0) return;

  if (prefersReducedMotion) {
    typewriterLines.forEach((line) => {
      line.textContent = line.dataset.typewriterText;
      line.classList.add("complete");
    });
    return;
  }

  typewriterLines.forEach((line) => {
    line.textContent = "";
  });

  for (const line of typewriterLines) {
    await typeLine(line, line.dataset.typewriterText);
  }
}

function startTypewriterAfterReveal() {
  const pageContent = document.querySelector(".page-content");
  if (!pageContent) {
    runTypewriter();
    return;
  }

  const onAnimationStart = (event) => {
    if (event.animationName !== "fadeIn") return;
    pageContent.removeEventListener("animationstart", onAnimationStart);
    runTypewriter();
  };

  pageContent.addEventListener("animationstart", onAnimationStart);

  const computedStyle = getComputedStyle(pageContent);
  if (
    computedStyle.opacity === "1" ||
    computedStyle.animationName.includes("fadeIn") === false
  ) {
    pageContent.removeEventListener("animationstart", onAnimationStart);
    runTypewriter();
  }
}

startTypewriterAfterReveal();
