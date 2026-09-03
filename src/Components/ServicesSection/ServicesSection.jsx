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
  const [servicesData, setServicesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // جلب البيانات من الـ API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://127.0.0.1:8000/api/services');
        const result = await response.json();
        
        if (result.success) {
          setServicesData(result.data);
        } else {
          setError('Failed to fetch services');
        }
      } catch (err) {
        setError('Failed to fetch services');
        console.error('Error fetching services:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (activeService !== null && !e.target.closest(".service-card")) {
        setActiveService(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [activeService]);

  const handleServiceClick = (serviceId) => {
    setActiveService(activeService === serviceId ? null : serviceId);
  };

  const getConnectedServices = (serviceId) => {
    const service = servicesData.find((s) => s.id === serviceId);
    return service && service.connections
      ? service.connections
          .map((connId) => servicesData.find((s) => s.id === connId))
          .filter(Boolean)
      : [];
  };

  const formatNumber = (number) => {
    return number.toLocaleString();
  };

  // عرض حالة التحميل
  if (loading) {
    return (
      <section id="services" className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {language === "ar" ? "خدماتنا وبرامجنا" : "Our Services & Programs"}
            </h2>
          </div>
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>{language === "ar" ? "جاري تحميل الخدمات..." : "Loading services..."}</p>
          </div>
        </div>
      </section>
    );
  }

  // عرض الخطأ
  if (error) {
    return (
      <section id="services" className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {language === "ar" ? "خدماتنا وبرامجنا" : "Our Services & Programs"}
            </h2>
          </div>
          <div className="error-container">
            <p>{error}</p>
            <button 
              className="btn-primary"
              onClick={() => window.location.reload()}
            >
              {language === "ar" ? "إعادة المحاولة" : "Try Again"}
            </button>
          </div>
        </div>
      </section>
    );
  }

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
              style={{ 
                '--service-color': service.color,
                '--card-height': activeService === service.id ? 'auto' : '320px'
              }}
              onClick={() => handleServiceClick(service.id)}
            >
              <div className="card-icon-wrapper">
                <div
                  className="card-icon"
                  style={{ backgroundColor: service.color }}
                >
                  {getServiceIcon(service.icon)}
                </div>
                <div className="icon-backdrop"></div>
              </div>

              <div className="card-content">
                <h3 className="card-title">{service.title[language]}</h3>
                <p className="card-description">
                  {service.description[language]}
                </p>

                {/* إحصائيات سريعة */}
                {service.stats && (
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
                )}

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

                    {service.connections && service.connections.length > 0 && (
                      <div className="connections-panel">
                        <h5 className="connections-title">
                          {language === "ar" ? "الخدمات المرتبطة" : "Related Services"}
                        </h5>
                        <div className="connections-list">
                          {getConnectedServices(service.id).map((connService) => (
                            <div
                              key={connService.id}
                              className="connection-item"
                              style={{ '--conn-color': connService.color }}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveService(connService.id);
                              }}
                            >
                              <div className="conn-icon">{getServiceIcon(connService.icon)}</div>
                              <span className="conn-title">
                                {connService.title[language]}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
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

// دالة للحصول على الأيقونة المناسبة للخدمة
const getServiceIcon = (iconName) => {
  const iconMap = {
    FaShieldAlt: <FaShieldAlt />,
    FaClinicMedical: <FaClinicMedical />,
    FaGraduationCap: <FaGraduationCap />,
    FaComments: <FaComments />,
    FaHandsHelping: <FaHandsHelping />,
    FaUsers: <FaUsers />,
    FaBriefcase: <FaBriefcase />,
    FaHeart: <FaHeart />,
    FaChild: <FaChild />,
    FaSchool: <FaSchool />,
    FaUserFriends: <FaUserFriends />,
    FaHandHoldingHeart: <FaHandHoldingHeart />
  };
  return iconMap[iconName] || <FaUsers />;
};

export default ServicesSection;