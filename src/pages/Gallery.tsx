import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Camera, Calendar, MapPin, Users } from 'lucide-react';

const Gallery = () => {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

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
      title: 'Student Council Leadership Summit',
      date: 'February 15, 2024',
      location: 'Main Conference Hall',
      description: 'Annual leadership conference bringing together student leaders from across campus',
      attendees: 150,
      photos: [
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80',
        'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      ]
    },
    {
      title: 'Spring Festival 2024',
      date: 'March 1, 2024',
      location: 'Campus Quad',
      description: 'A vibrant celebration of arts, culture, and community spirit',
      attendees: 500,
      photos: [
        'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80',
        'https://images.unsplash.com/photo-1530023367847-a683933f4172?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      ]
    },
    {
      title: 'Tech Innovation Showcase',
      date: 'March 10, 2024',
      location: 'Innovation Center',
      description: 'Showcasing cutting-edge projects from our tech community',
      attendees: 200,
      photos: [
        'https://images.unsplash.com/photo-1492496913980-501348b61469?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      ]
    },
    {
      title: 'Cultural Night',
      date: 'March 15, 2024',
      location: 'Performing Arts Center',
      description: 'A celebration of diversity through music, dance, and traditional performances',
      attendees: 300,
      photos: [
        'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      ]
    }
  ];

  const nextPhoto = () => {
    if (selectedEvent !== null) {
      setCurrentPhotoIndex((prev) => 
        (prev + 1) % events[selectedEvent].photos.length
      );
    }
  };

  const prevPhoto = () => {
    if (selectedEvent !== null) {
      setCurrentPhotoIndex((prev) => 
        prev === 0 ? events[selectedEvent].photos.length - 1 : prev - 1
      );
    }
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setCurrentPhotoIndex(0);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Event Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our vibrant campus life through memorable moments captured at various events.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {events.map((event, eventIndex) => (
            <motion.div
              key={eventIndex}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={event.photos[0]}
                  alt={event.title}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                  onClick={() => setSelectedEvent(eventIndex)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                    <div className="flex flex-wrap gap-4 text-white/90 text-sm">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {event.location}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {event.attendees} Attendees
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-1 text-sm font-medium text-gray-900 flex items-center">
                  <Camera className="h-4 w-4 mr-1" />
                  {event.photos.length} Photos
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{event.description}</p>
                <button
                  onClick={() => setSelectedEvent(eventIndex)}
                  className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
                >
                  View Gallery
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Photo Carousel Modal */}
        <AnimatePresence>
          {selectedEvent !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-7xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-white/80 hover:text-white z-10"
                >
                  <X className="h-8 w-8" />
                </button>

                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <motion.img
                    key={currentPhotoIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    src={events[selectedEvent].photos[currentPhotoIndex]}
                    alt={`Photo ${currentPhotoIndex + 1}`}
                    className="w-full h-full object-contain"
                  />

                  <button
                    onClick={prevPhoto}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </button>

                  <button
                    onClick={nextPhoto}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronRight className="h-8 w-8" />
                  </button>
                </div>

                <div className="mt-4 bg-white/10 backdrop-blur-md rounded-lg p-4">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {events[selectedEvent].title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-white/90">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2" />
                      {events[selectedEvent].date}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-2" />
                      {events[selectedEvent].location}
                    </div>
                    <div className="flex items-center">
                      <Camera className="h-5 w-5 mr-2" />
                      Photo {currentPhotoIndex + 1} of {events[selectedEvent].photos.length}
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
                  {events[selectedEvent].photos.map((photo, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPhotoIndex(index)}
                      className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden ${
                        currentPhotoIndex === index ? 'ring-2 ring-indigo-500' : ''
                      }`}
                    >
                      <img
                        src={photo}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      {currentPhotoIndex === index && (
                        <div className="absolute inset-0 bg-indigo-500/20" />
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Share Your Moments</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Have photos from our events? Submit them to be featured in our gallery and help us capture the vibrant spirit of our campus community.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Submit Photos
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Gallery;