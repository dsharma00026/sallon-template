(function () {
    const TEMPLATE_HTML = `
    <div class="t3-status" id="status-banner" hidden></div>

    <div id="t3-shell" data-shell="template-3">
    <header class="t3-header" id="site-header">
        <div class="t3-container t3-header__inner">
            <a class="t3-logo" id="site-logo" href="#home">
                <span class="t3-logo__mark" aria-hidden="true"></span>
                <span class="t3-logo__name" id="brand-name"></span>
            </a>
            <nav class="t3-nav" aria-label="Primary">
                <ul class="t3-nav__list" id="nav-menu">
                    <li><a href="#about">Studio</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#packages">Packages</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#contact">Visit</a></li>
                </ul>
            </nav>
            <div class="t3-header__actions">
                <a class="t3-btn t3-btn--primary t3-header__cta" href="#booking">Book now</a>
                <button class="t3-burger" id="mobile-menu-btn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="nav-menu">
                    <span class="t3-burger__line"></span>
                    <span class="t3-burger__line"></span>
                    <span class="t3-burger__line"></span>
                </button>
            </div>
        </div>
    </header>

    <main>
        <section class="t3-hero" id="home">
            <span class="t3-hero__glow t3-hero__glow--a" aria-hidden="true"></span>
            <span class="t3-hero__glow t3-hero__glow--b" aria-hidden="true"></span>
            <div class="t3-container t3-hero__grid">
                <div class="t3-hero__copy">
                    <p class="t3-eyebrow" id="hero-eyebrow" data-reveal></p>
                    <h1 class="t3-hero__title" id="hero-title" data-reveal></h1>
                    <p class="t3-hero__lede" id="hero-subtitle" data-reveal></p>
                    <div class="t3-hero__actions" data-reveal>
                        <a class="t3-btn t3-btn--primary t3-btn--lg" href="#booking">Book an appointment</a>
                        <a class="t3-btn t3-btn--ghost t3-btn--lg" href="#services">Explore services</a>
                    </div>
                </div>
                <div class="t3-hero__media" id="hero-media" data-reveal></div>
            </div>
        </section>

        <section class="t3-intro" id="about">
            <div class="t3-container t3-intro__grid">
                <div class="t3-intro__media" id="intro-media" data-reveal></div>
                <div class="t3-intro__copy" data-reveal>
                    <p class="t3-eyebrow">The studio</p>
                    <h2 class="t3-title">Rooted in care, grown with intention.</h2>
                    <div class="t3-intro__text" id="intro-text"></div>
                    <ul class="t3-intro__values" id="intro-values"></ul>
                    <a class="t3-btn t3-btn--text" href="#booking">Plan your first visit</a>
                </div>
            </div>
        </section>

        <section class="t3-section t3-services" id="services">
            <div class="t3-container">
                <header class="t3-section__head" data-reveal>
                    <p class="t3-eyebrow">Services</p>
                    <div class="t3-section__head-row">
                        <h2 class="t3-title">A menu that grows with you</h2>
                        <p class="t3-section__note" id="services-note"></p>
                    </div>
                </header>
                <div class="t3-services__grid" id="services-grid" data-reveal></div>
            </div>
        </section>

        <section class="t3-featured" id="featured" hidden>
            <div class="t3-container t3-featured__grid">
                <div class="t3-featured__media" id="featured-media"></div>
                <div class="t3-featured__body" id="featured-service" data-reveal></div>
            </div>
        </section>

        <section class="t3-section t3-packages" id="packages">
            <div class="t3-container">
                <header class="t3-section__head t3-section__head--center" data-reveal>
                    <p class="t3-eyebrow">Packages</p>
                    <h2 class="t3-title">Signature rituals</h2>
                    <p class="t3-section__note">Bundled with care, priced simply. Every package can be tailored at your consultation.</p>
                </header>
                <div class="t3-packages__grid" id="packages-grid" data-reveal></div>
            </div>
        </section>

        <section class="t3-section t3-team" id="team">
            <div class="t3-container">
                <header class="t3-section__head" data-reveal>
                    <p class="t3-eyebrow">The team</p>
                    <h2 class="t3-title">People who love what they do</h2>
                </header>
                <div class="t3-team__grid" id="team-grid" data-reveal></div>
            </div>
        </section>

        <section class="t3-section t3-gallery" id="gallery">
            <div class="t3-container">
                <header class="t3-section__head t3-section__head--center" data-reveal>
                    <p class="t3-eyebrow">Gallery</p>
                    <h2 class="t3-title">Grown from real moments</h2>
                </header>
                <div class="t3-gallery__grid" id="gallery-grid" data-reveal></div>
            </div>
        </section>

        <section class="t3-section t3-testimonials" id="testimonials">
            <div class="t3-container">
                <header class="t3-section__head t3-section__head--center" data-reveal>
                    <p class="t3-eyebrow">Kind words</p>
                    <h2 class="t3-title">What guests tell us</h2>
                </header>
                <div class="t3-testimonials__grid" id="testimonials-grid" data-reveal></div>
            </div>
        </section>

        <section class="t3-booking" id="booking">
            <div class="t3-container t3-booking__grid">
                <div class="t3-booking__intro" data-reveal>
                    <p class="t3-eyebrow t3-eyebrow--light">Reservations</p>
                    <h2 class="t3-title t3-title--light">Book your visit</h2>
                    <p class="t3-booking__lede">Tell us what you have in mind and we will confirm your appointment shortly. Requests are held while you are on this page only &mdash; this site is a preview.</p>
                    <ul class="t3-booking__perks">
                        <li>Personal consultation</li>
                        <li>Expert, unhurried care</li>
                        <li>Relaxed studio setting</li>
                    </ul>
                </div>
                <div class="t3-booking__panel" data-reveal>
                    <form class="t3-form" id="booking-form">
                        <div class="t3-form__row">
                            <div class="t3-field">
                                <label class="t3-field__label" for="booking-name">Full name</label>
                                <input class="t3-field__input" type="text" id="booking-name" name="name" autocomplete="name" required>
                            </div>
                            <div class="t3-field">
                                <label class="t3-field__label" for="booking-phone">Phone</label>
                                <input class="t3-field__input" type="tel" id="booking-phone" name="phone" autocomplete="tel" required>
                            </div>
                        </div>
                        <div class="t3-field">
                            <label class="t3-field__label" for="booking-email">Email</label>
                            <input class="t3-field__input" type="email" id="booking-email" name="email" autocomplete="email" required>
                        </div>
                        <div class="t3-field">
                            <label class="t3-field__label" for="booking-service">Service or package</label>
                            <select class="t3-field__input t3-field__select" id="booking-service" name="service" required>
                                <option value="" selected disabled>Select a service</option>
                            </select>
                        </div>
                        <div class="t3-form__row">
                            <div class="t3-field">
                                <label class="t3-field__label" for="booking-date">Preferred date</label>
                                <input class="t3-field__input" type="date" id="booking-date" name="date" required>
                            </div>
                            <div class="t3-field">
                                <label class="t3-field__label" for="booking-time">Preferred time</label>
                                <select class="t3-field__input t3-field__select" id="booking-time" name="time" required>
                                    <option value="" selected disabled>Select a date first</option>
                                </select>
                            </div>
                        </div>
                        <div class="t3-field">
                            <label class="t3-field__label" for="booking-message">Notes <span class="t3-field__optional">(optional)</span></label>
                            <textarea class="t3-field__input t3-field__textarea" id="booking-message" name="message" rows="3"></textarea>
                        </div>
                        <button class="t3-btn t3-btn--primary t3-btn--lg t3-form__submit" type="submit">Request appointment</button>
                    </form>
                    <div class="t3-booking__success" id="booking-success" tabindex="-1" hidden>
                        <p class="t3-booking__success-mark" aria-hidden="true">&#10003;</p>
                        <h3 class="t3-booking__success-title">Request received</h3>
                        <p class="t3-booking__success-text" id="booking-success-text"></p>
                        <button class="t3-btn t3-btn--ghost-light" id="booking-reset" type="button">Make another request</button>
                    </div>
                </div>
            </div>
        </section>

        <section class="t3-section t3-contact" id="contact">
            <div class="t3-container">
                <header class="t3-section__head" data-reveal>
                    <p class="t3-eyebrow">Visit</p>
                    <h2 class="t3-title">Come say hello</h2>
                </header>
                <div class="t3-contact__grid" data-reveal>
                    <div class="t3-contact__card" id="contact-info"></div>
                    <div class="t3-contact__card">
                        <h3 class="t3-card__title">Opening hours</h3>
                        <div class="t3-hours" id="opening-hours"></div>
                    </div>
                    <div class="t3-contact__card">
                        <h3 class="t3-card__title">Follow along</h3>
                        <div class="t3-social" id="contact-social"></div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="t3-footer">
        <div class="t3-container">
            <div class="t3-footer__grid">
                <div class="t3-footer__brand">
                    <p class="t3-footer__name" id="footer-name"></p>
                    <p class="t3-footer__tag" id="footer-tag"></p>
                    <a class="t3-btn t3-btn--ghost-light" href="#booking">Book an appointment</a>
                    <div class="t3-social t3-social--footer" id="footer-social"></div>
                </div>
                <nav class="t3-footer__col" aria-label="Footer">
                    <h3 class="t3-footer__heading">Explore</h3>
                    <ul class="t3-footer__links">
                        <li><a href="#about">Studio</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#packages">Packages</a></li>
                        <li><a href="#team">Team</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#contact">Visit</a></li>
                    </ul>
                </nav>
                <div class="t3-footer__col">
                    <h3 class="t3-footer__heading">Hours</h3>
                    <div class="t3-footer__hours" id="footer-hours"></div>
                </div>
                <div class="t3-footer__col">
                    <h3 class="t3-footer__heading">Contact</h3>
                    <div class="t3-footer__contact" id="footer-contact"></div>
                </div>
            </div>
            <div class="t3-footer__bottom">
                <p id="footer-copyright"></p>
                <a class="t3-footer__admin" href="admin.html">Admin Panel</a>
            </div>
        </div>
    </footer>

    <div class="t3-lightbox" id="lightbox" hidden role="dialog" aria-modal="true" aria-label="Gallery image">
        <button class="t3-lightbox__close" id="lightbox-close" type="button" aria-label="Close image">&times;</button>
        <figure class="t3-lightbox__figure">
            <img class="t3-lightbox__image" id="lightbox-image" src="" alt="">
            <figcaption class="t3-lightbox__caption" id="lightbox-caption"></figcaption>
        </figure>
    </div>
    </div>
`;

    const FALLBACK_IMAGE = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000">' +
        '<rect width="800" height="1000" fill="#e8ede3"/>' +
        '<path d="M400 300 C 470 380 470 470 400 560 C 330 470 330 380 400 300 Z" fill="none" stroke="#6f8a63" stroke-width="7"/>' +
        '<path d="M400 300 L400 560" stroke="#6f8a63" stroke-width="7" fill="none"/>' +
        '<text x="400" y="660" font-family="Georgia, serif" font-size="34" fill="#4c5f44" text-anchor="middle">Botanical Studio</text>' +
        '<text x="400" y="710" font-family="Arial, sans-serif" font-size="18" fill="#8a9680" text-anchor="middle">image unavailable</text>' +
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

    const VALUE_ICONS = ['\u2740', '\u2741', '\u273F'];

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

        document.body.dataset.template = settings.selectedTemplate || 'template-3';
    }

    function renderHeader(data) {
        const business = data.business || {};
        setText('brand-name', business.name || 'Salon');
    }

    function renderHero(data) {
        const business = data.business || {};
        const hours = data.openingHours || {};
        const gallery = active(data.gallery);

        const locationParts = [business.city, business.country].filter(Boolean);
        setText('hero-eyebrow', locationParts.length
            ? `Botanical beauty studio \u00b7 ${locationParts.join(', ')}`
            : 'Hair \u00b7 Beauty \u00b7 Wellness');
        setText('hero-title', business.tagline || business.name || 'Salon');
        setText('hero-subtitle', firstSentence(business.description, 150));

        const media = byId('hero-media');
        if (!media) return;

        if (gallery.length === 0) {
            media.classList.add('t3-hero__media--fallback');
            media.innerHTML = `<span class="t3-hero__media-fallback-mark">${escapeHtml(initialsOf(business.name))}</span>`;
            return;
        }

        media.classList.remove('t3-hero__media--fallback');
        const main = gallery[0];
        const inset = gallery[1] || gallery[0];
        media.innerHTML = `
            <figure class="t3-hero__frame">${imgTag(main.image, main.title || business.name, { eager: true })}</figure>
            <figure class="t3-hero__seed">${imgTag(inset.image, inset.title || business.name, { eager: true })}</figure>
            <div class="t3-hero__chip">
                <span class="t3-hero__chip-dot" aria-hidden="true"></span>
                <span>${escapeHtml(todayHoursText(hours))}</span>
            </div>
        `;
    }

    function renderIntro(data) {
        const business = data.business || {};
        setHtml('intro-text', `<p>${escapeHtml(business.description || '')}</p>`);

        const values = ['Natural, ethical products', 'Consultation-led care', 'A calm, unhurried space'];
        setHtml('intro-values', values.map((value, index) => `
            <li class="t3-intro__value">
                <span class="t3-intro__value-icon" aria-hidden="true">${VALUE_ICONS[index % VALUE_ICONS.length]}</span>
                <span>${escapeHtml(value)}</span>
            </li>
        `).join(''));

        const gallery = active(data.gallery);
        const media = byId('intro-media');
        if (!media) return;

        if (gallery.length === 0) {
            media.hidden = true;
            return;
        }

        const first = gallery[0];
        const second = gallery[1] || gallery[0];
        media.innerHTML = `
            <figure class="t3-intro__figure">${imgTag(first.image, first.title || business.name || 'Studio')}</figure>
            <figure class="t3-intro__figure t3-intro__figure--offset">${imgTag(second.image, second.title || business.name || 'Studio')}</figure>
            <span class="t3-intro__bloom" aria-hidden="true">${escapeHtml(initialsOf(business.name))}</span>
        `;
    }

    function renderServices(data) {
        const services = active(data.services);
        const grid = byId('services-grid');
        if (!grid) return;

        if (services.length === 0) {
            hideSection('services-grid');
            return;
        }

        const categories = [];
        services.forEach(service => {
            const category = service.category || 'Signature';
            if (categories.indexOf(category) === -1) categories.push(category);
        });
        setText('services-note', `${services.length} treatments across ${categories.length} ${categories.length === 1 ? 'area' : 'areas'}`);

        grid.innerHTML = services.map(service => `
            <article class="t3-service">
                <div class="t3-service__top">
                    <span class="t3-service__chip">${escapeHtml(service.category || 'Signature')}</span>
                    ${service.duration ? `<span class="t3-service__dur">${escapeHtml(String(service.duration))} min</span>` : ''}
                </div>
                <h3 class="t3-service__name">${escapeHtml(service.name)}</h3>
                ${service.description ? `<p class="t3-service__desc">${escapeHtml(service.description)}</p>` : ''}
                <div class="t3-service__foot">
                    <span class="t3-service__price">${formatCurrency(service.price)}</span>
                    <button class="t3-service__book" type="button" data-service="${escapeHtml(service.id)}">Book
                        <span aria-hidden="true">\u2192</span>
                    </button>
                </div>
            </article>
        `).join('');

        grid.querySelectorAll('.t3-service__book').forEach(button => {
            button.addEventListener('click', () => preselectBooking(button.dataset.service));
        });
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

        const image = gallery.find(item => item.category && featured.category && item.category === featured.category)
            || gallery[0];

        media.innerHTML = image
            ? imgTag(image.image, image.title || featured.name)
            : `<div class="t3-featured__fallback"><span aria-hidden="true">${escapeHtml(initialsOf(featured.category))}</span></div>`;

        body.innerHTML = `
            <p class="t3-eyebrow">Featured treatment</p>
            <h3 class="t3-featured__name">${escapeHtml(featured.name)}</h3>
            <p class="t3-featured__desc">${escapeHtml(featured.description || '')}</p>
            <div class="t3-featured__meta">
                <span class="t3-featured__price">${formatCurrency(featured.price)}</span>
                <span class="t3-featured__dur">${escapeHtml(String(featured.duration || 0))} minutes</span>
                <span class="t3-featured__cat">${escapeHtml(featured.category || 'Service')}</span>
            </div>
            <button class="t3-btn t3-btn--primary t3-btn--lg t3-featured__cta" type="button" data-service="${escapeHtml(featured.id)}">Book this service</button>
        `;

        const cta = body.querySelector('.t3-featured__cta');
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
            <article class="t3-package${index === featureIndex ? ' t3-package--feature' : ''}">
                <p class="t3-package__tag">${index === featureIndex ? 'Most loved' : 'Ritual'}</p>
                <h3 class="t3-package__name">${escapeHtml(pkg.name)}</h3>
                <p class="t3-package__desc">${escapeHtml(pkg.description || '')}</p>
                <p class="t3-package__price">${formatCurrency(pkg.price)}<span>per package</span></p>
                <ul class="t3-package__list">
                    ${included.length
                        ? included.map(service => `<li>${escapeHtml(service.name)}</li>`).join('')
                        : '<li>Curated just for you</li>'}
                </ul>
                <button class="t3-btn t3-btn--primary t3-package__cta" type="button" data-package="${escapeHtml(pkg.id)}">Choose package</button>
            </article>
        `;
        }).join('');

        grid.querySelectorAll('.t3-package__cta').forEach(button => {
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
            <article class="t3-member${index === 0 && team.length > 1 ? ' t3-member--lead' : ''}">
                <div class="t3-member__frame${member.image ? '' : ' t3-member__frame--fallback'}">
                    ${member.image
                        ? imgTag(member.image, member.name)
                        : `<span aria-hidden="true">${escapeHtml(initialsOf(member.name))}</span>`}
                </div>
                <div class="t3-member__body">
                    <h3 class="t3-member__name">${escapeHtml(member.name)}</h3>
                    ${member.role ? `<span class="t3-member__role">${escapeHtml(member.role)}</span>` : ''}
                    ${member.bio ? `<p class="t3-member__bio">${escapeHtml(member.bio)}</p>` : ''}
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

        grid.innerHTML = gallery.map((item, index) => `
            <figure class="t3-gal${index % 2 === 0 ? ' t3-gal--tall' : ''}">
                <button class="t3-gal__open" type="button"
                    data-full="${escapeHtml(item.image)}"
                    data-title="${escapeHtml(item.title || '')}"
                    data-category="${escapeHtml(item.category || '')}"
                    aria-label="View ${escapeHtml(item.title || 'image')}">
                    ${imgTag(item.image, item.title || 'Salon gallery')}
                    <span class="t3-gal__cap">
                        <span class="t3-gal__cap-title">${escapeHtml(item.title || '')}</span>
                        <span class="t3-gal__cap-cat">${escapeHtml(item.category || '')}</span>
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
            <blockquote class="t3-quote${index === 0 && testimonials.length > 1 ? ' t3-quote--lead' : ''}">
                <span class="t3-quote__mark" aria-hidden="true">&ldquo;</span>
                <p class="t3-quote__stars" aria-label="${rating} out of 5 stars">${stars}</p>
                <p class="t3-quote__text">${escapeHtml(item.message || '')}</p>
                <footer class="t3-quote__author">${escapeHtml(item.customerName || 'Guest')}</footer>
            </blockquote>
        `;
        }).join('');
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
                    <div class="t3-contact__row">
                        <span class="t3-contact__key">Phone</span>
                        <span class="t3-contact__value"><a href="tel:${escapeHtml(contact.phone)}">${escapeHtml(contact.phone)}</a></span>
                    </div>`);
            }
            if (contact.email) {
                rows.push(`
                    <div class="t3-contact__row">
                        <span class="t3-contact__key">Email</span>
                        <span class="t3-contact__value"><a href="mailto:${escapeHtml(contact.email)}">${escapeHtml(contact.email)}</a></span>
                    </div>`);
            }
            const address = contact.address || [business.address, business.city, business.country].filter(Boolean).join(', ');
            if (address) {
                const maps = contact.googleMapsUrl
                    ? `<a class="t3-contact__maps" href="${escapeHtml(contact.googleMapsUrl)}" target="_blank" rel="noopener">Get directions</a>`
                    : '';
                rows.push(`
                    <div class="t3-contact__row">
                        <span class="t3-contact__key">Address</span>
                        <span class="t3-contact__value">${escapeHtml(address)}<br>${maps}</span>
                    </div>`);
            }
            info.innerHTML = `<h3 class="t3-card__title">Contact</h3>${rows.join('') || '<p class="t3-empty">Contact details coming soon.</p>'}`;
        }

        const hours = data.openingHours || {};
        setHtml('opening-hours', DAYS.map(day => {
            const dayData = hours[day] || {};
            const isOpen = dayData.open && dayData.openTime;
            const value = isOpen
                ? `${formatTime(dayData.openTime)} \u2013 ${formatTime(dayData.closeTime)}`
                : 'Closed';
            return `
                <div class="t3-hours__row${isOpen ? '' : ' t3-hours__row--closed'}">
                    <span class="t3-hours__day">${DAY_LABELS[day]}</span>
                    <span class="t3-hours__time">${value}</span>
                </div>`;
        }).join(''));

        const social = data.socialLinks || {};
        const socialHtml = Object.keys(SOCIAL_LABELS)
            .filter(key => social[key])
            .map(key => `<a class="t3-social__link" href="${escapeHtml(social[key])}" target="_blank" rel="noopener">${SOCIAL_LABELS[key]}</a>`)
            .join('');
        if (socialHtml) setHtml('contact-social', socialHtml);
        else {
            const wrap = byId('contact-social');
            const card = wrap ? wrap.closest('.t3-contact__card') : null;
            if (card) card.hidden = true;
        }
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
                <div class="t3-footer__hours-row">
                    <span>${DAY_LABELS[day].slice(0, 3)}</span>
                    <span>${value}</span>
                </div>`;
        }).join(''));

        const contactLines = [];
        if (contact.phone) contactLines.push(`<a href="tel:${escapeHtml(contact.phone)}">${escapeHtml(contact.phone)}</a>`);
        if (contact.email) contactLines.push(`<a href="mailto:${escapeHtml(contact.email)}">${escapeHtml(contact.email)}</a>`);
        if (contact.address) contactLines.push(`<span>${escapeHtml(contact.address)}</span>`);
        setHtml('footer-contact', contactLines.join(''));

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
            const close = () => {
                document.body.classList.remove('t3-nav-open');
                burger.setAttribute('aria-expanded', 'false');
            };
            burger.addEventListener('click', () => {
                const open = document.body.classList.toggle('t3-nav-open');
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
            const button = event.target.closest('.t3-gal__open');
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
            if (event.key === 'Tab' && !lightbox.hidden) {
                event.preventDefault();
                close.focus();
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

            successText.textContent = `Thank you, ${name}. We received your request for ` +
                `${lookupServiceName(service)} on ${formatDate(date)} at ${formatTime(time)}. ` +
                `We will confirm shortly.`;
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
        bindLightbox();
        bindBookingForm();
    }

    window.SalonTemplates = window.SalonTemplates || {};
    window.SalonTemplates['template-3'] = { html: TEMPLATE_HTML, render: render };
})();
