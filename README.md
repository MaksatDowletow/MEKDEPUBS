# Bilimiňi syna — PWA aýratynlyklary

Bu repo diňe web brauzerinde däl, eýsem öý ekranyna goşup oflaýn režimde-de işlemäge taýýar edilen PWA konfigurasiýasyny öz içine alýar. Aşakdaky bölümde oflaýn keş, gurma bannery, platforma boýunça ýükleme serişdeleri we goşmaça natýiw paketleri taýýarlamak üçin gurluş beýan edilýär.

## Esasy faýl gurluşy
- `index.html`: PWA gurma bannery, platforma boýunça ýükleme kartlary, sorag seçgi paneli.
- `style.css`: Banneryň, gurma düwmeleriniň we platfroma kartlarynyň täze stil bloklary.
- `pwa.js`: Service worker registrasiýasy, gurma prompt-y, oflaýn keş taýýarlygy we platforma linkleriniň dinamiki dolandyrylyşy.
- `service-worker.js`: Oflýn üçin keşlenýän serişdeler we fetch strategiýasy.
- `manifest.webmanifest`: App-nyň ady, temasy, başlangyç URL we ikonalar.
- `distribution-config.js`: Android/iOS/Windows üçin APK/Store/MSIX URL/ýerli faýl konfigurasiýasy.

## PWA aýratynlyklary
- **Install banner**: `index.html`-däki `data-install` düwmeleri `pwa.js`-iň `beforeinstallprompt` signalyna baglanyşdy. Gurma prompty çykanda düwmeler açylýar, gurnalandan soň ýapylýar.
- **Oflýn keş**: `pwa.js` we `service-worker.js` faýllarynda `CACHE_NAME` wersiýasy `mekdepubs-cache-v7`. `data-prime-offline` düwmeleri arkaly ähli ilkinji faýllar öňünden keşe salynýar, deslapky statuslar `pill` elementlerinde görkezilýär.
- **Platforma boýunça ýükleme kartlary**: `data-platform-download` atributly kartlaryň URL-lary `distribution-config.js` arkaly awtomat baglanyşdyrylýar. URL ýok bolsa kart "is-disabled" görnüşinde görkezilýär.
- **Apple/Android/Windows meta bellikleri**: `index.html` we `manifest.webmanifest` arkaly öý ekranyna goşmak we tema reňki üpjün edilýär.

## Ulanyş ýörelgeleri
1. **PWA gurmak**: Brauzer `beforeinstallprompt` signalyny berse, "Programmany gur" düwmesi aktiw bolýar; ýokarda ýerleşýän install bannery ýa-da baş bannerdäki düwme arkaly gurmak mümkin.
2. **Oflýn taýýarlyk**: "Oflýn faýllary öňünden ýükle" düwmesi keşi doldurýar we `PRECACHE_DONE` habary bilen statusy täzelýär.
3. **Platforma linkleri**: `distribution-config.js`-de Android/iOS/Windows üçin `url` ýa-da `fallback` meýdanlaryna hakykatdaky APK, App Store, Microsoft Store ýa-da ýerli faýl URL-laryny ýazyp, kartlaryň işjeň bolmagyny üpjün ediň.

## Natýiw paket arhitekturasy we şablonlary
PWA binýadyny üýtgetmezden platformalara aýratyn paket taýýarlamak üçin aşakdaky gurluşy ulanyň. Faýllary `native/` atly katalogda toplamak maslahat berilýär.

### Android (Trusted Web Activity / Bubblewrap)
- Guruluş: `native/android/`
- Şablon faýl: `native/android/twa-config.json`
```json
{
  "packageId": "com.mekdepubs.app",
  "host": "mekdepubs.example.com",
  "name": "Bilimiňi syna",
  "launcherName": "Synaglar",
  "startUrl": "/index.html?source=twa",
  "display": "standalone",
  "fallbackType": "customtabs"
}
```
- Amallar:
  1. `npm install -g @bubblewrap/cli`
  2. `cd native/android && bubblewrap init --manifest=https://<siziň-domeniňiz>/manifest.webmanifest`
  3. `bubblewrap build && bubblewrap install` (APK öndürýär ýa-da Google Play-e ibermek üçin `.aab`).

### iOS (Safari Add to Home Screen / Capacitor wrapper)
- Guruluş: `native/ios/`
- Şablon faýl: `native/ios/capacitor.config.json`
```json
{
  "appId": "com.mekdepubs.app",
  "appName": "Bilimiňi syna",
  "webDir": "../../",
  "server": { "url": "https://mekdepubs.example.com", "cleartext": false }
}
```
- Amallar:
  1. `npm install @capacitor/cli @capacitor/ios`
  2. `npx cap add ios && npx cap copy`
  3. Xcode arkaly `.ipa` taýýarlap App Store-a ýerleşdiriň ýa-da MDM profili hödürläň (`distribution-config.js`-de profil URL giriziň).

### Windows (MSIX / Microsoft Store)
- Guruluş: `native/windows/`
- Şablon faýl: `native/windows/manifest.json`
```json
{
  "packageId": "MekdepUBS",
  "url": "https://mekdepubs.example.com/index.html",
  "displayName": "Bilimiňi syna",
  "publisher": "CN=YourPublisherID",
  "version": "1.0.0.0"
}
```
- Amallar:
  1. [PWABuilder](https://www.pwabuilder.com/) arkaly web manifest-den MSIX döredip, imzalaň.
  2. `distribution-config.js`-de Microsoft Store URL-ni ýa-da ýükläp bolýan MSIX linkini goýuň.

## Test etmek
- Service worker täzelenmeleriniň güýje girmegi üçin brauzerde keşi arassalaň ýa-da täze versia URL-ni (start_url) ulanyň.
- Offline synag: DevTools → Network → Offline we sahypany täzeden ýüklemek; `offline.html` görkezilse keşiň işleýändigini tassyklaýar.
- Install prompt: PWA-sy goldaýan brauzerde `beforeinstallprompt` signalynyň gelip-gelmeýändigini gözden geçiriň.
