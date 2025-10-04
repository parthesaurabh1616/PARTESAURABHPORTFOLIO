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
      title: 'AI-Powered E-Commerce Platform',
      shortDescription: 'Full-stack e-commerce solution with ML recommendations and real-time analytics',
      image: '/project1.jpg',
      tech: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'TensorFlow'],
      category: 'Full Stack',
      githubUrl: 'https://github.com/parthesaurabh1616/ai-ecommerce-platform',
      liveUrl: 'https://ai-ecommerce-demo.vercel.app',
      detailedDescription: 'A sophisticated e-commerce platform featuring AI-powered product recommendations, real-time inventory management, and advanced analytics dashboard. Built with modern web technologies and machine learning integration.',
      features: [
        'AI-powered product recommendations using collaborative filtering',
        'Real-time inventory management with WebSocket updates',
        'Advanced search with Elasticsearch integration',
        'Payment processing with Stripe and PayPal',
        'Admin dashboard with analytics and reporting',
        'Mobile-responsive PWA with offline support',
        'Multi-language support with i18n',
        'Automated email marketing campaigns'
      ],
      architecture: {
        frontend: 'Next.js 14 with TypeScript, Tailwind CSS, Zustand state management',
        backend: 'Node.js with Express.js, JWT authentication, Redis caching',
        database: 'PostgreSQL with Prisma ORM, Redis for session management',
        ai: 'TensorFlow.js for client-side ML, Python microservice for recommendations',
        cloud: 'AWS EC2, RDS, S3, CloudFront CDN, Lambda functions',
        deployment: 'Docker containers with GitHub Actions CI/CD pipeline'
      },
      challenges: [
        'Implementing real-time ML recommendations with low latency',
        'Scaling WebSocket connections for high concurrent users',
        'Optimizing database queries for complex product searches',
        'Building responsive design for complex admin interfaces'
      ]
    },
    {
      id: 2,
      title: 'Multi-Cloud Infrastructure Automation',
      shortDescription: 'Infrastructure as Code solution for AWS, Azure, and GCP with automated monitoring',
      image: '/project2.jpg',
      tech: ['Terraform', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'Docker', 'Python', 'Ansible'],
      category: 'DevOps',
      githubUrl: 'https://github.com/parthesaurabh1616/multi-cloud-infra',
      liveUrl: 'https://infra-docs.vercel.app',
      detailedDescription: 'Comprehensive Infrastructure as Code solution supporting multi-cloud deployments across AWS, Azure, and GCP. Features automated provisioning, monitoring, and cost optimization.',
      features: [
        'Multi-cloud Terraform modules (AWS, Azure, GCP)',
        'Kubernetes cluster auto-scaling and management',
        'Comprehensive monitoring with Prometheus, Grafana, and ELK stack',
        'Automated CI/CD pipelines with GitHub Actions and Azure DevOps',
        'Cost optimization with automated resource scheduling',
        'Security compliance automation (SOC2, GDPR)',
        'Disaster recovery with automated backup strategies',
        'Infrastructure drift detection and remediation'
      ],
      architecture: {
        infrastructure: 'Terraform modules for multi-cloud resource provisioning',
        orchestration: 'Kubernetes with Helm charts for application deployment',
        monitoring: 'Prometheus, Grafana, ELK stack, and custom dashboards',
        cicd: 'GitHub Actions, Azure DevOps, and GitLab CI/CD pipelines',
        security: 'AWS IAM, Azure AD, GCP IAM with least privilege access',
        networking: 'VPC peering, VPN connections, and service mesh (Istio)'
      },
      challenges: [
        'Managing infrastructure across multiple cloud providers',
        'Implementing consistent security policies across clouds',
        'Optimizing costs while maintaining high availability',
        'Automating compliance and security scanning'
      ]
    },
    {
      id: 3,
      title: 'Real-time Collaboration Platform',
      shortDescription: 'WebSocket-based collaboration tool with video conferencing and document sharing',
      image: '/project3.jpg',
      tech: ['React', 'Socket.io', 'WebRTC', 'MongoDB', 'Node.js', 'Redis', 'Docker'],
      category: 'Full Stack',
      githubUrl: 'https://github.com/parthesaurabh1616/collaboration-platform',
      liveUrl: 'https://collab-platform.vercel.app',
      detailedDescription: 'Advanced real-time collaboration platform supporting video conferencing, document collaboration, screen sharing, and team management. Built for enterprise-level scalability.',
      features: [
        'Real-time video conferencing with WebRTC',
        'Collaborative document editing with operational transforms',
        'Screen sharing and whiteboard functionality',
        'File sharing with version control',
        'Team management and role-based permissions',
        'Chat with message encryption',
        'Meeting recording and transcription',
        'Mobile apps for iOS and Android'
      ],
      architecture: {
        frontend: 'React with custom hooks for WebSocket and WebRTC',
        messaging: 'Socket.io with Redis adapter for horizontal scaling',
        media: 'WebRTC with TURN servers for NAT traversal',
        database: 'MongoDB with replica sets for high availability',
        files: 'AWS S3 with CloudFront for global file distribution',
        auth: 'JWT with refresh tokens and OAuth2 integration'
      },
      challenges: [
        'Scaling WebSocket connections to handle thousands of users',
        'Implementing reliable WebRTC connections across different networks',
        'Building conflict-free collaborative editing with operational transforms',
        'Optimizing media streaming for low-latency communication'
      ]
    },
    {
      id: 4,
      title: 'Enterprise Task Management System',
      shortDescription: 'Advanced project management tool with AI-powered insights and automation',
      image: '/project4.jpg',
      tech: ['Next.js', 'Prisma', 'PostgreSQL', 'TypeScript', 'Tailwind', 'OpenAI API'],
      category: 'Software Engineering',
      githubUrl: 'https://github.com/parthesaurabh1616/enterprise-task-manager',
      liveUrl: 'https://taskmanager-demo.vercel.app',
      detailedDescription: 'Comprehensive enterprise task management system featuring AI-powered project insights, automated workflows, and advanced analytics. Designed for large teams and complex projects.',
      features: [
        'AI-powered project timeline predictions',
        'Advanced Kanban boards with custom workflows',
        'Automated task assignment based on skills and workload',
        'Time tracking with detailed analytics and reporting',
        'Integration with popular tools (Slack, Jira, GitHub)',
        'Advanced search with natural language processing',
        'Custom dashboard builder with drag-and-drop widgets',
        'Mobile-first responsive design'
      ],
      architecture: {
        frontend: 'Next.js 14 with App Router and Server Components',
        backend: 'Next.js API routes with middleware for authentication',
        database: 'PostgreSQL with Prisma ORM and connection pooling',
        ai: 'OpenAI API for natural language processing and insights',
        auth: 'NextAuth.js with multiple provider support',
        ui: 'Tailwind CSS with shadcn/ui components and Framer Motion'
      },
      challenges: [
        'Implementing complex state management for real-time updates',
        'Building AI-powered insights with accurate predictions',
        'Creating intuitive drag-and-drop interfaces',
        'Optimizing database queries for large datasets'
      ]
    },
    {
      id: 5,
      title: 'Big Data Analytics Pipeline',
      shortDescription: 'Scalable data processing pipeline for real-time analytics and ML model training',
      image: '/project5.jpg',
      tech: ['Python', 'Apache Airflow', 'Apache Kafka', 'Apache Spark', 'Snowflake', 'AWS'],
      category: 'Data Engineering',
      githubUrl: 'https://github.com/parthesaurabh1616/big-data-pipeline',
      liveUrl: 'https://data-analytics-dashboard.vercel.app',
      detailedDescription: 'Enterprise-grade data pipeline processing terabytes of data daily. Features real-time streaming, batch processing, and machine learning model training with automated monitoring.',
      features: [
        'Real-time data streaming with Apache Kafka',
        'Batch processing with Apache Spark on AWS EMR',
        'Data warehouse optimization with Snowflake',
        'Automated ML model training and deployment',
        'Data quality monitoring and anomaly detection',
        'Interactive dashboards with real-time metrics',
        'Automated data lineage tracking',
        'Cost optimization with intelligent resource scaling'
      ],
      architecture: {
        orchestration: 'Apache Airflow for workflow management and scheduling',
        streaming: 'Apache Kafka for real-time data ingestion',
        processing: 'Apache Spark on AWS EMR for distributed computing',
        storage: 'AWS S3 for data lake, Snowflake for data warehouse',
        ml: 'MLflow for model lifecycle management, AWS SageMaker',
        monitoring: 'Custom monitoring dashboard with Grafana and Prometheus'
      },
      challenges: [
        'Processing terabytes of data with optimal performance',
        'Ensuring data quality and consistency across pipelines',
        'Implementing real-time monitoring and alerting',
        'Optimizing costs while maintaining processing speed'
      ]
    },
    {
      id: 6,
      title: 'Microservices API Gateway',
      shortDescription: 'Enterprise API gateway with advanced routing, security, and monitoring',
      image: '/project6.jpg',
      tech: ['Kong', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis', 'Prometheus'],
      category: 'DevOps',
      githubUrl: 'https://github.com/parthesaurabh1616/microservices-gateway',
      liveUrl: 'https://api-gateway-docs.vercel.app',
      detailedDescription: 'Production-ready API gateway managing hundreds of microservices with advanced routing, authentication, rate limiting, and comprehensive monitoring. Built for enterprise-scale applications.',
      features: [
        'Advanced service discovery and load balancing',
        'JWT and OAuth2 authentication with RBAC',
        'Intelligent rate limiting and throttling',
        'Request/response transformation and validation',
        'Real-time API analytics and monitoring',
        'Circuit breaker patterns for fault tolerance',
        'Automated API documentation generation',
        'Multi-region deployment with failover'
      ],
      architecture: {
        gateway: 'Kong API Gateway with custom plugins',
        orchestration: 'Kubernetes with Helm charts for service deployment',
        cache: 'Redis cluster for caching and session management',
        database: 'PostgreSQL for configuration and analytics data',
        monitoring: 'Prometheus, Grafana, and custom metrics collection',
        security: 'mTLS, API key management, and DDoS protection'
      },
      challenges: [
        'Implementing zero-downtime deployments for gateway updates',
        'Managing authentication across hundreds of microservices',
        'Optimizing performance while maintaining security',
        'Building comprehensive monitoring and observability'
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
