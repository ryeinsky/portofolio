// Micro-interaction for progress bars on scroll
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.dataset.width;
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.gradient-progress').forEach(bar => {
        const finalWidth = bar.classList.contains('w-[95%]') ? '95%' : 
                          bar.classList.contains('w-[90%]') ? '90%' : 
                          bar.classList.contains('w-[85%]') ? '85%' : '0%';
        bar.style.width = '0%';
        bar.dataset.width = finalWidth;
        bar.style.transition = 'width 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
        observer.observe(bar);
    });
});
