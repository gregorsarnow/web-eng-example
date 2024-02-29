document.getElementById('darkmodeBtn').addEventListener('click', function(event) {
    if (document.body.classList.contains('darkmode')) {
        document.body.classList.remove('darkmode');
        event.target.textContent = 'Switch to dark mode';
    } else {
        document.body.classList.add('darkmode');
        event.target.textContent = 'Switch to light mode';
    }
});