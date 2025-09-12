document.querySelectorAll('details').forEach(detail => {
    detail.addEventListener('toggle', () => {
        const paragraph = detail.querySelector('p');
        if (detail.open) {
            paragraph.style.animation = 'none';
            void paragraph.offsetHeight;
            paragraph.style.animation = 'fadeIn 0.5s ease';
            paragraph.style.opacity = '1';
        } else {
            paragraph.style.opacity = '0';
        }
    });
});