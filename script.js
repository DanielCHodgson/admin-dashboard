const toggleTheme = document.getElementById('change-theme');

function toggleColorScheme() {
    const html = document.documentElement;
    const currentScheme = html.style.getPropertyValue('color-scheme');

    if (currentScheme === 'dark') {
        html.style.setProperty('color-scheme', 'light');
    } else {
        html.style.setProperty('color-scheme', 'dark');
    }
}

toggleTheme.addEventListener('click', toggleColorScheme);


const sidebar = document.querySelector(".sidebar");
const sidebarToggle = document.querySelector("#toggle-sidebar");
const body = document.body;

sidebarToggle.addEventListener("click", () => {
	sidebar.classList.toggle("visible");
});

