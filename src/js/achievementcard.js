const previewContainer = document.getElementById('preview-container');
        const achievementCards = document.querySelectorAll('.achievement-card');
        
        // Cek apakah device adalah mobile (touch screen)
        const isMobile = () => window.innerWidth <= 768 || 'ontouchstart' in window;
        
        achievementCards.forEach(card => {
            const previewSrc = card.getAttribute('data-preview');
            
            if (!previewSrc) return;
            
            // Desktop: Mouse Events
            if (!isMobile()) {
                card.addEventListener('mouseenter', (e) => {
                    showPreview(previewSrc, e);
                });
                
                card.addEventListener('mousemove', (e) => {
                    updatePreviewPosition(e);
                });
                
                card.addEventListener('mouseleave', () => {
                    hidePreview();
                });
            } 
            // Mobile: Touch/Click Events
            else {
                card.addEventListener('click', (e) => {
                    e.stopPropagation();
                    showPreview(previewSrc, e);
                });
            }
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
        
        // Fungsi untuk mengupdate posisi preview mengikuti kursor (smooth floating effect)
        function updatePreviewPosition(event) {
            const offsetX = 20;
            const offsetY = 20;
            const x = event.clientX + offsetX;
            const y = event.clientY + offsetY;
            
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
        
        // Close preview saat click di tempat lain
        document.addEventListener('click', () => {
            if (isMobile()) {
                hidePreview();
            }
        });