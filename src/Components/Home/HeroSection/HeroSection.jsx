import React from 'react';
import { useApp } from './../../../context/AppContext';
import './HeroSection.css';
import { FaUserShield, FaHeart, FaShieldAlt, FaHandsHelping, FaDove} from "react-icons/fa";
import { IoHeart } from "react-icons/io5";

const HeroSection = () => {
  const { language, t } = useApp();

  // الإحصائيات الحقيقية بناءً على معلومات الجمعية
  const realStats = {
    years: 22, // منذ 2002
    therapySessions: 10000, // جلسات علاج فيزيائي
    childrenServed: 1470, // أطفال في مشروع الحوالات النقدية
    projects: 8 // مشاريع رئيسية
  };

  return (
    <section id="home" className="hero" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              {language === 'ar' ? 'جمعية أنيس سعادة' : 'Angelic Association of Anis Saade'}
              <span className="highlight">
                {language === 'ar' ? 'الملائكية' : ' (AAAS)'}
              </span>
            </h1>
            
            <p className="hero-description">
              {language === 'ar' 
                ? 'منظمة إنسانية رائدة تأسست عام 2002، تقدم خدمات متكاملة للأطفال ذوي الإعاقة وأسرهم. شركاء مع اليونيسف في برامج حماية الطفل والتنمية المجتمعية.'
                : 'A leading humanitarian organization established in 2002, providing integrated services for children with disabilities and their families. Partnered with UNICEF in child protection and community development programs.'
              }
            </p>
            
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number-hero">{realStats.years}+</span>
                <span className="stat-label-hero">
                  {language === 'ar' ? 'سنة عطاء' : 'Years of Giving'}
                </span>
              </div>
              <div className="stat">
                <span className="stat-number-hero">{realStats.therapySessions.toLocaleString()}+</span>
                <span className="stat-label-hero">
                  {language === 'ar' ? 'جلسة علاج' : 'Therapy Sessions'}
                </span>
              </div>
              <div className="stat">
                <span className="stat-number-hero">{realStats.childrenServed.toLocaleString()}+</span>
                <span className="stat-label-hero">
                  {language === 'ar' ? 'طفل مستفيد' : 'Children Served'}
                </span>
              </div>
              <div className="stat">
                <span className="stat-number-hero">{realStats.projects}+</span>
                <span className="stat-label-hero">
                  {language === 'ar' ? 'برنامج رئيسي' : 'Major Programs'}
                </span>
              </div>
            </div>
            
            <div className="hero-actions">
              <a href="#volunteer" className="btn btn-primary-hero">
                {language === 'ar' ? 'كن متطوعاً' : 'Become a Volunteer'}
              </a>
              <a href="#projects" className="btn btn-secondary-hero">
                {language === 'ar' ? 'شاهد مشاريعنا' : 'View Our Projects'}
              </a>
            </div>

            {/* شركاء الجمعية */}
            <div className="partners-preview">
              <span className="partners-label">
                {language === 'ar' ? 'شركاؤنا:' : 'Our Partners:'}
              </span>
              <div className="partners-logos">
                <div className="partner-logo">UNICEF</div>
                <div className="partner-logo">
                  {language === 'ar' ? 'وزارة الشؤون' : 'Ministry of Affairs'}
                </div>
              </div>
            </div>
          </div>
          
          {/* <div className="hero-visual">
            <div className="floating-cards">
              <div className="floating-card card-1">
                <div className="card-icon"><FaShieldAlt/></div>
                <span>{language === 'ar' ? 'حماية الطفل' : 'Child Protection'}</span>
              </div>
              <div className="floating-card card-2">
                <div className="card-icon"><IoHeart/></div>
                <span>{language === 'ar' ? 'علاج فيزيائي' : 'Physical Therapy'}</span>
              </div>
              <div className="floating-card card-3">
                <div className="card-icon"><FaHandsHelping/></div>
                <span>{language === 'ar' ? 'نماء ومشاركة اليافعين' : 'Educational Programs'}</span>
              </div>
              <div className="floating-card card-4">
                <div className="card-icon"><FaDove/></div>
                <span>{language === 'ar' ? 'دعم نفسي' : 'Psychological Support'}</span>
              </div>
            </div>
          </div>*/}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;