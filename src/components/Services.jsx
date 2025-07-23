import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { scrollToElement } from '../utils/scrollUtils';

const { FiUser, FiTrendingUp, FiArrowRight, FiX, FiBuilding, FiGlobe, FiStar, FiCheckCircle, FiClock, FiShield, FiHome, FiUsers, FiBriefcase } = FiIcons;

const Services = () => {
  const { t } = useTranslation();
  const [activeModal, setActiveModal] = useState(null);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    scrollToElement(href);
  };

  const services = [
    {
      id: 'employers',
      icon: FiBriefcase,
      title: t('services.forEmployers'),
      subtitle: t('services.fullCycleRecruiting'),
      features: [
        t('services.talentSourcing'),
        t('services.visaAssistance'),
        t('services.relocationSupport'),
        t('services.culturalIntegration'),
        t('services.compliance'),
        t('services.retentionStrategies')
      ],
      color: "red",
      detailedInfo: {
        overview: "Transform your hiring process with our comprehensive talent acquisition solutions designed specifically for German companies seeking skilled African professionals.",
        benefits: [
          "Access to pre-vetted talent pool across 15+ African countries",
          "Legal compliance with German immigration and employment laws",
          "Reduced time-to-hire by 60% through systematic processes",
          "Cultural integration support ensuring long-term success",
          "Ongoing support throughout the entire employee lifecycle"
        ],
        process: [
          "Talent Assessment & Matching",
          "Legal Documentation & Visa Processing",
          "Cultural Preparation & Language Training",
          "Seamless Onboarding & Integration",
          "Performance Monitoring & Retention Support"
        ],
        metrics: {
          "Success Rate": "95%",
          "Average Time to Hire": "45 days",
          "Employee Retention": "92%",
          "Client Satisfaction": "98%"
        }
      }
    },
    {
      id: 'candidates',
      icon: FiUser,
      title: t('services.forCandidates'),
      subtitle: t('services.completeMigration'),
      features: [
        t('services.languageTraining'),
        t('services.jobMarketAccess'),
        t('services.migrationCoaching'),
        t('services.professionalDevelopment'),
        t('services.culturalAdaptation'),
        t('services.networkBuilding')
      ],
      color: "yellow",
      detailedInfo: {
        overview: "Embark on your German career journey with confidence through our comprehensive migration and career development program.",
        benefits: [
          "Personalized career pathway planning",
          "German language training with cultural context",
          "Direct access to hiring companies",
          "Legal support throughout visa and work permit process",
          "Ongoing mentorship and professional development"
        ],
        process: [
          "Skills Assessment & Career Planning",
          "Language Training & Cultural Preparation",
          "Job Market Access & Application Support",
          "Interview Preparation & Placement",
          "Relocation Support & Integration"
        ],
        metrics: {
          "Placement Success": "88%",
          "Language Proficiency": "B2+ Level",
          "Career Advancement": "75%",
          "Satisfaction Rate": "96%"
        }
      }
    },
    {
      id: 'consulting',
      icon: FiTrendingUp,
      title: t('services.strategicConsulting'),
      subtitle: t('services.businessDevelopment'),
      features: [
        t('services.marketEntry'),
        t('services.crossCulturalBusiness'),
        t('services.partnershipFacilitation'),
        t('services.processOptimization'),
        t('services.performanceMeasurement'),
        t('services.scalableSystemDesign')
      ],
      color: "gray",
      detailedInfo: {
        overview: "Strategic consulting services for businesses looking to expand their operations between Africa and Germany.",
        benefits: [
          "Market entry strategies tailored to your industry",
          "Cross-cultural business development expertise",
          "Partnership facilitation and relationship building",
          "Process optimization for international operations",
          "Performance measurement and continuous improvement"
        ],
        process: [
          "Market Analysis & Strategy Development",
          "Partnership Identification & Facilitation",
          "Process Design & Implementation",
          "Performance Monitoring & Optimization",
          "Scaling & Expansion Support"
        ],
        metrics: {
          "Market Entry Success": "90%",
          "Partnership Success": "85%",
          "Process Efficiency": "+40%",
          "ROI Improvement": "+65%"
        }
      }
    }
  ];

  const ServiceModal = ({ service, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-2xl p-6 md:p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto"
      >
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center space-x-4">
            <div className={`bg-${service.color}-50 w-12 h-12 rounded-full flex items-center justify-center`}>
              <SafeIcon icon={service.icon} className={`w-6 h-6 text-${service.color}-600`} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
              <p className={`text-${service.color}-600 font-medium`}>{service.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 p-2"
          >
            <SafeIcon icon={FiX} className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-8">
          {/* Overview */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Overview</h4>
            <p className="text-gray-700 leading-relaxed">{service.detailedInfo.overview}</p>
          </div>

          {/* Key Benefits */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Benefits</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {service.detailedInfo.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <SafeIcon icon={FiCheckCircle} className={`w-5 h-5 text-${service.color}-600 mt-0.5 flex-shrink-0`} />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Our Process</h4>
            <div className="space-y-3">
              {service.detailedInfo.process.map((step, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className={`bg-${service.color}-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold`}>
                    {index + 1}
                  </div>
                  <span className="text-gray-700 font-medium">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Success Metrics</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(service.detailedInfo.metrics).map(([key, value]) => (
                <div key={key} className={`bg-${service.color}-50 p-4 rounded-lg text-center`}>
                  <div className={`text-2xl font-bold text-${service.color}-600`}>{value}</div>
                  <div className="text-sm text-gray-600">{key}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className={`bg-gradient-to-r from-${service.color}-600 to-${service.color === 'yellow' ? 'orange' : service.color === 'gray' ? 'gray' : 'red'}-600 rounded-xl p-6 text-white text-center`}>
            <h4 className="text-lg font-semibold mb-2">Ready to Get Started?</h4>
            <p className="mb-4 opacity-90">
              Let's discuss how we can create a customized solution for your specific needs.
            </p>
            <button
              onClick={() => {
                onClose();
                scrollToElement('#contact');
              }}
              className="bg-white text-gray-900 font-medium px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Start the Conversation
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className={`bg-${service.color}-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-${service.color}-100 transition-colors`}>
                <SafeIcon icon={service.icon} className={`w-8 h-8 text-${service.color}-600`} />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className={`text-${service.color}-600 font-medium mb-6`}>{service.subtitle}</p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 bg-${service.color}-600 rounded-full mt-2 flex-shrink-0`}></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                onClick={() => setActiveModal(service)}
                className={`inline-flex items-center text-${service.color}-600 font-medium hover:text-${service.color}-700 group-hover:translate-x-1 transition-all`}
              >
                {t('services.learnMore')}
                <SafeIcon icon={FiArrowRight} className="ml-2 w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-red-600 to-yellow-600 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {t('services.readyToBuild')}
          </h3>
          <p className="text-red-100 mb-8 max-w-2xl mx-auto">
            {t('services.readyDesc')}
          </p>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            {t('services.startConversation')}
            <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {activeModal && (
          <ServiceModal
            service={activeModal}
            onClose={() => setActiveModal(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;