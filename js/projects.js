const GITHUB_PROJECTS = [
  {
    name: "Medical-Case_Machine-Leaning",
    description:
      "A machine learning project where the program uses the features of the medical conditions to train and make predictions.",
    html_url: "https://github.com/aav-911/Medical-Case_Machine-Leaning",
    language: "Python",
    image: "../images/blue_gradient.png",
  },
  {
    name: "Java-Store_System",
    description:
      "A completed class project that simulates a working store inventory system that manages the purchase, restock, refund, and counting of...",
    html_url: "https://github.com/aav-911/Java-Store_System",
    language: "Java",
    image: "../images/blue_gradient.png",
  },
  {
    name: "Portfolio Site",
    description:
      "My personal portfolio website where I demonstrate who I am both personally and academically.",
    html_url: "https://github.com/aav-911/aav-911.github.io",
    language: "HTML/CSS/JavaScript",
    image: "../images/blue_gradient.png",
  },
  {
    name: "Air-Traffic_Data-Exploration",
    description:
      "A project where the program collects and describes the data found in the given dataset.",
    html_url: "https://github.com/aav-911/Air-Traffic_Data-Exploration",
    language: "Python",
    image: "../images/blue_gradient.png",
  },
  {
    name: "Air-Traffic_Project",
    description:
      "An experiment where the program measures and compares the number of passengers per domestic and international flights in San Francisco International Airport.",
    html_url: "https://github.com/aav-911/Air-Traffic_Project",
    language: "Python",
    image: "../images/blue_gradient.png",
  },
];

const GAMEDEV_PROJECTS = [
  {
    name: "Bluecloak",
    description:
      "A 2D rogue-like indie game built in Unity, currently in development.",
    image: "../images/title_theme.png",
    language: "C#",
  },
  {
    name: "Coming Soon",
    description:
      "2D turn-based apocaliptic horror game where players navigate a post-apocalyptic world, face against the undead and raiders as they seek a new home...",
    image: "../images/blue_gradient.png",
    language: "C#",
  },
];

/**
 * Create a section title card and place it first in the carousel
 */
function createSectionTitleCard(
  sectionTitle,
  sectionDescription,
  image = null,
  profieLink = null,
) {
  const card = document.createElement("div");
  card.className = "card";

  const header = document.createElement("div");
  header.className = "card-header";
  header.textContent = sectionTitle;

  if (image) {
    header.style.backgroundImage = `url(${image})`;
    header.style.backgroundSize = "cover";
    header.style.backgroundPosition = "center";
  }

  const content = document.createElement("div");
  content.className = "card-content";
  content.innerHTML = `<h3>${sectionTitle}</h3><p>${sectionDescription}</p>`;

  card.appendChild(header);
  card.appendChild(content);

  if (profieLink) {
    const footer = document.createElement("div");
    footer.className = "card-footer";
    footer.innerHTML = `<a href="${profieLink}" class="card-link" >View Profile</a>`;
    card.appendChild(footer);
  }

  return card;
}

/**
 * Create a project card element
 * @param {object} repo - Repository data
 */
function createProjectCard(repo) {
  const card = document.createElement("div");
  card.className = "card";

  const languages = repo.language ? repo.language : "N/A";
  const description = repo.description || "No description available";

  const header = document.createElement("div");
  header.className = "card-header";
  header.textContent = languages;

  if (repo.image) {
    header.style.backgroundImage = `url(${repo.image})`;
    header.style.backgroundSize = "cover";
    header.style.backgroundPosition = "center";
  }

  const content = document.createElement("div");
  content.className = "card-content";
  content.innerHTML = `<h3>${repo.name}</h3><p>${description}</p>`;

  card.appendChild(header);
  card.appendChild(content);

  if (repo.html_url) {
    const footer = document.createElement("div");
    footer.className = "card-footer";
    footer.innerHTML = `<a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="card-link">View Repository</a>`;
    card.appendChild(footer);
  }

  return card;
}

/**
 * Load and display manual GitHub project cards
 */
function loadGitHubProjects() {
  const carousel = document.getElementById("programming-carousel");
  if (!carousel) return;

  carousel.innerHTML = "";
  carousel.appendChild(
    createSectionTitleCard(
      "Computer Programming",
      "Data analysis and programming tools built from scratch.",
      "../images/github.svg",
      "https://github.com/aav-911",
    ),
  );
  GITHUB_PROJECTS.forEach((repo) => {
    carousel.appendChild(createProjectCard(repo));
  });
}

function loadGameDevProjects() {
  const carousel = document.getElementById("gamedev-carousel");
  if (!carousel) return;

  carousel.innerHTML = "";
  carousel.appendChild(
    createSectionTitleCard(
      "Game Development",
      "Interactive experiences, prototypes, and game jams.",
      "../images/blue_gradient.png",
    ),
  );
  GAMEDEV_PROJECTS.forEach((project) => {
    carousel.appendChild(createProjectCard(project));
  });
}

