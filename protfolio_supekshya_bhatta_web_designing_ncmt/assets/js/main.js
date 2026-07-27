// =====================================================
// main.js - Simple JavaScript for the portfolio website
// =====================================================

// ---- Mobile menu toggle ----
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close the menu when a link is clicked (mobile)
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// ---- Set current year in footer ----
document.getElementById("year").textContent = new Date().getFullYear();

// ---- Load Skills from data/skills.json ----
async function loadSkills() {
  try {
    const response = await fetch("data/skills.json");
    const skills = await response.json();
    const skillsGrid = document.getElementById("skillsGrid");

    skillsGrid.innerHTML = skills
      .map(
        (skill) => `
        <div class="skill-card">
          <h3>${skill.name}</h3>
          <div class="skill-bar">
            <div class="skill-bar-fill" style="width: ${skill.level}%;"></div>
          </div>
        </div>
      `
      )
      .join("");
  } catch (error) {
    console.log("Could not load skills.json", error);
  }
}

// ---- Load Projects from data/projects.json ----
async function loadProjects() {
  try {
    const response = await fetch("data/projects.json");
    const projects = await response.json();
    const projectsGrid = document.getElementById("projectsGrid");

    projectsGrid.innerHTML = projects
      .map(
        (project) => `
        <div class="project-card">
          <img src="${project.image}" alt="${project.title}"
               onerror="this.src='https://via.placeholder.com/400x200?text=Project+Image'">
          <div class="project-card-body">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project &rarr;</a>
          </div>
        </div>
      `
      )
      .join("");
  } catch (error) {
    console.log("Could not load projects.json", error);
  }
}

loadSkills();
loadProjects();

// ---- Contact form (simple front-end only demo) ----
const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // In a real project you would send this data to a server here.
  console.log("Form submitted:", {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  });

  formSuccess.style.display = "block";
  contactForm.reset();

  setTimeout(() => {
    formSuccess.style.display = "none";
  }, 4000);
});
