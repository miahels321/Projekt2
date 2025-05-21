// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Mobilni izbornik (Hamburger)
    const menuToggle = document.getElementById('mobile-menu');
    const mainNav = document.getElementById('main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            // Promjena ikone hamburgera u X i obrnuto (opcionalno)
            const icon = menuToggle.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                 menuToggle.setAttribute('aria-label', 'Zatvori izbornik');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                 menuToggle.setAttribute('aria-label', 'Otvori izbornik');
            }
        });
    }

    // Postavljanje aktivnog linka u navigaciji (jednostavna verzija)
    const currentLocation = window.location.pathname.split('/').pop(); // Dohvaća ime datoteke (npr. "o-nama.html")
    const navLinks = document.querySelectorAll('#main-nav ul li a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop();
        // Poseban slučaj za index.html
        if (currentLocation === '' && linkPath === 'index.html') {
             link.classList.add('active');
        } else if (linkPath === currentLocation) {
            link.classList.add('active');
        } else {
             link.classList.remove('active'); // Ukloni sa svih ostalih
        }
    });

    // Automatsko ažuriranje godine u footeru
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Dodatne JS funkcionalnosti po potrebi ---
    // Npr. validacija forme, smooth scroll, itd.

});