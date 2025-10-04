'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Github, ExternalLink, X, ArrowLeft, ArrowRight } from 'lucide-react'

export default function ProjectsSection() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      shortDescription: 'Full-stack e-commerce solution with real-time inventory management',
      image: '/project1.jpg',
      tech: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
      category: 'Full Stack',
      githubUrl: 'https://github.com/saurabh/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.com',
      detailedDescription: 'A comprehensive e-commerce platform built with modern web technologies. Features include user authentication, product catalog, shopping cart, payment processing, and admin dashboard.',
      features: [
        'User authentication and authorization',
        'Product catalog with search and filters',
        'Shopping cart and checkout process',
        'Payment integration with Stripe',
        'Admin dashboard for inventory management',
        'Real-time order tracking',
        'Email notifications',
        'Responsive design for all devices'
      ],
      architecture: {
        frontend: 'React with TypeScript, Tailwind CSS, Redux Toolkit',
        backend: 'Node.js with Express.js, JWT authentication',
        database: 'PostgreSQL with Prisma ORM',
        cloud: 'AWS EC2, RDS, S3 for file storage',
        deployment: 'Docker containers with CI/CD pipeline'
      },
      challenges: [
        'Scalable architecture for high traffic',
        'Secure payment processing',
        'Real-time inventory updates',
        'Mobile-responsive design'
      ]
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Automation',
      shortDescription: 'Infrastructure as Code with Terraform and Kubernetes deployment',
      image: '/project2.jpg',
      tech: ['Terraform', 'Kubernetes', 'AWS', 'Docker', 'Python'],
      category: 'DevOps',
      githubUrl: 'https://github.com/saurabh/cloud-infra',
      liveUrl: 'https://infra-docs.com',
      detailedDescription: 'Automated cloud infrastructure setup using Infrastructure as Code principles. Includes monitoring, logging, and CI/CD pipelines for seamless deployments.',
      features: [
        'Terraform modules for AWS resources',
        'Kubernetes cluster auto-scaling',
        'Monitoring with Prometheus and Grafana',
        'Centralized logging with ELK stack',
        'Automated CI/CD pipelines',
        'Cost optimization strategies',
        'Security compliance automation',
        'Backup and disaster recovery'
      ],
      architecture: {
        infrastructure: 'Terraform for AWS resource provisioning',
        orchestration: 'Kubernetes for container orchestration',
        monitoring: 'Prometheus, Grafana, and ELK stack',
        cicd: 'GitHub Actions for automated deployments',
        security: 'AWS IAM, VPC, and security groups'
      },
      challenges: [
        'Cost optimization across environments',
        'Security compliance automation',
        'Zero-downtime deployments',
        'Monitoring and alerting setup'
      ]
    },
    {
      id: 3,
      title: 'Real-time Chat Application',
      shortDescription: 'WebSocket-based chat app with file sharing and voice messages',
      image: '/project3.jpg',
      tech: ['React', 'Socket.io', 'WebRTC', 'MongoDB', 'Node.js'],
      category: 'Full Stack',
      githubUrl: 'https://github.com/saurabh/realtime-chat',
      liveUrl: 'https://chat-demo.com',
      detailedDescription: 'Real-time messaging application supporting text, file sharing, voice messages, and video calls. Built for scalability and real-time performance.',
      features: [
        'Real-time text messaging',
        'File and image sharing',
        'Voice message recording',
        'Video calling with WebRTC',
        'Group chat functionality',
        'Message encryption',
        'Emoji reactions',
        'Message search and filtering'
      ],
      architecture: {
        frontend: 'React with custom hooks for WebSocket',
        messaging: 'Socket.io for real-time communication',
        media: 'WebRTC for voice/video calls',
        database: 'MongoDB for message storage',
        files: 'AWS S3 for file uploads'
      },
      challenges: [
        'Optimizing real-time performance',
        'Handling concurrent connections',
        'WebRTC implementation',
        'Message encryption and security'
      ]
    },
    {
      id: 4,
      title: 'Task Management System',
      shortDescription: 'Collaborative project management tool with Kanban boards',
      image: '/project4.jpg',
      tech: ['Next.js', 'Prisma', 'PostgreSQL', 'TypeScript', 'Tailwind'],
      category: 'Software Engineering',
      githubUrl: 'https://github.com/saurabh/task-manager',
      liveUrl: 'https://taskmanager-demo.com',
      detailedDescription: 'Advanced task management system with Kanban boards, time tracking, team collaboration, and project analytics.',
      features: [
        'Kanban board visualization',
        'Task assignment and tracking',
        'Time tracking and reports',
        'Team collaboration features',
        'Project analytics dashboard',
        'Email notifications',
        'File attachments',
        'Custom workflows'
      ],
      architecture: {
        frontend: 'Next.js 14 with App Router',
        backend: 'Next.js API routes',
        database: 'PostgreSQL with Prisma ORM',
        auth: 'NextAuth.js for authentication',
        ui: 'Tailwind CSS with shadcn/ui components'
      },
      challenges: [
        'Complex state management',
        'Real-time updates',
        'Performance optimization',
        'Role-based permissions'
      ]
    },
    {
      id: 5,
      title: 'Data Pipeline for Analytics',
      shortDescription: 'ETL pipeline processing large datasets with Apache Airflow',
      image: '/project5.jpg',
      tech: ['Python', 'Apache Airflow', 'Snowflake', 'AWS S3', 'dbt'],
      category: 'Data Engineering',
      githubUrl: 'https://github.com/saurabh/data-pipeline',
      liveUrl: 'https://data-dashboard.com',
      detailedDescription: 'Scalable data pipeline for processing and transforming large datasets from multiple sources into a data warehouse.',
      features: [
        'Automated data ingestion',
        'Data transformation workflows',
        'Quality assurance checks',
        'Data lineage tracking',
        'Scheduled batch processing',
        'Error handling and alerts',
        'Data warehouse optimization',
        'Reporting automation'
      ],
      architecture: {
        orchestration: 'Apache Airflow for workflow management',
        storage: 'AWS S3 for raw data ingestion',
        warehouse: 'Snowflake for data storage',
        transformation: 'dbt for data modeling',
        monitoring: 'Custom monitoring dashboard'
      },
      challenges: [
        'Handling large data volumes',
        'Optimizing query performance',
        'Ensuring data quality',
        'Managing complex dependencies'
      ]
    },
    {
      id: 6,
      title: 'Microservices API Gateway',
      shortDescription: 'API Gateway managing multiple microservices with authentication',
      image: '/project6.jpg',
      tech: ['Kong', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis'],
      category: 'DevOps',
      githubUrl: 'https://github.com/saurabh/api-gateway',
      liveUrl: 'https://api-gateway-doc.com',
      detailedDescription: 'Enterprise-grade API Gateway built with Kong for managing microservices, authentication, rate limiting, and API analytics.',
      features: [
        'Service discovery and routing',
        'JWT authentication and authorization',
        'Rate limiting and throttling',
        'Request/response transformation',
        'API analytics and monitoring',
        'Circuit breaker patterns',
        'Load balancing',
        'Logging and tracing'
      ],
      architecture: {
        gateway: 'Kong API Gateway',
        orchestration: 'Kubernetes for service deployment',
        cache: 'Redis for caching and sessions',
        database: 'PostgreSQL for configuration',
        monitoring: 'Prometheus and Grafana'
      },
      challenges: [
        'Service discovery implementation',
        'Authentication across services',
        'Rate limiting optimization',
        'Monitoring and observability'
      ]
    }
  ]

  const categoryColors = {
    'Full Stack': 'from-blue-400 to-purple-500',
    'DevOps': 'from-green-400 to-emerald-500',
    'Software Engineering': 'from-orange-400 to-red-500',
    'Data Engineering': 'from-pink-400 to-purple-500'
  }

  return (
    <section id="projects" ref={ref} className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-accent-purple">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-purple to-accent-blue mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore my portfolio of projects showcasing full-stack development, cloud architecture, and DevOps expertise
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-dark-card rounded-xl overflow-hidden border border-gray-800 hover:border-accent-purple/50 transition-all duration-300 group cursor-pointer"
              whileHover={{ y: -5 }}
              onClick={() => setSelectedProject(project.id)}
            >
              {/* Project Image Placeholder */}
              <div className={`h-48 bg-gradient-to-br ${categoryColors[project.category as keyof typeof categoryColors] || 'from-gray-600 to-gray-800'} flex items-center justify-center`}>
                <span className="text-white text-6xl opacity-50">💻</span>
              </div>

              <div className="p-6">
                {/* Category Badge */}
                <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 bg-gradient-to-r ${categoryColors[project.category as keyof typeof categoryColors] || 'from-gray-600 to-gray-800'} text-white`}>
                  {project.category}
                </span>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-purple transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-accent-purple text-sm font-medium">View Details →</span>
                  <div className="flex space-x-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-gray-400 hover:text-accent-green transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-dark-card rounded-2xl border border-gray-800 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedProject && (() => {
                const project = projects.find(p => p.id === selectedProject)!
                return (
                  <div className="p-8">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`px-3 py-1 text-sm font-semibold rounded-full bg-gradient-to-r ${categoryColors[project.category as keyof typeof categoryColors]} text-white`}>
                            {project.category}
                          </span>
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-3">{project.title}</h2>
                        <p className="text-gray-400 text-lg">{project.detailedDescription}</p>
                      </div>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        <X size={24} />
                      </button>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span key={tech} className="px-3 py-2 bg-accent-purple/20 text-accent-purple rounded-lg text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-accent-purple rounded-full"></div>
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Architecture */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-white mb-4">Architecture</h3>
                      <div className="bg-dark-bg rounded-lg p-4">
                        {Object.entries(project.architecture).map(([key, value]) => (
                          <div key={key} className="mb-3">
                            <span className="font-medium text-accent-purple capitalize">{key}:</span>
                            <span className="text-gray-300 ml-2">&gt;&gt; {value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Challenges */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-white mb-4">Challenges Solved</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.challenges.map((challenge, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                            <span className="text-gray-300">{challenge}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* GitHub Link */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-white mb-4">GitHub Repository</h3>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-purple to-accent-blue text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-accent-purple/25 transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <Github size={20} />
                        View Source Code
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 ml-4 px-6 py-3 border-2 border-gray-600 text-white font-semibold rounded-lg hover:border-accent-green hover:text-accent-green transition-all duration-300 transform hover:-translate-y-1"
                        >
                          <ExternalLink size={20} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
