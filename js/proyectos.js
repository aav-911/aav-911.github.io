/* PROJECT DATA */

const GITHUB_PROJECTS = [
  {
    name: "Caso-Médico_Aprendizaje-Automático",
    description:
      "Un proyecto de aprendizaje automático donde el programa utiliza las características de las condiciones médicas para entrenar y hacer predicciones.",
    html_url: "https://github.com/aav-911/Medical-Case_Machine-Leaning",
    language: "Python",
    image: "../images/gfu5.jpg",
  },
  {
    name: "Java_Sistema-de-Tienda",
    description:
      "Un proyecto de clase completo que simula un sistema de inventario de tienda en funcionamiento que gestiona la compra, reposición, reembolso y recuento de los productos disponibles que se clasifican en tres tipos diferentes.",
    html_url: "https://github.com/aav-911/Java-Store_System",
    language: "Java",
    image: "../images/gfu5.jpg",
  },
  {
    name: "Sitio de Portafolio",
    description:
      "Mi sitio web de portafolio personal donde demuestro quién soy tanto personal como académicamente.",
    html_url: "https://github.com/aav-911/aav-911.github.io",
    language: "HTML/CSS/JavaScript",
    image: "../images/gfu5.jpg",
  },
  {
    name: "Tráfico-Aéreo_Exploración-de-Datos",
    description:
      "Un proyecto donde el programa recopila y describe los datos encontrados en el conjunto de datos dado.",
    html_url: "https://github.com/aav-911/Air-Traffic_Data-Exploration",
    language: "Python",
    image: "../images/gfu5.jpg",
  },
  {
    name: "Tráfico-Aéreo_Proyecto",
    description:
      "Un experimento donde el programa mide y compara el número de pasajeros por vuelos domésticos e internacionales en el Aeropuerto Internacional de San Francisco.",
    html_url: "https://github.com/aav-911/Air-Traffic_Project",
    language: "Python",
    image: "../images/gfu5.jpg",
  },
];

const GAMEDEV_PROJECTS = [
  {
    name: "Bluecloak",
    description:
      "Un juego indie de tipo rogue-like en 2D construido en Unity, actualmente en desarrollo.",
    image: "../images/title_theme.png",
    language: "C#",
  },
  {
    name: "Próximamente...",
    description:
      "Juego de horror apocalíptico en 2D con turnos donde los jugadores navegan por un mundo post-apocalíptico, enfrentándose a los no muertos y depredadores mientras buscan un nuevo hogar...",
    image: "../images/blue_gradient.png",
    language: "C#",
  },
];

const SOUNDCLOUD_TRACKS = [
  {
    title: "Pollo",
    link: "https://soundcloud.com/prodbyaav/pollo",
    description:
      "Uno de mis primeros ritmos completos que hice. Todo empezó como una broma cuando descubrí el SFX del pollo y pregunté a otros si sonaría bien. Y así fue. No sé cómo lo hice, pero funcionó. Y así terminé este ritmo y realmente no lo odio. ¡Espero que lo disfrutes!",
    image: "../images/pollo_theme.PNG",
    DAW: "SoundTrap",
    song: "../music/Pollo.wav",
  },
  {
    title: "Bluecloak - Música Principal",
    link: "https://soundcloud.com/prodbyaav/bluecloaktitle",
    description:
      "Música principal de 'Bluecloak', que ofrece una introducción cinematográfica al jugador, abriendo un mundo lleno de acción e intensidad.",
    image: "../images/title_theme.png",
    DAW: "FL Studio",
    song: "../music/Title_Theme.wav",
  },
  {
    title: "Bluecloak - Música del superfici",
    link: "https://soundcloud.com/prodbyaav/bluecloakgrass",
    description:
      "Música del superficie para 'Bluecloak', creando un entorno intenso mientras el jugador enfrenta incontables enemigos en olas.",
    image: "../images/grass_theme.png",
    DAW: "FL Studio",
    song: "../music/Grass_Theme.wav",
  },
  {
    title: "Bluecloak - Música de Cueva",
    link: "https://soundcloud.com/prodbyaav/bluecloakcave",
    description:
      "Música de cueva para 'Bluecloak', creando una atmósfera alegre mientras el jugador explora las profundidades subterráneas del mundo.",
    image: "../images/cave_theme.png",
    DAW: "FL Studio",
    song: "../music/Cave_Theme.wav",
  },
  {
    title: "Bluecloak - Música de Jefe",
    link: "https://soundcloud.com/prodbyaav/bluecloakbosstheme",
    description:
      "Música de jefe para 'Bluecloak', creando una atmósfera tensa e intensa mientras el jugador se enfrenta a los enemigos más poderosos del juego.",
    image: "../images/boss_theme.png",
    DAW: "FL Studio",
    song: "../music/Boss_Theme.wav",
  },
  {
    title: "Bluecloak - Música de Final",
    link: "https://soundcloud.com/prodbyaav/bluecloakending",
    description:
      "Música de final para 'Bluecloak', ofreciendo un cierre cinematográfico al jugador mientras terminan el juego y reflexionan sobre su viaje.",
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
    footer.innerHTML = `<a href="${profileLink}" target="_blank" rel="noopener noreferrer" class="card-link">Ver Perfil</a>`;
    card.appendChild(footer);
  }

  return card;
}

function createProjectCard(repo) {
  const card = document.createElement("div");
  card.className = "card";

  const isMusicTrack = Boolean(repo.song);
  const cardHeaderText = repo.language || repo.DAW || "N/A";
  const cardTitle = repo.name || repo.title || "Sin título";
  const description = repo.description || "No descripcion disponible";
  const cardLink = isMusicTrack ? null : repo.html_url || repo.link;
  const cardLinkText = "Ver Repositorio";

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
      playButton.textContent = "Reproducir pista de música";
      playButton.dataset.trackTitle = cardTitle;
      playButton.setAttribute("aria-label", `Reproducir ${cardTitle}`);
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
      "Programación Informática",
      "Herramientas de análisis y programación de datos creadas desde cero.",
      "../images/github.png",
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
      "Desarrollo de Juegos",
      "Experiencias interactivas, prototipos y jams de juego.",
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
      "Producción Musical",
      "Pistas, diseño de sonido y música para proyectos.",
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

    button.textContent = isPlaying
      ? "Pausar pista de musica"
      : "Reproducir pista de música";

    button.setAttribute(
      "aria-label",
      `${isPlaying ? "Pausar" : "Reproducir"} ${button.dataset.trackTitle}`,
    );
  });
}

/* UPDATE PLAYER BUTTON */

function updatePlayerButton() {
  if (!currentTrack) {
    playPauseBtn.textContent = "▶";
    return;
  }

  playPauseBtn.textContent = audioPlayer.paused ? "▶" : "⏸";
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
