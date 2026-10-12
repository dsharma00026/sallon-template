class TeamAdmin {
    constructor() {
        this.editingId = null;
        this.init();
    }

    init() {
        this.bindEvents();
        this.loadTeam();
    }

    bindEvents() {
        const form = document.getElementById('team-form');
        if (form) {
            form.addEventListener('submit', (e) => this.saveTeamMember(e));
        }

        document.getElementById('add-team-btn')?.addEventListener('click', () => this.openModal());
        document.getElementById('cancel-team-btn')?.addEventListener('click', () => this.closeModal());
    }

    loadTeam() {
        const team = storage.getTeam();
        this.renderTeamTable(team);
    }

    renderTeamTable(team) {
        const tbody = document.getElementById('team-tbody');
        if (!tbody) return;

        if (team.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="5" class="text-center">No team members yet. Click "Add Team Member" to create one.</td>
                </tr>
            `;
            return;
        }

        tbody.innerHTML = team.map(member => `
            <tr>
                <td>
                    ${member.image ? `<img src="${escapeHtml(member.image)}" alt="${escapeHtml(member.name)}" class="item-thumb">` : '<div class="item-thumb" style="background:#e2e8f0;display:flex;align-items:center;justify-content:center;color:#94a3b8;">No Image</div>'}
                </td>
                <td>
                    <div class="item-name">${escapeHtml(member.name)}</div>
                    <div class="item-category">${escapeHtml(member.role)}</div>
                </td>
                <td>${escapeHtml(member.bio || '-')}</td>
                <td>${getStatusBadge(member.status)}</td>
                <td>
                    <div class="action-btns">
                        <button class="action-btn edit-btn" data-id="${member.id}" title="Edit">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                        </button>
                        <button class="action-btn delete-btn" data-id="${member.id}" title="Delete">
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
            btn.addEventListener('click', (e) => this.deleteTeamMember(e.currentTarget.dataset.id));
        });
    }

    openModal(id = null) {
        this.editingId = id;
        const modal = document.getElementById('team-modal');
        const form = document.getElementById('team-form');
        const title = document.getElementById('team-modal-title');

        if (!modal) return;

        form.reset();

        if (id) {
            const member = storage.getTeam().find(m => m.id === id);
            if (member) {
                title.textContent = 'Edit Team Member';
                this.populateForm(member);
            }
        } else {
            title.textContent = 'Add Team Member';
            this.editingId = null;
        }

        modal.classList.add('open');
    }

    closeModal() {
        const modal = document.getElementById('team-modal');
        if (modal) modal.classList.remove('open');
        this.editingId = null;
    }

    populateForm(member) {
        setFieldValue('team-name', member.name);
        setFieldValue('team-role', member.role);
        setFieldValue('team-bio', member.bio);
        setFieldValue('team-image', member.image);
        setFieldValue('team-status', member.status || 'active');
    }

    async saveTeamMember(e) {
        e.preventDefault();

        const data = {
            name: document.getElementById('team-name')?.value.trim(),
            role: document.getElementById('team-role')?.value.trim(),
            bio: document.getElementById('team-bio')?.value.trim(),
            image: document.getElementById('team-image')?.value.trim(),
            status: document.getElementById('team-status')?.value
        };

        if (!data.name) {
            showToast('Team member name is required', 'error');
            return;
        }

        let success;
        if (this.editingId) {
            success = storage.updateTeamMember(this.editingId, data);
        } else {
            const newMember = storage.addTeamMember(data);
            success = !!newMember;
        }

        if (success) {
            showToast(this.editingId ? 'Team member updated successfully' : 'Team member created successfully', 'success');
            this.closeModal();
            this.loadTeam();
            this.updateDashboardStats();
        } else {
            showToast('Failed to save team member', 'error');
        }
    }

    async deleteTeamMember(id) {
        const confirmed = await confirmAction('Are you sure you want to delete this team member?');
        if (!confirmed) return;

        const success = storage.deleteTeamMember(id);
        if (success) {
            showToast('Team member deleted successfully', 'success');
            this.loadTeam();
            this.updateDashboardStats();
        } else {
            showToast('Failed to delete team member', 'error');
        }
    }

    updateDashboardStats() {
        if (window.adminDashboard) {
            window.adminDashboard.loadDashboard();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.teamAdmin = new TeamAdmin();
});