/* Flondy – gemeinsame App-Daten für Flondy Store und Flondy.Dev
   Stand: 21.10.2026 · Quelle: Google-Play-Entwicklerprofil, App-Store-Einträge, Projektordner.
   Nur bestätigte Store-Links eintragen. Neue App = neuer Eintrag in dieser Liste. */
window.FLONDY = {
  dev: {
    name: 'Flondy Dev.',
    mail: 'flondy.dev@gmail.com',
    play: 'https://play.google.com/store/apps/dev?id=6892475632884505831',
    appStore: 'https://apps.apple.com/de/developer/marcel-single/id6823302676',
    store: 'https://flondy.github.io/app-store/',
    site: 'https://flondy.github.io/Flondy.Dev/',
    socials: [
      { id: 'instagram', label: 'Instagram', handle: '@flondy.dev', url: 'https://www.instagram.com/flondy.dev' },
      { id: 'tiktok', label: 'TikTok', handle: '@flondy.dev', url: 'https://www.tiktok.com/@flondy.dev' },
      { id: 'tiktok', label: 'TikTok Wembi', handle: '@flondy.wembi', url: 'https://www.tiktok.com/@flondy.wembi' },
      { id: 'youtube', label: 'YouTube', handle: '@Flondy-dev', url: 'https://www.youtube.com/@Flondy-dev' },
      { id: 'facebook', label: 'Facebook', handle: 'Flondy Dev.', url: 'https://www.facebook.com/profile.php?id=61584586866428' },
      { id: 'x', label: 'X', handle: '@Flondy_Dev', url: 'https://x.com/Flondy_Dev' },
      { id: 'linkedin', label: 'LinkedIn', handle: 'Flondy Development', url: 'https://www.linkedin.com/in/flondy-development-567035396/' },
      { id: 'patreon', label: 'Patreon', handle: 'Flondy', url: 'https://www.patreon.com/cw/Flondy' },
      { id: 'github', label: 'GitHub', handle: 'Flondy', url: 'https://github.com/Flondy' },
      { id: 'linktree', label: 'Linktree', handle: 'linktr.ee/Flondy', url: 'https://linktr.ee/Flondy' }
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
      landing: 'https://flondy.github.io/my-notes-landing-page/',
      updated: '2026-01-17'
    },
    {
      id: 'medtracker-pro', name: 'MedTracker Pro', full: 'MedTracker Pro',
      type: 'app', category: 'Gesundheit', status: 'live', color: '#22b8a5', featured: true,
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
      id: 'lumina-ai', name: 'Lumina AI', full: 'Lumina AI',
      type: 'app', category: 'KI · Foto & Video', status: 'dev', color: '#c56bff',
      tagline: 'Your imagination, illuminated. KI-Fotobearbeitung und Videos in einem Studio.',
      about: 'Lumina AI vereint kreative Fotobearbeitung und KI-Videogenerierung in einem Studio: Fotos per Texteingabe bearbeiten, Bilder in bewegte Szenen verwandeln und den eigenen Look mit Filtern, Formaten und App-Icons gestalten. Die App ist in Entwicklung; die Website zeigt eine Vorschau.',
      features: ['AI Photo Studio: Fotos per Texteingabe bearbeiten', 'Image to Motion: aus Bildern werden Videos', 'Filter, Seitenverhältnisse und Ausgabeoptionen', 'Eigene App-Icons, Light- und Dark-Ansicht', 'Deutsch und Englisch'],
      landing: 'https://marcel-2025.github.io/Lumina-Studio-AI/',
      privacy: 'https://marcel-2025.github.io/Lumina-Studio-AI/app-datenschutz.html'
    },
    {
      id: 'lingo', name: 'Lingo', full: 'Lingo – Sprachen lernen',
      type: 'web', category: 'Lernen', status: 'web', color: '#f0a63c',
      tagline: 'Sprachübungen zum Ausprobieren im Browser.',
      about: 'Probier die interaktive Sprachübung direkt im Browser aus. Die neue Android-App ist in Arbeit.',
      features: ['Interaktive Übungen im Browser', 'Ohne Installation'],
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
      type: 'app', category: 'Personalisierung', status: 'dev', color: '#7b5bd6',
      icon: 'https://marcel-2025.github.io/Live-Wallpapers/assets/store-icon.webp',
      tagline: 'Ein bisschen Magie. Für deinen Bildschirm.',
      about: 'Fantasy-Kunst und animierte Live-Wallpaper von ArtIsFantasy: Schlösser, Wälder und Lichtwelten in Kollektionen, die sich mit den Jahreszeiten verändern. Die App erscheint bald bei Google Play.',
      features: ['Fantasy-Motive in thematischen Kollektionen', 'Animierte Live-Wallpaper für Android', 'Saisonale Designs von Halloween bis Weihnachten', 'Favoriten und Bibliothek', 'Premium-Kollektionen per Credits'],
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
      id: 'screenshot-sorting-pro', name: 'Screenshot Sorting Pro', full: 'Screenshot Sorting Pro',
      type: 'app', category: 'Tools', status: 'dev', color: '#4f7dff',
      tagline: 'Screenshots automatisch in Ordner sortieren.',
      about: 'Screenshot Sorting Pro sortiert deine Screenshots automatisch. Die App ist im Test und noch nicht im Store.',
      features: ['Automatisch sortieren', 'In Entwicklung'],
      landing: 'https://marcel-2025.github.io/Screenshot-Sorting-Pro-landing-page/'
    }
  ]
};
