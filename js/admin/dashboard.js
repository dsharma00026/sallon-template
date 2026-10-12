class AdminDashboard {
    constructor() {
        this.init();
    }

    init() {
        this.bindEvents();
        this.loadDashboard();
    }

    bindEvents() {
        document.getElementById('reset-demo-btn')?.addEventListener('click', () => this.resetDemoData());
    }

    async loadDashboard() {
        const data = storage.getData();
        
        const stats = {
            services: data.services.filter(s => s.status === 'active').length,
            packages: data.packages.filter(p => p.status === 'active').length,
            team: data.team.filter(t => t.status === 'active').length,
            testimonials: data.testimonials.filter(t => t.status === 'active').length,
            appointments: data.appointments.filter(a => a.status === 'Pending').length,
            gallery: data.gallery.filter(g => g.status === 'active').length
        };

        this.updateStatCard('stat-services', stats.services);
        this.updateStatCard('stat-packages', stats.packages);
        this.updateStatCard('stat-team', stats.team);
        this.updateStatCard('stat-testimonials', stats.testimonials);
        this.updateStatCard('stat-appointments', stats.appointments);
        this.updateStatCard('stat-gallery', stats.gallery);

        this.loadRecentAppointments(data.appointments);
    }

    updateStatCard(id, value) {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
    }

    loadRecentAppointments(appointments) {
        const container = document.getElementById('recent-appointments');
        if (!container) return;

        const recent = appointments
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .slice(0, 5);

        if (recent.length === 0) {
            container.innerHTML = '<p class="empty-state">No appointments yet</p>';
            return;
        }

        container.innerHTML = recent.map(apt => `
            <div class="appointment-item">
                <div class="apt-info">
                    <div class="apt-name">${this.escapeHtml(apt.customerName)}</div>
                    <div class="apt-meta">${formatDate(apt.date)} at ${formatTime(apt.time)}</div>
                </div>
                <div class="apt-status">${getStatusBadge(apt.status)}</div>
            </div>
        `).join('');
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    async resetDemoData() {
        const confirmed = await confirmAction('This will delete all current data and restore demo data. Are you sure?');
        if (!confirmed) return;

        storage.resetDemoData();
        showToast('Demo data restored successfully', 'success');
        this.loadDashboard();
        
        if (window.adminApp) {
            window.adminApp.refreshAllSections();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.adminDashboard = new AdminDashboard();
});