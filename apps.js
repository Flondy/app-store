/* Flondy – gemeinsame App-Daten für Flondy Store und Flondy.Dev
   Stand: 27.11.2026 · Quelle: Google-Play-Entwicklerprofil, App-Store-Einträge, Projektordner.
   Nur bestätigte Store-Links eintragen. Neue App = neuer Eintrag in dieser Liste. */
window.FLONDY = {
  dev: {
    name: 'Flondy Dev.',
    mail: 'flondy.dev@gmail.com',
    play: 'https://play.google.com/store/apps/dev?id=6892475632884505831',
    appStore: 'https://apps.apple.com/de/developer/marcel-single/id6823302676',
    msStore: 'https://apps.microsoft.com/search/publisher?name=Flondy+Dev.&hl=de-DE&gl=DE',
    store: 'https://flondy.github.io/app-store/',
    site: 'https://flondy.github.io/Flondy.Dev/',
    socials: [
      { id: 'instagram', label: 'Instagram', handle: '@flondy.dev', url: 'https://www.instagram.com/flondy.dev' },
      { id: 'tiktok', label: 'TikTok', handle: '@flondy.dev', url: 'https://www.tiktok.com/@flondy.dev' },
      { id: 'tiktok', label: 'TikTok Wembi', handle: '@flondy.wembi', url: 'https://www.tiktok.com/@flondy.wembi' },
      { id: 'youtube', label: 'YouTube', handle: '@Flondy-dev', url: 'https://www.youtube.com/@Flondy-dev' },
      { id: 'facebook', label: 'Facebook', handle: 'Flondy Dev.', url: 'https://www.facebook.com/profile.php?id=61584586866428' },
      { id: 'linkedin', label: 'LinkedIn', handle: 'Flondy Development', url: 'https://www.linkedin.com/in/flondy-development-567035396/' },
      { id: 'patreon', label: 'Patreon', handle: 'Flondy', url: 'https://www.patreon.com/cw/Flondy' },
      { id: 'github', label: 'GitHub', handle: 'Flondy', url: 'https://github.com/Flondy' },
      { id: 'telegram', label: 'Telegram', handle: '@Flondy', url: 'https://t.me/Flondy' },
      { id: 'paypal', label: 'PayPal', handle: 'Spenden', url: 'https://www.paypal.com/paypalme/MSingle72' },
      { id: 'linktree', label: 'Linktree', handle: 'linktr.ee/flondy', url: 'https://linktr.ee/flondy' }
    ]
  },
  // type: game | app | web   ·   status: live | web | dev
  apps: [
    {
      id: 'check-your-love', name: 'Check your Love', full: 'Check your Love – Liebestest',
      type: 'app', category: 'Unterhaltung', status: 'live', color: '#ff5f9e', featured: true,
      tagline: 'Zwei Namen, ein Ergebnis: der liebevoll gestaltete Liebestest.',
      about: 'Gib zwei Namen ein und erhalte einen Love-Score von 0 bis 100 %. Das gleiche Paar bekommt immer das gleiche Ergebnis. Teile dein Ergebnis als Bildkarte in der Story oder im Gruppenchat.',
      features: ['Love-Score aus zwei Namen, immer gleich für dasselbe Paar', 'Verlauf und Favoriten', 'Ergebnis als Bildkarte teilen', 'Funktioniert offline', 'Premium: keine Werbung, mehr Designs und Animationen'],
      note: 'Nur zur Unterhaltung.',
      play: 'https://play.google.com/store/apps/details?id=dev.flondy.checkyourlove',
      ios: 'https://apps.apple.com/de/app/check-your-love-liebestest/id6824271482',
      landing: 'https://marcel-2025.github.io/Check-your-Love/',
      updated: '2026-10-05'
    },
    {
      id: 'app-vault', name: 'App Vault', full: 'App Vault',
      type: 'app', category: 'Effizienz', status: 'live', color: '#d8a64a', featured: true,
      tagline: 'Deine Apps. Deine Listen. Immer dabei.',
      about: 'App Vault ordnet deine App-Sammlung in eigene Listen, merkt sich auch deinstallierte Apps und führt dich beim Handywechsel Schritt für Schritt durch die Neuinstallation.',
      features: ['Apps suchen, sortieren und filtern', 'Eigene Listen mit Emoji und Farbe', 'Deinstallierte Apps bleiben in der Liste', 'Handywechsel-Assistent', 'Notizen pro App, Listen als Text teilen', 'Export und Import als JSON'],
      play: 'https://play.google.com/store/apps/details?id=dev.flondy.AV',
      ios: 'https://apps.apple.com/de/app/app-vault-apps-nutzung/id6823302674',
      landing: 'https://marcel-2025.github.io/App-Vault-Landingpage/',
      updated: '2026-10-18'
    },
    {
      id: 'drop-it', name: 'Drop It', full: 'Drop It – Stack Game',
      type: 'game', category: 'Casual', status: 'live', color: '#7b5cff', featured: true,
      tagline: 'Droppe perfekt und bau den höchsten Turm.',
      about: 'Ein Stack-Spiel mit einem Ziel: im richtigen Moment loslassen. Perfekte Drops geben Bonuseffekte, der Turm wächst, die Kamera zieht mit.',
      features: ['Neon-Design und 27 Block-Skins', 'Tägliche Turm-Challenge', '45 Erfolge und tägliche Missionen', 'Spielerlevel und Tagesbonus', 'Gratis-Geschenk alle 4 Stunden'],
      play: 'https://play.google.com/store/apps/details?id=dev.flondy.drop',
      ios: 'https://apps.apple.com/de/app/drop-it-stack-game/id6823741374',
      landing: 'https://flondy.github.io/drop-it-landing-page/',
      updated: '2026-10-14'
    },
    {
      id: 'basketball-pro', name: 'Basketball Pro', full: 'Basketball Pro',
      type: 'game', category: 'Sport', status: 'live', color: '#ff8a2b',
      tagline: 'Triff den perfekten Moment und versenke spektakuläre Würfe.',
      about: 'Ein Timing-Spiel mit einem Fingertipp: Die Wurfanzeige läuft, du tippst im richtigen Moment. Jeder Fehlwurf zählt, also ist jeder Wurf wichtig.',
      features: ['One-Tap-Steuerung mit Wurfanzeige', 'Dynamische Wurflinie', 'Mehrere Ball-Designs', 'Sound und Treffer-Feedback', 'Gemacht für kurze Runden'],
      play: 'https://play.google.com/store/apps/details?id=dev.flondy.Basketball',
      landing: 'https://flondy.github.io/Basketball-Pro/',
      updated: '2026-10-15'
    },
    {
      id: 'metro-dash', name: 'Metro Dash', full: 'Metro Dash – Endless Runner',
      type: 'game', category: 'Arcade', status: 'live', color: '#2fa8ff',
      tagline: 'Renne durch die Stadt, sammle Münzen und knacke deinen Highscore.',
      about: 'Ein schneller 3D-Endless-Runner durch Bahnhöfe und Tunnel. Wische, um die Spur zu wechseln, zu springen und zu rollen. Je länger du läufst, desto schneller wird es.',
      features: ['Wischen: Spur wechseln, springen, rollen', 'Münzen und Power-ups sammeln', 'Steigendes Tempo', 'Freischaltbare Inhalte und Upgrades', 'Bunte Stadtwelten'],
      play: 'https://play.google.com/store/apps/details?id=dev.flondy.MetroDash',
      landing: 'https://marcel-2025.github.io/Metro-Dash/',
      privacy: 'https://marcel-2025.github.io/Metro-Dash/datenschutz.html',
      updated: '2026-09-27'
    },
    {
      id: 'wembi', name: 'Wembi', full: 'Wembi der kleine Vogel',
      type: 'game', category: 'Casual', status: 'live', color: '#22d3ee',
      icon: 'https://marcel-2025.github.io/flondy-icons/wembi.webp',
      tagline: 'Hilf Wembi zu überleben und überbiete deine Freunde.',
      about: 'Ein schnelles One-Tap-Spiel für zwischendurch. Leicht zu lernen, schwer zu meistern, und es wird mit jeder Sekunde schwieriger.',
      features: ['Schnelles Gameplay für kurze Runden', 'Schwierigkeit steigt mit der Zeit', 'Highscores gegen Freunde', 'Leicht zu lernen, schwer zu meistern'],
      play: 'https://play.google.com/store/apps/details?id=dev.flondy.wembi',
      landing: 'https://flondy.github.io/wembi-landing-page/',
      updated: '2025-12-12'
    },
    {
      id: 'my-lamp', name: 'My Lamp', full: 'LED Taschenlampe Pro',
      type: 'app', category: 'Tools', status: 'live', color: '#ffb547',
      tagline: 'Die moderne Taschenlampe: hell, schnell, ohne Umwege.',
      about: 'Helles Licht mit einem Fingertipp, eine minimalistische Oberfläche und keine Zugriffe auf Fotos oder Kontakte. Mit einem Einmalkauf ist die Werbung weg.',
      features: ['Helles LED-Licht mit einem Tipp', 'Vollbild-Licht', 'Minimalistische Oberfläche', 'Keine Zugriffe auf Fotos oder Kontakte', 'Einmalkauf entfernt Werbung'],
      play: 'https://play.google.com/store/apps/details?id=dev.flondy.mylamp',
      landing: 'https://flondy.github.io/my-lamp-landing-page/',
      updated: '2026-10-09'
    },
    {
      id: 'my-notes', name: 'Notizen & Listen', full: 'Notizen & Listen (My Notes)',
      type: 'app', category: 'Tools', status: 'live', color: '#a8744a',
      icon: 'https://marcel-2025.github.io/My-Notes-privacy/store-icon.webp',
      tagline: 'Notizen und Listen festhalten, ordnen, wiederfinden.',
      about: 'Offline, ohne Konto und ohne Cloud. Sortiere Notizen per Drag & Drop, suche schnell und sieh auf einen Blick, wann du zuletzt etwas geändert hast.',
      features: ['Offline, ohne Konto', 'Drag & Drop zum Sortieren', 'Suche und Sortierung', 'Zeitstempel', 'Hell und dunkel'],
      play: 'https://play.google.com/store/apps/details?id=dev.flondy.mynotes',
      landing: 'https://marcel-2025.github.io/My-Notes-Premium/',
      privacy: 'https://marcel-2025.github.io/My-Notes-Premium/datenschutz.html',
      updated: '2026-01-17'
    },
    {
      id: 'medtracker-pro', name: 'MedTracker Pro', full: 'MedTracker Pro',
      type: 'app', category: 'Gesundheit', status: 'live', color: '#22b8a5', featured: true,
      icon: 'https://marcel-2025.github.io/MedTracker-Pro/img/store-icon.webp',
      tagline: 'Medikamenteneinnahme im Blick, Tag für Tag.',
      about: 'Hake deine Einnahmen täglich ab und sieh im Kalender, was genommen wurde und was nicht. Vergangene Zeiträume kannst du nachtragen.',
      features: ['Kalender: genommen, verpasst, offen', 'Medikamentenliste mit Vorschlägen', 'Tägliches Abhaken', 'Zeiträume nachtragen'],
      note: 'Ersetzt keine ärztliche Beratung.',
      play: 'https://play.google.com/store/apps/details?id=dev.flondy.medtracker',
      ios: 'https://apps.apple.com/de/app/medtracker-pro-medikamente/id6824628419',
      landing: 'https://marcel-2025.github.io/MedTracker-Pro/',
      privacy: 'https://flondy.github.io/MedTracker-privacy/',
      updated: '2026-03-16'
    },
    {
      id: 'ema-mind', name: 'EMA Mind', full: 'EMA Mind',
      type: 'app', category: 'Gesundheit', status: 'live', color: '#3a8fd6', featured: true,
      tagline: 'Stimmung verstehen. Muster erkennen.',
      about: 'Kurze Check-ins bis zu dreimal am Tag. Die Trends über 7, 30 und 90 Tage zeigen dir Muster. Deine Daten bleiben auf dem Gerät.',
      features: ['Bis zu 3 kurze Check-ins pro Tag', 'Trends über 7, 30 und 90 Tage', 'Erinnerungen', 'Daten bleiben lokal', 'Export als CSV oder JSON'],
      note: 'Ein Werkzeug zur Selbstbeobachtung, keine Diagnose.',
      play: 'https://play.google.com/store/apps/details?id=dev.flondy.emamind',
      ios: 'https://apps.apple.com/de/app/ema-mind-stimmung-gedanken/id6824652243',
      landing: 'https://marcel-2025.github.io/EMA-Mind/',
      privacy: 'https://marcel-2025.github.io/EMA-Mind/datenschutz.html',
      updated: '2026-09-27'
    },
    {
      id: 'lumina-ai', name: 'Lumina AI', full: 'Lumina Studio AI',
      type: 'app', category: 'KI · Foto & Video', status: 'live', color: '#c56bff',
      tagline: 'Your imagination, illuminated. KI-Fotobearbeitung und Videos in einem Studio.',
      about: 'Lumina AI vereint kreative Fotobearbeitung und KI-Videogenerierung in einem Studio: Fotos per Texteingabe bearbeiten, Bilder in bewegte Szenen verwandeln und Looks im Creative Studio kombinieren. Jeden Tag gibt es kostenlose Bilder; Credit-Pakete, Lumina Pro und Pro Lifetime sind als In-App-Käufe erhältlich.',
      features: ['Bilder und Videos aus Text erzeugen', 'Fotos mit KI bearbeiten und neu gestalten', 'Creative Studio: Outfits, Filter, Hintergründe, Licht und Posen', 'Kostenlose lokale Filter mit Vorher-nachher-Ansicht', 'Kostenlose Bilder jeden Tag, Standard und HQ bis 2K'],
      play: 'https://play.google.com/store/apps/details?id=dev.flondy.lumina',
      landing: 'https://marcel-2025.github.io/Lumina-Studio-AI/',
      updated: '2026-10-26',
      privacy: 'https://marcel-2025.github.io/Lumina-Studio-AI/app-datenschutz.html'
    },
    {
      id: 'lingo', name: 'Lingo Pro', full: 'Lingo Pro – Sprachen lernen',
      type: 'app', category: 'Lernen', status: 'live', color: '#f0a63c',
      tagline: 'Sprachen lernen in kurzen Lektionen.',
      about: 'Lingo Pro gibt es für Android bei Google Play und für Windows im Microsoft Store. Eine Sprachübung zum Ausprobieren gibt es weiterhin im Browser.',
      features: ['Kurze Lektionen und Quiz', 'Lernpfad mit Ergebnissen', 'Auch für Windows im Microsoft Store', 'Zusätzlich: Übung im Browser'],
      play: 'https://play.google.com/store/apps/details?id=dev.flondy.lingo.pro',
      ms: 'https://apps.microsoft.com/detail/9nw23nj6s3w8',
      web: 'https://lingo-basic.vercel.app/',
      landing: 'https://marcel-2025.github.io/Lingo-Pro/',
      privacy: 'https://flondy.github.io/Lingo-Pro-privacy/'
    },
    {
      id: 'music', name: 'EHHM.S Music', full: 'EHHM.S Music',
      type: 'web', category: 'Musik', status: 'web', color: '#8b5cf6',
      tagline: 'Musik-Releases als Web-App.',
      about: 'Die Musik-Web-App zeigt neue Releases direkt im Browser.',
      features: ['Läuft im Browser', 'Keine Installation'],
      web: 'https://v0-music-release-web-app.vercel.app/'
    },
    {
      id: 'live-wallpapers', name: 'Live Wallpapers', full: 'Live Wallpapers – ArtIsFantasy',
      type: 'app', category: 'Personalisierung', status: 'live', color: '#7b5bd6',
      icon: 'https://marcel-2025.github.io/Live-Wallpapers/assets/store-icon.webp',
      tagline: 'Ein bisschen Magie. Für deinen Bildschirm.',
      about: 'Fantasy-Kunst und animierte Live-Wallpaper von ArtIsFantasy: Schlösser, Wälder und Lichtwelten in Kollektionen, die sich mit den Jahreszeiten verändern.',
      features: ['Fantasy-Motive in thematischen Kollektionen', 'Animierte Live-Wallpaper für Android', 'Saisonale Designs von Halloween bis Weihnachten', 'Favoriten und Bibliothek', 'Premium-Kollektionen per Credits'],
      play: 'https://play.google.com/store/apps/details?id=dev.flondy.wallpapers',
      landing: 'https://marcel-2025.github.io/Live-Wallpapers/',
      privacy: 'https://marcel-2025.github.io/Live-Wallpapers/datenschutz.html'
    },
    {
      id: 'winter-arcade', name: 'Winter-Arcade', full: 'Winter-Arcade – Fünf Winterspiele',
      type: 'game', category: 'Arcade', status: 'dev', color: '#3f8fe0',
      icon: 'https://marcel-2025.github.io/Winter-Arcade-Landingpage/assets/store-icon.webp',
      tagline: 'Fünf Winterspiele. Ein Abenteuer.',
      about: 'Fünf Mini-Games in einer frostigen Arcade: Rolling Snowball, Pinguin-Rutschpartie, Frostbound Survivors, Pinguin-Schubsen und Echo Run. Das Spiel entsteht mit Unity 6 für Android und iPhone.',
      features: ['Fünf eigenständige Mini-Games', 'Action, Rätsel, Survival und Party', 'Kurze Runden mit Touch-Steuerung', 'Sternebewertung pro Runde', 'Für Android und iPhone geplant'],
      landing: 'https://marcel-2025.github.io/Winter-Arcade-Landingpage/',
      privacy: 'https://marcel-2025.github.io/Winter-Arcade-Landingpage/app-datenschutz.html'
    },
    {
      id: 'spukwerkstatt', name: 'Spukwerkstatt', full: 'Spukwerkstatt – Fünf Halloween-Spiele',
      type: 'game', category: 'Arcade', status: 'dev', color: '#7a3fd0',
      icon: 'https://marcel-2025.github.io/Spukwerkstatt-Landingpage/assets/images/store-icon.webp',
      tagline: 'Fünf Spiele. Eine magische Werkstatt.',
      about: 'Zaubern, zerstören, Geister fangen, Rätsel knacken und 90 Sekunden Chaos überleben: Witchstorm Lite, Smash O\'Lantern, Ghost Wrangler, Crypt Shuffle und Reaper\'s Deadline in einer Halloween-Welt. Entsteht mit Unity für Android und iPhone.',
      features: ['Fünf Halloween-Spielmodi', 'Elemente-Zauber und Fusionen', 'Kürbis-Physik und Gruft-Rätsel', '90-Sekunden-Challenges mit Zufallsregeln', 'Für Android und iPhone geplant'],
      landing: 'https://marcel-2025.github.io/Spukwerkstatt-Landingpage/',
      privacy: 'https://marcel-2025.github.io/Spukwerkstatt-Landingpage/datenschutz.html'
    },
    {
      id: 'screenshot-sorting-pro', name: 'Screenshot Sorting Pro', full: 'Screenshot Sorting Pro',
      type: 'app', category: 'Tools', status: 'live', color: '#4f7dff',
      tagline: 'Screenshots automatisch in Ordner sortieren.',
      about: 'Screenshot Sorting Pro sortiert deine Screenshots automatisch in Ordner, auf dem Handy und auf dem Tablet.',
      features: ['Automatisch sortieren', 'Handy und Tablet'],
      play: 'https://play.google.com/store/apps/details?id=dev.flondy.screenshotsortingpro',
      landing: 'https://marcel-2025.github.io/Screenshot-Sorting-Pro-landing-page/'
    },
    {
      id: 'russisch', name: 'Russisch täglich', full: 'Russisch täglich – Russisch lernen',
      type: 'app', category: 'Lernen', status: 'live', color: '#0d1f86',
      icon: 'https://marcel-2025.github.io/Wortreise-Sprachatlas/assets/premium-icon.png',
      tagline: 'Ein Gespräch am Tag. Russisch im Alltag verstehen.',
      about: '40 Lektionen von Café bis Arzt: Dialoge hören, Wörter mit Bildkarten lernen und nach Plan wiederholen. Ohne Konto, auch offline. Die Lektionen 1 bis 5 sind kostenlos. Die App ist auf Deutsch.',
      features: ['40 Lektionen aus dem Alltag', 'Hören, Verstehen, Mitlesen', 'Wörter mit Bildkarten', 'Wiederholen nach Plan', 'Ohne Konto, auch offline'],
      play: 'https://play.google.com/store/apps/details?id=dev.flondy.russisch',
      landing: 'https://marcel-2025.github.io/Wortreise-Sprachatlas/',
      privacy: 'https://marcel-2025.github.io/Wortreise-Sprachatlas/datenschutz.html',
      updated: '2026-11-12'
    },
    {
      id: 'pumpkin-hollow', name: 'Pumpkin Hollow', full: 'Pumpkin Hollow – Herbstabenteuer',
      type: 'game', category: 'Abenteuer', status: 'live', color: '#f07a1e',
      icon: 'https://marcel-2025.github.io/Pumpkin-Hollow-Landingpage/assets/icon.webp',
      tagline: 'Wo die Blätter fallen, beginnt die Magie.',
      about: 'Ein gemütliches Herbstabenteuer mit Hexenkessel, Kürbisfahrt und Nachtwache. Mit jedem Abenteuer wächst dein eigener Kürbishof.',
      features: ['Mehrere Herbst-Abenteuer in einer Welt', 'Hexenkessel, Kürbisfahrt, Nachtwache', 'Eigener Hof, der mitwächst'],
      play: 'https://play.google.com/store/apps/details?id=dev.flondy.pumpkinhollow',
      landing: 'https://marcel-2025.github.io/Pumpkin-Hollow-Landingpage/',
      privacy: 'https://marcel-2025.github.io/Pumpkin-Hollow-Landingpage/privacy.html',
      updated: '2026-11-11'
    },
    {
      id: 'alltags-kompass', name: 'Alltags Kompass', full: 'Alltags Kompass – Alltagsplaner',
      type: 'app', category: 'Effizienz', status: 'live', color: '#3b5fd0',
      icon: 'https://marcel-2025.github.io/flondy-icons/alltags-kompass.webp',
      tagline: 'Mehr Überblick. Mehr du.',
      about: 'Budget, Abos, Einkauf, Kochen und die Woche planen – an einem Ort, in deinem Tempo. Offline, ohne Konto und ohne Werbung.',
      features: ['Heute auf einen Blick', 'Monatsbudget, Fixkosten und Abos', 'Einkaufsliste aus dem Essensplan', 'Einfacher Modus mit drei großen Aktionen', 'Offline, ohne Konto'],
      play: 'https://play.google.com/store/apps/details?id=dev.flondy.alltagskompass',
      landing: 'https://marcel-2025.github.io/Alltags-Kompass-Landingpage/',
      privacy: 'https://marcel-2025.github.io/Alltags-Kompass-Landingpage/datenschutz.html',
      updated: '2026-11-13'
    },
    {
      id: 'sound-wave', name: 'Sound Wave', full: 'Sound Wave – Music Player',
      type: 'app', category: 'Musik', status: 'live', color: '#3b6bff',
      icon: 'https://marcel-2025.github.io/flondy-icons/sound-wave.webp',
      tagline: 'Dein Offline-Musikplayer.',
      about: 'Der Musikplayer für deine eigene Musiksammlung: eigene Songs, Playlists und Mixe für jede Stimmung – komplett offline, ohne Konto.',
      features: ['Eigene Musik vom Gerät importieren', 'Playlists, Favoriten und Mixe', 'Warteschlange und Sleep-Timer', 'Wiedergabe im Hintergrund', 'Neon-Design in Dunkel und Hell'],
      play: 'https://play.google.com/store/apps/details?id=dev.flondy.SW',
      landing: 'https://marcel-2025.github.io/Sound-Wave-Landingpage/',
      privacy: 'https://marcel-2025.github.io/Sound-Wave-Landingpage/datenschutz.html',
      updated: '2026-11-17'
    },
    {
      id: 'gx-launcher', name: 'GX Launcher', full: 'GX Launcher – Spielebibliothek',
      type: 'app', category: 'Tools', status: 'live', color: '#d8344f',
      icon: 'https://marcel-2025.github.io/flondy-icons/gx-launcher.webp',
      tagline: 'Deine Sammlung. Dein Universum.',
      about: 'Deine eigene Spielesammlung auf einem Bildschirm – mit Coverflow im Stil klassischer Konsolen-Menüs, Themes und Emulator-Start.',
      features: ['Coverflow, Karussell, Regal und Raster', 'Spiele werden automatisch erkannt', 'Cover offline gespeichert', '22 Designs und 11 App-Icons', 'Steuerung per Controller'],
      play: 'https://play.google.com/store/apps/details?id=dev.flondy.gxlauncher',
      landing: 'https://marcel-2025.github.io/GX-Landingpage/',
      privacy: 'https://marcel-2025.github.io/GX-Landingpage/datenschutz.html',
      updated: '2026-11-15'
    },
    {
      id: 'dayora', name: 'Licht Rhythmus', full: 'Licht Rhythmus – Licht & Schlaf (Dayora)',
      type: 'app', category: 'Gesundheit', status: 'live', color: '#d39a4e',
      icon: 'https://marcel-2025.github.io/flondy-icons/dayora.webp',
      tagline: 'Finde deinen Rhythmus. Nutze dein Tageslicht.',
      about: 'Sonnenzeiten, Tageslicht-Simulator und Schlafprotokoll – damit du deinen Rhythmus ohne Druck verstehst. Offline, ohne Konto. Ersetzt keine ärztliche Beratung.',
      features: ['Sonnenaufgang, Tageslänge, Dämmerung', 'Interaktiver Sonnenverlauf', 'Jahreskarte des Tageslichts', 'Schlafprotokoll ohne Bewertung', 'Rhythmus-Planer in kleinen Schritten'],
      play: 'https://play.google.com/store/apps/details?id=dev.flondy.dayora',
      landing: 'https://marcel-2025.github.io/Dayora-Landingpage/',
      privacy: 'https://marcel-2025.github.io/Dayora-Landingpage/datenschutz.html',
      updated: '2026-11-14'
    },
    {
      id: 'geburtstage', name: 'Geburtstage', full: 'Geburtstage: Kalender & Timer',
      type: 'app', category: 'Tools', status: 'live', color: '#7b5bff',
      icon: 'https://marcel-2025.github.io/flondy-icons/geburtstage.webp',
      tagline: 'Nie wieder einen Geburtstag vergessen.',
      about: 'Geburtstage, Jahrestage und eigene Anlässe mit Erinnerungen, Countdown und Glückwunsch-Vorlagen. Ohne Werbung, ohne Konto, komplett offline.',
      features: ['Import aus Kontakten und Kalender', 'Erinnerungen am Tag oder vorher', '40 Feiertage mit Live-Countdown', 'Glückwunsch-Vorlagen zum Teilen', 'Zwei Widgets, 10 Skins'],
      play: 'https://play.google.com/store/apps/details?id=dev.flondy.geburtstage',
      landing: 'https://marcel-2025.github.io/Geburtstage/',
      privacy: 'https://marcel-2025.github.io/Geburtstage/datenschutz.html',
      updated: '2026-11-18'
    },
    {
      id: 'cinewave', name: 'CineWave', full: 'CineWave – Filme & Videos',
      type: 'app', category: 'Unterhaltung', status: 'live', color: '#ff4f7a',
      icon: 'https://marcel-2025.github.io/Cine-Wave-Landingpage/assets/icons/04_CineWave_Popcorn_512.png',
      tagline: 'Dein eigenes Kino für lokale Videos.',
      about: 'CineWave macht aus deinen Videoordnern ein eigenes Kino: Filme, Serien und eigene Videos mit Plakaten, Player-Skins und Designwelten. Ohne Cloud und ohne Konto – alles bleibt auf deinem Gerät. Schwester-App von Sound Wave.',
      features: ['Lokale Bibliothek: Ordner hinzufügen, fertig', 'Filme, Serien und eigene Videos', 'Player mit Skins', 'Artwork Studio für Plakate', 'Mehrere Designwelten'],
      play: 'https://play.google.com/store/apps/details?id=dev.flondy.cinewave',
      landing: 'https://marcel-2025.github.io/Cine-Wave-Landingpage/',
      privacy: 'https://marcel-2025.github.io/Cine-Wave-Landingpage/datenschutz.html',
      updated: '2026-11-20'
    },
    {
      id: 'hexora', name: 'Hexora', full: 'Hexora – Reverse Engineering lernen',
      type: 'app', category: 'Lernen', status: 'dev', color: '#3ee08f',
      icon: 'https://marcel-2025.github.io/Hexora/assets/icon.png',
      tagline: 'Reverse Engineering verstehen.',
      about: 'Lies deinen ersten Hex-Dump, erkenne Dateiformate und entdecke, wie Android-Apps aufgebaut sind – Schritt für Schritt mit echten Werkzeugen. Die Android-Version ist in Vorbereitung.',
      features: ['36 Lektionen', '16 Werkzeuge, darunter ein lokaler Hex-Viewer', '20 Rätsel im CTF-Stil', 'Grundkurs kostenlos'],
      landing: 'https://marcel-2025.github.io/Hexora/',
      privacy: 'https://marcel-2025.github.io/Hexora/datenschutz.html'
    },
    {
      id: 'riff', name: 'Riff', full: 'Riff – Musik lernen',
      type: 'app', category: 'Lernen', status: 'dev', color: '#ff7a2f',
      icon: 'https://marcel-2025.github.io/Riff/media/icon.webp',
      tagline: 'Du spielst. Riff hört zu.',
      about: 'Spiele Songs auf Gitarre, Bass, Klavier oder Ukulele. Riff zeigt dir beim Spielen, ob du den richtigen Ton zur richtigen Zeit triffst. In Entwicklung für Windows und Android.',
      features: ['4 Instrumente', '29 Songs und Übungen', '22 Lektionen', '5 Arcade-Spiele', 'Stimmgerät und Metronom'],
      landing: 'https://marcel-2025.github.io/Riff/',
      privacy: 'https://marcel-2025.github.io/Riff/datenschutz.html'
    },
    {
      id: 'snap-chronik', name: 'Snap Chronik', full: 'Snap Chronik – Deine Fotos als Zeitreise',
      type: 'app', category: 'Foto', status: 'dev', color: '#f5e400',
      icon: 'https://marcel-2025.github.io/Snap-Chronik/assets/icon.png',
      tagline: 'Deine Fotos als Zeitreise.',
      about: 'Blättere durch deine Fotos, Videos und Snapchat-Memories – Tag für Tag, direkt auf deinem Gerät. Für Android und Windows.',
      features: ['Fotokalender und Feed', '„Damals & heute“-Rückblicke', 'Tablet als Bilderrahmen', 'Duplikate finden und Daten korrigieren'],
      landing: 'https://marcel-2025.github.io/Snap-Chronik/',
      privacy: 'https://marcel-2025.github.io/Snap-Chronik/datenschutz.html'
    },
    {
      id: 'velvet-hearts', name: 'Velvet Hearts', full: 'Velvet Hearts – Relationship & Adventure',
      type: 'game', category: 'Simulation', status: 'dev', color: '#e9a3b8',
      icon: 'https://marcel-2025.github.io/Velvet-Hearts/assets/logo.svg',
      tagline: 'Dein Leben. Deine Geschichte.',
      about: 'Liebe, Reisen, Fashion und Luxus: Gestalte dein Zuhause, lerne fiktive Charaktere kennen und entdecke 220 Reiseziele. Für Erwachsene, in Entwicklung für PC und Android.',
      features: ['Beziehungen und Storys', 'Fashion und Garderobe', '220 Reiseziele', '76 Immobilien zum Einrichten', 'Offline spielbar'],
      landing: 'https://marcel-2025.github.io/Velvet-Hearts/',
      privacy: 'https://marcel-2025.github.io/Velvet-Hearts/datenschutz.html'
    }
  ]
};

