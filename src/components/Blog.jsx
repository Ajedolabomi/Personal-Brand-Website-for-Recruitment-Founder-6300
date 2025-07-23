import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCalendar, FiTag, FiArrowRight, FiClock } = FiIcons;

const Blog = () => {
  const { t } = useTranslation();
  
  const blogPosts = [
    {
      id: 1,
      title: "5 Essential Steps to Prepare for Your Move to Germany",
      excerpt: "Moving to Germany requires careful planning and preparation. Here are the five most important steps to take before your relocation journey begins.",
      date: "April 15, 2024",
      readTime: `8 ${t('blog.minRead')}`,
      category: "Relocation",
      image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 2,
      title: "Navigating the German Job Market as an African Professional",
      excerpt: "The German job market offers many opportunities but comes with unique challenges. Learn how to position yourself for success with these proven strategies.",
      date: "March 28, 2024",
      readTime: `10 ${t('blog.minRead')}`,
      category: "Career",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 3,
      title: "Understanding German Work Culture: Do's and Don'ts",
      excerpt: "German workplace etiquette can be quite different from what you're used to. This guide helps you navigate the cultural nuances for professional success.",
      date: "February 12, 2024",
      readTime: `6 ${t('blog.minRead')}`,
      category: "Culture",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('blog.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-semibold py-1 px-3 rounded-full">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center">
                    <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <SafeIcon icon={FiClock} className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-5 line-clamp-3">
                  {post.excerpt}
                </p>
                <a
                  href={`#blog/${post.id}`}
                  className="inline-flex items-center text-red-600 font-medium hover:text-red-700 group"
                >
                  {t('blog.readMore')} <SafeIcon icon={FiArrowRight} className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="#blog/all"
            className="inline-flex items-center px-6 py-3 border border-red-600 text-red-600 font-medium rounded-lg hover:bg-red-600 hover:text-white transition-all"
          >
            {t('blog.viewAll')}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;