import React, { useState, useEffect } from "react";
import { useApp } from "./../../context/AppContext";
import {
  FaShieldAlt,
  FaClinicMedical,
  FaGraduationCap,
  FaComments,
  FaHandsHelping,
  FaUsers,
  FaBriefcase,
  FaHeart,
  FaChild,
  FaSchool,
  FaUserFriends,
  FaHandHoldingHeart
} from "react-icons/fa";
import "./ServicesSection.css";

const ServicesSection = () => {
  const { language, t } = useApp();
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (activeService !== null && !e.target.closest(".service-card")) {
        setActiveService(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [activeService]);

  // بيانات الخدمات الحقيقية للجمعية
  const servicesData = [
    {
      id: 1,
      title: {
        en: "Child Protection",
        ar: "حماية الطفل"
      },
      description: {
        en: "Integrated child protection programs including psychosocial support, parenting sessions, and case management",
        ar: "برامج متكاملة لحماية الطفل تشمل الدعم النفسي الاجتماعي، جلسات الرعاية الوالدية، وإدارة الحالة"
      },
      details: {
        en: [
          "Psychosocial Support (PSS) Sessions",
          "Parenting Program Sessions", 
          "Gender-Based Violence Awareness",
          "Case Management Services",
          "Risk Education Sessions"
        ],
        ar: [
          "جلسات الدعم النفسي الاجتماعي",
          "جلسات برنامج الرعاية الوالدية",
          "التوعية بالعنف القائم على النوع الاجتماعي",
          "خدمات إدارة الحالة",
          "جلسات التوعية بمخلفات الحروب"
        ]
      },
      icon: <FaShieldAlt />,
      color: "#1B305B",
      connections: [2, 3, 4],
      stats: {
        beneficiaries: 5000,
        sessions: 12000,
        locations: 6
      }
    },
    {
      id: 2,
      title: {
        en: "Physical Therapy",
        ar: "العلاج الفيزيائي"
      },
      description: {
        en: "Free physical therapy sessions for people with disabilities and those in need of rehabilitation",
        ar: "جلسات علاج فيزيائي مجانية لذوي الإعاقة والمحتاجين للعلاج التأهيلي"
      },
      details: {
        en: [
          "Individual Therapy Sessions",
          "Rehabilitation Programs",
          "Mobility Aid Support",
          "Home-based Care",
          "Progress Monitoring"
        ],
        ar: [
          "جلسات علاج فردية",
          "برامج تأهيلية",
          "دعم أجهزة الحركة",
          "رعاية منزلية",
          "متابعة التقدم"
        ]
      },
      icon: <FaClinicMedical />,
      color: "#2E4A7D",
      connections: [1, 3, 6],
      stats: {
        beneficiaries: 10000,
        sessions: 18000,
        years: 10
      }
    },
    {
      id: 3,
      title: {
        en: "Educational Programs",
        ar: "البرامج التعليمية"
      },
      description: {
        en: "Specialized educational programs and classes for children with disabilities and youth development",
        ar: "برامج تعليمية متخصصة وفصول دراسية للأطفال ذوي الإعاقة وتنمية الشباب"
      },
      details: {
        en: [
          "Special Education Classes",
          "Vocational Training",
          "Life Skills Development",
          "Youth Empowerment",
          "Educational Support"
        ],
        ar: [
          "فصول تعليم خاص",
          "تدريب مهني",
          "تنمية المهارات الحياتية",
          "تمكين الشباب",
          "دعم تعليمي"
        ]
      },
      icon: <FaGraduationCap />,
      color: "#4166A8",
      connections: [1, 2, 4, 5],
      stats: {
        beneficiaries: 1800,
        programs: 15,
        volunteers: 200
      }
    },
    {
      id: 4,
      title: {
        en: "Psychological Support",
        ar: "الدعم النفسي"
      },
      description: {
        en: "Individual and group psychological support sessions for children, youth, and caregivers",
        ar: "جلسات دعم نفسي فردية وجماعية للأطفال والشباب ومقدمي الرعاية"
      },
      details: {
        en: [
          "Individual Counseling",
          "Group Therapy Sessions",
          "Trauma Healing",
          "Stress Management",
          "Family Support"
        ],
        ar: [
          "استشارات فردية",
          "جلسات علاج جماعي",
          "التعافي من الصدمات",
          "إدارة الضغط النفسي",
          "دعم أسري"
        ]
      },
      icon: <FaComments />,
      color: "#5483D4",
      connections: [1, 3, 5],
      stats: {
        sessions: 8000,
        beneficiaries: 2000,
        locations: 5
      }
    },
    {
      id: 5,
      title: {
        en: "Youth Development",
        ar: "تنمية الشباب"
      },
      description: {
        en: "Comprehensive youth development programs including life skills, vocational training, and initiatives",
        ar: "برامج شاملة لتنمية الشباب تشمل المهارات الحياتية، التدريب المهني، والمبادرات"
      },
      details: {
        en: [
          "Life Skills Training",
          "Vocational Courses",
          "Youth-led Initiatives",
          "Leadership Development",
          "Community Engagement"
        ],
        ar: [
          "تدريب المهارات الحياتية",
          "دورات مهنية",
          "مبادرات يقودها الشباب",
          "تنمية القيادة",
          "مشاركة مجتمعية"
        ]
      },
      icon: <FaUserFriends />,
      color: "#67A0FF",
      connections: [3, 4, 6],
      stats: {
        youth: 1200,
        initiatives: 50,
        trainings: 300
      }
    },
    {
      id: 6,
      title: {
        en: "Humanitarian Aid",
        ar: "المساعدات الإنسانية"
      },
      description: {
        en: "Emergency relief and support programs for families in need, including cash transfers and basic needs",
        ar: "برامج الإغاثة الطارئة والدعم للأسر المحتاجة، بما في ذلك التحويلات النقدية والاحتياجات الأساسية"
      },
      details: {
        en: [
          "Cash Transfer Programs",
          "Emergency Relief",
          "Basic Needs Support",
          "Hygiene Kits Distribution",
          "Family Assistance"
        ],
        ar: [
          "برامج التحويلات النقدية",
          "إغاثة طارئة",
          "دعم الاحتياجات الأساسية",
          "توزيع سلات النظافة",
          "مساعدات عائلية"
        ]
      },
      icon: <FaHandHoldingHeart />,
      color: "#7AB6FF",
      connections: [2, 5],
      stats: {
        families: 4500,
        cashTransfers: 1470,
        reliefKits: 924
      }
    }
  ];

  const handleServiceClick = (serviceId) => {
    setActiveService(activeService === serviceId ? null : serviceId);
  };

  const getConnectedServices = (serviceId) => {
    const service = servicesData.find((s) => s.id === serviceId);
    return service
      ? service.connections
          .map((connId) => servicesData.find((s) => s.id === connId))
          .filter(Boolean)
      : [];
  };

  const formatNumber = (number) => {
    return number.toLocaleString();
  };

  return (
    <section
      id="services"
      className="services-section"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            {language === "ar" ? "خدماتنا وبرامجنا" : "Our Services & Programs"}
          </h2>
          <p className="section-subtitle">
            {language === "ar" 
              ? "نقدم مجموعة متكاملة من الخدمات للأطفال ذوي الإعاقة وأسرهم، بالشراكة مع منظمة اليونيسف والمجتمع المحلي"
              : "We provide integrated services for children with disabilities and their families, in partnership with UNICEF and the local community"
            }
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className={`service-card ${
                activeService === service.id ? "active" : ""
              }`}
              style={{ "--card-color": service.color }}
              onClick={() => handleServiceClick(service.id)}
            >
              <div className="card-icon-wrapper">
                <div
                  className="card-icon"
                  style={{ backgroundColor: service.color }}
                >
                  {service.icon}
                </div>
                <div className="icon-backdrop"></div>
              </div>

              <div className="card-content">
                <h3 className="card-title">{service.title[language]}</h3>
                <p className="card-description">
                  {service.description[language]}
                </p>

                {/* إحصائيات سريعة */}
                <div className="service-stats">
                  {Object.entries(service.stats).map(([key, value], index) => (
                    <div key={key} className="service-stat">
                      <span className="stat-number-service">{formatNumber(value)}+</span>
                      <span className="stat-label">
                        {language === "ar" 
                          ? getStatLabelAr(key)
                          : getStatLabelEn(key)
                        }
                      </span>
                    </div>
                  ))}
                </div>

                {activeService === service.id && (
                  <div className="details-panel">
                    <h4 className="details-title">
                      {language === "ar" ? "تفاصيل الخدمة" : "Service Details"}
                    </h4>
                    <ul className="details-list">
                      {service.details[language].map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>

                    <div className="connections-panel">
                      <h5 className="connections-title">
                        {language === "ar" ? "الخدمات المرتبطة" : "Related Services"}
                      </h5>
                      <div className="connections-list">
                        {getConnectedServices(service.id).map((connService) => (
                          <div
                            key={connService.id}
                            className="connection-item"
                            style={{ "--conn-color": connService.color }}
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveService(connService.id);
                            }}
                          >
                            <div className="conn-icon">{connService.icon}</div>
                            <span className="conn-title">
                              {connService.title[language]}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <button className="card-button">
                <span>
                  {activeService === service.id
                    ? language === "ar" ? "إخفاء التفاصيل" : "Hide Details"
                    : language === "ar" ? "عرض التفاصيل" : "View Details"
                  }
                </span>
                <div className="button-arrow">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d={
                        activeService === service.id
                          ? "M4 10L8 6L12 10"
                          : language === "ar" 
                            ? "M10 12L6 8L10 4" 
                            : "M6 12L10 8L6 4"
                      }
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* إحصائيات عامة */}
        <div className="overall-stats">
          <div className="stat-item">
            <FaUsers className="stat-icon" />
            <div className="stat-number-service">22+</div>
            <div className="stat-label">
              {language === "ar" ? "سنة خدمة" : "Years of Service"}
            </div>
          </div>
          <div className="stat-item">
            <FaChild className="stat-icon" />
            <div className="stat-number-service">10,000+</div>
            <div className="stat-label">
              {language === "ar" ? "جلسة علاج" : "Therapy Sessions"}
            </div>
          </div>
          <div className="stat-item">
            <FaHeart className="stat-icon" />
            <div className="stat-number-service">1,470+</div>
            <div className="stat-label">
              {language === "ar" ? "طفل مستفيد" : "Children Served"}
            </div>
          </div>
          <div className="stat-item">
            <FaSchool className="stat-icon" />
            <div className="stat-number-service">8+</div>
            <div className="stat-label">
              {language === "ar" ? "برنامج رئيسي" : "Major Programs"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// دوال مساعدة لتسمية الإحصائيات
const getStatLabelEn = (key) => {
  const labels = {
    beneficiaries: "Beneficiaries",
    sessions: "Sessions",
    locations: "Locations",
    years: "Years",
    programs: "Programs",
    volunteers: "Volunteers",
    youth: "Youth",
    initiatives: "Initiatives",
    trainings: "Trainings",
    families: "Families",
    cashTransfers: "Cash Transfers",
    reliefKits: "Relief Kits"
  };
  return labels[key] || key;
};

const getStatLabelAr = (key) => {
  const labels = {
    beneficiaries: "مستفيد",
    sessions: "جلسة",
    locations: "موقع",
    years: "سنة",
    programs: "برنامج",
    volunteers: "متطوع",
    youth: "شاب",
    initiatives: "مبادرة",
    trainings: "تدريب",
    families: "عائلة",
    cashTransfers: "تحويل نقدي",
    reliefKits: "سلة إغاثة"
  };
  return labels[key] || key;
};

export default ServicesSection;