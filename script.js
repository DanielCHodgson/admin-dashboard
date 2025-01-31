const toggleButton = document.getElementById('change-theme');

function toggleColorScheme() {
    const html = document.documentElement;
    const currentScheme = html.style.getPropertyValue('color-scheme');

    if (currentScheme === 'dark') {
        html.style.setProperty('color-scheme', 'light');
    } else {
        html.style.setProperty('color-scheme', 'dark');
    }
}

toggleButton.addEventListener('click', toggleColorScheme);