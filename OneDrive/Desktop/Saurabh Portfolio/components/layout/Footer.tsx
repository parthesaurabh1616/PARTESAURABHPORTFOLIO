import { Heart, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-bg border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Saurabh<span className="text-accent-purple">.</span>
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Software Engineer passionate about building innovative solutions with modern technologies. 
              Let's create something amazing together!
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/saurabh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/saurabh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:saurabh@example.com"
                className="text-gray-400 hover:text-accent-green transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-white font-semibold mb-4">Quick Links</p>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <p className="text-white font-semibold mb-4">Technologies</p>
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'Git'].map((tech) => (
                <span 
                  key={tech} 
                  className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 text-accent-purple hover:text-accent-blue transition-colors duration-300"
              >
                <ExternalLink size={16} />
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Saurabh. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>for developers</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
