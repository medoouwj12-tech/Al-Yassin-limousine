// Al Yassin Limousine - Premium JS Engine

// 1. Translation Dictionary (Arabic / English)
const translations = {
  ar: {
    // Navbar
    "nav-logo": "آل ياسين ليموزين",
    "nav-home": "الرئيسية",
    "nav-about": "من نحن",
    "nav-services": "خدماتنا",
    "nav-fleet": "أسطولنا",
    "nav-destinations": "وجهاتنا",
    "nav-booking": "احجز الآن",
    "nav-location": "موقعنا",
    "nav-contact": "اتصل بنا",
    "nav-cta": "احجز رحلتك",

    // Hero Section
    "hero-badge": "💎 خدمات رجال الأعمال و VIP 100%",
    "hero-title-1": "لو بتفكر تسافر يبقى البوست ده ليك",
    "hero-title-2": "احنا معاك في كل مكان",
    "hero-subtitle": "نقدم أفضل خدمات الليموزين والنقل السياحي في مصر بأعلى معايير الرفاهية والأمان وأقل الأسعار.",
    "hero-cta-book": "احجز رحلتك الآن",
    "hero-cta-fleet": "رؤية الأسطول",

    // Stats
    "stat-clients-val": "+١٥,٠٠٠",
    "stat-clients-lbl": "عميل سعيد",
    "stat-trips-val": "+٢٠,٠٠٠",
    "stat-trips-lbl": "رحلة ناجحة",
    "stat-cars-val": "+٥٠",
    "stat-cars-lbl": "سيارة حديثة",
    "stat-rating-val": "٤.٩/٥",
    "stat-rating-lbl": "تقييم العملاء",

    // About Us Section
    "about-badge": "نبذة عنا",
    "about-title": "آل ياسين لخدمات الليموزين الفاخرة",
    "about-desc-1": "نحن في آل ياسين ليموزين نفخر بتقديم تجربة نقل فاخرة لا تُنسى في جمهورية مصر العربية. تأسست شركتنا لتلبية احتياجات المسافرين الباحثين عن الراحة المطلقة، الخصوصية، والالتزام التام بالمواعيد.",
    "about-desc-2": "سواء كنت بحاجة إلى توصيل للمطار، سيارة لخدمة رجال الأعمال، أو جولات سياحية بين المحافظات، فإن أسطولنا الحديث وسائقينا المحترفين مستعدون لخدمتك على مدار الساعة طوال أيام الأسبوع.",
    "about-feat-1-title": "التزام تام بالمواعيد",
    "about-feat-1-desc": "نصل قبل موعدك لضمان عدم تأخرك على رحلتك أو اجتماعك.",
    "about-feat-2-title": "سائقون محترفون",
    "about-feat-2-desc": "سائقونا مدربون وعلى دراية كاملة بجميع الطرق المصرية.",
    "about-feat-3-title": "راحة ورفاهية قصوى",
    "about-feat-3-desc": "سيارات فخمة مكيفة ومجهزة بالكامل لتوفير تجربة مريحة.",

    // Services Section
    "services-badge": "خدمات النخبة",
    "services-title": "نصحبك أينما كنت برفاهية كاملة",
    "services-subtitle": "اختر من بين باقة خدماتنا المصممة لتلائم كافة احتياجاتك وتضمن لك رحلة آمنة ومريحة.",
    "service-airport-offer": "عرض خاص لمشوار المطار",
    "service-airport-title": "توصيلات المطارات",
    "service-airport-desc": "خدمة نقل مخصصة من وإلى كافة المطارات المصرية. نتابع مواعيد رحلتك لضمان استقبالك في الوقت المحدد ومساعدتك في الأمتعة.",
    "service-airport-details": "تشمل: مطار القاهرة، مطار الإسكندرية، مطار سفنكس، وكافة المطارات الأخرى.",
    "service-vip-title": "VIP وخدمات رجال الأعمال",
    "service-vip-desc": "تنقلات راقية تليق برجال الأعمال وكبار الشخصيات. نوفر سيارات فاخرة وسائقين يتميزون باللباقة والسرية التامة لإتمام أعمالك اليومية بسلاسة.",
    "service-vip-details": "سيارات مرسيدس وسيارات دفع رباعي حديثة تضمن لك الأناقة والوقار.",
    "service-cities-title": "توصيل بين المحافظات (تغطية شاملة لمصر)",
    "service-cities-desc": "سافر بين المدن المصرية براحة تامة ودون عناء. نربط العاصمة بكافة الشواطئ والمحافظات بسرعة وأمان مع سائق خاص.",
    "service-cities-details": "القاهرة، الإسكندرية، الساحل الشمالي، شرم الشيخ، السخنة، الغردقة، مرسى مطروح، ورأس سدر.",

    // Fleet Section
    "fleet-badge": "أسطولنا الفاخر",
    "fleet-title": "سيارات حديثة مكيفة تناسب كافة الاحتياجات",
    "fleet-subtitle": "نمتلك أحدث طرازات السيارات الفاخرة التي توفر لك ولعائلتك المساحة الكافية للركاب والحقائب.",
    "fleet-corolla-title": "تويوتا كورولا",
    "fleet-corolla-desc": "السيارة الأكثر اعتمادية وراحة للرحلات اليومية وتوصيلات المطارات، تتميز بسلاسة الأداء والتكييف القوي لراحة الركاب.",
    "fleet-corolla-cap": "٤ ركاب | ٣ حقائب",
    "fleet-cn7-title": "هيونداي CN7",
    "fleet-cn7-desc": "سيدان بتصميم رياضي عصري جذاب يمنحك التميز، مجهزة بأحدث وسائل الأمان والرفاهية لرحلة مريحة وممتعة.",
    "fleet-cn7-cap": "٤ ركاب | ٣ حقائب",
    "fleet-xpander-title": "ميتسوبيشي إكسباندر",
    "fleet-xpander-desc": "سيارة عائلية متعددة الأغراض (MPV) تتسع لـ 7 ركاب، مثالية للرحلات الطويلة والمجموعات التي تبحث عن الراحة والمساحة الكافية.",
    "fleet-xpander-cap": "٧ ركاب | ٤ حقائب",
    
    // Feature Badges
    "badge-price": "أقل سعر في مصر",
    "badge-quality": "أعلى جودة VIP",
    "badge-drivers": "سائقين محترفين",
    
    // Destinations Grid
    "dest-badge": "الوجهات الأكثر طلباً",
    "dest-title": "تغطية شاملة لكافة المدن والمصايف المصرية",
    "dest-cairo": "القاهرة",
    "dest-alex": "الإسكندرية",
    "dest-sahel": "الساحل الشمالي",
    "dest-sokhna": "العين السخنة",
    "dest-sharm": "شرم الشيخ",
    "dest-hurghada": "الغردقة",
    "dest-matrouh": "مرسى مطروح",
    "dest-sudr": "رأس سدر",

    // Booking Section
    "booking-badge": "احجز رحلتك الآن",
    "booking-title": "احسب تكلفة رحلتك التقديرية واحجز فوراً",
    "booking-subtitle": "املأ بيانات رحلتك بالأسفل للحصول على سعر تقديري فوري، ثم أرسل الطلب مباشرة إلى خدمة العملاء عبر الواتساب لتأكيد الحجز.",
    
    "lbl-pickup": "مكان الانطلاق (نقطة البداية)",
    "opt-select": "اختر من القائمة...",
    "opt-cairo": "القاهرة / مطار القاهرة",
    "opt-alex": "الإسكندرية / مطار برج العرب",
    "opt-sphinx": "مطار سفنكس",
    "opt-sahel": "الساحل الشمالي / مارينا / العلمين",
    "opt-sharm": "شرم الشيخ",
    "opt-sokhna": "العين السخنة",
    "opt-hurghada": "الغردقة",
    "opt-matrouh": "مرسى مطروح",
    "opt-sudr": "رأس سدر",
    "opt-other": "مكان آخر (أكتبه بالأسفل)",

    "lbl-pickup-other": "أكتب مكان الانطلاق بالتفصيل (إذا اخترت مكان آخر)",
    "lbl-dropoff": "وجهة الوصول (نقطة النهاية)",
    "lbl-dropoff-other": "أكتب وجهة الوصول بالتفصيل (إذا اخترت مكان آخر)",
    
    "lbl-date": "تاريخ الرحلة",
    "lbl-time": "وقت التحرك",
    "lbl-car-type": "فئة السيارة المطلوبة",
    "opt-car-corolla": "تويوتا كورولا (Toyota Corolla)",
    "opt-car-cn7": "هيونداي CN7 (Hyundai Elantra)",
    "opt-car-xpander": "ميتسوبيشي إكسباندر (Xpander)",
    
    "lbl-passengers": "عدد الركاب",
    "lbl-luggage": "عدد الحقائب",
    
    "calc-title": "التكلفة التقديرية للرحلة",
    "calc-price-placeholder": "أدخل تفاصيل الرحلة للحساب",
    "calc-disclaimer": "* هذا السعر تقديري ويشمل السيارة والسائق والوقود ورسوم البوابات الأساسية. قد يختلف السعر النهائي بناءً على نقاط التوقف الإضافية أو فترات الانتظار الطويلة.",
    "btn-submit-wa": "تأكيد الحجز عبر الواتساب",

    // Footer
    "footer-about": "آل ياسين ليموزين - الاسم الأول في عالم الليموزين والنقل السياحي الفاخر في مصر. نسعى دائماً لتقديم أفضل تجربة لعملائنا.",
    "footer-links-title": "روابط سريعة",
    "footer-contact-title": "معلومات الاتصال",
    "footer-working-hours": "ساعات العمل: ٢٤ ساعة طوال أيام الأسبوع",
    "footer-copyright": "© 2026 آل ياسين لخدمات الليموزين. جميع الحقوق محفوظة.",

    // Location Section
    "location-badge": "موقعنا على الخريطة",
    "location-title": "تعرف على موقعنا وزورنا في أي وقت",
    "location-subtitle": "مقرنا في المندرة القبلية، الإسكندرية. يمكنك زيارتنا في أي وقت أو التواصل معنا لترتيب رحلتك.",
    "location-address-title": "عنوان المقر",
    "location-address-text": "المندرة القبلية، محافظة الإسكندرية<br>الرمز البريدي: 5524101",
    "location-hours-title": "ساعات العمل",
    "location-hours-text": "نعمل على مدار ٢٤ ساعة، ٧ أيام في الأسبوع. اتصل بنا في أي وقت!",
    "location-status": "متاح الآن",
    "location-directions": "احصل على الاتجاهات",
    "location-directions-sub": "افتح خرائط جوجل للوصول إلينا",
    
    // Toast Messages
    "toast-fill-fields": "يرجى ملء جميع الحقول المطلوبة لحساب السعر!"
  },
  en: {
    // Navbar
    "nav-logo": "Al Yassin Limo",
    "nav-home": "Home",
    "nav-about": "About Us",
    "nav-services": "Services",
    "nav-fleet": "Fleet",
    "nav-destinations": "Destinations",
    "nav-booking": "Book Now",
    "nav-location": "Location",
    "nav-contact": "Contact",
    "nav-cta": "Book Ride",

    // Hero Section
    "hero-badge": "💎 100% VIP & Corporate Services",
    "hero-title-1": "Planning your next trip?",
    "hero-title-2": "We've got you covered",
    "hero-subtitle": "Providing the ultimate luxury limousine and travel service across Egypt with the highest standards of safety, comfort, and best competitive rates.",
    "hero-cta-book": "Book Ride Now",
    "hero-cta-fleet": "View Fleet",

    // Stats
    "stat-clients-val": "+15,000",
    "stat-clients-lbl": "Happy Clients",
    "stat-trips-val": "+20,000",
    "stat-trips-lbl": "Completed Rides",
    "stat-cars-val": "+50",
    "stat-cars-lbl": "Luxury Vehicles",
    "stat-rating-val": "4.9/5",
    "stat-rating-lbl": "Customer Rating",

    // About Us Section
    "about-badge": "About Us",
    "about-title": "Al Yassin Luxury Limousine Services",
    "about-desc-1": "At Al Yassin Limousine, we take pride in offering an unforgettable luxury transportation experience in Egypt. Our company was founded to cater to travellers seeking ultimate comfort, privacy, and absolute punctuality.",
    "about-desc-2": "Whether you need a reliable airport transfer, a corporate business car, or long-distance travel between cities, our modern fleet and professional chauffeurs are ready to serve you 24/7.",
    "about-feat-1-title": "Absolute Punctuality",
    "about-feat-1-desc": "We arrive ahead of schedule to ensure you never miss a flight or a meeting.",
    "about-feat-2-title": "Professional Drivers",
    "about-feat-2-desc": "Our chauffeurs are highly trained, polite, and fully knowledgeable of Egypt's roads.",
    "about-feat-3-title": "Premium Comfort",
    "about-feat-3-desc": "Modern, clean, air-conditioned, and fully equipped luxury vehicles.",

    // Services Section
    "services-badge": "Elite Services",
    "services-title": "Guiding You Safely in Absolute Comfort",
    "services-subtitle": "Choose from our premium range of services designed to fulfill all your travel requirements and ensure a smooth ride.",
    "service-airport-offer": "Special Offer for Airport Rides",
    "service-airport-title": "Airport Transfers",
    "service-airport-desc": "Dedicated pickup and drop-off service from/to all Egyptian airports. We track your flight status to guarantee timely pickup and assist you with your luggage.",
    "service-airport-details": "Includes: Cairo Airport, Alexandria Airport, Sphinx Airport, and all other major airports.",
    "service-vip-title": "VIP & Corporate Services",
    "service-vip-desc": "Elegant transportation tailored for business executives and VIPs. We provide high-end vehicles and discreet, well-dressed chauffeurs for seamless daily business meetings.",
    "service-vip-details": "Mercedes S-Class and modern SUVs to ensure a prestigious and elegant entry.",
    "service-cities-title": "Intercity Travel (Egypt-Wide Coverage)",
    "service-cities-desc": "Travel between Egyptian cities in comfort and style. Skip public transit and enjoy private point-to-point transfer to coastal resorts and far provinces.",
    "service-cities-details": "Cairo, Alexandria, North Coast, Sharm El-Sheikh, El Sokhna, Hurghada, Marsa Matrouh, and Ras Sudr.",

    // Fleet Section
    "fleet-badge": "Our Luxury Fleet",
    "fleet-title": "Modern Air-Conditioned Cars for All Occasions",
    "fleet-subtitle": "We operate a premium fleet of modern, highly maintained vehicles offering spacious capacity for both passengers and baggage.",
    "fleet-corolla-title": "Toyota Corolla Sedan",
    "fleet-corolla-desc": "The most reliable and comfortable sedan for daily commutes and airport transfers, featuring smooth performance and strong A/C.",
    "fleet-corolla-cap": "4 Passengers | 3 Bags",
    "fleet-cn7-title": "Hyundai Elantra CN7",
    "fleet-cn7-desc": "A modern sedan with a sporty design and geometric lines, equipped with advanced safety features for a comfortable, enjoyable ride.",
    "fleet-cn7-cap": "4 Passengers | 3 Bags",
    "fleet-xpander-title": "Mitsubishi Xpander (7-Seater)",
    "fleet-xpander-desc": "A 7-seater multi-purpose family vehicle (MPV), perfect for long road trips and groups seeking comfort and generous space.",
    "fleet-xpander-cap": "7 Passengers | 4 Bags",
    
    // Feature Badges
    "badge-price": "Best Price in Egypt",
    "badge-quality": "Premium VIP Quality",
    "badge-drivers": "Professional Chauffeurs",
    
    // Destinations Grid
    "dest-badge": "Popular Destinations",
    "dest-title": "Full Coverage of Egypt's Major Cities & Resorts",
    "dest-cairo": "Cairo",
    "dest-alex": "Alexandria",
    "dest-sahel": "North Coast (Sahel)",
    "dest-sokhna": "El Sokhna",
    "dest-sharm": "Sharm El-Sheikh",
    "dest-hurghada": "Hurghada",
    "dest-matrouh": "Marsa Matrouh",
    "dest-sudr": "Ras Sudr",

    // Booking Section
    "booking-badge": "Book Your Trip Now",
    "booking-title": "Get an Instant Quote & Book via WhatsApp",
    "booking-subtitle": "Fill in your travel information below to view a real-time fare estimate, and submit the booking request directly to our customer team on WhatsApp.",
    
    "lbl-pickup": "Pickup Location",
    "opt-select": "Select from list...",
    "opt-cairo": "Cairo / Cairo Airport",
    "opt-alex": "Alexandria / Borg El Arab Airport",
    "opt-sphinx": "Sphinx Airport",
    "opt-sahel": "North Coast / Marina / El Alamein",
    "opt-sharm": "Sharm El-Sheikh",
    "opt-sokhna": "El Sokhna",
    "opt-hurghada": "Hurghada",
    "opt-matrouh": "Marsa Matrouh",
    "opt-sudr": "Ras Sudr",
    "opt-other": "Other Location (type below)",

    "lbl-pickup-other": "Detailed Pickup Address (if 'Other' is selected)",
    "lbl-dropoff": "Destination / Drop-off",
    "lbl-dropoff-other": "Detailed Drop-off Address (if 'Other' is selected)",
    
    "lbl-date": "Departure Date",
    "lbl-time": "Pickup Time",
    "lbl-car-type": "Vehicle Class",
    "opt-car-corolla": "Toyota Corolla",
    "opt-car-cn7": "Hyundai CN7 (Elantra)",
    "opt-car-xpander": "Mitsubishi Xpander (7-Seater)",
    
    "lbl-passengers": "Passengers Count",
    "lbl-luggage": "Luggage Count",
    
    "calc-title": "Estimated Trip Fare",
    "calc-price-placeholder": "Enter trip details to calculate",
    "calc-disclaimer": "* This fare is an estimate including vehicle, driver, fuel, and highway tolls. Final price may adjust for extra stops or extended waiting times.",
    "btn-submit-wa": "Confirm Booking via WhatsApp",

    // Footer
    "footer-about": "Al Yassin Limousine - The premier choice for executive travel, airport transfers, and VIP transport in Egypt. Committed to luxury, punctuality, and comfort.",
    "footer-links-title": "Quick Links",
    "footer-contact-title": "Contact Details",
    "footer-working-hours": "Working Hours: 24/7 service",
    "footer-copyright": "© 2026 Al Yassin Limousine. All rights reserved.",

    // Location Section
    "location-badge": "Our Location",
    "location-title": "Find Us & Visit Anytime",
    "location-subtitle": "Our office is located in Al Mandarah Qebli, Alexandria. Visit us anytime or contact us to arrange your trip.",
    "location-address-title": "Office Address",
    "location-address-text": "Al Mandarah Qebli, Alexandria Governorate<br>Postal Code: 5524101",
    "location-hours-title": "Working Hours",
    "location-hours-text": "We operate 24 hours, 7 days a week. Call us anytime!",
    "location-status": "Available Now",
    "location-directions": "Get Directions",
    "location-directions-sub": "Open Google Maps to navigate to us",
    
    // Toast Messages
    "toast-fill-fields": "Please fill in all required fields to estimate the fare!"
  }
};

