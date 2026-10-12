class SettingsAdmin {
    constructor() {
        this.init();
    }

    init() {
        this.bindEvents();
        this.loadSettings();
        this.loadSocialLinks();
    }

    bindEvents() {
        const settingsForm = document.getElementById('settings-form');
        if (settingsForm) {
            settingsForm.addEventListener('submit', (e) => this.saveSettings(e));
        }

        const socialForm = document.getElementById('social-form');
        if (socialForm) {
            socialForm.addEventListener('submit', (e) => this.saveSocialLinks(e));
        }
    }

    loadSettings() {
        const settings = storage.getSettings();
        setFieldValue('setting-selectedTemplate', settings.selectedTemplate || 'template-1');
        setFieldValue('setting-primaryBusinessName', settings.primaryBusinessName);
        setFieldValue('setting-websiteStatus', settings.websiteStatus || 'published');
    }

    loadSocialLinks() {
        const social = storage.getSocialLinks();
        const fields = ['instagram', 'facebook', 'tiktok', 'youtube', 'googleBusiness'];
        fields.forEach(field => {
            const el = document.getElementById(`social-${field}`);
            if (el) el.value = social[field] || '';
        });
    }

    async saveSettings(e) {
        e.preventDefault();

        const data = {
            selectedTemplate: document.getElementById('setting-selectedTemplate')?.value,
            primaryBusinessName: document.getElementById('setting-primaryBusinessName')?.value.trim(),
            websiteStatus: document.getElementById('setting-websiteStatus')?.value
        };

        const success = storage.updateSettings(data);
        if (success) {
            showToast('Settings saved successfully', 'success');
        } else {
            showToast('Failed to save settings', 'error');
        }
    }

    async saveSocialLinks(e) {
        e.preventDefault();

        const fields = ['instagram', 'facebook', 'tiktok', 'youtube', 'googleBusiness'];
        const data = {};
        fields.forEach(field => {
            data[field] = document.getElementById(`social-${field}`)?.value.trim();
        });

        const success = storage.updateSocialLinks(data);
        if (success) {
            showToast('Social links saved successfully', 'success');
        } else {
            showToast('Failed to save social links', 'error');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.settingsAdmin = new SettingsAdmin();
});