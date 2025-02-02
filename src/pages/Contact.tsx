import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
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

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <motion.div variants={itemVariants} className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Have questions or feedback? We're here to help! Reach out to us through any of the following channels.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <motion.div variants={itemVariants}>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-indigo-600 mr-3" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">studentcouncil@university.edu</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-indigo-600 mr-3" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-indigo-600 mr-3" />
                <div>
                  <p className="font-semibold">Office Location</p>
                  <p className="text-gray-600">Student Center, Room 301</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-indigo-600 mr-3" />
                <div>
                  <p className="font-semibold">Office Hours</p>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900">How do I join the Student Council?</h3>
                <p className="text-gray-600">Elections are held at the beginning of each academic year. Watch for announcements!</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">How can I start a new club?</h3>
                <p className="text-gray-600">Fill out the Club Registration Form in the Resources section and schedule a meeting with us.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">When are council meetings?</h3>
                <p className="text-gray-600">General meetings are held every Tuesday at 5:00 PM in the Student Center.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion. div>
  
  );
};

export default Contact;