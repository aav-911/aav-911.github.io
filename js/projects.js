/* PROJECT DATA */

const GITHUB_PROJECTS = [
  {
    name: "Medical-Case_Machine-Leaning",
    description:
      "A machine learning project where the program uses the features of the medical conditions to train and make predictions.",
    html_url: "https://github.com/aav-911/Medical-Case_Machine-Leaning",
    language: "Python",
    image: "../images/gfu5.jpg",
  },
  {
    name: "Java-Store_System",
    description:
      "A completed class project that simulates a working store inventory system that manages the purchase, restock, refund, and counting of...",
    html_url: "https://github.com/aav-911/Java-Store_System",
    language: "Java",
    image: "../images/gfu5.jpg",
  },
  {
    name: "Portfolio Site",
    description:
      "My personal portfolio website where I demonstrate who I am both personally and academically.",
    html_url: "https://github.com/aav-911/aav-911.github.io",
    language: "HTML/CSS/JavaScript",
    image: "../images/gfu5.jpg",
  },
  {
    name: "Air-Traffic_Data-Exploration",
    description:
      "A project where the program collects and describes the data found in the given dataset.",
    html_url: "https://github.com/aav-911/Air-Traffic_Data-Exploration",
    language: "Python",
    image: "../images/gfu5.jpg",
  },
  {
    name: "Air-Traffic_Project",
    description:
      "An experiment where the program measures and compares the number of passengers per domestic and international flights in San Francisco International Airport.",
    html_url: "https://github.com/aav-911/Air-Traffic_Project",
    language: "Python",
    image: "../images/gfu5.jpg",
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

const SOUNDCLOUD_TRACKS = [
  {
    title: "Pollo",
    link: "https://soundcloud.com/prodbyaav/pollo",
    description:
      "One of my first completed beats I ever made. It all started as a joke when I discovered the chicken SFX, asking others if it'll sound good. And it did. I don't know how I did it, but it worked. And so I finished this beat and I actually don't hate it. I hope you enjoy!",
    image: "../images/pollo_theme.PNG",
    DAW: "SoundTrap",
    song: "../music/Pollo.wav",
  },
  {
    title: "Bluecloak - Title Theme",
    link: "https://soundcloud.com/prodbyaav/bluecloaktitle",
    description:
      "Title theme for 'Bluecloak', offering a cinematic intro to the player, opening a world full of action and intensity.",
    image: "../images/title_theme.png",
    DAW: "FL Studio",
    song: "../music/Title_Theme.wav",
  },
  {
    title: "Bluecloak - Grass Theme",
    link: "https://soundcloud.com/prodbyaav/bluecloakgrass",
    description:
      "Grass theme for 'Bluecloak', creating an intense environment as the player faces countless enemies as they come in waves.",
    image: "../images/grass_theme.png",
    DAW: "FL Studio",
    song: "../music/Grass_Theme.wav",
  },
  {
    title: "Bluecloak - Cave Theme",
    link: "https://soundcloud.com/prodbyaav/bluecloakcave",
    description:
      "Cave theme for 'Bluecloak', creating an upbeat atmoshphere as the player explores the underground depths of the world.",
    image: "../images/cave_theme.png",
    DAW: "FL Studio",
    song: "../music/Cave_Theme.wav",
  },
  {
    title: "Bluecloak - Boss Theme",
    link: "https://soundcloud.com/prodbyaav/bluecloakbosstheme",
    description:
      "Boss theme for 'Bluecloak', creating a tense and intense atmosphere as the player faces off against the most powerful enemies in the game.",
    image: "../images/boss_theme.png",
    DAW: "FL Studio",
    song: "../music/Boss_Theme.wav",
  },
  {
    title: "Bluecloak - Ending Theme",
    link: "https://soundcloud.com/prodbyaav/bluecloakending",
    description:
      "Ending theme for 'Bluecloak', offering a cinematic close to the player as they finish the game and reflect on their journey.",
    image: "../images/ending_theme.png",
    DAW: "FL Studio",
    song: "../music/Ending_Theme.wav",
  },
];

/* CARD CREATION */

function createSectionTitleCard(
  sectionTitle,
  sectionDescription,
  image = null,
  profileLink = null,
) {
  const card = document.createElement("div");
  card.className = "card";

  const header = document.createElement("div");
  header.className = "card-header project-card-header";

  const headerLabel = document.createElement("span");
  headerLabel.className = "card-header-label";
  headerLabel.textContent = sectionTitle;
  header.appendChild(headerLabel);

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

  if (profileLink) {
    const footer = document.createElement("div");
    footer.className = "card-footer";
    footer.innerHTML = `<a href="${profileLink}" target="_blank" rel="noopener noreferrer" class="card-link">View Profile</a>`;
    card.appendChild(footer);
  }

  return card;
}

function createProjectCard(repo) {
  const card = document.createElement("div");
  card.className = "card";

  const isMusicTrack = Boolean(repo.song);
  const cardHeaderText = repo.language || repo.DAW || "N/A";
  const cardTitle = repo.name || repo.title || "Untitled";
  const description = repo.description || "No description available";
  const cardLink = isMusicTrack ? null : repo.html_url || repo.link;
  const cardLinkText = "View Repository";

  const header = document.createElement("div");
  header.className = "card-header project-card-header";

  const headerLabel = document.createElement("span");
  headerLabel.className = "card-header-label";
  headerLabel.textContent = cardHeaderText;
  header.appendChild(headerLabel);

  if (repo.image) {
    header.style.backgroundImage = `url(${repo.image})`;
    header.style.backgroundSize = "cover";
    header.style.backgroundPosition = "center";
  }

  const content = document.createElement("div");
  content.className = "card-content";
  content.innerHTML = `<h3>${cardTitle}</h3><p>${description}</p>`;

  card.appendChild(header);
  card.appendChild(content);

  if (cardLink || isMusicTrack) {
    const footer = document.createElement("div");
    footer.className = "card-footer";
    footer.innerHTML = cardLink
      ? `<a href="${cardLink}" target="_blank" rel="noopener noreferrer" class="card-link">${cardLinkText}</a>`
      : "";
    if (isMusicTrack) {
      const playButton = document.createElement("button");

      playButton.type = "button";
      playButton.className = "card-link track-play-button";
      playButton.textContent = "Play Track";
      playButton.dataset.trackTitle = cardTitle;
      playButton.setAttribute("aria-label", `Play ${cardTitle}`);
      playButton.addEventListener("click", () => playTrack(repo));

      footer.appendChild(playButton);
    }
    card.appendChild(footer);
  }

  return card;
}

/* LOAD PROJECT GROUPS */

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
      "../images/unity.png",
    ),
  );
  GAMEDEV_PROJECTS.forEach((project) => {
    carousel.appendChild(createProjectCard(project));
  });
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
    carousel.appendChild(createProjectCard(track));
  });
}

