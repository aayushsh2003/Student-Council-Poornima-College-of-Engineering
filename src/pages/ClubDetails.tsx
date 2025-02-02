import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useClub } from '../hooks/useClub';
import { 
  Calendar, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ExternalLink, 
  Users, 
  Award, 
  Star, 
  ChevronRight, 
  Heart,
  FileIcon,
} from 'lucide-react';

const ClubDetails = () => {
  const { clubId } = useParams<{ clubId: string }>();
  const { club, loading, error } = useClub(clubId || '');

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-600 border-t-transparent"></div>
      </div>
    );
  }

  if (error || !club) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Club Not Found</h2>
          <p className="text-gray-600">The requested club could not be found.</p>
        </div>
      </div>
    );
  }

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
      opacity: 1
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gray-50"
    >
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img src={club.logo} alt={club.name} className="w-full h-full object-cover" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            variants={itemVariants}
            className="text-white max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-4"
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-500 text-white">
                <Star className="h-4 w-4 mr-1" />
                Featured Club
              </span>
            </motion.div>
            <h1 className="text-5xl font-bold mb-4">{club.name}</h1>
            <p className="text-xl text-gray-200 mb-6">{club.tagline}</p>
            <div className="flex space-x-4">
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                Join Club
              </button>
              <button className="bg-white/10 text-white px-6 py-2 rounded-lg font-semibold hover:bg-white/20 transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Stats */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 -mt-16 mb-16 relative z-10">
          {[
            { icon: Users, label: 'Active Members', value: '45+' },
            { icon: Calendar, label: 'Events per Year', value: '24' },
            { icon: Award, label: 'Awards Won', value: '12' },
            { icon: Heart, label: 'Years Active', value: club.history.founded }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <stat.icon className="h-8 w-8 text-indigo-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* About Section with Timeline */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">{club.mission}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">{club.vision}</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Our Journey</h3>
              <div className="space-y-8">
                {club.history.milestones.map((milestone, index) => (
                  <div key={index} className="relative pl-8 pb-8">
                    <div className="absolute left-0 top-0 h-full w-0.5 bg-indigo-200">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-indigo-600 bg-white"></div>
                    </div>
                    <div className="font-bold text-indigo-600 mb-1">{milestone.year}</div>
                    <div className="text-gray-600">{milestone.event}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Team Section with Hover Effects */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {club.team.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                    <p className="text-indigo-200">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Events Section with Cards */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Events</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Upcoming Events</h3>
              {club.events.upcoming.map((event, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-xl shadow-lg p-6 mb-4"
                >
                  <h4 className="text-lg font-semibold mb-3">{event.title}</h4>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-indigo-600" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    {event.time && (
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 mr-2 text-indigo-600" />
                        {event.time}
                      </div>
                    )}
                    {event.location && (
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 mr-2 text-indigo-600" />
                        {event.location}
                      </div>
                    )}
                  </div>
                  <p className="mt-4 text-gray-600">{event.description}</p>
                  <button className="mt-4 text-indigo-600 font-semibold hover:text-indigo-700">
                    Register Now
                  </button>
                </motion.div>
              ))}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Past Events</h3>
              <div className="space-y-6">
                {club.events.past.map((event, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden"
                  >
                    {event.images && event.images[0] && (
                      <img
                        src={event.images[0]}
                        alt={event.title}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-6">
                      <h4 className="text-lg font-semibold mb-2">{event.title}</h4>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Gallery Section with Masonry Layout */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {club.gallery.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="relative group rounded-xl overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Resources Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Resources</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {club.resources.map((resource, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl shadow-lg p-6 flex items-start space-x-4"
              >
                <div className="flex-shrink-0">
                  <FileIcon className="h-8 w-8 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <button className="text-indigo-600 font-semibold hover:text-indigo-700 flex items-center">
                    Download <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section variants={itemVariants}>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-indigo-600" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-600">{club.contact.email}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-indigo-600" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-gray-600">{club.contact.phone}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-indigo-600" />
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-gray-600">{club.contact.location}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-indigo-600" />
                  <div>
                    <div className="font-semibold">Meeting Time</div>
                    <div className="text-gray-600">{club.contact.meetingTime}</div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6">Connect With Us</h3>
                <div className="flex space-x-4">
                  {Object.entries(club.contact.socialMedia).map(([platform, handle]) => (
                    <a
                      key={platform}
                      href={`https://${platform}.com/${handle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
                    >
                      <ExternalLink className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default ClubDetails;