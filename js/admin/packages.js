class PackagesAdmin {
    constructor() {
        this.editingId = null;
        this.init();
    }

    init() {
        this.bindEvents();
        this.loadPackages();
    }

    bindEvents() {
        const form = document.getElementById('package-form');
        if (form) {
            form.addEventListener('submit', (e) => this.savePackage(e));
        }

        document.getElementById('add-package-btn')?.addEventListener('click', () => this.openModal());
        document.getElementById('cancel-package-btn')?.addEventListener('click', () => this.closeModal());
    }

    loadPackages() {
        const packages = storage.getPackages();
        const services = storage.getServices();
        this.renderPackagesTable(packages, services);
        this.populateServiceCheckboxes(services);
    }

    populateServiceCheckboxes(services) {
        const container = document.getElementById('package-services');
        if (!container) return;

        const activeServices = services.filter(s => s.status === 'active');
        
        container.innerHTML = activeServices.map(service => `
            <label class="checkbox-label">
                <input type="checkbox" name="package-services" value="${service.id}">
                <span>${escapeHtml(service.name)} - ${formatCurrency(service.price)}</span>
            </label>
        `).join('');
    }

    renderPackagesTable(packages, services) {
        const tbody = document.getElementById('packages-tbody');
        if (!tbody) return;

        if (packages.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="6" class="text-center">No packages yet. Click "Add Package" to create one.</td>
                </tr>
            `;
            return;
        }

        tbody.innerHTML = packages.map(pkg => `
            <tr>
                <td>
                    <div class="item-name">${escapeHtml(pkg.name)}</div>
                </td>
                <td>${escapeHtml(pkg.description || '-')}</td>
                <td>${formatCurrency(pkg.price)}</td>
                <td>
                    ${pkg.services.map(svcId => {
                        const svc = services.find(s => s.id === svcId);
                        return svc ? `<span class="service-tag">${escapeHtml(svc.name)}</span>` : '';
                    }).join('')}
                </td>
                <td>${getStatusBadge(pkg.status)}</td>
                <td>
                    <div class="action-btns">
                        <button class="action-btn edit-btn" data-id="${pkg.id}" title="Edit">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                        </button>
                        <button class="action-btn delete-btn" data-id="${pkg.id}" title="Delete">
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
            btn.addEventListener('click', (e) => this.deletePackage(e.currentTarget.dataset.id));
        });
    }

    openModal(id = null) {
        this.editingId = id;
        const modal = document.getElementById('package-modal');
        const form = document.getElementById('package-form');
        const title = document.getElementById('package-modal-title');

        if (!modal) return;

        form.reset();
        this.loadPackages();

        if (id) {
            const pkg = storage.getPackages().find(p => p.id === id);
            if (pkg) {
                title.textContent = 'Edit Package';
                this.populateForm(pkg);
            }
        } else {
            title.textContent = 'Add Package';
            this.editingId = null;
        }

        modal.classList.add('open');
    }

    closeModal() {
        const modal = document.getElementById('package-modal');
        if (modal) modal.classList.remove('open');
        this.editingId = null;
    }

    populateForm(pkg) {
        setFieldValue('package-name', pkg.name);
        setFieldValue('package-description', pkg.description);
        setFieldValue('package-price', pkg.price);
        setFieldValue('package-image', pkg.image);
        setFieldValue('package-status', pkg.status || 'active');

        const checkboxes = document.querySelectorAll('input[name="package-services"]');
        checkboxes.forEach(cb => {
            cb.checked = pkg.services.includes(cb.value);
        });
    }

    async savePackage(e) {
        e.preventDefault();

        const selectedServices = Array.from(document.querySelectorAll('input[name="package-services"]:checked'))
            .map(cb => cb.value);

        const data = {
            name: document.getElementById('package-name')?.value.trim(),
            description: document.getElementById('package-description')?.value.trim(),
            price: parseFloat(document.getElementById('package-price')?.value) || 0,
            services: selectedServices,
            image: document.getElementById('package-image')?.value.trim(),
            status: document.getElementById('package-status')?.value
        };

        if (!data.name) {
            showToast('Package name is required', 'error');
            return;
        }

        if (data.price < 0) {
            showToast('Price must be a positive number', 'error');
            return;
        }

        let success;
        if (this.editingId) {
            success = storage.updatePackage(this.editingId, data);
        } else {
            const newPackage = storage.addPackage(data);
            success = !!newPackage;
        }

        if (success) {
            showToast(this.editingId ? 'Package updated successfully' : 'Package created successfully', 'success');
            this.closeModal();
            this.loadPackages();
            this.updateDashboardStats();
        } else {
            showToast('Failed to save package', 'error');
        }
    }

    async deletePackage(id) {
        const confirmed = await confirmAction('Are you sure you want to delete this package?');
        if (!confirmed) return;

        const success = storage.deletePackage(id);
        if (success) {
            showToast('Package deleted successfully', 'success');
            this.loadPackages();
            this.updateDashboardStats();
        } else {
            showToast('Failed to delete package', 'error');
        }
    }

    updateDashboardStats() {
        if (window.adminDashboard) {
            window.adminDashboard.loadDashboard();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.packagesAdmin = new PackagesAdmin();
});