import React from 'react'
import { motion } from 'framer-motion'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaDribbble, FaBehance, FaGithub } from 'react-icons/fa'

function Footer() {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Services', href: '#services' },
      { name: 'Careers', href: '#careers' }
    ],
    services: [
      { name: '3D Modeling', href: '#modeling' },
      { name: 'Animation', href: '#animation' },
      { name: 'Architectural Viz', href: '#archviz' },
      { name: 'Product Design', href: '#product' }
    ],
    resources: [
      { name: 'Blog', href: '#blog' },
      { name: 'Tutorials', href: '#tutorials' },
      { name: 'Case Studies', href: '#cases' },
      { name: 'API Docs', href: '#docs' }
    ],
    support: [
      { name: 'Help Center', href: '#help' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' }
    ]
  }

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaYoutube, href: '#', label: 'YouTube' },
    { icon: FaDribbble, href: '#', label: 'Dribbble' },
    { icon: FaBehance, href: '#', label: 'Behance' },
    { icon: FaGithub, href: '#', label: 'GitHub' }
  ]

  return (
    <footer className="bg-gray-900 border-t border-white/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light)] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">3D</span>
              </div>
              <span className="text-white font-bold text-xl">ModelPro</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Creating stunning 3D visualizations that bring your ideas to life. 
              Professional modeling, animation, and rendering services.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-[var(--primary-color)] hover:bg-white/20 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="text-sm" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-4 capitalize">
                {category === 'company' ? 'Company' : category === 'services' ? 'Services' : category === 'resources' ? 'Resources' : 'Support'}
              </h3>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <motion.li key={linkIndex}>
                    <motion.a
                      href={link.href}
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="text-gray-400 hover:text-[var(--primary-color)] transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Our Latest Projects
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and get exclusive access to new projects, tutorials, and industry insights
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[var(--primary-color)] transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light)] rounded-lg font-semibold text-white hover:from-[var(--primary-dark)] hover:to-[var(--primary-color)] transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>

      {/* Bottom Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 ModelPro. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#privacy" className="text-gray-400 hover:text-[var(--primary-color)] transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-[var(--primary-color)] transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-[var(--primary-color)] transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer
