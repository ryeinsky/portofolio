const previewContainer = document.getElementById('preview-container');
const achievementCards = document.querySelectorAll('.achievement-card');

if (previewContainer && achievementCards.length > 0) {
    const isMobile = () => window.innerWidth <= 768;

    achievementCards.forEach(card => {
        const previewSrc = card.getAttribute('data-preview');
        if (!previewSrc) return;

        // Desktop: Mouse Hover Events
        card.addEventListener('mouseenter', (e) => {
            if (!isMobile()) {
                showPreview(previewSrc, e);
            }
        });

        card.addEventListener('mousemove', (e) => {
            if (!isMobile()) {
                updatePreviewPosition(e);
            }
        });

        card.addEventListener('mouseleave', () => {
            if (!isMobile()) {
                hidePreview();
            }
        });

        // Mobile: Click/Touch Event
        card.addEventListener('click', (e) => {
            if (isMobile()) {
                e.stopPropagation();
                showPreview(previewSrc, e);
            }
        });
    });

    // Fungsi untuk menampilkan preview dengan fade-in animation
    function showPreview(imageSrc, event) {
        previewContainer.innerHTML = `
            <div class="preview-item">
                <img src="${imageSrc}" alt="Preview" />
            </div>
        `;
        previewContainer.style.display = 'block';
        previewContainer.style.opacity = '0';

        // Trigger reflow untuk memastikan transition bekerja
        previewContainer.offsetHeight;
        previewContainer.style.opacity = '1';

        updatePreviewPosition(event);
    }

    // Fungsi untuk mengupdate posisi preview mengikuti kursor (smooth floating effect dengan batas layar)
    function updatePreviewPosition(event) {
        const clientX = event.clientX || (event.touches && event.touches[0] ? event.touches[0].clientX : window.innerWidth / 2);
        const clientY = event.clientY || (event.touches && event.touches[0] ? event.touches[0].clientY : window.innerHeight / 2);

        const previewWidth = 260;
        const previewHeight = 220;
        const offsetX = 20;
        const offsetY = 20;

        let x = clientX + offsetX;
        let y = clientY + offsetY;

        if (x + previewWidth > window.innerWidth) {
            x = clientX - previewWidth - 10;
        }
        if (y + previewHeight > window.innerHeight) {
            y = clientY - previewHeight - 10;
        }

        x = Math.max(10, x);
        y = Math.max(10, y);

        previewContainer.style.left = x + 'px';
        previewContainer.style.top = y + 'px';
    }

    // Fungsi untuk menyembunyikan preview dengan fade-out animation
    function hidePreview() {
        previewContainer.style.opacity = '0';
        setTimeout(() => {
            previewContainer.style.display = 'none';
        }, 300);
    }

    // Close preview saat click di tempat lain pada mobile
    document.addEventListener('click', () => {
        if (isMobile()) {
            hidePreview();
        }
    });
}