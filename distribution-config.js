// Platforma degişli ýükläp bolýan desgalary şu konfigurasiýa arkaly dolandyryň.
// URL-leri hakykaty bilen çalyşyň, ýok bolsa kartlar "Ýakynda elýeter" ýagdaýynda bolar.
window.PLATFORM_DOWNLOADS = {
  android: {
    label: 'Android',
    url: null, // mysal: 'https://play.google.com/store/apps/details?id=com.mekdepubs.app'
    fallback: null, // mysal: './downloads/mekdepubs.apk'
    badge: 'APK ýa-da Play Store',
    copy: 'APK ýa-da Google Play linkiňizi şu ýere ýazyň we ulanyjylara gönüden-göni ýüklemäge mümkinçilik beriň.'
  },
  ios: {
    label: 'iOS',
    url: null, // mysal: 'https://apps.apple.com/app/id000000'
    fallback: null, // mysal: './downloads/mekdepubs.mobileconfig'
    badge: 'App Store / profil',
    copy: 'App Store sahypasy ýa-da gurma profili arkaly Safari brauzerinden göni gurmak mümkinçiligi.'
  },
  windows: {
    label: 'Windows',
    url: null, // mysal: 'https://www.microsoft.com/store/apps/9NZ000000'
    fallback: null, // mysal: './downloads/mekdepubs.msix'
    badge: 'MSIX ýa-da Store',
    copy: 'MSIX/EXE ýa-da Microsoft Store linki arkaly oflaýn/kompaniýa paýlama kanallaryny goldaň.'
  }
};
