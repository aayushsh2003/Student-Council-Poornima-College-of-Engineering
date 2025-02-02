import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, Book } from 'lucide-react';

const Resources = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const resources = {
    forms: [
      { name: 'Club Registration Form', type: 'PDF', size: '156 KB' },
      { name: 'Event Proposal Template', type: 'DOCX', size: '238 KB' },
      { name: 'Budget Request Form', type: 'PDF', size: '124 KB' },
      { name: 'Facility Reservation Form', type: 'PDF', size: '198 KB' }
    ],
    guidelines: [
      { name: 'Club Leadership Handbook', type: 'PDF', size: '2.1 MB' },
      { name: 'Event Planning Guide', type: 'PDF', size: '1.8 MB' },
      { name: 'Financial Procedures Manual', type: 'PDF', size: '892 KB' },
      { name: 'Marketing Guidelines', type: 'PDF', size: '1.2 MB' }
    ]
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <motion.div variants={itemVariants} className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Student Resources</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Access important forms, guidelines, and resources to help you succeed in your student activities.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <motion.div variants={itemVariants}>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <FileText className="h-8 w-8 text-indigo-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Forms & Documents</h2>
            </div>
            <div className="space-y-4">
              {resources.forms.map((form) => (
                <div
                  key={form.name}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div>
                    <h3 className="font-semibold text-gray-900">{form.name}</h3>
                    <p className="text-sm text-gray-500">{form.type} • {form.size}</p>
                  </div>
                  <button className="text-indigo-600 hover:text-indigo-700">
                    <Download className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <Book className="h-8 w-8 text-indigo-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Guidelines & Manuals</h2>
            </div>
            <div className="space-y-4">
              {resources.guidelines.map((guide) => (
                <div
                  key={guide.name}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div>
                    <h3 className="font-semibold text-gray-900">{guide.name}</h3>
                    <p className="text-sm text-gray-500">{guide.type} • {guide.size}</p>
                  </div>
                  <button className="text-indigo-600 hover:text-indigo-700">
                    <Download className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
          <p className="mb-6">
            Our student support team is here to assist you with any questions about forms, procedures, or guidelines.
          </p>
          <button className="flex items-center bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Contact Support <ExternalLink className="h-4 w-4 ml-2" />
          </button>
        </div>

        <div className="bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Request Custom Forms</h2>
          <p className="mb-6">
            Can't find what you need? Submit a request for custom forms or documentation.
          </p>
          <button className="flex items-center bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Submit Request <ExternalLink className="h-4 w-4 ml-2" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Resources;