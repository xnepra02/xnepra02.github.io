document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('nav-mobile');
    const header = document.querySelector('header');

    // Otevření/zavření menu po kliknutí na ikonu
    navToggle.addEventListener('click', (event) => {
        event.stopPropagation();  // Prevents the click event from bubbling up to the document
        nav.classList.toggle('active');
    });

    // Zavření menu po kliknutí na odkaz
    const navLinks = document.querySelectorAll('#nav-mobile a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });

    // Zavření menu po kliknutí mimo něj
    document.addEventListener('click', (event) => {
        if (!nav.contains(event.target) && event.target !== navToggle) {
            nav.classList.remove('active');
        }
    });

    // Funkce pro sledování scrollování
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});