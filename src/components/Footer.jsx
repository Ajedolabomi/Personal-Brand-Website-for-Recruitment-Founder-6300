import React from 'react';
import { useTranslation } from 'react-i18next';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { scrollToElement } from '../utils/scrollUtils';

const { FiMail, FiLinkedin, FiGlobe, FiHeart } = FiIcons;

const Footer = () => {
  const { t } = useTranslation();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    scrollToElement(href);
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Ajedolabomi</h3>
            <p className="text-gray-400 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:info@germanlanding.de"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <SafeIcon icon={FiMail} className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BXJsQ5sFTQdqD6jiUfvdq7g%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <SafeIcon icon={FiLinkedin} className="w-5 h-5" />
              </a>
              <a
                href="https://africangermanconsultant.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <SafeIcon icon={FiGlobe} className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="text-gray-400 hover:text-white transition-colors">{t('nav.about')}</a></li>
              <li><a href="#about-me" onClick={(e) => handleNavClick(e, '#about-me')} className="text-gray-400 hover:text-white transition-colors">{t('nav.journey')}</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="text-gray-400 hover:text-white transition-colors">{t('nav.services')}</a></li>
              <li><a href="#impact" onClick={(e) => handleNavClick(e, '#impact')} className="text-gray-400 hover:text-white transition-colors">{t('nav.impact')}</a></li>
              <li><a href="#blog" onClick={(e) => handleNavClick(e, '#blog')} className="text-gray-400 hover:text-white transition-colors">{t('nav.blog')}</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-gray-400 hover:text-white transition-colors">{t('nav.contact')}</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>{t('footer.talentRecruitment')}</li>
              <li>{t('footer.migrationSupport')}</li>
              <li>{t('footer.businessConsulting')}</li>
              <li>{t('footer.culturalIntegration')}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Ajedolabomi. {t('footer.allRightsReserved')}
          </p>
          <p className="text-gray-400 text-sm flex items-center mt-4 md:mt-0">
            {t('footer.madeWith')} <SafeIcon icon={FiHeart} className="w-4 h-4 mx-1 text-red-500" /> {t('footer.forBridges')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;