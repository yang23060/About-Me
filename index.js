let educationBtn = document.getElementById("educationBtn");
let skillsBtn = document.getElementById("skillsBtn");
let experiencesBtn = document.getElementById("experiencesBtn");
let projectsBtn = document.getElementById("projectsBtn");


educationBtn.addEventListener("click", function() {
    window.location.href = "education.html";
});

skillsBtn.addEventListener("click", function() {
    window.location.href = "skills.html";
});

experiencesBtn.addEventListener("click", function() {
    window.location.href = "experiences.html";
});

projectsBtn.addEventListener("click", function() {
    window.location.href = "projects.html";
});