/* English texts (DE stays the default). Used by the Flondy Store and Flondy.Dev when the page language is English. */
(function () {
  var EN = {
    'check-your-love': {tagline:'Two names, one result: the lovingly designed love test.', about:'Enter two names and get a love score from 0 to 100 %. The same pair always gets the same result. Share your result as an image card in your story or group chat.', features:['Love score from two names, always the same for the same pair','History and favourites','Share the result as an image card','Works offline','Premium: no ads, more designs and animations'], note:'For entertainment only.'},
    'app-vault': {tagline:'Your apps. Your lists. Always with you.', about:'App Vault sorts your app collection into your own lists, remembers uninstalled apps and guides you step by step through reinstalling when you switch phones.', features:['Search, sort and filter apps','Your own lists with emoji and colour','Uninstalled apps stay on the list','Phone-switch assistant','Notes per app, share lists as text','Export and import as JSON']},
    'drop-it': {tagline:'Drop it perfectly and build the tallest tower.', about:'A stacking game with one goal: let go at the right moment. Perfect drops give bonus effects, the tower grows and the camera follows.', features:['Neon design and 27 block skins','Daily tower challenge','45 achievements and daily missions','Player level and daily bonus','Free gift every 4 hours']},
    'basketball-pro': {tagline:'Hit the perfect moment and sink spectacular shots.', about:'A one-tap timing game: the shot meter runs, you tap at the right moment. Every miss counts, so every shot matters.', features:['One-tap controls with shot meter','Dynamic shot line','Several ball designs','Sound and hit feedback','Made for short rounds']},
    'metro-dash': {tagline:'Run through the city, collect coins and beat your high score.', about:'A fast 3D endless runner through stations and tunnels. Swipe to switch lanes, jump and roll. The longer you run, the faster it gets.', features:['Swipe: switch lanes, jump, roll','Collect coins and power-ups','Rising speed','Unlockable content and upgrades','Colourful city worlds']},
    'wembi': {tagline:'Help Wembi survive and beat your friends.', about:'A fast one-tap game for in between. Easy to learn, hard to master, and it gets harder every second.', features:['Fast gameplay for short rounds','Difficulty rises over time','High scores against friends','Easy to learn, hard to master']},
    'my-lamp': {tagline:'The modern flashlight: bright, fast, straight to the point.', about:'Bright light with one tap, a minimalist interface and no access to photos or contacts. A one-time purchase removes the ads.', features:['Bright LED light with one tap','Full-screen light','Minimalist interface','No access to photos or contacts','One-time purchase removes ads']},
    'my-notes': {tagline:'Capture, organise and find notes and lists.', about:'Offline, without an account and without a cloud. Sort notes by drag & drop, search quickly and see at a glance when you last changed something.', features:['Offline, no account','Drag & drop sorting','Search and sorting','Timestamps','Light and dark']},
    'medtracker-pro': {tagline:'Keep track of your medication, day by day.', about:'Tick off your doses every day and see in the calendar what was taken and what was not. You can fill in past periods later.', features:['Calendar: taken, missed, open','Medication list with suggestions','Daily check-off','Fill in past periods'], note:'Does not replace medical advice.'},
    'ema-mind': {tagline:'Understand your mood. Spot patterns.', about:'Short check-ins up to three times a day. Trends over 7, 30 and 90 days show you patterns. Your data stays on your device.', features:['Up to 3 short check-ins per day','Trends over 7, 30 and 90 days','Reminders','Data stays local','Export as CSV or JSON'], note:'A self-observation tool, not a diagnosis.'},
    'lumina-ai': {tagline:'Your imagination, illuminated. AI photo editing and videos in one studio.', about:'Lumina AI combines creative photo editing and AI video generation in one studio: edit photos with text prompts, turn images into moving scenes and combine looks in the Creative Studio. Free images every day; credit packs, Lumina Pro and Pro Lifetime are available as in-app purchases.', features:['Create images and videos from text','Edit and restyle photos with AI','Creative Studio: outfits, filters, backgrounds, light and poses','Free local filters with before/after view','Free images every day, standard and HQ up to 2K']},
    'lingo': {tagline:'Learn languages in short lessons.', about:'Lingo Pro is available for Android on Google Play and for Windows in the Microsoft Store.', features:['Short lessons and quizzes','Learning path with results','Also for Windows in the Microsoft Store','Plus: exercise in the browser']},
    'music': {tagline:'Music releases as a web app.', about:'The music web app shows new releases right in the browser.', features:['Runs in the browser','No installation']},
    'live-wallpapers': {tagline:'A little magic. For your screen.', about:'Fantasy art and animated live wallpapers by ArtIsFantasy: castles, forests and worlds of light in collections that change with the seasons.', features:['Fantasy motifs in themed collections','Animated live wallpapers for Android','Seasonal designs from Halloween to Christmas','Favourites and library','Premium collections with credits']},
    'winter-arcade': {tagline:'Five winter games. One adventure.', about:'Five mini games in a frosty arcade: Rolling Snowball, Penguin Slide, Frostbound Survivors, Penguin Push and Echo Run. Made with Unity 6 for Android and iPhone.', features:['Five standalone mini games','Action, puzzle, survival and party','Short rounds with touch controls','Star rating per round','Planned for Android and iPhone']},
    'spukwerkstatt': {tagline:'Five games. One magical workshop.', about:'Cast spells, smash, catch ghosts, crack puzzles and survive 90 seconds of chaos: Witchstorm Lite, Smash O\'Lantern, Ghost Wrangler, Crypt Shuffle and Reaper\'s Deadline in a Halloween world. Made with Unity for Android and iPhone.', features:['Five Halloween game modes','Element spells and fusions','Pumpkin physics and crypt puzzles','90-second challenges with random rules','Planned for Android and iPhone']},
    'screenshot-sorting-pro': {tagline:'Sort screenshots into folders automatically.', about:'Screenshot Sorting Pro automatically sorts your screenshots into folders, on phone and tablet.', features:['Sorts automatically','Phone and tablet']},
    'russisch': {tagline:'One conversation a day. Understand Russian in everyday life.', about:'40 lessons from café to doctor: listen to dialogues, learn words with picture cards and review on schedule. No account, works offline. Lessons 1 to 5 are free. The app is in German.', features:['40 everyday lessons','Listen, understand, read along','Words with picture cards','Review on schedule','No account, works offline']},
    'pumpkin-hollow': {tagline:'Where the leaves fall, the magic begins.', about:'A cosy autumn adventure with a witch\'s cauldron, pumpkin rides and night watch. Your own pumpkin farm grows with every adventure.', features:['Several autumn adventures in one world','Cauldron, pumpkin ride, night watch','Your own farm that grows with you']},
    'alltags-kompass': {tagline:'More overview. More you.', about:'Budget, subscriptions, shopping, cooking and planning your week – in one place, at your own pace. Offline, without an account and without ads.', features:['Today at a glance','Monthly budget, fixed costs and subscriptions','Shopping list from your meal plan','Simple mode with three big actions','Offline, no account']},
    'sound-wave': {tagline:'Your offline music player.', about:'The music player for your own music collection: your songs, playlists and mixes for every mood – completely offline, no account.', features:['Import your own music from the device','Playlists, favourites and mixes','Queue and sleep timer','Background playback','Neon design in dark and light']},
    'gx-launcher': {tagline:'Your collection. Your universe.', about:'Your own game collection on one screen – with cover flow in the style of classic console menus, themes and emulator launch.', features:['Cover flow, carousel, shelf and grid','Games are detected automatically','Covers saved offline','22 designs and 11 app icons','Controller support']},
    'dayora': {tagline:'Find your rhythm. Use your daylight.', about:'Sun times, daylight simulator and sleep log – so you understand your rhythm without pressure. Offline, no account. Does not replace medical advice.', features:['Sunrise, day length, twilight','Interactive sun path','Yearly daylight map','Sleep log without ratings','Rhythm planner in small steps']},
    'geburtstage': {tagline:'Never forget a birthday again.', about:'Birthdays, anniversaries and your own occasions with reminders, countdown and greeting templates. No ads, no account, completely offline.', features:['Import from contacts and calendar','Reminders on the day or before','40 holidays with live countdown','Greeting templates to share','Two widgets, 10 skins']},
    'cinewave': {tagline:'Your own cinema for local videos.', about:'CineWave turns your video folders into your own cinema: films, series and your own videos with posters, player skins and design worlds. No cloud, no account – everything stays on your device. Sister app of Sound Wave.', features:['Local library: add a folder, done','Films, series and your own videos','Player with skins','Artwork Studio for posters','Several design worlds']},
    'hexora': {tagline:'Understand reverse engineering.', about:'Read your first hex dump, recognise file formats and discover how Android apps are built – step by step with real tools. The Android version is in preparation.', features:['36 lessons','16 tools, including a local hex viewer','20 CTF-style puzzles','Basic course free']},
    'riff': {tagline:'You play. Riff listens.', about:'Play songs on guitar, bass, piano or ukulele. While you play, Riff shows you whether you hit the right note at the right time. In development for Windows and Android.', features:['4 instruments','29 songs and exercises','22 lessons','5 arcade games','Tuner and metronome']},
    'snap-chronik': {tagline:'Your photos as a journey through time.', about:'Browse your photos, videos and Snapchat memories – day by day, right on your device. For Android and Windows.', features:['Photo calendar and feed','“Then & now” flashbacks','Tablet as a picture frame','Find duplicates and fix dates']},
    'velvet-hearts': {tagline:'Your life. Your story.', about:'Love, travel, fashion and luxury: furnish your home, meet fictional characters and discover 220 destinations. For adults, in development for PC and Android.', features:['Relationships and stories','Fashion and wardrobe','220 destinations','76 properties to furnish','Playable offline']}
  };
  var cat = {Tools:'Tools', Lernen:'Learning', Spiel:'Game', Gesundheit:'Health', Effizienz:'Productivity', Arcade:'Arcade', Casual:'Casual', Foto:'Photo', Musik:'Music', Sport:'Sports', Unterhaltung:'Entertainment', Abenteuer:'Adventure', Simulation:'Simulation', Personalisierung:'Personalisation', 'KI · Foto & Video':'AI · Photo & Video'};
  (window.FLONDY.apps || []).forEach(function (a) { if (EN[a.id]) { a.en = EN[a.id]; a.en.category = cat[a.category] || a.category; } });
  /* Text in the current language: FLONDY.t(app, 'tagline', 'en') */
  window.FLONDY.t = function (a, key, lang) { return (lang === 'en' && a.en && a.en[key] != null) ? a.en[key] : a[key]; };
})();
