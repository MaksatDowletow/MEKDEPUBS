const installButtons = Array.from(document.querySelectorAll('[data-install]'));
const statusBadges = Array.from(document.querySelectorAll('[data-offline]'));
let deferredPrompt;

function updateNetworkBadge() {
  if (!statusBadges.length) return;
  const online = navigator.onLine;
  statusBadges.forEach((badge) => {
    badge.textContent = online ? 'Onlaýn režim' : 'Oflayn taýýarlanýar';
    badge.classList.toggle('is-offline', !online);
    badge.setAttribute('aria-label', online ? 'Onlaýn' : 'Oflayn');
  });
}

function wireNetworkStatus() {
  if (!statusBadges.length) return;
  window.addEventListener('online', updateNetworkBadge);
  window.addEventListener('offline', updateNetworkBadge);
  updateNetworkBadge();
}

function wireInstallPrompt() {
  if (!installButtons.length) return;
  installButtons.forEach((button) => {
    button.hidden = true;
  });
  let promptEvent;

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    promptEvent = event;
    deferredPrompt = event;
    installButtons.forEach((button) => {
      button.hidden = false;
      button.disabled = false;
    });
  });

  installButtons.forEach((button) => {
    button.addEventListener('click', async () => {
      if (!promptEvent) return;
      button.disabled = true;
      promptEvent.prompt();
      await promptEvent.userChoice.catch(() => {});
      promptEvent = null;
      deferredPrompt = null;
      installButtons.forEach((btn) => {
        btn.hidden = true;
      });
    });
  });
}

function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return;
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').catch((error) => {
      console.warn('Service worker registrasiýasy şowsuz boldy', error);
    });
  });
}

registerServiceWorker();
wireNetworkStatus();
wireInstallPrompt();