// 2. Global State
let currentLang = "ar"; // default language is Arabic

// 3. Pricing Matrix Table (EGP)
// Keys represent "PickupCode_DropoffCode".
// Pricing for categories: [Sedan, VIP, Van]
const pricingMatrix = {
  // Cairo <-> Alexandria
  "cairo_alex": [2200, 3500, 4200],
  "alex_cairo": [2200, 3500, 4200],
  
  // Cairo <-> Sahel (North Coast)
  "cairo_sahel": [3800, 5500, 6500],
  "sahel_cairo": [3800, 5500, 6500],
  
  // Cairo <-> Sokhna
  "cairo_sokhna": [1600, 2600, 3200],
  "sokhna_cairo": [1600, 2600, 3200],

  // Cairo <-> Sharm
  "cairo_sharm": [6500, 9500, 11000],
  "sharm_cairo": [6500, 9500, 11000],

  // Cairo <-> Hurghada
  "cairo_hurghada": [5800, 8500, 10000],
  "hurghada_cairo": [5800, 8500, 10000],

  // Cairo <-> Sphinx Airport
  "cairo_sphinx": [800, 1500, 1800],
  "sphinx_cairo": [800, 1500, 1800],

  // Cairo <-> Marsa Matrouh
  "cairo_matrouh": [4500, 6500, 7500],
  "matrouh_cairo": [4500, 6500, 7500],

  // Cairo <-> Ras Sudr
  "cairo_sudr": [2400, 3600, 4200],
  "sudr_cairo": [2400, 3600, 4200],

  // Alex <-> Sahel
  "alex_sahel": [1800, 2800, 3400],
  "sahel_alex": [1800, 2800, 3400],

  // Alex <-> Sphinx
  "alex_sphinx": [1900, 2900, 3600],
  "sphinx_alex": [1900, 2900, 3600],
  
  // Alex <-> Sokhna
  "alex_sokhna": [3200, 4800, 5600],
  "sokhna_alex": [3200, 4800, 5600],

  // Sphinx <-> Sahel
  "sphinx_sahel": [3400, 5000, 6000],
  "sahel_sphinx": [3400, 5000, 6000]
};