/* CAROUSEL STATE */

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

/* INITIALIZATION */

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

initializeProjects();

/* TRACK PLAYBACK */

const audioPlayer = document.getElementById("audio-player");

const playerUI = document.getElementById("music-player-ui");

const currentTrackTitle = document.getElementById("current-track-title");

const playPauseBtn = document.getElementById("play-pause-btn");

const progressBar = document.getElementById("progress-bar");

let currentTrack = null;

/* UPDATE TRACK CARD BUTTONS */

function updateTrackButtons() {
  document.querySelectorAll(".track-play-button").forEach((button) => {
    const isCurrentTrack = currentTrack?.title === button.dataset.trackTitle;

    const isPlaying = isCurrentTrack && !audioPlayer.paused;

    button.textContent = isPlaying ? "Pause Track" : "Play Track";

    button.setAttribute(
      "aria-label",
      `${isPlaying ? "Pause" : "Play"} ${button.dataset.trackTitle}`,
    );
  });
}

/* UPDATE PLAYER BUTTON */

function updatePlayerButton() {
  if (!currentTrack) {
    playPauseBtn.textContent = "▶ Play";
    return;
  }

  playPauseBtn.textContent = audioPlayer.paused ? "▶ Play" : "⏸ Pause";
}

/* PLAY TRACK */

function playTrack(track) {
  const isCurrentTrack = currentTrack?.song === track.song;

  if (isCurrentTrack) {
    if (audioPlayer.paused) {
      audioPlayer.play();
    } else {
      audioPlayer.pause();
    }

    return;
  }

  currentTrack = track;

  audioPlayer.src = track.song;

  progressBar.value = 0;

  currentTrackTitle.textContent = track.title;

  playerUI.classList.remove("hidden");

  audioPlayer.play();
}

/* PLAYER PLAY / PAUSE BUTTON */

playPauseBtn.addEventListener("click", () => {
  if (!currentTrack) return;

  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
});

/* PROGRESS BAR */

audioPlayer.addEventListener("timeupdate", () => {
  progressBar.value =
    (audioPlayer.currentTime / audioPlayer.duration) * 100 || 0;
});

progressBar.addEventListener("input", () => {
  if (!audioPlayer.duration) return;

  audioPlayer.currentTime = (progressBar.value / 100) * audioPlayer.duration;
});

/* TIME DISPLAY */

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);

  const secs = Math.floor(seconds % 60);

  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

audioPlayer.addEventListener("timeupdate", () => {
  document.getElementById("current-time").textContent = formatTime(
    audioPlayer.currentTime,
  );
});

audioPlayer.addEventListener("loadedmetadata", () => {
  document.getElementById("duration").textContent = formatTime(
    audioPlayer.duration,
  );
});

/* KEEP UI IN SYNC */

audioPlayer.addEventListener("play", () => {
  updateTrackButtons();
  updatePlayerButton();
});

audioPlayer.addEventListener("pause", () => {
  updateTrackButtons();
  updatePlayerButton();
});

audioPlayer.addEventListener("ended", () => {
  updateTrackButtons();
  updatePlayerButton();

  progressBar.value = 0;
});

/* INITIAL UI STATE */

updateTrackButtons();
updatePlayerButton();
