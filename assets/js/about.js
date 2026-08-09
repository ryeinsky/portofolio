// Micro-interaction for Back to Top button
const backToTop = document.getElementById('backToTop');
if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.remove('opacity-0');
            backToTop.classList.add('opacity-100');
        } else {
            backToTop.classList.remove('opacity-100');
            backToTop.classList.add('opacity-0');
        }
    });
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Simple Fade-in Observer for bento cards
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
    });
}, observerOptions);

document.querySelectorAll('.bento-card').forEach(card => {
    card.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-8');
    observer.observe(card);
});
