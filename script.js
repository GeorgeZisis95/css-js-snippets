const snippets = [
    "dropdown-menu-toggle",
];

const ul = document.getElementById("snippet-list");

snippets.forEach(folder => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `${folder}/index.html`;
    a.textContent = folder.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());
    li.appendChild(a);
    ul.appendChild(li);
});