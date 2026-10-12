(function () {
    const TEMPLATE_HTML = `    <div class="t1-status" id="status-banner" hidden></div>

    <div id="t1-shell" data-shell="template-1">
    <header class="t1-header" id="site-header">
        <div class="t1-container t1-header__inner">
            <a class="t1-logo" id="site-logo" href="#home" aria-label="Back to top">
                <span class="t1-logo__name" id="brand-name"></span>
            </a>
            <nav class="t1-nav" aria-label="Primary">
                <ul class="t1-nav__list" id="nav-menu">
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#packages">Packages</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#contact">Visit</a></li>
                </ul>
            </nav>
            <div class="t1-header__actions">
                <a class="site-admin-btn" data-admin-link href="admin.html" aria-label="Admin panel" title="Admin panel">
                    <svg class="site-admin-btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect></svg>
                    <span class="site-admin-btn__label">Admin</span>
                </a>
                <a class="t1-btn t1-btn--solid t1-header__cta" href="#booking">Book now</a>
                <button class="t1-burger" id="mobile-menu-btn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="nav-menu">
                    <span class="t1-burger__line"></span>
                    <span class="t1-burger__line"></span>
                </button>
            </div>
        </div>
    </header>

    <main>
        <section class="t1-hero" id="home">
            <div class="t1-container t1-hero__grid">
                <div class="t1-hero__copy">
                    <p class="t1-eyebrow" id="hero-eyebrow" data-reveal></p>
                    <h1 class="t1-hero__title" id="hero-title" data-reveal></h1>
                    <p class="t1-hero__lede" id="hero-subtitle" data-reveal></p>
                    <div class="t1-hero__actions" data-reveal>
                        <a class="t1-btn t1-btn--solid t1-btn--lg" href="#booking">Book an appointment</a>
                        <a class="t1-link t1-link--arrow" href="#services">Explore services</a>
                    </div>
                    <p class="t1-hero__meta" id="hero-meta" data-reveal></p>
                </div>
                <div class="t1-hero__media" id="hero-media" data-reveal></div>
            </div>
        </section>

        <section class="t1-trust" aria-label="At a glance">
            <div class="t1-container">
                <dl class="t1-trust__grid" id="trust-stats"></dl>
            </div>
        </section>

        <section class="t1-section t1-about" id="about">
            <div class="t1-container t1-about__grid">
                <div class="t1-about__copy" data-reveal>
                    <p class="t1-eyebrow">01 — About the studio</p>
                    <h2 class="t1-title">Considered beauty, made personal.</h2>
                    <div class="t1-about__text" id="about-text"></div>
                    <a class="t1-link t1-link--arrow" href="#booking">Book a visit</a>
                </div>
                <div class="t1-about__media" id="about-media" data-reveal></div>
            </div>
        </section>

        <section class="t1-section t1-services" id="services">
            <div class="t1-container">
                <header class="t1-section__head" data-reveal>
                    <p class="t1-eyebrow">02 — Services</p>
                    <h2 class="t1-title">The service menu</h2>
                </header>
                <ul class="t1-service-list" id="services-grid" data-reveal></ul>
            </div>
        </section>

        <section class="t1-featured" id="featured" hidden>
            <div class="t1-container">
                <div class="t1-featured__card" id="featured-service" data-reveal></div>
            </div>
        </section>

        <section class="t1-section t1-packages" id="packages">
            <div class="t1-container">
                <header class="t1-section__head" data-reveal>
                    <p class="t1-eyebrow">03 — Packages</p>
                    <h2 class="t1-title">Signature experiences</h2>
                </header>
                <div class="t1-packages__grid" id="packages-grid" data-reveal></div>
            </div>
        </section>

        <section class="t1-section t1-team" id="team">
            <div class="t1-container">
                <header class="t1-section__head" data-reveal>
                    <p class="t1-eyebrow">04 — The team</p>
                    <h2 class="t1-title">Hands you can trust</h2>
                </header>
                <div class="t1-team__grid" id="team-grid" data-reveal></div>
            </div>
        </section>

        <section class="t1-section t1-gallery" id="gallery">
            <div class="t1-container">
                <header class="t1-section__head" data-reveal>
                    <p class="t1-eyebrow">05 — Gallery</p>
                    <h2 class="t1-title">Inside the studio</h2>
                </header>
                <div class="t1-gallery__grid" id="gallery-grid" data-reveal></div>
            </div>
        </section>

        <section class="t1-section t1-testimonials" id="testimonials">
            <div class="t1-container">
                <header class="t1-section__head" data-reveal>
                    <p class="t1-eyebrow">06 — Kind words</p>
                    <h2 class="t1-title">What our clients say</h2>
                </header>
                <div class="t1-testimonials__grid" id="testimonials-grid" data-reveal></div>
            </div>
        </section>

        <section class="t1-section t1-booking" id="booking">
            <div class="t1-container t1-booking__grid">
                <div class="t1-booking__intro" data-reveal>
                    <p class="t1-eyebrow t1-eyebrow--on-dark">07 — Reservations</p>
                    <h2 class="t1-title t1-title--on-dark">Book your visit</h2>
                    <p class="t1-booking__lede">Tell us what you have in mind and we will confirm your appointment shortly. Requests are held while you are on this page only — this site is a preview.</p>
                </div>
                <div class="t1-booking__panel" data-reveal>
                    <form class="t1-form" id="booking-form">
                        <div class="t1-form__row">
                            <div class="t1-field">
                                <label class="t1-field__label" for="booking-name">Full name</label>
                                <input class="t1-field__input" type="text" id="booking-name" name="name" autocomplete="name" required>
                            </div>
                            <div class="t1-field">
                                <label class="t1-field__label" for="booking-phone">Phone</label>
                                <input class="t1-field__input" type="tel" id="booking-phone" name="phone" autocomplete="tel" required>
                            </div>
                        </div>
                        <div class="t1-field">
                            <label class="t1-field__label" for="booking-email">Email</label>
                            <input class="t1-field__input" type="email" id="booking-email" name="email" autocomplete="email" required>
                        </div>
                        <div class="t1-field">
                            <label class="t1-field__label" for="booking-service">Service or package</label>
                            <select class="t1-field__input t1-field__select" id="booking-service" name="service" required>
                                <option value="" selected disabled>Select a service</option>
                            </select>
                        </div>
                        <div class="t1-form__row">
                            <div class="t1-field">
                                <label class="t1-field__label" for="booking-date">Preferred date</label>
                                <input class="t1-field__input" type="date" id="booking-date" name="date" required>
                            </div>
                            <div class="t1-field">
                                <label class="t1-field__label" for="booking-time">Preferred time</label>
                                <select class="t1-field__input t1-field__select" id="booking-time" name="time" required>
                                    <option value="" selected disabled>Select a date first</option>
                                </select>
                            </div>
                        </div>
                        <div class="t1-field">
                            <label class="t1-field__label" for="booking-message">Notes <span class="t1-field__optional">(optional)</span></label>
                            <textarea class="t1-field__input t1-field__textarea" id="booking-message" name="message" rows="3"></textarea>
                        </div>
                        <button class="t1-btn t1-btn--light t1-btn--lg t1-form__submit" type="submit">Request appointment</button>
                    </form>
                    <div class="t1-booking__success" id="booking-success" hidden>
                        <p class="t1-booking__success-mark" aria-hidden="true">✓</p>
                        <h3 class="t1-booking__success-title">Request received</h3>
                        <p class="t1-booking__success-text" id="booking-success-text"></p>
                        <button class="t1-btn t1-btn--ghost-light" id="booking-reset" type="button">Make another request</button>
                    </div>
                </div>
            </div>
        </section>

        <section class="t1-section t1-contact" id="contact">
            <div class="t1-container">
                <header class="t1-section__head" data-reveal>
                    <p class="t1-eyebrow">08 — Visit</p>
                    <h2 class="t1-title">Come see us</h2>
                </header>
                <div class="t1-contact__grid" data-reveal>
                    <div class="t1-contact__info" id="contact-info"></div>
                    <div class="t1-contact__hours">
                        <h3 class="t1-contact__hours-title">Opening hours</h3>
                        <div class="t1-hours" id="opening-hours"></div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="t1-footer">
        <div class="t1-container">
            <div class="t1-footer__grid">
                <div class="t1-footer__brand" id="footer-brand">
                    <p class="t1-footer__name" id="footer-name"></p>
                    <p class="t1-footer__tag" id="footer-tag"></p>
                    <a class="t1-btn t1-btn--ghost-light" href="#booking">Book an appointment</a>
                    <div class="t1-footer__social" id="footer-social"></div>
                </div>
                <nav class="t1-footer__col" aria-label="Footer">
                    <h3 class="t1-footer__heading">Explore</h3>
                    <ul class="t1-footer__links">
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#packages">Packages</a></li>
                        <li><a href="#team">Team</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#testimonials">Reviews</a></li>
                    </ul>
                </nav>
                <div class="t1-footer__col">
                    <h3 class="t1-footer__heading">Hours</h3>
                    <div class="t1-footer__hours" id="footer-hours"></div>
                </div>
                <div class="t1-footer__col">
                    <h3 class="t1-footer__heading">Contact</h3>
                    <div class="t1-footer__contact" id="footer-contact"></div>
                </div>
            </div>
            <div class="t1-footer__bottom">
                <p id="footer-copyright"></p>
                <a class="t1-footer__admin" href="admin.html">Admin Panel</a>
            </div>
        </div>
    </footer>

    <div class="t1-lightbox" id="lightbox" hidden role="dialog" aria-modal="true" aria-label="Gallery image">
        <button class="t1-lightbox__close" id="lightbox-close" type="button" aria-label="Close image">&times;</button>
        <figure class="t1-lightbox__figure">
            <img class="t1-lightbox__image" id="lightbox-image" src="" alt="">
            <figcaption class="t1-lightbox__caption" id="lightbox-caption"></figcaption>
        </figure>
    </div>
    </div>
`;

    const FALLBACK_IMAGE = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000">' +
        '<rect width="800" height="1000" fill="#ece6da"/>' +
        '<text x="400" y="500" font-family="serif" font-size="40" fill="#9a7b4f" text-anchor="middle" font-style="italic">Luxe</text>' +
        '<text x="400" y="560" font-family="sans-serif" font-size="18" fill="#8d8574" text-anchor="middle">image unavailable</text>' +
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

    /* ---------- Renderers ---------- */

    function renderStatusBanner(data) {
        const settings = data.settings || {};
        const banner = byId('status-banner');
        if (!banner) return;

        const syncOffset = () => {
            document.documentElement.style.setProperty('--t1-status-h', `${banner.hidden ? 0 : banner.offsetHeight}px`);
        };

        if (settings.websiteStatus && settings.websiteStatus !== 'published') {
            banner.textContent = statusText(settings.websiteStatus);
            banner.hidden = false;
            syncOffset();
            window.addEventListener('resize', syncOffset, { passive: true });
        } else {
            banner.hidden = true;
            syncOffset();
        }
    }

    function renderMeta(data) {
        const business = data.business || {};
        const settings = data.settings || {};
        const name = business.name || 'Salon';
        const tagline = business.tagline || '';
        const description = business.description || 'A premium salon experience.';

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

        document.body.dataset.template = settings.selectedTemplate || 'template-1';
    }

    function renderHeader(data) {
        const business = data.business || {};
        setText('brand-name', business.name || 'Salon');
    }

    function renderHero(data) {
        const business = data.business || {};
        const contact = data.contact || {};
        const gallery = active(data.gallery);

        const locationParts = [business.city, business.country].filter(Boolean);
        setText('hero-eyebrow', locationParts.length
            ? `Beauty studio \u00b7 ${locationParts.join(', ')}`
            : 'Hair \u00b7 Beauty \u00b7 Skin');
        setText('hero-title', business.tagline || business.name || 'Salon');
        setText('hero-subtitle', firstSentence(business.description, 150));
        setText('hero-meta', contact.address || [business.address, business.city].filter(Boolean).join(', '));

        const media = byId('hero-media');
        if (!media) return;

        if (gallery.length === 0) {
            media.classList.add('t1-hero__media--fallback');
            media.innerHTML = `<span class="t1-hero__media-fallback-mark">${escapeHtml(initialsOf(business.name))}</span>`;
            return;
        }

        media.classList.remove('t1-hero__media--fallback');
        const main = gallery[0];
        const inset = gallery[1];
        media.innerHTML = `
            <div class="t1-hero__media-main">${imgTag(main.image, main.title || 'Salon', { eager: true })}</div>
            ${inset ? `<div class="t1-hero__media-inset">${imgTag(inset.image, inset.title || 'Salon')}</div>` : ''}
            <span class="t1-hero__media-caption">${escapeHtml(main.category || main.title || '')}</span>
        `;
    }

    function renderTrust(data) {
        const testimonials = active(data.testimonials);
        const services = active(data.services);
        const team = active(data.team);
        const container = byId('trust-stats');
        if (!container) return;

        const items = [];
        if (testimonials.length > 0) {
            const avg = testimonials.reduce((sum, t) => sum + (Number(t.rating) || 0), 0) / testimonials.length;
            items.push({ value: avg.toFixed(1), star: true, label: 'Average rating' });
            items.push({ value: String(testimonials.length), label: testimonials.length === 1 ? 'Client review' : 'Client reviews' });
        }
        if (team.length > 0) items.push({ value: String(team.length), label: team.length === 1 ? 'Specialist' : 'Specialists' });
        if (services.length > 0) items.push({ value: String(services.length), label: 'Services on the menu' });

        if (items.length === 0) {
            hideSection('trust-stats');
            return;
        }

        container.innerHTML = items.map(item => `
            <div class="t1-trust__item">
                <dt class="t1-trust__value">${escapeHtml(item.value)}${item.star ? '<span class="t1-trust__value-star" aria-hidden="true">\u2605</span>' : ''}</dt>
                <dd class="t1-trust__label">${escapeHtml(item.label)}</dd>
            </div>
        `).join('');
    }

    function renderAbout(data) {
        const business = data.business || {};
        setHtml('about-text', `<p>${escapeHtml(business.description || '')}</p>`);

        const gallery = active(data.gallery);
        const media = byId('about-media');
        if (!media) return;

        if (gallery.length === 0) {
            media.hidden = true;
            return;
        }

        const preferred = ['Interior', 'Spa'];
        const first = gallery.find(item => item.category === preferred[0]) || gallery[0];
        const second = gallery.find(item => item.category === preferred[1] && item !== first) || gallery[1] || gallery[0];

        media.innerHTML = `
            <figure class="t1-about__figure">${imgTag(first.image, first.title || business.name || 'Salon')}</figure>
            <figure class="t1-about__figure t1-about__figure--offset">${imgTag(second.image, second.title || business.name || 'Salon')}</figure>
        `;
    }

    function renderServices(data) {
        const services = active(data.services);
        const list = byId('services-grid');
        if (!list) return;

        if (services.length === 0) {
            hideSection('services-grid');
            return;
        }

        list.innerHTML = services.map((service, index) => `
            <li class="t1-service">
                <span class="t1-service__num">${String(index + 1).padStart(2, '0')}</span>
                <div class="t1-service__head">
                    <h3 class="t1-service__name">${escapeHtml(service.name)}</h3>
                    ${service.description ? `<p class="t1-service__desc">${escapeHtml(service.description)}</p>` : ''}
                </div>
                <span class="t1-service__cat">${escapeHtml(service.category || '')}</span>
                <div class="t1-service__meta">
                    <span class="t1-service__dur">${escapeHtml(String(service.duration || 0))} min</span>
                </div>
                <span class="t1-service__price">${formatCurrency(service.price)}</span>
            </li>
        `).join('');
    }

    function renderFeatured(data) {
        const services = active(data.services);
        const gallery = active(data.gallery);
        const section = byId('featured');
        const card = byId('featured-service');
        if (!section || !card) return;

        if (services.length === 0) {
            section.hidden = true;
            return;
        }

        const featured = services.reduce((best, service) =>
            (Number(service.price) || 0) > (Number(best.price) || 0) ? service : best, services[0]);

        const media = gallery.find(item => item.category && featured.category && item.category === featured.category)
            || gallery[0];

        section.hidden = false;
        card.innerHTML = `
            <div class="t1-featured__media">
                ${media
                    ? imgTag(media.image, media.title || featured.name, { eager: false })
                    : `<div class="t1-hero__media--fallback" style="height:100%"><span class="t1-hero__media-fallback-mark">${escapeHtml(initialsOf(featured.category))}</span></div>`}
            </div>
            <div class="t1-featured__body">
                <p class="t1-featured__kicker">Featured \u00b7 ${escapeHtml(featured.category || 'Service')}</p>
                <h3 class="t1-featured__name">${escapeHtml(featured.name)}</h3>
                <p class="t1-featured__desc">${escapeHtml(featured.description || '')}</p>
                <div class="t1-featured__meta">
                    <span class="t1-featured__price">${formatCurrency(featured.price)}</span>
                    <span class="t1-featured__dur">${escapeHtml(String(featured.duration || 0))} minutes</span>
                </div>
                <button class="t1-btn t1-btn--light t1-featured__cta" type="button" data-service="${escapeHtml(featured.id)}">Book this service</button>
            </div>
        `;

        const cta = card.querySelector('.t1-featured__cta');
        if (cta) cta.addEventListener('click', () => preselectBooking(featured.id));
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
            <article class="t1-package${index === featureIndex ? ' t1-package--feature' : ''}">
                <p class="t1-package__label">${index === featureIndex ? 'Most requested' : 'Signature'}</p>
                <h3 class="t1-package__name">${escapeHtml(pkg.name)}</h3>
                <p class="t1-package__desc">${escapeHtml(pkg.description || '')}</p>
                <p class="t1-package__price">${formatCurrency(pkg.price)}<span>per package</span></p>
                <ul class="t1-package__services">
                    ${included.length
                        ? included.map(service => `<li>${escapeHtml(service.name)}</li>`).join('')
                        : '<li>Curated just for you</li>'}
                </ul>
                <button class="t1-package__cta" type="button" data-package="${escapeHtml(pkg.id)}">Choose package</button>
            </article>
        `;
        }).join('');

        grid.querySelectorAll('.t1-package__cta').forEach(button => {
            button.addEventListener('click', () => preselectBooking(button.dataset.package));
        });
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
            <article class="t1-team__member${index === 0 && team.length > 1 ? ' t1-team__member--lead' : ''}">
                <div class="t1-portrait${member.image ? '' : ' t1-portrait--mono'}">
                    ${member.image
                        ? imgTag(member.image, member.name, { fallback: FALLBACK_IMAGE })
                        : `<span aria-hidden="true">${escapeHtml(initialsOf(member.name))}</span>`}
                </div>
                <div class="t1-team__body">
                    <h3 class="t1-team__name">${escapeHtml(member.name)}</h3>
                    <span class="t1-team__role">${escapeHtml(member.role || '')}</span>
                    ${member.bio ? `<p class="t1-team__bio">${escapeHtml(member.bio)}</p>` : ''}
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

        grid.innerHTML = gallery.map(item => `
            <figure class="t1-gal">
                <button class="t1-gal__open" type="button"
                    data-full="${escapeHtml(item.image)}"
                    data-title="${escapeHtml(item.title || '')}"
                    data-category="${escapeHtml(item.category || '')}"
                    aria-label="View ${escapeHtml(item.title || 'image')}">
                    ${imgTag(item.image, item.title || 'Salon gallery')}
                    <span class="t1-gal__cap">
                        <span class="t1-gal__cap-title">${escapeHtml(item.title || '')}</span>
                        <span class="t1-gal__cap-cat">${escapeHtml(item.category || '')}</span>
                    </span>
                </button>
            </figure>
        `).join('');
    }

    function renderTestimonials(data) {
        const testimonials = active(data.testimonials);
        const grid = byId('testimonials-grid');
        if (!grid) return;

        if (testimonials.length === 0) {
            hideSection('testimonials-grid');
            return;
        }

        grid.innerHTML = testimonials.map((item, index) => {
            const rating = Math.min(5, Math.max(0, Number(item.rating) || 0));
            const stars = '\u2605'.repeat(rating) + '\u2606'.repeat(5 - rating);
            return `
            <blockquote class="t1-quote${index === 0 && testimonials.length > 1 ? ' t1-quote--lead' : ''}">
                <p class="t1-quote__stars" aria-label="${rating} out of 5 stars">${stars}</p>
                <p class="t1-quote__text">&ldquo;${escapeHtml(item.message || '')}&rdquo;</p>
                <footer class="t1-quote__author">${escapeHtml(item.customerName || 'Client')}</footer>
            </blockquote>
        `;
        }).join('');
    }

    function buildServiceOptions(data) {
        const services = active(data.services);
        const packages = active(data.packages);
        const select = byId('booking-service');
        if (!select) return;

        const placeholder = '<option value="" selected disabled>Select a service</option>';
        const serviceOptions = services.map(service =>
            `<option value="${escapeHtml(service.id)}">${escapeHtml(service.name)} \u2014 ${formatCurrency(service.price)}</option>`
        ).join('');
        const packageOptions = packages.map(pkg =>
            `<option value="${escapeHtml(pkg.id)}">${escapeHtml(pkg.name)} \u2014 ${formatCurrency(pkg.price)} (package)</option>`
        ).join('');

        let html = placeholder;
        if (serviceOptions) html += `<optgroup label="Services">${serviceOptions}</optgroup>`;
        if (packageOptions) html += `<optgroup label="Packages">${packageOptions}</optgroup>`;
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
                    <div class="t1-contact__row">
                        <span class="t1-contact__key">Phone</span>
                        <span class="t1-contact__value"><a href="tel:${escapeHtml(contact.phone)}">${escapeHtml(contact.phone)}</a></span>
                    </div>`);
            }
            if (contact.email) {
                rows.push(`
                    <div class="t1-contact__row">
                        <span class="t1-contact__key">Email</span>
                        <span class="t1-contact__value"><a href="mailto:${escapeHtml(contact.email)}">${escapeHtml(contact.email)}</a></span>
                    </div>`);
            }
            const address = contact.address || [business.address, business.city, business.country].filter(Boolean).join(', ');
            if (address) {
                const maps = contact.googleMapsUrl
                    ? `<a class="t1-contact__maps" href="${escapeHtml(contact.googleMapsUrl)}" target="_blank" rel="noopener">Get directions</a>`
                    : '';
                rows.push(`
                    <div class="t1-contact__row">
                        <span class="t1-contact__key">Address</span>
                        <span class="t1-contact__value">${escapeHtml(address)}<br>${maps}</span>
                    </div>`);
            }
            info.innerHTML = rows.join('') || '<p class="t1-empty">Contact details coming soon.</p>';
        }

        const hours = data.openingHours || {};
        setHtml('opening-hours', DAYS.map(day => {
            const dayData = hours[day] || {};
            const value = dayData.open && dayData.openTime
                ? `${formatTime(dayData.openTime)} \u2013 ${formatTime(dayData.closeTime)}`
                : 'Closed';
            const closed = value === 'Closed' ? ' t1-hours__row--closed' : '';
            return `
                <div class="t1-hours__row${closed}">
                    <span class="t1-hours__day">${DAY_LABELS[day]}</span>
                    <span class="t1-hours__time">${value}</span>
                </div>`;
        }).join(''));
    }

    function renderFooter(data) {
        const business = data.business || {};
        const contact = data.contact || {};
        const social = data.socialLinks || {};
        const hours = data.openingHours || {};
        const name = business.name || 'Salon';
        const year = new Date().getFullYear();

        setText('footer-name', name);
        setText('footer-tag', business.tagline || business.description || '');

        const socialHtml = Object.keys(SOCIAL_LABELS)
            .filter(key => social[key])
            .map(key => `<a href="${escapeHtml(social[key])}" target="_blank" rel="noopener">${SOCIAL_LABELS[key]}</a>`)
            .join('');
        setHtml('footer-social', socialHtml);

        setHtml('footer-hours', DAYS.map(day => {
            const dayData = hours[day] || {};
            const value = dayData.open && dayData.openTime
                ? `${formatTime(dayData.openTime)} \u2013 ${formatTime(dayData.closeTime)}`
                : 'Closed';
            return `
                <div class="t1-footer__hours-row">
                    <span>${DAY_LABELS[day].slice(0, 3)}</span>
                    <span>${value}</span>
                </div>`;
        }).join(''));

        const contactLines = [];
        if (contact.phone) contactLines.push(`<a href="tel:${escapeHtml(contact.phone)}">${escapeHtml(contact.phone)}</a>`);
        if (contact.email) contactLines.push(`<a href="mailto:${escapeHtml(contact.email)}">${escapeHtml(contact.email)}</a>`);
        if (contact.address) contactLines.push(`<span>${escapeHtml(contact.address)}</span>`);
        setHtml('footer-contact', contactLines.join('') || '');

        setText('footer-copyright', `\u00a9 ${year} ${name}. All rights reserved.`);
    }

    /* ---------- Interactions ---------- */

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
            const close = () => {
                document.body.classList.remove('t1-nav-open');
                burger.setAttribute('aria-expanded', 'false');
            };
            burger.addEventListener('click', () => {
                const open = document.body.classList.toggle('t1-nav-open');
                burger.setAttribute('aria-expanded', open ? 'true' : 'false');
            });
            menu.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
            document.addEventListener('keydown', event => {
                if (event.key === 'Escape') close();
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
            const button = event.target.closest('.t1-gal__open');
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

            successText.textContent = `Thank you, ${name}. We received your request for ` +
                `${lookupServiceName(service)} on ${formatDate(date)} at ${formatTime(time)}. ` +
                `We will confirm shortly.`;
            form.hidden = true;
            success.hidden = false;
            success.setAttribute('tabindex', '-1');
            success.focus({ preventScroll: true });
            showToast('Appointment request received.', 'success');
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

    /* ---------- Entry ---------- */

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
        renderTrust(data);
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
        bindLightbox();
        bindBookingForm();
    }

    window.SalonTemplates = window.SalonTemplates || {};
    window.SalonTemplates['template-1'] = { html: TEMPLATE_HTML, render: render };
})();
