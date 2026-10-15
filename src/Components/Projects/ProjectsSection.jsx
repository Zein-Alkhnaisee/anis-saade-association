import React, { useState } from "react";
import { useApp } from "./../../context/AppContext";
import {
  FaHandHoldingHeart,
  FaGraduationCap,
  FaClinicMedical,
  FaHome,
  FaUsers,
  FaLeaf,
  FaArrowRight,
  FaHeart,
  FaShare,
  FaCalendarAlt,
  FaUserFriends,
  FaDollarSign,
  FaMapMarkerAlt,
  FaChild,
  FaRibbon,
} from "react-icons/fa";
import "./ProjectsSection.css";

const ProjectsSection = () => {
  const { language, t } = useApp();
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  // بيانات المشاريع الحقيقية للجمعية
  const projectsData = [
    {
      id: 1,
      title: {
        en: "Hope Project - Child Protection",
        ar: "مشروع أمل - حماية الطفل",
      },
      description: {
        en: "Comprehensive child protection program providing psychosocial support, parenting sessions, and safe spaces for children and youth",
        ar: "برنامج شامل لحماية الطفل يقدم الدعم النفسي الاجتماعي، جلسات الرعاية الوالدية، ومساحات آمنة للأطفال والشباب",
      },
      category: "protection",
      image: "/img/1.jpg.webp",
      duration: "2017 - Present",
      location: {
        en: "Mashta Al Helou, Safita, Al-Dreikish, Tartous",
        ar: "مشتى الحلو، صافيتا، الدريكيش، طرطوس",
      },
      partner: "UNICEF",
      stats: {
        beneficiaries: 5000,
        sessions: 12000,
        locations: 4,
        volunteers: 150,
      },
      achievements: {
        en: [
          "Established 3 child-friendly spaces",
          "Trained 6 mobile teams",
          "Provided psychosocial support to thousands of children",
          "Conducted parenting programs for caregivers",
        ],
        ar: [
          "إنشاء 3 مساحات صديقة للأطفال",
          "تدريب 6 فرق جوالة",
          "تقديم الدعم النفسي الاجتماعي لآلاف الأطفال",
          "تنفيذ برامج الرعاية الوالدية لمقدمي الرعاية",
        ],
      },
      status: "active",
    },
    {
      id: 2,
      title: {
        en: "Cash Transfer Program for Children with Disabilities",
        ar: "برنامج الحوالات النقدية للأطفال ذوي الإعاقة",
      },
      description: {
        en: "Financial support and case management services for children with severe disabilities and their families",
        ar: "دعم مالي وخدمات إدارة الحالة للأطفال ذوي الإعاقة الشديدة وأسرهم",
      },
      category: "humanitarian",
      image: "/img/cash-transfer.jpg",
      duration: "2018 - 2019",
      location: {
        en: "Tartous Governorate",
        ar: "محافظة طرطوس",
      },
      partner: "UNICEF",
      stats: {
        beneficiaries: 1470,
        families: 1470,
        amount: "2,000,000+ SYP",
        duration: "14 months",
      },
      achievements: {
        en: [
          "Supported 1,470 children with severe disabilities",
          "Provided comprehensive case management",
          "Distributed financial assistance to families",
          "Improved quality of life for beneficiaries",
        ],
        ar: [
          "دعم 1,470 طفل من ذوي الإعاقة الشديدة",
          "تقديم إدارة حالات شاملة",
          "توزيع مساعدات مالية للأسر",
          "تحسين جودة الحياة للمستفيدين",
        ],
      },
      status: "completed",
    },
    {
      id: 3,
      title: {
        en: "Adolescent Development & Participation",
        ar: "نماء ومشاركة اليافعين",
      },
      description: {
        en: "Youth empowerment program focusing on life skills training, vocational education, and community initiatives",
        ar: "برنامج تمكين الشباب يركز على تدريب المهارات الحياتية، التعليم المهني، والمبادرات المجتمعية",
      },
      category: "development",
      image: "/img/young2.jpg",
      duration: "2020 - Present",
      location: {
        en: "Multiple locations in Tartous",
        ar: "مواقع متعددة في طرطوس",
      },
      partner: "UNICEF",
      stats: {
        youth: 1200,
        initiatives: 50,
        trainings: 300,
        volunteers: 200,
      },
      achievements: {
        en: [
          "Life skills training for youth",
          "Vocational training programs",
          "Youth-led community initiatives",
          "Health awareness",
          "Climate change awareness",
        ],
        ar: [
          "تدريب المهارات الحياتية للشباب",
          "برامج التدريب المهني",
          "مبادرات مجتمعية يقودها الشباب",
          "التوعية الصحية",
          "التوعية بتغير المناخ",
        ],
      },
      status: "active",
    },
    {
      id: 4,
      title: {
        en: "Physical Therapy Center",
        ar: "مركز العلاج الفيزيائي",
      },
      description: {
        en: "Free physical therapy services for people with disabilities and those in need of rehabilitation",
        ar: "خدمات علاج فيزيائي مجانية لذوي الإعاقة والمحتاجين للعلاج التأهيلي",
      },
      category: "health",
      image: "/img/physical.jpg",
      duration: "2014 - Present",
      location: {
        en: "Kafroun Saade, Mashta Al Helou",
        ar: "كفرون سعادة، مشتى الحلو",
      },
      partner: "AAAS",
      stats: {
        sessions: 18000,
        beneficiaries: 10000,
        years: 10,
        specialists: 8,
      },
      achievements: {
        en: [
          "Over 18,000 free therapy sessions",
          "Served 10,000+ beneficiaries",
          "Continuous service for 10 years",
          "Specialized rehabilitation programs",
        ],
        ar: [
          "أكثر من 18,000 جلسة علاج مجانية",
          "خدمة أكثر من 10,000 مستفيد",
          "خدمة مستمرة لمدة 10 سنوات",
          "برامج تأهيل متخصصة",
        ],
      },
      status: "active",
    },
    {
      id: 5,
      title: {
        en: "Emergency Relief & Basic Needs",
        ar: "الإغاثة الطارئة والاحتياجات الأساسية",
      },
      description: {
        en: "Emergency assistance program that provides hygiene kits and basic needs support for families of children with disabilities.",
        ar: "برنامج المساعدة الطارئة الذي يقدم سلات النظافة ودعم الاحتياجات الأساسية لأسر الاطفال ذوي الإعاقة",
      },
      category: "humanitarian",
      image: "/img/emerg-copy.jpg",
      duration: "2020",
      location: {
        en: "Tartous Governorate",
        ar: "محافظة طرطوس",
      },
      partner: "UNICEF",
      stats: {
        families: 4500,
        children: 924,
        hygieneKits: 924,
        locations: 3,
      },
      achievements: {
        en: [
          "Distributed 924 family hygiene kits",
          "Supported 4,500 families",
          "Targeted families with children with disabilities",
          "Provided essential supplies during emergencies",
        ],
        ar: [
          "توزيع 924 سلة نظافة عائلية",
          "دعم 4,500 عائلة",
          "استهداف عائلات لديها أطفال ذوي إعاقة",
          "توفير مستلزمات أساسية خلال الطوارئ",
        ],
      },
      status: "completed",
    },
    {
      id: 6,
      title: {
        en: "The mobile psycho-social support team",
        ar: "الفريق الجوال للدعم النفسي والاجتماعي",
      },
      description: {
        en: "Reaching children where they are, offering care and emotional support.",
        ar: "نصل إلى الأطفال أينما كانو لنمنحهم الأمان والدعم النفسي والاجتماعي.",
      },
      category: "humanitarian",
      image: "/img/mobile-team.jpg",
      duration: "2013 - Present",
      location: {
        en: "Mashta Al Helou",
        ar: "مشتى الحلو",
      },
      partner: "UNICEF",
      stats: {
        campaigns: 50,
        beneficiaries: 3500,
        villages: 25,
        awarenessSessions: 200,
      },
      achievements: {
        en: [
          "Regular medical campaigns",
          "Health awareness sessions",
          "Serving remote communities",
          "Preventive healthcare education",
        ],
        ar: [
          "حملات طبية منتظمة",
          "جلسات توعية صحية",
          "خدمة المجتمعات النائية",
          "تعليم الرعاية الصحية الوقائية",
        ],
      },
      status: "active",
    },
  ];

  // تصنيفات المشاريع
  const categories = [
    {
      id: "all",
      label: { en: "All Projects", ar: "جميع المشاريع" },
      icon: <FaUsers />,
      count: projectsData.length,
    },
    {
      id: "protection",
      label: { en: "Child Protection", ar: "حماية الطفل" },
      icon: <FaChild />,
      count: projectsData.filter((p) => p.category === "protection").length,
    },
    {
      id: "health",
      label: { en: "Health Services", ar: "خدمات صحية" },
      icon: <FaClinicMedical />,
      count: projectsData.filter((p) => p.category === "health").length,
    },
    {
      id: "development",
      label: { en: "Youth Development", ar: "تنمية الشباب" },
      icon: <FaGraduationCap />,
      count: projectsData.filter((p) => p.category === "development").length,
    },
    {
      id: "humanitarian",
      label: { en: "Humanitarian Aid", ar: "مساعدات إنسانية" },
      icon: <FaHandHoldingHeart />,
      count: projectsData.filter((p) => p.category === "humanitarian").length,
    },
  ];

  // حالة المشاريع
  const statusLabels = {
    active: { en: "Active", ar: "نشط", color: "#10B981", icon: "🟢" },
    completed: { en: "Completed", ar: "مكتمل", color: "#3B82F6", icon: "🔵" },
    planning: {
      en: "Planning",
      ar: "قيد التخطيط",
      color: "#F59E0B",
      icon: "🟡",
    },
  };

  // تصفية المشاريع
  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const formatNumber = (number) => {
    if (typeof number === "number") {
      return number.toLocaleString();
    }
    return number;
  };

  return (
    <section
      id="projects"
      className="projects-section"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="container">
        {/* عنوان القسم */}
        <div className="section-header">
          <h2 className="section-title">
            {language === "ar" ? "مشاريعنا" : "Our Projects"}
          </h2>
          <p className="section-subtitle">
            {language === "ar"
              ? "اكتشف كيف نحدث فرقاً في حياة المجتمعات من خلال مشاريعنا المتنوعة بالشراكة مع اليونيسف والجهات المحلية"
              : "Discover how we make a difference in communities through our diverse projects in partnership with UNICEF and local authorities"}
          </p>
        </div>

        {/* فلترة المشاريع */}
        <div className="projects-filter">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${
                activeFilter === category.id ? "active" : ""
              }`}
              onClick={() => setActiveFilter(category.id)}
            >
              <span className="filter-icon">{category.icon}</span>
              <span className="filter-text">{category.label[language]}</span>
              <span className="project-count">({category.count})</span>
            </button>
          ))}
        </div>

        {/* شبكة المشاريع */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => handleProjectClick(project)}
            >
              {/* شريط حالة المشروع */}
              <div
                className="project-status"
                style={{ backgroundColor: statusLabels[project.status].color }}
              >
                <span className="status-icon">
                  {statusLabels[project.status].icon}
                </span>
                {statusLabels[project.status][language]}
              </div>

              {/* صورة المشروع */}
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title[language]}
                  onError={(e) => {
                    e.target.src = `data:image/svg+xml;base64,${btoa(`
              <svg width="400" height="250" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="250" fill="#F3F4F6"/>
                <path d="M200 125L150 175H250L200 125Z" fill="#99AAAF"/>
                <text x="200" y="160" text-anchor="middle" fill="#66778A" font-family="Arial, sans-serif" font-size="14">${project.title.en}</text>
              </svg>
            `)}`;
                  }}
                />
                <div className="image-overlay">
                  <div className="view-details">
                    {language === "ar" ? "عرض التفاصيل" : "View Details"}
                  </div>
                </div>
                <div className="project-partner">
                  <FaRibbon className="partner-icon" />
                  {project.partner}
                </div>
              </div>

              {/* محتوى البطاقة */}
              <div className="project-content">
                <h3 className="project-title">{project.title[language]}</h3>
                <p className="project-description">
                  {project.description[language]}
                </p>

                {/* معلومات سريعة */}
                <div className="project-meta">
                  <div className="meta-item">
                    <FaCalendarAlt className="meta-icon" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="meta-item">
                    <FaMapMarkerAlt className="meta-icon" />
                    <span>{project.location[language]}</span>
                  </div>
                </div>

                {/* إحصائيات سريعة */}
                <div className="project-stats">
                  {Object.entries(project.stats)
                    .slice(0, 2)
                    .map(([key, value]) => (
                      <div key={key} className="stat-">
                        <span className="stat-value">
                          {formatNumber(value)}
                        </span>
                        <span className="stat-label">
                          {language === "ar"
                            ? getStatLabelAr(key)
                            : getStatLabelEn(key)}
                        </span>
                      </div>
                    ))}
                </div>

                {/* أزرار التحويل */}
                <div className="project-actions">
                  <button
                    className="btn-primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProjectClick(project);
                    }}
                  >
                    <span>
                      {language === "ar"
                        ? "المزيد من التفاصيل"
                        : "More Details"}
                    </span>
                    <FaArrowRight className="btn-icon" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* رسالة عندما لا توجد مشاريع */}
        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <FaUsers className="no-projects-icon" />
            <h3>
              {language === "ar" ? "لا توجد مشاريع" : "No Projects Found"}
            </h3>
            <p>
              {language === "ar"
                ? "لا توجد مشاريع في هذا التصنيف حالياً"
                : "No projects available in this category at the moment"}
            </p>
          </div>
        )}
      </div>

      {/* Modal لعرض تفاصيل المشروع */}
      {selectedProject && (
        <div className="project-modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={handleCloseModal}>
              ×
            </button>

            <div className="modal-header">
              <div className="modal-badge">
                <div
                  className="modal-status"
                  style={{
                    backgroundColor: statusLabels[selectedProject.status].color,
                  }}
                >
                  {statusLabels[selectedProject.status].icon}
                  {statusLabels[selectedProject.status][language]}
                </div>
                <div className="modal-partner">
                  <FaRibbon className="partner-icon" />
                  {selectedProject.partner}
                </div>
              </div>
              <h2 className="modal-title">{selectedProject.title[language]}</h2>
            </div>

            <div className="modal-body">
              <div className="modal-image">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title[language]}
                  onError={(e) => {
                    e.target.src = `data:image/svg+xml;base64,${btoa(`
                      <svg width="600" height="300" viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="600" height="300" fill="#F3F4F6"/>
                        <path d="M300 150L250 200H350L300 150Z" fill="#99AAAF"/>
                        <text x="300" y="180" text-anchor="middle" fill="#66778A" font-family="Arial, sans-serif" font-size="16">${selectedProject.title.en}</text>
                      </svg>
                    `)}`;
                  }}
                />
              </div>

              <div className="modal-details">
                <div className="modal-description">
                  <h3>
                    {language === "ar" ? "وصف المشروع" : "Project Description"}
                  </h3>
                  <p>{selectedProject.description[language]}</p>
                </div>

                {/* معلومات المشروع */}
                <div className="project-info">
                  <div className="info-item">
                    <FaCalendarAlt className="info-icon" />
                    <div className="info-content">
                      <span className="info-label">
                        {language === "ar" ? "المدة" : "Duration"}
                      </span>
                      <span className="info-value">
                        {selectedProject.duration}
                      </span>
                    </div>
                  </div>
                  <div className="info-item">
                    <FaMapMarkerAlt className="info-icon" />
                    <div className="info-content">
                      <span className="info-label">
                        {language === "ar" ? "الموقع" : "Location"}
                      </span>
                      <span className="info-value">
                        {selectedProject.location[language]}
                      </span>
                    </div>
                  </div>
                  <div className="info-item">
                    <FaRibbon className="info-icon" />
                    <div className="info-content">
                      <span className="info-label">
                        {language === "ar" ? "الشريك" : "Partner"}
                      </span>
                      <span className="info-value">
                        {selectedProject.partner}
                      </span>
                    </div>
                  </div>
                </div>

                {/* الإنجازات */}
                <div className="achievements-section">
                  <h3>{language === "ar" ? "الإنجازات" : "Achievements"}</h3>
                  <ul className="achievements-list">
                    {selectedProject.achievements[language].map(
                      (achievement, index) => (
                        <li key={index}>{achievement}</li>
                      )
                    )}
                  </ul>
                </div>

                {/* إحصائيات مفصلة */}
                <div className="detailed-stats">
                  <h3>{language === "ar" ? "الإحصائيات" : "Statistics"}</h3>
                  <div className="stats-grid">
                    {Object.entries(selectedProject.stats).map(
                      ([key, value]) => (
                        <div key={key} className="detail-stat">
                          <div className="stat-content">
                            <span className="detail-value">
                              {formatNumber(value)}
                            </span>
                            <span className="detail-label">
                              {language === "ar"
                                ? getStatLabelAr(key)
                                : getStatLabelEn(key)}
                            </span>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="modal-actions">
                  <button
                    className="btn-primary large"
                    onClick={() => window.open("#contact", "_self")}
                  >
                    <span>
                      {language === "ar" ? "ادعم المشروع" : "Support Project"}
                    </span>
                    <FaHeart className="btn-icon" />
                  </button>
                  <button className="btn-secondary">
                    <FaShare className="btn-icon" />
                    <span>{language === "ar" ? "مشاركة" : "Share"}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// دوال مساعدة لتسمية الإحصائيات
const getStatLabelEn = (key) => {
  const labels = {
    beneficiaries: "Beneficiaries",
    sessions: "Sessions",
    locations: "Locations",
    volunteers: "Volunteers",
    families: "Families",
    amount: "Amount",
    duration: "Duration",
    youth: "Youth",
    initiatives: "Initiatives",
    trainings: "Trainings",
    years: "Years",
    specialists: "Specialists",
    children: "Children",
    hygieneKits: "Hygiene Kits",
    campaigns: "Campaigns",
    villages: "Villages",
    awarenessSessions: "Awareness Sessions",
  };
  return labels[key] || key;
};

const getStatLabelAr = (key) => {
  const labels = {
    beneficiaries: "مستفيد",
    sessions: "جلسة",
    locations: "موقع",
    volunteers: "متطوع",
    families: "عائلة",
    amount: "المبلغ",
    duration: "المدة",
    youth: "شاب",
    initiatives: "مبادرة",
    trainings: "تدريب",
    years: "سنة",
    specialists: "أخصائي",
    children: "طفل",
    hygieneKits: "سلة نظافة",
    campaigns: "حملة",
    villages: "قرية",
    awarenessSessions: "جلسة توعية",
  };
  return labels[key] || key;
};

export default ProjectsSection;
