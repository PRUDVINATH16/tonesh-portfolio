document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Intersection Observer for Cinematic Reveals
    const observerOptions = {
        threshold: 0.15, // Trigger when 15% visible
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach(el => observer.observe(el));

    // 2. Dynamic Copyright Year
    const yearSpan = document.createElement('span');
    yearSpan.innerText = ` ${new Date().getFullYear()}`;
    document.querySelector('.footer-left').appendChild(yearSpan);

    // 3. Smooth Scroll (Fallback for older browsers)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    console.log("%c EDITING PORTFOLIO LOADED ", "background: #ff2e2e; color: #000; font-weight: bold;");
});