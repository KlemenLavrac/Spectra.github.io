(() => {
    'use strict';

    const DEMO_EMAIL = 'info@spectra-analytics.com';

    const modal      = document.getElementById('demo-modal');
    const overlay    = document.getElementById('demo-modal-overlay');
    const closeBtn   = document.getElementById('demo-modal-close');
    const form       = document.getElementById('demo-form');
    const formWrap   = document.getElementById('demo-form-wrap');
    const success    = document.getElementById('demo-form-success');
    const successClose = document.getElementById('demo-success-close');

    function openModal() {
        if (!modal) return;
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        const first = modal.querySelector('input, select, textarea');
        if (first) setTimeout(() => first.focus(), 100);
    }

    function closeModal() {
        if (!modal) return;
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    window.openDemoModal = openModal;

    document.querySelectorAll('[data-demo-trigger]').forEach(el => {
        el.addEventListener('click', (e) => { e.preventDefault(); openModal(); });
    });

    if (overlay)      overlay.addEventListener('click', closeModal);
    if (closeBtn)     closeBtn.addEventListener('click', closeModal);
    if (successClose) successClose.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const v = (id) => (document.getElementById(id) || {}).value || '—';

            const subject = encodeURIComponent(
                'SPECTRA Demo Request — ' + v('df-name') + ' (' + v('df-company') + ')'
            );

            const body = encodeURIComponent([
                'Hi,',
                '',
                'I\'d like to request a demo of SPECTRA. Here are my details:',
                '',
                '──────────────────────────',
                'Name:              ' + v('df-name'),
                'Email:             ' + v('df-email'),
                'Company:           ' + v('df-company'),
                'Role / Title:      ' + v('df-role'),
                'Industry:          ' + v('df-industry'),
                'Company size:      ' + v('df-size'),
                'Batches per month: ' + v('df-batches'),
                'Currently using:   ' + v('df-current'),
                'Heard about us:    ' + v('df-referral'),
                '──────────────────────────',
                '',
                'Main challenge:',
                v('df-challenge') || '—',
                '',
                'Looking forward to hearing from you.',
            ].join('\n'));

            window.location.href = 'mailto:' + DEMO_EMAIL
                + '?subject=' + subject
                + '&body='    + body;

            // Show success message
            formWrap.style.display = 'none';
            success.style.display  = 'flex';
        });
    }
})();
