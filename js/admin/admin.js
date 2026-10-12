class AdminApp {
    constructor() {
        this.currentSection = 'dashboard';
        this.init();
    }

    init() {
        this.bindNavigation();
        this.bindMobileMenu();
        this.initializeStorage();
        this.loadBrand();
        this.loadSection('dashboard');
    }

    initializeStorage() {
        storage.initialize();
        showToast('Admin panel loaded', 'info');
    }

    loadBrand() {
        const business = storage.getBusiness();
        const name = business.name || 'Salon Admin';
        const brandEl = document.getElementById('sidebar-brand-name');
        if (brandEl) brandEl.textContent = name;
        document.title = `${name} - Admin Panel`;
    }

    bindNavigation() {
        document.querySelectorAll('.nav-link[data-section]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const section = link.dataset.section;
                this.loadSection(section);
                this.setActiveNav(link);
                this.closeMobileMenu();
            });
        });
    }

    bindMobileMenu() {
        const menuToggle = document.getElementById('menu-toggle');
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.querySelector('.overlay');

        menuToggle?.addEventListener('click', () => this.toggleMobileMenu());
        overlay?.addEventListener('click', () => this.closeMobileMenu());
    }

    toggleMobileMenu() {
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.querySelector('.overlay');
        sidebar?.classList.toggle('open');
        overlay?.classList.toggle('open');
    }

    closeMobileMenu() {
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.querySelector('.overlay');
        sidebar?.classList.remove('open');
        overlay?.classList.remove('open');
    }

    setActiveNav(activeLink) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        activeLink.classList.add('active');
    }

    loadSection(sectionName) {
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });

        const targetSection = document.getElementById(`section-${sectionName}`);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        this.currentSection = sectionName;
        this.updatePageTitle(sectionName);
        this.initSectionModule(sectionName);
    }

    updatePageTitle(section) {
        const titles = {
            dashboard: 'Dashboard',
            business: 'Business Information',
            contact: 'Contact Information',
            'opening-hours': 'Opening Hours',
            services: 'Services',
            packages: 'Packages',
            team: 'Team',
            gallery: 'Gallery',
            testimonials: 'Testimonials',
            appointments: 'Appointments',
            'social-links': 'Social Links',
            settings: 'Settings'
        };
        const titleEl = document.getElementById('page-title');
        if (titleEl) titleEl.textContent = titles[section] || 'Admin Panel';
    }

    initSectionModule(section) {
        switch (section) {
            case 'dashboard':
                if (window.adminDashboard) window.adminDashboard.loadDashboard();
                break;
            case 'business':
                if (window.businessAdmin) window.businessAdmin.loadData();
                break;
            case 'contact':
                if (window.contactAdmin) window.contactAdmin.loadData();
                break;
            case 'opening-hours':
                if (window.openingHoursAdmin) window.openingHoursAdmin.loadData();
                break;
            case 'services':
                if (window.servicesAdmin) window.servicesAdmin.loadServices();
                break;
            case 'packages':
                if (window.packagesAdmin) window.packagesAdmin.loadPackages();
                break;
            case 'team':
                if (window.teamAdmin) window.teamAdmin.loadTeam();
                break;
            case 'gallery':
                if (window.galleryAdmin) window.galleryAdmin.loadGallery();
                break;
            case 'testimonials':
                if (window.testimonialsAdmin) window.testimonialsAdmin.loadTestimonials();
                break;
            case 'appointments':
                if (window.appointmentsAdmin) window.appointmentsAdmin.loadAppointments();
                break;
            case 'social-links':
                if (window.settingsAdmin) window.settingsAdmin.loadSocialLinks();
                break;
            case 'settings':
                if (window.settingsAdmin) {
                    window.settingsAdmin.loadSettings();
                    window.settingsAdmin.loadSocialLinks();
                }
                break;
        }
    }

    refreshAllSections() {
        this.initSectionModule(this.currentSection);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.adminApp = new AdminApp();
    
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('open');
            }
        });
    });

    document.querySelectorAll('.modal-close, .modal-close-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal-overlay')?.classList.remove('open');
        });
    });
});