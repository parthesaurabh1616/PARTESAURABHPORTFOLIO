'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function SkillsSection() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const skills = {
    'Frontend': [
      { name: 'React', level: 90, color: 'from-blue-400 to-blue-600',
        icon: '⚛️', description: 'Component-based UI development' },
      { name: 'Next.js', level: 85, color: 'from-gray-400 to-gray-600',
        icon: '▲', description: 'Full-stack React framework' },
      { name: 'TypeScript', level: 88, color: 'from-blue-500 to-blue-700',
        icon: '🔷', description: 'Type-safe JavaScript development' },
      { name: 'Tailwind CSS', level: 85, color: 'from-cyan-400 to-blue-500',
        icon: '🎨', description: 'Utility-first CSS framework' },
      { name: 'JavaScript', level: 92, color: 'from-yellow-400 to-orange-500',
        icon: '🟨', description: 'Core web development language' }
    ],
    'Backend': [
      { name: 'Node.js', level: 88, color: 'from-green-400 to-green-600',
        icon: '🟢', description: 'Server-side JavaScript runtime' },
      { name: 'Python', level: 85, color: 'from-blue-400 to-purple-500',
        icon: '🐍', description: 'Versatile programming language' },
      { name: 'Express.js', level: 90, color: 'from-gray-600 to-gray-800',
        icon: '🚂', description: 'Web application framework' },
      { name: 'PostgreSQL', level: 82, color: 'from-blue-500 to-blue-700',
        icon: '🐘', description: 'Advanced database system' }
    ],
    'Cloud & DevOps': [
      { name: 'AWS', level: 85, color: 'from-orange-400 to-orange-600',
        icon: '☁️', description: 'Cloud platform and services' },
      { name: 'Docker', level: 80, color: 'from-blue-400 to-blue-600',
        icon: '🐳', description: 'Containerization platform' },
      { name: 'Kubernetes', level: 75, color: 'from-blue-500 to-indigo-600',
        icon: '☸️', description: 'Container orchestration' },
      { name: 'Git', level: 92, color: 'from-orange-500 to-red-500',
        icon: '🌿', description: 'Version control system' }
    ],
    'Tools': [
      { name: 'VS Code', level: 95, color: 'from-blue-500 to-purple-600',
        icon: '💻', description: 'Integrated development environment' },
      { name: 'Linux', level: 80, color: 'from-green-500 to-green-700',
        icon: '🐧', description: 'Unix-like operating system' },
      { name: 'MongoDB', level: 78, color: 'from-green-400 to-green-600',
        icon: '🍃', description: 'NoSQL document database' },
      { name: 'GraphQL', level: 70, color: 'from-pink-400 to-purple-500',
        icon: '🟣', description: 'API query language' }
    ]
  }

  const skillCategories = Object.keys(skills)

  return (
    <section id="skills" ref={ref} className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-accent-purple">Skills</span> & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-purple to-accent-blue mx-auto rounded-full mb-6" />
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications across the full technology stack
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category}
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="bg-dark-card rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                  {category}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {skills[category as keyof typeof skills].map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={inView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ 
                        duration: 0.5, 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1 
                      }}
                      className="bg-dark-bg rounded-xl p-6 border border-gray-800 hover:border-accent-purple/50 transition-all duration-300 group"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-center mb-3">
                        <span className="text-2xl mr-3">{skill.icon}</span>
                        <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                      </div>
                      
                      <p className="text-gray-400 text-sm mb-4">{skill.description}</p>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                            ease: "easeOut"
                          }}
                          className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                        />
                      </div>
                      
                      <div className="text-right text-sm text-accent-purple font-medium">
                        {skill.level}%
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <div className="bg-dark-card rounded-2xl p-8 border border-gray-800">
              <h3 className="flex items-center justify-center text-2xl font-bold text-white mb-6 gap-2">
                🚀 Always Learning
              </h3>
              <p className="text-gray-400 text-lg mb-6">
                Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
                tools, and methodologies to stay at the forefront of software development.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-accent-purple/20 text-accent-purple rounded-full text-sm">
                  Continuous Learning
                </span>
                <span className="px-4 py-2 bg-accent-blue/20 text-accent-blue rounded-full text-sm">
                  Industry Best Practices
                </span>
                <span className="px-4 py-2 bg-accent-green/20 text-accent-green rounded-full text-sm">
                  Cutting-Edge Technologies
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