// 4. Initialisation & DOM Loaded
document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  initStickyNavbar();
  initMobileMenu();
  initScrollAnimations();
  initBookingForm();
  initHeroSlider();
});

// 5. Language Switcher Logic
function initLanguage() {
  const langToggle = document.getElementById("lang-toggle");
  const langToggleMobile = document.getElementById("lang-toggle-mobile");
  
  // Apply language UI translation
  const applyLanguage = (lang) => {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    
    // Toggle active classes on toggler visual
    if (lang === "ar") {
      document.querySelectorAll(".toggle-dot").forEach(dot => dot.classList.add("translate-x-0"));
      document.querySelectorAll(".toggle-dot").forEach(dot => dot.classList.remove("translate-x-full"));
    } else {
      document.querySelectorAll(".toggle-dot").forEach(dot => dot.classList.remove("translate-x-0"));
      document.querySelectorAll(".toggle-dot").forEach(dot => dot.classList.add("translate-x-full"));
    }
    
    // Translate data-i18n items
    document.querySelectorAll("[data-i18n]").forEach(element => {
      const key = element.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        element.innerHTML = translations[lang][key];
      }
    });

    // Translate input/textarea placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
      const key = element.getAttribute("data-i18n-placeholder");
      if (translations[lang] && translations[lang][key]) {
        element.setAttribute("placeholder", translations[lang][key]);
      }
    });

    // Recalculate quote text based on new language
    calculateEstimate();
  };

  // Set default (Arabic)
  applyLanguage("ar");

  // Event Listeners for translation switches
  if (langToggle) {
    langToggle.addEventListener("change", (e) => {
      applyLanguage(e.target.checked ? "en" : "ar");
      if (langToggleMobile) langToggleMobile.checked = e.target.checked;
    });
  }
  
  if (langToggleMobile) {
    langToggleMobile.addEventListener("change", (e) => {
      applyLanguage(e.target.checked ? "en" : "ar");
      if (langToggle) langToggle.checked = e.target.checked;
    });
  }
}

