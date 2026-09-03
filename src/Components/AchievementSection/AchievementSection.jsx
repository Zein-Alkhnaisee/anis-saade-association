import React from "react";
import { useApp } from "./../../context/AppContext";
import {
  FaUsers,
  FaHandsHelping,
  FaHeart,
  FaRocket,
  FaAward,
  FaUserFriends,
  FaLightbulb,
  FaShieldAlt,
  FaChild,
  FaGraduationCap,
  FaArrowRight,
  FaClock,
  FaStar,
  FaHandHoldingHeart
} from "react-icons/fa";
import "./AchievementSection.css";

const VolunteerSection = () => {
  const { language, t } = useApp();

  // رابط نموذج Google Forms
  const volunteerFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd6-ZV17jIj9Jzk6U1hXmNIH8XnNd0Wx8HZQMlicwz3jPuEeA/viewform";

  const handleVolunteerClick = () => {
    window.open(volunteerFormUrl, "_blank", "noopener,noreferrer");
  };

  // إحصائيات المتطوعين
  const volunteerStats = [
    { 
      number: "150+", 
      label: { en: "Active Volunteers", ar: "متطوع نشط" },
      icon: <FaUsers />
    },
    { 
      number: "5K+", 
      label: { en: "Hours Monthly", ar: "ساعة شهرياً" },
      icon: <FaClock />
    },
    { 
      number: "45+", 
      label: { en: "Community Projects", ar: "مشروع مجتمعي" },
      icon: <FaHandHoldingHeart />
    },
    { 
      number: "98%", 
      label: { en: "Satisfaction Rate", ar: "معدل الرضا" },
      icon: <FaStar />
    }
  ];

  // مجالات التطوع
  const volunteerAreas = [
    {
      icon: <FaChild />,
      title: {
        en: "Child Protection",
        ar: "حماية الطفل"
      },
      description: {
        en: "Support child protection programs and ensure safe environments for children with disabilities",
        ar: "دعم برامج حماية الطفل وضمان بيئات آمنة للأطفال ذوي الإعاقة"
      },
      color: "#E74C3C"
    },
    {
      icon: <FaGraduationCap />,
      title: {
        en: "Education Support",
        ar: "الدعم التعليمي"
      },
      description: {
        en: "Assist in educational programs and skills development for children and youth",
        ar: "المساعدة في البرامج التعليمية وتنمية المهارات للأطفال والشباب"
      },
      color: "#3498DB"
    },
    {
      icon: <FaHandsHelping />,
      title: {
        en: "Community Outreach",
        ar: "التواصل المجتمعي"
      },
      description: {
        en: "Participate in community awareness campaigns and family support programs",
        ar: "المشاركة في حملات التوعية المجتمعية وبرامج دعم الأسر"
      },
      color: "#2ECC71"
    },
    {
      icon: <FaShieldAlt />,
      title: {
        en: "Program Support",
        ar: "دعم البرامج"
      },
      description: {
        en: "Help in organizing and implementing various association programs and activities",
        ar: "المساعدة في تنظيم وتنفيذ برامج وأنشطة الجمعية المختلفة"
      },
      color: "#9B59B6"
    }
  ];

  // فوائد التطوع
  const benefits = [
    {
      icon: <FaAward />,
      title: {
        en: "Professional Certification",
        ar: "شهادة معتمدة"
      },
      description: {
        en: "Receive official volunteer certificates and recommendation letters",
        ar: "احصل على شهادات تطوع معتمدة ورسائل توصية"
      }
    },
    {
      icon: <FaRocket />,
      title: {
        en: "Skill Development",
        ar: "تطوير المهارات"
      },
      description: {
        en: "Enhance your leadership, communication, and teamwork skills",
        ar: "طور مهاراتك في القيادة والتواصل والعمل الجماعي"
      }
    },
    {
      icon: <FaUserFriends />,
      title: {
        en: "Networking",
        ar: "شبكة علاقات"
      },
      description: {
        en: "Connect with professionals and build valuable relationships",
        ar: "تواصل مع محترفين وابن شبكة علاقات قيمة"
      }
    },
    {
      icon: <FaLightbulb />,
      title: {
        en: "Practical Experience",
        ar: "خبرة عملية"
      },
      description: {
        en: "Gain hands-on experience in humanitarian and community work",
        ar: "اكتسب خبرة عملية في العمل الإنساني والمجتمعي"
      }
    }
  ];

  // قصص نجاح المتطوعين
  const successStories = [
    {
      name: { en: "Mohammed Ali", ar: "محمد علي" },
      role: { en: "Education Volunteer", ar: "متطوع تعليمي" },
      story: {
        en: "Through volunteering, I discovered my passion for teaching and now lead educational workshops for children with special needs.",
        ar: "من خلال التطوع، اكتشفت شغفي بالتدريس وأقود الآن ورش عمل تعليمية للأطفال ذوي الاحتياجات الخاصة."
      },
      duration: { en: "2 years volunteering", ar: "سنتين من التطوع" }
    },
    {
      name: { en: "Sarah Ahmed", ar: "سارة أحمد" },
      role: { en: "Community Support", ar: "دعم مجتمعي" },
      story: {
        en: "Volunteering helped me develop strong communication skills and make a real impact in my community.",
        ar: "ساعدني التطوع في تطوير مهارات تواصل قوية وإحداث تأثير حقيقي في مجتمعي."
      },
      duration: { en: "18 months volunteering", ar: "18 شهراً من التطوع" }
    }
  ];

  return (
    <section id="volunteer" className="volunteer-section" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="container">
        {/* عنوان القسم */}
        <div className="section-header">
          <h2 className="section-title">
            {language === "ar" ? "كن متطوعاً" : "Become a Volunteer"}
          </h2>
          <p className="section-subtitle">
            {language === "ar" 
              ? "انضم إلى عائلة متطوعينا وساهم في صنع فرق حقيقي في حياة الأطفال والأسر. معاً نصنع التغيير"
              : "Join our volunteer family and help make a real difference in the lives of children and families. Together we create change"
            }
          </p>
        </div>


        {/* قسم مجالات التطوع */}
        <div className="volunteer-areas-section">
          <div className="section-header-inner">
            <h3>{language === "ar" ? "مجالات التطوع" : "Volunteer Opportunities"}</h3>
            <p>
              {language === "ar" 
                ? "اختر المجال الذي يناسب مهاراتك واهتماماتك"
                : "Choose the field that matches your skills and interests"
              }
            </p>
          </div>
          <div className="areas-grid">
            {volunteerAreas.map((area, index) => (
              <div 
                key={index} 
                className="area-card"
                style={{ '--area-color': area.color }}
              >
                <div className="area-icon" style={{ color: area.color }}>
                  {area.icon}
                </div>
                <h4>{area.title[language]}</h4>
                <p>{area.description[language]}</p>
                <div className="area-actions">
                  <button 
                    className="area-btn"
                    onClick={handleVolunteerClick}
                    style={{ backgroundColor: area.color }}
                  >
                    {language === "ar" ? "تطوع الآن" : "Volunteer Now"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* قسم فوائد التطوع */}
        <div className="benefits-section">
          <div className="section-header-inner">
            <h3>{language === "ar" ? "لماذا تتطوع معنا؟" : "Why Volunteer With Us?"}</h3>
            <p>
              {language === "ar" 
                ? "اكتشف الفوائد والامتيازات التي نقدمها لمتطوعينا"
                : "Discover the benefits and privileges we offer our volunteers"
              }
            </p>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h4>{benefit.title[language]}</h4>
                <p>{benefit.description[language]}</p>
              </div>
            ))}
          </div>
        </div>

        {/* دعوة للتطوع الرئيسية */}
        <div className="volunteer-cta">
          <div className="cta-content">
            <div className="cta-text">
              <h3>
                {language === "ar" 
                  ? "كن جزءاً من التغيير"
                  : "Be Part of the Change"
                }
              </h3>
              <p>
                {language === "ar" 
                  ? "انضم إلى أكثر من 150 متطوع يحدثون فرقاً حقيقياً في مجتمعنا كل يوم"
                  : "Join over 150 volunteers making a real difference in our community every day"
                }
              </p>
              <div className="cta-features">
                <div className="feature">
                  <FaHeart className="feature-icon" />
                  <span>{language === "ar" ? "تأثير مباشر" : "Direct Impact"}</span>
                </div>
                <div className="feature">
                  <FaUsers className="feature-icon" />
                  <span>{language === "ar" ? "مجتمع داعم" : "Supportive Community"}</span>
                </div>
                <div className="feature">
                  <FaAward className="feature-icon" />
                  <span>{language === "ar" ? "تطور مهني" : "Professional Growth"}</span>
                </div>
              </div>
            </div>
            <div className="cta-action">
              <button className="cta-btn-primary" onClick={handleVolunteerClick}>
                <span>{language === "ar" ? "ابدأ رحلتك التطوعية" : "Start Your Volunteer Journey"}</span>
                <FaArrowRight className="btn-icon" />
              </button>
              <p className="cta-note">
                {language === "ar" 
                  ? "سيتم فتح نموذج التطوع في نافذة جديدة - عملية التقديم تستغرق 5 دقائق فقط"
                  : "The volunteer form will open in a new window - Application takes only 5 minutes"
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;