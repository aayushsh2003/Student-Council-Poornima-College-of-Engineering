import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ChevronRight, Search, Tag, Filter, BookOpen } from 'lucide-react';
import blogData from '../data/blogs.json';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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

  const filteredPosts = blogData.posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Post */}
        <motion.div
          variants={itemVariants}
          className="mb-16"
        >
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <img
              src={blogData.featured.image}
              alt={blogData.featured.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
              <div className="absolute bottom-8 left-8 right-8">
                <span className="inline-block bg-indigo-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                  {blogData.featured.category}
                </span>
                <h1 className="text-4xl font-bold text-white mb-4">{blogData.featured.title}</h1>
                <p className="text-lg text-gray-200 mb-6">{blogData.featured.excerpt}</p>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <img
                      src={blogData.featured.author.avatar}
                      alt={blogData.featured.author.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <div className="text-white font-semibold">{blogData.featured.author.name}</div>
                      <div className="text-gray-300 text-sm">{blogData.featured.author.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-300 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2" />
                      {new Date(blogData.featured.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-2" />
                      {blogData.featured.readTime}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="flex gap-4">
              <select
                onChange={(e) => setSelectedCategory(e.target.value || null)}
                className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">All Categories</option>
                {blogData.categories.map((category) => (
                  <option key={category.name} value={category.name}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Blog Posts */}
          <div className="lg:col-span-2">
            <motion.div variants={itemVariants} className="space-y-8">
              {filteredPosts.map((post) => (
                <motion.article
                  key={post.id}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
                >
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-3/5 p-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="bg-indigo-100 text-indigo-600 text-sm font-semibold px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 mb-2">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-8 h-8 rounded-full mr-2"
                          />
                          <div>
                            <div className="text-sm font-semibold">{post.author.name}</div>
                            <div className="text-xs text-gray-500">{post.author.role}</div>
                          </div>
                        </div>
                        <button className="text-indigo-600 font-semibold flex items-center hover:text-indigo-700">
                          Read More <ChevronRight className="h-4 w-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.div variants={itemVariants} className="lg:col-span-1 space-y-8">
            {/* Categories */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Filter className="h-5 w-5 mr-2" /> Categories
              </h3>
              <div className="space-y-2">
                {blogData.categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === category.name
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    {category.name} <span className="text-gray-500">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Tag className="h-5 w-5 mr-2" /> Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {blogData.popularTags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Write for Us */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <BookOpen className="h-5 w-5 mr-2" /> Write for Us
              </h3>
              <p className="mb-4">
                Share your stories and experiences with the student community. Become a contributor!
              </p>
              <button className="w-full bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Submit Article
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Blog;