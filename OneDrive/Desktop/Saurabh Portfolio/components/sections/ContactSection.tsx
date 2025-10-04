'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react'

export default function ContactSection() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const contactInfo = [
    {
      icon: Mail,
      label: ' Email',
      value: 'saurabh@example.com',
      href: 'mailto:saurabh@example.com'
    },
    {
      icon: Phone,
      label: ' Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: ' Location',
      value: 'San Francisco, CA',
      href: '#'
    },
    {
      icon: Github,
      label: ' GitHub',
      value: 'github.com/saurabh',
      href: 'https://github.com/saurabh'
    },
    {
      icon: Linkedin,
      label: ' LinkedIn',
      value: 'linkedin.com/in/saurabh',
      href: 'https://linkedin.com/in/saurabh'
    }
  ]

  return (
    <section id="contact" ref={ref} className="py-20 bg-dark-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="text-accent-purple">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-purple to-accent-blue mx-auto rounded-full mb-6" />
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              I'm always excited to discuss new opportunities, collaborate on projects, or just have a chat about technology. Let's connect!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-8">
                Let's Connect <span className="text-accent-purple">!</span>
              </h3>
              
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Whether you're looking for a software engineer to join your team, have an exciting project in mind, 
                or just want to discuss the latest in tech, I'd love to hear from you!
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.label.includes('GitHub') || info.label.includes('LinkedIn') ? '_blank' : ''}
                    rel={info.label === 'GitHub' || info.label === 'LinkedIn' ? 'noopener noreferrer' : ''}
                    className="flex items-center group"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-12 h-12 bg-accent-purple/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-accent-purple/30 transition-colors duration-300">
                      <info.icon className="w-6 h-6 text-accent-purple" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">{info.label}</div>
                      <div className="text-white font-medium">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <motion.div 
                className="mt-12"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
              >
                <h4 className="text-lg font-semibold text-white mb-4">Current Status</h4>
                <div className="bg-dark-bg rounded-lg p-4 border border-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-accent-green rounded-full animate-pulse"></div>
                    <span className="text-gray-300">
                      Available for new opportunities and exciting projects
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 bg-dark-bg border border-gray-700 rounded-lg focus:border-accent-purple focus:outline-none text-white transition-colors duration-300"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 bg-dark-bg border border-gray-700 rounded-lg focus:border-accent-purple focus:outline-none text-white transition-colors duration-300"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-gray-700 rounded-lg focus:border-accent-purple focus:outline-none text-white transition-colors duration-300"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-gray-700 rounded-lg focus:border-accent-purple focus:outline-none text-white transition-colors duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-gray-700 rounded-lg focus:border-accent-purple focus:outline-none text-white transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-blue text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-accent-purple/25 transition-all duration-300 transform hover:-translate-y-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    e.preventDefault()
                    window.location.href = 'mailto:saurabh@example.com?subject=Contact from Portfolio&body=Hello Saurabh, I found your portfolio and would like to discuss...'
                  }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
