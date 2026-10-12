class ServicesAdmin {
    constructor() {
        this.editingId = null;
        this.init();
    }

    init() {
        this.bindEvents();
        this.loadServices();
    }

    bindEvents() {
        const form = document.getElementById('service-form');
        if (form) {
            form.addEventListener('submit', (e) => this.saveService(e));
        }

        document.getElementById('add-service-btn')?.addEventListener('click', () => this.openModal());
        document.getElementById('cancel-service-btn')?.addEventListener('click', () => this.closeModal());
    }

    loadServices() {
        const services = storage.getServices();
        this.renderServicesTable(services);
    }

    renderServicesTable(services) {
        const tbody = document.getElementById('services-tbody');
        if (!tbody) return;

        if (services.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="6" class="text-center">No services yet. Click "Add Service" to create one.</td>
                </tr>
            `;
            return;
        }

        tbody.innerHTML = services.map(service => `
            <tr>
                <td>
                    <div class="item-name">${escapeHtml(service.name)}</div>
                    <div class="item-category">${escapeHtml(service.category)}</div>
                </td>
                <td>${escapeHtml(service.description || '-')}</td>
                <td>${formatCurrency(service.price)}</td>
                <td>${service.duration} min</td>
                <td>${getStatusBadge(service.status)}</td>
                <td>
                    <div class="action-btns">
                        <button class="action-btn edit-btn" data-id="${service.id}" title="Edit">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                        </button>
                        <button class="action-btn delete-btn" data-id="${service.id}" title="Delete">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                        </button>
                    </div>
                </td>
            </tr>
        `).join('');

        tbody.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.openModal(e.currentTarget.dataset.id));
        });

        tbody.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.deleteService(e.currentTarget.dataset.id));
        });
    }

    openModal(id = null) {
        this.editingId = id;
        const modal = document.getElementById('service-modal');
        const form = document.getElementById('service-form');
        const title = document.getElementById('service-modal-title');

        if (!modal) return;

        form.reset();
        
        if (id) {
            const service = storage.getServices().find(s => s.id === id);
            if (service) {
                title.textContent = 'Edit Service';
                this.populateForm(service);
            }
        } else {
            title.textContent = 'Add Service';
            this.editingId = null;
        }

        modal.classList.add('open');
    }

    closeModal() {
        const modal = document.getElementById('service-modal');
        if (modal) modal.classList.remove('open');
        this.editingId = null;
    }

    populateForm(service) {
        const fields = ['name', 'description', 'price', 'duration', 'category', 'image', 'status'];
        fields.forEach(field => {
            const el = document.getElementById(`service-${field}`);
            if (el) el.value = service[field] || '';
        });
    }

    async saveService(e) {
        e.preventDefault();

        const data = {
            name: document.getElementById('service-name')?.value.trim(),
            description: document.getElementById('service-description')?.value.trim(),
            price: parseFloat(document.getElementById('service-price')?.value) || 0,
            duration: parseInt(document.getElementById('service-duration')?.value) || 0,
            category: document.getElementById('service-category')?.value.trim(),
            image: document.getElementById('service-image')?.value.trim(),
            status: document.getElementById('service-status')?.value
        };

        if (!data.name) {
            showToast('Service name is required', 'error');
            return;
        }

        if (data.price < 0) {
            showToast('Price must be a positive number', 'error');
            return;
        }

        let success;
        if (this.editingId) {
            success = storage.updateService(this.editingId, data);
        } else {
            const newService = storage.addService(data);
            success = !!newService;
        }

        if (success) {
            showToast(this.editingId ? 'Service updated successfully' : 'Service created successfully', 'success');
            this.closeModal();
            this.loadServices();
            this.updateDashboardStats();
        } else {
            showToast('Failed to save service', 'error');
        }
    }

    async deleteService(id) {
        const confirmed = await confirmAction('Are you sure you want to delete this service?');
        if (!confirmed) return;

        const success = storage.deleteService(id);
        if (success) {
            showToast('Service deleted successfully', 'success');
            this.loadServices();
            this.updateDashboardStats();
        } else {
            showToast('Failed to delete service', 'error');
        }
    }

    updateDashboardStats() {
        if (window.adminDashboard) {
            window.adminDashboard.loadDashboard();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.servicesAdmin = new ServicesAdmin();
});