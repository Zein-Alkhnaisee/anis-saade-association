import React, { useState, useEffect } from "react";
import { useApp } from "./../../context/AppContext";
import "./Navebar.css";
import { BiSolidHomeHeart} from "react-icons/bi";
import { FaUsers, FaHandsHelping, FaHandHoldingHeart } from "react-icons/fa";
import { PiBandaidsFill, PiSunDimFill} from "react-icons/pi";
import { FaMoon } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { language, theme, toggleLanguage, toggleTheme, t } = useApp();

  const navItems = [
    { id: "home", label: t.nav.home, icon: <BiSolidHomeHeart/> },
    { id: "about", label: t.nav.about, icon: <FaUsers/>},
    { id: "services", label: t.nav.services, icon: <PiBandaidsFill/> },
    { id: "projects", label: t.nav.projects, icon: <FaHandsHelping/> },
    { id: "volunteer", label: t.nav.volunteer, icon: <FaHandHoldingHeart/> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const footer = document.getElementById("footer");
      const scrollPosition = window.scrollY + 100;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // إذا كان المستخدم في الفوتر أو قريب منه، لا نحدد أي قسم كنشط
      if (footer && window.scrollY + windowHeight >= documentHeight - 150) {
        setActiveSection("");
        return;
      }

      let currentActive = "home";
      
      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          if (
            scrollPosition >= sectionTop - 100 &&
            scrollPosition < sectionTop + sectionHeight - 100
          ) {
            currentActive = section.id;
          }
        }
      });

      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    // استدعاء مباشر عند التحميل
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [language, navItems]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navbar" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="container">
        <div className="nav-content">
          {/* الشعار مع الاسم */}
          <div className="logo" onClick={() => scrollToSection("home")}>
            <div className="logo-image">
              <img
                src='/download.jpg'
                alt={t.logo.text}
                className="logo-img"
              />
            </div>
            <div className="logo-text">
              <h2>{t.logo.short}</h2>
              <span>
                {language === "ar"
                  ? "جمعية أنيس سعادة الملائكية"
                  : "Angelic Association of Anis Saade"}
              </span>
            </div>
          </div>

          {/* عناصر التنقل */}
          <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`nav-link ${
                  activeSection === item.id ? "active" : ""
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
                <span className="active-indicator"></span>
              </button>
            ))}
          </div>

          {/* عناصر التحكم */}
          <div className="nav-controls">
            <button
              className="control-btn theme-toggle"
              onClick={toggleTheme}
              title={
                theme === "light"
                  ? t.theme.dark
                  : t.theme.light
              }
            >
              <span className="control-icon">
                {theme === "light" ? <FaMoon/> : <PiSunDimFill/>}
              </span>
              <span className="control-tooltip">
                {theme === "light" ? t.theme.dark : t.theme.light}
              </span>
            </button>

            <button
              className="control-btn language-toggle"
              onClick={toggleLanguage}
              title={
                language === "en"
                  ? t.language.arabic
                  : t.language.english
              }
            >
              <span className="control-icon-lang">
                {language === "en" ? "AR" : "EN"}
              </span>
              <span className="control-tooltip-lang">
                {language === "en" ? t.language.arabic : t.language.english}
              </span>
            </button>

            <button
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span
                className={`menu-line ${isMenuOpen ? "line-1" : ""}`}
              ></span>
              <span
                className={`menu-line ${isMenuOpen ? "line-2" : ""}`}
              ></span>
              <span
                className={`menu-line ${isMenuOpen ? "line-3" : ""}`}
              ></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;