const SOUNDCLOUD_TRACKS = [
  {
    title: "Pollo",
    link: "https://soundcloud.com/prodbyaav/pollo",
    description:
      "One of my first completed beats I ever made. It all started as a joke when I discovered the chicken SFX, asking others if it'll sound good. And it did. I don't know how I did it, but it worked. And so I finished this beat and I actually don't hate it. I hope you enjoy!",
    image: "../images/pollo_theme.PNG",
  },
  {
    title: "Bluecloak - Title Theme",
    link: "https://soundcloud.com/prodbyaav/bluecloaktitle",
    description:
      "Title theme for 'Bluecloak', offering a cinematic intro to the player, opening a world full of action and intensity.",
    image: "../images/title_theme.png",
  },
  {
    title: "Bluecloak - Grass Theme",
    link: "https://soundcloud.com/prodbyaav/bluecloakgrass",
    description:
      "Grass theme for 'Bluecloak', creating an intense environment as the player faces countless enemies as they come in waves.",
    image: "../images/grass_theme.png",
  },
  {
    title: "Bluecloak - Cave Theme",
    link: "https://soundcloud.com/prodbyaav/bluecloakcave",
    description:
      "Cave theme for 'Bluecloak', creating an upbeat atmoshphere as the player explores the underground depths of the world.",
    image: "../images/cave_theme.png",
  },
  {
    title: "Bluecloak - Boss Theme",
    link: "https://soundcloud.com/prodbyaav/bluecloakbosstheme",
    description:
      "Boss theme for 'Bluecloak', creating a tense and intense atmosphere as the player faces off against the most powerful enemies in the game.",
    image: "../images/boss_theme.png",
  },
  {
    title: "Bluecloak - Ending Theme",
    link: "https://soundcloud.com/prodbyaav/bluecloakending",
    description:
      "Ending theme for 'Bluecloak', offering a cinematic close to the player as they finish the game and reflect on their journey.",
    image: "../images/ending_theme.png",
  },
];

function createSoundCloudCard(track) {
  const card = document.createElement("div");
  card.className = "card";

  // build inner structure
  const header = document.createElement("div");
  header.className = "card-header";

  // if image present, use it as header background
  if (track.image) {
    header.style.backgroundImage = `url(${track.image})`;
    header.setAttribute("aria-label", `${track.title} cover image`);
    header.style.backgroundSize = "cover";
    header.style.backgroundPosition = "center";
  }

  const content = document.createElement("div");
  content.className = "card-content";
  content.innerHTML = `
    <h3>${track.title}</h3>
    <p>${track.description}</p>
  `;

  const footer = document.createElement("div");
  footer.className = "card-footer";
  footer.innerHTML = `
    <a href="${track.link}" target="_blank" rel="noopener noreferrer" class="card-link">
      Listen on SoundCloud!
    </a>
  `;

  card.appendChild(header);
  card.appendChild(content);
  card.appendChild(footer);

  return card;
}

function loadSoundCloudTracks() {
  const carousel = document.getElementById("music-carousel");
  if (!carousel) return;

  carousel.innerHTML = "";
  carousel.appendChild(
    createSectionTitleCard(
      "Music Production",
      "Tracks, sound design, and music for projects.",
      "../images/aav_logo.png",
      "https://soundcloud.com/prodbyaav",
    ),
  );
  SOUNDCLOUD_TRACKS.forEach((track) => {
    carousel.appendChild(createSoundCloudCard(track));
  });
}

const carouselState = {};

function setCarouselActive(carouselId, index = 0) {
  const carousel = document.getElementById(carouselId);
  if (!carousel) return;

  const cards = Array.from(carousel.children);
  if (cards.length === 0) return;

  const normalizedIndex =
    ((index % cards.length) + cards.length) % cards.length;
  cards.forEach((card, cardIndex) => {
    card.classList.toggle("active", cardIndex === normalizedIndex);
  });

  carouselState[carouselId] = {
    index: normalizedIndex,
    length: cards.length,
  };

  const leftButton = document.querySelector(
    `.carousel-button.left[data-carousel="${carouselId}"]`,
  );
  const rightButton = document.querySelector(
    `.carousel-button.right[data-carousel="${carouselId}"]`,
  );
  if (leftButton) leftButton.disabled = cards.length <= 1;
  if (rightButton) rightButton.disabled = cards.length <= 1;
}

function moveCarousel(carouselId, direction) {
  const state = carouselState[carouselId];
  if (!state) return;

  const nextIndex = (state.index + direction + state.length) % state.length;
  setCarouselActive(carouselId, nextIndex);
}

function initializeCarousels() {
  setCarouselActive("programming-carousel", 0);
  setCarouselActive("gamedev-carousel", 0);
  setCarouselActive("music-carousel", 0);

  document.querySelectorAll(".carousel-button").forEach((button) => {
    const target = button.dataset.carousel;
    if (!target) return;

    button.addEventListener("click", () => {
      moveCarousel(target, button.classList.contains("right") ? 1 : -1);
    });
  });
}

/**
 * Initialize projects page
 */
function initializeProjects() {
  const initialize = () => {
    loadGitHubProjects();
    loadGameDevProjects();
    loadSoundCloudTracks();
    initializeCarousels();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize);
  } else {
    initialize();
  }
}

// Start initialization
initializeProjects();
