(function () {
    function isAuthenticated() {
        return typeof storage !== 'undefined' &&
            typeof storage.isAdminAuthenticated === 'function' &&
            storage.isAdminAuthenticated();
    }

    function adminDestination() {
        return isAuthenticated() ? 'admin.html' : 'login.html';
    }

    function openAdminPanel(event) {
        if (event && typeof event.preventDefault === 'function') event.preventDefault();
        window.location.href = adminDestination();
    }

    function bind() {
        document.addEventListener('click', function (event) {
            const trigger = event.target && event.target.closest
                ? event.target.closest('[data-admin-link]')
                : null;
            if (!trigger) return;
            openAdminPanel(event);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bind);
    } else {
        bind();
    }

    window.AdminNav = { openAdminPanel, adminDestination, isAuthenticated };
})();
