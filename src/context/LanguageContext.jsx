import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState("BG");

  const toggleLanguage = () => {
    setCurrentLang(currentLang === "BG" ? "EN" : "BG");
  };

  const translations = {
    BG: {
      // Header translations
      navItems: [
        { href: "#home", label: "Начало" },
        { href: "#about", label: "За мен" },
        { href: "#services", label: "Услуги" },
        { href: "#cases", label: "Случаи" },
        { href: "#gallery", label: "Галерия" },
        { href: "#contacts", label: "Контакти" },
      ],
      bookButton: "Запази час",
      logoTitle: "Дентална Практика",
      logoSubtitle: "Д-р Парушев",

      // Home page translations
      homeTitle: "Дентална практика",
      homeSubtitle: "Д-р Парушев",
      homeButton: "Запази час",

      // About section translations
      aboutTitle: "За мен",
      aboutParagraph1:
        "Завърших Испанската гимназия в София, а през 2016 г. Факултета по дентална медицина. Оттогава стоматологията е не просто професия за мен, а място, където мога да помагам на хората да се усмихват уверено.",
      aboutParagraph2:
        "Най-голям интерес имам към ендодонтията, естетичните възстановявания и алайнерите. Следя новостите в денталната медицина и редовно посещавам курсове в България и чужбина. Вярвам, че така мога да предложа на пациентите си най-доброто от съвременната стоматология.",
      aboutParagraph3:
        "През 2018 г. създадох своя собствена практика – място, в което се старая всеки пациент да се чувства спокоен, разбран и добре обгрижен.",
      aboutParagraph4:
        "Извън работата най-често ще ме намерите сред природата – на планински преход или на бягане в парка. Отскоро участвам и в маратони, които ми дават нови цели и много положителна емоция. ",
      aboutParagraph5:
        "Обожавам и Испания – нейната култура, атмосфера и кухня, а разходките из различните ѝ региони са сред най-големите ми малки радости.",

      // Services section translations
      servicesTitle: "Услуги",
      services: [
        {
          title: "Профилактика",
          description: "Редовни прегледи и почистване за здрави зъби и венци",
        },
        {
          title: "Естетични възстановявания",
          description: "Модерни решения за красива и естествена усмивка",
        },
        {
          title: "Ендодонтия",
          description: "Специализирани процедури за лечение на коренови канали",
        },
        {
          title: "Избелване",
          description: "Професионално избелване за по-бяла и лъчезарна усмивка",
        },
        {
          title: "Протетика",
          description: "Качествени коронки, мостове и протези",
        },
        {
          title: "Хирургия",
          description: "Денто-алвеоларна хирургия и екстракции",
        },
        {
          title: "Алайнери",
          description: "Невидимо изправяне на зъбите с модерни алайнери",
        },
      ],

      // Prices section translations
      pricesTitle: "Ценова листа",
      pricesSubtitle: "Прозрачни и достъпни цени за качествена дентална грижа",
      currencylb: "лв",
      currencyEu: "€",
      popularBadge: "ПОПУЛЯРЕН",

      priceCards: [
        {
          title: "Преглед",
          price: "68,45",
          priceEu: "35",
          features: [
            "Обстоен преглед",
            "Обсъждане на конкретен проблем, поради който е записан часът",
          ],
        },
        {
          title: "Преглед и лечебен план",
          price: "97,79",
          priceEu: "50",
          features: [
            "Обстоен преглед",
            "Фото документация",
            "Рентгенови снимки",
            "Анализ на фото документация и рентгенови снимки",
            "Изготвяне на поетапен план на лечение и финансов план",
            "Обсъждане",
          ],
        },
        {
          title: "Профилактика",
          price: "273,82",
          priceEu: "140",
          features: [
            "Две посещения годишно с цел редовна грижа за Вашето пародонтално здраве (зъби и венци)",
            "Два периодични профилактични прегледа на всеки 6 месеца",
            "Две процедури за провеждане на професионална клинична орална хигиена, почистване на зъбен камък и плака с ултразвук и Airflow",
            "*Еднично посещение за почистване на зъбен камък, веднъж годишно или на по-голям интервал от 6 месеца 156,47 лв / 80€",
          ],
        },
        {
          title: "Избелване",
          price: "684,54",
          priceEu: "350",
          features: [
            "Обстоен преглед и запознаване с процедурата по избелване на Вашите зъби",
            "Професионално почистване",
            "Избелване в едно посещение (офис избелване)",
            "Изготвяне на индивидуални шини и комплект за избелване в домашни условия (домашно избелване)",
            "Оценка, насоки и съвети за поддържане на постигнатия резултат",
          ],
        },
      ],

      importantInfoTitle: "Важна информация",
      importantInfoText:
        "*Лечебният план и посочените цени в него за манипулациите са актуални 6 месеца от датата на получаването",
      ctaButton: "Запазете час за преглед",

      // Cases section translations
      casesPortfolio: "Портфолио",
      casesTitle: "Случаи",
      casesSubtitle:
        "Разгледайте някои от успешните ни случаи - преди и след лечение",
      caseAlt: "Случай",
      casesCtaButton: "Запазете консултация",
      casesBefore: "Преди",
      casesAfter: "След",
      caseDescription: [
        "Лечение на вторичен кариес",
        "Избелване",
        "Избелване",
        "Лечение на пулпит",
        "Лечение на силно разрушен зъб с LiSi overlay",
      ],

      // Gallery section translations
      gallerySubheading: "Нашата клиника",
      galleryTitle: "Галерия",
      gallerySubtitle:
        "Разгледайте нашата модерна дентална практика и оборудване",
      galleryAlt: "Галерия",
      thumbnailAlt: "Миниатюра",

      // Contact section translations
      contactTitle: "Контакти",
      contactAddressLabel: "Адрес:",
      contactAddress: 'гр. София, 1606,\nПетте Кьошета, ул. "Доспат" 14',
      contactCtaButton: "Обадете се сега",
      contactMapTitle: "Дентална практика Д-р Парушев",

      // BookingForm section translations
      bookingTitle: "Запази час",
      bookingSubtitle:
        "Попълнете формата и ние ще се свържем с Вас възможно най-скоро",
      bookingWorkingHours: "Работно време:",
      bookingMonWenFri: "Понеделник, Сряда и Петък",
      bookingTueThu: "Вторник и четвъртък:",
      bookingSaturday: "Събота:",
      bookingSunday: "Неделя:",
      bookingSaturdayTime: "По договаряне",
      bookingSundayTime: "Почивен ден",
      bookingNameLabel: "Вашите имена *",
      bookingNamePlaceholder: "Иван Иванов",
      bookingEmailLabel: "E-mail адрес *",
      bookingEmailPlaceholder: "ivan@example.com",
      bookingPhoneLabel: "Телефон *",
      bookingPhonePlaceholder: "0899 123 456",
      bookingMessageLabel: "Вашето съобщение *",
      bookingMessagePlaceholder:
        "Опишете Вашия проблем и желан ден за преглед...",
      bookingSubmitButton: "Изпрати заявка",
      bookingSuccessMessage: "Вашето запитване е изпратено!",

      //Succes or Fail submit
      formSubmitSuccess: "Съобщението е изпратено успешно!",
      formSubmitFail: "Грешка при изпращане. Моля, опитайте отново.",

      // Footer section translations
      footerLogoTitle: "Дентална Практика",
      footerLogoSubtitle: "Д-р Парушев",
      footerDescription:
        "Съвременна дентална грижа с индивидуален подход. Специализирани услуги в ендодонтия, естетични реставрации и алайнери.",
      footerContactsTitle: "Контакти",
      footerAddressLabel: "Адрес:",
      footerAddress: 'гр. София, 1606,\nПетте Кьошета, ул. "Доспат" 14',
      footerWorkingHoursTitle: "Работно време",
      footerMonThu: "Понеделник, Сряда и Петък",
      footerTueWed: "Вторник и четвъртък:",
      footerSat: "Събота:",
      footerSun: "Неделя:",
      footerClosedDays: "Почивни дни",
      footerQuickLinksTitle: "Бързи връзки",
      footerQuickLinks: [
        { href: "#about", label: "За мен" },
        { href: "#services", label: "Услуги" },
        { href: "#prices", label: "Цени" },
        { href: "#cases", label: "Случаи" },
        { href: "#contacts", label: "Контакти" },
      ],
      footerFollowUs: "Последвайте ни:",
      footerCopyright: "Дентална практика Д-р Парушев. Всички права запазени.",
      footerPrivacyPolicy: "Политика за поверителност",
      footerTerms: "Общи условия",
    },

    EN: {
      // Header translations
      navItems: [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About Me" },
        { href: "#services", label: "Services" },
        { href: "#cases", label: "Cases" },
        { href: "#gallery", label: "Gallery" },
        { href: "#contacts", label: "Contacts" },
      ],
      bookButton: "Book Appointment",
      logoTitle: "Dental Practice",
      logoSubtitle: "Dr. Parushev",

      // Home page translations
      homeTitle: "Dental Practice",
      homeSubtitle: "Dr. Parushev",
      homeButton: "Book Appointment",

      // About section translations
      aboutTitle: "About Me",
      aboutParagraph1:
        "I graduated from the Spanish High School in Sofia, and in 2016 from the Faculty of Dental Medicine. Since then, dentistry has been more than just a profession for me, it's a place where I can help people smile confidently.",
      aboutParagraph2:
        "My interests are focused in the field of endodontics, aesthetic restorations, and aligners. I keep up with developments in dental medicine and regularly attend courses in Bulgaria and abroad. I believe this allows me to offer my patients the best of modern dentistry.",
      aboutParagraph3:
        "In 2018, I created my own practice, a place where I strive to make every patient feel calm, understood, and well cared for.",
      aboutParagraph4:
        "Outside of work, you'll most often find me in nature, on a mountain hike or running in the park. Recently, I've also been participating in marathons, which give me new goals and a lot of positive energy.",
      aboutParagraph5:
        "I also love Spain, its culture, atmosphere, and cuisine, and walks through its different regions are among my greatest small joys.",

      // Services section translations
      servicesTitle: "Services",
      services: [
        {
          title: "Prevention",
          description:
            "Regular check-ups and cleaning for healthy teeth and gums",
        },
        {
          title: "Aesthetic Restorations",
          description: "Modern solutions for a beautiful and natural smile",
        },
        {
          title: "Endodontics",
          description: "Specialized procedures for root canal treatment",
        },
        {
          title: "Whitening",
          description: "Professional whitening for a brighter, radiant smile",
        },
        {
          title: "Prosthetics",
          description: "Quality crowns, bridges and dentures",
        },
        {
          title: "Surgery",
          description: "Dento-alveolar surgery and extractions",
        },
        {
          title: "Aligners",
          description: "Invisible teeth straightening with modern aligners",
        },
      ],

      // Prices section translations
      pricesTitle: "Price List",
      pricesSubtitle:
        "Transparent and affordable prices for quality dental care",
      currencylb: "BGN",
      currencyEu: "€",
      popularBadge: "POPULAR",

      priceCards: [
        {
          title: "Examination",
          price: "68.45",
          priceEu: "35",
          features: [
            "Comprehensive examination",
            "Discussion of a specific problem for which the appointment was made",
          ],
        },
        {
          title: "Examination & Treatment Plan",
          price: "97.79",
          priceEu: "50",
          features: [
            "Comprehensive examination",
            "Photo documentation",
            "X-rays",
            "Analysis of photo documentation and X-rays",
            "Preparation of a step-by-step treatment plan and financial plan",
            "Discussion",
          ],
        },
        {
          title: "Prevention",
          price: "273,82",
          priceEu: "140",
          features: [
            "Two visits per year for regular care of your periodontal health (teeth and gums)",
            "Two periodic preventive examinations every 6 months",
            "Two procedures for conducting professional clinical oral hygiene, cleaning of tartar and plaque with ultrasound and Airflow",
            "*Single visit for tartar cleaning, once a year or at a greater interval of 6 months 156.47 lv / 80 €",
          ],
        },
        {
          title: "Whitening",
          price: "684,54",
          priceEu: "350",
          features: [
            "A comprehensive examination and introduction to the procedure for whitening your teeth",
            "Professional cleaning",
            "Whitening in one visit (office whitening)",
            "Preparation of individual trays and a whitening kit at home (home whitening)",
            "Assessment, guidelines and tips for maintaining the achieved result",
          ],
        },
      ],
      importantInfoTitle: "Important Information",
      importantInfoText:
        "*The treatment plan and the prices indicated in it for the procedures are valid for 6 months from the date of receipt",
      ctaButton: "Book an Examination",

      // Cases section translations
      casesPortfolio: "Portfolio",
      casesTitle: "Cases",
      casesSubtitle:
        "View some of our successful cases - before and after treatment",
      caseAlt: "Case",
      casesCtaButton: "Book a Consultation",
      casesBefore: "Before",
      casesAfter: "After",
      caseDescription: [
        "Treatment of secondary caries",
        "Whitening",
        "Whitening",
        "Treatment of pulpitis",
        "Treatment of severely decayed tooth with LiSi overlay",
      ],

      // Gallery section translations
      gallerySubheading: "Our Clinic",
      galleryTitle: "Gallery",
      gallerySubtitle: "Explore our modern dental practice and equipment",
      galleryAlt: "Gallery",
      thumbnailAlt: "Thumbnail",

      // Contact section translations
      contactTitle: "Contacts",
      contactAddressLabel: "Address:",
      contactAddress: 'Sofia, 1606,\nPette Kyosheta, "Dospat" str. 14',
      contactCtaButton: "Call Now",
      contactMapTitle: "Dental Practice Dr. Parushev",

      // BookingForm section translations
      bookingTitle: "Book Appointment",
      bookingSubtitle:
        "Fill out the form and we will contact you as soon as possible",
      bookingWorkingHours: "Working Hours:",
      bookingMonWenFri: "Monday, Wednesday and Friday:",
      bookingTueThu: "Tuesday and Thursday:",
      bookingSaturday: "Saturday:",
      bookingSunday: "Sunday:",
      bookingSaturdayTime: "By appointment",
      bookingSundayTime: "Closed",
      bookingNameLabel: "Your Name *",
      bookingNamePlaceholder: "John Doe",
      bookingEmailLabel: "Email Address *",
      bookingEmailPlaceholder: "john@example.com",
      bookingPhoneLabel: "Phone *",
      bookingPhonePlaceholder: "0899 123 456",
      bookingMessageLabel: "Your Message *",
      bookingMessagePlaceholder:
        "Describe your problem and desired appointment date...",
      bookingSubmitButton: "Send Request",
      bookingSuccessMessage: "Your request has been sent!",

      //Succes or Fail submit
      formSubmitSuccess: "The message was sent successfully!",
      formSubmitFail: "Error sending. Please try again.",

      // Footer section translations
      footerLogoTitle: "Dental Practice",
      footerLogoSubtitle: "Dr. Parushev",
      footerDescription:
        "Modern dental care with an individual approach. Specialized services in endodontics, aesthetic restorations and aligners.",
      footerContactsTitle: "Contacts",
      footerAddressLabel: "Address:",
      footerAddress: 'Sofia, 1606,\nPette Kyosheta, "Dospat" str. 14',
      footerWorkingHoursTitle: "Working Hours",
      footerMonThu: "Monday, Wednesday and Friday:",
      footerTueWed: "Tuesday and Thursday:",
      footerSat: "Saturday:",
      footerSun: "Sunday:",
      footerClosedDays: "Closed",
      footerQuickLinksTitle: "Quick Links",
      footerQuickLinks: [
        { href: "#about", label: "About Me" },
        { href: "#services", label: "Services" },
        { href: "#prices", label: "Prices" },
        { href: "#cases", label: "Cases" },
        { href: "#contacts", label: "Contacts" },
      ],
      footerFollowUs: "Follow us:",
      footerCopyright: "Dental Practice Dr. Parushev. All rights reserved.",
      footerPrivacyPolicy: "Privacy Policy",
      footerTerms: "Terms and Conditions",
    },
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLang,
        toggleLanguage,
        translations: translations[currentLang],
      }}>
      {children}
    </LanguageContext.Provider>
  );
};
