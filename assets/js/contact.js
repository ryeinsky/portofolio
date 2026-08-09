const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = e.target.querySelector('button');
        const originalText = btn.innerHTML;
        
        btn.innerHTML = '<span class="material-symbols-outlined animate-spin" data-icon="sync">sync</span> Sending...';
        btn.disabled = true;

        setTimeout(() => {
            btn.innerHTML = '<span class="material-symbols-outlined" data-icon="check_circle">check_circle</span> Sent Successfully';
            btn.classList.remove('bg-primary-container');
            btn.classList.add('bg-green-600');
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.classList.remove('bg-green-600');
                btn.classList.add('bg-primary-container');
                btn.disabled = false;
                e.target.reset();
            }, 3000);
        }, 1500);
    });
}

// Simple parallax effect for decorative circles
window.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    const deco = document.querySelector('.absolute.blur-3xl');
    if (deco) {
        deco.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
});
