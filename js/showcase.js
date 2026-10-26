/* ============================================================
   Design gallery
   Builds the template cards, lazy-loads the live iframe previews
   and scales each desktop preview down into its card.
   ============================================================ */

(function () {
    'use strict';

    var PREVIEW_WIDTH = 1440;

    function escapeHtml(text) {
        return String(text === null || text === undefined ? '' : text)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function buildSwatches(colors, name) {
        return (colors || []).map(function (color) {
            return '<span class="design-swatch" style="background:' + escapeHtml(color) + '"></span>';
        }).join('') + '<span class="visually-hidden">' + escapeHtml(name) + ' palette</span>';
    }

    function buildCard(template, index) {
        var href = 'preview.html?template=' + encodeURIComponent(template.id);
        var tags = (template.tags || []).map(function (tag) {
            return '<span class="design-tag">' + escapeHtml(tag) + '</span>';
        }).join('');

        return [
            '<article class="design-card" data-template-card="' + escapeHtml(template.id) + '">',
                '<div class="design-card__top">',
                    '<span class="design-card__number">' + escapeHtml(template.number) + '</span>',
                    '<div class="design-card__identity">',
                        '<h3>' + escapeHtml(template.name) + '</h3>',
                        '<p>' + escapeHtml(template.kicker) + '</p>',
                    '</div>',
                    '<div class="design-card__swatches">' + buildSwatches(template.swatches, template.name) + '</div>',
                '</div>',
                '<div class="design-card__frame">',
                    '<div class="design-card__loader" aria-hidden="true"></div>',
                    '<iframe data-src="' + escapeHtml(href) + '&amp;embed=1" ' +
                        'title="' + escapeHtml(template.name) + ' live preview" ' +
                        'loading="lazy" scrolling="no" tabindex="-1" aria-hidden="true" inert></iframe>',
                    '<a class="design-card__frame-link" href="' + escapeHtml(href) + '" target="_blank" rel="noopener" ' +
                        'aria-label="Open the ' + escapeHtml(template.name) + ' design in a new tab"></a>',
                    '<span class="design-card__live"><i aria-hidden="true"></i> Live preview</span>',
                '</div>',
                '<div class="design-card__bottom">',
                    '<div class="design-card__meta">',
                        '<p class="design-card__desc">' + escapeHtml(template.description) + '</p>',
                        '<div class="design-card__details">',
                            tags,
                            '<span class="design-card__fonts">' + escapeHtml(template.fonts) + '</span>',
                        '</div>',
                    '</div>',
                    '<a class="design-card__preview" href="' + escapeHtml(href) + '" target="_blank" rel="noopener">',
                        'Preview',
                        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">',
                            '<path d="M7 17 17 7"></path>',
                            '<path d="M8 7h9v9"></path>',
                        '</svg>',
                    '</a>',
                '</div>',
            '</article>'
        ].join('');
    }

    function fitFrame(frame) {
        var iframe = frame.querySelector('iframe');
        if (!iframe) return;
        var scale = frame.clientWidth / PREVIEW_WIDTH;
        if (!scale || !Number.isFinite(scale)) return;
        iframe.style.transform = 'scale(' + scale + ')';
        frame.style.setProperty('--preview-scale', String(scale));
    }

    function setupPreviewFrames() {
        var frames = Array.prototype.slice.call(document.querySelectorAll('.design-card__frame'));

        frames.forEach(fitFrame);

        if (typeof ResizeObserver !== 'undefined') {
            var resizeObserver = new ResizeObserver(function (entries) {
                entries.forEach(function (entry) {
                    fitFrame(entry.target);
                });
            });
            frames.forEach(function (frame) {
                resizeObserver.observe(frame);
            });
        } else {
            var resizeTimer = null;
            window.addEventListener('resize', function () {
                window.clearTimeout(resizeTimer);
                resizeTimer = window.setTimeout(function () {
                    frames.forEach(fitFrame);
                }, 120);
            });
        }

        var loaders = {};

        function markLoaded(iframe) {
            var card = iframe.closest('.design-card');
            if (!card) return;
            card.classList.add('is-loaded');
            var timer = loaders[iframe.dataset.loadId];
            if (timer) {
                window.clearTimeout(timer);
                delete loaders[iframe.dataset.loadId];
            }
        }

        function startFrame(iframe) {
            var src = iframe.getAttribute('data-src');
            if (!src) return;
            iframe.removeAttribute('data-src');
            iframe.addEventListener('load', function () {
                markLoaded(iframe);
            });
            loaders[iframe.dataset.loadId] = window.setTimeout(function () {
                markLoaded(iframe);
            }, 4000);
            iframe.src = src;
        }

        var iframes = Array.prototype.slice.call(document.querySelectorAll('.design-card__frame iframe[data-src]'));
        iframes.forEach(function (iframe, index) {
            iframe.dataset.loadId = 'preview-' + index;
        });

        if (typeof IntersectionObserver === 'undefined') {
            iframes.forEach(startFrame);
            return;
        }

        var lazyObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                startFrame(entry.target);
                observer.unobserve(entry.target);
            });
        }, { rootMargin: '700px 0px', threshold: 0.01 });

        iframes.forEach(function (iframe) {
            lazyObserver.observe(iframe);
        });
    }

    function loadBusinessName() {
        var name = null;
        try {
            var data = storage.initialize();
            if (data && data.business && data.business.name) {
                name = data.business.name;
            }
        } catch (error) {
            console.warn('Could not load business name for the gallery:', error);
        }

        if (!name) return;
        document.querySelectorAll('[data-business-name]').forEach(function (node) {
            node.textContent = name;
        });
    }

    function init() {
        var catalog = window.SalonTemplateCatalog;
        var grid = document.getElementById('design-grid');
        if (!catalog || !grid) return;

        var templates = catalog.templates;
        grid.innerHTML = templates.map(buildCard).join('');

        document.querySelectorAll('[data-showcase-count]').forEach(function (node) {
            node.textContent = String(templates.length).padStart(2, '0');
        });

        loadBusinessName();
        setupPreviewFrames();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
