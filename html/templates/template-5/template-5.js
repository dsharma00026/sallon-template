(function () {
    const TEMPLATE_HTML = `
    <div class="t5-status" id="status-banner" hidden></div>

    <div id="t5-shell" data-shell="template-5">
    <header class="t5-header" id="site-header">
        <div class="t5-container t5-header__inner">
            <a class="t5-brand" id="site-logo" href="#home">
                <span class="t5-brand__mark" aria-hidden="true"></span>
                <span class="t5-brand__name" id="brand-name"></span>
            </a>
            <nav class="t5-nav" aria-label="Primary">
                <ul class="t5-nav__list" id="nav-menu">
                    <li><a href="#about">Studio</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#packages">Packages</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#gallery">Work</a></li>
                    <li><a href="#contact">Visit</a></li>
                </ul>
            </nav>
            <div class="t5-header__actions">
                <a class="site-admin-btn" data-admin-link href="admin.html" aria-label="Admin panel" title="Admin panel">
                    <svg class="site-admin-btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect></svg>
                    <span class="site-admin-btn__label">Admin</span>
                </a>
                <a class="t5-btn t5-btn--accent t5-header__cta" href="#booking">Book a visit</a>
                <button class="t5-burger" id="mobile-menu-btn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="nav-menu">
                    <span class="t5-burger__line"></span>
                    <span class="t5-burger__line"></span>
                </button>
            </div>
        </div>
    </header>

    <main>
        <section class="t5-hero" id="home">
            <div class="t5-hero__media" id="hero-media" aria-hidden="true"></div>
            <div class="t5-container t5-hero__layer">
                <div class="t5-hero__panel" id="hero-panel">
                    <p class="t5-kicker" id="hero-kicker" data-reveal></p>
                    <h1 class="t5-hero__title" id="hero-title" data-reveal></h1>
                    <p class="t5-hero__lede" id="hero-subtitle" data-reveal></p>
                    <div class="t5-hero__actions" data-reveal>
                        <a class="t5-btn t5-btn--accent t5-btn--lg" href="#booking">Book a visit</a>
                        <a class="t5-btn t5-btn--quiet t5-btn--lg" href="#services">Explore services</a>
                    </div>
                    <dl class="t5-hero__meta" id="hero-meta" data-reveal></dl>
                </div>
            </div>
        </section>

        <section class="t5-strip" aria-label="Studio overview">
            <div class="t5-container t5-strip__inner">
                <p class="t5-strip__statement" id="strip-statement" data-reveal></p>
                <dl class="t5-strip__stats" id="strip-stats" data-reveal></dl>
            </div>
        </section>

        <section class="t5-section t5-about" id="about">
            <div class="t5-container t5-about__grid">
                <div class="t5-about__media" id="about-media" data-reveal></div>
                <div class="t5-about__body" data-reveal>
                    <p class="t5-kicker">About the lounge</p>
                    <h2 class="t5-heading" id="about-title"></h2>
                    <div class="t5-about__text" id="about-text"></div>
                    <dl class="t5-about__facts" id="about-facts"></dl>
                </div>
            </div>
        </section>

        <section class="t5-section t5-services" id="services">
            <div class="t5-container">
                <header class="t5-section__head" data-reveal>
                    <div class="t5-section__head-text">
                        <p class="t5-kicker">Services</p>
                        <h2 class="t5-heading">The service index</h2>
                    </div>
                    <p class="t5-section__note" id="services-note"></p>
                </header>
                <div class="t5-filters" id="services-filters" role="group" aria-label="Filter services by category" data-reveal></div>
                <div class="t5-services__list" id="services-list" data-reveal></div>
            </div>
        </section>

        <section class="t5-featured" id="featured" hidden>
            <div class="t5-container">
                <article class="t5-featured__card">
                    <div class="t5-featured__media" id="featured-media"></div>
                    <div class="t5-featured__panel" id="featured-service"></div>
                </article>
            </div>
        </section>

        <section class="t5-section t5-packages" id="packages">
            <div class="t5-container">
                <header class="t5-section__head" data-reveal>
                    <div class="t5-section__head-text">
                        <p class="t5-kicker">Packages</p>
                        <h2 class="t5-heading">Curated collections</h2>
                    </div>
                    <p class="t5-section__note">Bundled experiences at a single, clear price. Every collection can be tailored in the chair.</p>
                </header>
                <div class="t5-packages__list" id="packages-list" data-reveal></div>
            </div>
        </section>

        <section class="t5-section t5-team" id="team">
            <div class="t5-container">
                <header class="t5-section__head" data-reveal>
                    <div class="t5-section__head-text">
                        <p class="t5-kicker">The team</p>
                        <h2 class="t5-heading">People who shape the look</h2>
                    </div>
                </header>
                <div class="t5-team__list" id="team-list" data-reveal></div>
            </div>
        </section>

        <section class="t5-section t5-gallery" id="gallery">
            <div class="t5-container">
                <header class="t5-section__head" data-reveal>
                    <div class="t5-section__head-text">
                        <p class="t5-kicker">Portfolio</p>
                        <h2 class="t5-heading">Selected work</h2>
                    </div>
                    <p class="t5-section__note">Click an image to view it full screen.</p>
                </header>
                <div class="t5-gallery__layout" data-reveal>
                    <button class="t5-gallery__main" id="gallery-main" type="button" aria-label="Open current image full screen"></button>
                    <div class="t5-gallery__thumbs" id="gallery-thumbs" role="list"></div>
                </div>
            </div>
        </section>

        <section class="t5-section t5-testimonials" id="testimonials">
            <div class="t5-container">
                <header class="t5-section__head" data-reveal>
                    <div class="t5-section__head-text">
                        <p class="t5-kicker">Client notes</p>
                        <h2 class="t5-heading">In their words</h2>
                    </div>
                </header>
                <div class="t5-quote" data-reveal>
                    <div class="t5-quote__stage" id="testimonial-stage" tabindex="0" aria-live="polite" aria-label="Client review"></div>
                    <div class="t5-quote__controls">
                        <button class="t5-quote__btn" id="testimonial-prev" type="button" aria-label="Previous review">&lsaquo;</button>
                        <div class="t5-quote__dots" id="testimonial-dots"></div>
                        <button class="t5-quote__btn" id="testimonial-next" type="button" aria-label="Next review">&rsaquo;</button>
                    </div>
                </div>
            </div>
        </section>

        <section class="t5-booking" id="booking">
            <div class="t5-container t5-booking__grid">
                <div class="t5-booking__aside" data-reveal>
                    <p class="t5-kicker t5-kicker--light">Bookings</p>
                    <h2 class="t5-heading t5-heading--light">Reserve your visit</h2>
                    <p class="t5-booking__lede">Send a request and the lounge will confirm your slot. This is a working prototype &mdash; requests are stored locally on this device only.</p>
                    <ol class="t5-booking__steps">
                        <li><span class="t5-booking__step-num">01</span><span class="t5-booking__step-text">Choose a service or collection</span></li>
                        <li><span class="t5-booking__step-num">02</span><span class="t5-booking__step-text">Pick a date and a time that suits</span></li>
                        <li><span class="t5-booking__step-num">03</span><span class="t5-booking__step-text">Leave your details and notes</span></li>
                    </ol>
                </div>
                <div class="t5-booking__panel" data-reveal>
                    <form class="t5-form" id="booking-form">
                        <div class="t5-form__row">
                            <div class="t5-field">
                                <label class="t5-field__label" for="booking-name">Full name</label>
                                <input class="t5-field__input" type="text" id="booking-name" name="name" autocomplete="name" required>
                            </div>
                            <div class="t5-field">
                                <label class="t5-field__label" for="booking-phone">Phone</label>
                                <input class="t5-field__input" type="tel" id="booking-phone" name="phone" autocomplete="tel" required>
                            </div>
                        </div>
                        <div class="t5-field">
                            <label class="t5-field__label" for="booking-email">Email</label>
                            <input class="t5-field__input" type="email" id="booking-email" name="email" autocomplete="email" required>
                        </div>
                        <div class="t5-field">
                            <label class="t5-field__label" for="booking-service">Service or package</label>
                            <select class="t5-field__input t5-field__select" id="booking-service" name="service" required>
                                <option value="" selected disabled>Select a service</option>
                            </select>
                        </div>
                        <div class="t5-form__row">
                            <div class="t5-field">
                                <label class="t5-field__label" for="booking-date">Preferred date</label>
                                <input class="t5-field__input" type="date" id="booking-date" name="date" required>
                            </div>
                            <div class="t5-field">
                                <label class="t5-field__label" for="booking-time">Preferred time</label>
                                <select class="t5-field__input t5-field__select" id="booking-time" name="time" required>
                                    <option value="" selected disabled>Select a date first</option>
                                </select>
                            </div>
                        </div>
                        <div class="t5-field">
                            <label class="t5-field__label" for="booking-message">Notes <span class="t5-field__optional">(optional)</span></label>
                            <textarea class="t5-field__input t5-field__textarea" id="booking-message" name="message" rows="3"></textarea>
                        </div>
                        <button class="t5-btn t5-btn--accent t5-btn--lg t5-form__submit" type="submit">Send request</button>
                    </form>
                    <div class="t5-booking__success" id="booking-success" hidden>
                        <span class="t5-booking__success-mark" aria-hidden="true">&#10003;</span>
                        <h3 class="t5-booking__success-title">Request received</h3>
                        <p class="t5-booking__success-text" id="booking-success-text"></p>
                        <button class="t5-btn t5-btn--quiet" id="booking-reset" type="button">Book another visit</button>
                    </div>
                </div>
            </div>
        </section>

        <section class="t5-section t5-contact" id="contact">
            <div class="t5-container">
                <header class="t5-section__head" data-reveal>
                    <div class="t5-section__head-text">
                        <p class="t5-kicker">Visit</p>
                        <h2 class="t5-heading">Find the lounge</h2>
                    </div>
                </header>
                <div class="t5-contact__grid" data-reveal>
                    <div class="t5-contact__card" id="contact-info"></div>
                    <div class="t5-contact__card t5-contact__card--hours">
                        <h3 class="t5-contact__title">Opening hours</h3>
                        <div class="t5-hours" id="opening-hours"></div>
                    </div>
                    <div class="t5-contact__card" id="contact-social-block">
                        <h3 class="t5-contact__title">Follow along</h3>
                        <div class="t5-social" id="contact-social"></div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="t5-footer">
        <div class="t5-container">
            <div class="t5-footer__cta" data-reveal>
                <div>
                    <p class="t5-kicker t5-kicker--light">Ready when you are</p>
                    <h2 class="t5-footer__cta-title" id="footer-cta-title"></h2>
                </div>
                <a class="t5-btn t5-btn--accent t5-btn--lg" href="#booking">Book a visit</a>
            </div>
            <div class="t5-footer__grid">
                <div class="t5-footer__col t5-footer__col--brand">
                    <p class="t5-footer__name" id="footer-name"></p>
                    <p class="t5-footer__tag" id="footer-tag"></p>
                </div>
                <nav class="t5-footer__col" aria-label="Footer">
                    <h3 class="t5-footer__heading">Explore</h3>
                    <ul class="t5-footer__links">
                        <li><a href="#about">Studio</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#packages">Packages</a></li>
                        <li><a href="#team">Team</a></li>
                        <li><a href="#gallery">Work</a></li>
                        <li><a href="#contact">Visit</a></li>
                    </ul>
                </nav>
                <div class="t5-footer__col">
                    <h3 class="t5-footer__heading">Hours</h3>
                    <div class="t5-footer__hours" id="footer-hours"></div>
                </div>
                <div class="t5-footer__col">
                    <h3 class="t5-footer__heading">Contact</h3>
                    <div class="t5-footer__contact" id="footer-contact"></div>
                    <div class="t5-social t5-social--footer" id="footer-social"></div>
                </div>
            </div>
            <div class="t5-footer__bottom">
                <p id="footer-copyright"></p>
                <a class="t5-footer__admin" href="admin.html">Admin Panel</a>
            </div>
        </div>
    </footer>

    <div class="t5-lightbox" id="lightbox" hidden role="dialog" aria-modal="true" aria-label="Gallery image">
        <button class="t5-lightbox__close" id="lightbox-close" type="button" aria-label="Close image">&times;</button>
        <figure class="t5-lightbox__figure">
            <img class="t5-lightbox__image" id="lightbox-image" alt="">
            <figcaption class="t5-lightbox__caption" id="lightbox-caption"></figcaption>
        </figure>
    </div>
    </div>
`;

    const FALLBACK_IMAGE = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="1200" viewBox="0 0 1000 1200">' +
        '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
        '<stop offset="0" stop-color="#121a34"/><stop offset="1" stop-color="#2a3563"/></linearGradient></defs>' +
        '<rect width="1000" height="1200" fill="url(#g)"/>' +
        '<circle cx="500" cy="470" r="180" fill="none" stroke="#cf1a70" stroke-width="6" opacity="0.9"/>' +
        '<circle cx="500" cy="470" r="120" fill="none" stroke="#d8daf2" stroke-width="2" opacity="0.7"/>' +
        '<text x="500" y="820" font-family="Arial, sans-serif" font-weight="700" font-size="44" fill="#f4f4f8" text-anchor="middle" letter-spacing="10">BEAUTY LOUNGE</text>' +
        '<text x="500" y="872" font-family="Arial, sans-serif" font-size="20" fill="#9aa0bd" text-anchor="middle">image unavailable</text>' +
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

    function setHtml(id, html) {
        const node = byId(id);
        if (node) node.innerHTML = html;
    }

    function setText(id, text) {
        const node = byId(id);
        if (node) node.textContent = text;
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
        return String(name || 'S')
            .split(/\s+/)
            .filter(Boolean)
            .slice(0, 2)
            .map(part => part.charAt(0).toUpperCase())
            .join('') || 'S';
    }

    function firstSentence(text, limit = 150) {
        const value = String(text || '').trim();
        if (!value) return '';
        const match = value.match(/^(.{10,}?[.!?])(\s|$)/);
        if (match && match[1].length <= limit) return match[1];
        if (value.length <= limit) return value;
        return value.slice(0, limit).replace(/\s+\S*$/, '') + '\u2026';
    }

    function statusText(status) {
        const labels = {
            draft: 'This website is currently a draft and is not live yet.',
            maintenance: 'We will be back soon. This website is under maintenance.'
        };
        return labels[status] || 'This website is not published.';
    }

    function todayKey() {
        return DAY_KEYS[(new Date().getDay() + 6) % 7];
    }

    function todayHoursText(hours) {
        const day = (hours || {})[todayKey()] || {};
        if (day.open && day.openTime && day.closeTime) {
            return `${formatTime(day.openTime)} \u2013 ${formatTime(day.closeTime)}`;
        }
        return 'Closed today';
    }

    function renderStatusBanner(data) {
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
        const name = business.name || 'Salon';
        const tagline = business.tagline || '';
        const description = business.description || 'A contemporary beauty lounge.';

        document.title = tagline ? `${name} — ${tagline}` : name;

        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', firstSentence(description, 160));
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', document.title);
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute('content', firstSentence(description, 160));

        if (business.faviconUrl) {
            let icon = document.querySelector('link[rel="icon"]');
            if (!icon) {
                icon = document.createElement('link');
                icon.rel = 'icon';
                document.head.appendChild(icon);
            }
            icon.href = business.faviconUrl;
        }

        document.body.dataset.template = settings.selectedTemplate || 'template-5';
    }

    function renderHeader(data) {
        const business = data.business || {};
        setText('brand-name', business.name || 'Salon');
    }

    function renderHero(data) {
        const business = data.business || {};
        const contact = data.contact || {};
        const hours = data.openingHours || {};
        const gallery = active(data.gallery);

        const locationParts = [business.city, business.country].filter(Boolean);
        setText('hero-kicker', locationParts.length
            ? `Contemporary beauty lounge \u00b7 ${locationParts.join(', ')}`
            : 'Hair \u00b7 Skin \u00b7 Nails \u00b7 Spa');
        setText('hero-title', business.tagline || business.name || 'Salon');
        setText('hero-subtitle', firstSentence(business.description, 170));

        setHtml('hero-meta', `
            <div class="t5-hero__meta-item">
                <dt>Location</dt>
                <dd>${escapeHtml([business.city, business.country].filter(Boolean).join(', ') || (contact.address || 'In studio'))}</dd>
            </div>
            <div class="t5-hero__meta-item">
                <dt>Today</dt>
                <dd>${escapeHtml(todayHoursText(hours))}</dd>
            </div>
        `);

        const media = byId('hero-media');
        if (!media) return;
        if (gallery.length === 0) {
            media.classList.add('t5-hero__media--fallback');
            media.innerHTML = `<span class="t5-hero__media-mark">${escapeHtml(initialsOf(business.name))}</span>`;
        } else {
            media.classList.remove('t5-hero__media--fallback');
            media.innerHTML = imgTag(gallery[0].image, gallery[0].title || business.name || 'Beauty lounge', { eager: true });
        }
    }

    function renderStrip(data) {
        const business = data.business || {};
        const services = active(data.services);
        const team = active(data.team);
        const gallery = active(data.gallery);

        const statement = business.description
            ? firstSentence(business.description, 150)
            : (business.tagline || '');
        setText('strip-statement', statement || 'A contemporary space for considered beauty.');

        const stats = [];
        if (services.length) stats.push({ value: String(services.length), label: 'Services' });
        const categories = [];
        services.forEach(service => {
            const category = service.category || '';
            if (category && categories.indexOf(category) === -1) categories.push(category);
        });
        if (categories.length) stats.push({ value: String(categories.length), label: 'Categories' });
        if (team.length) stats.push({ value: String(team.length), label: 'Stylists' });
        if (gallery.length) stats.push({ value: String(gallery.length), label: 'Works' });

        const container = byId('strip-stats');
        if (!container) return;
        if (stats.length === 0) {
            container.hidden = true;
            return;
        }
        container.hidden = false;
        container.innerHTML = stats.map(stat => `
            <div class="t5-strip__stat">
                <dt class="t5-strip__stat-value">${escapeHtml(stat.value)}</dt>
                <dd class="t5-strip__stat-label">${escapeHtml(stat.label)}</dd>
            </div>
        `).join('');
    }

    function renderAbout(data) {
        const business = data.business || {};
        const contact = data.contact || {};
        const hours = data.openingHours || {};
        const gallery = active(data.gallery);

        if (!business.description && !business.name) {
            hideEl('about');
            return;
        }
        showEl('about');

        setText('about-title', business.name || business.tagline || 'The lounge');
        setHtml('about-text', business.description
            ? `<p>${escapeHtml(business.description)}</p>`
            : `<p>${escapeHtml(business.tagline || 'A contemporary beauty lounge.')}</p>`);

        const media = byId('about-media');
        if (media) {
            const shot = gallery[1] || gallery[0];
            media.classList.toggle('t5-about__media--fallback', !shot);
            media.innerHTML = shot
                ? imgTag(shot.image, shot.title || business.name || 'Studio')
                : `<span class="t5-about__mark" aria-hidden="true">${escapeHtml(initialsOf(business.name))}</span>`;
        }

        const facts = [];
        const location = [business.city, business.country].filter(Boolean).join(', ');
        if (location) facts.push({ key: 'Location', value: location });
        const today = todayHoursText(hours);
        if (today) facts.push({ key: 'Today', value: today });
        if (contact.phone) facts.push({ key: 'Call', value: contact.phone });

        setHtml('about-facts', facts.map(fact => `
            <div class="t5-about__fact">
                <dt>${escapeHtml(fact.key)}</dt>
                <dd>${escapeHtml(fact.value)}</dd>
            </div>
        `).join(''));
    }

    function renderServices(data) {
        const services = active(data.services);
        const list = byId('services-list');
        const filters = byId('services-filters');
        if (!list) return;

        if (services.length === 0) {
            hideEl('services');
            return;
        }
        showEl('services');

        const categories = [];
        services.forEach(service => {
            const category = service.category || 'Signature';
            if (categories.indexOf(category) === -1) categories.push(category);
        });

        setText('services-note', `${services.length} services across ${categories.length} ${categories.length === 1 ? 'category' : 'categories'}`);

        if (filters) {
            const chips = ['All'].concat(categories).map((category, index) => `
                <button class="t5-chip${index === 0 ? ' is-active' : ''}" type="button"
                    aria-pressed="${index === 0 ? 'true' : 'false'}" data-cat="${escapeHtml(category)}">${escapeHtml(category)}</button>
            `).join('');
            filters.innerHTML = chips;
            filters.hidden = categories.length <= 1;
        }

        const gallery = active(data.gallery);

        list.innerHTML = services.map((service, index) => {
            const image = gallery.find(item => item.category && service.category && item.category === service.category)
                || gallery[index % (gallery.length || 1)];
            const thumb = image
                ? imgTag(image.image, service.name, { className: 't5-service__thumb-img' })
                : `<span class="t5-service__thumb-fallback" aria-hidden="true">${escapeHtml(initialsOf(service.name))}</span>`;
            const category = service.category || 'Signature';
            return `
            <article class="t5-service" data-category="${escapeHtml(category)}">
                <div class="t5-service__thumb">${thumb}</div>
                <div class="t5-service__body">
                    <div class="t5-service__top">
                        <h3 class="t5-service__name">${escapeHtml(service.name)}</h3>
                        <span class="t5-service__price">${formatCurrency(service.price)}</span>
                    </div>
                    <div class="t5-service__meta">
                        <span class="t5-service__cat">${escapeHtml(category)}</span>
                        ${service.duration ? `<span class="t5-service__dur">${escapeHtml(String(service.duration))} min</span>` : ''}
                    </div>
                    ${service.description ? `<p class="t5-service__desc">${escapeHtml(service.description)}</p>` : ''}
                    <button class="t5-btn t5-btn--quiet t5-service__book" type="button" data-service="${escapeHtml(service.id)}">Book this</button>
                </div>
            </article>`;
        }).join('');
    }

    function renderFeatured(data) {
        const services = active(data.services);
        const gallery = active(data.gallery);
        const body = byId('featured-service');
        const media = byId('featured-media');
        if (!body || !media) return;

        if (services.length === 0) {
            hideEl('featured');
            return;
        }
        showEl('featured');

        const featured = services.reduce((best, service) =>
            (Number(service.price) || 0) > (Number(best.price) || 0) ? service : best, services[0]);

        const image = gallery.find(item => item.category && featured.category && item.category === featured.category) || gallery[0];

        media.innerHTML = image
            ? imgTag(image.image, image.title || featured.name)
            : `<span class="t5-featured__fallback" aria-hidden="true">${escapeHtml(initialsOf(featured.category))}</span>`;

        body.innerHTML = `
            <p class="t5-kicker t5-kicker--light">Spotlight service</p>
            <h3 class="t5-featured__name">${escapeHtml(featured.name)}</h3>
            ${featured.description ? `<p class="t5-featured__desc">${escapeHtml(featured.description)}</p>` : ''}
            <div class="t5-featured__meta">
                <span class="t5-featured__price">${formatCurrency(featured.price)}</span>
                ${featured.duration ? `<span class="t5-featured__dur">${escapeHtml(String(featured.duration))} min</span>` : ''}
                <span class="t5-featured__cat">${escapeHtml(featured.category || 'Signature')}</span>
            </div>
            <button class="t5-btn t5-btn--accent t5-btn--lg" type="button" data-service="${escapeHtml(featured.id)}">Book this service</button>
        `;
    }

    function renderPackages(data, services) {
        const packages = active(data.packages);
        const list = byId('packages-list');
        if (!list) return;

        if (packages.length === 0) {
            hideEl('packages');
            return;
        }
        showEl('packages');

        const featureIndex = Math.floor((packages.length - 1) / 2);

        list.innerHTML = packages.map((pkg, index) => {
            const included = (Array.isArray(pkg.services) ? pkg.services : [])
                .map(id => services.find(service => service && service.id === id))
                .filter(Boolean);
            return `
            <article class="t5-package${index === featureIndex ? ' t5-package--feature' : ''}">
                <div class="t5-package__lead">
                    <p class="t5-package__tag">${index === featureIndex ? 'Most booked' : 'Collection'}</p>
                    <h3 class="t5-package__name">${escapeHtml(pkg.name)}</h3>
                    ${pkg.description ? `<p class="t5-package__desc">${escapeHtml(pkg.description)}</p>` : ''}
                </div>
                <ul class="t5-package__items">
                    ${included.length
                        ? included.map(service => `<li>${escapeHtml(service.name)}</li>`).join('')
                        : '<li>Curated for you</li>'}
                </ul>
                <div class="t5-package__action">
                    <span class="t5-package__price">${formatCurrency(pkg.price)}</span>
                    <button class="t5-btn ${index === featureIndex ? 't5-btn--accent' : 't5-btn--quiet'} t5-package__cta" type="button" data-package="${escapeHtml(pkg.id)}">Choose</button>
                </div>
            </article>
        `;
        }).join('');
    }

    function renderTeam(data) {
        const team = active(data.team);
        const list = byId('team-list');
        if (!list) return;

        if (team.length === 0) {
            hideEl('team');
            return;
        }
        showEl('team');

        list.innerHTML = team.map((member, index) => `
            <article class="t5-member t5-member--${(index % 3) + 1}">
                <div class="t5-member__frame${member.image ? '' : ' t5-member__frame--fallback'}">
                    ${member.image
                        ? imgTag(member.image, member.name)
                        : `<span aria-hidden="true">${escapeHtml(initialsOf(member.name))}</span>`}
                </div>
                <div class="t5-member__body">
                    <h3 class="t5-member__name">${escapeHtml(member.name)}</h3>
                    ${member.role ? `<span class="t5-member__role">${escapeHtml(member.role)}</span>` : ''}
                    ${member.bio ? `<p class="t5-member__bio">${escapeHtml(member.bio)}</p>` : ''}
                </div>
            </article>
        `).join('');
    }

    function renderGallery(data) {
        const gallery = active(data.gallery);
        const main = byId('gallery-main');
        const thumbs = byId('gallery-thumbs');
        if (!main || !thumbs) return;

        if (gallery.length === 0) {
            hideEl('gallery');
            return;
        }
        showEl('gallery');

        const renderMain = (item) => {
            main.innerHTML = `
                ${imgTag(item.image, item.title || 'Salon work', { className: 't5-gallery__main-img' })}
                <span class="t5-gallery__caption">
                    <span class="t5-gallery__caption-title">${escapeHtml(item.title || '')}</span>
                    <span class="t5-gallery__caption-cat">${escapeHtml(item.category || '')}</span>
                </span>`;
            main.dataset.index = String(gallery.indexOf(item));
            main.setAttribute('aria-label', `Open ${item.title || 'image'} full screen`);
        };

        main.__setItem = renderMain;
        renderMain(gallery[0]);

        if (gallery.length <= 1) {
            thumbs.hidden = true;
            return;
        }
        thumbs.hidden = false;
        thumbs.innerHTML = gallery.map((item, index) => `
            <button class="t5-thumb${index === 0 ? ' is-active' : ''}" type="button" role="listitem"
                data-index="${index}" aria-label="Show ${escapeHtml(item.title || 'image')}">
                ${imgTag(item.image, item.title || 'Salon work')}
            </button>
        `).join('');
    }

    function renderTestimonials(data) {
        const testimonials = active(data.testimonials);
        const stage = byId('testimonial-stage');
        const dots = byId('testimonial-dots');
        const prev = byId('testimonial-prev');
        const next = byId('testimonial-next');
        if (!stage) return;

        if (testimonials.length === 0) {
            hideEl('testimonials');
            return;
        }
        showEl('testimonials');

        let index = 0;

        const paint = () => {
            const item = testimonials[index];
            const rating = Math.min(5, Math.max(0, Number(item.rating) || 0));
            const stars = '\u2605'.repeat(rating) + '\u2606'.repeat(5 - rating);
            stage.innerHTML = `
                <p class="t5-quote__stars" aria-label="${rating} out of 5 stars">${stars}</p>
                <blockquote class="t5-quote__text">${escapeHtml(item.message || '')}</blockquote>
                <p class="t5-quote__author">${escapeHtml(item.customerName || 'Client')}</p>
                <span class="t5-quote__index">${String(index + 1).padStart(2, '0')} / ${String(testimonials.length).padStart(2, '0')}</span>`;
            if (dots) {
                Array.prototype.forEach.call(dots.children, (dot, dotIndex) => {
                    dot.classList.toggle('is-active', dotIndex === index);
                    dot.setAttribute('aria-current', dotIndex === index ? 'true' : 'false');
                });
            }
        };

        const go = delta => {
            index = (index + delta + testimonials.length) % testimonials.length;
            paint();
        };

        if (dots) {
            dots.innerHTML = testimonials.map((item, dotIndex) => `
                <button class="t5-quote__dot" type="button" data-index="${dotIndex}" aria-label="Show review ${dotIndex + 1}"></button>
            `).join('');
        }

        if (prev) prev.hidden = testimonials.length <= 1;
        if (next) next.hidden = testimonials.length <= 1;

        const stageEl = stage;
        stageEl.__go = go;
        stageEl.__show = target => {
            if (Number.isNaN(target)) return;
            index = (target + testimonials.length) % testimonials.length;
            paint();
        };
        paint();
    }

    function buildServiceOptions(data) {
        const services = active(data.services);
        const packages = active(data.packages);
        const select = byId('booking-service');
        if (!select) return;

        const serviceOptions = services.map(service =>
            `<option value="${escapeHtml(service.id)}">${escapeHtml(service.name)} \u2014 ${formatCurrency(service.price)}</option>`
        ).join('');
        const packageOptions = packages.map(pkg =>
            `<option value="${escapeHtml(pkg.id)}">${escapeHtml(pkg.name)} \u2014 ${formatCurrency(pkg.price)} (package)</option>`
        ).join('');

        let html = '<option value="" selected disabled>Select a service</option>';
        if (serviceOptions) html += `<optgroup label="Services">${serviceOptions}</optgroup>`;
        if (packageOptions) html += `<optgroup label="Packages">${packageOptions}</optgroup>`;
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
        const dateInput = byId('booking-date');
        const timeSelect = byId('booking-time');
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

        const dateInput = byId('booking-date');
        if (dateInput) {
            dateInput.min = localISODate(new Date());
            dateInput.addEventListener('change', renderBookingTimes);
            renderBookingTimes();
        }
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
        const select = byId('booking-service');
        const section = byId('booking');
        if (select) select.value = serviceId || '';
        if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(() => {
            if (select) select.focus({ preventScroll: true });
        }, 650);
    }

    function renderContact(data) {
        const contact = data.contact || {};
        const business = data.business || {};
        const info = byId('contact-info');
        if (info) {
            const rows = [];
            if (contact.phone) {
                rows.push(`
                    <div class="t5-contact__row">
                        <span class="t5-contact__key">Phone</span>
                        <span class="t5-contact__value"><a href="tel:${escapeHtml(contact.phone)}">${escapeHtml(contact.phone)}</a></span>
                    </div>`);
            }
            if (contact.email) {
                rows.push(`
                    <div class="t5-contact__row">
                        <span class="t5-contact__key">Email</span>
                        <span class="t5-contact__value"><a href="mailto:${escapeHtml(contact.email)}">${escapeHtml(contact.email)}</a></span>
                    </div>`);
            }
            const address = contact.address || [business.address, business.city, business.country].filter(Boolean).join(', ');
            if (address) {
                const maps = contact.googleMapsUrl
                    ? `<a class="t5-contact__maps" href="${escapeHtml(contact.googleMapsUrl)}" target="_blank" rel="noopener">Get directions</a>`
                    : '';
                rows.push(`
                    <div class="t5-contact__row">
                        <span class="t5-contact__key">Address</span>
                        <span class="t5-contact__value">${escapeHtml(address)}${maps ? '<br>' + maps : ''}</span>
                    </div>`);
            }
            info.innerHTML = `<h3 class="t5-contact__title">Studio</h3>${rows.join('') || '<p class="t5-empty">Contact details coming soon.</p>'}`;
        }

        const hours = data.openingHours || {};
        const current = todayKey();
        setHtml('opening-hours', DAY_KEYS.map(day => {
            const dayData = hours[day] || {};
            const isOpen = dayData.open && dayData.openTime;
            const value = isOpen
                ? `${formatTime(dayData.openTime)} \u2013 ${formatTime(dayData.closeTime)}`
                : 'Closed';
            return `
                <div class="t5-hours__row${isOpen ? '' : ' t5-hours__row--closed'}${day === current ? ' is-today' : ''}">
                    <span class="t5-hours__day">${DAY_LABELS[day]}${day === current ? '<span class="t5-hours__today-tag">Today</span>' : ''}</span>
                    <span class="t5-hours__time">${value}</span>
                </div>`;
        }).join(''));

        const social = data.socialLinks || {};
        const socialHtml = Object.keys(SOCIAL_LABELS)
            .filter(key => social[key])
            .map(key => `<a class="t5-social__link" href="${escapeHtml(social[key])}" target="_blank" rel="noopener"><span class="t5-social__dot" aria-hidden="true"></span>${SOCIAL_LABELS[key]}</a>`)
            .join('');
        if (socialHtml) {
            setHtml('contact-social', socialHtml);
        } else {
            hideEl('contact-social-block');
        }
    }

    function renderFooter(data) {
        const business = data.business || {};
        const contact = data.contact || {};
        const social = data.socialLinks || {};
        const hours = data.openingHours || {};
        const name = business.name || 'Salon';
        const year = new Date().getFullYear();

        setText('footer-cta-title', business.tagline || `Visit ${name}`);
        setText('footer-name', name);
        setText('footer-tag', business.tagline || business.description || '');

        setHtml('footer-hours', DAY_KEYS.map(day => {
            const dayData = hours[day] || {};
            const value = dayData.open && dayData.openTime
                ? `${formatTime(dayData.openTime)} \u2013 ${formatTime(dayData.closeTime)}`
                : 'Closed';
            return `
                <div class="t5-footer__hours-row">
                    <span>${DAY_LABELS[day].slice(0, 3)}</span>
                    <span>${value}</span>
                </div>`;
        }).join(''));

        const contactLines = [];
        if (contact.phone) contactLines.push(`<a href="tel:${escapeHtml(contact.phone)}">${escapeHtml(contact.phone)}</a>`);
        if (contact.email) contactLines.push(`<a href="mailto:${escapeHtml(contact.email)}">${escapeHtml(contact.email)}</a>`);
        if (contact.address) contactLines.push(`<span>${escapeHtml(contact.address)}</span>`);
        setHtml('footer-contact', contactLines.join(''));

        const socialHtml = Object.keys(SOCIAL_LABELS)
            .filter(key => social[key])
            .map(key => `<a href="${escapeHtml(social[key])}" target="_blank" rel="noopener">${SOCIAL_LABELS[key]}</a>`)
            .join('');
        setHtml('footer-social', socialHtml);

        setText('footer-copyright', `\u00a9 ${year} ${name}. All rights reserved.`);
    }

    function bindHeader() {
        const header = byId('site-header');
        if (header) {
            const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 20);
            window.addEventListener('scroll', onScroll, { passive: true });
            onScroll();
        }

        const burger = byId('mobile-menu-btn');
        const menu = byId('nav-menu');
        if (burger && menu) {
            const setOpen = (open) => {
                document.body.classList.toggle('t5-nav-open', open);
                burger.setAttribute('aria-expanded', open ? 'true' : 'false');
                burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
            };
            const close = () => setOpen(false);
            burger.addEventListener('click', () => {
                setOpen(!document.body.classList.contains('t5-nav-open'));
            });
            menu.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
            document.addEventListener('keydown', event => {
                if (event.key === 'Escape' && document.body.classList.contains('t5-nav-open')) {
                    close();
                    burger.focus();
                }
            });
        }
    }

    function bindReveal() {
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
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        targets.forEach(node => observer.observe(node));
    }

    function bindImageFallback() {
        document.addEventListener('error', event => {
            const img = event.target;
            if (img && img.tagName === 'IMG' && !img.dataset.fallbackApplied) {
                img.dataset.fallbackApplied = '1';
                img.src = FALLBACK_IMAGE;
            }
        }, true);
    }

    function bindServices() {
        const filters = byId('services-filters');
        const list = byId('services-list');
        if (!filters || !list) return;

        filters.addEventListener('click', event => {
            const chip = event.target.closest('.t5-chip');
            if (!chip) return;
            const category = chip.dataset.cat;
            Array.prototype.forEach.call(filters.children, node => {
                const on = node === chip;
                node.classList.toggle('is-active', on);
                node.setAttribute('aria-pressed', on ? 'true' : 'false');
            });
            Array.prototype.forEach.call(list.querySelectorAll('.t5-service'), row => {
                const show = category === 'All' || row.dataset.category === category;
                row.hidden = !show;
            });
        });
    }

    function bindBookingShortcuts() {
        document.addEventListener('click', event => {
            const trigger = event.target.closest('[data-service], [data-package]');
            if (!trigger) return;
            preselectBooking(trigger.dataset.service || trigger.dataset.package);
        });
    }

    function bindGallery() {
        const thumbs = byId('gallery-thumbs');
        const main = byId('gallery-main');
        const gallery = active(storage.getGallery());
        if (!thumbs || !main || gallery.length === 0) return;

        thumbs.addEventListener('click', event => {
            const thumb = event.target.closest('.t5-thumb');
            if (!thumb) return;
            const index = Number(thumb.dataset.index);
            const item = gallery[index];
            if (!item || typeof main.__setItem !== 'function') return;
            main.__setItem(item);
            Array.prototype.forEach.call(thumbs.children, node => node.classList.toggle('is-active', node === thumb));
        });
    }

    function bindTestimonial() {
        const stage = byId('testimonial-stage');
        const dots = byId('testimonial-dots');
        const prev = byId('testimonial-prev');
        const next = byId('testimonial-next');
        if (!stage) return;

        if (prev) prev.addEventListener('click', () => stage.__go(-1));
        if (next) next.addEventListener('click', () => stage.__go(1));
        if (dots) {
            dots.addEventListener('click', event => {
                const dot = event.target.closest('.t5-quote__dot');
                if (!dot) return;
                stage.__show(Number(dot.dataset.index));
            });
        }
        stage.addEventListener('keydown', event => {
            if (event.key === 'ArrowLeft') { event.preventDefault(); stage.__go(-1); }
            else if (event.key === 'ArrowRight') { event.preventDefault(); stage.__go(1); }
        });
    }

    function bindLightbox() {
        const main = byId('gallery-main');
        const lightbox = byId('lightbox');
        const image = byId('lightbox-image');
        const caption = byId('lightbox-caption');
        const close = byId('lightbox-close');
        if (!main || !lightbox || !image || !caption || !close) return;

        let lastFocused = null;

        const hide = () => {
            lightbox.hidden = true;
            image.removeAttribute('src');
            if (lastFocused) lastFocused.focus();
        };

        main.addEventListener('click', () => {
            const gallery = active(storage.getGallery());
            const index = Number(main.dataset.index || '0');
            const item = gallery[index];
            if (!item) return;
            lastFocused = main;
            image.src = item.image || FALLBACK_IMAGE;
            image.alt = item.title || 'Gallery image';
            caption.textContent = [item.title, item.category].filter(Boolean).join(' \u00b7 ');
            lightbox.hidden = false;
            close.focus();
        });

        document.addEventListener('keydown', event => {
            if (lightbox.hidden) return;
            if (event.key === 'Tab') {
                const focusable = Array.from(lightbox.querySelectorAll('button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])')).filter(el => !el.hidden && el.offsetWidth > 0 && el.offsetHeight > 0);
                if (focusable.length === 0) return;
                const first = focusable[0];
                const last = focusable[focusable.length - 1];
                if (event.shiftKey) {
                    if (document.activeElement === first) { event.preventDefault(); last.focus(); }
                } else {
                    if (document.activeElement === last) { event.preventDefault(); first.focus(); }
                }
            }
        });

        close.addEventListener('click', hide);
        lightbox.addEventListener('click', event => {
            if (event.target === lightbox) hide();
        });
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && !lightbox.hidden) hide();
        });
    }

    function bindBookingForm() {
        const form = byId('booking-form');
        const success = byId('booking-success');
        const successText = byId('booking-success-text');
        const reset = byId('booking-reset');
        if (!form || !success || !successText) return;

        form.addEventListener('submit', event => {
            event.preventDefault();

            const name = byId('booking-name').value.trim();
            const phone = byId('booking-phone').value.trim();
            const email = byId('booking-email').value.trim();
            const service = byId('booking-service').value;
            const date = byId('booking-date').value;
            const time = byId('booking-time').value;
            const message = byId('booking-message').value.trim();

            const appointment = storage.addAppointment({
                customerName: name,
                phone,
                email,
                service,
                date,
                time,
                message
            });

            if (!appointment) {
                showToast('We could not save your request. Please try again.', 'error');
                return;
            }

            successText.textContent = `Thanks, ${name}. We have your request for ` +
                `${lookupServiceName(service)} on ${formatDate(date)} at ${formatTime(time)}. ` +
                `The lounge will confirm shortly.`;
            form.hidden = true;
            success.hidden = false;
            if (success && !success.hasAttribute('tabindex')) success.setAttribute('tabindex', '-1');
            success.focus();
            showToast('Booking request received.', 'success');
        });

        if (reset) {
            reset.addEventListener('click', () => {
                form.reset();
                renderBookingTimes();
                success.hidden = true;
                form.hidden = false;
                const first = byId('booking-name');
                if (first) first.focus();
            });
        }
    }

    function render(data) {
        renderStatusBanner(data);
        renderMeta(data);
        renderHeader(data);
        renderHero(data);
        renderStrip(data);
        renderAbout(data);
        renderServices(data);
        renderFeatured(data);
        renderPackages(data, active(data.services));
        renderTeam(data);
        renderGallery(data);
        renderTestimonials(data);
        renderBooking(data);
        renderContact(data);
        renderFooter(data);
        bindHeader();
        bindReveal();
        bindImageFallback();
        bindServices();
        bindBookingShortcuts();
        bindGallery();
        bindTestimonial();
        bindLightbox();
        bindBookingForm();
    }

    window.SalonTemplates = window.SalonTemplates || {};
    window.SalonTemplates['template-5'] = { html: TEMPLATE_HTML, render: render };
})();
