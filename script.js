/* ================= DARK MODE TOGGLE ================= */

const themeToggle = document.getElementById("themeToggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Change icon (moon <-> sun)
    const icon = themeToggle.querySelector("i");
    if (body.classList.contains("dark-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});

/* =============== MOBILE MENU =================== */

const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
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


