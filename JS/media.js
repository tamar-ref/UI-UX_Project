document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('lightbox-overlay');
    const lightboxImg = overlay.querySelector('img');
    const closeBtn = document.getElementById('lightbox-close');
    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            overlay.style.display = 'flex';
        });
    });
    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
        lightboxImg.src = '';
    });
});