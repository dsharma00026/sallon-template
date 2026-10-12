(function () {
    const TEMPLATE_HTML = `
    <div class="t6-status" id="status-banner" hidden></div>

    <div id="t6-shell" data-shell="template-6">
    <header class="t6-header" id="t6-header">
        <div class="t6-container t6-header__inner">
            <a class="t6-brand" href="#t6-hero">
                <span class="t6-brand__name" id="t6-brand-name"></span>
                <span class="t6-brand__tag" id="t6-brand-tag"></span>
            </a>
            <nav class="t6-nav" id="t6-nav" aria-label="Primary">
                <ul class="t6-nav__list">
                    <li><a href="#t6-about">Atelier</a></li>
                    <li><a href="#t6-services">Services</a></li>
                    <li><a href="#t6-packages">Collections</a></li>
                    <li><a href="#t6-team">Team</a></li>
                    <li><a href="#t6-gallery">Portfolio</a></li>
                    <li><a href="#t6-visit">Visit</a></li>
                </ul>
            </nav>
            <div class="t6-header__actions">
                <a class="site-admin-btn" data-admin-link href="admin.html" aria-label="Admin panel" title="Admin panel">
                    <svg class="site-admin-btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect></svg>
                    <span class="site-admin-btn__label">Admin</span>
                </a>
                <a class="t6-btn t6-btn--primary t6-btn--sm t6-header__cta" href="#t6-booking">Book an appointment</a>
                <button class="t6-header__burger" id="t6-menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="t6-nav">
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </header>
    <div class="t6-nav-scrim" id="t6-nav-scrim"></div>

    <main id="t6-main">
        <section class="t6-hero" id="t6-hero">
            <div class="t6-container">
                <div class="t6-hero__intro">
                    <p class="t6-kicker" id="t6-hero-kicker" data-reveal></p>
                    <h1 class="t6-hero__title" id="t6-hero-title" data-reveal></h1>
                    <p class="t6-hero__lede" id="t6-hero-lede" data-reveal></p>
                    <div class="t6-hero__actions" data-reveal>
                        <a class="t6-btn t6-btn--primary" href="#t6-booking">Book an appointment</a>
                        <a class="t6-btn t6-btn--ghost" href="#t6-services">View the menu</a>
                    </div>
                </div>
                <figure class="t6-hero__figure" data-reveal>
                    <div class="t6-hero__media" id="t6-hero-media"></div>
                    <figcaption class="t6-hero__caption">
                        <span class="t6-hero__caption-item" id="t6-hero-location"></span>
                        <span class="t6-hero__caption-item" id="t6-hero-today"></span>
                    </figcaption>
                </figure>
            </div>
        </section>

        <section class="t6-section t6-about" id="t6-about">
            <div class="t6-container t6-about__grid">
                <div class="t6-about__body" data-reveal>
                    <p class="t6-kicker">The atelier</p>
                    <h2 class="t6-heading" id="t6-about-title"></h2>
                    <p class="t6-about__text" id="t6-about-text"></p>
                    <dl class="t6-about__facts" id="t6-about-facts"></dl>
                </div>
                <div class="t6-about__media" id="t6-about-media"></div>
            </div>
        </section>

        <section class="t6-section t6-services" id="t6-services">
            <div class="t6-container">
                <div class="t6-section__head" data-reveal>
                    <div class="t6-section__head-text">
                        <p class="t6-kicker">The menu</p>
                        <h2 class="t6-heading">Services, considered</h2>
                    </div>
                    <p class="t6-section__note" id="t6-services-count"></p>
                </div>
                <div class="t6-services__list" id="t6-services-list"></div>
            </div>
        </section>

        <section class="t6-section t6-featured" id="t6-featured" hidden>
            <div class="t6-container">
                <div class="t6-featured__card" data-reveal>
                    <div class="t6-featured__media" id="t6-featured-media"></div>
                    <div class="t6-featured__body" id="t6-featured-body"></div>
                </div>
            </div>
        </section>

        <section class="t6-section t6-packages" id="t6-packages">
            <div class="t6-container">
                <div class="t6-section__head" data-reveal>
                    <div class="t6-section__head-text">
                        <p class="t6-kicker">Collections</p>
                        <h2 class="t6-heading">Curated rituals</h2>
                    </div>
                    <p class="t6-section__note">A few ways to spend an unhurried afternoon with us.</p>
                </div>
                <div class="t6-packages__grid" id="t6-packages-grid"></div>
            </div>
        </section>

        <section class="t6-section t6-team" id="t6-team">
            <div class="t6-container">
                <div class="t6-section__head" data-reveal>
                    <div class="t6-section__head-text">
                        <p class="t6-kicker">The hands</p>
                        <h2 class="t6-heading">A small, devoted team</h2>
                    </div>
                </div>
                <div class="t6-team__grid" id="t6-team-grid"></div>
            </div>
        </section>

        <section class="t6-section t6-gallery" id="t6-gallery">
            <div class="t6-container">
                <div class="t6-section__head" data-reveal>
                    <div class="t6-section__head-text">
                        <p class="t6-kicker">The portfolio</p>
                        <h2 class="t6-heading">Work from the chair</h2>
                    </div>
                </div>
                <div class="t6-gallery__grid" id="t6-gallery-grid"></div>
            </div>
        </section>

        <section class="t6-section t6-testimonials" id="t6-testimonials">
            <div class="t6-container">
                <div class="t6-section__head" data-reveal>
                    <div class="t6-section__head-text">
                        <p class="t6-kicker">In their words</p>
                        <h2 class="t6-heading">Quiet praise</h2>
                    </div>
                </div>
                <div class="t6-testimonials__grid" id="t6-testimonials-grid"></div>
            </div>
        </section>

        <section class="t6-section t6-booking" id="t6-booking">
            <div class="t6-container t6-booking__grid">
                <div class="t6-booking__aside" data-reveal>
                    <p class="t6-kicker">Reservations</p>
                    <h2 class="t6-heading">Request your visit</h2>
                    <p class="t6-about__text">Share a few details and the atelier will confirm your appointment. This is a working prototype &mdash; requests are stored on this device only.</p>
                    <ol class="t6-booking__steps">
                        <li>Choose a service or a collection.</li>
                        <li>Choose a date and a time that suits.</li>
                        <li>Leave your details and any notes.</li>
                    </ol>
                </div>
                <div class="t6-booking__panel" data-reveal>
                    <form class="t6-form" id="t6-booking-form">
                        <div class="t6-form__row">
                            <div class="t6-field">
                                <label class="t6-field__label" for="t6-booking-name">Full name</label>
                                <input class="t6-field__input" type="text" id="t6-booking-name" name="name" autocomplete="name" required>
                            </div>
                            <div class="t6-field">
                                <label class="t6-field__label" for="t6-booking-phone">Phone</label>
                                <input class="t6-field__input" type="tel" id="t6-booking-phone" name="phone" autocomplete="tel" required>
                            </div>
                        </div>
                        <div class="t6-field">
                            <label class="t6-field__label" for="t6-booking-email">Email</label>
                            <input class="t6-field__input" type="email" id="t6-booking-email" name="email" autocomplete="email" required>
                        </div>
                        <div class="t6-field">
                            <label class="t6-field__label" for="t6-booking-service">Service or collection</label>
                            <select class="t6-field__input t6-field__select" id="t6-booking-service" name="service" required>
                                <option value="" selected disabled>Select a service</option>
                            </select>
                        </div>
                        <div class="t6-form__row">
                            <div class="t6-field">
                                <label class="t6-field__label" for="t6-booking-date">Preferred date</label>
                                <input class="t6-field__input" type="date" id="t6-booking-date" name="date" required>
                            </div>
                            <div class="t6-field">
                                <label class="t6-field__label" for="t6-booking-time">Preferred time</label>
                                <select class="t6-field__input t6-field__select" id="t6-booking-time" name="time" required>
                                    <option value="" selected disabled>Select a date first</option>
                                </select>
                            </div>
                        </div>
                        <div class="t6-field">
                            <label class="t6-field__label" for="t6-booking-message">Notes (optional)</label>
                            <textarea class="t6-field__input t6-field__textarea" id="t6-booking-message" name="message" rows="3"></textarea>
                        </div>
                        <button class="t6-btn t6-btn--primary t6-form__submit" type="submit">Send request</button>
                    </form>
                    <div class="t6-booking__success" id="t6-booking-success" hidden>
                        <h3 class="t6-booking__success-title">Request received</h3>
                        <p class="t6-booking__success-text" id="t6-booking-success-text"></p>
                        <button class="t6-btn t6-btn--ghost" id="t6-booking-reset" type="button">Book another visit</button>
                    </div>
                </div>
            </div>
        </section>

        <section class="t6-section t6-contact" id="t6-visit">
            <div class="t6-container">
                <div class="t6-section__head" data-reveal>
                    <div class="t6-section__head-text">
                        <p class="t6-kicker">Visit</p>
                        <h2 class="t6-heading">The atelier, in person</h2>
                    </div>
                </div>
                <div class="t6-contact__grid">
                    <div class="t6-card" id="t6-contact-info"></div>
                    <div class="t6-card">
                        <h3 class="t6-card__title">Opening hours</h3>
                        <div class="t6-hours" id="t6-opening-hours"></div>
                    </div>
                    <div class="t6-card" id="t6-social-block">
                        <h3 class="t6-card__title">Follow along</h3>
                        <div class="t6-social" id="t6-contact-social"></div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="t6-footer">
        <div class="t6-container">
            <div class="t6-footer__cta" data-reveal>
                <p class="t6-footer__cta-text" id="t6-footer-cta-text"></p>
                <a class="t6-btn t6-btn--primary" href="#t6-booking">Book an appointment</a>
            </div>
            <div class="t6-footer__inner">
                <div>
                    <p class="t6-footer__name" id="t6-footer-name"></p>
                    <p class="t6-footer__tag" id="t6-footer-tag"></p>
                </div>
                <nav aria-label="Footer">
                    <h3 class="t6-footer__heading">Explore</h3>
                    <ul class="t6-footer__list">
                        <li><a href="#t6-about">Atelier</a></li>
                        <li><a href="#t6-services">Services</a></li>
                        <li><a href="#t6-packages">Collections</a></li>
                        <li><a href="#t6-team">Team</a></li>
                        <li><a href="#t6-gallery">Portfolio</a></li>
                        <li><a href="#t6-booking">Book</a></li>
                    </ul>
                </nav>
                <div>
                    <h3 class="t6-footer__heading">Hours</h3>
                    <div class="t6-footer__hours" id="t6-footer-hours"></div>
                </div>
                <div>
                    <h3 class="t6-footer__heading">Contact</h3>
                    <div class="t6-footer__contact" id="t6-footer-contact"></div>
                    <div class="t6-social" id="t6-footer-social"></div>
                </div>
            </div>
            <div class="t6-footer__bottom">
                <p id="t6-footer-copy"></p>
                <a class="t6-footer__admin" href="admin.html">Admin Panel</a>
            </div>
        </div>
    </footer>

    <div class="t6-lightbox" id="t6-lightbox" hidden role="dialog" aria-modal="true" aria-label="Gallery image">
        <button class="t6-lightbox__close" id="t6-lightbox-close" type="button" aria-label="Close image">&times;</button>
        <button class="t6-lightbox__nav t6-lightbox__nav--prev" id="t6-lightbox-prev" type="button" aria-label="Previous image">&#8249;</button>
        <button class="t6-lightbox__nav t6-lightbox__nav--next" id="t6-lightbox-next" type="button" aria-label="Next image">&#8250;</button>
        <figure class="t6-lightbox__figure">
            <img class="t6-lightbox__image" id="t6-lightbox-image" alt="">
            <figcaption class="t6-lightbox__caption" id="t6-lightbox-caption"></figcaption>
        </figure>
    </div>
    </div>`;

    const FALLBACK_IMAGE = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">' +
        '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
        '<stop offset="0" stop-color="#efe7dd"/><stop offset="1" stop-color="#d3c1a9"/></linearGradient></defs>' +
        '<rect width="1200" height="900" fill="url(#g)"/>' +
        '<circle cx="600" cy="400" r="150" fill="none" stroke="#7a3b42" stroke-width="3" opacity="0.6"/>' +
        '<text x="600" y="700" font-family="Georgia, serif" font-size="40" fill="#7a3b42" text-anchor="middle" letter-spacing="14">ATELIER</text>' +
        '<text x="600" y="748" font-family="Arial, sans-serif" font-size="18" fill="#9b8873" text-anchor="middle">image unavailable</text>' +
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
        googleBusiness: 'Google Business'
    };

    function byId(id) {
        return document.getElementById(id);
    }

    function setText(id, text) {
        const node = byId(id);
        if (node) node.textContent = text;
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

    function firstSentence(text, limit = 160) {
        const value = String(text || '').trim();
        if (!value) return '';
        const match = value.match(/^(.{10,}?[.!?])(\s|$)/);
        if (match && match[1].length <= limit) return match[1];
        if (value.length <= limit) return value;
        return value.slice(0, limit).trim() + '\u2026';
    }

    function statusText(status) {
        if (status === 'draft') return 'This site is a draft and not yet published.';
        if (status === 'maintenance') return 'The atelier is temporarily offline while we update.';
        return 'This website is not yet published.';
    }

    function todayKey() {
        return DAY_KEYS[(new Date().getDay() + 6) % 7];
    }

    function todayHoursText(hours) {
        const dayData = (hours || {})[todayKey()] || {};
        if (dayData.open && dayData.openTime && dayData.closeTime) {
            return `Open today ${formatTime(dayData.openTime)} \u2013 ${formatTime(dayData.closeTime)}`;
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
        const name = business.name || 'Atelier';
        const tagline = business.tagline || '';
        const description = business.description || 'A private beauty atelier.';

        document.title = tagline ? `${name} — ${tagline}` : name;

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

        document.body.dataset.template = settings.selectedTemplate || 'template-6';
    }

    function renderHeader(data) {
        const business = data.business || {};
        setText('t6-brand-name', business.name || 'Salon');
        setText('t6-brand-tag', business.tagline || '');
    }

    function renderHero(data) {
        const business = data.business || {};
        const contact = data.contact || {};
        const hours = data.openingHours || {};
        const gallery = active(data.gallery);

        const locationParts = [business.city, business.country].filter(Boolean);
        setText('t6-hero-kicker', locationParts.length
            ? 'Private beauty atelier \u00b7 ' + locationParts.join(', ')
            : 'Hair \u00b7 Skin \u00b7 Nails \u00b7 Spa');
        setText('t6-hero-title', business.tagline || business.name || 'Salon');
        setText('t6-hero-lede', firstSentence(business.description, 180));

        const address = [business.city, business.country].filter(Boolean).join(', ') || contact.address || 'In atelier';
        setText('t6-hero-location', address);
        setText('t6-hero-today', todayHoursText(hours));

        const media = byId('t6-hero-media');
        if (!media) return;
        if (gallery.length === 0) {
            media.classList.add('t6-hero__media--fallback');
            media.innerHTML = `<span class="t6-hero__mark" aria-hidden="true">${escapeHtml(initialsOf(business.name))}</span>`;
        } else {
            media.classList.remove('t6-hero__media--fallback');
            media.innerHTML = imgTag(gallery[0].image, gallery[0].title || business.name || 'Atelier', { eager: true });
        }
    }

    function renderAbout(data) {
        const business = data.business || {};
        const contact = data.contact || {};
        const hours = data.openingHours || {};
        const gallery = active(data.gallery);

        if (!business.description && !business.name) {
            hideEl('t6-about');
            return;
        }
        showEl('t6-about');

        setText('t6-about-title', business.name || business.tagline || 'The atelier');
        setText('t6-about-text', business.description || business.tagline || 'A considered space for quiet beauty.');

        const facts = [];
        const location = [business.city, business.country].filter(Boolean).join(', ');
        if (location) facts.push({ k: 'Where', v: location });
        if (contact.phone) facts.push({ k: 'Call', v: contact.phone });
        facts.push({ k: 'Today', v: todayHoursText(hours) });
        setHtml('t6-about-facts', facts.map(fact => `
            <div class="t6-about__fact">
                <dt>${escapeHtml(fact.k)}</dt>
                <dd>${escapeHtml(fact.v)}</dd>
            </div>`).join(''));

        const media = byId('t6-about-media');
        if (!media) return;
        const image = gallery[1] || gallery[0];
        if (!image) {
            media.classList.add('t6-about__media--fallback');
            media.innerHTML = `<span class="t6-about__mark" aria-hidden="true">${escapeHtml(initialsOf(business.name))}</span>`;
        } else {
            media.classList.remove('t6-about__media--fallback');
            media.innerHTML = imgTag(image.image, image.title || business.name || 'Atelier');
        }
    }

    function renderServices(data) {
        const services = active(data.services);
        const list = byId('t6-services-list');
        if (!list) return;

        if (services.length === 0) {
            hideEl('t6-services');
            return;
        }
        showEl('t6-services');

        const count = byId('t6-services-count');
        if (count) {
            count.textContent = services.length + (services.length === 1 ? ' service on the menu.' : ' services on the menu.');
        }

        list.innerHTML = services.map(service => `
            <article class="t6-service">
                <div class="t6-service__intro">
                    <h3 class="t6-service__name">${escapeHtml(service.name || 'Service')}</h3>
                    <p class="t6-service__meta">
                        ${service.category ? `<span>${escapeHtml(service.category)}</span>` : ''}
                        ${service.duration ? `<span>${escapeHtml(String(service.duration))} min</span>` : ''}
                    </p>
                </div>
                <p class="t6-service__desc">${escapeHtml(service.description || '')}</p>
                <div class="t6-service__side">
                    <span class="t6-service__price">${formatCurrency(service.price)}</span>
                    <button class="t6-service__book" type="button" data-service="${escapeHtml(service.id)}">Book this</button>
                </div>
            </article>`).join('');
    }

    function renderFeatured(data) {
        const services = active(data.services);
        const gallery = active(data.gallery);
        const body = byId('t6-featured-body');
        const media = byId('t6-featured-media');
        if (!body || !media) return;

        if (services.length === 0) {
            hideEl('t6-featured');
            return;
        }
        showEl('t6-featured');

        const featuredService = services.reduce((best, service) =>
            (Number(service.price) || 0) > (Number(best.price) || 0) ? service : best, services[0]);

        const image = gallery.find(item => item.category && featuredService.category && item.category === featuredService.category) || gallery[0];
        media.innerHTML = image
            ? imgTag(featuredService.image || image.image, featuredService.name || 'Signature service')
            : `<span class="t6-featured__fallback" aria-hidden="true">${escapeHtml(initialsOf(featuredService.name))}</span>`;

        body.innerHTML = `
            <p class="t6-kicker">Signature</p>
            <h3 class="t6-featured__name">${escapeHtml(featuredService.name || 'Featured service')}</h3>
            <div class="t6-featured__meta">
                <span class="t6-featured__price">${formatCurrency(featuredService.price)}</span>
                ${featuredService.duration ? `<span>${escapeHtml(String(featuredService.duration))} min</span>` : ''}
                ${featuredService.category ? `<span>${escapeHtml(featuredService.category)}</span>` : ''}
            </div>
            ${featuredService.description ? `<p class="t6-about__text">${escapeHtml(featuredService.description)}</p>` : ''}
            <button class="t6-btn t6-btn--primary" type="button" data-service="${escapeHtml(featuredService.id)}">Reserve this</button>`;
    }

    function renderPackages(data) {
        const packages = active(data.packages);
        const services = active(data.services);
        const grid = byId('t6-packages-grid');
        if (!grid) return;

        if (packages.length === 0) {
            hideEl('t6-packages');
            return;
        }
        showEl('t6-packages');

        grid.innerHTML = packages.map(pkg => {
            const ids = Array.isArray(pkg.services) ? pkg.services : [];
            const included = ids
                .map(id => services.find(service => service.id === id))
                .filter(Boolean)
                .map(service => `<li>${escapeHtml(service.name)}</li>`)
                .join('');
            const list = included || `<li>${escapeHtml(pkg.description || 'A curated visit')}</li>`;
            return `
            <article class="t6-package">
                <span class="t6-package__tag">Collection</span>
                <h3 class="t6-package__name">${escapeHtml(pkg.name || 'Collection')}</h3>
                <span class="t6-package__price">${formatCurrency(pkg.price)}</span>
                ${pkg.description && included ? `<p class="t6-package__desc">${escapeHtml(pkg.description)}</p>` : ''}
                <ul class="t6-package__items">${list}</ul>
                <button class="t6-btn t6-btn--ghost t6-package__cta" type="button" data-package="${escapeHtml(pkg.id)}">Reserve</button>
            </article>`;
        }).join('');
    }

    function renderTeam(data) {
        const team = active(data.team);
        const grid = byId('t6-team-grid');
        if (!grid) return;

        if (team.length === 0) {
            hideEl('t6-team');
            return;
        }
        showEl('t6-team');

        grid.innerHTML = team.map(member => {
            const frame = member.image
                ? `<div class="t6-member__frame">${imgTag(member.image, member.name)}</div>`
                : `<div class="t6-member__frame t6-member__frame--fallback"><span class="t6-member__initials" aria-hidden="true">${escapeHtml(initialsOf(member.name))}</span></div>`;
            return `
            <article class="t6-member">
                ${frame}
                <div class="t6-member__body">
                    <h3 class="t6-member__name">${escapeHtml(member.name || 'Stylist')}</h3>
                    ${member.role ? `<span class="t6-member__role">${escapeHtml(member.role)}</span>` : ''}
                    ${member.bio ? `<p class="t6-member__bio">${escapeHtml(member.bio)}</p>` : ''}
                </div>
            </article>`;
        }).join('');
    }

    function renderGallery(data) {
        const gallery = active(data.gallery);
        const grid = byId('t6-gallery-grid');
        if (!grid) return;

        if (gallery.length === 0) {
            hideEl('t6-gallery');
            return;
        }
        showEl('t6-gallery');

        grid.innerHTML = gallery.map((item, index) => {
            const wide = index % 3 === 0 ? ' t6-gallery__item--wide' : '';
            return `
            <button class="t6-gallery__item${wide}" type="button" data-index="${index}" aria-label="View ${escapeHtml(item.title || 'image')}">
                ${imgTag(item.image, item.title || 'Atelier work')}
                <span class="t6-gallery__caption" aria-hidden="true">
                    <span class="t6-gallery__caption-title">${escapeHtml(item.title || '')}</span>
                    <span class="t6-gallery__caption-cat">${escapeHtml(item.category || '')}</span>
                </span>
            </button>`;
        }).join('');
    }

    function renderTestimonials(data) {
        const testimonials = active(data.testimonials);
        const grid = byId('t6-testimonials-grid');
        if (!grid) return;

        if (testimonials.length === 0) {
            hideEl('t6-testimonials');
            return;
        }
        showEl('t6-testimonials');

        grid.innerHTML = testimonials.map((item, index) => {
            const lead = index === 0 ? ' t6-quote--lead' : '';
            const stars = item.rating ? Math.min(5, Math.max(0, Number(item.rating))) : 0;
            return `
            <figure class="t6-quote${lead}">
                ${stars ? `<span class="t6-quote__stars" aria-label="${stars} out of 5">${'\u2605'.repeat(stars)}</span>` : ''}
                <blockquote class="t6-quote__text">${escapeHtml(item.message || '')}</blockquote>
                <figcaption class="t6-quote__author">${escapeHtml(item.customerName || 'Guest')}</figcaption>
            </figure>`;
        }).join('');
    }

    function buildServiceOptions(data) {
        const services = active(data.services);
        const packages = active(data.packages);
        const select = byId('t6-booking-service');
        if (!select) return;

        const serviceOptions = services.map(service =>
            `<option value="${escapeHtml(service.id)}">${escapeHtml(service.name)} \u2014 ${formatCurrency(service.price)}</option>`).join('');
        const packageOptions = packages.map(pkg =>
            `<option value="${escapeHtml(pkg.id)}">${escapeHtml(pkg.name)} \u2014 ${formatCurrency(pkg.price)} (collection)</option>`).join('');

        let html = '<option value="" selected disabled>Select a service</option>';
        if (serviceOptions) html += `<optgroup label="Services">${serviceOptions}</optgroup>`;
        if (packageOptions) html += `<optgroup label="Collections">${packageOptions}</optgroup>`;
        if (!serviceOptions && !packageOptions) html = '<option value="" selected disabled>No services available yet</option>';
        select.innerHTML = html;
    }

    function localISODate(date) {
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, '0');
        const d = String(date.getDate()).padStart(2, '0');
        return `${y}-${m}-${d}`;
    }

    function dayKeyFor(dateString) {
        if (!dateString) return null;
        const date = new Date(`${dateString}T12:00:00`);
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
            slots.push(`${h}:${m}`);
        }
        return slots;
    }

    function renderBookingTimes() {
        const dateInput = byId('t6-booking-date');
        const timeSelect = byId('t6-booking-time');
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
            slots.map(slot => `<option value="${slot}">${formatTime(slot)}</option>`).join('');
    }

    function renderBooking(data) {
        buildServiceOptions(data);
        const dateInput = byId('t6-booking-date');
        if (dateInput) {
            dateInput.min = localISODate(new Date());
            dateInput.addEventListener('change', renderBookingTimes);
            renderBookingTimes();
        }
    }

    function renderContact(data) {
        const contact = data.contact || {};
        const business = data.business || {};
        const info = byId('t6-contact-info');
        if (info) {
            const rows = [];
            if (contact.phone) {
                rows.push(`
                    <div class="t6-card__row">
                        <span class="t6-card__key">Phone</span>
                        <span class="t6-card__value"><a href="tel:${escapeHtml(contact.phone)}">${escapeHtml(contact.phone)}</a></span>
                    </div>`);
            }
            if (contact.email) {
                rows.push(`
                    <div class="t6-card__row">
                        <span class="t6-card__key">Email</span>
                        <span class="t6-card__value"><a href="mailto:${escapeHtml(contact.email)}">${escapeHtml(contact.email)}</a></span>
                    </div>`);
            }
            const address = contact.address || [business.address, business.city, business.country].filter(Boolean).join(', ');
            if (address) {
                const maps = contact.googleMapsUrl
                    ? `<a class="t6-card__maps" href="${escapeHtml(contact.googleMapsUrl)}" target="_blank" rel="noopener">Get directions</a>`
                    : '';
                rows.push(`
                    <div class="t6-card__row">
                        <span class="t6-card__key">Atelier</span>
                        <span class="t6-card__value">${escapeHtml(address)}${maps ? '<br>' + maps : ''}</span>
                    </div>`);
            }
            info.innerHTML = `<h3 class="t6-card__title">Studio</h3>${rows.join('') || '<p class="t6-card__value">Contact details coming soon.</p>'}`;
        }

        const hours = data.openingHours || {};
        const current = todayKey();
        setHtml('t6-opening-hours', DAY_KEYS.map(day => {
            const dayData = hours[day] || {};
            const isOpen = dayData.open && dayData.openTime;
            const value = isOpen
                ? `${formatTime(dayData.openTime)} \u2013 ${formatTime(dayData.closeTime)}`
                : 'Closed';
            return `
                <div class="t6-hours__row${isOpen ? '' : ' t6-hours__row--closed'}${day === current ? ' is-today' : ''}">
                    <span class="t6-hours__day">${DAY_LABELS[day]}</span>
                    <span>${value}</span>
                </div>`;
        }).join(''));

        const social = data.socialLinks || {};
        const socialHtml = Object.keys(SOCIAL_LABELS)
            .filter(key => social[key])
            .map(key => `<a class="t6-social__link" href="${escapeHtml(social[key])}" target="_blank" rel="noopener">${SOCIAL_LABELS[key]}</a>`)
            .join('');
        if (socialHtml) {
            setHtml('t6-contact-social', socialHtml);
        } else {
            hideEl('t6-social-block');
        }
    }

    function renderFooter(data) {
        const business = data.business || {};
        const contact = data.contact || {};
        const social = data.socialLinks || {};
        const hours = data.openingHours || {};
        const name = business.name || 'Salon';

        setText('t6-footer-cta-text', business.tagline ? 'Visit ' + name : 'Reserve your visit');
        setText('t6-footer-name', name);
        setText('t6-footer-tag', business.tagline || business.description || '');

        setHtml('t6-footer-hours', DAY_KEYS.map(day => {
            const dayData = hours[day] || {};
            const value = (dayData.open && dayData.openTime)
                ? `${formatTime(dayData.openTime)} \u2013 ${formatTime(dayData.closeTime)}`
                : 'Closed';
            return `<div class="t6-footer__hours-row"><span>${DAY_LABELS[day].slice(0, 3)}</span><span>${value}</span></div>`;
        }).join(''));

        const contactItems = [];
        if (contact.phone) contactItems.push(`<a href="tel:${escapeHtml(contact.phone)}">${escapeHtml(contact.phone)}</a>`);
        if (contact.email) contactItems.push(`<a href="mailto:${escapeHtml(contact.email)}">${escapeHtml(contact.email)}</a>`);
        const address = contact.address || [business.address, business.city, business.country].filter(Boolean).join(', ');
        if (address) contactItems.push(`<span>${escapeHtml(address)}</span>`);
        setHtml('t6-footer-contact', contactItems.join(''));

        const socialHtml = Object.keys(SOCIAL_LABELS)
            .filter(key => social[key])
            .map(key => `<a class="t6-social__link" href="${escapeHtml(social[key])}" target="_blank" rel="noopener">${SOCIAL_LABELS[key]}</a>`)
            .join('');
        setHtml('t6-footer-social', socialHtml);

        const copy = byId('t6-footer-copy');
        if (copy) copy.textContent = `\u00a9 ${new Date().getFullYear()} ${name}`;
    }

    function setupHeader() {
        const header = byId('t6-header');
        const burger = byId('t6-menu-toggle');
        const nav = byId('t6-nav');
        const scrim = byId('t6-nav-scrim');
        const mobileQuery = window.matchMedia('(max-width: 1024px)');

        if (header) {
            const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
            onScroll();
            window.addEventListener('scroll', onScroll, { passive: true });
        }

        const setOpen = (open, options = {}) => {
            document.body.classList.toggle('t6-nav-open', open);
            if (burger) {
                burger.setAttribute('aria-expanded', open ? 'true' : 'false');
                burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
            }
            if (!open && options.restoreFocus && burger) burger.focus();
        };

        const close = (options) => setOpen(false, options);

        if (burger && nav) {
            burger.addEventListener('click', () => {
                const open = !document.body.classList.contains('t6-nav-open');
                setOpen(open);
                if (open) {
                    const first = nav.querySelector('a');
                    if (first) first.focus();
                }
            });
        }
        if (scrim) scrim.addEventListener('click', () => close());
        if (nav) nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => close()));
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && document.body.classList.contains('t6-nav-open')) close({ restoreFocus: true });
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
        }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
        targets.forEach(node => observer.observe(node));
    }

    function setupImageFallback() {
        document.addEventListener('error', event => {
            const img = event.target;
            if (img && img.tagName === 'IMG' && img.getAttribute('src') !== FALLBACK_IMAGE) {
                img.setAttribute('src', FALLBACK_IMAGE);
            }
        }, true);
    }

    function setupBookingShortcuts() {
        document.addEventListener('click', event => {
            const trigger = event.target.closest('[data-service], [data-package]');
            if (!trigger) return;
            preselectBooking(trigger.dataset.service || trigger.dataset.package);
        });
    }

    function lookupServiceName(serviceId) {
        const services = active(storage.getServices());
        const packages = active(storage.getPackages());
        const service = services.find(item => item.id === serviceId);
        if (service) return service.name;
        const pkg = packages.find(item => item.id === serviceId);
        if (pkg) return pkg.name;
        return 'your appointment';
    }

    function preselectBooking(serviceId) {
        const select = byId('t6-booking-service');
        const section = byId('t6-booking');
        if (select) select.value = serviceId || '';
        if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function setupLightbox() {
        const grid = byId('t6-gallery-grid');
        const lightbox = byId('t6-lightbox');
        const image = byId('t6-lightbox-image');
        const caption = byId('t6-lightbox-caption');
        const closeBtn = byId('t6-lightbox-close');
        const prevBtn = byId('t6-lightbox-prev');
        const nextBtn = byId('t6-lightbox-next');
        if (!grid || !lightbox || !image || !caption || !closeBtn || !prevBtn || !nextBtn) return;

        let lastFocused = null;
        let current = 0;

        const show = (index) => {
            const gallery = active(storage.getGallery());
            if (gallery.length === 0) return;
            current = (index + gallery.length) % gallery.length;
            const entry = gallery[current] || {};
            image.src = entry.image || FALLBACK_IMAGE;
            image.alt = entry.title || 'Gallery image';
            caption.textContent = [entry.title, entry.category].filter(Boolean).join(' \u00b7 ');
            const single = gallery.length <= 1;
            prevBtn.hidden = single;
            nextBtn.hidden = single;
        };

        const hide = () => {
            lightbox.hidden = true;
            image.removeAttribute('src');
            if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
        };

        grid.addEventListener('click', event => {
            const item = event.target.closest('.t6-gallery__item');
            if (!item) return;
            lastFocused = item;
            show(Number(item.dataset.index || '0'));
            lightbox.hidden = false;
            closeBtn.focus();
        });

        prevBtn.addEventListener('click', () => show(current - 1));
        nextBtn.addEventListener('click', () => show(current + 1));
        closeBtn.addEventListener('click', hide);
        lightbox.addEventListener('click', event => {
            if (event.target === lightbox) hide();
        });

        document.addEventListener('keydown', event => {
            if (lightbox.hidden) return;
            if (event.key === 'Escape') { hide(); return; }
            if (event.key === 'ArrowLeft') { show(current - 1); return; }
            if (event.key === 'ArrowRight') { show(current + 1); return; }
            if (event.key === 'Tab') {
                const focusable = [closeBtn, prevBtn, nextBtn].filter(node => !node.hidden);
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
        const form = byId('t6-booking-form');
        const success = byId('t6-booking-success');
        const successText = byId('t6-booking-success-text');
        const reset = byId('t6-booking-reset');
        if (!form || !success || !successText) return;

        form.addEventListener('submit', event => {
            event.preventDefault();
            const serviceId = byId('t6-booking-service').value;
            const name = byId('t6-booking-name').value.trim();
            const appointment = storage.addAppointment({
                customerName: name,
                phone: byId('t6-booking-phone').value.trim(),
                email: byId('t6-booking-email').value.trim(),
                service: serviceId,
                date: byId('t6-booking-date').value,
                time: byId('t6-booking-time').value,
                message: byId('t6-booking-message').value.trim()
            });

            if (!appointment) {
                showToast('We could not save your request. Please try again.', 'error');
                return;
            }

            successText.textContent = `${name}, your request for ${lookupServiceName(serviceId)} on ${formatDate(appointment.date)} at ${formatTime(appointment.time)} has been noted. The atelier will be in touch.`;
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
                const name = byId('t6-booking-name');
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
        renderBooking(data);
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
    window.SalonTemplates['template-6'] = { html: TEMPLATE_HTML, render: render };
})();