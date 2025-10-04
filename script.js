// When the page loads adds loaded class for smooth opacity effect
window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
});

window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        document.body.classList.add('loaded');
    }
});

const snippets = [
    "dropdown-menu-toggle",
    // Add more folders here when you create new snippets
];

// Populate list automatically
const ul = document.getElementById("snippet-list");
snippets.forEach(folder => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = folder + '/index.html';
    console.log(a.href)
    a.textContent = folder.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());
    li.appendChild(a);
    ul.appendChild(li);
});

// Fade-out on link click
const links = document.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href.startsWith('http')) { // Only fade for local links
            e.preventDefault();
            document.body.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = href;
            }, 400); // Match CSS transition
        }
    });
});