import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiBookOpen, FiGlobe, FiUsers, FiHome } = FiIcons;

const AboutMe = () => {
  const { t } = useTranslation();
  
  return (
    <section id="about-me" className="py-20 bg-gradient-to-br from-yellow-50 via-white to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('aboutMe.title')} <span className="text-red-600"></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('aboutMe.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('aboutMe.description1')}
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              {t('aboutMe.description2')}
            </p>

            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="bg-yellow-100 p-2 rounded-full flex-shrink-0">
                  <SafeIcon icon={FiBookOpen} className="w-5 h-5 text-yellow-600" />
                </div>
                <span className="text-lg text-gray-700">{t('aboutMe.languageCoaching')}</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-red-100 p-2 rounded-full flex-shrink-0">
                  <SafeIcon icon={FiGlobe} className="w-5 h-5 text-red-600" />
                </div>
                <span className="text-lg text-gray-700">{t('aboutMe.relocationSupport')}</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-gray-100 p-2 rounded-full flex-shrink-0">
                  <SafeIcon icon={FiUsers} className="w-5 h-5 text-gray-700" />
                </div>
                <span className="text-lg text-gray-700">{t('aboutMe.culturalOrientation')}</span>
              </li>
            </ul>

            <p className="text-lg text-gray-700 leading-relaxed">
              {t('aboutMe.description3')}
            </p>

            <blockquote className="pl-6 border-l-4 border-red-600 italic text-lg text-gray-700">
              {t('aboutMe.quote')}
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <SafeIcon icon={FiHome} className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{t('aboutMe.mission')}</h3>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {t('aboutMe.missionDesc')}
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <div className="text-xl font-bold text-yellow-600">15+</div>
                  <div className="text-sm text-gray-600">{t('aboutMe.yearsInGermany')}</div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="text-xl font-bold text-red-600">100+</div>
                  <div className="text-sm text-gray-600">{t('aboutMe.successStories')}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-xl font-bold text-gray-700">10+</div>
                  <div className="text-sm text-gray-600">{t('aboutMe.partnerOrgs')}</div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <div className="text-xl font-bold text-yellow-600">3</div>
                  <div className="text-sm text-gray-600">{t('aboutMe.languagesSpoken')}</div>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-yellow-100 rounded-full -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;