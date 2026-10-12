class TestimonialsAdmin {
    constructor() {
        this.editingId = null;
        this.init();
    }

    init() {
        this.bindEvents();
        this.loadTestimonials();
    }

    bindEvents() {
        const form = document.getElementById('testimonial-form');
        if (form) {
            form.addEventListener('submit', (e) => this.saveTestimonial(e));
        }

        document.getElementById('add-testimonial-btn')?.addEventListener('click', () => this.openModal());
        document.getElementById('cancel-testimonial-btn')?.addEventListener('click', () => this.closeModal());
    }

    loadTestimonials() {
        const testimonials = storage.getTestimonials();
        this.renderTestimonialsTable(testimonials);
    }

    renderTestimonialsTable(testimonials) {
        const tbody = document.getElementById('testimonials-tbody');
        if (!tbody) return;

        if (testimonials.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="5" class="text-center">No testimonials yet. Click "Add Testimonial" to create one.</td>
                </tr>
            `;
            return;
        }

        tbody.innerHTML = testimonials.map(testimonial => `
            <tr>
                <td>
                    ${testimonial.customerImage ? `<img src="${escapeHtml(testimonial.customerImage)}" alt="${escapeHtml(testimonial.customerName)}" class="item-thumb" style="border-radius:50%;">` : '<div class="item-thumb" style="border-radius:50%;background:#e2e8f0;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:600;">' + (testimonial.customerName?.charAt(0) || '?') + '</div>'}
                </td>
                <td>
                    <div class="item-name">${escapeHtml(testimonial.customerName)}</div>
                </td>
                <td>
                    ${'★'.repeat(testimonial.rating)}${'☆'.repeat(5 - testimonial.rating)}
                </td>
                <td>${getStatusBadge(testimonial.status)}</td>
                <td>
                    <div class="action-btns">
                        <button class="action-btn edit-btn" data-id="${testimonial.id}" title="Edit">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                        </button>
                        <button class="action-btn delete-btn" data-id="${testimonial.id}" title="Delete">
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
            btn.addEventListener('click', (e) => this.deleteTestimonial(e.currentTarget.dataset.id));
        });
    }

    openModal(id = null) {
        this.editingId = id;
        const modal = document.getElementById('testimonial-modal');
        const form = document.getElementById('testimonial-form');
        const title = document.getElementById('testimonial-modal-title');

        if (!modal) return;

        form.reset();

        if (id) {
            const testimonial = storage.getTestimonials().find(t => t.id === id);
            if (testimonial) {
                title.textContent = 'Edit Testimonial';
                this.populateForm(testimonial);
            }
        } else {
            title.textContent = 'Add Testimonial';
            this.editingId = null;
        }

        modal.classList.add('open');
    }

    closeModal() {
        const modal = document.getElementById('testimonial-modal');
        if (modal) modal.classList.remove('open');
        this.editingId = null;
    }

    populateForm(testimonial) {
        setFieldValue('testimonial-customerName', testimonial.customerName);
        setFieldValue('testimonial-customerImage', testimonial.customerImage);
        setFieldValue('testimonial-rating', testimonial.rating || 5);
        setFieldValue('testimonial-message', testimonial.message);
        setFieldValue('testimonial-status', testimonial.status || 'active');
    }

    async saveTestimonial(e) {
        e.preventDefault();

        const data = {
            customerName: document.getElementById('testimonial-customerName')?.value.trim(),
            customerImage: document.getElementById('testimonial-customerImage')?.value.trim(),
            rating: parseInt(document.getElementById('testimonial-rating')?.value) || 5,
            message: document.getElementById('testimonial-message')?.value.trim(),
            status: document.getElementById('testimonial-status')?.value
        };

        if (!data.customerName) {
            showToast('Customer name is required', 'error');
            return;
        }

        if (!data.message) {
            showToast('Message is required', 'error');
            return;
        }

        if (data.rating < 1 || data.rating > 5) {
            showToast('Rating must be between 1 and 5', 'error');
            return;
        }

        let success;
        if (this.editingId) {
            success = storage.updateTestimonial(this.editingId, data);
        } else {
            const newTestimonial = storage.addTestimonial(data);
            success = !!newTestimonial;
        }

        if (success) {
            showToast(this.editingId ? 'Testimonial updated successfully' : 'Testimonial created successfully', 'success');
            this.closeModal();
            this.loadTestimonials();
            this.updateDashboardStats();
        } else {
            showToast('Failed to save testimonial', 'error');
        }
    }

    async deleteTestimonial(id) {
        const confirmed = await confirmAction('Are you sure you want to delete this testimonial?');
        if (!confirmed) return;

        const success = storage.deleteTestimonial(id);
        if (success) {
            showToast('Testimonial deleted successfully', 'success');
            this.loadTestimonials();
            this.updateDashboardStats();
        } else {
            showToast('Failed to delete testimonial', 'error');
        }
    }

    updateDashboardStats() {
        if (window.adminDashboard) {
            window.adminDashboard.loadDashboard();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.testimonialsAdmin = new TestimonialsAdmin();
});