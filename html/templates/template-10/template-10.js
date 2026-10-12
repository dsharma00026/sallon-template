(function () {
    const TEMPLATE_HTML = `
    <div class="t10-status" id="status-banner" hidden></div>

    <div id="t10-shell" data-shell="template-10">
    <header class="t10-header" id="t10-header">
        <div class="t10-container t10-header__inner">
            <a class="t10-brand" href="#t10-hero">
                <span class="t10-brand__name" id="t10-brand"></span>
                <span class="t10-brand__tag" id="t10-brand-tag"></span>
            </a>
            <nav class="t10-nav" id="t10-nav" aria-label="Primary">
                <ul class="t10-nav__list">
                    <li><a href="#t10-services">Services</a></li>
                    <li><a href="#t10-packages">Packages</a></li>
                    <li><a href="#t10-team">Team</a></li>
                    <li><a href="#t10-gallery">Gallery</a></li>
                    <li><a href="#t10-testimonials">Reviews</a></li>
                    <li><a href="#t10-visit">Visit</a></li>
                </ul>
            </nav>
            <div class="t10-header__actions">
                <a class="site-admin-btn" data-admin-link href="admin.html" aria-label="Admin panel" title="Admin panel">
                    <svg class="site-admin-btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect></svg>
                    <span class="site-admin-btn__label">Admin</span>
                </a>
                <a class="t10-btn t10-btn--solid t10-header__cta" href="#t10-booking">Book now</a>
                <button class="t10-menu-toggle" id="t10-menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="t10-nav">
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </header>
    <div class="t10-nav-scrim" id="t10-nav-scrim"></div>

    <main>
        <section class="t10-hero" id="t10-hero">
            <div class="t10-container t10-hero__inner">
                <div class="t10-hero__copy">
                    <p class="t10-eyebrow" id="t10-hero-eyebrow"></p>
                    <h1 class="t10-hero__title" id="t10-hero-title"></h1>
                    <p class="t10-hero__lede" id="t10-hero-lede"></p>
                    <div class="t10-hero__actions">
                        <a class="t10-btn t10-btn--solid" href="#t10-booking">Book an appointment</a>
                        <a class="t10-btn t10-btn--ghost" href="#t10-services">Explore services</a>
                    </div>
                    <p class="t10-hero__meta" id="t10-hero-meta"></p>
                </div>
                <div class="t10-hero__figure">
                    <span class="t10-hero__label" id="t10-hero-label" aria-hidden="true"></span>
                    <div class="t10-hero__media" id="t10-hero-media"></div>
                    <span class="t10-hero__rating" id="t10-hero-rating" hidden></span>
                </div>
            </div>
        </section>

        <section class="t10-section t10-intro" id="t10-intro" data-reveal>
            <div class="t10-container t10-intro__inner">
                <div class="t10-intro__lead">
                    <p class="t10-eyebrow">The house</p>
                    <p class="t10-intro__text" id="t10-intro-text"></p>
                </div>
                <aside class="t10-intro__facts" id="t10-intro-facts"></aside>
            </div>
        </section>

        <section class="t10-section t10-services" id="t10-services" data-reveal>
            <div class="t10-container">
                <div class="t10-section__head">
                    <div>
                        <p class="t10-eyebrow">Services &amp; pricing</p>
                        <h2 class="t10-h2">The treatment menu</h2>
                    </div>
                    <p class="t10-section__count" id="t10-services-count"></p>
                </div>
                <div class="t10-services__list" id="t10-services-list"></div>
            </div>
        </section>

        <section class="t10-signature" id="t10-signature" data-reveal hidden>
            <div class="t10-container t10-signature__inner">
                <div class="t10-signature__media" id="t10-signature-media"></div>
                <div class="t10-signature__body" id="t10-signature-body"></div>
            </div>
        </section>

        <section class="t10-section t10-packages" id="t10-packages" data-reveal>
            <div class="t10-container">
                <div class="t10-section__head">
                    <div>
                        <p class="t10-eyebrow">Curated bundles</p>
                        <h2 class="t10-h2">Packages</h2>
                    </div>
                </div>
                <div class="t10-packages__list" id="t10-packages-list"></div>
            </div>
        </section>

        <section class="t10-section t10-team" id="t10-team" data-reveal>
            <div class="t10-container">
                <div class="t10-section__head">
                    <div>
                        <p class="t10-eyebrow t10-eyebrow--light">The artisans</p>
                        <h2 class="t10-h2">Meet the team</h2>
                    </div>
                </div>
                <div class="t10-team__grid" id="t10-team-grid"></div>
            </div>
        </section>

        <section class="t10-section t10-gallery" id="t10-gallery" data-reveal>
            <div class="t10-container">
                <div class="t10-section__head">
                    <div>
                        <p class="t10-eyebrow">Portfolio</p>
                        <h2 class="t10-h2">Recent work</h2>
                    </div>
                </div>
                <div class="t10-gallery__grid" id="t10-gallery-list"></div>
            </div>
        </section>

        <section class="t10-section t10-testimonials" id="t10-testimonials" data-reveal>
            <div class="t10-container">
                <div class="t10-section__head">
                    <div>
                        <p class="t10-eyebrow">Testimonials</p>
                        <h2 class="t10-h2">Kind words</h2>
                    </div>
                    <p class="t10-section__count" id="t10-testimonials-count"></p>
                </div>
                <div class="t10-reviews" id="t10-testimonials-grid"></div>
            </div>
        </section>

        <section class="t10-section t10-booking" id="t10-booking" data-reveal>
            <div class="t10-container t10-booking__inner">
                <div class="t10-booking__aside">
                    <p class="t10-eyebrow">Reservations</p>
                    <h2 class="t10-h2">Reserve your chair</h2>
                    <p class="t10-booking__text">Choose a treatment or a package, pick a time that suits you and share your details. The house will confirm your appointment &mdash; this is a working prototype, so requests are stored on this device only.</p>
                    <ol class="t10-booking__steps">
                        <li>Select a service or a package.</li>
                        <li>Choose your preferred date and time.</li>
                        <li>Add your details and send the request.</li>
                    </ol>
                    <div class="t10-booking__hours" id="t10-booking-hours"></div>
                </div>
                <div class="t10-booking__panel">
                    <form class="t10-form" id="t10-booking-form" novalidate>
                        <div class="t10-form__row">
                            <div class="t10-field">
                                <label class="t10-field__label" for="t10-booking-name">Full name</label>
                                <input class="t10-field__input" type="text" id="t10-booking-name" name="name" autocomplete="name" required>
                            </div>
                            <div class="t10-field">
                                <label class="t10-field__label" for="t10-booking-phone">Phone</label>
                                <input class="t10-field__input" type="tel" id="t10-booking-phone" name="phone" autocomplete="tel" required>
                            </div>
                        </div>
                        <div class="t10-field">
                            <label class="t10-field__label" for="t10-booking-email">Email</label>
                            <input class="t10-field__input" type="email" id="t10-booking-email" name="email" autocomplete="email" required>
                        </div>
                        <div class="t10-field">
                            <label class="t10-field__label" for="t10-booking-service">Service or package</label>
                            <select class="t10-field__input" id="t10-booking-service" name="service" required></select>
                        </div>
                        <div class="t10-form__row">
                            <div class="t10-field">
                                <label class="t10-field__label" for="t10-booking-date">Preferred date</label>
                                <input class="t10-field__input" type="date" id="t10-booking-date" name="date" required>
                            </div>
                            <div class="t10-field">
                                <label class="t10-field__label" for="t10-booking-time">Preferred time</label>
                                <select class="t10-field__input" id="t10-booking-time" name="time" required></select>
                            </div>
                        </div>
                        <div class="t10-field">
                            <label class="t10-field__label" for="t10-booking-message">Notes <span class="t10-field__opt">optional</span></label>
                            <textarea class="t10-field__input t10-field__input--area" id="t10-booking-message" name="message" rows="3"></textarea>
                        </div>
                        <button class="t10-btn t10-btn--solid t10-btn--block" type="submit" id="t10-booking-submit">Request appointment</button>
                    </form>
                    <div class="t10-booking__success" id="t10-booking-success" hidden>
                        <h3 class="t10-booking__success-title">Request received</h3>
                        <p class="t10-booking__success-text" id="t10-booking-success-text"></p>
                        <button class="t10-btn t10-btn--ghost" id="t10-booking-reset" type="button">Book another visit</button>
                    </div>
                </div>
            </div>
        </section>

        <section class="t10-section t10-visit" id="t10-visit" data-reveal>
            <div class="t10-container">
                <div class="t10-section__head">
                    <div>
                        <p class="t10-eyebrow">Visit</p>
                        <h2 class="t10-h2">Find the house</h2>
                    </div>
                </div>
                <div class="t10-visit__grid">
                    <div>
                        <h3 class="t10-col__title">Opening hours</h3>
                        <div class="t10-hours" id="t10-opening-hours"></div>
                    </div>
                    <div>
                        <h3 class="t10-col__title">Contact</h3>
                        <div class="t10-info" id="t10-contact-info"></div>
                    </div>
                    <div id="t10-social-block">
                        <h3 class="t10-col__title">Social</h3>
                        <div class="t10-social" id="t10-contact-social"></div>
                    </div>
                </div>
            </div>
        </section>

        <section class="t10-cta" id="t10-cta" data-reveal>
            <div class="t10-container t10-cta__inner">
                <p class="t10-eyebrow t10-eyebrow--light" id="t10-cta-eyebrow"></p>
                <h2 class="t10-cta__title" id="t10-cta-title"></h2>
                <a class="t10-btn t10-btn--champ" href="#t10-booking">Book an appointment</a>
            </div>
        </section>
    </main>

    <footer class="t10-footer" id="t10-footer">
        <div class="t10-container">
            <div class="t10-footer__top">
                <div class="t10-footer__brand">
                    <span class="t10-footer__name" id="t10-footer-name"></span>
                    <p class="t10-footer__tag" id="t10-footer-tag"></p>
                </div>
                <a class="t10-btn t10-btn--champ" href="#t10-booking">Book an appointment</a>
            </div>
            <div class="t10-footer__grid">
                <div>
                    <h3 class="t10-footer__heading">Explore</h3>
                    <ul class="t10-footer__list">
                        <li><a href="#t10-services">Services</a></li>
                        <li><a href="#t10-packages">Packages</a></li>
                        <li><a href="#t10-team">Team</a></li>
                        <li><a href="#t10-gallery">Gallery</a></li>
                        <li><a href="#t10-visit">Visit</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="t10-footer__heading">Contact</h3>
                    <div class="t10-footer__contact" id="t10-footer-contact"></div>
                </div>
                <div>
                    <h3 class="t10-footer__heading">Social</h3>
                    <div class="t10-footer__social t10-social" id="t10-footer-social"></div>
                </div>
            </div>
            <div class="t10-footer__bottom">
                <p id="t10-footer-copy"></p>
                <a href="admin.html">Admin Panel</a>
            </div>
        </div>
    </footer>

    <div class="t10-lightbox" id="t10-lightbox" hidden role="dialog" aria-modal="true" aria-label="Gallery image">
        <button class="t10-lightbox__close" id="t10-lightbox-close" type="button" aria-label="Close image">&times;</button>
        <button class="t10-lightbox__nav t10-lightbox__nav--prev" id="t10-lightbox-prev" type="button" aria-label="Previous image">&larr;</button>
        <figure class="t10-lightbox__figure">
            <img class="t10-lightbox__image" id="t10-lightbox-image" alt="">
            <figcaption class="t10-lightbox__caption" id="t10-lightbox-caption"></figcaption>
        </figure>
        <button class="t10-lightbox__nav t10-lightbox__nav--next" id="t10-lightbox-next" type="button" aria-label="Next image">&rarr;</button>
    </div>
    </div>`;

    const FALLBACK_IMAGE = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1500" viewBox="0 0 1200 1500">' +
        '<rect width="1200" height="1500" fill="#efe9df"/>' +
        '<rect x="46" y="46" width="1108" height="1408" fill="none" stroke="#d8c5a5" stroke-width="2"/>' +
        '<path d="M600 360c150 0 250 120 250 280s-112 300-250 300-250-140-250-300 100-280 250-280z" fill="none" stroke="#b5a99a" stroke-width="2" opacity="0.7"/>' +
        '<text x="600" y="820" font-family="Georgia, serif" font-size="56" fill="#493a32" text-anchor="middle">Beauty House</text>' +
        '<text x="600" y="872" font-family="Arial, sans-serif" font-size="22" letter-spacing="8" fill="#b5a99a" text-anchor="middle">IMAGE UNAVAILABLE</text>' +
        '</svg>'
    );

    const DAY_KEYS = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    const DAY_LABELS = {
        monday: 'Monday', tuesday: 'Tuesday', wednesday: 'Wednesday', thursday: 'Thursday',
        friday: 'Friday', saturday: 'Saturday', sunday: 'Sunday'
    };
    const SOCIAL_LABELS = {
        instagram: 'Instagram',
        facebook: 'Facebook',
        tiktok: 'TikTok',
        youtube: 'YouTube',
        googleBusiness: 'Google'
    };

    const prefersReducedMotion = () => typeof window.matchMedia === 'function'
        && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function byId(id) {
        return document.getElementById(id);
    }

    function setText(id, text) {
        const node = byId(id);
        if (node) node.textContent = text || '';
    }

    function setHtml(id, html) {
        const node = byId(id);
        if (node) node.innerHTML = html;
    }

    function hideEl(id) {
        const node = byId(id);
        if (node) node.hidden = true;
    }

    function showEl(id) {
        const node = byId(id);
        if (node) node.hidden = false;
    }

    function active(items) {
        return (Array.isArray(items) ? items : []).filter(item => item && item.status === 'active');
    }

    function imgTag(src, alt, options = {}) {
        const { className = '', eager = false, fallback = FALLBACK_IMAGE } = options;
        const safeSrc = src ? escapeHtml(src) : fallback;
        const cls = className ? ` class="${className}"` : '';
        const loading = eager ? '' : ' loading="lazy"';
        return `<img${cls} src="${safeSrc}" alt="${escapeHtml(alt)}"${loading}>`;
    }

    function initialsOf(name) {
        return String(name || 'A')
            .split(/\s+/)
            .filter(Boolean)
            .slice(0, 2)
            .map(part => part[0])
            .join('')
            .toUpperCase();
    }

    function firstSentence(text, limit) {
        const value = String(text || '').trim();
        if (!value) return '';
        const match = value.match(/^[\s\S]*?[.!?](\s|$)/);
        const sentence = match ? match[0].trim() : value;
        if (sentence.length <= limit) return sentence;
        return value.slice(0, limit).replace(/\s+\S*$/, '') + '\u2026';
    }

    function accentLastWord(text) {
        const words = String(text || '').trim().split(/\s+/).filter(Boolean);
        if (words.length === 0) return '';
        if (words.length === 1) return escapeHtml(words[0]);
        const last = words.pop();
        return escapeHtml(words.join(' ')) + ' <em>' + escapeHtml(last) + '</em>';
    }

    function starsHtml(rating) {
        const value = Math.max(0, Math.min(5, Number(rating) || 0));
        const full = Math.round(value);
        let out = '';
        for (let i = 0; i < 5; i += 1) out += i < full ? '\u2605' : '\u2606';
        return out;
    }

    function locationLine(data) {
        const business = data.business || {};
        const contact = data.contact || {};
        if (contact.address) return contact.address;
        return [business.address, business.city, business.country].filter(Boolean).join(', ');
    }

    function dayKeyFor(dateValue) {
        if (!dateValue) return null;
        const date = new Date(dateValue + 'T00:00:00');
        if (Number.isNaN(date.getTime())) return null;
        return DAY_KEYS[(date.getDay() + 6) % 7];
    }

    function todayKey() {
        return DAY_KEYS[(new Date().getDay() + 6) % 7];
    }

    function todayHoursText(hours) {
        const day = (hours || {})[todayKey()];
        if (!day || !day.open) return 'Closed today';
        return 'Open today ' + formatTime(day.openTime) + ' \u2013 ' + formatTime(day.closeTime);
    }

    function timeSlots(day) {
        if (!day || !day.open) return [];
        const toMin = value => {
            const parts = String(value || '').split(':');
            const h = parseInt(parts[0], 10);
            const m = parseInt(parts[1] || '0', 10);
            if (Number.isNaN(h)) return null;
            return h * 60 + (Number.isNaN(m) ? 0 : m);
        };
        const start = toMin(day.openTime);
        const end = toMin(day.closeTime);
        if (start === null || end === null || end <= start) return [];
        const slots = [];
        for (let t = start; t < end; t += 30) {
            const h = String(Math.floor(t / 60)).padStart(2, '0');
            const m = String(t % 60).padStart(2, '0');
            slots.push(h + ':' + m);
        }
        return slots;
    }

    function localISODate(date) {
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, '0');
        const d = String(date.getDate()).padStart(2, '0');
        return y + '-' + m + '-' + d;
    }

    function socialHtml(social) {
        return Object.keys(SOCIAL_LABELS)
            .filter(key => social && social[key])
            .map(key => '<a class="t10-social__link" href="' + escapeHtml(social[key]) + '" target="_blank" rel="noopener">' + SOCIAL_LABELS[key] + '</a>')
            .join('');
    }

    function renderMeta(data) {
        const business = data.business || {};
        const name = business.name || 'Beauty House';
        document.title = business.tagline ? name + ' \u2014 ' + business.tagline : name;
        const desc = firstSentence(business.description, 160);
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && desc) metaDesc.setAttribute('content', desc);
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', document.title);
    }

    function renderStatus(data) {
        const settings = data.settings || {};
        const banner = byId('status-banner');
        if (!banner) return;
        if (settings.websiteStatus && settings.websiteStatus !== 'published') {
            banner.hidden = false;
            banner.textContent = settings.websiteStatus === 'draft'
                ? 'Draft preview \u2014 not published yet.'
                : 'This website is currently offline.';
        } else {
            banner.hidden = true;
        }
    }

    function renderHeader(data) {
        const business = data.business || {};
        setText('t10-brand', business.name || 'Beauty House');
        setText('t10-brand-tag', business.tagline || '');
    }

    function renderHero(data) {
        const business = data.business || {};
        const contact = data.contact || {};
        const gallery = active(data.gallery);
        const testimonials = active(data.testimonials);

        setText('t10-hero-eyebrow', business.city ? 'Beauty house \u00b7 ' + business.city : 'Modern beauty house');
        setHtml('t10-hero-title', accentLastWord(business.tagline || business.name || 'The art of modern beauty'));
        setText('t10-hero-lede', firstSentence(business.description, 220));

        const meta = [todayHoursText(data.openingHours || {})];
        const place = [business.city, business.country].filter(Boolean).join(', ');
        if (place) meta.push(place);
        if (contact.phone) meta.push(contact.phone);
        setText('t10-hero-meta', meta.join('   \u00b7   '));

        setText('t10-hero-label', business.city || 'Est.');

        const rating = byId('t10-hero-rating');
        if (rating) {
            const rated = testimonials.filter(item => Number(item.rating) > 0);
            if (rated.length) {
                const avg = rated.reduce((sum, item) => sum + Number(item.rating), 0) / rated.length;
                rating.innerHTML = '<span class="t10-hero__rating-stars">' + starsHtml(avg) + '</span>' +
                    '<span class="t10-hero__rating-num">' + avg.toFixed(1) + '</span>';
                rating.hidden = false;
            } else {
                rating.hidden = true;
            }
        }

        const media = byId('t10-hero-media');
        if (!media) return;
        const image = gallery[0];
        if (image) {
            media.classList.remove('t10-hero__media--fallback');
            media.innerHTML = imgTag(image.image, image.title || business.name || 'Beauty house', { eager: true });
        } else {
            media.classList.add('t10-hero__media--fallback');
            media.innerHTML = '<span class="t10-hero__mark" aria-hidden="true">' + escapeHtml(initialsOf(business.name)) + '</span>';
        }
    }

    function renderIntro(data) {
        const business = data.business || {};
        const section = byId('t10-intro');
        if (!section) return;
        if (!business.description && !business.tagline) {
            hideEl('t10-intro');
            return;
        }
        showEl('t10-intro');

        setText('t10-intro-text', business.description || business.tagline || '');

        const services = active(data.services);
        const team = active(data.team);
        const packages = active(data.packages);
        const gallery = active(data.gallery);
        const facts = [];
        if (services.length) facts.push({ num: String(services.length), label: 'Treatments' });
        if (team.length) facts.push({ num: String(team.length), label: 'Specialists' });
        if (packages.length) facts.push({ num: String(packages.length), label: 'Packages' });
        if (gallery.length) facts.push({ num: String(gallery.length), label: 'Portfolio pieces' });

        setHtml('t10-intro-facts', facts.slice(0, 4).map(fact =>
            '<div class="t10-fact"><span class="t10-fact__num">' + escapeHtml(fact.num) + '</span>' +
            '<span class="t10-fact__label">' + escapeHtml(fact.label) + '</span></div>'
        ).join(''));
    }

    function renderServices(data) {
        const services = active(data.services);
        const list = byId('t10-services-list');
        if (!list) return;
        if (services.length === 0) {
            hideEl('t10-services');
            return;
        }
        showEl('t10-services');

        setText('t10-services-count', services.length + (services.length === 1 ? ' treatment' : ' treatments'));

        const groups = [];
        services.forEach(service => {
            const name = service.category || 'More treatments';
            let group = groups.find(item => item.name === name);
            if (!group) {
                group = { name, items: [] };
                groups.push(group);
            }
            group.items.push(service);
        });

        setHtml('t10-services-list', groups.map(group =>
            '<div class="t10-svcgroup">' +
                '<h3 class="t10-svcgroup__title">' + escapeHtml(group.name) + '</h3>' +
                '<div class="t10-svcgroup__rows">' + group.items.map(service => {
                    const meta = [];
                    if (service.duration) meta.push(escapeHtml(String(service.duration)) + ' min');
                    return '<article class="t10-service">' +
                        '<div class="t10-service__main">' +
                            '<h4 class="t10-service__name">' + escapeHtml(service.name || 'Service') + '</h4>' +
                            (service.description ? '<p class="t10-service__desc">' + escapeHtml(service.description) + '</p>' : '') +
                            (meta.length ? '<p class="t10-service__meta">' + meta.join(' \u00b7 ') + '</p>' : '') +
                        '</div>' +
                        '<span class="t10-service__leader" aria-hidden="true"></span>' +
                        '<div class="t10-service__side">' +
                            '<span class="t10-service__price">' + formatCurrency(service.price) + '</span>' +
                            '<button class="t10-btn t10-btn--ghost t10-service__book" type="button" data-service="' + escapeHtml(service.id) + '">Book</button>' +
                        '</div>' +
                        '</article>';
        }).join('') + '</div></div>'));
    }

    function renderSignature(data) {
        const services = active(data.services);
        const gallery = active(data.gallery);
        const body = byId('t10-signature-body');
        const media = byId('t10-signature-media');
        if (!body || !media) return;
        if (!services.length) {
            hideEl('t10-signature');
            return;
        }
        showEl('t10-signature');

        const featured = services.reduce((top, service) =>
            Number(service.price) > Number(top.price) ? service : top, services[0]);
        const image = gallery.find(item => item.title === featured.name) || gallery[1] || gallery[0];

        if (image) {
            media.classList.remove('t10-signature__media--fallback');
            media.innerHTML = imgTag(image.image, image.title || featured.name || 'Signature');
        } else {
            media.classList.add('t10-signature__media--fallback');
            media.innerHTML = '<span class="t10-signature__mark" aria-hidden="true">' + escapeHtml(initialsOf(featured.name)) + '</span>';
        }

        const meta = [];
        if (featured.category) meta.push(escapeHtml(featured.category));
        if (featured.duration) meta.push(escapeHtml(String(featured.duration)) + ' min');

        body.innerHTML = '<span class="t10-signature__badge">Signature treatment</span>' +
            '<h2 class="t10-signature__name">' + escapeHtml(featured.name || 'Signature treatment') + '</h2>' +
            '<div class="t10-signature__meta">' +
                '<span class="t10-signature__price">' + formatCurrency(featured.price) + '</span>' +
                meta.map(tag => '<span class="t10-signature__tag">' + tag + '</span>').join('') +
            '</div>' +
            (featured.description ? '<p class="t10-signature__desc">' + escapeHtml(featured.description) + '</p>' : '') +
            '<button class="t10-btn t10-btn--champ" type="button" data-service="' + escapeHtml(featured.id) + '">Book this treatment</button>';
    }

    function renderPackages(data) {
        const packages = active(data.packages);
        const services = active(data.services);
        const list = byId('t10-packages-list');
        if (!list) return;
        if (!packages.length) {
            hideEl('t10-packages');
            return;
        }
        showEl('t10-packages');

        let topIndex = 0;
        packages.forEach((pkg, index) => {
            if (Number(pkg.price) > Number(packages[topIndex].price)) topIndex = index;
        });

        list.innerHTML = packages.map((pkg, index) => {
            const included = (Array.isArray(pkg.services) ? pkg.services : [])
                .map(id => services.find(service => service.id === id))
                .filter(Boolean)
                .map(service => '<li>' + escapeHtml(service.name) + '</li>')
                .join('');
            const featured = index === topIndex ? ' t10-package--signature' : '';
            return '<article class="t10-package' + featured + '">' +
                '<span class="t10-package__no" aria-hidden="true">' + String(index + 1).padStart(2, '0') + '</span>' +
                '<div class="t10-package__body">' +
                    '<h3 class="t10-package__name">' + escapeHtml(pkg.name || 'Package') + '</h3>' +
                    (pkg.description ? '<p class="t10-package__desc">' + escapeHtml(pkg.description) + '</p>' : '') +
                    (included ? '<ul class="t10-package__items">' + included + '</ul>' : '') +
                '</div>' +
                '<div class="t10-package__side">' +
                    '<span class="t10-package__price">' + formatCurrency(pkg.price) + '</span>' +
                    '<button class="t10-btn t10-btn--ghost" type="button" data-package="' + escapeHtml(pkg.id) + '">Reserve</button>' +
                '</div>' +
                '</article>';
        }).join('');
    }

    function renderTeam(data) {
        const team = active(data.team);
        const grid = byId('t10-team-grid');
        if (!grid) return;
        if (!team.length) {
            hideEl('t10-team');
            return;
        }
        showEl('t10-team');

        grid.innerHTML = team.map((member, index) => {
            const frame = member.image
                ? '<div class="t10-member__frame">' + imgTag(member.image, member.name) + '</div>'
                : '<div class="t10-member__frame t10-member__frame--fallback"><span class="t10-member__initials" aria-hidden="true">' + escapeHtml(initialsOf(member.name)) + '</span></div>';
            return '<article class="t10-member' + (index === 0 ? ' t10-member--lead' : '') + '">' + frame +
                '<div class="t10-member__body">' +
                    '<h3 class="t10-member__name">' + escapeHtml(member.name || 'Specialist') + '</h3>' +
                    (member.role ? '<span class="t10-member__role">' + escapeHtml(member.role) + '</span>' : '') +
                    (member.bio ? '<p class="t10-member__bio">' + escapeHtml(member.bio) + '</p>' : '') +
                '</div>' +
                '</article>';
        }).join('');
    }

    function renderGallery(data) {
        const gallery = active(data.gallery);
        const list = byId('t10-gallery-list');
        if (!list) return;
        if (!gallery.length) {
            hideEl('t10-gallery');
            return;
        }
        showEl('t10-gallery');

        list.innerHTML = gallery.map((item, index) => {
            const caption = item.title || item.category || 'Studio work';
            const feature = index % 6 === 0 ? ' t10-gallery__item--feature' : '';
            return '<button class="t10-gallery__item' + feature + '" type="button" data-index="' + index + '" aria-label="View ' + escapeHtml(caption) + '">' +
                imgTag(item.image, item.title || 'Studio work') +
                '<span class="t10-gallery__cap">' + escapeHtml(item.title || item.category || 'Studio work') + '</span>' +
                '</button>';
        }).join('');
    }

    function renderTestimonials(data) {
        const testimonials = active(data.testimonials);
        const section = byId('t10-testimonials');
        const grid = byId('t10-testimonials-grid');
        if (!section || !grid) return;
        if (!testimonials.length) {
            hideEl('t10-testimonials');
            return;
        }
        showEl('t10-testimonials');

        const rated = testimonials.filter(item => Number(item.rating) > 0);
        const avg = rated.length
            ? (rated.reduce((sum, item) => sum + Number(item.rating), 0) / rated.length).toFixed(1)
            : null;
        setText('t10-testimonials-count', avg
            ? avg + ' / 5 \u00b7 ' + testimonials.length + (testimonials.length === 1 ? ' review' : ' reviews')
            : testimonials.length + (testimonials.length === 1 ? ' review' : ' reviews'));

        grid.innerHTML = testimonials.map((item, index) => {
            const stars = starsHtml(item.rating);
            const avatar = item.customerImage
                ? '<span class="t10-review__avatar"><img src="' + escapeHtml(item.customerImage) + '" alt="" loading="lazy"></span>'
                : '<span class="t10-review__avatar" aria-hidden="true">' + escapeHtml(initialsOf(item.customerName)) + '</span>';
            return '<figure class="t10-review' + (index === 0 ? ' t10-review--lead' : '') + '">' +
                (stars ? '<span class="t10-review__stars" aria-label="' + escapeHtml(String(item.rating)) + ' out of 5">' + stars + '</span>' : '') +
                '<blockquote class="t10-review__text">' + escapeHtml(item.message || '') + '</blockquote>' +
                '<figcaption class="t10-review__author">' + avatar +
                    '<span class="t10-review__name">' + escapeHtml(item.customerName || 'Client') + '</span>' +
                '</figcaption>' +
                '</figure>';
        }).join('');
    }

    function renderContact(data) {
        const contact = data.contact || {};
        setText('t10-booking-hours', todayHoursText(data.openingHours || {}));

        const info = byId('t10-contact-info');
        if (info) {
            const rows = [];
            if (contact.phone) rows.push('<div class="t10-info__row"><span class="t10-info__key">Phone</span><a href="tel:' + escapeHtml(contact.phone) + '">' + escapeHtml(contact.phone) + '</a></div>');
            if (contact.email) rows.push('<div class="t10-info__row"><span class="t10-info__key">Email</span><a href="mailto:' + escapeHtml(contact.email) + '">' + escapeHtml(contact.email) + '</a></div>');
            const address = locationLine(data);
            if (address) rows.push('<div class="t10-info__row"><span class="t10-info__key">Address</span><span>' + escapeHtml(address) + '</span></div>');
            info.innerHTML = rows.length ? rows.join('') : '<p class="t10-info__row">Contact details coming soon.</p>';
        }

        const hours = data.openingHours || {};
        const current = todayKey();
        setHtml('t10-opening-hours', DAY_KEYS.map(day => {
            const entry = hours[day] || {};
            const isOpen = entry.open && entry.openTime;
            const value = isOpen ? formatTime(entry.openTime) + ' \u2013 ' + formatTime(entry.closeTime) : 'Closed';
            return '<div class="t10-hours__row' + (isOpen ? '' : ' t10-hours__row--closed') + (day === current ? ' is-today' : '') + '">' +
                '<span>' + DAY_LABELS[day] + '</span><span>' + value + '</span></div>';
        }).join(''));

        const social = data.socialLinks || {};
        const html = socialHtml(social);
        if (html) {
            setHtml('t10-contact-social', html);
            showEl('t10-social-block');
        } else {
            hideEl('t10-social-block');
        }
    }

    function renderCta(data) {
        const business = data.business || {};
        setText('t10-cta-eyebrow', business.city ? 'Reservations \u00b7 ' + business.city : 'Reservations');
        setText('t10-cta-title', 'Reserve your visit to ' + (business.name || 'our house'));
    }

    function renderFooter(data) {
        const business = data.business || {};
        const contact = data.contact || {};
        const social = data.socialLinks || {};
        const name = business.name || 'Beauty House';

        setText('t10-footer-name', name);
        setText('t10-footer-tag', business.tagline || '');

        const items = [];
        if (contact.phone) items.push('<a href="tel:' + escapeHtml(contact.phone) + '">' + escapeHtml(contact.phone) + '</a>');
        if (contact.email) items.push('<a href="mailto:' + escapeHtml(contact.email) + '">' + escapeHtml(contact.email) + '</a>');
        const address = locationLine(data);
        if (address) items.push('<span>' + escapeHtml(address) + '</span>');
        setHtml('t10-footer-contact', items.join(''));

        setHtml('t10-footer-social', socialHtml(social));
        setText('t10-footer-copy', '\u00a9 ' + new Date().getFullYear() + ' ' + name);
    }

    function buildServiceOptions(data) {
        const services = active(data.services);
        const packages = active(data.packages);
        const select = byId('t10-booking-service');
        if (!select) return;

        const serviceOptions = services.map(service =>
            '<option value="' + escapeHtml(service.id) + '">' + escapeHtml(service.name) + ' \u2014 ' + formatCurrency(service.price) + '</option>').join('');
        const packageOptions = packages.map(pkg =>
            '<option value="' + escapeHtml(pkg.id) + '">' + escapeHtml(pkg.name) + ' \u2014 ' + formatCurrency(pkg.price) + ' (package)</option>').join('');

        let html = '<option value="" selected disabled>Select a service</option>';
        if (serviceOptions) html += '<optgroup label="Services">' + serviceOptions + '</optgroup>';
        if (packageOptions) html += '<optgroup label="Packages">' + packageOptions + '</optgroup>';
        select.innerHTML = html;
    }

    function renderBookingTimes() {
        const dateInput = byId('t10-booking-date');
        const timeSelect = byId('t10-booking-time');
        if (!dateInput || !timeSelect) return;

        if (!dateInput.value) {
            timeSelect.innerHTML = '<option value="" selected disabled>Select a date first</option>';
            return;
        }
        const hours = storage.getOpeningHours();
        const slots = timeSlots(hours[dayKeyFor(dateInput.value)]);
        if (!slots.length) {
            timeSelect.innerHTML = '<option value="" selected disabled>Closed \u2014 choose another date</option>';
            return;
        }
        timeSelect.innerHTML = '<option value="" selected disabled>Select a time</option>' +
            slots.map(slot => '<option value="' + slot + '">' + formatTime(slot) + '</option>').join('');
    }

    function setupHeader() {
        const header = byId('t10-header');
        const nav = byId('t10-nav');
        const toggle = byId('t10-menu-toggle');
        const scrim = byId('t10-nav-scrim');

        if (header) {
            const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
            onScroll();
            window.addEventListener('scroll', onScroll, { passive: true });
        }

        const isMobileNav = () => typeof window.matchMedia !== 'function'
            || window.matchMedia('(max-width: 980px)').matches;

        const headerFocusables = () => Array.from(document.querySelectorAll('.t10-header a, .t10-header button'))
            .filter(el => window.getComputedStyle(el).display !== 'none');

        const open = () => {
            document.body.classList.add('t10-nav-open');
            if (toggle) {
                toggle.setAttribute('aria-expanded', 'true');
                toggle.setAttribute('aria-label', 'Close menu');
            }
            if (isMobileNav()) {
                const first = document.querySelector('.t10-nav__list a');
                if (first) window.setTimeout(() => first.focus(), 60);
            }
        };

        const close = (refocus) => {
            document.body.classList.remove('t10-nav-open');
            if (toggle) {
                toggle.setAttribute('aria-expanded', 'false');
                toggle.setAttribute('aria-label', 'Open menu');
            }
            if (refocus && isMobileNav() && toggle) toggle.focus();
        };

        if (toggle && nav) {
            toggle.addEventListener('click', () => {
                if (document.body.classList.contains('t10-nav-open')) close(false);
                else open();
            });
        }
        if (scrim) scrim.addEventListener('click', () => close(true));
        document.querySelectorAll('.t10-nav__list a').forEach(link => link.addEventListener('click', () => close(false)));
        document.addEventListener('keydown', event => {
            if (!document.body.classList.contains('t10-nav-open')) return;
            if (event.key === 'Escape') { close(true); return; }
            if (event.key !== 'Tab') return;
            const items = headerFocusables();
            if (items.length < 2) return;
            const first = items[0];
            const last = items[items.length - 1];
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        });

        const form = byId('t10-booking-form');
        const success = byId('t10-booking-success');
        if (form && success) {
            form.addEventListener('submit', event => {
                event.preventDefault();
                if (!form.reportValidity()) return;
                const serviceId = byId('t10-booking-service').value;
                const name = byId('t10-booking-name').value.trim();
                const phone = byId('t10-booking-phone').value.trim();
                const email = byId('t10-booking-email').value.trim();
                const date = byId('t10-booking-date').value;
                const time = byId('t10-booking-time').value;
                const message = byId('t10-booking-message').value.trim();

                if (!name || !phone || !email || !serviceId || !date || !time) {
                    return;
                }

                const record = {
                    customerName: name,
                    phone: phone,
                    email: email,
                    service: serviceId,
                    date: date,
                    time: time,
                    message: message,
                    status: 'Pending'
                };
                const saved = storage.addAppointment(record);
                if (!saved) {
                    if (typeof showToast === 'function') showToast('Something went wrong. Please try again.', 'error');
                    return;
                }
                const allServices = active(storage.getServices()).concat(active(storage.getPackages()));
                const chosen = allServices.find(item => item.id === serviceId);
                setText('t10-booking-success-text', 'Thank you, ' + name + '. Your request for ' +
                    (chosen ? chosen.name : 'your appointment') + ' on ' + formatDate(date) + ' at ' + formatTime(time) +
                    ' has been received. The house will confirm shortly.');
                form.hidden = true;
                success.hidden = false;
                if (typeof showToast === 'function') showToast('Appointment request sent.', 'success');
            });
        }

        const reset = byId('t10-booking-reset');
        if (reset && form && success) {
            reset.addEventListener('click', () => {
                form.reset();
                renderBookingTimes();
                form.hidden = false;
                success.hidden = true;
            });
        }
    }

    function setupReveal() {
        const targets = document.querySelectorAll('[data-reveal]');
        if (!('IntersectionObserver' in window) || prefersReducedMotion()) {
            targets.forEach(node => node.classList.add('is-visible'));
            return;
        }
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
        targets.forEach(node => observer.observe(node));
    }

    function setupImageFallback() {
        document.addEventListener('error', event => {
            const img = event.target;
            if (img && img.tagName === 'IMG' && img.src !== FALLBACK_IMAGE) {
                img.src = FALLBACK_IMAGE;
            }
        }, true);
    }

    function setupBookingShortcuts() {
        document.addEventListener('click', event => {
            const trigger = event.target.closest('[data-service],[data-package]');
            if (!trigger) return;
            const value = trigger.getAttribute('data-service') || trigger.getAttribute('data-package');
            const select = byId('t10-booking-service');
            if (select && value) {
                select.value = value;
                const booking = byId('t10-booking');
                if (booking) booking.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
            }
        });
    }

    function setupLightbox() {
        const list = byId('t10-gallery-list');
        const lightbox = byId('t10-lightbox');
        const image = byId('t10-lightbox-image');
        const caption = byId('t10-lightbox-caption');
        const closeBtn = byId('t10-lightbox-close');
        const prevBtn = byId('t10-lightbox-prev');
        const nextBtn = byId('t10-lightbox-next');
        if (!list || !lightbox || !image || !caption) return;

        let index = 0;
        let lastFocused = null;

        const paint = () => {
            const items = active(storage.getGallery());
            const item = items[index];
            if (!item) return;
            image.src = item.image || FALLBACK_IMAGE;
            image.alt = item.title || 'Gallery image';
            caption.textContent = [item.title, item.category].filter(Boolean).join(' \u00b7 ');
        };

        const open = i => {
            index = i;
            paint();
            lightbox.hidden = false;
            if (closeBtn) closeBtn.focus();
        };

        const close = () => {
            lightbox.hidden = true;
            image.removeAttribute('src');
            if (lastFocused) lastFocused.focus();
        };

        const step = delta => {
            const items = active(storage.getGallery());
            if (!items.length) return;
            index = (index + delta + items.length) % items.length;
            paint();
        };

        list.addEventListener('click', event => {
            const item = event.target.closest('.t10-gallery__item');
            if (!item) return;
            lastFocused = item;
            open(Number(item.getAttribute('data-index') || '0'));
        });

        if (closeBtn) closeBtn.addEventListener('click', close);
        if (prevBtn) prevBtn.addEventListener('click', () => step(-1));
        if (nextBtn) nextBtn.addEventListener('click', () => step(1));
        lightbox.addEventListener('click', event => {
            if (event.target === lightbox) close();
        });
        document.addEventListener('keydown', event => {
            if (lightbox.hidden) return;
            if (event.key === 'Escape') close();
            if (event.key === 'ArrowLeft') step(-1);
            if (event.key === 'ArrowRight') step(1);
        });
    }

    function render(data) {
        renderMeta(data);
        renderStatus(data);
        renderHeader(data);
        renderHero(data);
        renderIntro(data);
        renderServices(data);
        renderSignature(data);
        renderPackages(data);
        renderTeam(data);
        renderGallery(data);
        renderTestimonials(data);
        buildServiceOptions(data);
        renderContact(data);
        renderCta(data);
        renderFooter(data);

        const dateInput = byId('t10-booking-date');
        if (dateInput) {
            dateInput.min = localISODate(new Date());
            dateInput.addEventListener('change', renderBookingTimes);
            renderBookingTimes();
        }

        setupHeader();
        setupReveal();
        setupImageFallback();
        setupBookingShortcuts();
        setupLightbox();
    }

    window.SalonTemplates = window.SalonTemplates || {};
    window.SalonTemplates['template-10'] = { html: TEMPLATE_HTML, render: render };
})();
