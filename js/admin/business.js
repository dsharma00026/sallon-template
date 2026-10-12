class BusinessAdmin {
    constructor() {
        this.init();
    }

    init() {
        this.bindEvents();
        this.loadData();
    }

    bindEvents() {
        const form = document.getElementById('business-form');
        if (form) {
            form.addEventListener('submit', (e) => this.saveBusiness(e));
        }
    }

    loadData() {
        const business = storage.getBusiness();
        this.populateForm(business);
    }

    populateForm(data) {
        const fields = ['name', 'tagline', 'description', 'logoUrl', 'faviconUrl', 'address', 'city', 'country'];
        fields.forEach(field => {
            const el = document.getElementById(`business-${field}`);
            if (el) el.value = data[field] || '';
        });
    }

    async saveBusiness(e) {
        e.preventDefault();
        
        const data = {
            name: document.getElementById('business-name')?.value.trim(),
            tagline: document.getElementById('business-tagline')?.value.trim(),
            description: document.getElementById('business-description')?.value.trim(),
            logoUrl: document.getElementById('business-logoUrl')?.value.trim(),
            faviconUrl: document.getElementById('business-faviconUrl')?.value.trim(),
            address: document.getElementById('business-address')?.value.trim(),
            city: document.getElementById('business-city')?.value.trim(),
            country: document.getElementById('business-country')?.value.trim()
        };

        if (!data.name) {
            showToast('Salon name is required', 'error');
            return;
        }

        const success = storage.updateBusiness(data);
        if (success) {
            showToast('Business information saved successfully', 'success');
        } else {
            showToast('Failed to save business information', 'error');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.businessAdmin = new BusinessAdmin();
});