/* ============================================================
   Shared site widgets
   Injects two things into every rendered template:
     1. A WhatsApp call-to-action button in the header
     2. A Google Map + address block directly above the footer
   Called by js/template.js right after a template renders.
   ============================================================ */

(function () {
    'use strict';

    var WA_ICON = '<svg class="site-wa-btn__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
        '<path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z"></path><path d="M12.04 2.02c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.41 1.26 4.85L2 22l5.31-1.39a9.9 9.9 0 0 0 4.73 1.2h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04a9.9 9.9 0 0 0-7.05-2.79zm0 18.21h-.01a8.26 8.26 0 0 1-4.21-1.15l-.3-.18-3.12.82.83-3.05-.2-.31a8.24 8.24 0 0 1-1.27-4.4c0-4.55 3.71-8.25 8.27-8.24 2.2 0 4.28.86 5.83 2.42a8.19 8.18 0 0 1 2.41 5.83c0 4.55-3.7 8.24-8.24 8.24z"></path></svg>';

    function digitsOnly(value) {
        return String(value || '').replace(/[^0-9]/g, '');
    }

    function pickAddress(contact, business) {
        if (contact.address) return contact.address;
        return [business.address, business.city, business.country].filter(Boolean).join(', ');
    }

    function buildWhatsAppUrl(contact, business) {
        var number = digitsOnly(contact.whatsapp || contact.phone);
        if (!number) return '';
        var name = (business && business.name) || 'there';
        var message = 'Hi ' + name + ', I would like to book an appointment.';
        return 'https://wa.me/' + number + '?text=' + encodeURIComponent(message);
    }

    function injectHeaderCta(data) {
        var root = document.getElementById('template-root') || document;
        var adminBtn = root.querySelector('.site-admin-btn');
        var actions = adminBtn ? adminBtn.parentElement : null;
        if (!actions || actions.querySelector('.site-wa-btn')) return;

        var url = buildWhatsAppUrl(data.contact || {}, data.business || {});
        var btn = document.createElement('a');
        btn.className = 'site-wa-btn';
        btn.setAttribute('aria-label', 'Chat with us on WhatsApp');
        if (url) {
            btn.href = url;
            btn.target = '_blank';
            btn.rel = 'noopener';
        } else {
            btn.href = 'admin.html';
            btn.title = 'Add a WhatsApp number in the admin panel';
        }
        btn.innerHTML = WA_ICON + '<span class="site-wa-btn__label">WhatsApp</span>';

        var anchor = actions.querySelector('[class*="header__cta"]') || actions.querySelector('button');
        if (anchor) actions.insertBefore(btn, anchor);
        else actions.appendChild(btn);
    }

    function injectMap(data) {
        var root = document.getElementById('template-root') || document;
        var footer = root.querySelector('footer[class$="-footer"]');
        if (!footer || !footer.parentNode) return;
        if (footer.parentNode.querySelector('.site-map')) return;

        var contact = data.contact || {};
        var business = data.business || {};
        var address = pickAddress(contact, business);
        if (!address) return;

        var embed = 'https://www.google.com/maps?q=' + encodeURIComponent(address) + '&output=embed';
        var directions = contact.googleMapsUrl ||
            'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(address);

        var section = document.createElement('section');
        section.className = 'site-map';
        section.setAttribute('aria-label', 'Location and address');
        section.innerHTML =
            '<div class="site-map__inner">' +
                '<div class="site-map__info">' +
                    '<p class="site-map__eyebrow">Find us</p>' +
                    '<h2 class="site-map__title">Visit the studio</h2>' +
                    '<p class="site-map__address">' + escapeHtml(address) + '</p>' +
                    '<a class="site-map__directions" href="' + escapeHtml(contact.googleMapsUrl || 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(address)) + '" target="_blank" rel="noopener">Get directions</a>' +
                '</div>' +
                '<div class="site-map__frame">' +
                    '<iframe src="' + embed + '" title="Map showing ' + escapeHtml(address) + '" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>' +
                '</div>' +
            '</div>';

        footer.parentNode.insertBefore(section, footer);
    }

    function enhance(data) {
        data = data || {};
        try {
            injectHeaderCta(data);
        } catch (error) {
            console.error('WhatsApp CTA injection failed:', error);
        }
        // The map sits far below the fold and is expensive to load. Skip it
        // inside the small live previews used by the design gallery.
        if (document.documentElement.classList.contains('is-embed')) return;
        try {
            injectMap(data);
        } catch (error) {
            console.error('Map injection failed:', error);
        }
    }

    window.SiteWidgets = { enhance: enhance };
})();
