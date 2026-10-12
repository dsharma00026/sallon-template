(function () {
    const TEMPLATE_HTML = `
    <div class="t7-status" id="status-banner" hidden></div>

    <div id="t7-shell" data-shell="template-7">
    <div class="t7-utility">
        <div class="t7-container t7-utility__inner">
            <span id="t7-utility-loc"></span>
            <span id="t7-utility-hours"></span>
            <a href="#t7-booking">Book a consultation</a>
        </div>
    </div>
    <header class="t7-header" id="t7-header">
        <div class="t7-container t7-header__inner">
            <a class="t7-brand" href="#t7-hero">
                <span class="t7-brand__name" id="t7-brand-name"></span>
                <span class="t7-brand__tag" id="t7-brand-tag"></span>
            </a>
            <nav class="t7-nav" id="t7-nav" aria-label="Primary">
                <ul class="t7-nav__list">
                    <li><a href="#t7-about">Studio</a></li>
                    <li><a href="#t7-services">Services</a></li>
                    <li><a href="#t7-gallery">Portfolio</a></li>
                    <li><a href="#t7-team">Team</a></li>
                    <li><a href="#t7-visit">Visit</a></li>
                </ul>
            </nav>
            <div class="t7-header__actions">
                <a class="t7-btn t7-btn--ink t7-header__cta" href="#t7-booking">Book</a>
                <button class="t7-menu-toggle" id="t7-menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="t7-nav">
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </header>
    <div class="t7-nav-scrim" id="t7-nav-scrim"></div>

    <main>
        <section class="t7-hero" id="t7-hero">
            <div class="t7-hero__frame">
                <div class="t7-hero__media" id="t7-hero-media"></div>
                <div class="t7-hero__veil"></div>
                <div class="t7-container t7-hero__content" data-reveal>
                    <p class="t7-hero__index" id="t7-hero-kicker"></p>
                    <h1 class="t7-hero__title" id="t7-hero-title"></h1>
                    <p class="t7-hero__lede" id="t7-hero-lede"></p>
                    <div class="t7-hero__actions">
                        <a class="t7-btn t7-btn--paper" href="#t7-booking">Book a consultation</a>
                        <a class="t7-link" href="#t7-gallery">View the campaign</a>
                    </div>
                </div>
                <div class="t7-container t7-hero__footer">
                    <span id="t7-hero-location"></span>
                    <span id="t7-hero-credits"></span>
                    <a class="t7-hero__scroll" href="#t7-about">Scroll <span aria-hidden="true">&darr;</span></a>
                </div>
            </div>
        </section>

        <section class="t7-section t7-about" id="t7-about">
            <div class="t7-container t7-about__grid">
                <p class="t7-eyebrow" data-reveal>The Studio</p>
                <div class="t7-about__body" data-reveal>
                    <h2 class="t7-about__title" id="t7-about-title"></h2>
                    <p class="t7-about__text" id="t7-about-text"></p>
                    <dl class="t7-about__facts" id="t7-about-facts"></dl>
                </div>
                <div class="t7-about__media" id="t7-about-media" data-reveal></div>
            </div>
        </section>

        <section class="t7-section t7-services" id="t7-services">
            <div class="t7-container">
                <div class="t7-section__head" data-reveal>
                    <div>
                        <p class="t7-eyebrow">The Menu</p>
                        <h2 class="t7-h2">Services</h2>
                    </div>
                    <p class="t7-section__count" id="t7-services-count"></p>
                </div>
                <div class="t7-services__list" id="t7-services-list" data-reveal></div>
            </div>
        </section>

        <section class="t7-featured" id="t7-featured" hidden>
            <div class="t7-featured__card" data-reveal>
                <div class="t7-featured__media" id="t7-featured-media"></div>
                <div class="t7-featured__body" id="t7-featured-body"></div>
            </div>
        </section>

        <section class="t7-section t7-packages" id="t7-packages">
            <div class="t7-container">
                <div class="t7-section__head" data-reveal>
                    <div>
                        <p class="t7-eyebrow">Curated Experiences</p>
                        <h2 class="t7-h2">Collections</h2>
                    </div>
                </div>
                <div class="t7-packages__list" id="t7-packages-list" data-reveal></div>
            </div>
        </section>

        <section class="t7-section t7-team" id="t7-team">
            <div class="t7-container">
                <div class="t7-section__head" data-reveal>
                    <div>
                        <p class="t7-eyebrow">The Collective</p>
                        <h2 class="t7-h2">The Team</h2>
                    </div>
                </div>
                <div class="t7-team__grid" id="t7-team-grid" data-reveal></div>
            </div>
        </section>

        <section class="t7-section t7-gallery" id="t7-gallery">
            <div class="t7-container">
                <div class="t7-section__head" data-reveal>
                    <div>
                        <p class="t7-eyebrow">Campaign Portfolio</p>
                        <h2 class="t7-h2">Selected Work</h2>
                    </div>
                </div>
                <div class="t7-gallery__list" id="t7-gallery-list" data-reveal></div>
            </div>
        </section>

        <section class="t7-section t7-testimonials" id="t7-testimonials">
            <div class="t7-container t7-quote" data-reveal>
                <p class="t7-eyebrow">In Their Words</p>
                <blockquote class="t7-quote__text" id="t7-quote-text"></blockquote>
                <div class="t7-quote__meta">
                    <span id="t7-quote-author"></span>
                    <span class="t7-quote__rating" id="t7-quote-rating"></span>
                </div>
                <div class="t7-quote__controls">
                    <button type="button" id="t7-quote-prev" aria-label="Previous testimonial">&larr;</button>
                    <span class="t7-quote__index" id="t7-quote-index"></span>
                    <button type="button" id="t7-quote-next" aria-label="Next testimonial">&rarr;</button>
                </div>
            </div>
        </section>

        <section class="t7-section t7-booking" id="t7-booking">
            <div class="t7-container t7-booking__grid" data-reveal>
                <div class="t7-booking__aside">
                    <p class="t7-eyebrow t7-eyebrow--light">Reservations</p>
                    <h2 class="t7-h2 t7-h2--light">Reserve your seat</h2>
                    <p class="t7-booking__text">Tell us what you would like and the studio will confirm your appointment. This is a working prototype &mdash; requests are stored on this device only.</p>
                    <ol class="t7-booking__steps">
                        <li>Choose a service or a collection.</li>
                        <li>Pick a date and an available time.</li>
                        <li>Leave your details and any notes.</li>
                    </ol>
                </div>
                <div class="t7-booking__panel">
                    <form class="t7-form" id="t7-booking-form" novalidate>
                        <div class="t7-form__row">
                            <div class="t7-field">
                                <label class="t7-field__label" for="t7-booking-name">Full name</label>
                                <input class="t7-field__input" type="text" id="t7-booking-name" name="name" autocomplete="name" required>
                            </div>
                            <div class="t7-field">
                                <label class="t7-field__label" for="t7-booking-phone">Phone</label>
                                <input class="t7-field__input" type="tel" id="t7-booking-phone" name="phone" autocomplete="tel" required>
                            </div>
                        </div>
                        <div class="t7-field">
                            <label class="t7-field__label" for="t7-booking-email">Email</label>
                            <input class="t7-field__input" type="email" id="t7-booking-email" name="email" autocomplete="email" required>
                        </div>
                        <div class="t7-field">
                            <label class="t7-field__label" for="t7-booking-service">Service or collection</label>
                            <select class="t7-field__input t7-field__select" id="t7-booking-service" name="service" required>
                                <option value="" selected disabled>Select a service</option>
                            </select>
                        </div>
                        <div class="t7-form__row">
                            <div class="t7-field">
                                <label class="t7-field__label" for="t7-booking-date">Preferred date</label>
                                <input class="t7-field__input" type="date" id="t7-booking-date" name="date" required>
                            </div>
                            <div class="t7-field">
                                <label class="t7-field__label" for="t7-booking-time">Preferred time</label>
                                <select class="t7-field__input t7-field__select" id="t7-booking-time" name="time" required>
                                    <option value="" selected disabled>Select a date first</option>
                                </select>
                            </div>
                        </div>
                        <div class="t7-field">
                            <label class="t7-field__label" for="t7-booking-message">Notes (optional)</label>
                            <textarea class="t7-field__input t7-field__textarea" id="t7-booking-message" name="message" rows="3"></textarea>
                        </div>
                        <button class="t7-btn t7-btn--accent t7-btn--block t7-form__submit" type="submit" id="t7-booking-submit">Send request</button>
                    </form>
                    <div class="t7-booking__success" id="t7-booking-success" hidden>
                        <h3 class="t7-booking__success-title">Request received</h3>
                        <p class="t7-booking__success-text" id="t7-booking-success-text"></p>
                        <button class="t7-btn t7-btn--outline" id="t7-booking-reset" type="button">Book another visit</button>
                    </div>
                </div>
            </div>
        </section>

        <section class="t7-section t7-visit" id="t7-visit">
            <div class="t7-container">
                <div class="t7-section__head" data-reveal>
                    <div>
                        <p class="t7-eyebrow">Visit</p>
                        <h2 class="t7-h2">Find us</h2>
                    </div>
                </div>
                <div class="t7-visit__grid" data-reveal>
                    <div id="t7-contact-info"></div>
                    <div>
                        <h3 class="t7-col__title">Opening hours</h3>
                        <div class="t7-hours" id="t7-opening-hours"></div>
                    </div>
                    <div id="t7-social-block">
                        <h3 class="t7-col__title">Follow</h3>
                        <div class="t7-social" id="t7-contact-social"></div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="t7-footer" id="t7-footer">
        <div class="t7-container">
            <div class="t7-footer__cta" data-reveal>
                <p class="t7-footer__cta-text" id="t7-footer-cta-text"></p>
                <a class="t7-btn t7-btn--accent" href="#t7-booking">Book a consultation</a>
            </div>
            <div class="t7-footer__word" id="t7-footer-word" aria-hidden="true"></div>
            <div class="t7-footer__grid">
                <nav aria-label="Footer">
                    <h3 class="t7-footer__heading">Explore</h3>
                    <ul class="t7-footer__list">
                        <li><a href="#t7-about">Studio</a></li>
                        <li><a href="#t7-services">Services</a></li>
                        <li><a href="#t7-gallery">Portfolio</a></li>
                        <li><a href="#t7-team">Team</a></li>
                        <li><a href="#t7-booking">Book</a></li>
                    </ul>
                </nav>
                <div>
                    <h3 class="t7-footer__heading">Contact</h3>
                    <div class="t7-footer__contact" id="t7-footer-contact"></div>
                </div>
                <div>
                    <h3 class="t7-footer__heading">Social</h3>
                    <div class="t7-footer__social t7-social" id="t7-footer-social"></div>
                </div>
            </div>
            <div class="t7-footer__bottom">
                <p id="t7-footer-copy"></p>
                <a href="admin.html">Admin Panel</a>
            </div>
        </div>
    </footer>

    <div class="t7-lightbox" id="t7-lightbox" hidden role="dialog" aria-modal="true" aria-label="Gallery image">
        <button class="t7-lightbox__close" id="t7-lightbox-close" type="button" aria-label="Close image">&times;</button>
        <figure class="t7-lightbox__figure">
            <img class="t7-lightbox__image" id="t7-lightbox-image" alt="">
            <figcaption class="t7-lightbox__caption" id="t7-lightbox-caption"></figcaption>
        </figure>
    </div>
    </div>`;

    const FALLBACK_IMAGE = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1500" viewBox="0 0 1200 1500">' +
        '<rect width="1200" height="1500" fill="#15130f"/>' +
        '<line x1="0" y1="750" x2="1200" y2="750" stroke="#c1121f" stroke-width="3"/>' +
        '<text x="600" y="860" font-family="Georgia, serif" font-style="italic" font-size="54" fill="#f4f2ee" text-anchor="middle">Campaign</text>' +
        '<text x="600" y="916" font-family="Arial, sans-serif" font-size="20" letter-spacing="8" fill="#8a837a" text-anchor="middle">IMAGE UNAVAILABLE</text>' +
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

    function accentLastWord(text) {
        const value = String(text || '').trim();
        const words = value.split(/\s+/).filter(Boolean);
        if (words.length < 2) return escapeHtml(value);
        const last = words.pop();
        return escapeHtml(words.join(' ')) + ' <em>' + escapeHtml(last) + '</em>';
    }

    function categoriesOf(services) {
        const seen = [];
        services.forEach(service => {
            const category = service.category && String(service.category).trim();
            if (category && seen.indexOf(category) === -1) seen.push(category);
        });
        return seen;
    }

    function statusText(status) {
        if (status === 'draft') return 'This site is a draft and not yet published.';
        if (status === 'maintenance') return 'The studio is temporarily offline while we update.';
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
        const tagline = business.tagline || '';
        const description = business.description || 'A fashion-forward hair studio.';

        document.title = tagline ? name + ' \u2014 ' + tagline : name;

        const summary = firstSentence(description, 160);
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', summary);
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', document.title);
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute('content', summary);

        if (business.faviconUrl) {
            let icon = document.querySelector('link[rel="icon"]');
            if (!icon) {
                icon = document.createElement('link');
                icon.rel = 'icon';
                document.head.appendChild(icon);
            }
            icon.href = business.faviconUrl;
        }

        document.body.dataset.template = settings.selectedTemplate || 'template-7';
    }

    function renderHeader(data) {
        const business = data.business || {};
        const contact = data.contact || {};
        const hours = data.openingHours || {};
        setText('t7-brand-name', business.name || 'Studio');
        setText('t7-brand-tag', business.tagline || '');

        const location = [business.city, business.country].filter(Boolean).join(', ') || contact.address || '';
        setText('t7-utility-loc', location ? 'Studio \u00b7 ' + location : 'Hair & Beauty');
        setText('t7-utility-hours', todayHoursText(hours));
    }

    function renderHero(data) {
        const business = data.business || {};
        const services = active(data.services);
        const categories = categoriesOf(services);

        setHtml('t7-hero-kicker', '<span>\u2116 01</span> \u2014 ' + escapeHtml(categories.length ? categories.join(' \u00b7 ') : 'Studio'));
        setHtml('t7-hero-title', accentLastWord(business.tagline || business.name || 'A Fashion Hair Studio'));
        setText('t7-hero-lede', firstSentence(business.description, 190));

        const location = [business.city, business.country].filter(Boolean).join(', ') || contactLine(data);
        setText('t7-hero-location', location);
        setText('t7-hero-credits', categories.length ? categories.join(' \u00b7 ') : (business.tagline || ''));

        const media = byId('t7-hero-media');
        if (!media) return;
        const galleryItems = active(data.gallery);
        if (galleryItems.length === 0) {
            media.classList.add('t7-hero__media--fallback');
            media.innerHTML = '<span class="t7-hero__mark" aria-hidden="true">' + escapeHtml(initialsOf(business.name)) + '</span>';
        } else {
            media.classList.remove('t7-hero__media--fallback');
            media.innerHTML = imgTag(galleryItems[0].image, galleryItems[0].title || business.name || 'Campaign', { eager: true });
        }
    }

    function contactLine(data) {
        const contact = data.contact || {};
        const business = data.business || {};
        return contact.address || [business.address, business.city, business.country].filter(Boolean).join(', ');
    }

    function renderAbout(data) {
        const business = data.business || {};
        const contact = data.contact || {};
        const hours = data.openingHours || {};
        const gallery = active(data.gallery);

        if (!business.description && !business.name) {
            hideEl('t7-about');
            return;
        }
        showEl('t7-about');

        setText('t7-about-title', business.tagline || business.name || 'The Studio');
        setText('t7-about-text', business.description || business.tagline || 'A fashion-forward studio for hair, colour and beauty.');

        const facts = [];
        const location = [business.city, business.country].filter(Boolean).join(', ');
        if (location) facts.push({ k: 'Location', v: location });
        if (contact.phone) facts.push({ k: 'Call', v: contact.phone });
        facts.push({ k: 'Today', v: todayHoursText(hours) });
        setHtml('t7-about-facts', facts.map(fact =>
            '<div class="t7-about__fact"><dt>' + escapeHtml(fact.k) + '</dt><dd>' + escapeHtml(fact.v) + '</dd></div>'
        ).join(''));

        const media = byId('t7-about-media');
        if (!media) return;
        const image = gallery[1] || gallery[0];
        if (!image) {
            media.classList.add('t7-about__media--fallback');
            media.innerHTML = '<span class="t7-about__mark" aria-hidden="true">' + escapeHtml(initialsOf(business.name)) + '</span>';
        } else {
            media.classList.remove('t7-about__media--fallback');
            media.innerHTML = imgTag(image.image, image.title || business.name || 'Studio');
        }
    }

    function renderServices(data) {
        const services = active(data.services);
        const list = byId('t7-services-list');
        if (!list) return;

        if (services.length === 0) {
            hideEl('t7-services');
            return;
        }
        showEl('t7-services');

        setText('t7-services-count', services.length + (services.length === 1 ? ' offering' : ' offerings'));

        list.innerHTML = services.map((service, index) => {
            const number = String(index + 1).padStart(2, '0');
            const meta = [];
            if (service.category) meta.push('<span>' + escapeHtml(service.category) + '</span>');
            if (service.duration) meta.push('<span>' + escapeHtml(String(service.duration)) + ' min</span>');
            return '<article class="t7-service">' +
                '<span class="t7-service__index">' + number + '</span>' +
                '<div class="t7-service__main">' +
                    '<h3 class="t7-service__name">' + escapeHtml(service.name || 'Service') + '</h3>' +
                    (meta.length ? '<p class="t7-service__meta">' + meta.join('') + '</p>' : '') +
                    (service.description ? '<p class="t7-service__desc">' + escapeHtml(service.description) + '</p>' : '') +
                '</div>' +
                '<div class="t7-service__aside">' +
                    '<span class="t7-service__price">' + formatCurrency(service.price) + '</span>' +
                    '<button class="t7-service__book" type="button" data-service="' + escapeHtml(service.id) + '">Book</button>' +
                '</div>' +
            '</article>';
        }).join('');
    }

    function renderFeatured(data) {
        const services = active(data.services);
        const gallery = active(data.gallery);
        const body = byId('t7-featured-body');
        const media = byId('t7-featured-media');
        if (!body || !media) return;

        if (services.length === 0) {
            hideEl('t7-featured');
            return;
        }
        showEl('t7-featured');

        const featured = services.reduce((best, service) =>
            (Number(service.price) || 0) > (Number(best.price) || 0) ? service : best, services[0]);

        const image = gallery.find(item => item.category && featured.category && item.category === featured.category) || gallery[0];
        media.innerHTML = image
            ? imgTag(featured.image || image.image, featured.name || 'Signature service')
            : '<span class="t7-featured__fallback" aria-hidden="true">' + escapeHtml(initialsOf(featured.name)) + '</span>';

        body.innerHTML =
            '<p class="t7-eyebrow t7-eyebrow--light">Signature</p>' +
            '<h3 class="t7-featured__name">' + escapeHtml(featured.name || 'Featured service') + '</h3>' +
            '<div class="t7-featured__meta">' +
                '<span class="t7-featured__price">' + formatCurrency(featured.price) + '</span>' +
                (featured.duration ? '<span>' + escapeHtml(String(featured.duration)) + ' min</span>' : '') +
                (featured.category ? '<span>' + escapeHtml(featured.category) + '</span>' : '') +
            '</div>' +
            (featured.description ? '<p class="t7-featured__desc">' + escapeHtml(featured.description) + '</p>' : '') +
            '<button class="t7-btn t7-btn--paper" type="button" data-service="' + escapeHtml(featured.id) + '">Reserve this</button>';
    }

    function renderPackages(data) {
        const packages = active(data.packages);
        const services = active(data.services);
        const list = byId('t7-packages-list');
        if (!list) return;

        if (packages.length === 0) {
            hideEl('t7-packages');
            return;
        }
        showEl('t7-packages');

        list.innerHTML = packages.map((pkg, index) => {
            const number = String(index + 1).padStart(2, '0');
            const ids = Array.isArray(pkg.services) ? pkg.services : [];
            const included = ids
                .map(id => services.find(service => service.id === id))
                .filter(Boolean)
                .map(service => '<li>' + escapeHtml(service.name) + '</li>')
                .join('');
            const items = included || (pkg.description ? '' : '<li>A curated visit</li>');
            return '<article class="t7-package">' +
                '<span class="t7-package__index">' + number + '</span>' +
                '<div class="t7-package__body">' +
                    '<h3 class="t7-package__name">' + escapeHtml(pkg.name || 'Collection') + '</h3>' +
                    (pkg.description ? '<p class="t7-package__desc">' + escapeHtml(pkg.description) + '</p>' : '') +
                    (items ? '<ul class="t7-package__items">' + items + '</ul>' : '') +
                '</div>' +
                '<div class="t7-package__aside">' +
                    '<span class="t7-package__price">' + formatCurrency(pkg.price) + '</span>' +
                    '<button class="t7-btn t7-btn--outline" type="button" data-package="' + escapeHtml(pkg.id) + '">Reserve</button>' +
                '</div>' +
                '</article>';
        }).join('');
    }

    function renderTeam(data) {
        const team = active(data.team);
        const grid = byId('t7-team-grid');
        if (!grid) return;

        if (team.length === 0) {
            hideEl('t7-team');
            return;
        }
        showEl('t7-team');

        grid.innerHTML = team.map(member => {
            const frame = member.image
                ? '<div class="t7-member__frame">' + imgTag(member.image, member.name) + '</div>'
                : '<div class="t7-member__frame t7-member__frame--fallback"><span class="t7-member__initials" aria-hidden="true">' + escapeHtml(initialsOf(member.name)) + '</span></div>';
            return '<article class="t7-member">' + frame +
                '<div class="t7-member__meta">' +
                    '<h3 class="t7-member__name">' + escapeHtml(member.name || 'Stylist') + '</h3>' +
                    (member.role ? '<span class="t7-member__role">' + escapeHtml(member.role) + '</span>' : '') +
                '</div>' +
                (member.bio ? '<p class="t7-member__bio">' + escapeHtml(member.bio) + '</p>' : '') +
                '</article>';
        }).join('');
    }

    function renderGallery(data) {
        const gallery = active(data.gallery);
        const list = byId('t7-gallery-list');
        if (!list) return;

        if (gallery.length === 0) {
            hideEl('t7-gallery');
            return;
        }
        showEl('t7-gallery');

        list.innerHTML = gallery.map((item, index) => {
            const number = String(index + 1).padStart(2, '0');
            const meta = [item.title, item.category].filter(Boolean).join(' \u00b7 ');
            return '<button class="t7-gallery__item" type="button" data-index="' + index + '" aria-label="View ' + escapeHtml(item.title || 'image') + '">' +
                imgTag(item.image, item.title || 'Portfolio work') +
                '<span class="t7-gallery__caption"><span class="t7-gallery__no">' + number + '</span>' + escapeHtml(meta || 'View') + '</span>' +
                '</button>';
        }).join('');
    }

    function renderTestimonials(data) {
        const testimonials = active(data.testimonials);
        const section = byId('t7-testimonials');
        if (!section) return;

        if (testimonials.length === 0) {
            hideEl('t7-testimonials');
            return;
        }
        showEl('t7-testimonials');

        const text = byId('t7-quote-text');
        const author = byId('t7-quote-author');
        const rating = byId('t7-quote-rating');
        const indexLabel = byId('t7-quote-index');
        const prev = byId('t7-quote-prev');
        const next = byId('t7-quote-next');

        let current = 0;
        let timer = null;

        const paint = () => {
            const item = testimonials[current];
            if (!item) return;
            if (text) text.textContent = item.message || '';
            if (author) author.textContent = item.customerName || 'Guest';
            if (rating) {
                const stars = Math.max(0, Math.min(5, Number(item.rating) || 0));
                rating.textContent = stars > 0 ? '\u2605'.repeat(stars) + '\u2606'.repeat(5 - stars) : '';
            }
            if (indexLabel) {
                indexLabel.textContent = String(current + 1).padStart(2, '0') + ' / ' + String(testimonials.length).padStart(2, '0');
            }
        };

        const show = (target) => {
            const next_index = (target + testimonials.length) % testimonials.length;
            if (next_index === current) return;
            current = next_index;
            if (prefersReducedMotion() || !text) {
                paint();
                return;
            }
            text.classList.add('is-swapping');
            window.setTimeout(() => {
                paint();
                text.classList.remove('is-swapping');
            }, 220);
        };

        const stopAuto = () => {
            if (timer) { window.clearInterval(timer); timer = null; }
        };
        const startAuto = () => {
            stopAuto();
            if (prefersReducedMotion() || testimonials.length < 2) return;
            timer = window.setInterval(() => show(current + 1), 7000);
        };

        if (prev) prev.addEventListener('click', () => { stopAuto(); show(current - 1); startAuto(); });
        if (next) next.addEventListener('click', () => { stopAuto(); show(current + 1); startAuto(); });
        section.addEventListener('keydown', event => {
            if (event.key === 'ArrowLeft') { stopAuto(); show(current - 1); startAuto(); }
            if (event.key === 'ArrowRight') { stopAuto(); show(current + 1); startAuto(); }
        });
        section.addEventListener('mouseenter', stopAuto);
        section.addEventListener('mouseleave', startAuto);
        section.addEventListener('focusin', stopAuto);

        paint();
        startAuto();
    }

    function buildServiceOptions(data) {
        const services = active(data.services);
        const packages = active(data.packages);
        const select = byId('t7-booking-service');
        if (!select) return;

        const serviceOptions = services.map(service =>
            '<option value="' + escapeHtml(service.id) + '">' + escapeHtml(service.name) + ' \u2014 ' + formatCurrency(service.price) + '</option>').join('');
        const packageOptions = packages.map(pkg =>
            '<option value="' + escapeHtml(pkg.id) + '">' + escapeHtml(pkg.name) + ' \u2014 ' + formatCurrency(pkg.price) + ' (collection)</option>').join('');

        let html = '<option value="" selected disabled>Select a service</option>';
        if (serviceOptions) html += '<optgroup label="Services">' + serviceOptions + '</optgroup>';
        if (packageOptions) html += '<optgroup label="Collections">' + packageOptions + '</optgroup>';
        if (!serviceOptions && !packageOptions) html = '<option value="" selected disabled>No services available yet</option>';
        select.innerHTML = html;
    }

    function localISODate(date) {
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, '0');
        const d = String(date.getDate()).padStart(2, '0');
        return y + '-' + m + '-' + d;
    }

    function dayKeyFor(dateString) {
        if (!dateString) return null;
        const date = new Date(dateString + 'T12:00:00');
        if (Number.isNaN(date.getTime())) return null;
        return DAY_KEYS[(date.getDay() + 6) % 7];
    }

    function timeSlots(hours) {
        if (!hours || !hours.open || !hours.openTime || !hours.closeTime) return [];
        const toMinutes = value => {
            const parts = String(value).split(':');
            const h = parseInt(parts[0], 10);
            const m = parseInt(parts[1] || '0', 10);
            if (Number.isNaN(h)) return null;
            return h * 60 + m;
        };
        const start = toMinutes(hours.openTime);
        const end = toMinutes(hours.closeTime);
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
        const dateInput = byId('t7-booking-date');
        const timeSelect = byId('t7-booking-time');
        if (!dateInput || !timeSelect) return;

        if (!dateInput.value) {
            timeSelect.innerHTML = '<option value="" selected disabled>Select a date first</option>';
            return;
        }
        const dayKey = dayKeyFor(dateInput.value);
        const dayData = dayKey ? storage.getOpeningHours()[dayKey] : null;
        const slots = timeSlots(dayData);

        if (slots.length === 0) {
            timeSelect.innerHTML = '<option value="" selected disabled>Closed on this day \u2014 choose another date</option>';
            return;
        }
        timeSelect.innerHTML = '<option value="" selected disabled>Select a time</option>' +
            slots.map(slot => '<option value="' + slot + '">' + formatTime(slot) + '</option>').join('');
    }

    function renderContact(data) {
        const contact = data.contact || {};
        const business = data.business || {};
        const info = byId('t7-contact-info');
        if (info) {
            const rows = [];
            if (contact.phone) {
                rows.push('<div class="t7-contact__row"><span class="t7-contact__key">Phone</span><span class="t7-contact__value"><a href="tel:' + escapeHtml(contact.phone) + '">' + escapeHtml(contact.phone) + '</a></span></div>');
            }
            if (contact.email) {
                rows.push('<div class="t7-contact__row"><span class="t7-contact__key">Email</span><span class="t7-contact__value"><a href="mailto:' + escapeHtml(contact.email) + '">' + escapeHtml(contact.email) + '</a></span></div>');
            }
            const address = contact.address || [business.address, business.city, business.country].filter(Boolean).join(', ');
            if (address) {
                const maps = contact.googleMapsUrl
                    ? '<a class="t7-contact__maps" href="' + escapeHtml(contact.googleMapsUrl) + '" target="_blank" rel="noopener">Get directions</a>'
                    : '';
                rows.push('<div class="t7-contact__row"><span class="t7-contact__key">Studio</span><span class="t7-contact__value">' + escapeHtml(address) + (maps ? '<br>' + maps : '') + '</span></div>');
            }
            info.innerHTML = rows.length ? rows.join('') : '<p class="t7-contact__value">Contact details coming soon.</p>';
        }

        const hours = data.openingHours || {};
        const current = todayKey();
        setHtml('t7-opening-hours', DAY_KEYS.map(day => {
            const dayData = hours[day] || {};
            const isOpen = dayData.open && dayData.openTime;
            const value = isOpen ? formatTime(dayData.openTime) + ' \u2013 ' + formatTime(dayData.closeTime) : 'Closed';
            return '<div class="t7-hours__row' + (isOpen ? '' : ' t7-hours__row--closed') + (day === current ? ' is-today' : '') + '">' +
                '<span class="t7-hours__day">' + DAY_LABELS[day] + '</span><span>' + value + '</span></div>';
        }).join(''));

        const social = data.socialLinks || {};
        const socialHtml = Object.keys(SOCIAL_LABELS)
            .filter(key => social[key])
            .map(key => '<a class="t7-social__link" href="' + escapeHtml(social[key]) + '" target="_blank" rel="noopener">' + SOCIAL_LABELS[key] + '</a>')
            .join('');
        if (socialHtml) {
            setHtml('t7-contact-social', socialHtml);
        } else {
            hideEl('t7-social-block');
        }
    }

    function renderFooter(data) {
        const business = data.business || {};
        const contact = data.contact || {};
        const social = data.socialLinks || {};
        const name = business.name || 'Studio';

        setText('t7-footer-cta-text', business.tagline ? name + ' \u2014 ' + business.tagline : 'Reserve your visit');
        setText('t7-footer-word', name);

        const contactItems = [];
        if (contact.phone) contactItems.push('<a href="tel:' + escapeHtml(contact.phone) + '">' + escapeHtml(contact.phone) + '</a>');
        if (contact.email) contactItems.push('<a href="mailto:' + escapeHtml(contact.email) + '">' + escapeHtml(contact.email) + '</a>');
        const address = contact.address || [business.address, business.city, business.country].filter(Boolean).join(', ');
        if (address) contactItems.push('<span>' + escapeHtml(address) + '</span>');
        setHtml('t7-footer-contact', contactItems.join(''));

        const socialHtml = Object.keys(SOCIAL_LABELS)
            .filter(key => social[key])
            .map(key => '<a class="t7-social__link" href="' + escapeHtml(social[key]) + '" target="_blank" rel="noopener">' + SOCIAL_LABELS[key] + '</a>')
            .join('');
        setHtml('t7-footer-social', socialHtml);

        setText('t7-footer-copy', '\u00a9 ' + new Date().getFullYear() + ' ' + name);
    }

    function setupHeader() {
        const header = byId('t7-header');
        const toggle = byId('t7-menu-toggle');
        const nav = byId('t7-nav');
        const scrim = byId('t7-nav-scrim');

        if (header) {
            const onScroll = () => header.classList.toggle('is-stuck', window.scrollY > 16);
            onScroll();
            window.addEventListener('scroll', onScroll, { passive: true });
        }

        const isMobileNav = () => typeof window.matchMedia !== 'function'
            || window.matchMedia('(max-width: 1024px)').matches;

        const headerFocusables = () => Array.from(document.querySelectorAll('.t7-header a, .t7-header button'))
            .filter(el => window.getComputedStyle(el).display !== 'none');

        const open = () => {
            document.body.classList.add('t7-nav-open');
            if (toggle) toggle.setAttribute('aria-expanded', 'true');
            if (isMobileNav()) {
                const first = document.querySelector('.t7-nav__list a');
                if (first) window.setTimeout(() => first.focus(), 60);
            }
        };

        const close = (refocus) => {
            document.body.classList.remove('t7-nav-open');
            if (toggle) toggle.setAttribute('aria-expanded', 'false');
            if (refocus && isMobileNav() && toggle) toggle.focus();
        };

        if (toggle && nav) {
            toggle.addEventListener('click', () => {
                if (document.body.classList.contains('t7-nav-open')) close(false);
                else open();
            });
        }
        if (scrim) scrim.addEventListener('click', () => close(true));
        document.querySelectorAll('.t7-nav__list a').forEach(link => link.addEventListener('click', () => close(false)));
        document.addEventListener('keydown', event => {
            if (!document.body.classList.contains('t7-nav-open')) return;
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
        }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
        targets.forEach(node => observer.observe(node));
    }

    function setupImageFallback() {
        document.addEventListener('error', event => {
            const img = event.target;
            if (img && img.tagName === 'IMG' && img.getAttribute('src') !== FALLBACK_IMAGE) {
                img.setAttribute('src', FALLBACK_IMAGE);
            }
        });
    }

    function setupBookingShortcuts() {
        document.addEventListener('click', event => {
            const trigger = event.target.closest('[data-service], [data-package]');
            if (!trigger) return;
            const serviceSelect = byId('t7-booking-service');
            const value = trigger.getAttribute('data-service') || trigger.getAttribute('data-package');
            if (serviceSelect) serviceSelect.value = value || '';
            const section = byId('t7-booking');
            if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    function setupLightbox() {
        const list = byId('t7-gallery-list');
        const lightbox = byId('t7-lightbox');
        const image = byId('t7-lightbox-image');
        const caption = byId('t7-lightbox-caption');
        const closeBtn = byId('t7-lightbox-close');
        if (!list || !lightbox || !image || !caption || !closeBtn) return;

        let lastFocused = null;

        const hide = () => {
            lightbox.hidden = true;
            image.removeAttribute('src');
            if (lastFocused) lastFocused.focus();
        };

        list.addEventListener('click', event => {
            const item = event.target.closest('.t7-gallery__item');
            if (!item) return;
            const gallery = active(storage.getGallery());
            const entry = gallery[Number(item.getAttribute('data-index') || '0')];
            if (!entry) return;
            lastFocused = item;
            image.src = entry.image || FALLBACK_IMAGE;
            image.alt = entry.title || 'Gallery image';
            caption.textContent = [entry.title, entry.category].filter(Boolean).join(' \u00b7 ');
            lightbox.hidden = false;
            closeBtn.focus();
        });

        closeBtn.addEventListener('click', hide);
        lightbox.addEventListener('click', event => {
            if (event.target === lightbox) hide();
        });
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && !lightbox.hidden) hide();
        });
    }

    function setupBookingForm() {
        const form = byId('t7-booking-form');
        const success = byId('t7-booking-success');
        const successText = byId('t7-booking-success-text');
        const reset = byId('t7-booking-reset');
        const submit = byId('t7-booking-submit');
        if (!form || !success || !successText) return;

        let saving = false;

        form.addEventListener('submit', event => {
            event.preventDefault();
            if (saving) return;

            if (!form.reportValidity()) return;

            const serviceId = byId('t7-booking-service').value;
            const name = byId('t7-booking-name').value.trim();

            saving = true;
            if (submit) submit.disabled = true;

            const appointment = storage.addAppointment({
                customerName: name,
                phone: byId('t7-booking-phone').value.trim(),
                email: byId('t7-booking-email').value.trim(),
                service: serviceId,
                date: byId('t7-booking-date').value,
                time: byId('t7-booking-time').value,
                message: byId('t7-booking-message').value.trim()
            });

            saving = false;
            if (submit) submit.disabled = false;

            if (!appointment) {
                showToast('We could not save your request. Please try again.', 'error');
                return;
            }

            const serviceName = getServiceName(serviceId, active(storage.getServices()));
            successText.textContent = name + ', your request for ' + serviceName + ' on ' + formatDate(appointment.date) + ' at ' + formatTime(appointment.time) + ' has been noted. The studio will be in touch.';
            form.hidden = true;
            success.hidden = false;
            showToast('Your request has been received.', 'success');
        });

        if (reset) {
            reset.addEventListener('click', () => {
                form.reset();
                success.hidden = true;
                form.hidden = false;
                renderBookingTimes();
                const name = byId('t7-booking-name');
                if (name) name.focus();
            });
        }
    }

    function render(data) {
        renderMeta(data);
        renderStatus(data);
        renderHeader(data);
        renderHero(data);
        renderAbout(data);
        renderServices(data);
        renderFeatured(data);
        renderPackages(data);
        renderTeam(data);
        renderGallery(data);
        renderTestimonials(data);
        buildServiceOptions(data);
        const dateInput = byId('t7-booking-date');
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
    window.SalonTemplates['template-7'] = { html: TEMPLATE_HTML, render: render };
})();
