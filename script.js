
lucide.createIcons();

const menuButton = document.getElementById('menu-button');
const closeButton = document.getElementById('close-button');
const mobileMenu = document.getElementById('mobile-menu');
const menuLinks = document.querySelectorAll('.menu-link');
const desktopLinks = document.querySelectorAll('.desktop-link');

function toggleMenu() {
    mobileMenu.classList.toggle('is-open');
    const isOpen = mobileMenu.classList.contains('is-open');
    // Prevent scrolling when the menu is open
    document.body.classList.toggle('overflow-hidden', isOpen);
}

menuButton.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleMenu);

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Close the menu after a link is clicked
        setTimeout(toggleMenu, 100);
    });
});

// Optional: Close menu when clicking desktop links (though not strictly necessary)
// desktopLinks.forEach(link => {
//     link.addEventListener('click', function(e) {
//     });
// });

document.getElementById('show-more-btn').addEventListener('click', function () {
    const extraProjects = document.getElementById('extra-projects');
    const githubBtn = document.getElementById('github-redirect-btn');
    const loadMoreBtn = this;

    // 1. Reveal the hidden projects
    extraProjects.classList.remove('hidden');

    // 2. Trigger smooth fade-in for projects
    setTimeout(() => {
        extraProjects.classList.add('opacity-100');
        extraProjects.classList.remove('opacity-0');
    }, 10);

    // 3. Hide the current button and show the GitHub button
    loadMoreBtn.classList.add('hidden');
    githubBtn.classList.remove('hidden');

    // 4. Trigger smooth fade-in for the new GitHub button
    setTimeout(() => {
        githubBtn.classList.add('opacity-100');
        githubBtn.classList.remove('opacity-0');
    }, 50);

    // Refresh icons if using Lucide
    if (window.lucide) lucide.createIcons();
});

