document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger");
    const menu = document.getElementById("nav-menu");

    burger.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
});

const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const message = document.getElementById("form-message");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();

    if (name === "" || phone === "") {
        message.textContent = "Заповніть всі поля!";
        message.style.color = "red";
        return;
    }

    if (phone.length < 10) {
        message.textContent = "Введіть правильний номер!";
        message.style.color = "red";
        return;
    }

    message.textContent = "Заявка відправлена ✅";
    message.style.color = "green";

    form.reset();
});

const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let current = 0;

function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {
    current++;
    if (current >= slides.length) current = 0;
    showSlide(current);
});

prevBtn.addEventListener("click", () => {
    current--;
    if (current < 0) current = slides.length - 1;
    showSlide(current);
});

const faders = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

faders.forEach(el => observer.observe(el));