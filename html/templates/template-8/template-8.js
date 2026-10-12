(function () {
    const TEMPLATE_HTML = `
    <div class="t8-status" id="status-banner" hidden></div>

    <div id="t8-shell" data-shell="template-8">
    <div class="t8-utility">
        <div class="t8-container t8-utility__inner">
            <span id="t8-utility-loc"></span>
            <span id="t8-utility-hours"></span>
            <a href="#t8-booking">Book now</a>
        </div>
    </div>
    <header class="t8-header" id="t8-header">
        <div class="t8-container t8-header__inner">
            <a class="t8-brand" href="#t8-hero">
                <span class="t8-brand__name" id="t8-brand-name"></span>
                <span class="t8-brand__tag" id="t8-brand-tag"></span>
            </a>
            <nav class="t8-nav" id="t8-nav" aria-label="Primary">
                <ul class="t8-nav__list">
                    <li><a href="#t8-about">Studio</a></li>
                    <li><a href="#t8-services">Services</a></li>
                    <li><a href="#t8-packages">Packages</a></li>
                    <li><a href="#t8-gallery">Gallery</a></li>
                    <li><a href="#t8-team">Team</a></li>
                    <li><a href="#t8-visit">Visit</a></li>
                </ul>
            </nav>
            <div class="t8-header__actions">
                <a class="t8-btn t8-btn--primary t8-header__cta" id="t8-header-cta" href="#t8-booking">Book</a>
                <button class="t8-menu-toggle" id="t8-menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="t8-nav">
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </header>
    <div class="t8-nav-scrim" id="t8-nav-scrim"></div>

    <main>
        <section class="t8-hero" id="t8-hero">
            <div class="t8-hero__bg" aria-hidden="true"></div>
            <div class="t8-container t8-hero__inner">
                <div class="t8-hero__copy">
                    <p class="t8-eyebrow t8-hero__eyebrow" id="t8-hero-eyebrow"></p>
                    <h1 class="t8-hero__title" id="t8-hero-title"></h1>
                    <p class="t8-hero__lede" id="t8-hero-lede"></p>
                    <div class="t8-hero__actions">
                        <a class="t8-btn t8-btn--primary" href="#t8-booking">Book an appointment</a>
                        <a class="t8-btn t8-btn--ghost" href="#t8-services">View services</a>
                    </div>
                    <p class="t8-hero__note" id="t8-hero-note"></p>
                </div>
                <div class="t8-hero__figure">
                    <div class="t8-hero__media t8-arch" id="t8-hero-media"></div>
                    <div class="t8-hero__badge" id="t8-hero-badge" hidden></div>
                </div>
            </div>
        </section>

        <section class="t8-section t8-about" id="t8-about" data-reveal>
            <div class="t8-container t8-about__inner">
                <div class="t8-about__media t8-arch" id="t8-about-media"></div>
                <div class="t8-about__body">
                    <p class="t8-eyebrow">Our philosophy</p>
                    <h2 class="t8-h2" id="t8-about-title"></h2>
                    <p class="t8-about__text" id="t8-about-text"></p>
                    <div class="t8-about__values" id="t8-about-values"></div>
                </div>
            </div>
        </section>

        <section class="t8-section t8-services" id="t8-services" data-reveal>
            <div class="t8-container">
                <div class="t8-section__head">
                    <div>
                        <p class="t8-eyebrow">Services</p>
                        <h2 class="t8-h2">Treatments &amp; styling</h2>
                    </div>
                    <p class="t8-section__count" id="t8-services-count"></p>
                </div>
                <div class="t8-services__grid" id="t8-services-list"></div>
            </div>
        </section>

        <section class="t8-featured" id="t8-featured" data-reveal hidden>
            <div class="t8-container t8-featured__inner">
                <div class="t8-featured__media t8-arch" id="t8-featured-media"></div>
                <div class="t8-featured__body" id="t8-featured-body"></div>
            </div>
        </section>

        <section class="t8-section t8-packages" id="t8-packages" data-reveal>
            <div class="t8-container">
                <div class="t8-section__head">
                    <div>
                        <p class="t8-eyebrow">Curated packages</p>
                        <h2 class="t8-h2">Signature experiences</h2>
                    </div>
                </div>
                <div class="t8-packages__grid" id="t8-packages-list"></div>
            </div>
        </section>

        <section class="t8-section t8-team" id="t8-team" data-reveal>
            <div class="t8-container">
                <div class="t8-section__head">
                    <div>
                        <p class="t8-eyebrow">The team</p>
                        <h2 class="t8-h2">Meet your stylists</h2>
                    </div>
                </div>
                <div class="t8-team__grid" id="t8-team-grid"></div>
            </div>
        </section>

        <section class="t8-section t8-gallery" id="t8-gallery" data-reveal>
            <div class="t8-container">
                <div class="t8-section__head">
                    <div>
                        <p class="t8-eyebrow">Gallery</p>
                        <h2 class="t8-h2">Sunlit transformations</h2>
                    </div>
                </div>
                <div class="t8-gallery__grid" id="t8-gallery-list"></div>
            </div>
        </section>

        <section class="t8-section t8-testimonials" id="t8-testimonials" data-reveal>
            <div class="t8-container">
                <div class="t8-section__head">
                    <div>
                        <p class="t8-eyebrow">Kind words</p>
                        <h2 class="t8-h2">Loved by our guests</h2>
                    </div>
                    <p class="t8-section__count" id="t8-testimonials-count"></p>
                </div>
                <div class="t8-quotes" id="t8-testimonials-grid"></div>
            </div>
        </section>

        <section class="t8-section t8-booking" id="t8-booking" data-reveal>
            <div class="t8-container t8-booking__inner">
                <div class="t8-booking__aside">
                    <p class="t8-eyebrow t8-eyebrow--light">Reservations</p>
                    <h2 class="t8-h2">Reserve your visit</h2>
                    <p class="t8-booking__text">Tell us what you would like and the studio will confirm your appointment. This is a working prototype &mdash; requests are stored on this device only.</p>
                    <ol class="t8-booking__steps">
                        <li>Choose a service or a package.</li>
                        <li>Pick a date and an available time.</li>
                        <li>Leave your details and any notes.</li>
                    </ol>
                    <div class="t8-booking__hours" id="t8-booking-hours"></div>
                </div>
                <div class="t8-booking__panel">
                    <form class="t8-form" id="t8-booking-form" novalidate>
                        <div class="t8-form__row">
                            <div class="t8-field">
                                <label class="t8-field__label" for="t8-booking-name">Full name</label>
                                <input class="t8-field__input" type="text" id="t8-booking-name" name="name" autocomplete="name" required>
                            </div>
                            <div class="t8-field">
                                <label class="t8-field__label" for="t8-booking-phone">Phone</label>
                                <input class="t8-field__input" type="tel" id="t8-booking-phone" name="phone" autocomplete="tel" required>
                            </div>
                        </div>
                        <div class="t8-field">
                            <label class="t8-field__label" for="t8-booking-email">Email</label>
                            <input class="t8-field__input" type="email" id="t8-booking-email" name="email" autocomplete="email" required>
                        </div>
                        <div class="t8-field">
                            <label class="t8-field__label" for="t8-booking-service">Service or package</label>
                            <select class="t8-field__input" id="t8-booking-service" name="service" required></select>
                        </div>
                        <div class="t8-form__row">
                            <div class="t8-field">
                                <label class="t8-field__label" for="t8-booking-date">Preferred date</label>
                                <input class="t8-field__input" type="date" id="t8-booking-date" name="date" required>
                            </div>
                            <div class="t8-field">
                                <label class="t8-field__label" for="t8-booking-time">Preferred time</label>
                                <select class="t8-field__input" id="t8-booking-time" name="time" required></select>
                            </div>
                        </div>
                        <div class="t8-field">
                            <label class="t8-field__label" for="t8-booking-message">Notes <span class="t8-field__opt">optional</span></label>
                            <textarea class="t8-field__input t8-field__input--area" id="t8-booking-message" name="message" rows="3"></textarea>
                        </div>
                        <button class="t8-btn t8-btn--primary t8-btn--block" type="submit" id="t8-booking-submit">Request appointment</button>
                    </form>
                    <div class="t8-booking__success" id="t8-booking-success" hidden>
                        <h3 class="t8-booking__success-title">Request received</h3>
                        <p class="t8-booking__success-text" id="t8-booking-success-text"></p>
                        <button class="t8-btn t8-btn--ghost" id="t8-booking-reset" type="button">Book another visit</button>
                    </div>
                </div>
            </div>
        </section>

        <section class="t8-section t8-visit" id="t8-visit" data-reveal>
            <div class="t8-container">
                <div class="t8-section__head">
                    <div>
                        <p class="t8-eyebrow">Visit us</p>
                        <h2 class="t8-h2">Come say hello</h2>
                    </div>
                </div>
                <div class="t8-visit__grid">
                    <div>
                        <h3 class="t8-col__title">Opening hours</h3>
                        <div class="t8-hours" id="t8-opening-hours"></div>
                    </div>
                    <div>
                        <h3 class="t8-col__title">Studio</h3>
                        <div class="t8-info" id="t8-contact-info"></div>
                    </div>
                    <div id="t8-social-block">
                        <h3 class="t8-col__title">Follow along</h3>
                        <div class="t8-social" id="t8-contact-social"></div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="t8-footer" id="t8-footer">
        <div class="t8-container">
            <div class="t8-footer__top">
                <div class="t8-footer__brand">
                    <span class="t8-footer__name" id="t8-footer-name"></span>
                    <p class="t8-footer__tag" id="t8-footer-tag"></p>
                </div>
                <a class="t8-btn t8-btn--sand" href="#t8-booking">Book an appointment</a>
            </div>
            <div class="t8-footer__grid">
                <div>
                    <h3 class="t8-footer__heading">Explore</h3>
                    <ul class="t8-footer__list">
                        <li><a href="#t8-about">Studio</a></li>
                        <li><a href="#t8-services">Services</a></li>
                        <li><a href="#t8-packages">Packages</a></li>
                        <li><a href="#t8-gallery">Gallery</a></li>
                        <li><a href="#t8-team">Team</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="t8-footer__heading">Contact</h3>
                    <div class="t8-footer__contact" id="t8-footer-contact"></div>
                </div>
                <div>
                    <h3 class="t8-footer__heading">Social</h3>
                    <div class="t8-footer__social t8-social" id="t8-footer-social"></div>
                </div>
            </div>
            <div class="t8-footer__bottom">
                <p id="t8-footer-copy"></p>
                <a href="admin.html">Admin Panel</a>
            </div>
        </div>
    </footer>

    <div class="t8-lightbox" id="t8-lightbox" hidden role="dialog" aria-modal="true" aria-label="Gallery image">
        <button class="t8-lightbox__close" id="t8-lightbox-close" type="button" aria-label="Close image">&times;</button>
        <button class="t8-lightbox__nav t8-lightbox__nav--prev" id="t8-lightbox-prev" type="button" aria-label="Previous image">&larr;</button>
        <figure class="t8-lightbox__figure">
            <img class="t8-lightbox__image" id="t8-lightbox-image" alt="">
            <figcaption class="t8-lightbox__caption" id="t8-lightbox-caption"></figcaption>
        </figure>
        <button class="t8-lightbox__nav t8-lightbox__nav--next" id="t8-lightbox-next" type="button" aria-label="Next image">&rarr;</button>
    </div>
    </div>`;

    const FALLBACK_IMAGE = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1500" viewBox="0 0 1200 1500">' +
        '<rect width="1200" height="1500" fill="#efe6d5"/>' +
        '<circle cx="600" cy="540" r="240" fill="#27808a" opacity="0.16"/>' +
        '<path d="M0 1080 Q300 960 600 1040 T1200 1000 V1500 H0 Z" fill="#27808a" opacity="0.18"/>' +
        '<text x="600" y="830" font-family="Georgia, serif" font-size="58" fill="#7b7264" text-anchor="middle">Studio</text>' +
        '<text x="600" y="884" font-family="Arial, sans-serif" font-size="22" letter-spacing="8" fill="#a89d89" text-anchor="middle">IMAGE UNAVAILABLE</text>' +
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
        if (!value) return '';
        const words = value.split(/\s+/);
        if (words.length < 2) return escapeHtml(value);
        const last = words.pop();
        return escapeHtml(words.join(' ')) + ' <span class="t8-accent">' + escapeHtml(last) + '</span>';
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
        const hours = data.openingHours || {};
        setText('t8-brand-name', business.name || 'Studio');
        setText('t8-brand-tag', business.tagline || '');
        setText('t8-utility-loc', locationLine(data) || 'Coastal beauty studio');
        setText('t8-utility-hours', todayHoursText(hours));
    }

    function renderHero(data) {
        const business = data.business || {};
        const services = active(data.services);
        const gallery = active(data.gallery);
        const testimonials = active(data.testimonials);
        const categories = categoriesOf(services);

        const location = business.city || business.country || '';
        const eyebrow = location
            ? 'Sunlit studio in ' + escapeHtml(location)
            : 'Sunlit coastal beauty studio';
        setHtml('t8-hero-eyebrow', eyebrow);

        setHtml('t8-hero-title', accentLastWord(business.tagline || business.name || 'Sunlit coastal beauty'));
        setText('t8-hero-lede', firstSentence(business.description, 200));

        const noteBits = [todayHoursText(data.openingHours || {})];
        if (data.contact && data.contact.phone) noteBits.push(data.contact.phone);
        setText('t8-hero-note', noteBits.filter(Boolean).join('  \u00b7  '));

        const badge = byId('t8-hero-badge');
        if (badge) {
            const rated = testimonials.filter(item => Number(item.rating) > 0);
            if (rated.length) {
                const avg = rated.reduce((sum, item) => sum + Number(item.rating), 0) / rated.length;
                badge.innerHTML = '<strong>' + avg.toFixed(1) + '</strong> \u2605 &nbsp;from ' +
                    rated.length + (rated.length === 1 ? ' review' : ' reviews');
                badge.hidden = false;
            } else {
                badge.hidden = true;
            }
        }

        const media = byId('t8-hero-media');
        if (!media) return;
        const image = gallery[0];
        if (!image) {
            media.classList.add('t8-hero__media--fallback');
            media.innerHTML = '<span class="t8-hero__mark" aria-hidden="true">' + escapeHtml(initialsOf(business.name)) + '</span>';
        } else {
            media.classList.remove('t8-hero__media--fallback');
            media.innerHTML = imgTag(image.image, image.title || business.name || 'Studio', { eager: true });
        }
    }

    function renderAbout(data) {
        const business = data.business || {};
        const gallery = active(data.gallery);
        const services = active(data.services);
        const team = active(data.team);
        const packages = active(data.packages);

        if (!business.description && !business.name) {
            hideEl('t8-about');
            return;
        }
        showEl('t8-about');

        setText('t8-about-title', business.tagline || business.name || 'Our studio');
        setText('t8-about-text', business.description || business.tagline || 'A relaxed coastal studio for hair, colour and beauty.');

        const categories = categoriesOf(services);
        const values = [];
        categories.slice(0, 3).forEach(category => {
            const count = services.filter(service => service.category === category).length;
            values.push({ num: String(count).padStart(2, '0'), label: category });
        });
        if (values.length < 3 && team.length) values.push({ num: String(team.length).padStart(2, '0'), label: 'Stylists' });
        if (values.length < 3 && packages.length) values.push({ num: String(packages.length).padStart(2, '0'), label: 'Packages' });
        if (values.length < 3 && services.length) values.push({ num: String(services.length).padStart(2, '0'), label: 'Services' });
        setHtml('t8-about-values', values.slice(0, 3).map(value =>
            '<div class="t8-value"><span class="t8-value__num">' + escapeHtml(value.num) + '</span>' +
            '<span class="t8-value__label">' + escapeHtml(value.label) + '</span></div>'
        ).join(''));

        const media = byId('t8-about-media');
        if (!media) return;
        const image = gallery[1] || gallery[0];
        if (!image) {
            media.classList.add('t8-about__media--fallback');
            media.innerHTML = '<span class="t8-about__mark" aria-hidden="true">' + escapeHtml(initialsOf(business.name)) + '</span>';
        } else {
            media.classList.remove('t8-about__media--fallback');
            media.innerHTML = imgTag(image.image, image.title || business.name || 'Studio');
        }
    }

    function renderServices(data) {
        const services = active(data.services);
        const list = byId('t8-services-list');
        if (!list) return;

        if (services.length === 0) {
            hideEl('t8-services');
            return;
        }
        showEl('t8-services');

        setText('t8-services-count', services.length + (services.length === 1 ? ' service' : ' services'));

        list.innerHTML = services.map((service, index) => {
            const number = String(index + 1).padStart(2, '0');
            const meta = [];
            if (service.category) meta.push('<span>' + escapeHtml(service.category) + '</span>');
            if (service.duration) meta.push('<span>' + escapeHtml(String(service.duration)) + ' min</span>');
            return '<article class="t8-service">' +
                '<div class="t8-service__top">' +
                    '<span class="t8-service__no">' + number + '</span>' +
                    '<h3 class="t8-service__name">' + escapeHtml(service.name || 'Service') + '</h3>' +
                '</div>' +
                (meta.length ? '<p class="t8-service__meta">' + meta.join('') + '</p>' : '') +
                (service.description ? '<p class="t8-service__desc">' + escapeHtml(service.description) + '</p>' : '') +
                '<div class="t8-service__foot">' +
                    '<span class="t8-service__price">' + formatCurrency(service.price) + '</span>' +
                    '<button class="t8-btn t8-btn--ghost" type="button" data-service="' + escapeHtml(service.id) + '">Book</button>' +
                '</div>' +
                '</article>';
        }).join('');
    }

    function renderFeatured(data) {
        const services = active(data.services);
        const gallery = active(data.gallery);
        const body = byId('t8-featured-body');
        const media = byId('t8-featured-media');
        if (!body || !media) return;

        if (services.length === 0) {
            hideEl('t8-featured');
            return;
        }
        showEl('t8-featured');

        const featured = services.reduce((top, service) =>
            Number(service.price) > Number(top.price) ? service : top, services[0]);

        const image = gallery.find(item => item.title === featured.name) || gallery[0];
        if (!image) {
            media.classList.add('t8-featured__media--fallback');
            media.innerHTML = '<span class="t8-featured__mark" aria-hidden="true">' + escapeHtml(initialsOf(featured.name)) + '</span>';
        } else {
            media.classList.remove('t8-featured__media--fallback');
            media.innerHTML = imgTag(image.image, featured.name || 'Featured service');
        }

        const meta = [];
        if (featured.duration) meta.push('<span>' + escapeHtml(String(featured.duration)) + ' min</span>');
        if (featured.category) meta.push('<span>' + escapeHtml(featured.category) + '</span>');

        body.innerHTML =
            '<span class="t8-featured__badge">Signature treatment</span>' +
            '<h3 class="t8-featured__name">' + escapeHtml(featured.name || 'Featured service') + '</h3>' +
            '<div class="t8-featured__meta">' +
                '<span class="t8-featured__price">' + formatCurrency(featured.price) + '</span>' +
                meta.join('') +
            '</div>' +
            (featured.description ? '<p class="t8-featured__desc">' + escapeHtml(featured.description) + '</p>' : '') +
            '<button class="t8-btn t8-btn--primary" type="button" data-service="' + escapeHtml(featured.id) + '">Book this treatment</button>';
    }

    function renderPackages(data) {
        const packages = active(data.packages);
        const services = active(data.services);
        const list = byId('t8-packages-list');
        if (!list) return;

        if (packages.length === 0) {
            hideEl('t8-packages');
            return;
        }
        showEl('t8-packages');

        list.innerHTML = packages.map(pkg => {
            const ids = Array.isArray(pkg.services) ? pkg.services : [];
            const included = ids
                .map(id => services.find(service => service.id === id))
                .filter(Boolean)
                .map(service => '<li>' + escapeHtml(service.name) + '</li>')
                .join('');
            const media = pkg.image
                ? '<div class="t8-package__media">' + imgTag(pkg.image, data.business && data.business.name || 'Package') + '</div>'
                : '<div class="t8-package__media t8-package__media--fallback"><span class="t8-package__mark" aria-hidden="true">' + escapeHtml(initialsOf(pkg.name)) + '</span></div>';
            return '<article class="t8-package">' + media +
                '<div class="t8-package__body">' +
                    '<h3 class="t8-package__name">' + escapeHtml(pkg.name || 'Package') + '</h3>' +
                    (pkg.description ? '<p class="t8-package__desc">' + escapeHtml(pkg.description) + '</p>' : '') +
                    (included ? '<ul class="t8-package__items">' + included + '</ul>' : '') +
                    '<div class="t8-package__foot">' +
                        '<span class="t8-package__price">' + formatCurrency(pkg.price) + '</span>' +
                        '<button class="t8-btn t8-btn--ghost" type="button" data-package="' + escapeHtml(pkg.id) + '">Reserve</button>' +
                    '</div>' +
                '</div>' +
                '</article>';
        }).join('');
    }

    function renderTeam(data) {
        const team = active(data.team);
        const grid = byId('t8-team-grid');
        if (!grid) return;

        if (team.length === 0) {
            hideEl('t8-team');
            return;
        }
        showEl('t8-team');

        grid.innerHTML = team.map(member => {
            const frame = member.image
                ? '<div class="t8-member__frame">' + imgTag(member.image, member.name) + '</div>'
                : '<div class="t8-member__frame t8-member__frame--fallback"><span class="t8-member__initials" aria-hidden="true">' + escapeHtml(initialsOf(member.name)) + '</span></div>';
            return '<article class="t8-member">' + frame +
                '<h3 class="t8-member__name">' + escapeHtml(member.name || 'Stylist') + '</h3>' +
                (member.role ? '<span class="t8-member__role">' + escapeHtml(member.role) + '</span>' : '') +
                (member.bio ? '<p class="t8-member__bio">' + escapeHtml(member.bio) + '</p>' : '') +
                '</article>';
        }).join('');
    }

    function renderGallery(data) {
        const gallery = active(data.gallery);
        const list = byId('t8-gallery-list');
        if (!list) return;

        if (gallery.length === 0) {
            hideEl('t8-gallery');
            return;
        }
        showEl('t8-gallery');

        list.innerHTML = gallery.map((item, index) => {
            const caption = item.title || item.category || 'View';
            return '<button class="t8-gallery__item" type="button" data-index="' + index + '" aria-label="View ' + escapeHtml(caption) + '">' +
                imgTag(item.image, item.title || 'Studio work') +
                '<span class="t8-gallery__cap">' +
                    (item.category ? '<span class="t8-gallery__cap-cat">' + escapeHtml(item.category) + '</span>' : '') +
                    '<span class="t8-gallery__cap-title">' + escapeHtml(item.title || 'Studio work') + '</span>' +
                '</span>' +
                '</button>';
        }).join('');
    }

    function renderTestimonials(data) {
        const testimonials = active(data.testimonials);
        const section = byId('t8-testimonials');
        const grid = byId('t8-testimonials-grid');
        if (!section || !grid) return;

        if (testimonials.length === 0) {
            hideEl('t8-testimonials');
            return;
        }
        showEl('t8-testimonials');

        const rated = testimonials.filter(item => Number(item.rating) > 0);
        setText('t8-testimonials-count', rated.length
            ? (rated.reduce((sum, item) => sum + Number(item.rating), 0) / rated.length).toFixed(1) + ' / 5 \u00b7 ' + testimonials.length + (testimonials.length === 1 ? ' review' : ' reviews')
            : testimonials.length + (testimonials.length === 1 ? ' review' : ' reviews'));

        grid.innerHTML = testimonials.map(item => {
            const stars = starsHtml(item.rating);
            const avatar = item.customerImage
                ? '<span class="t8-quote__avatar"><img src="' + escapeHtml(item.customerImage) + '" alt="" loading="lazy"></span>'
                : '<span class="t8-quote__avatar" aria-hidden="true">' + escapeHtml(initialsOf(item.customerName)) + '</span>';
            return '<figure class="t8-quote">' +
                (stars ? '<span class="t8-quote__stars" aria-label="' + escapeHtml(String(item.rating)) + ' out of 5">' + stars + '</span>' : '') +
                '<blockquote class="t8-quote__text">' + escapeHtml(item.message || '') + '</blockquote>' +
                '<figcaption class="t8-quote__author">' + avatar +
                    '<span><span class="t8-quote__name">' + escapeHtml(item.customerName || 'Guest') + '</span></span>' +
                '</figcaption>' +
                '</figure>';
        }).join('');
    }

    function buildServiceOptions(data) {
        const services = active(data.services);
        const packages = active(data.packages);
        const select = byId('t8-booking-service');
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
        const dateInput = byId('t8-booking-date');
        const timeSelect = byId('t8-booking-time');
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

        setHtml('t8-booking-hours', todayHoursText(data.openingHours || {}));

        const info = byId('t8-contact-info');
        if (info) {
            const rows = [];
            if (contact.phone) rows.push('<div class="t8-info__row"><span class="t8-info__key">Phone</span><span class="t8-info__value"><a href="tel:' + escapeHtml(contact.phone) + '">' + escapeHtml(contact.phone) + '</a></span></div>');
            if (contact.email) rows.push('<div class="t8-info__row"><span class="t8-info__key">Email</span><span class="t8-info__value"><a href="mailto:' + escapeHtml(contact.email) + '">' + escapeHtml(contact.email) + '</a></span></div>');
            const address = locationLine(data);
            if (address) {
                const maps = contact.googleMapsUrl
                    ? '<br><a href="' + escapeHtml(contact.googleMapsUrl) + '" target="_blank" rel="noopener">Get directions</a>'
                    : '';
                rows.push('<div class="t8-info__row"><span class="t8-info__key">Studio</span><span class="t8-info__value">' + escapeHtml(address) + maps + '</span></div>');
            }
            info.innerHTML = rows.length ? rows.join('') : '<p class="t8-info__value">Contact details coming soon.</p>';
        }

        const hours_ = data.openingHours || {};
        const current = todayKey();
        setHtml('t8-opening-hours', DAY_KEYS.map(day => {
            const dayData = hours_[day] || {};
            const isOpen = dayData.open && dayData.openTime;
            const value = isOpen ? formatTime(dayData.openTime) + ' \u2013 ' + formatTime(dayData.closeTime) : 'Closed';
            return '<div class="t8-hours__row' + (isOpen ? '' : ' t8-hours__row--closed') + (day === current ? ' is-today' : '') + '">' +
                '<span>' + DAY_LABELS[day] + '</span><span>' + value + '</span></div>';
        }).join(''));

        const social = data.socialLinks || {};
        const socialHtml = Object.keys(SOCIAL_LABELS)
            .filter(key => social[key])
            .map(key => '<a class="t8-social__link" href="' + escapeHtml(social[key]) + '" target="_blank" rel="noopener">' + SOCIAL_LABELS[key] + '</a>')
            .join('');
        if (socialHtml) {
            setHtml('t8-contact-social', socialHtml);
            showEl('t8-social-block');
        } else {
            hideEl('t8-social-block');
        }
    }

    function renderFooter(data) {
        const business = data.business || {};
        const contact = data.contact || {};
        const social = data.socialLinks || {};
        const name = business.name || 'Studio';

        setText('t8-footer-name', name);
        setText('t8-footer-tag', business.tagline || '');

        const contactItems = [];
        if (contact.phone) contactItems.push('<a href="tel:' + escapeHtml(contact.phone) + '">' + escapeHtml(contact.phone) + '</a>');
        if (contact.email) contactItems.push('<a href="mailto:' + escapeHtml(contact.email) + '">' + escapeHtml(contact.email) + '</a>');
        const address = locationLine(data);
        if (address) contactItems.push('<span>' + escapeHtml(address) + '</span>');
        setHtml('t8-footer-contact', contactItems.join(''));

        const socialHtml = Object.keys(SOCIAL_LABELS)
            .filter(key => social[key])
            .map(key => '<a class="t8-social__link" href="' + escapeHtml(social[key]) + '" target="_blank" rel="noopener">' + SOCIAL_LABELS[key] + '</a>')
            .join('');
        setHtml('t8-footer-social', socialHtml);

        setText('t8-footer-copy', '\u00a9 ' + new Date().getFullYear() + ' ' + name);
    }

    function setupHeader() {
        const header = byId('t8-header');
        const toggle = byId('t8-menu-toggle');
        const scrim = byId('t8-nav-scrim');

        if (header) {
            const onScroll = () => header.classList.toggle('is-stuck', window.scrollY > 16);
            onScroll();
            window.addEventListener('scroll', onScroll, { passive: true });
        }

        const setToggleState = (open) => {
            if (!toggle) return;
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
            toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        };

        const close = () => {
            document.body.classList.remove('t8-nav-open');
            setToggleState(false);
        };

        if (toggle) {
            toggle.addEventListener('click', () => {
                const open = document.body.classList.toggle('t8-nav-open');
                setToggleState(open);
            });
        }
        if (scrim) scrim.addEventListener('click', close);
        document.querySelectorAll('.t8-nav__list a').forEach(link => link.addEventListener('click', close));
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && document.body.classList.contains('t8-nav-open')) {
                close();
                if (toggle) toggle.focus();
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
            const select = byId('t8-booking-service');
            const value = trigger.getAttribute('data-service') || trigger.getAttribute('data-package');
            if (select && value) select.value = value;
            const booking = byId('t8-booking');
            if (booking) booking.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
        });
    }

    function setupLightbox() {
        const list = byId('t8-gallery-list');
        const lightbox = byId('t8-lightbox');
        const image = byId('t8-lightbox-image');
        const caption = byId('t8-lightbox-caption');
        const closeBtn = byId('t8-lightbox-close');
        const prevBtn = byId('t8-lightbox-prev');
        const nextBtn = byId('t8-lightbox-next');
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
            const item = event.target.closest('.t8-gallery__item');
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
            if (event.key === 'Escape') close();
            if (event.key === 'ArrowLeft') step(-1);
            if (event.key === 'ArrowRight') step(1);
        });
    }

    function setupBookingForm() {
        const form = byId('t8-booking-form');
        const success = byId('t8-booking-success');
        const successText = byId('t8-booking-success-text');
        const reset = byId('t8-booking-reset');
        const submit = byId('t8-booking-submit');
        if (!form || !success || !successText) return;

        let saving = false;

        form.addEventListener('submit', event => {
            event.preventDefault();
            if (saving) return;
            if (!form.reportValidity()) return;

            const serviceId = byId('t8-booking-service').value;
            const customerName = byId('t8-booking-name').value.trim();

            saving = true;
            if (submit) submit.disabled = true;

            const appointment = storage.addAppointment({
                customerName: customerName,
                phone: byId('t8-booking-phone').value.trim(),
                email: byId('t8-booking-email').value.trim(),
                service: serviceId,
                date: byId('t8-booking-date').value,
                time: byId('t8-booking-time').value,
                message: byId('t8-booking-message').value.trim()
            });

            saving = false;
            if (submit) submit.disabled = false;

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
                '. Our team will be in touch to confirm.';
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
                const name = byId('t8-booking-name');
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
        const dateInput = byId('t8-booking-date');
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
    window.SalonTemplates['template-8'] = { html: TEMPLATE_HTML, render: render };
})();
