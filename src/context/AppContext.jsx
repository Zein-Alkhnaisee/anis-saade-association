import React, { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [theme, setTheme] = useState("light");

  const translations = {
    en: {
      nav: {
        home: 'Home',
        about: 'About Us',
        services: 'Services',
        projects: 'Projects',
        volunteer: 'Volunteer',
        contact: 'Contact'
      },
      logo: {
        text: 'Angelic Association of Anis Saade',
        subtitle: 'AAAS',
        short: 'AAAS'
      },
      hero: {
        title: 'Angelic Association of',
        highlighted: 'Anis Saade (AAAS)',
        description: 'We work together to build a better society through protection programs, education, training, and psychological support. Join our humanitarian journey and be part of the change.',
        volunteerBtn: 'Become a Volunteer',
        exploreBtn: 'Explore Projects',
        volunteers: 'Active Volunteers',
        beneficiaries: 'Beneficiaries',
        projects: 'Active Projects'
      },
      about: {
        title: 'About Us',
        description: 'Angelic Association of Anis Saade (AAAS) is a humanitarian volunteer organization established in 2010 with the aim of serving the community and improving the quality of life for needy individuals and families. We believe in the power of volunteering and its positive impact on building communities.',
        vision: 'Our Vision',
        visionText: 'An integrated community where individuals enjoy a decent life and a better future',
        mission: 'Our Mission', 
        missionText: 'Empowering the community through sustainable development and volunteer programs',
        values: 'Our Values',
        valuesText: 'Volunteering, Transparency, Creativity, Cooperation, Humanity',
        years: 'Years of Giving',
        successful: 'Successful Projects', 
        partners: 'Community Partners'
      },
      services: {
        title: "Our Services & Programs",
        subtitle: "We provide a variety of services to meet community needs",
        childProtection: "Child Protection",
        childProtectionDesc: "Integrated programs for child protection and family awareness",
        courses: "Educational Courses",
        coursesDesc: "Educational and training courses for skills development",
        training: "Training & Employment",
        trainingDesc: "Preparing youth for the labor market and employment opportunities",
        gymnastics: "Gymnastics Training",
        gymnasticsDesc: "Sports activities to enhance mental and physical health",
        community: "Community Services",
        communityDesc: "Social Activities and Charitable Works",
        support: "Psychological Support Sessions",
        supportDesc: "Individual and group sessions for psychological support",
        readMore: "Read More →",
      },
      // إضافة الترجمات للثيم واللغة
      theme: {
        dark: "Dark Mode",
        light: "Light Mode"
      },
      language: {
        arabic: "Arabic",
        english: "English"
      }
    },
    ar: {
      nav: {
        home: 'الرئيسية',
        about: 'من نحن',
        services: 'خدماتنا',
        projects: 'المشاريع',
        volunteer: 'التطوع',
        contact: 'اتصل بنا'
      },
      logo: {
        text: 'جمعية أنيس سعادة الملائكية',
        subtitle: 'AAAS',
        short: 'AAAS'
      },
      hero: {
        title: 'جمعية أنيس سعادة',
        highlighted: 'الملائكية (AAAS)',
        description: 'نعمل معاً لبناء مجتمع أفضل من خلال برامج الحماية، التعليم، التدريب والدعم النفسي. انضم إلى رحلتنا الإنسانية وكن جزءاً من التغيير.',
        volunteerBtn: 'كن متطوعاً',
        exploreBtn: 'استكشف المشاريع',
        volunteers: 'متطوع نشط',
        beneficiaries: 'مستفيد',
        projects: 'مشروع نشط'
      },
      about: {
        title: 'من نحن',
        description: 'جمعية أنيس سعادة الملائكية (AAAS) هي منظمة إنسانية تطوعية تأسست عام 2010 بهدف خدمة المجتمع وتحسين جودة الحياة للأفراد والأسر المحتاجة. نحن نؤمن بقوة التطوع وأثره الإيجابي في بناء المجتمعات.',
        vision: 'رؤيتنا',
        visionText: 'مجتمع متكامل يتمتع أفراده بحياة كريمة ومستقبل أفضل',
        mission: 'رسالتنا',
        missionText: 'تمكين المجتمع من خلال البرامج التنموية والتطوعية المستدامة',
        values: 'قيمنا',
        valuesText: 'التطوع، الشفافية، الإبداع، التعاون، الإنسانية',
        years: 'سنة من العطاء',
        successful: 'مشروع ناجح',
        partners: 'شريك مجتمعي'
      },
      services: {
        title: "خدماتنا وبرامجنا",
        subtitle: "نقدم مجموعة متنوعة من الخدمات لتلبية احتياجات المجتمع",
        childProtection: "حماية الطفل",
        childProtectionDesc: "برامج متكاملة لحماية الأطفال وتوعية الأسرة",
        courses: "كورسات تعليمية",
        coursesDesc: "دورات تعليمية وتدريبية لتنمية المهارات",
        training: "تدريب وتوظيف",
        trainingDesc: "تهيئة الشباب لسوق العمل وفرص التوظيف",
        gymnastics: "تدريبات جمباز",
        gymnasticsDesc: "أنشطة رياضية لتعزيز الصحة النفسية والجسدية",
        community: "خدمات مجتمعية",
        communityDesc: "أنشطة اجتماعية وأعمال خيرية",
        support: "جلسات دعم نفسي",
        supportDesc: "جلسات فردية وجماعية للدعم النفسي",
        readMore: "اقرأ المزيد →",
      },
      // إضافة الترجمات للثيم واللغة
      theme: {
        dark: "الوضع الليلي",
        light: "الوضع النهاري"
      },
      language: {
        arabic: "العربية",
        english: "الإنجليزية"
      }
    },
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    const savedTheme = localStorage.getItem("theme") || "light";

    setLanguage(savedLanguage);
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
    document.documentElement.setAttribute("dir", savedLanguage === "ar" ? "rtl" : "ltr");
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    document.documentElement.setAttribute("dir", newLanguage === "ar" ? "rtl" : "ltr");
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const value = {
    language,
    theme,
    toggleLanguage,
    toggleTheme,
    t: translations[language],
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};