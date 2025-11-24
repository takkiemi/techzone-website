// Burger menu functionality
const burger = document.getElementById('burger');
const navMenu = document.getElementById('nav-menu');

if (burger && navMenu) {
    burger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        burger.classList.toggle('active');
    });
}

// Form validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        // Name validation
        const name = document.getElementById('name');
        const nameError = document.getElementById('nameError');
        if (!name.value.trim()) {
            nameError.textContent = "Будь ласка, введіть ваше ім'я";
            isValid = false;
        } else {
            nameError.textContent = "";
        }
        
        // Email validation
        const email = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim()) {
            emailError.textContent = "Будь ласка, введіть ваш email";
            isValid = false;
        } else if (!emailRegex.test(email.value)) {
            emailError.textContent = "Будь ласка, введіть коректний email";
            isValid = false;
        } else {
            emailError.textContent = "";
        }
        
        // Message validation
        const message = document.getElementById('message');
        const messageError = document.getElementById('messageError');
        if (!message.value.trim()) {
            messageError.textContent = "Будь ласка, введіть повідомлення";
            isValid = false;
        } else {
            messageError.textContent = "";
        }
        
        if (isValid) {
            alert('Дякуємо за ваше повідомлення! Ми зв\'яжемося з вами найближчим часом.');
            contactForm.reset();
        }
    });
}

// Close menu when clicking on links
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        burger.classList.remove('active');
    });
});