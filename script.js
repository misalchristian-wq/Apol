const password = document.querySelector('#password');
const toggle = document.querySelector('.password-toggle');
const status = document.querySelector('#form-status');
const dialog = document.querySelector('#info-dialog');

toggle.addEventListener('click', () => {
  const visible = password.type === 'password';
  password.type = visible ? 'text' : 'password';
  toggle.setAttribute('aria-label', visible ? 'Hide password' : 'Show password');
  toggle.setAttribute('aria-pressed', String(visible));
});

function showInfo(title, copy) {
  document.querySelector('#dialog-title').textContent = title;
  document.querySelector('#dialog-copy').textContent = copy;
  dialog.showModal();
}

document.querySelector('#login-form').addEventListener('submit', (event) => {
  event.preventDefault();
  status.textContent = 'You’re all set to connect. This is a UI preview; sign-in will be available when an authentication service is connected.';
  status.hidden = false;
});

document.querySelector('#forgot-password').addEventListener('click', () => {
  showInfo('A fresh start.', 'Password recovery will be available when an authentication service is connected.');
});

document.querySelector('#google-signin').addEventListener('click', () => {
  showInfo('Continue with Google', 'Google sign-in will be available when a Google authentication provider is connected.');
});

document.querySelector('#signup-link').addEventListener('click', (event) => {
  event.preventDefault();
  showInfo('Room to grow.', 'Community registration will be available when an authentication service is connected.');
});

document.querySelectorAll('[data-info]').forEach((button) => {
  button.addEventListener('click', () => showInfo(button.dataset.info, 'This is a design preview. Add your published policy here before launching the service.'));
});

document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) {
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();
