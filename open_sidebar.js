// script.js
function openSidebar(htmlFile) {
    const sidebar = document.getElementById('sidebar');
    const sidebarContent = document.getElementById('sidebar-content');

    // Fetch and load content from another HTML file
    fetch(htmlFile)
        .then(response => response.text())
        .then(data => {
            sidebarContent.innerHTML = data;
            sidebar.classList.add('open');
        })
        .catch(error => {
            console.error('Error fetching content:', error);
        });
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('open');
}
