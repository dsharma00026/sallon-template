(function () {
    function redirectIfAuthenticated() {
        if (document.getElementById('login-form') && storage.isAdminAuthenticated()) {
            window.location.replace('admin.html');
        }
    }

    function bindLoginForm() {
        const form = document.getElementById('login-form');
        if (!form) return;

        const emailEl = document.getElementById('login-email');
        const passwordEl = document.getElementById('login-password');
        const errorEl = document.getElementById('login-error');
        const submitBtn = document.getElementById('login-submit');

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const success = storage.adminLogin(
                emailEl ? emailEl.value : '',
                passwordEl ? passwordEl.value : ''
            );

            if (success) {
                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.textContent = 'Signing in...';
                }
                window.location.replace('admin.html');
                return;
            }

            if (errorEl) {
                errorEl.textContent = 'Invalid email or password. Please try again.';
                errorEl.hidden = false;
            }
            if (passwordEl) {
                passwordEl.value = '';
                passwordEl.focus();
            }
        });
    }

    function bindLogout() {
        document.querySelectorAll('[data-admin-logout]').forEach(function (button) {
            button.addEventListener('click', function () {
                storage.adminLogout();
                window.location.replace('login.html');
            });
        });
    }

    function init() {
        redirectIfAuthenticated();
        bindLoginForm();
        bindLogout();
    }

    document.addEventListener('DOMContentLoaded', init);

    window.AdminAuth = { redirectIfAuthenticated, bindLogout };
})();
