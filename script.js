
document.querySelectorAll('.project-img').forEach(img => {
    img.style.cursor = 'pointer'; // Make it look clickable
    img.addEventListener('click', () => {
        const url = img.getAttribute('data-url');
        if (url) window.open(url, '_blank'); // open in new tab
    });
});