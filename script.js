// Add a click event to gallery images to enlarge them in a new tab

document.querySelectorAll('#gallery img').forEach(img => {
    img.addEventListener('click', () => {
        window.open(img.src, '_blank');
    });
});
