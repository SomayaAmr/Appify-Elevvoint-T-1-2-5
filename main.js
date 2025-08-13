// Sidebar toggle
const toggleBtn = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Light/Dark mode
const themeToggle = document.getElementById('theme-toggle');
let isDark = true;

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('bg-dark');
    document.body.classList.toggle('text-white');

    document.querySelectorAll('section, footer').forEach(el => {
        el.classList.toggle('bg-dark');
        el.classList.toggle('text-white');
        el.classList.toggle('bg-light');
    });

    isDark = !isDark;
    themeToggle.textContent = isDark ? "🌙 Dark Mode" : "☀ Light Mode";
});
