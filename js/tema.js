export function setupThemeToggle() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.dataset.theme = savedTheme;
        updateToggleButton(savedTheme === 'dark');
    } else if (prefersDarkScheme.matches) {
        document.documentElement.dataset.theme = 'dark';
        updateToggleButton(true);
    }

    themeToggleBtn.addEventListener('click', () => {
        const isDark = document.documentElement.dataset.theme === 'dark';
        document.documentElement.dataset.theme = isDark ? 'light' : 'dark';
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
        updateToggleButton(!isDark);
    });
}

function updateToggleButton(isDark) {
    const btn = document.getElementById('theme-toggle');
    btn.innerHTML = isDark ? '☀️' : '🌙';
    btn.setAttribute('aria-label', isDark ? 'Mudar para tema claro' : 'Mudar para tema escuro');
}