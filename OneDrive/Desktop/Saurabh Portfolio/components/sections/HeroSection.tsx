'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

export default function HeroSection() {
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

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-bg to-accent-purple/10" />
      
      {/* Animated dots background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-purple/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3,
              delay: Math.random() * 2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-4">
          <span className="text-accent-purple font-medium text-lg">
            Hello, I'm
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1 
          variants={itemVariants} 
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-accent-purple bg-clip-text text-transparent"
        >
          Saurabh
        </motion.h1>

        {/* Title */}
        <motion.h2 
          variants={itemVariants} 
          className="text-2xl md:text-4xl font-semibold mb-8 text-gray-300"
        >
          <span className="text-white">Software Engineer</span> &{' '}
          <span className="text-accent-blue">Full Stack Developer</span>
        </motion.h2>

        {/* Description */}
        <motion.p 
          variants={itemVariants} 
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          I specialize in{' '}
          <span className="text-accent-green font-medium">Cloud Architecture</span>,{' '}
          <span className="text-accent-blue font-medium">DevOps</span>, and{' '}
          <span className="text-accent-purple font-medium">Full Stack Development</span>.
          Let's build something amazing together!
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-blue text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-accent-purple/25 transition-all duration-300 transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          
          <motion.a
            href="#contact"
            className="px-8 py-4 border-2 border-gray-600 text-white font-semibold rounded-lg hover:border-accent-purple hover:text-accent-purple transition-all duration-300 transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center space-x-6 mb-16"
        >
          <motion.a
            href="https://github.com/saurabh"
            target="_blank"
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={28} />
          </motion.a>
          
          <motion.a
            href="https://linkedin.com/in/saurabh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin size={28} />
          </motion.a>
          
          <motion.a
            href="mailto:saurabh@example.com"
            className="text-gray-400 hover:text-accent-green transition-colors duration-300"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail size={28} />
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
