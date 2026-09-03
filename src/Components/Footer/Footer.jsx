import React from 'react';
import { useApp } from './../../context/AppContext';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeart,
  FaShieldAlt,
  FaHandHoldingHeart,
  FaArrowRight,
  FaPaperPlane
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const { language, t } = useApp();

  const currentYear = new Date().getFullYear();

  // بيانات الروابط
  const quickLinks = {
    en: [
      { name: 'Home', url: '#home' },
      { name: 'About Us', url: '#about' },
      { name: 'Services', url: '#services' },
      { name: 'Programs', url: '#programs' },
      { name: 'Volunteer', url: '#volunteer' },
      { name: 'Contact', url: '#contact' }
    ],
    ar: [
      { name: 'الرئيسية', url: '#home' },
      { name: 'من نحن', url: '#about' },
      { name: 'خدماتنا', url: '#services' },
      { name: 'برامجنا', url: '#programs' },
      { name: 'التطوع', url: '#volunteer' },
      { name: 'اتصل بنا', url: '#contact' }
    ]
  };

  const servicesLinks = {
    en: [
      { name: 'Child Protection', url: '#services' },
      { name: 'Physical Therapy', url: '#services' },
      { name: 'Educational Programs', url: '#services' },
      { name: 'Psychological Support', url: '#services' },
      { name: 'Youth Development', url: '#services' },
      { name: 'Humanitarian Aid', url: '#services' }
    ],
    ar: [
      { name: 'حماية الطفل', url: '#services' },
      { name: 'العلاج الفيزيائي', url: '#services' },
      { name: 'البرامج التعليمية', url: '#services' },
      { name: 'الدعم النفسي', url: '#services' },
      { name: 'تنمية الشباب', url: '#services' },
      { name: 'المساعدات الإنسانية', url: '#services' }
    ]
  };

  const socialLinks = [
    { 
      icon: <FaFacebookF />, 
      url: 'https://www.facebook.com/share/1GR8DA9eS2/', 
      name: 'Facebook',
      color: '#1877F2'
    },
    // { 
    //   icon: <FaTwitter />, 
    //   url: 'https://twitter.com', 
    //   name: 'Twitter',
    //   color: '#1DA1F2'
    // },
    { 
      icon: <FaInstagram />, 
      url: 'https://www.instagram.com/anissaadeassociation?igsh=MXVlcmdzOWpmN2gzeA==', 
      name: 'Instagram',
      color: '#E4405F'
    },
    // { 
    //   icon: <FaLinkedinIn />, 
    //   url: 'https://linkedin.com', 
    //   name: 'LinkedIn',
    //   color: '#0A66C2'
    // },
    // { 
    //   icon: <FaYoutube />, 
    //   url: 'https://youtube.com', 
    //   name: 'YouTube',
    //   color: '#FF0000'
    // }
  ];

  const partners = [
    { name: 'UNICEF', logo: 'UNICEF' },
    { name: 'UNDP', logo: 'UNDP' },
    { name: 'WHO', logo: 'WHO' },
    { name: 'Red Cross', logo: 'Red Cross' }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // معالجة الاشتراك في النشرة البريدية
    console.log('Newsletter subscription');
  };

  return (
    <footer className="footer" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      
      {/* المحتوى الرئيسي للفوتر */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* عمود معلومات الجمعية */}
            <div className="footer-col footer-about">
              <div className="footer-logo">
                <div className="logo-image">
                <img
                  src='/download.jpg'
                  alt='logo-img'
                  className="logo-img"
                />
                </div>
                <span className="logo-text">
                  {language === 'ar' ? 'جمعية أنيس سعادة الملائكية' : 'Angelic Association of Anis Saade'}
                </span>
              </div>
              <p className="footer-description">
                {language === 'ar' 
                  ? 'منظمة غير حكومية تقدم خدمات متكاملة للأطفال ذوي الإعاقة وأسرهم منذ عام 2002، بالشراكة مع منظمة اليونيسف والمجتمع المحلي.'
                  : 'A non-governmental organization providing integrated services for children with disabilities and their families since 2002, in partnership with UNICEF and the local community.'
                }
              </p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url} 
                    className="social-link"
                    style={{ '--social-color': social.color }}
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* عمود روابط سريعة */}
            <div className="footer-col">
              <h4 className="footer-title">
                {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
              </h4>
              <ul className="footer-links">
                {quickLinks[language].map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>
                      <FaArrowRight className="link-icon" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* عمود الخدمات */}
            <div className="footer-col">
              <h4 className="footer-title">
                {language === 'ar' ? 'خدماتنا' : 'Our Services'}
              </h4>
              <ul className="footer-links">
                {servicesLinks[language].map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>
                      <FaArrowRight className="link-icon" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* عمود معلومات الاتصال */}
            <div className="footer-col footer-contact">
              <h4 className="footer-title">
                {language === 'ar' ? 'اتصل بنا' : 'Contact Us'}
              </h4>
              <div className="contact-info">
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <div>
                    <span>
                      {language === 'ar' 
                        ? 'كفرون سعادة، مشتى الحلو، طرطوس، سوريا' 
                        //  'كفرون سعادة، مشتى الحلو، طرطوس، سوريا'
                        : 'kafroun saade, Mashta Al Helou, tartous, Syria'
                      }
                    </span>
                  </div>
                </div>
                {/* <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <div>
                    <span>+963 11 123 4567</span>
                    <small>{language === 'ar' ? 'هاتف' : 'Phone'}</small>
                  </div>
                </div> */}
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <div>
                    <span>anisssaade@gmail.com</span>
                    <small>{language === 'ar' ? 'بريد إلكتروني' : 'Email'}</small>
                  </div>
                </div>
              </div>

              {/* ساعات العمل */}
              <div className="working-hours">
                <h5>{language === 'ar' ? 'ساعات العمل' : 'Working Hours'}</h5>
                <p>
                  {language === 'ar' 
                    ? 'الأحد - الخميس: 8:00 ص - 4:00 م'
                    : 'Sunday - Thursday: 8:00 AM - 4:00 PM'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* قسم حقوق النشر */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>
                &copy; {currentYear} 
                {language === 'ar' 
                  ? ' جمعية أنيس سعادة الملائكية للرعاية. جميع الحقوق محفوظة.'
                  : ' Angelic Association of Anis Saade Care Association. All rights reserved.'
                }
              </p>
            </div>
            <div className="footer-legal">
              <a href="#privacy">
                {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
              </a>
              <a href="#terms">
                {language === 'ar' ? 'شروط الخدمة' : 'Terms of Service'}
              </a>
              <a href="#sitemap">
                {language === 'ar' ? 'خريطة الموقع' : 'Sitemap'}
              </a>
            </div>
            {/* <div className="made-with-love">
              <span>
                {language === 'ar' ? 'صنع بـ' : 'Made with'}
              </span>
              <FaHeart className="heart-icon" />
              <span>
                {language === 'ar' ? 'للمجتمع' : 'for community'}
              </span>
            </div> */}
            <div></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;