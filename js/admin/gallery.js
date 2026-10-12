class GalleryAdmin {
    constructor() {
        this.editingId = null;
        this.init();
    }

    init() {
        this.bindEvents();
        this.loadGallery();
    }

    bindEvents() {
        const form = document.getElementById('gallery-form');
        if (form) {
            form.addEventListener('submit', (e) => this.saveGalleryItem(e));
        }

        document.getElementById('add-gallery-btn')?.addEventListener('click', () => this.openModal());
        document.getElementById('cancel-gallery-btn')?.addEventListener('click', () => this.closeModal());
    }

    loadGallery() {
        const gallery = storage.getGallery();
        this.renderGalleryTable(gallery);
    }

    renderGalleryTable(gallery) {
        const tbody = document.getElementById('gallery-tbody');
        if (!tbody) return;

        if (gallery.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="5" class="text-center">No gallery items yet. Click "Add Gallery Item" to create one.</td>
                </tr>
            `;
            return;
        }

        tbody.innerHTML = gallery.map(item => `
            <tr>
                <td>
                    ${item.image ? `<img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" class="item-thumb">` : '<div class="item-thumb" style="background:#e2e8f0;display:flex;align-items:center;justify-content:center;color:#94a3b8;">No Image</div>'}
                </td>
                <td>
                    <div class="item-name">${escapeHtml(item.title)}</div>
                </td>
                <td>${escapeHtml(item.category || '-')}</td>
                <td>${getStatusBadge(item.status)}</td>
                <td>
                    <div class="action-btns">
                        <button class="action-btn edit-btn" data-id="${item.id}" title="Edit">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                        </button>
                        <button class="action-btn delete-btn" data-id="${item.id}" title="Delete">
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
            btn.addEventListener('click', (e) => this.deleteGalleryItem(e.currentTarget.dataset.id));
        });
    }

    openModal(id = null) {
        this.editingId = id;
        const modal = document.getElementById('gallery-modal');
        const form = document.getElementById('gallery-form');
        const title = document.getElementById('gallery-modal-title');

        if (!modal) return;

        form.reset();

        if (id) {
            const item = storage.getGallery().find(g => g.id === id);
            if (item) {
                title.textContent = 'Edit Gallery Item';
                this.populateForm(item);
            }
        } else {
            title.textContent = 'Add Gallery Item';
            this.editingId = null;
        }

        modal.classList.add('open');
    }

    closeModal() {
        const modal = document.getElementById('gallery-modal');
        if (modal) modal.classList.remove('open');
        this.editingId = null;
    }

    populateForm(item) {
        setFieldValue('gallery-image', item.image);
        setFieldValue('gallery-title', item.title);
        setFieldValue('gallery-category', item.category);
        setFieldValue('gallery-status', item.status || 'active');
    }

    async saveGalleryItem(e) {
        e.preventDefault();

        const data = {
            image: document.getElementById('gallery-image')?.value.trim(),
            title: document.getElementById('gallery-title')?.value.trim(),
            category: document.getElementById('gallery-category')?.value.trim(),
            status: document.getElementById('gallery-status')?.value
        };

        if (!data.image) {
            showToast('Image URL is required', 'error');
            return;
        }

        if (!data.title) {
            showToast('Title is required', 'error');
            return;
        }

        let success;
        if (this.editingId) {
            success = storage.updateGalleryItem(this.editingId, data);
        } else {
            const newItem = storage.addGalleryItem(data);
            success = !!newItem;
        }

        if (success) {
            showToast(this.editingId ? 'Gallery item updated successfully' : 'Gallery item created successfully', 'success');
            this.closeModal();
            this.loadGallery();
            this.updateDashboardStats();
        } else {
            showToast('Failed to save gallery item', 'error');
        }
    }

    async deleteGalleryItem(id) {
        const confirmed = await confirmAction('Are you sure you want to delete this gallery item?');
        if (!confirmed) return;

        const success = storage.deleteGalleryItem(id);
        if (success) {
            showToast('Gallery item deleted successfully', 'success');
            this.loadGallery();
            this.updateDashboardStats();
        } else {
            showToast('Failed to delete gallery item', 'error');
        }
    }

    updateDashboardStats() {
        if (window.adminDashboard) {
            window.adminDashboard.loadDashboard();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.galleryAdmin = new GalleryAdmin();
});