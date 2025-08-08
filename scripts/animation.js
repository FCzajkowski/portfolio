const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const projectElements = document.querySelectorAll('.project');
projectElements.forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
});
