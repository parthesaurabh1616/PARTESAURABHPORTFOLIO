'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Database, Cloud, Wrench } from 'lucide-react'

export default function AboutSection() {
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

  const specializationAreas = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Building scalable web applications with modern frameworks'
    },
    {
      icon: Database,
      title: 'Software Engineering',
      description: 'Designing robust systems and implementing best practices'
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Deploying and optimizing applications on cloud platforms'
    },
    {
      icon: Wrench,
      title: 'DevOps & Automation',
      description: 'Streamlining development workflows and infrastructure'
    }
  ]

  return (
    <section id="about" ref={ref} className="py-20 bg-dark-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold && mb-6">
              About <span className="text-accent-purple">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-purple to-accent-blue mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                I'm a passionate <span className="text-accent-blue font-semibold">Software Engineer</span> with 
                expertise in building scalable applications and cloud infrastructure. 
                With a strong foundation in
                <span className="text-accent-purple font-semibold">full-stack development</span> and 
                <span className="text-accent-green font-semibold">DevOps practices</span>, 
                I love solving complex problems and delivering robust solutions.
              </p>
              
              <p className="text-lg text-gray-400 leading-relaxed">
                My journey in tech started with curiosity about how things work behind the scenes. 
                Since then, I've been passionate about learning new technologies, building innovative solutions, 
                and contributing to projects that make a real impact.
              </p>
              
              <p className="text-lg text-gray-400 leading-relaxed">
                When I'm not coding, you can find me exploring cloud architecture patterns, 
                contributing to open-source projects, or mentoring fellow developers. 
                I believe in continuous learning and staying updated with the latest industry trends.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-purple mb-2">3+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-blue mb-2">50+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
              </div>
            </motion.div>

            {/* Specialization Areas */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {specializationAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-dark-bg p-6 rounded-xl border border-gray-800 hover:border-accent-purple/50 transition-all duration-300 group"
                  whileHover={{ y: -5 }}
                >
                  <area.icon className="w-8 h-8 text-accent-purple mb-4 group-hover:text-accent-blue transition-colors duration-300" />
                  <h3 className="text-lg font-semibold text-white mb-2">{area.title}</h3>
                  <p className="text-gray-400 text-sm">{area.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-blue text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-accent-purple/25 transition-all duration-300 transform hover:-translate-y-1"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
