// ===== MOBILE NAV TOGGLE =====
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });

    // Close menu when clicking a link (mobile)
    navMenu.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
        });
    });
}

// ===== SMOOTH SCROLL (extra safety for some browsers) =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        if (targetId && targetId.length > 1) {
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
            }
        }
    });
});

// ===== FADE-IN ON SCROLL =====
const animatedElements = document.querySelectorAll(".animate-on-scroll");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    animatedElements.forEach(el => observer.observe(el));
} else {
    // Fallback: show all
    animatedElements.forEach(el => el.classList.add("in-view"));
}

// ===== TESTIMONIAL SLIDER =====
const slider = document.getElementById("testimonialSlider");
if (slider) {
    const track = slider.querySelector(".testimonial-track");
    const cards = slider.querySelectorAll(".testimonial-card");
    const prevBtn = document.getElementById("prevTestimonial");
    const nextBtn = document.getElementById("nextTestimonial");

    let index = 0;

    const updateSlider = () => {
        const width = slider.clientWidth;
        track.style.transform = `translateX(-${index * width}px)`;
    };

    const showPrev = () => {
        index = (index - 1 + cards.length) % cards.length;
        updateSlider();
    };

    const showNext = () => {
        index = (index + 1) % cards.length;
        updateSlider();
    };

    window.addEventListener("resize", updateSlider);
    prevBtn.addEventListener("click", showPrev);
    nextBtn.addEventListener("click", showNext);

    // Auto slide every 7 seconds
    setInterval(showNext, 7000);
}

// ===== FOOTER YEAR =====
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}