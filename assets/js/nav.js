(() => {
    'use strict';

    const hamburger = document.getElementById('hamburger-btn');
    const drawer    = document.getElementById('mobile-drawer');
    const overlay   = document.getElementById('drawer-overlay');

    function openDrawer() {
        if (!drawer || !hamburger) return;
        drawer.classList.add('is-open');
        drawer.setAttribute('aria-hidden', 'false');
        hamburger.classList.add('is-open');
        hamburger.setAttribute('aria-expanded', 'true');
    }
    function closeDrawer() {
        if (!drawer || !hamburger) return;
        drawer.classList.remove('is-open');
        drawer.setAttribute('aria-hidden', 'true');
        hamburger.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
    }

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            drawer.classList.contains('is-open') ? closeDrawer() : openDrawer();
        });
    }
    if (overlay) overlay.addEventListener('click', closeDrawer);
    if (drawer) {
        drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));
    }
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeDrawer();
    });
})();