// 6. Sticky Navigation Glassmorphism
function initStickyNavbar() {
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
      navbar.classList.add("py-3");
      navbar.classList.remove("py-5");
    } else {
      navbar.classList.remove("scrolled");
      navbar.classList.remove("py-3");
      navbar.classList.add("py-5");
    }
  }, { passive: true });
}

// 7. Mobile Navigation Drawer
function initMobileMenu() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const closeBtn = document.getElementById("mobile-close-btn");
  const menuDrawer = document.getElementById("mobile-menu-drawer");
  const menuLinks = document.querySelectorAll(".mobile-menu-link");

  const toggleMenu = () => {
    menuDrawer.classList.toggle("translate-x-full");
    // Under LTR, translate is in opposite direction natively
    if (document.documentElement.dir === "ltr") {
      menuDrawer.classList.toggle("-translate-x-full");
    }
  };

  if (menuBtn) menuBtn.addEventListener("click", toggleMenu);
  if (closeBtn) closeBtn.addEventListener("click", toggleMenu);
  
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      menuDrawer.classList.add("translate-x-full");
      if (document.documentElement.dir === "ltr") {
        menuDrawer.classList.add("-translate-x-full");
      }
    });
  });
}

// 8. Custom Scroll Animations (Intersection Observer)
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

