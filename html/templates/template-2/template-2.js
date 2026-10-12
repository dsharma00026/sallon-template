(function () {
    const TEMPLATE_HTML = `    <div id="t2-shell" data-shell="template-2">
        <div class="t2-status" id="status-banner" hidden></div>
        <header class="t2-header" id="t2-header">
            <div class="t2-container t2-header__inner">
                <a class="t2-logo" id="t2-site-logo" href="#t2-home" aria-label="Back to top">
                    <span class="t2-logo__name" id="t2-brand-name"></span>
                </a>
                <button class="t2-burger" id="t2-mobile-menu-btn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="t2-nav-menu">
                    <span class="t2-burger__bar"></span>
                    <span class="t2-burger__bar"></span>
                    <span class="t2-burger__bar"></span>
                </button>
                <nav class="t2-nav" id="t2-nav" aria-label="Primary navigation">
                    <ul class="t2-nav__list" id="t2-nav-menu">
                        <li class="t2-nav__item"><a href="#t2-services">01 <span>Services</span></a></li>
                        <li class="t2-nav__item"><a href="#t2-studio">02 <span>Studio</span></a></li>
                        <li class="t2-nav__item"><a href="#t2-team">03 <span>Team</span></a></li>
                        <li class="t2-nav__item"><a href="#t2-work">04 <span>Work</span></a></li>
                        <li class="t2-nav__item t2-nav__item--cta"><a href="#t2-booking">Book</a></li>
                    </ul>
                </nav>
            </div>
        </header>

        <main>
            <section class="t2-hero" id="t2-home">
                <div class="t2-hero__media" id="t2-hero-media" aria-hidden="true"></div>
                <div class="t2-hero__content">
                    <p class="t2-hero__kicker" id="t2-hero-kicker"></p>
                    <h1 class="t2-hero__title" id="t2-hero-title"></h1>
                    <p class="t2-hero__subtitle" id="t2-hero-subtitle"></p>
                    <div class="t2-hero__actions">
                        <a class="t2-btn t2-btn--ghost" href="#t2-booking">Book Appointment</a>
                        <a class="t2-btn t2-btn--text" href="#t2-services">View Services</a>
                    </div>
                </div>
                <div class="t2-hero__bar">
                    <span class="t2-hero__bar-item" id="t2-hero-meta"></span>
                    <span class="t2-hero__bar-item t2-hero__scroll">Scroll ↓</span>
                    <span class="t2-hero__bar-item" id="t2-hero-strip"></span>
                </div>
            </section>

            <section class="t2-statement" id="t2-statement">
                <div class="t2-container">
                    <div class="t2-statement__grid" data-t2-reveal>
                        <p class="t2-statement__eyebrow" id="t2-statement-eyebrow"></p>
                        <h2 class="t2-statement__title" id="t2-statement-title"></h2>
                        <p class="t2-statement__text" id="t2-statement-text"></p>
                    </div>
                </div>
            </section>

            <section class="t2-services" id="t2-services">
                <div class="t2-container">
                    <header class="t2-section__head" data-t2-reveal>
                        <p class="t2-section__num">01</p>
                        <h2 class="t2-section__title">Services</h2>
                    </header>
                    <div class="t2-services__grid" id="t2-services-grid" data-t2-reveal></div>
                </div>
            </section>

            <section class="t2-signature" id="t2-signature" hidden>
                <div class="t2-container">
                    <div class="t2-signature__wrap" id="t2-signature-wrap" data-t2-reveal></div>
                </div>
            </section>

            <section class="t2-studio" id="t2-studio">
                <div class="t2-container">
                    <header class="t2-section__head" data-t2-reveal>
                        <p class="t2-section__num">02</p>
                        <h2 class="t2-section__title">Studio Philosophy</h2>
                    </header>
                    <div class="t2-studio__grid" data-t2-reveal>
                        <div class="t2-studio__media" id="t2-studio-media"></div>
                        <div class="t2-studio__content">
                            <p class="t2-studio__lead" id="t2-studio-lead"></p>
                            <p class="t2-studio__text" id="t2-studio-text"></p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="t2-work" id="t2-work">
                <div class="t2-container">
                    <header class="t2-section__head" data-t2-reveal>
                        <p class="t2-section__num">03</p>
                        <h2 class="t2-section__title">Selected Work</h2>
                    </header>
                    <div class="t2-work__list" id="t2-work-list" data-t2-reveal></div>
                </div>
            </section>

            <section class="t2-team" id="t2-team">
                <div class="t2-container">
                    <header class="t2-section__head" data-t2-reveal>
                        <p class="t2-section__num">04</p>
                        <h2 class="t2-section__title">The Team</h2>
                    </header>
                    <div class="t2-team__grid" id="t2-team-grid" data-t2-reveal></div>
                </div>
            </section>

            <section class="t2-testimonials" id="t2-testimonials">
                <div class="t2-container">
                    <header class="t2-section__head" data-t2-reveal>
                        <p class="t2-section__num">05</p>
                        <h2 class="t2-section__title">Client Notes</h2>
                    </header>
                    <div class="t2-testimonials__grid" id="t2-testimonials-grid" data-t2-reveal></div>
                </div>
            </section>

            <section class="t2-packages" id="t2-packages" hidden>
                <div class="t2-container">
                    <header class="t2-section__head" data-t2-reveal>
                        <p class="t2-section__num">06</p>
                        <h2 class="t2-section__title">Packages</h2>
                    </header>
                    <div class="t2-packages__grid" id="t2-packages-grid" data-t2-reveal></div>
                </div>
            </section>

            <section class="t2-booking" id="t2-booking">
                <div class="t2-container">
                    <header class="t2-section__head t2-section__head--light" data-t2-reveal>
                        <p class="t2-section__num t2-section__num--light">07</p>
                        <h2 class="t2-section__title t2-section__title--light">Book An Appointment</h2>
                    </header>
                    <div class="t2-booking__grid" data-t2-reveal>
                        <div class="t2-booking__steps">
                            <div class="t2-booking__step">
                                <span class="t2-booking__step-num">01</span>
                                <span class="t2-booking__step-label">Your Details</span>
                            </div>
                            <div class="t2-booking__step">
                                <span class="t2-booking__step-num">02</span>
                                <span class="t2-booking__step-label">Service</span>
                            </div>
                            <div class="t2-booking__step">
                                <span class="t2-booking__step-num">03</span>
                                <span class="t2-booking__step-label">Date & Time</span>
                            </div>
                            <div class="t2-booking__step">
                                <span class="t2-booking__step-num">04</span>
                                <span class="t2-booking__step-label">Message</span>
                            </div>
                        </div>
                        <div class="t2-booking__panel">
                            <form class="t2-form" id="t2-booking-form" novalidate>
                                <div class="t2-form__group">
                                    <label class="t2-form__label" for="t2-booking-name">Full Name</label>
                                    <input class="t2-form__input" type="text" id="t2-booking-name" name="name" autocomplete="name" required>
                                </div>
                                <div class="t2-form__row">
                                    <div class="t2-form__group">
                                        <label class="t2-form__label" for="t2-booking-phone">Phone</label>
                                        <input class="t2-form__input" type="tel" id="t2-booking-phone" name="phone" autocomplete="tel" required>
                                    </div>
                                    <div class="t2-form__group">
                                        <label class="t2-form__label" for="t2-booking-email">Email</label>
                                        <input class="t2-form__input" type="email" id="t2-booking-email" name="email" autocomplete="email" required>
                                    </div>
                                </div>
                                <div class="t2-form__group">
                                    <label class="t2-form__label" for="t2-booking-service">Service or Package</label>
                                    <select class="t2-form__input" id="t2-booking-service" name="service" required>
                                        <option value="" selected disabled>Select a service</option>
                                    </select>
                                </div>
                                <div class="t2-form__row">
                                    <div class="t2-form__group">
                                        <label class="t2-form__label" for="t2-booking-date">Preferred Date</label>
                                        <input class="t2-form__input" type="date" id="t2-booking-date" name="date" required>
                                    </div>
                                    <div class="t2-form__group">
                                        <label class="t2-form__label" for="t2-booking-time">Preferred Time</label>
                                        <select class="t2-form__input" id="t2-booking-time" name="time" required>
                                            <option value="" selected disabled>Select a date first</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="t2-form__group">
                                    <label class="t2-form__label" for="t2-booking-message">Notes <span class="t2-form__optional">(optional)</span></label>
                                    <textarea class="t2-form__input t2-form__input--textarea" id="t2-booking-message" name="message" rows="3"></textarea>
                                </div>
                                <button class="t2-btn t2-btn--primary t2-btn--large" type="submit">Request Appointment</button>
                            </form>
                            <div class="t2-booking__success" id="t2-booking-success" tabindex="-1" hidden>
                                <p class="t2-booking__success-mark" aria-hidden="true">✓</p>
                                <h3 class="t2-booking__success-title">Request Received</h3>
                                <p class="t2-booking__success-text" id="t2-booking-success-text"></p>
                                <button class="t2-btn t2-btn--text" id="t2-booking-reset" type="button">Make Another Request</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="t2-visit" id="t2-visit">
                <div class="t2-container">
                    <header class="t2-section__head" data-t2-reveal>
                        <p class="t2-section__num">08</p>
                        <h2 class="t2-section__title">Come By</h2>
                    </header>
                    <div class="t2-visit__grid" data-t2-reveal>
                        <div class="t2-visit__info" id="t2-visit-info"></div>
                        <div class="t2-visit__hours">
                            <h3 class="t2-visit__hours-title">Visit</h3>
                            <div class="t2-hours" id="t2-opening-hours"></div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <footer class="t2-footer">
            <div class="t2-container">
                <div class="t2-footer__cta" data-t2-reveal>
                    <p class="t2-footer__cta-label">Ready for a new look?</p>
                    <a class="t2-footer__cta-link" id="t2-footer-cta" href="#t2-booking">Book An Appointment →</a>
                </div>
                <div class="t2-footer__grid">
                    <div class="t2-footer__brand">
                        <p class="t2-footer__name" id="t2-footer-name"></p>
                        <p class="t2-footer__address" id="t2-footer-address"></p>
                        <p class="t2-footer__contact" id="t2-footer-contact"></p>
                        <div class="t2-footer__social" id="t2-footer-social"></div>
                    </div>
                    <nav class="t2-footer__nav" aria-label="Footer navigation">
                        <ul class="t2-footer__links">
                            <li><a href="#t2-services">01 Services</a></li>
                            <li><a href="#t2-studio">02 Studio</a></li>
                            <li><a href="#t2-team">03 Team</a></li>
                            <li><a href="#t2-work">04 Work</a></li>
                            <li><a href="#t2-booking">05 Booking</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="t2-footer__bottom">
                    <p id="t2-footer-copyright"></p>
                    <a class="t2-footer__admin" href="admin.html">Admin Panel</a>
                </div>
            </div>
        </footer>

        <div class="t2-lightbox" id="t2-lightbox" hidden role="dialog" aria-modal="true" aria-label="Gallery image">
            <button class="t2-lightbox__close" id="t2-lightbox-close" type="button" aria-label="Close image">&times;</button>
            <figure class="t2-lightbox__figure">
                <img class="t2-lightbox__image" id="t2-lightbox-image" alt="">
                <figcaption class="t2-lightbox__caption" id="t2-lightbox-caption"></figcaption>
            </figure>
        </div>
    </div>`;

    const FALLBACK_IMAGE = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000">' +
        '<rect width="800" height="1000" fill="#f1f0ed"/>' +
        '<text x="400" y="500" font-family="monospace" font-size="42" fill="#111" text-anchor="middle" letter-spacing="12">ATELIER</text>' +
        '<text x="400" y="560" font-family="monospace" font-size="16" fill="#6b6b6b" text-anchor="middle" letter-spacing="6">ARCHITECTURAL STUDIO</text>' +
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

    function setText(id, text) {
        const node = byId(id);
        if (node) node.textContent = text;
    }

    function setHtml(id, html) {
        const node = byId(id);
        if (node) node.innerHTML = html;
    }

    function hideSection(id) {
        const node = byId(id);
        const section = node ? node.closest('section') : document.getElementById(id);
        if (section) section.hidden = true;
    }

    function active(items) {
        return (Array.isArray(items) ? items : []).filter(item => item && item.status === 'active');
    }

    function imgTag(src, alt, options = {}) {
        const { className = '', eager = false, fallback = FALLBACK_IMAGE } = options;
        const safeSrc = src ? escapeHtml(src) : fallback;
        const cls = className ? ` class="${className}"` : '';
        const loading = eager ? '' : ' loading="lazy"';
        return `<img${cls} src="${safeSrc}" alt="${escapeHtml(alt || 'Salon image')}"${loading}>`;
    }

    function initialsOf(name) {
        return String(name || 'S')
            .split(/\s+/)
            .filter(Boolean)
            .slice(0, 2)
            .map(part => part.charAt(0).toUpperCase())
            .join('') || 'S';
    }

    function firstSentence(text, limit = 160) {
        const value = String(text || '').trim();
        if (!value) return '';
        const match = value.match(/^(.{10,}?[.!?])(\s|$)/);
        if (match && match[1].length <= limit) return match[1];
        if (value.length <= limit) return value;
        return value.slice(0, limit).replace(/\s+\S*$/, '') + '\u2026';
    }

    function strip(text, limit = 200) {
        const value = String(text || '').trim();
        if (!value) return '';
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

    let statusRO = null;
    function syncStatusH(banner) {
        const root = document.documentElement;
        const h = banner.hidden ? 0 : banner.offsetHeight;
        document.body.classList.toggle('t2-status-on', h > 0);
        root.style.setProperty('--t2-status-h', h ? `${h}px` : '0px');
    }

    function renderStatusBanner(data) {
        const settings = data.settings || {};
        const banner = byId('status-banner');
        if (!banner) return;
        const shown = settings.websiteStatus && settings.websiteStatus !== 'published';
        banner.textContent = shown ? statusText(settings.websiteStatus) : '';
        banner.hidden = !shown;
        syncStatusH(banner);
        if (statusRO && typeof statusRO.disconnect === 'function') {
            statusRO.disconnect();
            statusRO = null;
        }
        if (shown && typeof ResizeObserver !== 'undefined') {
            statusRO = new ResizeObserver(() => syncStatusH(banner));
            statusRO.observe(banner);
        }
    }

    function renderMeta(data) {
        const business = data.business || {};
        const name = business.name || 'Salon';
        const tagline = business.tagline || '';
        document.title = tagline ? `${name} — ${tagline}` : name;
        const descEl = document.querySelector('meta[name="description"]');
        if (descEl) descEl.setAttribute('content', strip(business.description || 'A modern architectural salon.', 160));
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', document.title);
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute('content', strip(business.description || '', 160));
    }

    function renderHeader(data) {
        const business = data.business || {};
        setText('t2-brand-name', business.name || 'Salon');
    }

    function renderHero(data) {
        const business = data.business || {};
        const contact = data.contact || {};
        const gallery = active(data.gallery);
        const location = [business.city, business.country].filter(Boolean).join(', ');
        setText('t2-hero-kicker', location || 'Modern Beauty Studio');
        setText('t2-hero-title', business.tagline || business.name || 'ATELIER');
        setText('t2-hero-subtitle', firstSentence(business.description, 140));
        const metaParts = [contact.address, [business.city, business.country].filter(Boolean).join(', ')].filter(Boolean);
        setText('t2-hero-meta', metaParts.slice(0, 2).join(' \u00b7 '));
        setText('t2-hero-strip', `${business.name || 'Salon'} \u00b7 ${metaParts[0] || location || ''} \u00b7 Modern Architectural Studio`);

        const media = byId('t2-hero-media');
        if (!media) return;
        if (gallery.length === 0) {
            media.innerHTML = '<div class="t2-hero__media-fallback">ATELIER</div>';
            return;
        }
        const primary = gallery[0];
        media.innerHTML = imgTag(primary.image, primary.title || business.name || 'Salon', { eager: true });
    }

    function renderStatement(data) {
        const business = data.business || {};
        setText('t2-statement-eyebrow', 'Architectural Studio');
        setText('t2-statement-title', (business.name || business.tagline || '').toUpperCase());
        setText('t2-statement-text', strip(business.description || '', 260));
    }

    function renderServices(data) {
        const services = active(data.services);
        const grid = byId('t2-services-grid');
        if (!grid) return;
        if (services.length === 0) {
            hideSection('t2-services-grid');
            return;
        }
        const groups = new Map();
        services.slice(0, 12).forEach(service => {
            const key = String(service.category || '').trim() || 'Studio Menu';
            if (!groups.has(key)) groups.set(key, []);
            groups.get(key).push(service);
        });
        let num = 0;
        grid.innerHTML = Array.from(groups.entries()).map(([label, items]) => {
            const cards = items.map(service => {
                num += 1;
                return `
            <article class="t2-service-card">
                <div class="t2-service-card__num">${String(num).padStart(2, '0')}</div>
                <div class="t2-service-card__main">
                    <h3 class="t2-service-card__name">${escapeHtml(service.name)}</h3>
                    ${service.description ? `<p class="t2-service-card__desc">${escapeHtml(strip(service.description, 120))}</p>` : ''}
                </div>
                <div class="t2-service-card__meta">
                    ${service.duration ? `<span>${escapeHtml(String(service.duration))} MIN</span>` : ''}
                    <span class="t2-service-card__price">${formatCurrency(service.price)}</span>
                </div>
            </article>`;
            }).join('');
            return `
            <div class="t2-service-group">
                <p class="t2-service-group__label">${escapeHtml(label)}</p>
                <div class="t2-service-group__items">${cards}</div>
            </div>`;
        }).join('');
    }

    function renderSignature(data) {
        const services = active(data.services);
        const gallery = active(data.gallery);
        const wrap = byId('t2-signature-wrap');
        const section = byId('t2-signature');
        if (!wrap || !section) return;
        if (services.length === 0) {
            section.hidden = true;
            return;
        }
        const featured = services.reduce((best, service) => (Number(service.price) || 0) > (Number(best.price) || 0) ? service : best, services[0]);
        const media = gallery.find(item => item.category && featured.category && item.category === featured.category) || gallery[0];
        section.hidden = false;
        wrap.innerHTML = `
            <div class="t2-signature__media">
                ${media ? imgTag(media.image, featured.name, { eager: false }) : '<div class="t2-hero__media-fallback">SIGNATURE</div>'}
            </div>
            <div class="t2-signature__content">
                <p class="t2-signature__kicker">Signature Service</p>
                <h3 class="t2-signature__name">${escapeHtml(featured.name)}</h3>
                ${featured.description ? `<p class="t2-signature__desc">${escapeHtml(featured.description)}</p>` : ''}
                <div class="t2-signature__meta">
                    ${featured.duration ? `<span>${escapeHtml(String(featured.duration))} MIN</span>` : ''}
                    <span>${formatCurrency(featured.price)}</span>
                    ${featured.category ? `<span>${escapeHtml(featured.category)}</span>` : ''}
                </div>
                <button class="t2-btn t2-btn--primary t2-signature__cta" type="button" data-service="${escapeHtml(featured.id)}">Book This Service</button>
            </div>
        `;
        const btn = wrap.querySelector('.t2-signature__cta');
        if (btn) btn.addEventListener('click', () => preselectBooking(featured.id));
    }

    function renderStudio(data) {
        const business = data.business || {};
        const gallery = active(data.gallery);
        setText('t2-studio-lead', (business.tagline || 'Crafted with precision').toUpperCase());
        setHtml('t2-studio-text', `<p>${escapeHtml(business.description || '')}</p>`);
        const media = byId('t2-studio-media');
        if (!media) return;
        if (gallery.length <= 1) {
            media.innerHTML = '<div class="t2-studio__media-fallback">STUDIO</div>';
            return;
        }
        const pick = gallery[1] || gallery[0];
        media.innerHTML = imgTag(pick.image, 'Studio space');
    }

    function renderWork(data) {
        const gallery = active(data.gallery);
        const list = byId('t2-work-list');
        if (!list) return;
        if (gallery.length === 0) {
            hideSection('t2-work-list');
            return;
        }
        const items = gallery.slice(0, 6);
        list.innerHTML = items.map((item, index) => {
            const wide = index === 0 || index === 3;
            return `
            <article class="t2-work__item${wide ? ' t2-work__item--wide' : ''}" data-image="${escapeHtml(item.image)}" tabindex="0" role="button" aria-label="View ${escapeHtml(item.title || 'image')}">
                <figure class="t2-work__figure">
                    ${imgTag(item.image, item.title || 'Selected work')}
                </figure>
                <div class="t2-work__cap">
                    <span class="t2-work__cap-title">${escapeHtml(item.title || 'Untitled')}</span>
                    <span class="t2-work__cap-cat">${escapeHtml(item.category || '')}</span>
                </div>
            </article>
        `;
        }).join('');
        bindWorkLightbox(list);
    }

    function renderTeam(data) {
        const team = active(data.team);
        const grid = byId('t2-team-grid');
        if (!grid) return;
        if (team.length === 0) {
            hideSection('t2-team-grid');
            return;
        }
        grid.innerHTML = team.slice(0, 8).map((member, index) => `
            <article class="t2-team__row" tabindex="0">
                <span class="t2-team__index">${String(index + 1).padStart(2, '0')}</span>
                <div class="t2-team__row-main">
                    <h3 class="t2-team__name">${escapeHtml(member.name)}</h3>
                    ${member.role ? `<span class="t2-team__role">${escapeHtml(member.role)}</span>` : ''}
                </div>
                ${member.bio ? `<p class="t2-team__bio">${escapeHtml(strip(member.bio, 140))}</p>` : '<p class="t2-team__bio"></p>'}
                <div class="t2-team__reveal" aria-hidden="true">
                    ${member.image ? imgTag(member.image, '') : `<span class="t2-team__reveal-mono">${escapeHtml(initialsOf(member.name))}</span>`}
                </div>
            </article>
        `).join('');
    }

    function renderTestimonials(data) {
        const testimonials = active(data.testimonials);
        const grid = byId('t2-testimonials-grid');
        if (!grid) return;
        if (testimonials.length === 0) {
            hideSection('t2-testimonials-grid');
            return;
        }
        grid.innerHTML = testimonials.slice(0, 6).map((item, index) => {
            const rating = Math.min(5, Math.max(0, Number(item.rating) || 0));
            const stars = '\u2022'.repeat(rating) || '\u2022';
            const wide = index === 0 || index === 2;
            return `
            <article class="t2-testimonial${wide ? ' t2-testimonial--wide' : ''}">
                <p class="t2-testimonial__stars" aria-label="${rating} out of 5">${stars}</p>
                <p class="t2-testimonial__text">&ldquo;${escapeHtml(item.message || '')}&rdquo;</p>
                <p class="t2-testimonial__author">${escapeHtml(item.customerName || 'Client')}</p>
            </article>
        `;
        }).join('');
    }

    function renderPackages(data) {
        const packages = active(data.packages);
        const grid = byId('t2-packages-grid');
        const section = byId('t2-packages');
        if (!grid || !section) return;
        if (packages.length === 0) {
            section.hidden = true;
            return;
        }
        section.hidden = false;
        const allServices = storage.getServices();
        const cols = packages.slice(0, 4);
        const includedById = cols.map(pkg => new Set(Array.isArray(pkg.services) ? pkg.services : []));
        const union = [];
        allServices.forEach(service => {
            if (service && includedById.some(set => set.has(service.id))) union.push(service);
        });
        if (union.length === 0) {
            grid.innerHTML = `<div class="t2-package-cards">${cols.map((pkg, index) => `
            <article class="t2-package${index === 0 && cols.length > 1 ? ' t2-package--featured' : ''}">
                <p class="t2-package__label">${index === 0 && cols.length > 1 ? 'Most Requested' : 'Signature Collection'}</p>
                <h3 class="t2-package__name">${escapeHtml(pkg.name)}</h3>
                ${pkg.description ? `<p class="t2-package__desc">${escapeHtml(strip(pkg.description, 100))}</p>` : ''}
                <p class="t2-package__price">${formatCurrency(pkg.price)}</p>
                <button class="t2-package__cta" type="button" data-package="${escapeHtml(pkg.id)}">Choose Package</button>
            </article>
        `).join('')}</div>`;
            bindPackageCtas(grid);
            return;
        }
        const cell = (pkg, index, content) => `<td class="t2-compare__cell${index === 0 && cols.length > 1 ? ' t2-compare__cell--featured' : ''}">${content}</td>`;
        grid.innerHTML = `
            <table class="t2-compare">
                <caption class="t2-compare__caption">Package comparison</caption>
                <thead>
                    <tr>
                        <th scope="col" class="t2-compare__key">Included</th>
                        ${cols.map((pkg, index) => `
                        <th scope="col" class="t2-compare__head${index === 0 && cols.length > 1 ? ' t2-compare__head--featured' : ''}">
                            <span class="t2-compare__label">${index === 0 && cols.length > 1 ? 'Most Requested' : 'Package'}</span>
                            <span class="t2-compare__name">${escapeHtml(pkg.name)}</span>
                            <span class="t2-compare__price">${formatCurrency(pkg.price)}</span>
                        </th>`).join('')}
                    </tr>
                </thead>
                <tbody>
                    ${cols.some(p => p.description) ? `<tr class="t2-compare__row"><th scope="row">Description</th>${cols.map((pkg, index) => cell(pkg, index, pkg.description ? `<span class="t2-compare__desc">${escapeHtml(strip(pkg.description, 90))}</span>` : '<span class="t2-compare__none">&mdash;</span>')).join('')}</tr>` : ''}
                    ${union.map(service => `
                    <tr class="t2-compare__row">
                        <th scope="row">${escapeHtml(service.name)}</th>
                        ${cols.map((pkg, index) => cell(pkg, index, includedById[index].has(service.id) ? '<span class="t2-compare__mark" aria-label="Included">&#10003;</span>' : '<span class="t2-compare__none" aria-label="Not included">&mdash;</span>')).join('')}
                    </tr>`).join('')}
                    <tr class="t2-compare__row t2-compare__row--cta">
                        <th scope="row">Book</th>
                        ${cols.map((pkg, index) => cell(pkg, index, `<button class="t2-package__cta" type="button" data-package="${escapeHtml(pkg.id)}">Choose</button>`)).join('')}
                    </tr>
                </tbody>
            </table>`;
        bindPackageCtas(grid);
    }

    function bindPackageCtas(grid) {
        grid.querySelectorAll('.t2-package__cta').forEach(btn => {
            btn.addEventListener('click', () => preselectBooking(btn.dataset.package));
        });
    }

    function buildServiceOptions(data) {
        const services = active(data.services);
        const packages = active(data.packages);
        const select = byId('t2-booking-service');
        if (!select) return;
        let html = '<option value="" selected disabled>Select a service</option>';
        if (services.length) {
            html += `<optgroup label="Services">${services.map(s => `<option value="${escapeHtml(s.id)}">${escapeHtml(s.name)} \u2014 ${formatCurrency(s.price)}</option>`).join('')}</optgroup>`;
        }
        if (packages.length) {
            html += `<optgroup label="Packages">${packages.map(p => `<option value="${escapeHtml(p.id)}">${escapeHtml(p.name)} \u2014 ${formatCurrency(p.price)} (package)</option>`).join('')}</optgroup>`;
        }
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
            const mm = String(minutes % 60).padStart(2, '0');
            slots.push(`${h}:${mm}`);
        }
        return slots;
    }

    function renderBookingTimes() {
        const dateInput = byId('t2-booking-date');
        const timeSelect = byId('t2-booking-time');
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
        timeSelect.innerHTML = '<option value="" selected disabled>Select a time</option>' + slots.map(slot => `<option value="${slot}">${formatTime(slot)}</option>`).join('');
    }

    function preselectBooking(serviceId) {
        const select = byId('t2-booking-service');
        const section = byId('t2-booking');
        if (select) select.value = serviceId || '';
        if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(() => {
            if (select) select.focus({ preventScroll: true });
        }, 600);
    }

    function renderBooking(data) {
        buildServiceOptions(data);
        const dateInput = byId('t2-booking-date');
        if (dateInput) {
            dateInput.min = localISODate(new Date());
            dateInput.addEventListener('change', renderBookingTimes);
            renderBookingTimes();
        }
    }

    function renderVisit(data) {
        const contact = data.contact || {};
        const business = data.business || {};
        const hours = data.openingHours || {};
        const info = byId('t2-visit-info');
        if (info) {
            const rows = [];
            if (contact.phone) {
                rows.push(`<div class="t2-visit__row"><span class="t2-visit__key">Phone</span><a class="t2-visit__value" href="tel:${escapeHtml(contact.phone)}">${escapeHtml(contact.phone)}</a></div>`);
            }
            if (contact.email) {
                rows.push(`<div class="t2-visit__row"><span class="t2-visit__key">Email</span><a class="t2-visit__value" href="mailto:${escapeHtml(contact.email)}">${escapeHtml(contact.email)}</a></div>`);
            }
            const address = contact.address || [business.address, business.city, business.country].filter(Boolean).join(', ');
            if (address) {
                const maps = contact.googleMapsUrl ? `<a class="t2-visit__link" href="${escapeHtml(contact.googleMapsUrl)}" target="_blank" rel="noopener">Get Directions</a>` : '';
                rows.push(`<div class="t2-visit__row"><span class="t2-visit__key">Address</span><span class="t2-visit__value">${escapeHtml(address)}</span>${maps}</div>`);
            }
            info.innerHTML = rows.join('') || '<p class="t2-visit__value">Contact details coming soon.</p>';
        }
        setHtml('t2-opening-hours', DAYS.map(day => {
            const dayData = hours[day] || {};
            const value = dayData.open && dayData.openTime ? `${formatTime(dayData.openTime)} \u2013 ${formatTime(dayData.closeTime)}` : 'Closed';
            const closed = value === 'Closed' ? ' t2-hours__row--closed' : '';
            return `<div class="t2-hours__row${closed}"><span>${DAY_LABELS[day]}</span><span>${value}</span></div>`;
        }).join(''));
    }

    function renderFooter(data) {
        const business = data.business || {};
        const contact = data.contact || {};
        const social = data.socialLinks || {};
        const year = new Date().getFullYear();
        setText('t2-footer-name', business.name || 'Salon');
        const address = contact.address || [business.address, business.city, business.country].filter(Boolean).join(', ');
        setText('t2-footer-address', address || '');
        const lines = [];
        if (contact.phone) lines.push(`<a href="tel:${escapeHtml(contact.phone)}">${escapeHtml(contact.phone)}</a>`);
        if (contact.email) lines.push(`<a href="mailto:${escapeHtml(contact.email)}">${escapeHtml(contact.email)}</a>`);
        setHtml('t2-footer-contact', lines.join(' \u00b7 '));
        const socialHtml = Object.keys(SOCIAL_LABELS).filter(k => social[k]).map(k => `<a href="${escapeHtml(social[k])}" target="_blank" rel="noopener">${SOCIAL_LABELS[k]}</a>`).join(' \u00b7 ');
        setHtml('t2-footer-social', socialHtml);
        setText('t2-footer-copyright', `\u00a9 ${year} ${business.name || 'Salon'}. All rights reserved.`);
    }

    function bindHeader() {
        const header = byId('t2-header');
        if (header) {
            const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 20);
            window.addEventListener('scroll', onScroll, { passive: true });
            onScroll();
        }
        const burger = byId('t2-mobile-menu-btn');
        const nav = byId('t2-nav');
        if (burger && nav) {
            const close = () => {
                document.body.classList.remove('t2-nav-open');
                burger.setAttribute('aria-expanded', 'false');
            };
            burger.addEventListener('click', () => {
                const open = document.body.classList.toggle('t2-nav-open');
                burger.setAttribute('aria-expanded', open ? 'true' : 'false');
            });
            nav.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
            document.addEventListener('keydown', e => {
                if (e.key === 'Escape') close();
            });
        }
    }

    function bindWorkLightbox(container) {
        const lightbox = byId('t2-lightbox');
        const image = byId('t2-lightbox-image');
        const caption = byId('t2-lightbox-caption');
        const close = byId('t2-lightbox-close');
        if (!container || !lightbox || !image || !caption || !close) return;
        let lastFocused = null;
        const hide = () => {
            lightbox.hidden = true;
            image.removeAttribute('src');
            if (lastFocused) lastFocused.focus();
        };
        container.addEventListener('click', e => {
            const item = e.target.closest('.t2-work__item');
            if (!item) return;
            lastFocused = item;
            if (item.dataset.image) image.src = item.dataset.image;
            else image.removeAttribute('src');
            image.alt = 'Selected work';
            caption.textContent = item.querySelector('.t2-work__cap-title')?.textContent || '';
            lightbox.hidden = false;
            close.focus();
        });
        container.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                const item = e.target.closest('.t2-work__item');
                if (item) {
                    e.preventDefault();
                    lastFocused = item;
                    if (item.dataset.image) image.src = item.dataset.image;
                    else image.removeAttribute('src');
                    image.alt = 'Selected work';
                    caption.textContent = item.querySelector('.t2-work__cap-title')?.textContent || '';
                    lightbox.hidden = false;
                    close.focus();
                }
            }
        });
        close.addEventListener('click', hide);
        lightbox.addEventListener('click', e => {
            if (e.target === lightbox) hide();
        });
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape' && !lightbox.hidden) hide();
            if (e.key === 'Tab' && !lightbox.hidden) {
                e.preventDefault();
                close.focus();
            }
        });
    }

    function bindBookingForm() {
        const form = byId('t2-booking-form');
        const success = byId('t2-booking-success');
        const successText = byId('t2-booking-success-text');
        const reset = byId('t2-booking-reset');
        if (!form || !success || !successText) return;
        form.addEventListener('submit', e => {
            e.preventDefault();
            const name = byId('t2-booking-name').value.trim();
            const phone = byId('t2-booking-phone').value.trim();
            const email = byId('t2-booking-email').value.trim();
            const service = byId('t2-booking-service').value;
            const date = byId('t2-booking-date').value;
            const time = byId('t2-booking-time').value;
            const message = byId('t2-booking-message').value.trim();
            const appointment = storage.addAppointment({ customerName: name, phone, email, service, date, time, message });
            if (!appointment) {
                showToast('We could not save your request. Please try again.', 'error');
                return;
            }
            const services = active(storage.getServices());
            const packages = active(storage.getPackages());
            const svc = services.find(s => s.id === service) || packages.find(p => p.id === service);
            successText.textContent = `Thank you, ${name}. We received your request for ${svc ? svc.name : 'your appointment'} on ${formatDate(date)} at ${formatTime(time)}. We will confirm shortly.`;
            form.hidden = true;
            success.hidden = false;
            success.focus();
            showToast('Appointment request received.', 'success');
        });
        if (reset) {
            reset.addEventListener('click', () => {
                form.reset();
                renderBookingTimes();
                success.hidden = true;
                form.hidden = false;
                const first = byId('t2-booking-name');
                if (first) first.focus();
            });
        }
    }

    function bindReveal() {
        const targets = document.querySelectorAll('#t2-shell [data-t2-reveal]');
        if (targets.length === 0) return;
        if (!('IntersectionObserver' in window)) {
            targets.forEach(node => node.classList.add('t2-in'));
            return;
        }
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('t2-in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
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

    function render(data) {
        renderStatusBanner(data);
        renderMeta(data);
        renderHeader(data);
        renderHero(data);
        renderStatement(data);
        renderServices(data);
        renderSignature(data);
        renderStudio(data);
        renderWork(data);
        renderTeam(data);
        renderTestimonials(data);
        renderPackages(data);
        renderBooking(data);
        renderVisit(data);
        renderFooter(data);
        bindHeader();
        bindBookingForm();
        bindReveal();
        bindImageFallback();
    }

    window.SalonTemplates = window.SalonTemplates || {};
    window.SalonTemplates['template-2'] = { html: TEMPLATE_HTML, render: render };
})();
