/*PROJECT DATA*/

const PROGRESS_ENTRIES = [
  {
    title: "Donde todo Empezó...",
    time: "2019",
    description:
      "Descubrí la producción musical y comencé a explorar una variedad de instrumentos y a componer música en GarageBand. Este se convirtió en mi punto de partida, donde sentí por primera vez la chispa de mi amorosa pasión por la música.",
    skills: "Habilidades: GarageBand - Música",
  },
  {
    title: "Haciendo Crecer mis Raíces",
    time: "2020-2021",
    description:
      "Tomé un curso de producción musical para principiantes y aprendí los conceptos básicos de teoría musical, composición musical y obtuve acceso a Soundtrap. Obtuve acceso a una biblioteca completamente nueva de instrumentos, efectos, bucles y otros recursos.",
    skills: "Habilidades: Soundtrap - Teoría Musical - Producción Musical",
  },
  {
    title: "Construyendo mi Carrera Musical",
    time: "2022-2023",
    description:
      "Comencé a experimentar con la producción musical, lo que me llevó a hacer proyectos musicales, versiones de otras canciones y efectos de sonido. También comencé a hacer videos musicales para mis proyectos, aunque la mayoría los guardo para uso personal.",
    skills:
      "Habilidades: Composición de Canciones - Edición de Vídeos - Capcut",
  },
  {
    title: "Descubriendo Nuevas Pasiones",
    time: "Otoño de 2023",
    description:
      "Descubrí la Ciencia de la Computación y comencé a aprender los lenguajes clave (como HTML) necesarios para construir y dar estilo a sitios web. Aprendí los conceptos básicos de programación y realicé proyectos a pequeña escala.",
    skills: "Habilidades: HTML - CSS - Python - Programación",
  },
  {
    title: "Nuevos Comienzos",
    time: "Junio de 2024",
    description:
      "Me gradué de la escuela secundaria. Comencé a prepararme para hacer la transición a la universidad.",
    skills: "Premio: Diploma de Escuela Secundaria",
  },
  {
    title: "Primer Año - Construyendo un Nuevo Conjunto de Habilidades",
    time: "2024-2025",
    description:
      "Comencé a asistir a la Universidad George Fox. Actualmente estoy estudiando Ciencia de la Computación y haciendo una minoración en Teología con la concentración en Ministerios Cristianos. Aprendí más a fondo sobre diferentes lenguajes de programación y su uso. También tomé un curso de liderazgo cristiano donde aprendí a ser un líder de equipo en el campo cristiano.",
    skills:
      "Habilidades: Python - Java - Teología - Liderazgo - Programación Orientada a Objetos - PyCharm - IntelliJ IDEA",
  },
  {
    title: "Segundo Año - Amplificando el conocimiento",
    time: "Otoño de 2025",
    description:
      "Aprendí matemáticas discretas, combinatoria, algoritmos y más. Comencé a experimentar con FL Studio y el uso de instrumentos y recursos profesionales.",
    skills: "Habilidades: Matemáticas Discretas - FL Studio",
  },
  {
    title: "Segundo Año - Fe + Creaciones",
    time: "Primavera de 2026",
    description:
      "Tomé un curso de ciencia de datos donde aprendí a administrar conjuntos de datos, experimentar con ellos, modificar los valores y crear gráficos con ellos. Tomé un curso de desarrollo de juegos donde aprendí a diseñar y programar un videojuego funcional en un equipo de tres. Aquí es donde comenzamos nuestro proyecto 'Bluecloak', que es un juego independiente tipo roguelike 2D lleno de acción e intensidad. También trabajé en la banda sonora del juego en FL Studio. Durante este semestre, tomé un curso de Formación Espiritual, donde me conecté profundamente con Dios y aprendí sobre diferentes culturas y prácticas de otras denominaciones.",
    skills:
      "Habilidades: FL Studio - C# - Unity - Python - Aprendizaje automático - DataFrames - Análisis de datos - Hojas de cálculo - Gestión de datos - Diseño de sonido - Desarrollo de juegos - Diseño de juegos - Colaboración espiritual - Discipulado - Teología - VSCode - GitLab",
  },
  {
    title: "Productividad + Presentación",
    time: "Mayo de 2026",
    description:
      "Actualicé mi cuenta de GitHub con mis proyectos escolares. Comencé a trabajar en este sitio web de Portafolio para demostrar quién soy, tanto personal como profesionalmente. Reuní a un pequeño grupo para comenzar un nuevo proyecto de juego, que será un juego de rol de terror en 2D fuertemente basado en una historia. Creé una cuenta de SoundCloud y subí algunos de mis proyectos musicales allí.",
    skills:
      "Habilidades: HTML - CSS - JavaScript - Diseño web - UI/UX - Desarrollo Web - Diseño Web - SoundCloud - VSCode - GitHub - GitLab",
  },
  {
    title: "Metas futuras - ¿Qué sigue?",
    time: "~2031",
    description:
      "Durante los próximos cinco años, planeo ampliar mis habilidades a lo largo de mi trayectoria académica, hacer conexiones y completar y terminar proyectos. Me esfuerzo por utilizar mi conocimiento y creatividad para crear experiencias interactivas con las que el mundo pueda interactuar. También planeo incorporar mi fe a la fuerza laboral, predicando al mundo lo que Cristo nos enseñó. También planeo actualizar este sitio web con mis logros.",
    skills:
      "Metas Planeadas: Graduado de GFU - Bluecloak - Juego de Terror 2D - Actualizar Sitio Web de Portafolio - Lanzar Música en Plataformas de Streaming - Proyectos Escolares",
  },
];

/* TIMELINE CARD CREATOR */
function createTimelineEntry(entry, index) {
  const item = document.createElement("article");
  item.className = "timeline-entry";

  const date = document.createElement("div");
  date.className = "timeline-date";
  date.textContent = entry.time;

  const marker = document.createElement("div");
  marker.className = "timeline-marker";
  marker.textContent = " ";
  marker.setAttribute("aria-hidden", "true");

  const card = document.createElement("div");
  card.className = "timeline-card";

  const title = document.createElement("h2");
  title.textContent = entry.title;

  const description = document.createElement("p");
  description.textContent = entry.description;

  const skills = document.createElement("p");
  skills.className = "timeline-skills";
  skills.textContent = entry.skills;

  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(skills);

  item.appendChild(date);
  item.appendChild(marker);
  item.appendChild(card);

  return item;
}

function initializeTimeline() {
  const timeline = document.getElementById("timeline");
  if (!timeline) return;

  timeline.innerHTML = "";
  PROGRESS_ENTRIES.forEach((entry, index) => {
    timeline.appendChild(createTimelineEntry(entry, index));
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeTimeline);
} else {
  initializeTimeline();
}
