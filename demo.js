// Get the theme toggle button
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    updateToggleIcon(savedTheme);
}

// Add click event for toggling theme
themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme); // Save preference
    updateToggleIcon(currentTheme);
});

// Update the icon based on the theme
function updateToggleIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const navContainer = document.querySelector(".nav-container");
    const hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", () => {
        navContainer.classList.toggle("expanded");
        navContainer.classList.toggle("collapsed");
    });
});
