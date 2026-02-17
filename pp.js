/* MOBILE MENU */
function toggleMenu() {
    const nav = document.querySelector(".nav-links");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

/* PAGE LOADER */
window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
});

/* TYPING ANIMATION */
const texts = ["Web Developer", "Full-Stack Developer", "Java Developer"];
let textIndex = 0;
let charIndex = 0;
const typing = document.getElementById("typing");

function type() {
    if (charIndex < texts[textIndex].length) {
        typing.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (charIndex > 0) {
        typing.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 60);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 300);
    }
}

type();

/* SCROLL PROGRESS BAR */
window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    document.getElementById("progress-bar").style.width =
        (scrollTop / height) * 100 + "%";
});

/* SCROLL REVEAL */
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    const trigger = window.innerHeight * 0.8;

    sections.forEach(section => {
        if (section.getBoundingClientRect().top < trigger) {
            section.classList.add("show");
        }
    });
});

/* DARK / LIGHT TOGGLE */
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    toggleBtn.textContent =
        document.body.classList.contains("light") ? "☀️" : "🌙";
});