import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, ArrowRight, Star, Award, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Clubs = () => {
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

  const clubs = [
    {
      id: 'debate-society',
      name: 'Debate Society',
      description: 'Fostering critical thinking and public speaking skills through competitive debate.',
      members: 45,
      nextEvent: 'Regional Debate Championship - April 5',
      achievements: ['Regional Champions 2023', 'Best Club Award'],
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 'tech-hub',
      name: 'Tech Innovation Hub',
      description: 'Exploring new technologies and developing innovative solutions for modern challenges.',
      members: 38,
      nextEvent: 'Hackathon 2024 - April 15',
      achievements: ['Best Innovation 2023', 'Tech Excellence Award'],
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50"
    >
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Student Clubs</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
              Discover and join our diverse range of student-led clubs and organizations. Find your passion and build lasting connections.
            </p>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start a New Club
            </button>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-gray-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Clubs */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Clubs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {clubs.map((club) => (
              <motion.div
                key={club.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300"
              >
                <div className="relative h-64">
                  <img
                    src={club.image}
                    alt={club.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{club.name}</h3>
                    <div className="flex items-center space-x-4 text-gray-200 text-sm">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{club.members} members</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{club.nextEvent}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{club.description}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Recent Achievements</h4>
                    <div className="flex flex-wrap gap-2">
                      {club.achievements.map((achievement, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-600"
                        >
                          <Award className="h-3 w-3 mr-1" />
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    to={`/clubs/${club.id}`}
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold"
                  >
                    View Details <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Club Categories */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Club Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Academic', count: 12, icon: Star },
              { name: 'Cultural', count: 8, icon: MapPin },
              { name: 'Sports', count: 10, icon: Award },
              { name: 'Technology', count: 6, icon: Users }
            ].map((category) => (
              <motion.div
                key={category.name}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <category.icon className="h-8 w-8 text-indigo-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count} clubs</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-8 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Join a Club?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Explore our diverse range of clubs and find the perfect fit for your interests and passions.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Browse All Clubs
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Start a New Club
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Clubs;