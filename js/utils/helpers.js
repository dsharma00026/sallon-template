function escapeHtml(text) {
    if (text === null || text === undefined) return '';
    const div = document.createElement('div');
    div.textContent = String(text);
    return div.innerHTML;
}

function formatDate(dateString) {
    if (!dateString) return '-';
    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) return escapeHtml(String(dateString));
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}

function formatTime(timeString) {
    if (!timeString || typeof timeString !== 'string') return '-';
    const parts = timeString.split(':');
    if (parts.length < 2 || isNaN(parseInt(parts[0]))) return escapeHtml(timeString);
    const hour = parseInt(parts[0]);
    const minutes = parts[1] || '00';
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minutes} ${ampm}`;
}

function formatCurrency(amount) {
    const value = Number(amount);
    if (!Number.isFinite(value)) return '-';
    return new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(value);
}

function generateId(prefix) {
    return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
}

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

function setFieldValue(id, value) {
    const field = document.getElementById(id);
    if (field) field.value = value === undefined || value === null ? '' : value;
}

function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container') || createToastContainer();
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function createToastContainer() {
    const container = document.createElement('div');
    container.id = 'toast-container';
    container.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        display: flex;
        flex-direction: column;
        gap: 10px;
    `;
    document.body.appendChild(container);
    return container;
}

function confirmAction(message) {
    return new Promise(resolve => {
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        overlay.innerHTML = `
            <div class="modal confirm-modal">
                <p>${escapeHtml(message)}</p>
                <div class="modal-actions">
                    <button class="btn btn-secondary cancel-btn">Cancel</button>
                    <button class="btn btn-danger confirm-btn">Confirm</button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
        overlay.classList.add('open');
        
        overlay.querySelector('.confirm-btn').onclick = () => {
            overlay.remove();
            resolve(true);
        };
        overlay.querySelector('.cancel-btn').onclick = () => {
            overlay.remove();
            resolve(false);
        };
        overlay.onclick = (e) => {
            if (e.target === overlay) {
                overlay.remove();
                resolve(false);
            }
        };
    });
}

function showModal(title, content, onConfirm) {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `
        <div class="modal">
            <div class="modal-header">
                <h3>${escapeHtml(title)}</h3>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">${content}</div>
            <div class="modal-actions">
                <button class="btn btn-secondary modal-close-btn">Cancel</button>
                <button class="btn btn-primary modal-confirm-btn">Save</button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);
    overlay.classList.add('open');
    
    const close = () => overlay.remove();
    overlay.querySelector('.modal-close').onclick = close;
    overlay.querySelector('.modal-close-btn').onclick = close;
    overlay.querySelector('.modal-confirm-btn').onclick = () => {
        if (onConfirm) onConfirm(overlay);
        close();
    };
    overlay.onclick = (e) => {
        if (e.target === overlay) close();
    };
    
    return overlay;
}

function getDayLabel(day) {
    const days = {
        monday: 'Monday',
        tuesday: 'Tuesday',
        wednesday: 'Wednesday',
        thursday: 'Thursday',
        friday: 'Friday',
        saturday: 'Saturday',
        sunday: 'Sunday'
    };
    return days[day] || day;
}

function getStatusBadge(status) {
    const badges = {
        active: '<span class="badge badge-success">Active</span>',
        inactive: '<span class="badge badge-secondary">Inactive</span>',
        Pending: '<span class="badge badge-warning">Pending</span>',
        Confirmed: '<span class="badge badge-info">Confirmed</span>',
        Completed: '<span class="badge badge-success">Completed</span>',
        Cancelled: '<span class="badge badge-danger">Cancelled</span>'
    };
    return badges[status] || `<span class="badge">${escapeHtml(status)}</span>`;
}

function getServiceName(serviceId, services) {
    if (!Array.isArray(services)) return serviceId || '-';
    const service = services.find(s => s && s.id === serviceId);
    return service ? service.name : (serviceId || '-');
}

function getPackageName(packageId, packages) {
    if (!Array.isArray(packages)) return packageId || '-';
    const pkg = packages.find(p => p && p.id === packageId);
    return pkg ? pkg.name : (packageId || '-');
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        escapeHtml, formatDate, formatTime, formatCurrency,
        generateId, debounce, showToast, confirmAction, showModal,
        getDayLabel, getStatusBadge, getServiceName, getPackageName,
        setFieldValue
    };
}