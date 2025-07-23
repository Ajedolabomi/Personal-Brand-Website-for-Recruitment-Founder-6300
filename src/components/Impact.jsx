import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCheckCircle, FiTrendingUp, FiGlobe, FiUsers, FiAward, FiTarget } = FiIcons;

const Impact = () => {
  const { t } = useTranslation();
  
  const metrics = [
    {
      icon: FiUsers,
      number: "200+",
      label: t('impact.successfulPlacements'),
      description: t('impact.placementsDesc')
    },
    {
      icon: FiGlobe,
      number: "15+",
      label: t('impact.countriesConnected'),
      description: t('impact.countriesDesc')
    },
    {
      icon: FiTrendingUp,
      number: "95%",
      label: t('impact.retentionRate'),
      description: t('impact.retentionDesc')
    },
    {
      icon: FiAward,
      number: "50+",
      label: t('impact.partnerCompanies'),
      description: t('impact.companiesDesc')
    }
  ];

  const testimonials = [
    {
      quote: t('testimonials.testimonial1'),
      author: t('testimonials.author1'),
      position: t('testimonials.position1'),
      company: t('testimonials.company1')
    },
    {
      quote: t('testimonials.testimonial2'),
      author: t('testimonials.author2'),
      position: t('testimonials.position2'),
      company: t('testimonials.company2')
    },
    {
      quote: t('testimonials.testimonial3'),
      author: t('testimonials.author3'),
      position: t('testimonials.position3'),
      company: t('testimonials.company3')
    }
  ];

  return (
    <section id="impact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('impact.title')} <span className="text-red-600"></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('impact.subtitle')}
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-yellow-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-100 transition-colors">
                <SafeIcon icon={metric.icon} className="w-8 h-8 text-yellow-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{metric.number}</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">{metric.label}</div>
              <div className="text-gray-600 text-sm">{metric.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-50 to-yellow-50 rounded-2xl p-8 md:p-12 mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            {t('impact.systematicApproach')}
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('impact.assessmentMatching')}</h4>
              <p className="text-gray-600">{t('impact.assessmentDesc')}</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('impact.legalPreparation')}</h4>
              <p className="text-gray-600">{t('impact.legalDesc')}</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-800 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('impact.integrationGrowth')}</h4>
              <p className="text-gray-600">{t('impact.integrationDesc')}</p>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">
            {t('impact.whatPeopleSay')}
          </h3>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">
                  <SafeIcon icon={FiCheckCircle} className="w-6 h-6 text-green-500 mb-4" />
                  <blockquote className="text-gray-700 italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                  <div className="text-sm text-red-600">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;