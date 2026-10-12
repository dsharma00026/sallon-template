class OpeningHoursAdmin {
    constructor() {
        this.init();
    }

    init() {
        this.bindEvents();
        this.loadData();
    }

    bindEvents() {
        const form = document.getElementById('opening-hours-form');
        if (form) {
            form.addEventListener('submit', (e) => this.saveOpeningHours(e));
        }

        document.querySelectorAll('.day-open-checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => this.toggleDayInputs(e));
        });
    }

    loadData() {
        const hours = storage.getOpeningHours();
        const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
        
        days.forEach(day => {
            const dayData = hours[day] || { open: false, openTime: '09:00', closeTime: '19:00' };
            const checkbox = document.getElementById(`hours-${day}-open`);
            const openTime = document.getElementById(`hours-${day}-openTime`);
            const closeTime = document.getElementById(`hours-${day}-closeTime`);
            
            if (checkbox) checkbox.checked = dayData.open;
            if (openTime) openTime.value = dayData.openTime;
            if (closeTime) closeTime.value = dayData.closeTime;
            
            this.toggleInputs(day, dayData.open);
        });
    }

    toggleDayInputs(e) {
        const day = e.target.dataset.day;
        this.toggleInputs(day, e.target.checked);
    }

    toggleInputs(day, isOpen) {
        const openTime = document.getElementById(`hours-${day}-openTime`);
        const closeTime = document.getElementById(`hours-${day}-closeTime`);
        
        if (openTime) openTime.disabled = !isOpen;
        if (closeTime) closeTime.disabled = !isOpen;
    }

    async saveOpeningHours(e) {
        e.preventDefault();
        
        const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
        const data = {};
        
        days.forEach(day => {
            const checkbox = document.getElementById(`hours-${day}-open`);
            const openTime = document.getElementById(`hours-${day}-openTime`);
            const closeTime = document.getElementById(`hours-${day}-closeTime`);
            
            data[day] = {
                open: checkbox?.checked || false,
                openTime: openTime?.value || '09:00',
                closeTime: closeTime?.value || '19:00'
            };
        });

        const success = storage.updateOpeningHours(data);
        if (success) {
            showToast('Opening hours saved successfully', 'success');
        } else {
            showToast('Failed to save opening hours', 'error');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.openingHoursAdmin = new OpeningHoursAdmin();
});