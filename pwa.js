const installButtons = Array.from(document.querySelectorAll('[data-install]'));
const statusBadges = Array.from(document.querySelectorAll('[data-offline]'));
const installHelpers = Array.from(document.querySelectorAll('[data-install-helper]'));
const offlinePrepButtons = Array.from(document.querySelectorAll('[data-prime-offline]'));
const offlinePrepStatuses = Array.from(document.querySelectorAll('[data-offline-status]'));
const platformCards = Array.from(document.querySelectorAll('[data-platform-download]'));
const platformConfig = window.PLATFORM_DOWNLOADS || {};

const CACHE_NAME = 'mekdepubs-cache-v7';
const OFFLINE_ASSETS = [
  './',
  './index.html',
  './highscore.html',
  './offline.html',
  './style.css',
  './script.js',
  './highScore.js',
  './distribution-config.js',
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
let offlinePrepInFlight = false;

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
      button.textContent = 'Programmany gur';
    });
    installHelpers.forEach((helper) => (helper.hidden = false));
  });

  window.addEventListener('appinstalled', () => {
    installButtons.forEach((button) => {
      button.hidden = true;
    });
    installHelpers.forEach((helper) => (helper.hidden = true));
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
      installHelpers.forEach((helper) => (helper.hidden = true));
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
    installHelpers.forEach((helper) => (helper.hidden = false));
  }, 3000);
}

function updateOfflinePrepStatus(message, isError = false) {
  if (!offlinePrepStatuses.length) return;
  offlinePrepStatuses.forEach((badge) => {
    badge.hidden = false;
    badge.textContent = message;
    badge.classList.toggle('error', isError);
  });
}

function primeOfflineAssets() {
  if (!offlinePrepButtons.length) return;
  if (!('caches' in window)) {
    updateOfflinePrepStatus('Brauzer keş goldaýanok. Täze brauzerde synanyşyň.', true);
    offlinePrepButtons.forEach((btn) => (btn.disabled = true));
    return;
  }

  updateOfflinePrepStatus('Oflýn faýllary taýýarlamak üçin düwmä basyň.');

  offlinePrepButtons.forEach((button) => {
    button.addEventListener('click', async () => {
      if (offlinePrepInFlight) return;
      offlinePrepInFlight = true;
      offlinePrepButtons.forEach((btn) => (btn.disabled = true));

      const previousText = button.textContent;
      button.textContent = 'Ýüklenýär...';

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
        offlinePrepInFlight = false;
        offlinePrepButtons.forEach((btn) => (btn.disabled = false));
        button.textContent = previousText;
      }
    });
  });
}

function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return;
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./service-worker.js')
      .then((registration) => {
        registration.addEventListener('updatefound', () => {
          updateOfflinePrepStatus('Täze wersiýa ýüklenýär...', false);
        });
        return registration;
      })
      .catch((error) => {
        console.warn('Service worker registrasiýasy şowsuz boldy', error);
      });
  });
}

function listenForServiceWorkerReady() {
  if (!navigator.serviceWorker) return;

  navigator.serviceWorker.addEventListener('message', (event) => {
    if (event.data?.type === 'PRECACHE_DONE') {
      updateOfflinePrepStatus('Faýllar oflýn ulanmak üçin taýýar.', false);
    }
  });

  navigator.serviceWorker.ready
    .then((registration) => {
      if (registration.active) {
        updateOfflinePrepStatus('PWA hyzmatkär ýüklenip, oflaýn işe taýýar.');
      }
    })
    .catch(() => {});
}

function hydratePlatformLinks() {
  if (!platformCards.length) return;

  platformCards.forEach((card) => {
    const platform = card.dataset.platformDownload;
    const config = platformConfig[platform] || {};
    const targetUrl = config.url || config.fallback;
    const badge = card.querySelector(`[data-platform-badge="${platform}"]`);
    const copy = card.querySelector(`[data-platform-copy="${platform}"]`);

    if (copy && config.copy) copy.textContent = config.copy;
    if (badge && config.badge) badge.textContent = config.badge;

    if (targetUrl) {
      card.href = targetUrl;
      card.target = '_blank';
      card.rel = 'noopener';
      card.classList.remove('is-disabled');
      card.removeAttribute('aria-disabled');
      card.removeAttribute('tabindex');
    } else {
      card.removeAttribute('href');
      card.classList.add('is-disabled');
      card.setAttribute('aria-disabled', 'true');
      card.setAttribute('tabindex', '-1');
      if (copy && !config.copy) {
        copy.textContent = 'Link taýýarlanýar. distribution-config.js arkaly goşuň.';
      }
    }
  });
}

hydratePlatformLinks();

registerServiceWorker();
wireNetworkStatus();
wireInstallPrompt();
primeOfflineAssets();
listenForServiceWorkerReady();
