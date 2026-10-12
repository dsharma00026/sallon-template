(function () {
    const TEMPLATE_HTML = `
    <div class="t9-status" id="status-banner" hidden></div>

    <div id="t9-shell" data-shell="template-9">
    <div class="t9-topbar">
        <div class="t9-container t9-topbar__inner">
            <span id="t9-topbar-loc"></span>
            <span class="t9-topbar__sep" aria-hidden="true">&middot;</span>
            <span id="t9-topbar-hours"></span>
            <a class="t9-topbar__phone" id="t9-topbar-phone" href="#t9-booking"></a>
        </div>
    </div>

    <header class="t9-header" id="t9-header">
        <div class="t9-container t9-header__inner">
            <a class="t9-brand" href="#t9-hero">
                <span class="t9-brand__name" id="t9-brand"></span>
                <span class="t9-brand__tag" id="t9-brand-tag"></span>
            </a>
            <nav class="t9-nav" id="t9-nav" aria-label="Primary">
                <ul class="t9-nav__list">
                    <li><a href="#t9-services">Services</a></li>
                    <li><a href="#t9-packages">Packages</a></li>
                    <li><a href="#t9-team">Team</a></li>
                    <li><a href="#t9-gallery">Gallery</a></li>
                    <li><a href="#t9-testimonials">Reviews</a></li>
                    <li><a href="#t9-visit">Visit</a></li>
                </ul>
            </nav>
            <div class="t9-header__actions">
                <a class="t9-btn t9-btn--brass t9-header__cta" id="t9-header-cta" href="#t9-booking">Book now</a>
                <button class="t9-menu-toggle" id="t9-menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="t9-nav">
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </header>
    <div class="t9-nav-scrim" id="t9-nav-scrim"></div>

    <main>
        <section class="t9-hero" id="t9-hero">
            <div class="t9-container t9-hero__inner">
                <div class="t9-hero__copy">
                    <p class="t9-eyebrow" id="t9-hero-eyebrow"></p>
                    <h1 class="t9-hero__title" id="t9-hero-title"></h1>
                    <p class="t9-hero__lede" id="t9-hero-lede"></p>
                    <div class="t9-hero__actions">
                        <a class="t9-btn t9-btn--brass" href="#t9-booking">Book an appointment</a>
                        <a class="t9-btn t9-btn--outline" href="#t9-services">View services</a>
                    </div>
                    <p class="t9-hero__meta" id="t9-hero-meta"></p>
                </div>
                <div class="t9-hero__figure">
                    <div class="t9-hero__media" id="t9-hero-media"></div>
                    <div class="t9-hero__card" id="t9-hero-card" hidden></div>
                </div>
            </div>
        </section>

        <section class="t9-stats" id="t9-stats" hidden>
            <div class="t9-container t9-stats__inner" id="t9-stats-list"></div>
        </section>

        <section class="t9-section t9-about" id="t9-about" data-reveal>
            <div class="t9-container t9-about__inner">
                <div class="t9-about__body">
                    <p class="t9-eyebrow">The studio</p>
                    <h2 class="t9-h2" id="t9-about-title"></h2>
                    <p class="t9-about__text" id="t9-about-text"></p>
                    <div class="t9-facts" id="t9-about-facts"></div>
                </div>
                <div class="t9-about__media" id="t9-about-media"></div>
            </div>
        </section>

        <section class="t9-section t9-services" id="t9-services" data-reveal>
            <div class="t9-container">
                <div class="t9-section__head">
                    <div>
                        <p class="t9-eyebrow">Services &amp; pricing</p>
                        <h2 class="t9-h2">The menu</h2>
                    </div>
                    <p class="t9-section__count" id="t9-services-count"></p>
                </div>
                <div class="t9-menu" id="t9-services-list"></div>
            </div>
        </section>

        <section class="t9-featured" id="t9-featured" data-reveal hidden>
            <div class="t9-container t9-featured__inner">
                <div class="t9-featured__media" id="t9-featured-media"></div>
                <div class="t9-featured__body" id="t9-featured-body"></div>
            </div>
        </section>

        <section class="t9-section t9-packages" id="t9-packages" data-reveal>
            <div class="t9-container">
                <div class="t9-section__head">
                    <div>
                        <p class="t9-eyebrow">Bundles</p>
                        <h2 class="t9-h2">Packages</h2>
                    </div>
                </div>
                <div class="t9-packages__grid" id="t9-packages-list"></div>
            </div>
        </section>

        <section class="t9-section t9-team" id="t9-team" data-reveal>
            <div class="t9-container">
                <div class="t9-section__head">
                    <div>
                        <p class="t9-eyebrow t9-eyebrow--light">The crew</p>
                        <h2 class="t9-h2">Meet the team</h2>
                    </div>
                </div>
                <div class="t9-team__grid" id="t9-team-grid"></div>
            </div>
        </section>

        <section class="t9-section t9-gallery" id="t9-gallery" data-reveal>
            <div class="t9-container">
                <div class="t9-section__head">
                    <div>
                        <p class="t9-eyebrow">Portfolio</p>
                        <h2 class="t9-h2">Recent work</h2>
                    </div>
                </div>
                <div class="t9-gallery__grid" id="t9-gallery-list"></div>
            </div>
        </section>

        <section class="t9-section t9-testimonials" id="t9-testimonials" data-reveal>
            <div class="t9-container">
                <div class="t9-section__head">
                    <div>
                        <p class="t9-eyebrow">Reviews</p>
                        <h2 class="t9-h2">What clients say</h2>
                    </div>
                    <p class="t9-section__count" id="t9-testimonials-count"></p>
                </div>
                <div class="t9-reviews" id="t9-testimonials-grid"></div>
            </div>
        </section>

        <section class="t9-section t9-booking" id="t9-booking" data-reveal>
            <div class="t9-container t9-booking__inner">
                <div class="t9-booking__aside">
                    <p class="t9-eyebrow t9-eyebrow--light">Bookings</p>
                    <h2 class="t9-h2">Reserve your chair</h2>
                    <p class="t9-booking__text">Choose a service, pick a time that suits you and share your details. The studio will confirm your appointment &mdash; this is a working prototype, so requests are stored on this device only.</p>
                    <ol class="t9-booking__steps">
                        <li>Select a service or a package.</li>
                        <li>Choose your preferred date and time.</li>
                        <li>Add your details and send the request.</li>
                    </ol>
                    <div class="t9-booking__hours" id="t9-booking-hours"></div>
                </div>
                <div class="t9-booking__panel">
                    <form class="t9-form" id="t9-booking-form" novalidate>
                        <div class="t9-form__row">
                            <div class="t9-field">
                                <label class="t9-field__label" for="t9-booking-name">Full name</label>
                                <input class="t9-field__input" type="text" id="t9-booking-name" name="name" autocomplete="name" required>
                            </div>
                            <div class="t9-field">
                                <label class="t9-field__label" for="t9-booking-phone">Phone</label>
                                <input class="t9-field__input" type="tel" id="t9-booking-phone" name="phone" autocomplete="tel" required>
                            </div>
                        </div>
                        <div class="t9-field">
                            <label class="t9-field__label" for="t9-booking-email">Email</label>
                            <input class="t9-field__input" type="email" id="t9-booking-email" name="email" autocomplete="email" required>
                        </div>
                        <div class="t9-field">
                            <label class="t9-field__label" for="t9-booking-service">Service or package</label>
                            <select class="t9-field__input" id="t9-booking-service" name="service" required></select>
                        </div>
                        <div class="t9-form__row">
                            <div class="t9-field">
                                <label class="t9-field__label" for="t9-booking-date">Preferred date</label>
                                <input class="t9-field__input" type="date" id="t9-booking-date" name="date" required>
                            </div>
                            <div class="t9-field">
                                <label class="t9-field__label" for="t9-booking-time">Preferred time</label>
                                <select class="t9-field__input" id="t9-booking-time" name="time" required></select>
                            </div>
                        </div>
                        <div class="t9-field">
                            <label class="t9-field__label" for="t9-booking-message">Notes <span class="t9-field__opt">optional</span></label>
                            <textarea class="t9-field__input t9-field__input--area" id="t9-booking-message" name="message" rows="3"></textarea>
                        </div>
                        <button class="t9-btn t9-btn--brass t9-btn--block" type="submit" id="t9-booking-submit">Request appointment</button>
                    </form>
                    <div class="t9-booking__success" id="t9-booking-success" hidden>
                        <h3 class="t9-booking__success-title">Request received</h3>
                        <p class="t9-booking__success-text" id="t9-booking-success-text"></p>
                        <button class="t9-btn t9-btn--outline" id="t9-booking-reset" type="button">Book another visit</button>
                    </div>
                </div>
            </div>
        </section>

        <section class="t9-section t9-visit" id="t9-visit" data-reveal>
            <div class="t9-container">
                <div class="t9-section__head">
                    <div>
                        <p class="t9-eyebrow">Visit</p>
                        <h2 class="t9-h2">Find the studio</h2>
                    </div>
                </div>
                <div class="t9-visit__grid">
                    <div>
                        <h3 class="t9-col__title">Opening hours</h3>
                        <div class="t9-hours" id="t9-opening-hours"></div>
                    </div>
                    <div>
                        <h3 class="t9-col__title">Contact</h3>
                        <div class="t9-info" id="t9-contact-info"></div>
                    </div>
                    <div id="t9-social-block">
                        <h3 class="t9-col__title">Social</h3>
                        <div class="t9-social" id="t9-contact-social"></div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="t9-footer" id="t9-footer">
        <div class="t9-container">
            <div class="t9-footer__top">
                <div class="t9-footer__brand">
                    <span class="t9-footer__name" id="t9-footer-name"></span>
                    <p class="t9-footer__tag" id="t9-footer-tag"></p>
                </div>
                <a class="t9-btn t9-btn--brass" href="#t9-booking">Book an appointment</a>
            </div>
            <div class="t9-footer__grid">
                <div>
                    <h3 class="t9-footer__heading">Explore</h3>
                    <ul class="t9-footer__list">
                        <li><a href="#t9-services">Services</a></li>
                        <li><a href="#t9-packages">Packages</a></li>
                        <li><a href="#t9-team">Team</a></li>
                        <li><a href="#t9-gallery">Gallery</a></li>
                        <li><a href="#t9-visit">Visit</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="t9-footer__heading">Contact</h3>
                    <div class="t9-footer__contact" id="t9-footer-contact"></div>
                </div>
                <div>
                    <h3 class="t9-footer__heading">Social</h3>
                    <div class="t9-footer__social t9-social" id="t9-footer-social"></div>
                </div>
            </div>
            <div class="t9-footer__bottom">
                <p id="t9-footer-copy"></p>
                <a href="admin.html">Admin Panel</a>
            </div>
        </div>
    </footer>

    <div class="t9-lightbox" id="t9-lightbox" hidden role="dialog" aria-modal="true" aria-label="Gallery image">
        <button class="t9-lightbox__close" id="t9-lightbox-close" type="button" aria-label="Close image">&times;</button>
        <button class="t9-lightbox__nav t9-lightbox__nav--prev" id="t9-lightbox-prev" type="button" aria-label="Previous image">&larr;</button>
        <figure class="t9-lightbox__figure">
            <img class="t9-lightbox__image" id="t9-lightbox-image" alt="">
            <figcaption class="t9-lightbox__caption" id="t9-lightbox-caption"></figcaption>
        </figure>
        <button class="t9-lightbox__nav t9-lightbox__nav--next" id="t9-lightbox-next" type="button" aria-label="Next image">&rarr;</button>
    </div>
    </div>`;

    const FALLBACK_IMAGE = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1500" viewBox="0 0 1200 1500">' +
        '<rect width="1200" height="1500" fill="#1d1d1d"/>' +
        '<rect x="40" y="40" width="1120" height="1420" fill="none" stroke="#3a3a3a" stroke-width="2"/>' +
        '<circle cx="600" cy="560" r="230" fill="none" stroke="#a68a59" stroke-width="2" opacity="0.6"/>' +
        '<text x="600" y="820" font-family="Georgia, serif" font-size="56" fill="#8f8e88" text-anchor="middle">Studio</text>' +
        '<text x="600" y="872" font-family="Arial, sans-serif" font-size="22" letter-spacing="8" fill="#6f6e69" text-anchor="middle">IMAGE UNAVAILABLE</text>' +
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
    const GALLERY_VARIANTS = ['t9-gallery__item--a', 't9-gallery__item--b', 't9-gallery__item--c'];

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
            .map(part => part.charAt(0).toUpperCase())
            .join('') || 'A';
    }

    function firstSentence(text, limit = 180) {
        const value = String(text || '').trim();
        if (!value) return '';
        const match = value.match(/^(.{10,}?[.!?])(\s|$)/);
        if (match && match[1].length <= limit) return match[1];
        if (value.length <= limit) return value;
        return value.slice(0, limit).trim() + '\u2026';
    }

    function locationLine(data) {
        const business = data.business || {};
        const contact = data.contact || {};
        return contact.address || [business.address, business.city, business.country].filter(Boolean).join(', ');
    }

    function categoriesOf(services) {
        const seen = [];
        services.forEach(service => {
            if (service.category && seen.indexOf(service.category) === -1) seen.push(service.category);
        });
        return seen;
    }

    function starsHtml(rating) {
        const stars = Math.max(0, Math.min(5, Math.round(Number(rating) || 0)));
        if (stars === 0) return '';
        return '\u2605'.repeat(stars) + '\u2606'.repeat(5 - stars);
    }

    function statusText(status) {
        if (status === 'draft') return 'This website is currently a draft and not yet published.';
        if (status === 'maintenance') return 'This website is temporarily unavailable for maintenance.';
        return 'This website is not yet published.';
    }

    function todayKey() {
        return DAY_KEYS[(new Date().getDay() + 6) % 7];
    }

    function todayHoursText(hours) {
        const dayData = (hours || {})[todayKey()] || {};
        if (dayData.open && dayData.openTime && dayData.closeTime) {
            return 'Open today ' + formatTime(dayData.openTime) + ' \u2013 ' + formatTime(dayData.closeTime);
        }
        return 'Closed today';
    }

    function renderStatus(data) {
        const settings = data.settings || {};
        const banner = byId('status-banner');
        if (!banner) return;
        if (settings.websiteStatus && settings.websiteStatus !== 'published') {
            banner.textContent = statusText(settings.websiteStatus);
            banner.hidden = false;
        } else {
            banner.hidden = true;
        }
    }

    function renderMeta(data) {
        const business = data.business || {};
        const settings = data.settings || {};
        const name = business.name || 'Studio';

        document.title = business.tagline ? name + ' \u2014 ' + business.tagline : name;

        const desc = firstSentence(business.description, 160);
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && desc) metaDesc.setAttribute('content', desc);
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', document.title);

        if (settings.selectedTemplate) {
            document.body.dataset.template = settings.selectedTemplate;
        }
    }

    function renderHeader(data) {
        const business = data.business || {};
        const contact = data.contact || {};
        const hours = data.openingHours || {};
        setText('t9-brand', business.name || 'Studio');
        setText('t9-brand-tag', business.tagline || '');
        setText('t9-topbar-loc', locationLine(data) || 'Modern grooming studio');
        setText('t9-topbar-hours', todayHoursText(hours));
        setText('t9-topbar-phone', contact.phone || '');
    }

    function renderHero(data) {
        const business = data.business || {};
        const contact = data.contact || {};
        const gallery = active(data.gallery);
        const testimonials = active(data.testimonials);

        const location = business.city || business.country || '';
        setText('t9-hero-eyebrow', location ? 'Grooming studio \u00b7 ' + location : 'Modern grooming studio');

        setText('t9-hero-title', business.tagline || business.name || 'Sharp, considered grooming');
        setText('t9-hero-lede', firstSentence(business.description, 220));

        const metaBits = [todayHoursText(data.openingHours || {})];
        if (contact.phone) metaBits.push(contact.phone);
        if (location) metaBits.push(location);
        setText('t9-hero-meta', metaBits.filter(Boolean).join('   \u00b7   '));

        const card = byId('t9-hero-card');
        if (card) {
            const rated = testimonials.filter(item => Number(item.rating) > 0);
            if (rated.length) {
                const avg = rated.reduce((sum, item) => sum + Number(item.rating), 0) / rated.length;
                card.innerHTML = '<span class="t9-hero__card-num">' + avg.toFixed(1) + '</span>' +
                    '<span class="t9-hero__card-stars">' + starsHtml(avg) + '</span>' +
                    '<span class="t9-hero__card-label">' + rated.length + (rated.length === 1 ? ' client review' : ' client reviews') + '</span>';
                card.hidden = false;
            } else {
                card.hidden = true;
            }
        }

        const media = byId('t9-hero-media');
        if (!media) return;
        const image = gallery[0];
        if (!image) {
            media.classList.add('t9-hero__media--fallback');
            media.innerHTML = '<span class="t9-hero__mark" aria-hidden="true">' + escapeHtml(initialsOf(business.name)) + '</span>';
        } else {
            media.classList.remove('t9-hero__media--fallback');
            media.innerHTML = imgTag(image.image, image.title || business.name || 'Studio', { eager: true });
        }
    }

    function renderStats(data) {
        const services = active(data.services);
        const team = active(data.team);
        const gallery = active(data.gallery);
        const testimonials = active(data.testimonials);
        const rated = testimonials.filter(item => Number(item.rating) > 0);
        const stats = [];
        if (services.length) stats.push({ num: String(services.length), label: 'Treatments' });
        if (team.length) stats.push({ num: String(team.length), label: 'Specialists' });
        if (gallery.length) stats.push({ num: String(gallery.length), label: 'Recent works' });
        if (rated.length) {
            const avg = rated.reduce((sum, item) => sum + Number(item.rating), 0) / rated.length;
            stats.push({ num: avg.toFixed(1), label: 'Average rating' });
        }
        const section = byId('t9-stats');
        if (!section) return;
        if (!stats.length) {
            section.hidden = true;
            return;
        }
        section.hidden = false;
        setHtml('t9-stats-list', stats.slice(0, 4).map(stat =>
            '<div class="t9-stat"><span class="t9-stat__num">' + escapeHtml(stat.num) + '</span>' +
            '<span class="t9-stat__label">' + escapeHtml(stat.label) + '</span></div>'
        ).join(''));
    }

    function renderAbout(data) {
        const business = data.business || {};
        const gallery = active(data.gallery);
        const services = active(data.services);
        const team = active(data.team);
        const packages = active(data.packages);

        if (!business.description && !business.name) {
            hideEl('t9-about');
            return;
        }
        showEl('t9-about');

        setText('t9-about-title', business.name || business.tagline || 'The studio');
        setText('t9-about-text', business.description || 'A modern studio for considered grooming and styling.');

        const categories = categoriesOf(services);
        const facts = [];
        categories.slice(0, 2).forEach(category => {
            const count = services.filter(service => service.category === category).length;
            facts.push({ num: String(count).padStart(2, '0'), label: category });
        });
        if (facts.length < 3 && team.length) facts.push({ num: String(team.length).padStart(2, '0'), label: 'Specialists' });
        if (facts.length < 3 && packages.length) facts.push({ num: String(packages.length).padStart(2, '0'), label: 'Packages' });
        if (facts.length < 3 && services.length) facts.push({ num: String(services.length).padStart(2, '0'), label: 'Services' });
        setHtml('t9-about-facts', facts.slice(0, 3).map(fact =>
            '<div class="t9-fact"><span class="t9-fact__num">' + escapeHtml(fact.num) + '</span>' +
            '<span class="t9-fact__label">' + escapeHtml(fact.label) + '</span></div>'
        ).join(''));

        const media = byId('t9-about-media');
        if (!media) return;
        const image = gallery[1] || gallery[0];
        if (!image) {
            media.classList.add('t9-about__media--fallback');
            media.innerHTML = '<span class="t9-about__mark" aria-hidden="true">' + escapeHtml(initialsOf(business.name)) + '</span>';
        } else {
            media.classList.remove('t9-about__media--fallback');
            media.innerHTML = imgTag(image.image, image.title || business.name || 'Studio');
        }
    }

    function renderServices(data) {
        const services = active(data.services);
        const list = byId('t9-services-list');
        if (!list) return;

        if (services.length === 0) {
            hideEl('t9-services');
            return;
        }
        showEl('t9-services');

        setText('t9-services-count', services.length + (services.length === 1 ? ' service' : ' services'));

        list.innerHTML = services.map((service, index) => {
            const number = String(index + 1).padStart(2, '0');
            const meta = [];
            if (service.category) meta.push(escapeHtml(service.category));
            if (service.duration) meta.push(escapeHtml(String(service.duration)) + ' min');
            return '<article class="t9-service">' +
                '<span class="t9-service__no" aria-hidden="true">' + number + '</span>' +
                '<div class="t9-service__main">' +
                    '<h3 class="t9-service__name">' + escapeHtml(service.name || 'Service') + '</h3>' +
                    (service.description ? '<p class="t9-service__desc">' + escapeHtml(service.description) + '</p>' : '') +
                    (meta.length ? '<p class="t9-service__meta">' + meta.join(' \u00b7 ') + '</p>' : '') +
                '</div>' +
                '<div class="t9-service__side">' +
                    '<span class="t9-service__price">' + formatCurrency(service.price) + '</span>' +
                    '<button class="t9-btn t9-btn--outline t9-service__book" type="button" data-service="' + escapeHtml(service.id) + '">Book</button>' +
                '</div>' +
                '</article>';
        }).join('');
    }

    function renderFeatured(data) {
        const services = active(data.services);
        const gallery = active(data.gallery);
        const body = byId('t9-featured-body');
        const media = byId('t9-featured-media');
        if (!body || !media) return;

        if (services.length === 0) {
            hideEl('t9-featured');
            return;
        }
        showEl('t9-featured');

        const featured = services.reduce((top, service) =>
            Number(service.price) > Number(top.price) ? service : top, services[0]);

        const image = gallery.find(item => item.title === featured.name) || gallery[0];
        if (!image) {
            media.classList.add('t9-featured__media--fallback');
            media.innerHTML = '<span class="t9-featured__mark" aria-hidden="true">' + escapeHtml(initialsOf(featured.name)) + '</span>';
        } else {
            media.classList.remove('t9-featured__media--fallback');
            media.innerHTML = imgTag(image.image, featured.name || 'Signature service');
        }

        const meta = [];
        if (featured.duration) meta.push(escapeHtml(String(featured.duration)) + ' min');
        if (featured.category) meta.push(escapeHtml(featured.category));

        body.innerHTML =
            '<span class="t9-featured__badge">Signature</span>' +
            '<h3 class="t9-featured__name">' + escapeHtml(featured.name || 'Signature service') + '</h3>' +
            '<div class="t9-featured__meta">' +
                '<span class="t9-featured__price">' + formatCurrency(featured.price) + '</span>' +
                meta.map(item => '<span class="t9-featured__tag">' + item + '</span>').join('') +
            '</div>' +
            (featured.description ? '<p class="t9-featured__desc">' + escapeHtml(featured.description) + '</p>' : '') +
            '<button class="t9-btn t9-btn--brass" type="button" data-service="' + escapeHtml(featured.id) + '">Book this service</button>';
    }

    function renderPackages(data) {
        const packages = active(data.packages);
        const services = active(data.services);
        const list = byId('t9-packages-list');
        if (!list) return;

        if (packages.length === 0) {
            hideEl('t9-packages');
            return;
        }
        showEl('t9-packages');

        const featuredIndex = Math.floor((packages.length - 1) / 2);

        list.innerHTML = packages.map((pkg, index) => {
            const ids = Array.isArray(pkg.services) ? pkg.services : [];
            const included = ids
                .map(id => services.find(service => service.id === id))
                .filter(Boolean)
                .map(service => '<li>' + escapeHtml(service.name) + '</li>')
                .join('');
            const media = pkg.image
                ? '<div class="t9-package__media">' + imgTag(pkg.image, pkg.name || 'Package') + '</div>'
                : '<div class="t9-package__media t9-package__media--fallback"><span class="t9-package__mark" aria-hidden="true">' + escapeHtml(initialsOf(pkg.name)) + '</span></div>';
            const featured = index === featuredIndex ? ' t9-package--featured' : '';
            return '<article class="t9-package' + featured + '">' + media +
                '<div class="t9-package__body">' +
                    '<h3 class="t9-package__name">' + escapeHtml(pkg.name || 'Package') + '</h3>' +
                    (pkg.description ? '<p class="t9-package__desc">' + escapeHtml(pkg.description) + '</p>' : '') +
                    (included ? '<ul class="t9-package__items">' + included + '</ul>' : '') +
                    '<div class="t9-package__foot">' +
                        '<span class="t9-package__price">' + formatCurrency(pkg.price) + '</span>' +
                        '<button class="t9-btn t9-btn--outline" type="button" data-package="' + escapeHtml(pkg.id) + '">Reserve</button>' +
                    '</div>' +
                '</div>' +
                '</article>';
        }).join('');
    }

    function renderTeam(data) {
        const team = active(data.team);
        const grid = byId('t9-team-grid');
        if (!grid) return;

        if (team.length === 0) {
            hideEl('t9-team');
            return;
        }
        showEl('t9-team');

        grid.innerHTML = team.map(member => {
            const frame = member.image
                ? '<div class="t9-member__frame">' + imgTag(member.image, member.name) + '</div>'
                : '<div class="t9-member__frame t9-member__frame--fallback"><span class="t9-member__initials" aria-hidden="true">' + escapeHtml(initialsOf(member.name)) + '</span></div>';
            return '<article class="t9-member">' + frame +
                '<div class="t9-member__body">' +
                    '<h3 class="t9-member__name">' + escapeHtml(member.name || 'Specialist') + '</h3>' +
                    (member.role ? '<span class="t9-member__role">' + escapeHtml(member.role) + '</span>' : '') +
                    (member.bio ? '<p class="t9-member__bio">' + escapeHtml(member.bio) + '</p>' : '') +
                '</div>' +
                '</article>';
        }).join('');
    }

    function renderGallery(data) {
        const gallery = active(data.gallery);
        const list = byId('t9-gallery-list');
        if (!list) return;

        if (gallery.length === 0) {
            hideEl('t9-gallery');
            return;
        }
        showEl('t9-gallery');

        list.innerHTML = gallery.map((item, index) => {
            const caption = item.title || item.category || 'View';
            const variant = GALLERY_VARIANTS[index % GALLERY_VARIANTS.length];
            return '<button class="t9-gallery__item ' + variant + '" type="button" data-index="' + index + '" aria-label="View ' + escapeHtml(caption) + '">' +
                imgTag(item.image, item.title || 'Studio work') +
                '<span class="t9-gallery__cap">' + escapeHtml(item.title || item.category || 'Studio work') + '</span>' +
                '</button>';
        }).join('');
    }

    function renderTestimonials(data) {
        const testimonials = active(data.testimonials);
        const section = byId('t9-testimonials');
        const grid = byId('t9-testimonials-grid');
        if (!section || !grid) return;

        if (testimonials.length === 0) {
            hideEl('t9-testimonials');
            return;
        }
        showEl('t9-testimonials');

        const rated = testimonials.filter(item => Number(item.rating) > 0);
        setText('t9-testimonials-count', rated.length
            ? (rated.reduce((sum, item) => sum + Number(item.rating), 0) / rated.length).toFixed(1) + ' / 5 \u00b7 ' + testimonials.length + (testimonials.length === 1 ? ' review' : ' reviews')
            : testimonials.length + (testimonials.length === 1 ? ' review' : ' reviews'));

        grid.innerHTML = testimonials.map(item => {
            const stars = starsHtml(item.rating);
            const avatar = item.customerImage
                ? '<span class="t9-review__avatar"><img src="' + escapeHtml(item.customerImage) + '" alt="" loading="lazy"></span>'
                : '<span class="t9-review__avatar" aria-hidden="true">' + escapeHtml(initialsOf(item.customerName)) + '</span>';
            return '<figure class="t9-review">' +
                (stars ? '<span class="t9-review__stars" aria-label="' + escapeHtml(String(item.rating)) + ' out of 5">' + stars + '</span>' : '') +
                '<blockquote class="t9-review__text">' + escapeHtml(item.message || '') + '</blockquote>' +
                '<figcaption class="t9-review__author">' + avatar +
                    '<span class="t9-review__name">' + escapeHtml(item.customerName || 'Client') + '</span>' +
                '</figcaption>' +
                '</figure>';
        }).join('');
    }

    function buildServiceOptions(data) {
        const services = active(data.services);
        const packages = active(data.packages);
        const select = byId('t9-booking-service');
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

    function localISODate(date) {
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, '0');
        const d = String(date.getDate()).padStart(2, '0');
        return y + '-' + m + '-' + d;
    }

    function dayKeyFor(value) {
        if (!value) return null;
        const parts = String(value).split('-');
        if (parts.length !== 3) return null;
        const date = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
        if (Number.isNaN(date.getTime())) return null;
        return DAY_KEYS[(date.getDay() + 6) % 7];
    }

    function timeSlots(dayData) {
        if (!dayData || !dayData.open || !dayData.openTime || !dayData.closeTime) return [];
        const toMinutes = value => {
            const parts = String(value).split(':');
            const h = parseInt(parts[0], 10);
            const m = parseInt(parts[1] || '0', 10);
            if (Number.isNaN(h)) return null;
            return h * 60 + m;
        };
        const start = toMinutes(dayData.openTime);
        const end = toMinutes(dayData.closeTime);
        if (start === null || end === null || end <= start) return [];
        const slots = [];
        for (let minutes = start; minutes < end; minutes += 30) {
            const h = String(Math.floor(minutes / 60)).padStart(2, '0');
            const m = String(minutes % 60).padStart(2, '0');
            slots.push(h + ':' + m);
        }
        return slots;
    }

    function renderBookingTimes() {
        const dateInput = byId('t9-booking-date');
        const timeSelect = byId('t9-booking-time');
        if (!dateInput || !timeSelect) return;

        if (!dateInput.value) {
            timeSelect.innerHTML = '<option value="" selected disabled>Select a date first</option>';
            return;
        }
        const dayKey = dayKeyFor(dateInput.value);
        const hours = storage.getOpeningHours();
        const slots = timeSlots(dayKey ? hours[dayKey] : null);
        if (slots.length === 0) {
            timeSelect.innerHTML = '<option value="" selected disabled>Closed on this day \u2014 choose another date</option>';
            return;
        }
        timeSelect.innerHTML = '<option value="" selected disabled>Select a time</option>' +
            slots.map(slot => '<option value="' + slot + '">' + formatTime(slot) + '</option>').join('');
    }

    function renderContact(data) {
        const contact = data.contact || {};

        setHtml('t9-booking-hours', todayHoursText(data.openingHours || {}));

        const info = byId('t9-contact-info');
        if (info) {
            const rows = [];
            if (contact.phone) rows.push('<div class="t9-info__row"><span class="t9-info__key">Phone</span><a href="tel:' + escapeHtml(contact.phone) + '">' + escapeHtml(contact.phone) + '</a></div>');
            if (contact.email) rows.push('<div class="t9-info__row"><span class="t9-info__key">Email</span><a href="mailto:' + escapeHtml(contact.email) + '">' + escapeHtml(contact.email) + '</a></div>');
            const address = locationLine(data);
            if (address) rows.push('<div class="t9-info__row"><span class="t9-info__key">Address</span><span>' + escapeHtml(address) + '</span></div>');
            info.innerHTML = rows.length ? rows.join('') : '<p class="t9-info__row">Contact details coming soon.</p>';
        }

        const hoursData = data.openingHours || {};
        const current = todayKey();
        setHtml('t9-opening-hours', DAY_KEYS.map(day => {
            const dayData = hoursData[day] || {};
            const isOpen = dayData.open && dayData.openTime;
            const value = isOpen ? formatTime(dayData.openTime) + ' \u2013 ' + formatTime(dayData.closeTime) : 'Closed';
            return '<div class="t9-hours__row' + (isOpen ? '' : ' t9-hours__row--closed') + (day === current ? ' is-today' : '') + '">' +
                '<span>' + DAY_LABELS[day] + '</span><span>' + value + '</span></div>';
        }).join(''));

        const social = data.socialLinks || {};
        const socialHtml = Object.keys(SOCIAL_LABELS)
            .filter(key => social[key])
            .map(key => '<a class="t9-social__link" href="' + escapeHtml(social[key]) + '" target="_blank" rel="noopener">' + SOCIAL_LABELS[key] + '</a>')
            .join('');
        if (socialHtml) {
            setHtml('t9-contact-social', socialHtml);
            showEl('t9-social-block');
        } else {
            hideEl('t9-social-block');
        }
    }

    function renderFooter(data) {
        const business = data.business || {};
        const contact = data.contact || {};
        const social = data.socialLinks || {};
        const name = business.name || 'Studio';

        setText('t9-footer-name', name);
        setText('t9-footer-tag', business.tagline || '');

        const contactItems = [];
        if (contact.phone) contactItems.push('<a href="tel:' + escapeHtml(contact.phone) + '">' + escapeHtml(contact.phone) + '</a>');
        if (contact.email) contactItems.push('<a href="mailto:' + escapeHtml(contact.email) + '">' + escapeHtml(contact.email) + '</a>');
        const address = locationLine(data);
        if (address) contactItems.push('<span>' + escapeHtml(address) + '</span>');
        setHtml('t9-footer-contact', contactItems.join(''));

        const socialHtml = Object.keys(SOCIAL_LABELS)
            .filter(key => social[key])
            .map(key => '<a class="t9-social__link" href="' + escapeHtml(social[key]) + '" target="_blank" rel="noopener">' + SOCIAL_LABELS[key] + '</a>')
            .join('');
        setHtml('t9-footer-social', socialHtml);

        setText('t9-footer-copy', '\u00a9 ' + new Date().getFullYear() + ' ' + name);
    }

    function setupHeader() {
        const header = byId('t9-header');
        const toggle = byId('t9-menu-toggle');
        const nav = byId('t9-nav');
        const scrim = byId('t9-nav-scrim');
        const mobileQuery = window.matchMedia('(max-width: 980px)');

        if (header) {
            const onScroll = () => header.classList.toggle('is-stuck', window.scrollY > 16);
            onScroll();
            window.addEventListener('scroll', onScroll, { passive: true });
        }

        const setOpen = (open, options = {}) => {
            document.body.classList.toggle('t9-nav-open', open);
            if (toggle) {
                toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
                toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
            }
            if (!open && options.restoreFocus && toggle) toggle.focus();
        };

        const close = (options) => setOpen(false, options);

        if (toggle && nav) {
            toggle.addEventListener('click', () => {
                const open = !document.body.classList.contains('t9-nav-open');
                setOpen(open);
                if (open) {
                    const first = nav.querySelector('a');
                    const focusFirst = () => {
                        if (first && document.body.classList.contains('t9-nav-open')) first.focus({ preventScroll: true });
                    };
                    if (typeof requestAnimationFrame === 'function') requestAnimationFrame(focusFirst);
                    else setTimeout(focusFirst, 0);
                }
            });
        }
        if (scrim) scrim.addEventListener('click', () => close());
        if (nav) nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => close()));
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && document.body.classList.contains('t9-nav-open')) close({ restoreFocus: true });
        });

        const syncToViewport = () => { if (!mobileQuery.matches) close(); };
        if (typeof mobileQuery.addEventListener === 'function') mobileQuery.addEventListener('change', syncToViewport);
        else if (typeof mobileQuery.addListener === 'function') mobileQuery.addListener(syncToViewport);
    }

    function setupReveal() {
        const targets = document.querySelectorAll('[data-reveal]');
        if (!('IntersectionObserver' in window)) {
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
            const select = byId('t9-booking-service');
            const value = trigger.getAttribute('data-service') || trigger.getAttribute('data-package');
            if (select && value) select.value = value;
            const booking = byId('t9-booking');
            if (booking) booking.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
        });
    }

    function setupLightbox() {
        const list = byId('t9-gallery-list');
        const lightbox = byId('t9-lightbox');
        const image = byId('t9-lightbox-image');
        const caption = byId('t9-lightbox-caption');
        const closeBtn = byId('t9-lightbox-close');
        const prevBtn = byId('t9-lightbox-prev');
        const nextBtn = byId('t9-lightbox-next');
        if (!list || !lightbox || !image || !caption || !closeBtn) return;

        let index = 0;
        let lastFocused = null;

        const paint = () => {
            const gallery = active(storage.getGallery());
            const entry = gallery[index];
            if (!entry) return;
            image.src = entry.image || FALLBACK_IMAGE;
            image.alt = entry.title || 'Gallery image';
            caption.textContent = [entry.title, entry.category].filter(Boolean).join(' \u00b7 ');
        };

        const open = (i) => {
            index = i;
            paint();
            const single = active(storage.getGallery()).length <= 1;
            if (prevBtn) prevBtn.hidden = single;
            if (nextBtn) nextBtn.hidden = single;
            lightbox.hidden = false;
            closeBtn.focus();
        };

        const close = () => {
            lightbox.hidden = true;
            image.removeAttribute('src');
            if (lastFocused) lastFocused.focus();
        };

        const step = (delta) => {
            const gallery = active(storage.getGallery());
            if (!gallery.length) return;
            index = (index + delta + gallery.length) % gallery.length;
            paint();
        };

        list.addEventListener('click', event => {
            const item = event.target.closest('.t9-gallery__item');
            if (!item) return;
            lastFocused = item;
            open(Number(item.getAttribute('data-index') || '0'));
        });

        closeBtn.addEventListener('click', close);
        if (prevBtn) prevBtn.addEventListener('click', () => step(-1));
        if (nextBtn) nextBtn.addEventListener('click', () => step(1));
        lightbox.addEventListener('click', event => {
            if (event.target === lightbox) close();
        });
        document.addEventListener('keydown', event => {
            if (lightbox.hidden) return;
            if (event.key === 'Escape') { close(); return; }
            if (event.key === 'ArrowLeft') { step(-1); return; }
            if (event.key === 'ArrowRight') { step(1); return; }
            if (event.key === 'Tab') {
                const focusable = [closeBtn, prevBtn, nextBtn].filter(node => node && !node.hidden);
                if (focusable.length === 0) return;
                const first = focusable[0];
                const last = focusable[focusable.length - 1];
                if (event.shiftKey && document.activeElement === first) {
                    event.preventDefault();
                    last.focus();
                } else if (!event.shiftKey && document.activeElement === last) {
                    event.preventDefault();
                    first.focus();
                } else if (!lightbox.contains(document.activeElement)) {
                    event.preventDefault();
                    first.focus();
                }
            }
        });
    }

    function setupBookingForm() {
        const form = byId('t9-booking-form');
        const success = byId('t9-booking-success');
        const successText = byId('t9-booking-success-text');
        const reset = byId('t9-booking-reset');
        if (!form || !success || !successText) return;

        let saving = false;

        form.addEventListener('submit', event => {
            event.preventDefault();
            if (saving) return;
            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }
            saving = true;

            const serviceId = byId('t9-booking-service').value;
            const customerName = byId('t9-booking-name').value.trim();

            const appointment = storage.addAppointment({
                customerName: customerName,
                service: serviceId,
                date: byId('t9-booking-date').value,
                time: byId('t9-booking-time').value,
                phone: byId('t9-booking-phone').value,
                email: byId('t9-booking-email').value,
                message: byId('t9-booking-message').value
            });

            saving = false;

            if (!appointment) {
                if (typeof showToast === 'function') showToast('Could not save your appointment. Please try again.', 'error');
                return;
            }

            const services = active(storage.getServices());
            const packages = active(storage.getPackages());
            const service = services.find(item => item.id === serviceId) || packages.find(item => item.id === serviceId);
            const serviceName = service ? service.name : 'service';

            successText.textContent = 'Thank you, ' + customerName + '. We have your request for ' + serviceName +
                ' on ' + formatDate(appointment.date) + ' at ' + formatTime(appointment.time) +
                '. The studio will be in touch to confirm.';
            form.hidden = true;
            success.hidden = false;
            if (typeof showToast === 'function') showToast('Appointment request received.', 'success');
        });

        if (reset) {
            reset.addEventListener('click', () => {
                form.hidden = false;
                success.hidden = true;
                form.reset();
                renderBookingTimes();
                const name = byId('t9-booking-name');
                if (name) name.focus();
            });
        }
    }

    function render(data) {
        renderMeta(data);
        renderStatus(data);
        renderHeader(data);
        renderHero(data);
        renderStats(data);
        renderAbout(data);
        renderServices(data);
        renderFeatured(data);
        renderPackages(data);
        renderTeam(data);
        renderGallery(data);
        renderTestimonials(data);
        buildServiceOptions(data);
        const dateInput = byId('t9-booking-date');
        if (dateInput) {
            dateInput.min = localISODate(new Date());
            dateInput.addEventListener('change', renderBookingTimes);
            renderBookingTimes();
        }
        renderContact(data);
        renderFooter(data);
        setupHeader();
        setupReveal();
        setupImageFallback();
        setupBookingShortcuts();
        setupLightbox();
        setupBookingForm();
    }

    window.SalonTemplates = window.SalonTemplates || {};
    window.SalonTemplates['template-9'] = { html: TEMPLATE_HTML, render: render };
})();
