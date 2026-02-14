lucide.createIcons();

// --- Navigation Logic ---
const menuButton = document.getElementById('menu-button');
const closeButton = document.getElementById('close-button');
const mobileMenu = document.getElementById('mobile-menu');
const menuLinks = document.querySelectorAll('.menu-link');

function toggleMenu() {
    mobileMenu.classList.toggle('is-open');
    const isOpen = mobileMenu.classList.contains('is-open');
    document.body.classList.toggle('overflow-hidden', isOpen);
}

menuButton?.addEventListener('click', toggleMenu);
closeButton?.addEventListener('click', toggleMenu);

menuLinks.forEach(link => {
    link.addEventListener('click', () => setTimeout(toggleMenu, 100));
});

// --- Projects "Show More" Logic (Smooth Transition) ---
document.getElementById('show-more-btn').addEventListener('click', function () {
    const extraProjects = document.getElementById('extra-projects');
    const githubBtn = document.getElementById('github-redirect-btn');
    const loadMoreBtn = this;

    // 1. Hide the Load More button first (Fade out)
    loadMoreBtn.classList.add('opacity-0', 'pointer-events-none');

    setTimeout(() => {
        loadMoreBtn.classList.add('hidden');
        
        // 2. Prepare the GitHub button
        githubBtn.classList.remove('hidden');
        
        // 3. Reveal extra projects
        // Remove 'hidden' first, then use a tiny timeout to trigger transition
        extraProjects.classList.remove('hidden');
        
        requestAnimationFrame(() => {
            extraProjects.classList.add('opacity-100');
            extraProjects.classList.remove('opacity-0');
            githubBtn.classList.add('opacity-100');
            githubBtn.classList.remove('opacity-0');
        });

        // 4. Re-run Lucide for new icons
        if (window.lucide) lucide.createIcons();
    }, 300); // Wait for the loadMoreBtn fade-out to finish
});

// --- Unified Scroll Listener (Performance Boost) ---
window.addEventListener('scroll', () => {
    // 1. Progress Bar
    const progressBar = document.getElementById('scroll-progress');
    if (progressBar) {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    }

    // 2. Active Section / Nav Dots
    const sections = document.querySelectorAll('section, main');
    const navDots = document.querySelectorAll('.nav-dot');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= (sectionTop - 250)) {
            current = section.getAttribute('id') || 'home';
        }
    });

    navDots.forEach(dot => {
        dot.classList.toggle('active', dot.getAttribute('data-section') === current);
    });
});

// --- Viewport Zoom Logic ---
if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', () => {
        const img = document.querySelector('.dynamic-image');
        if (img) {
            img.classList.toggle('is-zoomed', window.visualViewport.scale > 1);
        }
    });
}