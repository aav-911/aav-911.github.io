/*PROJECT DATA*/

const PROGRESS_ENTRIES = [
  {
    title: "Where it all Started...",
    time: "2019",
    description:
      "Discovered music production and started exploring a variety of instruments and composing music on GarageBand. This became my starting point, where I first felt the spark of my loving passion for music.",
    skills: "Skills: GarageBand - Music",
  },
  {
    title: "Growing My Roots",
    time: "2020-2021",
    description:
      "Took a beginner music production course and learned the basics of music theory and music composition, and gained access to Soundtrap. Gained access to a whole new library of instruments, effects, loops, and other resources.",
    skills: "Skills: Soundtrap - Music Theory - Music Production",
  },
  {
    title: "Building my Music Career",
    time: "2022-2023",
    description:
      "Began experimenting with music production, which resulted in me making music projects, covers of other songs, and sound effects. Also started making music videos for my projects, although I keep most of them for personal use.",
    skills: "Skills: Song-writing - Video-editing - Capcut",
  },
  {
    title: "Discovering New Passions",
    time: "Fall 2023",
    description:
      "Discovered Computer Science and began learning key languages (such as HTML) needed to build and style websites. Learned the basics of programming and made small-scale projects.",
    skills: "Skills: HTML - CSS - Python - Programming",
  },
  {
    title: "New Beginnings",
    time: "June 2024",
    description:
      "Graduated from high school. Began preparing to make my transition into college.",
    skills: "Award: High School Diploma",
  },
  {
    title: "Freshman Year - Building a New Skill Set",
    time: "2024-2025",
    description:
      "Started attending George Fox University. Currently majoring in Computer Science and minoring in Theology with a concentration in Christian Ministries. Learned more in depth about different programming languages and their usage. Also took a Christian leadership course where I learned to be a team leader in the Christian workforce.",
    skills:
      "Skills: Python - Java - Theology - Leadership - Object-Oriented Programming - PyCharm - IntelliJ IDEA",
  },
  {
    title: "Sophomore Year - Amplifying Knowledge",
    time: "Fall 2025",
    description:
      "Learned discrete mathematics, combinatorics, algorithms and more. Started experimenting with FL Studio and the usage of professional instruments and resources.",
    skills: "Skills: Discrete Math - FL Studio",
  },
  {
    title: "Sophomore Year - Faith + Creations",
    time: "Spring 2026",
    description:
      "Took a Data Science course where I learned how to manage datasets, experiment with them, modify their values, and create graphics with them. Took a Game Development course where I learned how to design and program a working video game in a team of three. This is where we started our 'Bluecloak' project, which is a 2D roguelike indie game filled with action and intensity. I also worked on the soundtrack of the game in FL Studio. During this term, I took a Spiritual Formation course, where I deeply connected with God and learned about different cultures and practices from other denominations.",
    skills:
      "Skills: FL Studio - C# - Unity - Python - Machine Learning - DataFrames - Data Analysis - Spreadsheets - Data Management - Sound Design - Game Development - Game Design - Spiritual Collaboration - Discipleship - Theology - VSCode - GitLab",
  },
  {
    title: "Productivity + Presentation",
    time: "May 2026",
    description:
      "Polished my GitHub account with my school projects. Started working on this Portfolio Website to demonstrate who I am, both personally and professionally. Gathered a small group to start a new game project, which will be a 2D RPG Horror that's heavily story-driven. Made a SoundCloud account and uploaded some of my music projects there.",
    skills:
      "Skills: HTML - CSS - JavaScript - Web-Design - UI/UX - Web-Development - Web-Design - SoundCloud - VSCode - GitHub - GitLab",
  },
  {
    title: "Future Goals - What's Next..?",
    time: "~2031",
    description:
      "For the next five years, I plan on expanding my skill set through my academic journey, making connections, and completing projects. I strive to use my knowledge and creativity to build interactive experiences for the world to interact with. I also plan on incorporating my faith into the workforce, preaching to the world what Christ taught us. I also plan on updating this website with my accomplishments.",
    skills:
      "Milestones Planned: Graduate from GFU - Bluecloak - 2D Horror Game - Update Portfolio Website - Release Music on Streaming Platforms - School Projects",
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