// 9. Booking Form Logic & Price Estimation
function initBookingForm() {
  const pickupSelect = document.getElementById("pickup");
  const dropoffSelect = document.getElementById("dropoff");
  const pickupOtherDiv = document.getElementById("pickup-other-container");
  const dropoffOtherDiv = document.getElementById("dropoff-other-container");
  
  const formElements = ["pickup", "dropoff", "car-type", "passengers", "luggage"];
  
  // Display other location input fields if "other" is selected
  if (pickupSelect) {
    pickupSelect.addEventListener("change", (e) => {
      if (e.target.value === "other") {
        pickupOtherDiv.classList.remove("hidden");
        document.getElementById("pickup-other").setAttribute("required", "required");
      } else {
        pickupOtherDiv.classList.add("hidden");
        document.getElementById("pickup-other").removeAttribute("required");
      }
      calculateEstimate();
    });
  }

  if (dropoffSelect) {
    dropoffSelect.addEventListener("change", (e) => {
      if (e.target.value === "other") {
        dropoffOtherDiv.classList.remove("hidden");
        document.getElementById("dropoff-other").setAttribute("required", "required");
      } else {
        dropoffOtherDiv.classList.add("hidden");
        document.getElementById("dropoff-other").removeAttribute("required");
      }
      calculateEstimate();
    });
  }

  // Recalculate price on changing any key parameters
  formElements.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("change", calculateEstimate);
  });

  // Booking Form Submission to WhatsApp
  const bookingForm = document.getElementById("booking-form");
  if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      sendWhatsAppBooking();
    });
  }
}

