class ContactAdmin {
    constructor() {
        this.init();
    }

    init() {
        this.bindEvents();
        this.loadData();
    }

    bindEvents() {
        const form = document.getElementById('contact-form');
        if (form) {
            form.addEventListener('submit', (e) => this.saveContact(e));
        }
    }

    loadData() {
        const contact = storage.getContact();
        this.populateForm(contact);
    }

    populateForm(data) {
        const fields = ['phone', 'email', 'whatsapp', 'address', 'googleMapsUrl'];
        fields.forEach(field => {
            const el = document.getElementById(`contact-${field}`);
            if (el) el.value = data[field] || '';
        });
    }

    async saveContact(e) {
        e.preventDefault();
        
        const data = {
            phone: document.getElementById('contact-phone')?.value.trim(),
            email: document.getElementById('contact-email')?.value.trim(),
            whatsapp: document.getElementById('contact-whatsapp')?.value.trim(),
            address: document.getElementById('contact-address')?.value.trim(),
            googleMapsUrl: document.getElementById('contact-googleMapsUrl')?.value.trim()
        };

        const success = storage.updateContact(data);
        if (success) {
            showToast('Contact information saved successfully', 'success');
        } else {
            showToast('Failed to save contact information', 'error');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.contactAdmin = new ContactAdmin();
});