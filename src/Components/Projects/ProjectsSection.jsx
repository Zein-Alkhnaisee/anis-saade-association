import React, { useState, useEffect } from "react";
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
  const [projectsData, setProjectsData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // جلب البيانات الأولية
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // جلب المشاريع
        const projectsResponse = await fetch('http://127.0.0.1:8000/api/projects');
        const projectsResult = await projectsResponse.json();
        
        if (projectsResult.success) {
          setProjectsData(projectsResult.data);
        }

        // جلب التصنيفات
        const categoriesResponse = await fetch('http://127.0.0.1:8000/api/categories');
        const categoriesResult = await categoriesResponse.json();
        
        if (categoriesResult.success) {
          setCategories(categoriesResult.data);
        }

      } catch (err) {
        setError('Failed to fetch data');
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // جلب المشاريع عند تغيير الفلتر - التصحيح هنا
  useEffect(() => {
    const fetchFilteredProjects = async () => {
      try {
        setLoading(true);
        
        let url = 'http://127.0.0.1:8000/api/projects';
        if (activeFilter !== 'all') {
          url = `http://127.0.0.1:8000/api/categories/${activeFilter}/projects`;
        }

        const response = await fetch(url);
        const result = await response.json();
        
        if (result.success) {
          setProjectsData(result.data);
        }
      } catch (err) {
        setError('Failed to fetch projects');
        console.error('Error fetching projects:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFilteredProjects();
  }, [activeFilter]); // يعمل عند كل تغيير في activeFilter

  // حالة المشاريع
  const statusLabels = {
    active: { en: "Active", ar: "نشط", color: "#10B981", icon: "🟢" },
    completed: { en: "Completed", ar: "مكتمل", color: "#3B82F6", icon: "🔵" },
    planning: { en: "Planning", ar: "قيد التخطيط", color: "#F59E0B", icon: "🟡", },
  };

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

  // دالة لمعالجة تغيير الفلتر
  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
  };

  // عرض حالة التحميل
  if (loading) {
    return (
      <section id="projects" className="projects-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {language === "ar" ? "مشاريعنا" : "Our Projects"}
            </h2>
          </div>
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>{language === "ar" ? "جاري تحميل المشاريع..." : "Loading projects..."}</p>
          </div>
        </div>
      </section>
    );
  }

  // عرض الخطأ
  if (error) {
    return (
      <section id="projects" className="projects-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {language === "ar" ? "مشاريعنا" : "Our Projects"}
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
              onClick={() => handleFilterChange(category.id)}
            >
              <span className="filter-icon">
                {getCategoryIcon(category.icon)}
              </span>
              <span className="filter-text">{category.label[language]}</span>
              <span className="project-count">({category.count})</span>
            </button>
          ))}
        </div>

        {/* شبكة المشاريع */}
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => handleProjectClick(project)}
            >
              {/* شريط حالة المشروع */}
              <div
                className="project-status"
                style={{ backgroundColor: statusLabels[project.status]?.color || '#6B7280' }}
              >
                <span className="status-icon">
                  {statusLabels[project.status]?.icon || '⚪'}
                </span>
                {statusLabels[project.status]?.[language] || project.status}
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
                      <div key={key} className="stat-item-proj">
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
        {projectsData.length === 0 && (
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
                    backgroundColor: statusLabels[selectedProject.status]?.color || '#6B7280',
                  }}
                >
                  {statusLabels[selectedProject.status]?.icon || '⚪'}
                  {statusLabels[selectedProject.status]?.[language] || selectedProject.status}
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

// دالة للحصول على الأيقونة المناسبة للتصنيف
const getCategoryIcon = (iconName) => {
  const iconMap = {
    FaUsers: <FaUsers />,
    FaChild: <FaChild />,
    FaClinicMedical: <FaClinicMedical />,
    FaGraduationCap: <FaGraduationCap />,
    FaHandHoldingHeart: <FaHandHoldingHeart />,
  };
  return iconMap[iconName] || <FaUsers />;
};

export default ProjectsSection;