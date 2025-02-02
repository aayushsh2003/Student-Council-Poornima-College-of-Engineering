import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const Events = () => {
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

  const events = [
    {
      title: 'Spring Festival 2024',
      date: 'March 15, 2024',
      time: '11:00 AM - 6:00 PM',
      location: 'Main Campus Quad',
      description: 'Annual spring celebration featuring live performances, food stalls, and activities.',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      attendees: 500
    },
    {
      title: 'Leadership Workshop',
      date: 'March 20, 2024',
      time: '2:00 PM - 4:00 PM',
      location: 'Student Center, Room 201',
      description: 'Interactive workshop on developing leadership skills and effective communication.',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      attendees: 50
    },
    {
      title: 'Club Fair',
      date: 'March 25, 2024',
      time: '10:00 AM - 3:00 PM',
      location: 'Student Center Ballroom',
      description: 'Explore and join various student clubs and organizations on campus.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      attendees: 300
    },
    {
      title: 'Career Networking Night',
      date: 'April 5, 2024',
      time: '6:00 PM - 8:30 PM',
      location: 'Alumni Center',
      description: 'Connect with industry professionals and alumni for career opportunities.',
      image: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      attendees: 200
    }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <motion.div variants={itemVariants} className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Upcoming Events</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Join us for exciting events throughout the semester. Don't miss out on these opportunities to learn, connect, and have fun!
        </p>
      </motion.div>

      <div className="grid gap-8 mb-16">
        {events.map((event) => (
          <motion.div
            key={event.title}
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    <span>{event.attendees} attending</span>
                  </div>
                </div>
                <button className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-8 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Have an Event Idea?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          We welcome student-led events! Submit your event proposal and we'll help you make it happen.
        </p>
        <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Submit Proposal
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Events;