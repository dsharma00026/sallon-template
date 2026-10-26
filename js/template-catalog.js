/* ============================================================
   Template catalog
   Shared metadata for the design gallery (index.html) and the
   full-screen preview page (preview.html).
   ============================================================ */

(function () {
    'use strict';

    var templates = [
        {
            id: 'template-1',
            number: '01',
            name: 'Modern Luxury Editorial',
            kicker: 'Warm · editorial · boutique',
            description: 'An ivory-and-ink editorial layout with a stately serif, soft reveals and an effortlessly premium feel.',
            fonts: 'Cormorant Garamond + Inter',
            tags: ['Editorial', 'Luxury', 'Warm'],
            swatches: ['#f6f2ea', '#1d1b16', '#9a7b4f']
        },
        {
            id: 'template-3',
            number: '02',
            name: 'Botanical Beauty Studio',
            kicker: 'Organic · calm · nature-led',
            description: 'A soft, nature-infused design with forest greens, arched imagery and gently rounded service cards.',
            fonts: 'Fraunces + Manrope',
            tags: ['Botanical', 'Organic', 'Calm'],
            swatches: ['#fbfaf4', '#2f4a34', '#c06b4f']
        },
        {
            id: 'template-4',
            number: '03',
            name: 'Urban Pop Studio',
            kicker: 'Bold · young · fashion-forward',
            description: 'A high-energy, campaign-style layout with electric cobalt, oversized type and graphic colour blocks.',
            fonts: 'Space Grotesk + DM Sans',
            tags: ['Bold', 'Pop', 'Fashion'],
            swatches: ['#f2f1ea', '#3a4cff', '#ff4d2e']
        },
        {
            id: 'template-5',
            number: '04',
            name: 'Digital Beauty Lounge',
            kicker: 'Cinematic · polished · modern',
            description: 'A midnight-navy, app-like experience with crisp surfaces, a magenta accent and a premium digital feel.',
            fonts: 'Marcellus + Jost',
            tags: ['Cinematic', 'Modern', 'Premium'],
            swatches: ['#f4f4f8', '#101a3a', '#cf1a70']
        },
        {
            id: 'template-7',
            number: '05',
            name: 'Avant-Garde Campaign',
            kicker: 'Fashion · dramatic · art-directed',
            description: 'A high-fashion editorial with Didone type, stark ink-and-paper contrast and a single crimson accent.',
            fonts: 'Bodoni Moda + Instrument Sans',
            tags: ['Avant-garde', 'Dramatic', 'Fashion'],
            swatches: ['#f6f4f0', '#0e0d0c', '#c1121f']
        },
        {
            id: 'template-8',
            number: '06',
            name: 'Sunlit Coastal Studio',
            kicker: 'Coastal · relaxed · sunlit',
            description: 'A Mediterranean-inspired design with warm sand tones, soft arches and a calm ocean-aqua accent.',
            fonts: 'Marcellus + Mulish',
            tags: ['Coastal', 'Relaxed', 'Sunlit'],
            swatches: ['#f8f4ec', '#27808a', '#d9a24a']
        },
        {
            id: 'template-9',
            number: '07',
            name: 'Monochrome Barber',
            kicker: 'Minimal · sharp · confident',
            description: 'A high-contrast barber-studio layout with monochrome surfaces, brass details and strong, structured type.',
            fonts: 'Sora + Public Sans',
            tags: ['Barber', 'Monochrome', 'Sharp'],
            swatches: ['#f7f6f2', '#171717', '#a68a59']
        },
        {
            id: 'template-10',
            number: '08',
            name: 'The Beauty House',
            kicker: 'Rich · refined · understated',
            description: 'A cocoa-and-champagne beauty house with classic serif details, generous spacing and quiet luxury.',
            fonts: 'DM Serif Display + Figtree',
            tags: ['Refined', 'Cocoa', 'Classic'],
            swatches: ['#f8f5ef', '#493a32', '#d8c5a5']
        }
    ];

    var byId = {};
    templates.forEach(function (template, index) {
        template.index = index;
        byId[template.id] = template;
    });

    window.SalonTemplateCatalog = {
        templates: templates,
        get: function (id) {
            return byId[id] || null;
        },
        next: function (id, direction) {
            var current = byId[id] || templates[0];
            var step = direction === -1 ? -1 : 1;
            var index = (current.index + step + templates.length) % templates.length;
            return templates[index];
        }
    };
})();
