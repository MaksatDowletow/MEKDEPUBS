const installButtons = Array.from(document.querySelectorAll('[data-install]'));
const statusBadges = Array.from(document.querySelectorAll('[data-offline]'));
const installHelper = document.querySelector('[data-install-helper]');
const offlinePrepButton = document.querySelector('[data-prime-offline]');
const offlinePrepStatus = document.querySelector('[data-offline-status]');

const CACHE_NAME = 'mekdepubs-cache-v5';
const OFFLINE_ASSETS = [
  './',
  './index.html',
  './highscore.html',
  './style.css',
  './script.js',
  './highScore.js',
  './pwa.js',
  './question-bank.js',
  './question-bank.json',
  './ubs-loader.js',
  './UBS2synpTESTA.js',
  './UBS2synpTESTB.js',
  './UBS3njisynpTESTA.js',
  './UBS3njisynpTESTB.js',
  './UBS4njisynpTESTA.js',
  './UBS4njisynpTESTB.js',
  './UBS5njiSynp.js',
  './UBT8TestA.js',
  './UBT8TestB.js',
  './UBT9synpTestA.js',
  './UBT9synpTestB.js',
  './UBT10TestA.js',
  './UBT10TestB.js',
  './UBT11TestA.js',
  './UBT11TestB.js',
  './manifest.webmanifest',
  './icons/icon-192.svg',
  './icons/icon-512.svg'
];

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
      button.textContent = 'Goşmaça: oflýn taýdan gur';
    });
    if (installHelper) installHelper.hidden = false;
  });

  window.addEventListener('appinstalled', () => {
    installButtons.forEach((button) => {
      button.hidden = true;
    });
    if (installHelper) installHelper.hidden = true;
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
      if (installHelper) installHelper.hidden = true;
    });
  });

  setTimeout(() => {
    const installed = window.matchMedia('(display-mode: standalone)').matches;
    if (promptEvent || installed) return;
    installButtons.forEach((btn) => {
      btn.hidden = false;
      btn.disabled = true;
      btn.textContent = 'Brauzerden "Guruň" menýusyny ulanyň';
    });
    if (installHelper) installHelper.hidden = false;
  }, 3000);
}

function updateOfflinePrepStatus(message, isError = false) {
  if (!offlinePrepStatus) return;
  offlinePrepStatus.hidden = false;
  offlinePrepStatus.textContent = message;
  offlinePrepStatus.classList.toggle('error', isError);
}

function primeOfflineAssets() {
  if (!offlinePrepButton) return;
  if (!('caches' in window)) {
    updateOfflinePrepStatus('Brauzer keş goldaýanok. Täze brauzerde synanyşyň.', true);
    return;
  }

  updateOfflinePrepStatus('Oflýn faýllary taýýarlamak üçin düwmä basyň.');

  offlinePrepButton.addEventListener('click', async () => {
    offlinePrepButton.disabled = true;
    const previousText = offlinePrepButton.textContent;
    offlinePrepButton.textContent = 'Ýüklenýär...';

    try {
      const cache = await caches.open(CACHE_NAME);
      await cache.addAll(OFFLINE_ASSETS);

      if (navigator.serviceWorker?.ready) {
        const registration = await navigator.serviceWorker.ready;
        registration.active?.postMessage({ type: 'PRECACHE' });
      }

      updateOfflinePrepStatus('Faýllar oflýn ulanmak üçin taýýarlanyldy.');
    } catch (error) {
      console.error('Keş taýýarlamak şowsuz boldy', error);
      updateOfflinePrepStatus('Keş taýýarlamak şowsuz boldy. Dowam etmek üçin täzeden synanyşyň.', true);
    } finally {
      offlinePrepButton.disabled = false;
      offlinePrepButton.textContent = previousText;
    }
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
primeOfflineAssets();
