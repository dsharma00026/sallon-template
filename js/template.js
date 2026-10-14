(function () {
    const BASE_PATH = 'html/templates';
    const KNOWN_TEMPLATES = [];
    for (let i = 1; i <= 10; i += 1) {
        if (i === 2 || i === 6) continue;
        KNOWN_TEMPLATES.push(`template-${i}`);
    }

    function showLoadError() {
        const root = document.getElementById('template-root');
        if (!root) return;
        root.innerHTML = '<p style="font: 16px sans-serif; padding: 2rem;">Could not load the selected template.<br><br>Open <a href="admin.html">admin.html</a> to choose a template.</p>';
    }

    function loadCss(id) {
        return new Promise((resolve) => {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = `${BASE_PATH}/${id}/${id}.css`;
            link.setAttribute('data-template-css', id);
            link.onload = () => resolve(true);
            link.onerror = () => resolve(false);
            document.head.appendChild(link);
        });
    }

    function loadScript(id) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = `${BASE_PATH}/${id}/${id}.js`;
            script.onload = () => resolve(true);
            script.onerror = () => reject(new Error('Template script load failed: ' + id));
            document.head.appendChild(script);
        });
    }

    function renderTemplate(id, data) {
        document.body.dataset.template = id;
        document.querySelectorAll('link[data-template-css]').forEach((link) => link.remove());
        window.SalonTemplates = window.SalonTemplates || {};
        delete window.SalonTemplates[id];
        return Promise.all([loadCss(id), loadScript(id)]).then(() => {
            const tpl = window.SalonTemplates[id];
            if (!tpl || typeof tpl.render !== 'function') throw new Error('Template not registered: ' + id);
            const root = document.getElementById('template-root');
            root.innerHTML = tpl.html;
            tpl.render(data);
            if (window.SiteWidgets && typeof window.SiteWidgets.enhance === 'function') {
                window.SiteWidgets.enhance(data);
            }
        });
    }

    function boot() {
        const data = window.storage.initialize();
        const settings = data.settings || {};
        let selected = settings.selectedTemplate || 'template-1';
        if (KNOWN_TEMPLATES.indexOf(selected) === -1) selected = 'template-1';
        if (data.settings && data.settings.selectedTemplate !== selected) {
            data.settings.selectedTemplate = selected;
            window.storage.updateSettings({ selectedTemplate: selected });
        }
        renderTemplate(selected, data).catch((e) => {
            console.error('Template load failed (' + selected + '):', e);
            if (selected !== 'template-1') {
                renderTemplate('template-1', data).catch((e2) => {
                    console.error('Fallback template-1 failed:', e2);
                    showLoadError();
                });
            } else {
                showLoadError();
            }
        });
    }

    document.addEventListener('DOMContentLoaded', boot);

    window.SalonLoader = { boot, KNOWN_TEMPLATES };
})();
