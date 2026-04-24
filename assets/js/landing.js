(() => {
    'use strict';

    const scroller    = document.getElementById('main-scroller');
    const sections    = document.querySelectorAll('.snap-section');
    const navLetters  = document.querySelectorAll('.nav-letter');
    const progressBar = document.getElementById('scroll-progress');

    // ── Scroll to Explore button ──
    if (!scroller) return;

    const exploreBtn = document.getElementById('btn-explore');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            const first = document.getElementById('section-s');
            if (first) first.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // ── Intersection Observer — animations + letter nav ──
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('in-view');
            const id = entry.target.id;
            navLetters.forEach(l => l.classList.remove('active'));
            const match = document.querySelector('.nav-letter[data-target="' + id + '"]');
            if (match) match.classList.add('active');
        });
    }, { root: null, threshold: 0.3 });

    sections.forEach(s => observer.observe(s));

    // ── Letter nav: click + keyboard ──
    navLetters.forEach(letter => {
        const go = () => {
            const target = document.getElementById(letter.dataset.target);
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        };
        letter.addEventListener('click', go);
        letter.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); }
        });
    });

    // ── Scroll progress bar ──
    if (progressBar) {
        scroller.addEventListener('scroll', () => {
            const total = scroller.scrollHeight - scroller.clientHeight;
            progressBar.style.width = (total > 0 ? (scroller.scrollTop / total) * 100 : 0) + '%';
        }, { passive: true });
    }

    // ── Logo → scroll to top ──
    const logo = document.querySelector('.nav-logo');
    if (logo) {
        logo.addEventListener('click', (e) => {
            const hero = document.getElementById('hero');
            if (hero) { e.preventDefault(); hero.scrollIntoView({ behavior: 'smooth' }); }
        });
    }
})();
