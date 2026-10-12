class AppointmentsAdmin {
    constructor() {
        this.init();
    }

    init() {
        this.bindEvents();
        this.loadAppointments();
    }

    bindEvents() {
        document.getElementById('appointment-status-filter')?.addEventListener('change', () => this.loadAppointments());
    }

    loadAppointments() {
        const appointments = storage.getAppointments();
        const services = storage.getServices();
        const packages = storage.getPackages();
        this.renderAppointmentsTable(appointments, services, packages);
    }

    renderAppointmentsTable(appointments, services, packages) {
        const tbody = document.getElementById('appointments-tbody');
        const filter = document.getElementById('appointment-status-filter')?.value;
        
        if (!tbody) return;

        let filtered = appointments;
        if (filter && filter !== 'all') {
            filtered = appointments.filter(a => a.status === filter);
        }

        filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        if (filtered.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="8" class="text-center">No appointments found.</td>
                </tr>
            `;
            return;
        }

        tbody.innerHTML = filtered.map(apt => `
            <tr>
                <td>${escapeHtml(apt.customerName)}</td>
                <td>${escapeHtml(apt.phone)}</td>
                <td>${escapeHtml(apt.email)}</td>
                <td>
                    ${apt.service.startsWith('svc_') 
                        ? getServiceName(apt.service, services)
                        : getPackageName(apt.service, packages)
                    }
                </td>
                <td>${formatDate(apt.date)}</td>
                <td>${formatTime(apt.time)}</td>
                <td>
                    <select class="status-select" data-id="${apt.id}" data-current="${apt.status}">
                        <option value="Pending" ${apt.status === 'Pending' ? 'selected' : ''}>Pending</option>
                        <option value="Confirmed" ${apt.status === 'Confirmed' ? 'selected' : ''}>Confirmed</option>
                        <option value="Completed" ${apt.status === 'Completed' ? 'selected' : ''}>Completed</option>
                        <option value="Cancelled" ${apt.status === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
                    </select>
                </td>
                <td>
                    <div class="action-btns">
                        <button class="action-btn delete-btn" data-id="${apt.id}" title="Delete">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                        </button>
                    </div>
                </td>
            </tr>
        `).join('');

        tbody.querySelectorAll('.status-select').forEach(select => {
            select.addEventListener('change', (e) => this.updateAppointmentStatus(e.target.dataset.id, e.target.value));
        });

        tbody.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.deleteAppointment(e.currentTarget.dataset.id));
        });
    }

    async updateAppointmentStatus(id, status) {
        const success = storage.updateAppointment(id, { status });
        if (success) {
            showToast(`Appointment status updated to ${status}`, 'success');
            this.loadAppointments();
            this.updateDashboardStats();
        } else {
            showToast('Failed to update appointment status', 'error');
            this.loadAppointments();
        }
    }

    async deleteAppointment(id) {
        const confirmed = await confirmAction('Are you sure you want to delete this appointment?');
        if (!confirmed) return;

        const success = storage.deleteAppointment(id);
        if (success) {
            showToast('Appointment deleted successfully', 'success');
            this.loadAppointments();
            this.updateDashboardStats();
        } else {
            showToast('Failed to delete appointment', 'error');
        }
    }

    updateDashboardStats() {
        if (window.adminDashboard) {
            window.adminDashboard.loadDashboard();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.appointmentsAdmin = new AppointmentsAdmin();
});