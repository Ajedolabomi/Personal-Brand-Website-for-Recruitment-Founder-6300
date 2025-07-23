import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { scrollToElement } from '../utils/scrollUtils';

const { FiArrowRight, FiGlobe, FiBriefcase, FiUsers } = FiIcons;

const Hero = () => {
  const { t } = useTranslation();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    scrollToElement(href);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 via-white to-red-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
              >
                {t('hero.title')}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                {t('hero.subtitle')}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, '#services')}
                className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors group"
              >
                {t('hero.exploreServices')}
                <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:border-red-600 hover:text-red-600 transition-colors"
              >
                {t('hero.getInTouch')}
              </a>
            </motion.div>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200"
            >
              <div className="text-center">
                <SafeIcon icon={FiGlobe} className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{t('hero.crossCultural')}</div>
                <div className="text-sm text-gray-600">{t('hero.expertise')}</div>
              </div>
              <div className="text-center">
                <SafeIcon icon={FiBriefcase} className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{t('hero.fullCycle')}</div>
                <div className="text-sm text-gray-600">{t('hero.recruiting')}</div>
              </div>
              <div className="text-center">
                <SafeIcon icon={FiUsers} className="w-8 h-8 text-gray-900 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{t('hero.scalable')}</div>
                <div className="text-sm text-gray-600">{t('hero.solutions')}</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1753293514354-Professional%20Picture.jpg"
                alt="Ajedolabomi"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/10 to-transparent rounded-2xl"></div>
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100"
            >
              <div className="text-sm text-gray-600">{t('hero.floatingCard')}</div>
              <div className="text-lg font-bold text-gray-900">{t('hero.actuallyWork')}</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;