// Live price estimation logic
function calculateEstimate() {
  const pickup = document.getElementById("pickup").value;
  const dropoff = document.getElementById("dropoff").value;
  const carType = document.getElementById("car-type").value;
  const priceDisplay = document.getElementById("estimated-price-display");
  const rawPriceInput = document.getElementById("estimated-price-raw");

  if (!pickup || !dropoff || !carType) {
    setPriceText(currentLang === "ar" ? "أدخل تفاصيل الرحلة للحساب" : "Enter trip details to calculate", false);
    return;
  }

  // Same Pickup and Dropoff
  if (pickup === dropoff && pickup !== "other") {
    setPriceText(currentLang === "ar" ? "يرجى تحديد مكان انطلاق ووصول مختلفين" : "Please select different pickup and drop-off points", false);
    return;
  }

  // Handle "Other" locations
  if (pickup === "other" || dropoff === "other") {
    setPriceText(currentLang === "ar" ? "حسب المسافة (عرض سعر خاص عبر الواتساب)" : "Based on distance (Custom quote via WhatsApp)", true);
    rawPriceInput.value = "Custom Quote";
    return;
  }

  // Build matrix lookup keys
  const routeKey = `${pickup}_${dropoff}`;
  const carIndex = (carType === "corolla" || carType === "cn7") ? 0 : carType === "jetour" ? 1 : 2;

  let basePrice = pricingMatrix[routeKey];
  
  if (basePrice) {
    const finalPrice = basePrice[carIndex];
    rawPriceInput.value = `${finalPrice} EGP`;
    if (currentLang === "ar") {
      setPriceText(`${finalPrice.toLocaleString("ar-EG")} جنيه مصري`, true);
    } else {
      setPriceText(`${finalPrice.toLocaleString("en-US")} EGP`, true);
    }
  } else {
    // Default fallback estimation based on generic distances
    let defaultPrice = 2200; // standard sedan fallback
    if (carType === "jetour") defaultPrice = 4000;
    if (carType === "xpander") defaultPrice = 4800;
    
    rawPriceInput.value = `~${defaultPrice} EGP`;
    if (currentLang === "ar") {
      setPriceText(`حوالي ${defaultPrice.toLocaleString("ar-EG")} جنيه مصري (تواصل لتأكيد السعر)`, true);
    } else {
      setPriceText(`Approx. ${defaultPrice.toLocaleString("en-US")} EGP (Confirm via WhatsApp)`, true);
    }
  }
}

