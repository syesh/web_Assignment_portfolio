// 1. Dynamic Date Functionality for the Declaration
// This waits for the HTML to load before running
document.addEventListener('DOMContentLoaded', () => {
    
    // Set current date in the Bio-data page
    const dateSpan = document.getElementById('current-date');
    if (dateSpan) {
        const today = new Date();
        // Format: DD/MM/YYYY
        dateSpan.textContent = today.toLocaleDateString();
    }

    // 2. Dark Mode Toggle Functionality
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        // Toggle the class 'dark-mode' on the body
        body.classList.toggle('dark-mode');

        // Change button text based on mode
        if (body.classList.contains('dark-mode')) {
            themeToggle.textContent = '☀️ Light Mode';
        } else {
            themeToggle.textContent = '🌙 Dark Mode';
        }
    });
});