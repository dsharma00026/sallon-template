(function () {
    const TEMPLATE_HTML = `
    <div class="t4-status" id="status-banner" hidden></div>

    <div id="t4-shell" data-shell="template-4">
    <header class="t4-header" id="site-header">
        <div class="t4-container t4-header__inner">
            <a class="t4-logo" id="site-logo" href="#home">
                <span class="t4-logo__name" id="brand-name"></span>
                <span class="t4-logo__dot" aria-hidden="true"></span>
            </a>
            <nav class="t4-nav" aria-label="Primary">
                <ul class="t4-nav__list" id="nav-menu">
                    <li><a href="#about">Studio</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#packages">Packages</a></li>
                    <li><a href="#team">Crew</a></li>
                    <li><a href="#gallery">Work</a></li>
                    <li><a href="#contact">Visit</a></li>
                </ul>
            </nav>
            <div class="t4-header__actions">
                <a class="t4-btn t4-btn--accent t4-header__cta" href="#booking">Book now</a>
                <button class="t4-burger" id="mobile-menu-btn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="nav-menu">
                    <span class="t4-burger__line"></span>
                    <span class="t4-burger__line"></span>
                </button>
            </div>
        </div>
    </header>

    <main>
        <section class="t4-hero" id="home">
            <div class="t4-container t4-hero__grid">
                <div class="t4-hero__copy">
                    <p class="t4-kicker" id="hero-kicker" data-reveal></p>
                    <h1 class="t4-hero__title" id="hero-title" data-reveal></h1>
                    <p class="t4-hero__lede" id="hero-subtitle" data-reveal></p>
                    <div class="t4-hero__actions" data-reveal>
                        <a class="t4-btn t4-btn--accent t4-btn--lg" href="#booking">Book a chair</a>
                        <a class="t4-btn t4-btn--ghost t4-btn--lg" href="#services">See the menu</a>
                    </div>
                    <dl class="t4-hero__meta" id="hero-meta" data-reveal></dl>
                </div>
                <div class="t4-hero__media" id="hero-media" data-reveal></div>
            </div>
            <div class="t4-marquee" aria-hidden="true">
                <div class="t4-marquee__track" id="hero-marquee"></div>
            </div>
        </section>

        <section class="t4-intro" id="about">
            <div class="t4-container t4-intro__grid">
                <div class="t4-intro__lead" data-reveal>
                    <p class="t4-kicker">The studio</p>
                    <h2 class="t4-display" id="intro-title"></h2>
                    <div class="t4-intro__text" id="intro-text"></div>
                </div>
                <dl class="t4-intro__stats" id="intro-stats" data-reveal></dl>
            </div>
        </section>

        <section class="t4-section t4-services" id="services">
            <div class="t4-container">
                <header class="t4-section__head" data-reveal>
                    <p class="t4-kicker">Services</p>
                    <div class="t4-section__head-row">
                        <h2 class="t4-display">The menu</h2>
                        <p class="t4-section__note" id="services-note"></p>
                    </div>
                </header>
                <div class="t4-services__list" id="services-list" data-reveal></div>
            </div>
        </section>

        <section class="t4-featured" id="featured" hidden>
            <div class="t4-container">
                <article class="t4-featured__card">
                    <div class="t4-featured__media" id="featured-media"></div>
                    <div class="t4-featured__body" id="featured-service"></div>
                </article>
            </div>
        </section>

        <section class="t4-section t4-packages" id="packages">
            <div class="t4-container">
                <header class="t4-section__head" data-reveal>
                    <p class="t4-kicker">Packages</p>
                    <h2 class="t4-display">Bundles</h2>
                    <p class="t4-section__note">Curated combinations, one clear price. Every bundle can be tailored in the chair.</p>
                </header>
                <div class="t4-packages__grid" id="packages-grid" data-reveal></div>
            </div>
        </section>

        <section class="t4-section t4-team" id="team">
            <div class="t4-container">
                <header class="t4-section__head" data-reveal>
                    <p class="t4-kicker">The crew</p>
                    <h2 class="t4-display">Who you sit with</h2>
                </header>
                <div class="t4-team__grid" id="team-grid" data-reveal></div>
            </div>
        </section>

        <section class="t4-section t4-gallery" id="gallery">
            <div class="t4-container">
                <header class="t4-section__head" data-reveal>
                    <p class="t4-kicker">The work</p>
                    <h2 class="t4-display">Lookbook</h2>
                </header>
                <div class="t4-gallery__grid" id="gallery-grid" data-reveal></div>
            </div>
        </section>

        <section class="t4-section t4-testimonials" id="testimonials">
            <div class="t4-container">
                <header class="t4-section__head" data-reveal>
                    <p class="t4-kicker">Reviews</p>
                    <h2 class="t4-display">Word on the street</h2>
                </header>
                <div class="t4-slider" id="testimonials-slider" data-reveal>
                    <div class="t4-slider__track" id="testimonials-track" tabindex="0" aria-label="Client reviews"></div>
                    <div class="t4-slider__controls">
                        <button class="t4-slider__btn" id="testimonials-prev" type="button" aria-label="Previous review">&larr;</button>
                        <button class="t4-slider__btn" id="testimonials-next" type="button" aria-label="Next review">&rarr;</button>
                    </div>
                </div>
            </div>
        </section>

        <section class="t4-booking" id="booking">
            <div class="t4-container t4-booking__grid">
                <div class="t4-booking__intro" data-reveal>
                    <p class="t4-kicker t4-kicker--light">Bookings</p>
                    <h2 class="t4-display t4-display--light">Grab a chair</h2>
                    <p class="t4-booking__lede">Tell us the look you are after and we will get back to you fast. Requests are held while you are on this page only &mdash; this site is a preview.</p>
                    <ul class="t4-booking__perks">
                        <li>Colour, cut &amp; styling specialists</li>
                        <li>Straight-up, transparent pricing</li>
                        <li>Walk out with a plan</li>
                    </ul>
                </div>
                <div class="t4-booking__panel" data-reveal>
                    <form class="t4-form" id="booking-form">
                        <div class="t4-form__row">
                            <div class="t4-field">
                                <label class="t4-field__label" for="booking-name">Full name</label>
                                <input class="t4-field__input" type="text" id="booking-name" name="name" autocomplete="name" required>
                            </div>
                            <div class="t4-field">
                                <label class="t4-field__label" for="booking-phone">Phone</label>
                                <input class="t4-field__input" type="tel" id="booking-phone" name="phone" autocomplete="tel" required>
                            </div>
                        </div>
                        <div class="t4-field">
                            <label class="t4-field__label" for="booking-email">Email</label>
                            <input class="t4-field__input" type="email" id="booking-email" name="email" autocomplete="email" required>
                        </div>
                        <div class="t4-field">
                            <label class="t4-field__label" for="booking-service">Service or package</label>
                            <select class="t4-field__input t4-field__select" id="booking-service" name="service" required>
                                <option value="" selected disabled>Select a service</option>
                            </select>
                        </div>
                        <div class="t4-form__row">
                            <div class="t4-field">
                                <label class="t4-field__label" for="booking-date">Preferred date</label>
                                <input class="t4-field__input" type="date" id="booking-date" name="date" required>
                            </div>
                            <div class="t4-field">
                                <label class="t4-field__label" for="booking-time">Preferred time</label>
                                <select class="t4-field__input t4-field__select" id="booking-time" name="time" required>
                                    <option value="" selected disabled>Select a date first</option>
                                </select>
                            </div>
                        </div>
                        <div class="t4-field">
                            <label class="t4-field__label" for="booking-message">Notes <span class="t4-field__optional">(optional)</span></label>
                            <textarea class="t4-field__input t4-field__textarea" id="booking-message" name="message" rows="3"></textarea>
                        </div>
                        <button class="t4-btn t4-btn--accent t4-btn--lg t4-form__submit" type="submit">Request booking</button>
                    </form>
                    <div class="t4-booking__success" id="booking-success" hidden tabindex="-1">
                        <p class="t4-booking__success-mark" aria-hidden="true">&#10003;</p>
                        <h3 class="t4-booking__success-title">Request sent</h3>
                        <p class="t4-booking__success-text" id="booking-success-text"></p>
                        <button class="t4-btn t4-btn--ghost-light" id="booking-reset" type="button">Book another</button>
                    </div>
                </div>
            </div>
        </section>

        <section class="t4-section t4-contact" id="contact">
            <div class="t4-container">
                <header class="t4-section__head" data-reveal>
                    <p class="t4-kicker">Visit</p>
                    <h2 class="t4-display">Find the studio</h2>
                </header>
                <div class="t4-contact__grid" data-reveal>
                    <div class="t4-contact__block" id="contact-info"></div>
                    <div class="t4-contact__block t4-contact__block--dark">
                        <h3 class="t4-contact__title">Opening hours</h3>
                        <div class="t4-hours" id="opening-hours"></div>
                    </div>
                    <div class="t4-contact__block">
                        <h3 class="t4-contact__title">Social</h3>
                        <div class="t4-social" id="contact-social"></div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="t4-footer">
        <div class="t4-container">
            <div class="t4-footer__top">
                <p class="t4-footer__huge" id="footer-huge"></p>
                <a class="t4-btn t4-btn--accent t4-btn--lg" href="#booking">Book a chair</a>
            </div>
            <div class="t4-footer__grid">
                <div class="t4-footer__col t4-footer__col--brand">
                    <p class="t4-footer__name" id="footer-name"></p>
                    <p class="t4-footer__tag" id="footer-tag"></p>
                </div>
                <nav class="t4-footer__col" aria-label="Footer">
                    <h3 class="t4-footer__heading">Menu</h3>
                    <ul class="t4-footer__links">
                        <li><a href="#about">Studio</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#packages">Packages</a></li>
                        <li><a href="#team">Crew</a></li>
                        <li><a href="#gallery">Work</a></li>
                        <li><a href="#contact">Visit</a></li>
                    </ul>
                </nav>
                <div class="t4-footer__col">
                    <h3 class="t4-footer__heading">Hours</h3>
                    <div class="t4-footer__hours" id="footer-hours"></div>
                </div>
                <div class="t4-footer__col">
                    <h3 class="t4-footer__heading">Contact</h3>
                    <div class="t4-footer__contact" id="footer-contact"></div>
                    <div class="t4-social t4-social--footer" id="footer-social"></div>
                </div>
            </div>
            <div class="t4-footer__bottom">
                <p id="footer-copyright"></p>
                <a class="t4-footer__admin" href="admin.html">Admin Panel</a>
            </div>
        </div>
    </footer>

    <div class="t4-lightbox" id="lightbox" hidden role="dialog" aria-modal="true" aria-label="Gallery image">
        <button class="t4-lightbox__close" id="lightbox-close" type="button" aria-label="Close image">&times;</button>
        <figure class="t4-lightbox__figure">
            <img class="t4-lightbox__image" id="lightbox-image" src="" alt="">
            <figcaption class="t4-lightbox__caption" id="lightbox-caption"></figcaption>
        </figure>
    </div>
    </div>
`;

    const FALLBACK_IMAGE = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="900" height="1100" viewBox="0 0 900 1100">' +
        '<rect width="900" height="1100" fill="#141414"/>' +
        '<rect x="0" y="0" width="900" height="14" fill="#3a4cff"/>' +
        '<circle cx="450" cy="450" r="150" fill="none" stroke="#3a4cff" stroke-width="10"/>' +
        '<path d="M330 450 L570 450 M450 330 L450 570" stroke="#ff5a3c" stroke-width="10"/>' +
        '<text x="450" y="720" font-family="Arial, sans-serif" font-weight="700" font-size="46" fill="#f5f4ef" text-anchor="middle" letter-spacing="4">CREATIVE STUDIO</text>' +
        '<text x="450" y="770" font-family="Arial, sans-serif" font-size="20" fill="#8a8a86" text-anchor="middle">image unavailable</text>' +
        '</svg>'
    );

    const DAYS = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
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

    function hideSection(id) {
        const node = byId(id);
        const section = node ? node.closest('section') : byId(id);
        if (section) section.hidden = true;
    }

    function showSection(id) {
        const node = byId(id);
        const section = node ? node.closest('section') : byId(id);
        if (section) section.hidden = false;
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

    function todayHoursText(hours) {
        const key = DAYS[(new Date().getDay() + 6) % 7];
        const day = (hours || {})[key] || {};
        if (day.open && day.openTime && day.closeTime) {
            return `Open today \u00b7 ${formatTime(day.openTime)} \u2013 ${formatTime(day.closeTime)}`;
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
        const description = business.description || 'A creative salon experience.';

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

        document.body.dataset.template = settings.selectedTemplate || 'template-4';
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
            ? `Creative studio \u00b7 ${locationParts.join(', ')}`
            : 'Hair \u00b7 Colour \u00b7 Style');
        setText('hero-title', business.tagline || business.name || 'Salon');
        setText('hero-subtitle', firstSentence(business.description, 150));

        setHtml('hero-meta', `
            <div class="t4-hero__meta-item">
                <dt>Based in</dt>
                <dd>${escapeHtml([business.city, business.country].filter(Boolean).join(', ') || (contact.address || 'In studio'))}</dd>
            </div>
            <div class="t4-hero__meta-item">
                <dt>Today</dt>
                <dd>${escapeHtml(todayHoursText(hours))}</dd>
            </div>
        `);

        const media = byId('hero-media');
        if (!media) return;

        if (gallery.length === 0) {
            media.classList.add('t4-hero__media--fallback');
            media.innerHTML = `<span class="t4-hero__media-fallback-mark">${escapeHtml(initialsOf(business.name))}</span>`;
        } else {
            const main = gallery[0];
            const block = gallery[1] || gallery[0];
            media.classList.remove('t4-hero__media--fallback');
            media.innerHTML = `
                <span class="t4-hero__shape" aria-hidden="true"></span>
                <figure class="t4-hero__frame">${imgTag(main.image, main.title || business.name, { eager: true })}</figure>
                <figure class="t4-hero__thumb">${imgTag(block.image, block.title || business.name, { eager: true })}</figure>
                <span class="t4-hero__badge" aria-hidden="true">EST.</span>
            `;
        }

        const services = active(data.services);
        const words = [];
        services.forEach(service => {
            const category = service.category || '';
            if (category && words.indexOf(category) === -1) words.push(category);
        });
        if (words.length === 0) words.push('Hair', 'Colour', 'Style', business.name || 'Studio');
        const sequence = words.concat(words).map(word => `<span>${escapeHtml(word)}</span>`).join('');
        setHtml('hero-marquee', sequence);
    }

    function renderIntro(data) {
        const business = data.business || {};
        const services = active(data.services);
        const team = active(data.team);
        const gallery = active(data.gallery);
        const testimonials = active(data.testimonials);

        setText('intro-title', business.name || business.tagline || 'The studio');
        setHtml('intro-text', `<p>${escapeHtml(business.description || '')}</p>`);

        const stats = [];
        if (services.length) stats.push({ value: String(services.length), label: 'Services' });
        if (team.length) stats.push({ value: String(team.length), label: team.length === 1 ? 'Stylist' : 'Stylists' });
        if (gallery.length) stats.push({ value: String(gallery.length), label: 'Looks' });
        if (testimonials.length) {
            const avg = testimonials.reduce((sum, item) => sum + (Number(item.rating) || 0), 0) / testimonials.length;
            stats.push({ value: `${avg.toFixed(1)}\u2605`, label: 'Rated' });
        }

        const container = byId('intro-stats');
        if (!container) return;
        if (stats.length === 0) {
            container.hidden = true;
            return;
        }
        container.hidden = false;
        container.innerHTML = stats.map(stat => `
            <div class="t4-intro__stat">
                <dt class="t4-intro__stat-value">${escapeHtml(stat.value)}</dt>
                <dd class="t4-intro__stat-label">${escapeHtml(stat.label)}</dd>
            </div>
        `).join('');
    }

    function renderServices(data) {
        const services = active(data.services);
        const list = byId('services-list');
        if (!list) return;

        if (services.length === 0) {
            hideSection('services-list');
            return;
        }

        const categories = [];
        services.forEach(service => {
            const category = service.category || 'Signature';
            if (categories.indexOf(category) === -1) categories.push(category);
        });
        setText('services-note', `${services.length} services across ${categories.length} ${categories.length === 1 ? 'category' : 'categories'}`);

        const gallery = active(data.gallery);

        list.innerHTML = services.map((service, index) => {
            const panelId = `t4-svc-panel-${index}`;
            const buttonId = `t4-svc-btn-${index}`;
            const image = gallery.find(item => item.category && service.category && item.category === service.category) || gallery[index % (gallery.length || 1)];
            const media = image
                ? imgTag(image.image, service.name)
                : `<span class="t4-srow__fallback" aria-hidden="true">${escapeHtml(initialsOf(service.name))}</span>`;
            return `
            <div class="t4-srow">
                <h3 class="t4-srow__heading">
                    <button class="t4-srow__head" type="button" id="${buttonId}" aria-expanded="false" aria-controls="${panelId}">
                        <span class="t4-srow__num">${String(index + 1).padStart(2, '0')}</span>
                        <span class="t4-srow__name">${escapeHtml(service.name)}</span>
                        <span class="t4-srow__cat">${escapeHtml(service.category || 'Signature')}</span>
                        <span class="t4-srow__price">${formatCurrency(service.price)}</span>
                        <span class="t4-srow__toggle" aria-hidden="true"></span>
                    </button>
                </h3>
                <div class="t4-srow__panel" id="${panelId}" role="region" aria-labelledby="${buttonId}" hidden>
                    <div class="t4-srow__panel-inner">
                        <div class="t4-srow__media">${media}</div>
                        <div class="t4-srow__panel-body">
                            ${service.description ? `<p class="t4-srow__desc">${escapeHtml(service.description)}</p>` : ''}
                            <div class="t4-srow__panel-meta">
                                ${service.duration ? `<span>${escapeHtml(String(service.duration))} min</span>` : ''}
                                <span>${escapeHtml(service.category || 'Signature')}</span>
                                <span class="t4-srow__panel-price">${formatCurrency(service.price)}</span>
                            </div>
                            <button class="t4-btn t4-btn--accent" type="button" data-service="${escapeHtml(service.id)}">Book this</button>
                        </div>
                    </div>
                </div>
            </div>`;
        }).join('');
    }

    function renderFeatured(data) {
        const services = active(data.services);
        const gallery = active(data.gallery);
        const body = byId('featured-service');
        const media = byId('featured-media');
        if (!body || !media) return;

        if (services.length === 0) {
            hideSection('featured-service');
            return;
        }

        showSection('featured-service');

        const featured = services.reduce((best, service) =>
            (Number(service.price) || 0) > (Number(best.price) || 0) ? service : best, services[0]);

        const image = gallery.find(item => item.category && featured.category && item.category === featured.category) || gallery[0];

        media.innerHTML = image
            ? imgTag(image.image, image.title || featured.name)
            : `<span class="t4-featured__fallback" aria-hidden="true">${escapeHtml(initialsOf(featured.category))}</span>`;

        body.innerHTML = `
            <p class="t4-kicker t4-kicker--light">Headline service</p>
            <h3 class="t4-featured__name">${escapeHtml(featured.name)}</h3>
            ${featured.description ? `<p class="t4-featured__desc">${escapeHtml(featured.description)}</p>` : ''}
            <div class="t4-featured__meta">
                <span class="t4-featured__price">${formatCurrency(featured.price)}</span>
                ${featured.duration ? `<span class="t4-featured__dur">${escapeHtml(String(featured.duration))} min</span>` : ''}
                <span class="t4-featured__cat">${escapeHtml(featured.category || 'Signature')}</span>
            </div>
            <button class="t4-btn t4-btn--accent t4-btn--lg" type="button" data-service="${escapeHtml(featured.id)}">Book this service</button>
        `;
    }

    function renderPackages(data, services) {
        const packages = active(data.packages);
        const grid = byId('packages-grid');
        if (!grid) return;

        if (packages.length === 0) {
            hideSection('packages-grid');
            return;
        }

        const featureIndex = Math.floor((packages.length - 1) / 2);

        grid.innerHTML = packages.map((pkg, index) => {
            const included = (Array.isArray(pkg.services) ? pkg.services : [])
                .map(id => services.find(s => s && s.id === id))
                .filter(Boolean);
            return `
            <article class="t4-package${index === featureIndex ? ' t4-package--feature' : ''}">
                <p class="t4-package__tag">${index === featureIndex ? 'Best value' : 'Bundle'}</p>
                <h3 class="t4-package__name">${escapeHtml(pkg.name)}</h3>
                ${pkg.description ? `<p class="t4-package__desc">${escapeHtml(pkg.description)}</p>` : ''}
                <p class="t4-package__price">${formatCurrency(pkg.price)}</p>
                <ul class="t4-package__list">
                    ${included.length
                        ? included.map(service => `<li>${escapeHtml(service.name)}</li>`).join('')
                        : '<li>Curated for you</li>'}
                </ul>
                <button class="t4-btn ${index === featureIndex ? 't4-btn--accent' : 't4-btn--ghost'} t4-package__cta" type="button" data-package="${escapeHtml(pkg.id)}">Choose bundle</button>
            </article>
        `;
        }).join('');
    }

    function renderTeam(data) {
        const team = active(data.team);
        const grid = byId('team-grid');
        if (!grid) return;

        if (team.length === 0) {
            hideSection('team-grid');
            return;
        }

        grid.innerHTML = team.map((member, index) => `
            <article class="t4-member${index === 0 && team.length > 2 ? ' t4-member--wide' : ''}">
                <div class="t4-member__frame${member.image ? '' : ' t4-member__frame--fallback'}">
                    ${member.image
                        ? imgTag(member.image, member.name)
                        : `<span aria-hidden="true">${escapeHtml(initialsOf(member.name))}</span>`}
                </div>
                <div class="t4-member__body">
                    <h3 class="t4-member__name">${escapeHtml(member.name)}</h3>
                    ${member.role ? `<span class="t4-member__role">${escapeHtml(member.role)}</span>` : ''}
                    ${member.bio ? `<p class="t4-member__bio">${escapeHtml(member.bio)}</p>` : ''}
                </div>
            </article>
        `).join('');
    }

    function renderGallery(data) {
        const gallery = active(data.gallery);
        const grid = byId('gallery-grid');
        if (!grid) return;

        if (gallery.length === 0) {
            hideSection('gallery-grid');
            return;
        }

                    const SPANS = ['t4-gal--tall', 't4-gal--wide', '', '', '', ''];
        grid.innerHTML = gallery.map((item, index) => `
            <figure class="t4-gal ${SPANS[index % SPANS.length]}">
                <button class="t4-gal__open" type="button"
                    data-full="${escapeHtml(item.image)}"
                    data-title="${escapeHtml(item.title || '')}"
                    data-category="${escapeHtml(item.category || '')}"
                    aria-label="View ${escapeHtml(item.title || 'image')}">
                    ${imgTag(item.image, item.title || 'Salon portfolio')}
                    <span class="t4-gal__cap">
                        <span class="t4-gal__cap-title">${escapeHtml(item.title || '')}</span>
                        <span class="t4-gal__cap-cat">${escapeHtml(item.category || '')}</span>
                    </span>
                </button>
            </figure>
        `).join('');
    }

    function renderTestimonials(data) {
        const testimonials = active(data.testimonials);
        const track = byId('testimonials-track');
        const wrapper = byId('testimonials-slider');
        if (!track) return;

        if (testimonials.length === 0) {
            hideSection('testimonials-track');
            return;
        }

        track.innerHTML = testimonials.map(item => {
            const rating = Math.min(5, Math.max(0, Number(item.rating) || 0));
            const stars = '\u2605'.repeat(rating) + '\u2606'.repeat(5 - rating);
            return `
            <figure class="t4-quote">
                <p class="t4-quote__stars" aria-label="${rating} out of 5 stars">${stars}</p>
                <blockquote class="t4-quote__text">${escapeHtml(item.message || '')}</blockquote>
                <figcaption class="t4-quote__author">${escapeHtml(item.customerName || 'Client')}</figcaption>
            </figure>`;
        }).join('');

        if (wrapper) wrapper.hidden = false;
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
        return DAYS[date.getDay()];
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

        const dayKey = dayKeyFor(dateInput.value);
        const dayData = dayKey ? storage.getOpeningHours()[dayKey] : null;
        const slots = timeSlots(dayData);

        if (!dateInput.value) {
            timeSelect.innerHTML = '<option value="" selected disabled>Select a date first</option>';
            return;
        }
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
                    <div class="t4-contact__row">
                        <span class="t4-contact__key">Phone</span>
                        <span class="t4-contact__value"><a href="tel:${escapeHtml(contact.phone)}">${escapeHtml(contact.phone)}</a></span>
                    </div>`);
            }
            if (contact.email) {
                rows.push(`
                    <div class="t4-contact__row">
                        <span class="t4-contact__key">Email</span>
                        <span class="t4-contact__value"><a href="mailto:${escapeHtml(contact.email)}">${escapeHtml(contact.email)}</a></span>
                    </div>`);
            }
            const address = contact.address || [business.address, business.city, business.country].filter(Boolean).join(', ');
            if (address) {
                const maps = contact.googleMapsUrl
                    ? `<a class="t4-contact__maps" href="${escapeHtml(contact.googleMapsUrl)}" target="_blank" rel="noopener">Get directions</a>`
                    : '';
                rows.push(`
                    <div class="t4-contact__row">
                        <span class="t4-contact__key">Address</span>
                        <span class="t4-contact__value">${escapeHtml(address)}<br>${maps}</span>
                    </div>`);
            }
            info.innerHTML = `<h3 class="t4-contact__title">Studio</h3>${rows.join('') || '<p class="t4-empty">Contact details coming soon.</p>'}`;
        }

        const hours = data.openingHours || {};
        setHtml('opening-hours', DAYS.map(day => {
            const dayData = hours[day] || {};
            const isOpen = dayData.open && dayData.openTime;
            const value = isOpen
                ? `${formatTime(dayData.openTime)} \u2013 ${formatTime(dayData.closeTime)}`
                : 'Closed';
            return `
                <div class="t4-hours__row${isOpen ? '' : ' t4-hours__row--closed'}">
                    <span class="t4-hours__day">${DAY_LABELS[day]}</span>
                    <span class="t4-hours__time">${value}</span>
                </div>`;
        }).join(''));

        const social = data.socialLinks || {};
        const socialHtml = Object.keys(SOCIAL_LABELS)
            .filter(key => social[key])
            .map(key => `<a class="t4-social__link" href="${escapeHtml(social[key])}" target="_blank" rel="noopener">${SOCIAL_LABELS[key]}</a>`)
            .join('');
        if (socialHtml) setHtml('contact-social', socialHtml);
        else {
            const wrap = byId('contact-social');
            const block = wrap ? wrap.closest('.t4-contact__block') : null;
            if (block) block.hidden = true;
        }
    }

    function renderFooter(data) {
        const business = data.business || {};
        const contact = data.contact || {};
        const social = data.socialLinks || {};
        const hours = data.openingHours || {};
        const name = business.name || 'Salon';
        const year = new Date().getFullYear();

        setText('footer-huge', name);
        setText('footer-name', name);
        setText('footer-tag', business.tagline || business.description || '');

        setHtml('footer-hours', DAYS.map(day => {
            const dayData = hours[day] || {};
            const value = dayData.open && dayData.openTime
                ? `${formatTime(dayData.openTime)} \u2013 ${formatTime(dayData.closeTime)}`
                : 'Closed';
            return `
                <div class="t4-footer__hours-row">
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
            const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
            window.addEventListener('scroll', onScroll, { passive: true });
            onScroll();
        }

        const burger = byId('mobile-menu-btn');
        const menu = byId('nav-menu');
        if (burger && menu) {
            const setOpen = (open) => {
                document.body.classList.toggle('t4-nav-open', open);
                burger.setAttribute('aria-expanded', open ? 'true' : 'false');
                burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
            };
            const close = () => setOpen(false);
            burger.addEventListener('click', () => {
                setOpen(!document.body.classList.contains('t4-nav-open'));
            });
            menu.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
            document.addEventListener('keydown', event => {
                if (event.key === 'Escape' && document.body.classList.contains('t4-nav-open')) {
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

    function bindAccordion() {
        const list = byId('services-list');
        if (!list) return;

        list.addEventListener('click', event => {
            const head = event.target.closest('.t4-srow__head');
            if (!head) return;
            const panel = document.getElementById(head.getAttribute('aria-controls'));
            const expanded = head.getAttribute('aria-expanded') === 'true';
            head.setAttribute('aria-expanded', expanded ? 'false' : 'true');
            if (panel) panel.hidden = expanded;
        });
    }

    function bindBookingShortcuts() {
        document.addEventListener('click', event => {
            const trigger = event.target.closest('[data-service], [data-package]');
            if (!trigger) return;
            preselectBooking(trigger.dataset.service || trigger.dataset.package);
        });
    }

    function bindSlider() {
        const track = byId('testimonials-track');
        const prev = byId('testimonials-prev');
        const next = byId('testimonials-next');
        if (!track) return;

        const step = () => Math.max(track.clientWidth * 0.85, 240);
        const scrollBy = direction => track.scrollBy({ left: direction * step(), behavior: 'smooth' });

        if (prev) prev.addEventListener('click', () => scrollBy(-1));
        if (next) next.addEventListener('click', () => scrollBy(1));
        track.addEventListener('keydown', event => {
            if (event.key === 'ArrowLeft') { event.preventDefault(); scrollBy(-1); }
            else if (event.key === 'ArrowRight') { event.preventDefault(); scrollBy(1); }
        });
    }

    function bindLightbox() {
        const grid = byId('gallery-grid');
        const lightbox = byId('lightbox');
        const image = byId('lightbox-image');
        const caption = byId('lightbox-caption');
        const close = byId('lightbox-close');
        if (!grid || !lightbox || !image || !caption || !close) return;

        let lastFocused = null;

        const hide = () => {
            lightbox.hidden = true;
            image.removeAttribute('src');
            if (lastFocused) lastFocused.focus();
        };

        grid.addEventListener('click', event => {
            const button = event.target.closest('.t4-gal__open');
            if (!button) return;
            lastFocused = button;
            if (button.dataset.full) image.src = button.dataset.full;
            else image.removeAttribute('src');
            image.alt = button.dataset.title || 'Gallery image';
            const parts = [button.dataset.title, button.dataset.category].filter(Boolean);
            caption.textContent = parts.join(' \u00b7 ');
            lightbox.hidden = false;
            close.focus();
        });

        close.addEventListener('click', hide);
        lightbox.addEventListener('click', event => {
            if (event.target === lightbox) hide();
        });
        document.addEventListener('keydown', event => {
            if (lightbox.hidden) return;
            if (event.key === 'Escape') {
                hide();
                return;
            }
            if (event.key === 'Tab') {
                const focusables = lightbox.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                if (!focusables.length) return;
                const first = focusables[0];
                const last = focusables[focusables.length - 1];
                if (!lightbox.contains(document.activeElement)) {
                    event.preventDefault();
                    first.focus();
                } else if (event.shiftKey && document.activeElement === first) {
                    event.preventDefault();
                    last.focus();
                } else if (!event.shiftKey && document.activeElement === last) {
                    event.preventDefault();
                    first.focus();
                }
            }
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

            successText.textContent = `Thanks, ${name}. We got your request for ` +
                `${lookupServiceName(service)} on ${formatDate(date)} at ${formatTime(time)}. ` +
                `We will confirm shortly.`;
            form.hidden = true;
            success.hidden = false;
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

    function bindImageFallback() {
        document.addEventListener('error', event => {
            const img = event.target;
            if (img && img.tagName === 'IMG' && !img.dataset.fallbackApplied) {
                img.dataset.fallbackApplied = '1';
                img.src = FALLBACK_IMAGE;
            }
        }, true);
    }

    function render(data) {
        renderStatusBanner(data);
        renderMeta(data);
        renderHeader(data);
        renderHero(data);
        renderIntro(data);
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
        bindAccordion();
        bindBookingShortcuts();
        bindSlider();
        bindLightbox();
        bindBookingForm();
    }

    window.SalonTemplates = window.SalonTemplates || {};
    window.SalonTemplates['template-4'] = { html: TEMPLATE_HTML, render: render };
})();