function setPriceText(text, isHighlighted) {
  const priceDisplay = document.getElementById("estimated-price-display");
  if (!priceDisplay) return;
  
  priceDisplay.textContent = text;
  if (isHighlighted) {
    priceDisplay.classList.add("text-gold");
    priceDisplay.classList.add("gold-text-glow");
    priceDisplay.classList.add("text-3xl");
    priceDisplay.classList.remove("text-gray-400");
    priceDisplay.classList.remove("text-lg");
  } else {
    priceDisplay.classList.remove("text-gold");
    priceDisplay.classList.remove("gold-text-glow");
    priceDisplay.classList.remove("text-3xl");
    priceDisplay.classList.add("text-gray-400");
    priceDisplay.classList.add("text-lg");
  }
}

// Generate formatted text and open WhatsApp
function sendWhatsAppBooking() {
  const pickupVal = document.getElementById("pickup").value;
  const dropoffVal = document.getElementById("dropoff").value;
  const pickupOther = document.getElementById("pickup-other").value;
  const dropoffOther = document.getElementById("dropoff-other").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const carTypeVal = document.getElementById("car-type").value;
  const passengers = document.getElementById("passengers").value;
  const luggage = document.getElementById("luggage").value;
  const estimatedPrice = document.getElementById("estimated-price-raw").value || "TBD";

  // Map values to display text
  const getLocName = (val, otherVal) => {
    if (val === "other") return otherVal;
    const optEl = document.querySelector(`#pickup option[value="${val}"]`);
    return optEl ? optEl.textContent.trim() : val;
  };

  const pickupName = getLocName(pickupVal, pickupOther);
  const dropoffName = getLocName(dropoffVal, dropoffOther);
  
  let carName = carTypeVal;
  if (carTypeVal === "corolla") carName = currentLang === "ar" ? "تويوتا كورولا (Toyota Corolla)" : "Toyota Corolla";
  if (carTypeVal === "cn7") carName = currentLang === "ar" ? "هيونداي CN7 (Hyundai Elantra)" : "Hyundai Elantra CN7";
  if (carTypeVal === "xpander") carName = currentLang === "ar" ? "ميتسوبيشي إكسباندر (Mitsubishi Xpander)" : "Mitsubishi Xpander (7-Seater)";
  if (carTypeVal === "jetour") carName = currentLang === "ar" ? "جيتور SUV (Jetour Luxury)" : "Premium Jetour SUV";

  // Build professional message
  let message = "";
  if (currentLang === "ar") {
    message = `السلام عليكم ورحمة الله وبركاته،\n`;
    message += `أود طلب حجز ليموزين من آل ياسين ليموزين:\n\n`;
    message += `📍 مكان الانطلاق: ${pickupName}\n`;
    message += `🏁 وجهة الوصول: ${dropoffName}\n`;
    message += `📅 التاريخ: ${date}\n`;
    message += `⏰ وقت التحرك: ${time}\n`;
    message += `🚗 نوع السيارة: ${carName}\n`;
    message += `👥 عدد الركاب: ${passengers}\n`;
    message += `💼 عدد الحقائب: ${luggage}\n`;
    message += `💰 السعر التقديري: ${estimatedPrice}\n\n`;
    message += `الرجاء تأكيد الحجز وإفادتي بالتفاصيل. شكراً لكم!`;
  } else {
    message = `Hello Al Yassin Limousine,\n`;
    message += `I would like to request a ride booking:\n\n`;
    message += `📍 Pickup Location: ${pickupName}\n`;
    message += `🏁 Destination: ${dropoffName}\n`;
    message += `📅 Date: ${date}\n`;
    message += `⏰ Time: ${time}\n`;
    message += `🚗 Vehicle Class: ${carName}\n`;
    message += `👥 Passengers: ${passengers}\n`;
    message += `💼 Luggage Count: ${luggage}\n`;
    message += `💰 Estimated Fare: ${estimatedPrice}\n\n`;
    message += `Please confirm availability and booking details. Thank you!`;
  }

  // Encode message for URL
  const encodedText = encodeURIComponent(message);
  // Send to primary number: 01271170882
  const phoneNumber = "201271170882";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedText}`;

  // Open WhatsApp in new tab
  window.open(whatsappUrl, "_blank");
}

// 10. Hero Section Image / Background Slider
function initHeroSlider() {
  const slides = document.querySelectorAll(".hero-slide");
  if (slides.length <= 1) return;
  
  let currentSlide = 0;
  
  setInterval(() => {
    slides[currentSlide].classList.remove("opacity-100");
    slides[currentSlide].classList.add("opacity-0");
    
    currentSlide = (currentSlide + 1) % slides.length;
    
    slides[currentSlide].classList.remove("opacity-0");
    slides[currentSlide].classList.add("opacity-100");
  }, 6000); // changes slides every 6 seconds
}
