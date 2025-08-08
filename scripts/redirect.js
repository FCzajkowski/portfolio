document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.header_button');
    if (buttons.length >= 3) {
        // Github
        buttons[0].onclick = () => window.location.href = 'https://github.com/FCzajkowski';
        // Twitter (X)
        buttons[1].onclick = () => window.location.href = 'https://x.com/f_czajkowski';
        // Email
        buttons[2].onclick = () => {
            navigator.clipboard.writeText('FCzajkowski@proton.me');
            alert('Email copied to clipboard!');
        };
    }

    // Project h2 redirects (robust mapping)
    const projectMap = {
        'Hajime Framework - 2025': 'https://fczajkowski.github.io/hajime-website/',
        'NimbleDB - 2025': 'https://github.com/FCzajkowski/NimbleDB',
        'Greenflow - 2024': 'https://github.com/FCzajkowski/GreenFlow---Oficjalne-Repozytorium',
        'Gokart Booking - 2024': 'https://fczajkowski.github.io/gokart-booking/'
    };
    document.querySelectorAll('.project h2').forEach(h2 => {
        h2.style.cursor = 'pointer';
        h2.onclick = () => {
            const url = projectMap[h2.textContent.trim()];
            if (url) {
                window.location.href = url;
            } else {
                console.log('No redirect URL for:', h2.textContent.trim());
            }
        };
    });
});