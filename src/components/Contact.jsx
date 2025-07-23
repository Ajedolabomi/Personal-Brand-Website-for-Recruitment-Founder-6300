import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMail, FiLinkedin, FiGlobe, FiMapPin, FiSend, FiCheckCircle, FiCalendar, FiClock, FiX, FiPhone } = FiIcons;

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    type: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showScheduler, setShowScheduler] = useState(false);
  const [schedulerData, setSchedulerData] = useState({
    date: '',
    time: '',
    name: '',
    email: '',
    topic: ''
  });
  const [callScheduled, setCallScheduled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSchedulerChange = (e) => {
    setSchedulerData({
      ...schedulerData,
      [e.target.name]: e.target.value
    });
  };

  const handleScheduleCall = (e) => {
    e.preventDefault();
    // Here we would normally send the data to a backend
    // For now we'll just simulate success
    console.log("Call scheduled with data:", schedulerData);
    setCallScheduled(true);
    
    // Reset after showing success message
    setTimeout(() => {
      setCallScheduled(false);
      setShowScheduler(false);
      // Reset form data
      setSchedulerData({
        date: '',
        time: '',
        name: '',
        email: '',
        topic: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: FiPhone,
      label: "Phone",
      value: "01575 5565739",
      link: "tel:+4915755565739"
    },
    {
      icon: FiMail,
      label: t('contact.email'),
      value: "info@germanlanding.de",
      link: "mailto:info@germanlanding.de"
    },
    {
      icon: FiGlobe,
      label: t('contact.website'),
      value: "africangermanconsultant.com",
      link: "https://africangermanconsultant.com"
    },
    {
      icon: FiLinkedin,
      label: t('contact.linkedin'),
      value: t('contact.connectValue'),
      link: "https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BXJsQ5sFTQdqD6jiUfvdq7g%3D%3D"
    },
    {
      icon: FiMapPin,
      label: t('contact.location'),
      value: t('contact.locationValue'),
      link: null
    }
  ];

  const availableTimes = [
    "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('contact.sendMessage')}</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.fullName')} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                    placeholder={t('common.yourName')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.emailAddress')} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                    placeholder={t('common.yourEmail')}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.company')}
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                    placeholder={t('common.yourCompany')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.inquiryType')}
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                  >
                    <option value="">{t('contact.selectType')}</option>
                    <option value="employer">{t('contact.employer')}</option>
                    <option value="candidate">{t('contact.candidate')}</option>
                    <option value="consulting">{t('contact.consulting')}</option>
                    <option value="partnership">{t('contact.partnership')}</option>
                    <option value="other">{t('contact.other')}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.message')} *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors resize-none"
                  placeholder={t('contact.messagePlaceholder')}
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-red-600 text-white font-medium py-4 px-6 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5" />
                    <span>{t('contact.messageSent')}</span>
                  </>
                ) : (
                  <>
                    <SafeIcon icon={FiSend} className="w-5 h-5" />
                    <span>{t('contact.sendButton')}</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('contact.getInTouch')}</h3>
              <p className="text-gray-600 mb-8">
                {t('contact.getInTouchDesc')}
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="bg-yellow-50 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={info.icon} className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500">{info.label}</div>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith("http") ? "_blank" : undefined}
                        rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-gray-900 hover:text-red-600 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-gray-900">{info.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-red-600 to-yellow-600 rounded-xl p-6 text-white">
              <h4 className="text-lg font-semibold mb-2">{t('contact.readyToStart')}</h4>
              <p className="text-red-100 mb-4">
                {t('contact.readyDesc')}
              </p>
              <button
                onClick={() => setShowScheduler(true)}
                className="bg-white text-red-600 font-medium px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center"
              >
                <SafeIcon icon={FiCalendar} className="w-5 h-5 mr-2" />
                {t('contact.scheduleCall')}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Call Scheduler Modal */}
        {showScheduler && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-xl p-6 md:p-8 w-full max-w-md"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {t('contact.scheduleCall')}
                </h3>
                <button
                  onClick={() => setShowScheduler(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <SafeIcon icon={FiX} className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleScheduleCall} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.fullName')} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={schedulerData.name}
                    onChange={handleSchedulerChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.emailAddress')} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={schedulerData.email}
                    onChange={handleSchedulerChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={schedulerData.date}
                    onChange={handleSchedulerChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time *
                  </label>
                  <select
                    name="time"
                    value={schedulerData.time}
                    onChange={handleSchedulerChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 transition-colors"
                  >
                    <option value="">Select a time</option>
                    {availableTimes.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Topic *
                  </label>
                  <input
                    type="text"
                    name="topic"
                    value={schedulerData.topic}
                    onChange={handleSchedulerChange}
                    required
                    placeholder="Brief description of what you'd like to discuss"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 transition-colors"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
                    disabled={callScheduled}
                  >
                    {callScheduled ? (
                      <>
                        <SafeIcon icon={FiCheckCircle} className="w-5 h-5" />
                        <span>Call Scheduled!</span>
                      </>
                    ) : (
                      <>
                        <SafeIcon icon={FiClock} className="w-5 h-5" />
                        <span>Confirm Appointment</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;