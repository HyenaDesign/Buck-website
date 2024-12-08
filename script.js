// Hamburger menu toggle
const hamburgerMenu = document.getElementById('hamburger-menu');
const nav = document.querySelector('nav');

hamburgerMenu.addEventListener('click', () => {
    nav.classList.toggle('active');
});
