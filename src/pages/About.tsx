import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">About Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Dedicated to serving and representing the student body through leadership, advocacy, and community building.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            To foster a vibrant campus community by empowering student voices, promoting academic excellence, and creating meaningful opportunities for student engagement and leadership development.
          </p>
          <p className="text-gray-600">
            We strive to be the bridge between students and administration, ensuring that student needs and interests are effectively represented in all aspects of campus life.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Student council meeting"
            className="rounded-lg shadow-lg w-full h-[300px] object-cover"
          />
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Leadership</h3>
            <p className="text-gray-600">
              Developing strong leaders who can guide and inspire their peers to achieve excellence.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Inclusivity</h3>
            <p className="text-gray-600">
              Creating a welcoming environment where every student's voice matters and diversity is celebrated.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Innovation</h3>
            <p className="text-gray-600">
              Embracing new ideas and approaches to enhance the student experience and campus life.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Team</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { name: 'Sarah Johnson', role: 'President', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
            { name: 'Michael Chen', role: 'Vice President', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
            { name: 'Emily Rodriguez', role: 'Secretary', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
            { name: 'David Kim', role: 'Treasurer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
          ].map((member) => (
            <div key={member.name} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;