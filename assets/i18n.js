(function () {
  const STORAGE_KEY = "vaktpray-language";
  const DEFAULT_LANGUAGE = "en";
  const SUPPORTED_LANGUAGES = ["en", "bs"];

  const translations = {
    en: {
      meta: {
        homeTitle: "VaktPray",
        homeDescription: "VaktPray is an offline iOS app focused exclusively on Islamic prayer times for 🇧🇦 Bosnia and Herzegovina, with notifications, widgets, night-time information, and Apple Watch support.",
        privacyTitle: "Privacy Policy | VaktPray",
        privacyDescription: "Privacy policy for the VaktPray iOS app.",
        supportTitle: "Support | VaktPray",
        supportDescription: "Support contact information for the VaktPray iOS app.",
        screenshotsTitle: "Screenshots | VaktPray",
        screenshotsDescription: "Screenshots of the VaktPray iOS app, iPhone widgets, Apple Watch views, settings, notifications, and support screens."
      },
      common: {
        language: "Language",
        privacy: "Privacy",
        privacyPolicy: "Privacy Policy",
        screenshots: "Screenshots",
        support: "Support",
        showSupportEmail: "Show support email",
        showSupportEmailLower: "show support email"
      },
      home: {
        heroEyebrow: "Prayer times for iPhone",
        heroText: "An offline iOS app focused exclusively on Islamic prayer times for 🇧🇦 Bosnia and Herzegovina, with daily prayer notifications, widgets, night-time information, and Apple Watch support. No data collected.",
        screenshotsButton: "Screenshots",
        detailsEyebrow: "App Details",
        detailsTitle: "Built for daily prayer time checks",
        offlineTitle: "Offline prayer data",
        offlineBody: "Prayer time data is included in the app, so no internet connection is required after installation.",
        remindersTitle: "Local reminders",
        remindersBody: "Prayer reminders are scheduled on your device through iOS notification settings.",
        widgetsTitle: "Widgets",
        widgetsBody: "Widgets use the app's private shared storage to display your selected city and prayer schedule.",
        languagesTitle: "English and Bosnian",
        languagesBody: "Built for English and Bosnian speaking users, with both languages available throughout the app.",
        watchTitle: "Apple Watch",
        watchBody: "Apple Watch support keeps prayer time information available from your wrist.",
        linksEyebrow: "App Store Links",
        linksTitle: "Public URLs",
        linksBody: "These pages are available for users and App Store review."
      },
      screenshots: {
        eyebrow: "Screenshots",
        title: "VaktPray Screenshots",
        lede: "A closer look at the prayer time screens, iPhone widgets, Apple Watch views, notification settings, and app information pages.",
        prayerEyebrow: "Prayer Times",
        prayerTitle: "Daily prayer schedule views",
        bosnianHomeAlt: "Bosnian prayer time screen showing the selected city, date, current time, and daily prayer schedule.",
        bosnianHomeTitle: "Bosnian home screen",
        bosnianHomeBody: "The Bosnian interface shows the selected city, date, current time, and the full daily vakt schedule.",
        englishNamesAlt: "English prayer time screen with English prayer names, showing the current prayer highlighted and a countdown.",
        englishNamesTitle: "English prayer names",
        englishNamesBody: "Prayer names can also be shown in English, including Fajr, Dhuhr, Asr, Maghrib, and Isha.",
        bosnianNamesAlt: "English prayer time screen using Bosnian prayer names, showing the current prayer highlighted and a countdown.",
        bosnianNamesTitle: "English interface, Bosnian names",
        bosnianNamesBody: "The English interface can keep Bosnian prayer names visible for users who prefer local terminology.",
        bosnianNightInfoAlt: "Bosnian prayer time screen showing last half and last third of the night information.",
        bosnianNightInfoTitle: "Bosnian night information",
        bosnianNightInfoBody: "Optional night information can show when the last half and last third of the night begin in Bosnian.",
        englishNightInfoAlt: "English prayer time screen showing last half and last third of the night information.",
        englishNightInfoTitle: "English night information",
        englishNightInfoBody: "The same optional night markers are available in the English interface.",
        widgetsEyebrow: "Widgets",
        widgetsTitle: "Prayer times on the Home Screen and Lock Screen",
        widgetsOverviewAlt: "iPhone Home Screen showing VaktPray widgets for countdowns, daily prayer times, and night-time information.",
        widgetsOverviewTitle: "Widget options",
        widgetsOverviewBody: "The widgets can show the next prayer countdown, today's prayer times, compact countdowns, and night-time information.",
        widgetsLockScreenAlt: "iPhone Lock Screen showing VaktPray text and circular countdown widgets for the next prayer.",
        widgetsLockScreenTitle: "Lock Screen widgets",
        widgetsLockScreenBody: "The Lock Screen widgets show the next prayer and countdown in text and circular styles.",
        watchEyebrow: "Apple Watch",
        watchTitle: "Prayer times from your wrist",
        watchNextPrayerAlt: "Apple Watch VaktPray screen showing the next prayer, countdown, city, and daily schedule.",
        watchNextPrayerTitle: "Next prayer on Apple Watch",
        watchNextPrayerBody: "The watch app highlights the next prayer with a countdown, city, and daily prayer times.",
        watchScheduleAlt: "Apple Watch VaktPray screen showing the daily prayer schedule and night-time information.",
        watchScheduleTitle: "Watch schedule view",
        watchScheduleBody: "A compact schedule view shows the daily prayer times and optional night-time information on Apple Watch.",
        watchWidgetsAlt: "Apple Watch widget previews showing text and circular countdown styles for the next prayer.",
        watchWidgetsTitle: "Watch widgets",
        watchWidgetsBody: "Apple Watch widgets provide quick text and circular countdown views for the next prayer.",
        settingsEyebrow: "Settings",
        settingsTitle: "Language, display, and notification controls",
        openSettingsAlt: "Annotated VaktPray home screen showing that tapping the app icon opens settings.",
        openSettingsTitle: "Opening settings",
        openSettingsBody: "From the main prayer-time screen, tap the VaktPray icon at the bottom to open settings.",
        settingsBosnianGeneralAlt: "Bosnian settings screen with language, additional time information, notification sounds, and notification timing controls.",
        settingsBosnianGeneralTitle: "Bosnian settings",
        settingsBosnianGeneralBody: "The Bosnian settings screen includes language selection, additional time information, notification sounds, and timing options.",
        settingsBosnianNotificationsAlt: "Bosnian notification settings screen with per-prayer reminder controls and Dhuhr mosque schedule options.",
        settingsBosnianNotificationsTitle: "Bosnian notification settings",
        settingsBosnianNotificationsBody: "Per-prayer reminder controls let users decide which notifications are scheduled and when they should appear.",
        settingsEnglishGeneralAlt: "English settings screen with language, additional time information, notification sounds, and notification timing controls.",
        settingsEnglishGeneralTitle: "English settings",
        settingsEnglishGeneralBody: "The English settings screen offers the same language, display, sound, and notification timing options.",
        settingsEnglishNotificationsAlt: "English notification settings screen with per-prayer reminder controls and Dhuhr mosque schedule options.",
        settingsEnglishNotificationsTitle: "English notification settings",
        settingsEnglishNotificationsBody: "Notification controls include separate settings for each prayer and options for the Dhuhr mosque schedule.",
        aboutEyebrow: "About",
        aboutTitle: "Privacy and support information",
        aboutBosnianAlt: "Bosnian about screen with version, privacy, notification, support, email, and website information.",
        aboutBosnianTitle: "Bosnian about screen",
        aboutBosnianBody: "The Bosnian About page summarizes the app version, privacy details, notification behavior, support, and website information.",
        aboutEnglishAlt: "English about screen with version, privacy, notification, support, email, and website information.",
        aboutEnglishTitle: "English about screen",
        aboutEnglishBody: "The English About page gives users the same app version, privacy, notification, support, and website details."
      },
      privacy: {
        eyebrow: "Privacy Policy",
        title: "VaktPray Privacy Policy",
        lede: "VaktPray is designed to provide prayer times without collecting personal data, using analytics, or tracking you.",
        updated: "Last updated: June 2, 2026",
        collectsTitle: "Information the app collects",
        collectsBody1: "VaktPray does not collect personal data from the app. It does not use analytics, advertising identifiers, tracking SDKs, or third-party advertising services.",
        collectsBody2: "Prayer time data is included in the app, so no internet connection is required after installation.",
        localTitle: "Information stored on your device",
        localBody1: "VaktPray stores app preferences locally on your device, including your selected city, language, notification settings, notification sound choices, and display preferences. Some preferences are stored in the app's private shared storage so VaktPray widgets can show the same settings.",
        localBody2: "These preferences are not sent to VaktPray. They remain on your device unless you change them, reset them, or delete the app.",
        locationTitle: "Location",
        locationBody: "VaktPray does not request precise device location. Prayer times are based on the city you select in the app.",
        notificationsTitle: "Notifications",
        notificationsBody: "Prayer reminders are scheduled locally on your device through Apple's notification system. Notification permission is controlled by iOS and can be changed at any time in the Settings app.",
        supportEmailTitle: "Support email",
        supportEmailBody: "If you email VaktPray support, your email address and the information you choose to include in your message are used only to respond to your request, bug report, or feedback.",
        choicesTitle: "Privacy choices",
        choicesBody: "Because VaktPray does not collect personal data from the app, there is no account data to access, export, or delete. You can remove locally stored app preferences by deleting the app from your device.",
        changesTitle: "Changes",
        changesBody: "If VaktPray's privacy practices change, this policy will be updated before those changes are released.",
        contactTitle: "Contact",
        contactBodyPrefix: "For privacy questions, support requests, bug reports, or feedback, email ",
        contactBodySuffix: "."
      },
      support: {
        eyebrow: "Support",
        title: "VaktPray Support",
        lede: "For support, bug reports, or feedback, contact VaktPray by email.",
        detailsEyebrow: "Contact Details",
        detailsTitle: "What to include",
        requestsTitle: "Support requests",
        requestsBody: "Include what happened, what you expected to happen, and whether the issue is repeatable.",
        bugsTitle: "Bug reports",
        bugsBody: "Include your iOS version, device model, selected city, notification setting, and app version if available.",
        privacyBody: "VaktPray does not collect personal data from the app, does not use analytics, and does not track you.",
        readPolicy: "Read the policy"
      }
    },
    bs: {
      meta: {
        homeTitle: "VaktPray",
        homeDescription: "VaktPray je offline iOS aplikacija namijenjena isključivo islamskim vremenima namaza u 🇧🇦 Bosni i Hercegovini, s obavijestima, widgetima, informacijama o noćnom vremenu i podrškom za Apple Watch.",
        privacyTitle: "Pravila privatnosti | VaktPray",
        privacyDescription: "Pravila privatnosti za VaktPray iOS aplikaciju.",
        supportTitle: "Podrška | VaktPray",
        supportDescription: "Kontakt informacije za podršku za VaktPray iOS aplikaciju.",
        screenshotsTitle: "Snimci ekrana | VaktPray",
        screenshotsDescription: "Snimci ekrana VaktPray iOS aplikacije, iPhone widgeta, Apple Watch prikaza, postavki, obavijesti i stranica podrške."
      },
      common: {
        language: "Jezik",
        privacy: "Privatnost",
        privacyPolicy: "Pravila privatnosti",
        screenshots: "Snimci ekrana",
        support: "Podrška",
        showSupportEmail: "Prikaži email podrške",
        showSupportEmailLower: "prikaži email podrške"
      },
      home: {
        heroEyebrow: "Vaktija za iPhone",
        heroText: "Offline iOS aplikacija namijenjena isključivo islamskim vremenima namaza u 🇧🇦 Bosni i Hercegovini, s obavijestima za dnevne namaze, widgetima, informacijama o noćnom vremenu i podrškom za Apple Watch. Podaci se ne prikupljaju.",
        screenshotsButton: "Snimci ekrana",
        detailsEyebrow: "Detalji aplikacije",
        detailsTitle: "Napravljena za svakodnevnu provjeru vakta",
        offlineTitle: "Offline vaktija",
        offlineBody: "Podaci o vremenima namaza uključeni su u aplikaciju, tako da nakon instalacije nije potrebna internet konekcija.",
        remindersTitle: "Lokalni podsjetnici",
        remindersBody: "Podsjetnici za namaz zakazuju se na vašem uređaju kroz iOS postavke obavijesti.",
        widgetsTitle: "Widgeti",
        widgetsBody: "Widgeti koriste privatnu zajedničku pohranu aplikacije za prikaz odabranog grada i rasporeda namaza.",
        languagesTitle: "Engleski i bosanski",
        languagesBody: "Napravljena za korisnike koji govore engleski ili bosanski, s oba jezika dostupna u cijeloj aplikaciji.",
        watchTitle: "Apple Watch",
        watchBody: "Podrška za Apple Watch omogućava da informacije o vaktu budu dostupne na vašem zglobu.",
        linksEyebrow: "App Store linkovi",
        linksTitle: "Javni URL-ovi",
        linksBody: "Ove stranice su dostupne korisnicima i App Store pregledu."
      },
      screenshots: {
        eyebrow: "Snimci ekrana",
        title: "VaktPray snimci ekrana",
        lede: "Detaljniji prikaz ekrana vaktije, iPhone widgeta, Apple Watch prikaza, postavki obavijesti i informacija o aplikaciji.",
        prayerEyebrow: "Vaktija",
        prayerTitle: "Dnevni prikazi rasporeda namaza",
        bosnianHomeAlt: "Bosanski ekran vaktije koji prikazuje odabrani grad, datum, trenutno vrijeme i dnevni raspored namaza.",
        bosnianHomeTitle: "Bosanski početni ekran",
        bosnianHomeBody: "Bosanski interfejs prikazuje odabrani grad, datum, trenutno vrijeme i kompletan dnevni raspored vakta.",
        englishNamesAlt: "Engleski ekran vaktije s engleskim nazivima namaza, označenim trenutnim namazom i odbrojavanjem.",
        englishNamesTitle: "Engleski nazivi namaza",
        englishNamesBody: "Nazivi namaza mogu se prikazati i na engleskom, uključujući Fajr, Dhuhr, Asr, Maghrib i Isha.",
        bosnianNamesAlt: "Engleski ekran vaktije s bosanskim nazivima namaza, označenim trenutnim namazom i odbrojavanjem.",
        bosnianNamesTitle: "Engleski interfejs, bosanski nazivi",
        bosnianNamesBody: "Engleski interfejs može zadržati bosanske nazive namaza za korisnike koji preferiraju lokalne izraze.",
        bosnianNightInfoAlt: "Bosanski ekran vaktije koji prikazuje informacije o zadnjoj polovini i zadnjoj trećini noći.",
        bosnianNightInfoTitle: "Bosanske informacije o noći",
        bosnianNightInfoBody: "Opcionalne informacije o noći mogu prikazati kada počinje zadnja polovina i zadnja trećina noći na bosanskom.",
        englishNightInfoAlt: "Engleski ekran vaktije koji prikazuje informacije o zadnjoj polovini i zadnjoj trećini noći.",
        englishNightInfoTitle: "Engleske informacije o noći",
        englishNightInfoBody: "Iste opcionalne oznake noći dostupne su i u engleskom interfejsu.",
        widgetsEyebrow: "Widgeti",
        widgetsTitle: "Vakt na početnom i zaključanom ekranu",
        widgetsOverviewAlt: "Početni ekran iPhonea s VaktPray widgetima za odbrojavanje, dnevna vremena namaza i informacije o noćnom vremenu.",
        widgetsOverviewTitle: "Opcije widgeta",
        widgetsOverviewBody: "Widgeti mogu prikazati odbrojavanje do sljedećeg namaza, današnja vremena namaza, kompaktno odbrojavanje i informacije o noćnom vremenu.",
        widgetsLockScreenAlt: "Zaključani ekran iPhonea s VaktPray tekstualnim i kružnim widgetima za odbrojavanje do sljedećeg namaza.",
        widgetsLockScreenTitle: "Widgeti za zaključani ekran",
        widgetsLockScreenBody: "Widgeti za zaključani ekran prikazuju sljedeći namaz i odbrojavanje u tekstualnom i kružnom stilu.",
        watchEyebrow: "Apple Watch",
        watchTitle: "Vakt s vašeg zgloba",
        watchNextPrayerAlt: "Apple Watch VaktPray ekran koji prikazuje sljedeći namaz, odbrojavanje, grad i dnevni raspored.",
        watchNextPrayerTitle: "Sljedeći namaz na Apple Watchu",
        watchNextPrayerBody: "Watch aplikacija ističe sljedeći namaz uz odbrojavanje, grad i dnevna vremena namaza.",
        watchScheduleAlt: "Apple Watch VaktPray ekran koji prikazuje dnevni raspored namaza i informacije o noćnom vremenu.",
        watchScheduleTitle: "Raspored na satu",
        watchScheduleBody: "Kompaktan prikaz rasporeda pokazuje dnevna vremena namaza i opcionalne informacije o noćnom vremenu na Apple Watchu.",
        watchWidgetsAlt: "Apple Watch widgeti koji prikazuju tekstualni i kružni stil odbrojavanja do sljedećeg namaza.",
        watchWidgetsTitle: "Widgeti za sat",
        watchWidgetsBody: "Apple Watch widgeti nude brzi tekstualni i kružni prikaz odbrojavanja do sljedećeg namaza.",
        settingsEyebrow: "Postavke",
        settingsTitle: "Kontrole za jezik, prikaz i obavijesti",
        openSettingsAlt: "Označeni VaktPray početni ekran koji pokazuje da dodir na ikonu aplikacije otvara postavke.",
        openSettingsTitle: "Otvaranje postavki",
        openSettingsBody: "Na glavnom ekranu vaktije dodirnite VaktPray ikonu pri dnu ekrana za otvaranje postavki.",
        settingsBosnianGeneralAlt: "Bosanski ekran postavki s jezikom, dodatnim vremenskim informacijama, zvukovima obavijesti i kontrolama vremena obavijesti.",
        settingsBosnianGeneralTitle: "Bosanske postavke",
        settingsBosnianGeneralBody: "Bosanski ekran postavki uključuje izbor jezika, dodatne vremenske informacije, zvukove obavijesti i opcije vremena obavijesti.",
        settingsBosnianNotificationsAlt: "Bosanski ekran postavki obavijesti s kontrolama za svaki namaz i opcijama džuma rasporeda.",
        settingsBosnianNotificationsTitle: "Bosanske postavke obavijesti",
        settingsBosnianNotificationsBody: "Kontrole za svaki namaz omogućavaju korisnicima da odrede koje obavijesti se zakazuju i kada se prikazuju.",
        settingsEnglishGeneralAlt: "Engleski ekran postavki s jezikom, dodatnim vremenskim informacijama, zvukovima obavijesti i kontrolama vremena obavijesti.",
        settingsEnglishGeneralTitle: "Engleske postavke",
        settingsEnglishGeneralBody: "Engleski ekran postavki nudi iste opcije za jezik, prikaz, zvuk i vrijeme obavijesti.",
        settingsEnglishNotificationsAlt: "Engleski ekran postavki obavijesti s kontrolama za svaki namaz i opcijama Dhuhr rasporeda u džamiji.",
        settingsEnglishNotificationsTitle: "Engleske postavke obavijesti",
        settingsEnglishNotificationsBody: "Kontrole obavijesti uključuju odvojene postavke za svaki namaz i opcije za Dhuhr raspored u džamiji.",
        aboutEyebrow: "O aplikaciji",
        aboutTitle: "Informacije o privatnosti i podršci",
        aboutBosnianAlt: "Bosanski ekran o aplikaciji s verzijom, privatnošću, obavijestima, podrškom, emailom i web stranicom.",
        aboutBosnianTitle: "Bosanski ekran o aplikaciji",
        aboutBosnianBody: "Bosanska stranica O aplikaciji prikazuje verziju aplikacije, detalje privatnosti, ponašanje obavijesti, podršku i web stranicu.",
        aboutEnglishAlt: "Engleski ekran o aplikaciji s verzijom, privatnošću, obavijestima, podrškom, emailom i web stranicom.",
        aboutEnglishTitle: "Engleski ekran o aplikaciji",
        aboutEnglishBody: "Engleska stranica O aplikaciji daje korisnicima iste informacije o verziji, privatnosti, obavijestima, podršci i web stranici."
      },
      privacy: {
        eyebrow: "Pravila privatnosti",
        title: "VaktPray pravila privatnosti",
        lede: "VaktPray je napravljen da pruža vremena namaza bez prikupljanja ličnih podataka, analitike ili praćenja.",
        updated: "Ažurirano: 2. juni 2026.",
        collectsTitle: "Podaci koje aplikacija prikuplja",
        collectsBody1: "VaktPray ne prikuplja lične podatke iz aplikacije. Ne koristi analitiku, reklamne identifikatore, SDK-ove za praćenje ili usluge oglašavanja trećih strana.",
        collectsBody2: "Podaci o vremenima namaza uključeni su u aplikaciju, tako da nakon instalacije nije potrebna internet konekcija.",
        localTitle: "Podaci pohranjeni na vašem uređaju",
        localBody1: "VaktPray lokalno pohranjuje postavke aplikacije na vašem uređaju, uključujući odabrani grad, jezik, postavke obavijesti, izbor zvuka obavijesti i postavke prikaza. Neke postavke se čuvaju u privatnoj zajedničkoj pohrani aplikacije kako bi VaktPray widgeti mogli prikazati iste postavke.",
        localBody2: "Ove postavke se ne šalju VaktPrayu. Ostaju na vašem uređaju osim ako ih promijenite, resetujete ili izbrišete aplikaciju.",
        locationTitle: "Lokacija",
        locationBody: "VaktPray ne traži preciznu lokaciju uređaja. Vremena namaza se zasnivaju na gradu koji odaberete u aplikaciji.",
        notificationsTitle: "Obavijesti",
        notificationsBody: "Podsjetnici za namaz zakazuju se lokalno na vašem uređaju kroz Appleov sistem obavijesti. Dozvolom za obavijesti upravlja iOS i može se promijeniti u bilo kojem trenutku u aplikaciji Postavke.",
        supportEmailTitle: "Email podrške",
        supportEmailBody: "Ako pošaljete email VaktPray podršci, vaša email adresa i informacije koje odlučite uključiti u poruku koriste se samo za odgovor na vaš zahtjev, prijavu greške ili povratnu informaciju.",
        choicesTitle: "Izbori privatnosti",
        choicesBody: "Budući da VaktPray ne prikuplja lične podatke iz aplikacije, nema podataka računa kojima se može pristupiti, koje se može izvesti ili izbrisati. Lokalno pohranjene postavke aplikacije možete ukloniti brisanjem aplikacije s uređaja.",
        changesTitle: "Promjene",
        changesBody: "Ako se prakse privatnosti VaktPraya promijene, ova pravila će biti ažurirana prije objave tih promjena.",
        contactTitle: "Kontakt",
        contactBodyPrefix: "Za pitanja o privatnosti, zahtjeve za podršku, prijave grešaka ili povratne informacije, pošaljite email: ",
        contactBodySuffix: "."
      },
      support: {
        eyebrow: "Podrška",
        title: "VaktPray podrška",
        lede: "Za podršku, prijave grešaka ili povratne informacije, kontaktirajte VaktPray putem emaila.",
        detailsEyebrow: "Kontakt detalji",
        detailsTitle: "Šta uključiti",
        requestsTitle: "Zahtjevi za podršku",
        requestsBody: "Uključite šta se desilo, šta ste očekivali da se desi i da li se problem može ponoviti.",
        bugsTitle: "Prijave grešaka",
        bugsBody: "Uključite verziju iOS-a, model uređaja, odabrani grad, postavku obavijesti i verziju aplikacije ako je dostupna.",
        privacyBody: "VaktPray ne prikuplja lične podatke iz aplikacije, ne koristi analitiku i ne prati vas.",
        readPolicy: "Pročitajte pravila"
      }
    }
  };

  function getNestedValue(language, key) {
    return key.split(".").reduce((value, part) => value && value[part], translations[language]);
  }

  function preferredLanguage() {
    const requested = new URLSearchParams(window.location.search).get("lang");
    if (SUPPORTED_LANGUAGES.includes(requested)) {
      return requested;
    }

    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED_LANGUAGES.includes(saved)) {
      return saved;
    }

    const browserLanguage = (navigator.language || "").toLowerCase();
    return browserLanguage.startsWith("bs") ? "bs" : DEFAULT_LANGUAGE;
  }

  function setLanguage(language) {
    const selectedLanguage = SUPPORTED_LANGUAGES.includes(language) ? language : DEFAULT_LANGUAGE;
    window.localStorage.setItem(STORAGE_KEY, selectedLanguage);
    document.documentElement.lang = selectedLanguage;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = getNestedValue(selectedLanguage, element.dataset.i18n);
      if (value) {
        element.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      const value = getNestedValue(selectedLanguage, element.dataset.i18nAriaLabel);
      if (value) {
        element.setAttribute("aria-label", value);
      }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      const value = getNestedValue(selectedLanguage, element.dataset.i18nAlt);
      if (value) {
        element.setAttribute("alt", value);
      }
    });

    const page = document.body.dataset.page;
    const pageTitle = getNestedValue(selectedLanguage, `meta.${page}Title`);
    const pageDescription = getNestedValue(selectedLanguage, `meta.${page}Description`);
    const description = document.querySelector('meta[name="description"]');

    if (pageTitle) {
      document.title = pageTitle;
    }

    if (description && pageDescription) {
      description.setAttribute("content", pageDescription);
    }

    const selector = document.getElementById("language-select");
    if (selector) {
      selector.value = selectedLanguage;
    }
  }

  const initialLanguage = preferredLanguage();
  setLanguage(initialLanguage);

  document.getElementById("language-select")?.addEventListener("change", (event) => {
    setLanguage(event.target.value);
  });
})();
