import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Calendar, Users, Bell, X, Award, ChevronRight, Star, Trophy, Target, Heart } from 'lucide-react';

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [counters, setCounters] = useState({ students: 0, clubs: 0, events: 0, awards: 0 });
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const occasion = {
    title: "Annual Tech Fest 2025",
    date: "February 26-28, 2025",
    description: "Join us for days of innovation, technology, and creativity!"
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Counter animation
  useEffect(() => {
    const targetCounts = { students: 5000, clubs: 30, events: 100, awards: 50 };
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const updateCounters = (progress: number) => {
      setCounters({
        students: Math.round(targetCounts.students * progress),
        clubs: Math.round(targetCounts.clubs * progress),
        events: Math.round(targetCounts.events * progress),
        awards: Math.round(targetCounts.awards * progress),
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let progress = 0;
            const timer = setInterval(() => {
              progress += 1 / steps;
              if (progress >= 1) {
                clearInterval(timer);
                progress = 1;
              }
              updateCounters(progress);
            }, interval);
          }
        });
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('counter-section');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4 }
    }
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Student Council President",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      quote: "Being part of the Student Council has been an incredible journey of growth and leadership."
    },
    {
      name: "Michael Chen",
      role: "Club Leader",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      quote: "The support from the council has helped our club achieve remarkable success."
    },
    {
      name: "Emily Rodriguez",
      role: "Event Coordinator",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      quote: "We've created unforgettable experiences that bring our community together."
    }
  ];

  const achievements = [
    { year: "2023", title: "Best Student Council Award", description: "Recognized for exceptional leadership and community impact" },
    { year: "2022", title: "Environmental Initiative", description: "Successfully implemented campus-wide sustainability program" },
    { year: "2021", title: "Community Service Excellence", description: "Over 10,000 volunteer hours contributed by students" }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative"
    >
      {/* Hero Section */}
      <motion.div 
        style={{ opacity }}
        className="relative h-[600px] mb-16 overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="https://pce-student-council.vercel.app/_next/image?url=https%3A%2F%2Fwww.poornima.org%2Fimg%2Fslider%2Fnew%2FWebsite-banner%2520(1)%2520(2).jpg&w=750&q=75"
            alt="College Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>

        {/* Animated Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div className="text-white max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Welcome to Poornima College of Engineering Student Council
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-xl text-gray-200"
            >
              Empowering students, fostering leadership, and building community through engagement and innovation.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="mt-8 flex gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Counter Section */}
      <motion.div
        id="counter-section"
        variants={itemVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Users, label: "Active Students", value: counters.students },
            { icon: Target, label: "Student Clubs", value: counters.clubs },
            { icon: Calendar, label: "Annual Events", value: counters.events },
            { icon: Trophy, label: "Awards Won", value: counters.awards }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <item.icon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">{item.value}+</div>
              <div className="text-gray-600">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Featured Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-2xl"
          >
            <Calendar className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Upcoming Events</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 mr-2 text-indigo-600" />
                Spring Festival - March 15
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 mr-2 text-indigo-600" />
                Leadership Workshop - March 20
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 mr-2 text-indigo-600" />
                Club Fair - March 25
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-2xl"
          >
            <Users className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Active Clubs</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 mr-2 text-indigo-600" />
                Debate Society
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 mr-2 text-indigo-600" />
                Environmental Club
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 mr-2 text-indigo-600" />
                Tech Innovation Hub
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-2xl"
          >
            <Bell className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Latest News</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 mr-2 text-indigo-600" />
                New Club Registration Open
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 mr-2 text-indigo-600" />
                Student Council Elections
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 mr-2 text-indigo-600" />
                Campus Initiative Success
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Testimonials Section */}
        <motion.div
          variants={itemVariants}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg p-6 relative"
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-4 border-white"
                  />
                </div>
                <div className="pt-8 text-center">
                  <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-indigo-600">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Timeline */}
        <motion.div
          variants={itemVariants}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Achievements</h2>
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-8"
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'text-right' : 'order-2'}`}>
                  <h3 className="text-xl font-bold text-gray-900">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
                <div className="relative flex items-center justify-center w-12 h-12">
                  <div className="w-3 h-3 bg-indigo-600 rounded-full" />
                  <div className="absolute w-12 h-1 bg-indigo-600" style={{
                    transform: index % 2 === 0 ? 'translateX(50%)' : 'translateX(-50%)'
                  }} />
                </div>
                <div className={`w-1/2 ${index % 2 === 0 ? 'order-2' : ''}`}>
                  <div className="text-2xl font-bold text-indigo-600">{achievement.year}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-12 shadow-lg mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our vibrant community and be part of something extraordinary. Your journey to leadership starts here.
          </p>
          <div className="flex justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Join Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Popup for Occasion */}
      <AnimatePresence>
        {showPopup && occasion && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          >
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              className="bg-white rounded-xl p-8 max-w-md relative"
            >
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{occasion.title}</h3>
              <p className="text-indigo-600 font-semibold mb-4">{occasion.date}</p>
              <p className="text-gray-600 mb-6">{occasion.description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowPopup(false)}
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Home;