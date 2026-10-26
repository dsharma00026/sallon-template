/* ============================================================
   Full-screen preview chrome
   - Marks embedded previews so the gallery iframes stay clean
   - Adds a small "All designs / next" dock for full-screen visits
   ============================================================ */

(function () {
    'use strict';

    var params = new URLSearchParams(window.location.search);
    var isEmbed = params.get('embed') === '1';

    if (isEmbed) {
        document.documentElement.classList.add('is-embed');
        return;
    }

    try {
        if (!storage.isAdminAuthenticated()) {
            document.documentElement.classList.add('is-public-preview');
        }
    } catch (error) {
        document.documentElement.classList.add('is-public-preview');
    }

    var catalog = window.SalonTemplateCatalog;
    if (!catalog || !catalog.templates.length) return;

    var requested = params.get('template');
    var selected = requested && catalog.get(requested) ? requested : null;

    if (!selected) {
        try {
            selected = storage.getSettings().selectedTemplate;
        } catch (error) {
            selected = null;
        }
    }

    var current = catalog.get(selected) || catalog.templates[0];
    var next = catalog.next(current.id, 1);
    var total = String(catalog.templates.length).padStart(2, '0');

    var businessName = '';
    try {
        var data = storage.initialize();
        businessName = (data.business && data.business.name) || '';
    } catch (error) {
        businessName = '';
    }

    document.title = businessName
        ? current.name + ' \u2014 ' + businessName
        : current.name + ' \u2014 Salon Website Preview';

    var dock = document.createElement('nav');
    dock.className = 'preview-dock';
    dock.setAttribute('aria-label', 'Design preview navigation');
    dock.innerHTML =
        '<a class="preview-dock__back" href="index.html">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">' +
                '<path d="M19 12H5"></path><path d="m11 18-6-6 6-6"></path>' +
            '</svg>' +
            '<span>All designs</span>' +
        '</a>' +
        '<span class="preview-dock__divider" aria-hidden="true"></span>' +
        '<span class="preview-dock__name">' +
            '<span class="preview-dock__number">' + current.number + ' / ' + total + '</span>' +
            '<span class="preview-dock__label">' + current.name + '</span>' +
        '</span>' +
        '<a class="preview-dock__next" href="preview.html?template=' + encodeURIComponent(next.id) + '">' +
            '<span>Next</span>' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">' +
                '<path d="M5 12h14"></path><path d="m13 6 6 6-6 6"></path>' +
            '</svg>' +
        '</a>';

    document.body.appendChild(dock);
})();
