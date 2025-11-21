// MOBILE MENU TOGGLE
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle ? themeToggle.querySelector("i") : null;

// Mobile menu open/close
if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });

    // Close menu when a link is clicked (on mobile)
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
        });
    });
}

// DARK / LIGHT THEME TOGGLE
function setTheme(isDark) {
    if (isDark) {
        document.body.classList.add("dark-mode");
        if (themeIcon) {
            themeIcon.classList.remove("fa-moon");
            themeIcon.classList.add("fa-sun");
        }
        localStorage.setItem("sg_theme", "dark");
    } else {
        document.body.classList.remove("dark-mode");
        if (themeIcon) {
            themeIcon.classList.remove("fa-sun");
            themeIcon.classList.add("fa-moon");
        }
        localStorage.setItem("sg_theme", "light");
    }
}

// Load saved theme
const savedTheme = localStorage.getItem("sg_theme");
if (savedTheme === "dark") {
    setTheme(true);
} else {
    setTheme(false);
}

// Toggle on button click
if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const isDark = !document.body.classList.contains("dark-mode");
        setTheme(isDark);
    });
}
