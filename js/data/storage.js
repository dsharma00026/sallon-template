const STORAGE_KEY = 'salon_prototype_data';
const AUTH_KEY = 'salon_admin_auth';
const ADMIN_CREDENTIALS = { email: 'admin@gmail.com', password: 'password' };
const REQUIRED_LISTS = ['services', 'packages', 'team', 'gallery', 'testimonials', 'appointments'];
const REQUIRED_OBJECTS = ['business', 'contact', 'openingHours', 'socialLinks', 'settings'];

class StorageManager {
    constructor() {
        this.data = null;
    }

    initialize() {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                const parsed = JSON.parse(stored);
                if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
                    this.data = parsed;
                    this.validateData();
                    this.migrate();
                    return this.data;
                }
                console.warn('Stored salon data was invalid. Restoring demo data.');
            } else {
                this.data = this.getDefaultData();
                this.save();
                return this.data;
            }
        } catch (e) {
            console.error('Failed to read salon data from LocalStorage:', e);
        }
        this.data = this.getDefaultData();
        this.save();
        return this.data;
    }

    ensureData() {
        if (!this.data) this.initialize();
        return this.data;
    }

    getDefaultData() {
        try {
            if (DEFAULT_DATA && typeof DEFAULT_DATA === 'object') {
                return JSON.parse(JSON.stringify(DEFAULT_DATA));
            }
        } catch (e) {
            console.error('Failed to clone default data:', e);
        }
        return {
            business: {},
            contact: {},
            openingHours: {},
            services: [],
            packages: [],
            team: [],
            gallery: [],
            testimonials: [],
            appointments: [],
            socialLinks: {},
            settings: {}
        };
    }

    validateData() {
        const defaults = this.getDefaultData();

        REQUIRED_OBJECTS.forEach(key => {
            const value = this.data[key];
            if (!value || typeof value !== 'object' || Array.isArray(value)) {
                this.data[key] = defaults[key];
            }
        });

        REQUIRED_LISTS.forEach(key => {
            if (!Array.isArray(this.data[key])) {
                this.data[key] = [];
            }
            this.data[key] = this.sanitizeList(this.data[key], key.slice(0, 3));
        });
    }

    migrate() {
        const defaults = this.getDefaultData();
        if (this.data.dataVersion === defaults.dataVersion) return;

        const seedImages = (key) => {
            const defList = Array.isArray(defaults[key]) ? defaults[key] : [];
            const byId = new Map(defList.map(record => [record.id, record]));
            const list = Array.isArray(this.data[key]) ? this.data[key] : [];
            list.forEach(record => {
                const def = byId.get(record.id);
                if (!def || !def.image) return;
                const image = record.image;
                if (!image || /^https?:/i.test(image)) record.image = def.image;
            });
        };

        seedImages('gallery');
        seedImages('team');
        this.data.dataVersion = defaults.dataVersion;
        this.save();
    }

    sanitizeList(list, prefix) {
        return list
            .filter(record => record && typeof record === 'object' && !Array.isArray(record))
            .map(record => {
                const clean = { ...record };
                if (!clean.id || typeof clean.id !== 'string') {
                    clean.id = this.generateId(prefix, list);
                }
                if (!clean.status || typeof clean.status !== 'string') {
                    clean.status = 'active';
                }
                return clean;
            });
    }

    save() {
        if (!this.data) return false;
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
            return true;
        } catch (e) {
            console.error('Failed to save salon data to LocalStorage:', e);
            return false;
        }
    }

    getData() {
        this.ensureData();
        return JSON.parse(JSON.stringify(this.data));
    }

    generateId(prefix, collection = []) {
        let id;
        let attempts = 0;
        do {
            id = `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
            attempts += 1;
        } while (attempts < 20 && collection.some(item => item && item.id === id));
        return id;
    }

    updateSection(section, data) {
        this.ensureData();
        const previous = this.data[section];
        this.data[section] = { ...previous, ...data };
        if (!this.save()) {
            this.data[section] = previous;
            return false;
        }
        return true;
    }

    getList(name, prefix) {
        this.ensureData();
        return this.data[name];
    }

    addRecord(name, prefix, record) {
        this.ensureData();
        const newRecord = {
            ...record,
            id: this.generateId(prefix, this.data[name]),
            status: (record && record.status) || 'active'
        };
        this.data[name].push(newRecord);
        if (!this.save()) {
            this.data[name].pop();
            return null;
        }
        return newRecord;
    }

    updateRecord(name, id, updates) {
        this.ensureData();
        const index = this.data[name].findIndex(record => record && record.id === id);
        if (index === -1) return null;
        const previous = this.data[name][index];
        this.data[name][index] = { ...previous, ...updates, id: previous.id };
        if (!this.save()) {
            this.data[name][index] = previous;
            return null;
        }
        return this.data[name][index];
    }

    deleteRecord(name, id) {
        this.ensureData();
        const index = this.data[name].findIndex(record => record && record.id === id);
        if (index === -1) return false;
        const [removed] = this.data[name].splice(index, 1);
        if (!this.save()) {
            this.data[name].splice(index, 0, removed);
            return false;
        }
        return true;
    }

    getBusiness() {
        return { ...this.getList('business') };
    }

    updateBusiness(data) {
        return this.updateSection('business', data);
    }

    getContact() {
        return { ...this.getList('contact') };
    }

    updateContact(data) {
        return this.updateSection('contact', data);
    }

    getOpeningHours() {
        return { ...this.getList('openingHours') };
    }

    updateOpeningHours(data) {
        return this.updateSection('openingHours', data);
    }

    getServices() {
        return this.getList('services');
    }

    addService(service) {
        return this.addRecord('services', 'svc', service);
    }

    updateService(id, updates) {
        return this.updateRecord('services', id, updates);
    }

    deleteService(id) {
        return this.deleteRecord('services', id);
    }

    getPackages() {
        return this.getList('packages');
    }

    addPackage(pkg) {
        return this.addRecord('packages', 'pkg', pkg);
    }

    updatePackage(id, updates) {
        return this.updateRecord('packages', id, updates);
    }

    deletePackage(id) {
        return this.deleteRecord('packages', id);
    }

    getTeam() {
        return this.getList('team');
    }

    addTeamMember(member) {
        return this.addRecord('team', 'tm', member);
    }

    updateTeamMember(id, updates) {
        return this.updateRecord('team', id, updates);
    }

    deleteTeamMember(id) {
        return this.deleteRecord('team', id);
    }

    getGallery() {
        return this.getList('gallery');
    }

    addGalleryItem(item) {
        return this.addRecord('gallery', 'gal', item);
    }

    updateGalleryItem(id, updates) {
        return this.updateRecord('gallery', id, updates);
    }

    deleteGalleryItem(id) {
        return this.deleteRecord('gallery', id);
    }

    getTestimonials() {
        return this.getList('testimonials');
    }

    addTestimonial(testimonial) {
        return this.addRecord('testimonials', 'test', testimonial);
    }

    updateTestimonial(id, updates) {
        return this.updateRecord('testimonials', id, updates);
    }

    deleteTestimonial(id) {
        return this.deleteRecord('testimonials', id);
    }

    getAppointments() {
        return this.getList('appointments');
    }

    addAppointment(appointment) {
        const record = {
            customerName: '',
            phone: '',
            email: '',
            service: '',
            date: '',
            time: '',
            message: '',
            status: 'Pending',
            ...appointment,
            createdAt: (appointment && appointment.createdAt) || new Date().toISOString()
        };
        if (!record.customerName || !record.date) {
            console.error('Invalid appointment: customerName and date are required.');
            return null;
        }
        return this.addRecord('appointments', 'apt', record);
    }

    updateAppointment(id, updates) {
        return this.updateRecord('appointments', id, updates);
    }

    deleteAppointment(id) {
        return this.deleteRecord('appointments', id);
    }

    getSocialLinks() {
        return { ...this.getList('socialLinks') };
    }

    updateSocialLinks(data) {
        return this.updateSection('socialLinks', data);
    }

    getSettings() {
        return { ...this.getList('settings') };
    }

    updateSettings(data) {
        return this.updateSection('settings', data);
    }

    isAdminAuthenticated() {
        try {
            return localStorage.getItem(AUTH_KEY) === 'true';
        } catch (e) {
            return false;
        }
    }

    adminLogin(email, password) {
        const validEmail = String(email || '').trim().toLowerCase() === ADMIN_CREDENTIALS.email;
        const validPassword = String(password || '') === ADMIN_CREDENTIALS.password;
        if (!validEmail || !validPassword) return false;
        try {
            localStorage.setItem(AUTH_KEY, 'true');
        } catch (e) {
            return false;
        }
        return true;
    }

    adminLogout() {
        try {
            localStorage.removeItem(AUTH_KEY);
        } catch (e) {
            console.error('Failed to clear admin session:', e);
        }
    }

    resetDemoData() {
        this.data = this.getDefaultData();
        return this.save();
    }
}

const storage = new StorageManager();

if (typeof window !== 'undefined') {
    window.StorageManager = StorageManager;
    window.storage = storage;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { StorageManager, storage };
}
