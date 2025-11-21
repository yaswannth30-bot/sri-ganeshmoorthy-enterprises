/* =========================
   MOBILE MENU TOGGLE
========================= */
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});


/* =========================
   DARK / LIGHT MODE
========================= */
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
}

// Toggle theme
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Save preference
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.removeItem("theme");
    }
});


/* =========================
   STAR RATING
========================= */
const stars = document.querySelectorAll("#starRating i");
const ratingInput = document.getElementById("ratingInput");
let selectedRating = 0;

stars.forEach((star) => {
    star.addEventListener("click", function () {
        selectedRating = this.getAttribute("data-value");
        ratingInput.value = selectedRating;

        stars.forEach(s => s.classList.remove("active"));

        for (let i = 0; i < selectedRating; i++) {
            stars[i].classList.add("active");
        }
    });
});


/* =========================
   CLOSE MOBILE MENU WHEN CLICKING A LINK
========================= */
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
    });
});
