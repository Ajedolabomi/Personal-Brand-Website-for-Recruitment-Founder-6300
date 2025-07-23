import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { scrollToElement } from '../utils/scrollUtils';
import LanguageSwitcher from './LanguageSwitcher';

const { FiMenu, FiX, FiLinkedin, FiMail } = FiIcons;

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.journey'), href: '#about-me' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.impact'), href: '#impact' },
    { name: t('nav.blog'), href: '#blog' },
    { name: t('nav.contact'), href: '#contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    scrollToElement(href);
    if (isOpen) setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-shrink-0"
          >
            <h1 className="text-xl font-bold text-gray-900">Ajedolabomi</h1>
            <p className="text-xs text-red-600">Co-Founder, Germanlanding.de</p>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Language Switcher & Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <a
              href="mailto:info@germanlanding.de"
              className="text-gray-600 hover:text-red-600"
            >
              <SafeIcon icon={FiMail} className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BXJsQ5sFTQdqD6jiUfvdq7g%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-600"
            >
              <SafeIcon icon={FiLinkedin} className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-600"
            >
              <SafeIcon icon={isOpen ? FiX : FiMenu} className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-red-600 block px-3 py-2 text-base font-medium"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center pt-4 space-x-4 px-3">
                <a
                  href="mailto:info@germanlanding.de"
                  className="text-gray-600 hover:text-red-600"
                >
                  <SafeIcon icon={FiMail} className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BXJsQ5sFTQdqD6jiUfvdq7g%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-600"
                >
                  <SafeIcon icon={FiLinkedin} className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;