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
        "Завърших средното си образование завърших в Испанската гимназия в София. Дипломирах се през 2016 с магистърска степен по дентална медицина в София.",
      aboutParagraph2:
        "Интересите ми са насочени в областта на ендодонтията, естетични реставрации и алайнери. Посещавам множество квалификационни курсове в България и чужбина, по този начин се стремя да следя тенденциите в денталната медицина и да ги прилагам в практиката си.",
      aboutParagraph3:
        "От 2016 до 2018 работих в дентална практика в Люлин. В края на 2018 година стартирах своя собствена, която ръководя от тогава. Интересите ми извън стоматологията са свързани с планински преходи.",

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
      currency: "лв",
      popularBadge: "ПОПУЛЯРЕН",

      priceCards: [
        {
          title: "Преглед",
          price: "60",
          features: [
            "Пълен стоматологичен преглед",
            "Консултация",
            "Оценка на състоянието",
          ],
        },
        {
          title: "Преглед и лечебен план",
          price: "80",
          features: [
            "Всичко от базовия преглед",
            "Детайлен лечебен план",
            "Посочени цени за манипулации",
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
      bookingMonFri: "Понеделник - Петък:",
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

      // Footer section translations
      footerLogoTitle: "Дентална Практика",
      footerLogoSubtitle: "Д-р Парушев",
      footerDescription:
        "Съвременна дентална грижа с индивидуален подход. Специализирани услуги в ендодонтия, естетични реставрации и алайнери.",
      footerContactsTitle: "Контакти",
      footerAddressLabel: "Адрес:",
      footerWorkingHoursTitle: "Работно време",
      footerMonThu: "Понеделник и Четвъртък:",
      footerTueWed: "Вторник и Сряда:",
      footerFriSun: "Петък - Неделя:",
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
        "I completed my secondary education at the Spanish High School in Sofia. I graduated in 2016 with a master's degree in dental medicine in Sofia.",
      aboutParagraph2:
        "My interests are focused in the field of endodontics, aesthetic restorations and aligners. I attend numerous qualification courses in Bulgaria and abroad, thus striving to follow the trends in dental medicine and apply them in my practice.",
      aboutParagraph3:
        "From 2016 to 2018 I worked in a dental practice in Lyulin. At the end of 2018, I started my own practice, which I have been managing since then. My interests outside of dentistry are related to mountain hiking.",

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
      currency: "BGN",
      popularBadge: "POPULAR",

      priceCards: [
        {
          title: "Examination",
          price: "60",
          features: [
            "Full dental examination",
            "Consultation",
            "Condition assessment",
          ],
        },
        {
          title: "Examination & Treatment Plan",
          price: "80",
          features: [
            "Everything from basic examination",
            "Detailed treatment plan",
            "Specified prices for procedures",
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
      bookingMonFri: "Monday - Friday:",
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

      // Footer section translations
      footerLogoTitle: "Dental Practice",
      footerLogoSubtitle: "Dr. Parushev",
      footerDescription:
        "Modern dental care with an individual approach. Specialized services in endodontics, aesthetic restorations and aligners.",
      footerContactsTitle: "Contacts",
      footerAddressLabel: "Address:",
      footerWorkingHoursTitle: "Working Hours",
      footerMonThu: "Monday and Thursday:",
      footerTueWed: "Tuesday and Wednesday:",
      footerFriSun: "Friday - Sunday:",
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
