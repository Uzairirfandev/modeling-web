import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes, FaHome, FaBriefcase, FaServicestack, FaEnvelope, FaUser } from 'react-icons/fa'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { icon: FaHome, label: 'Home', href: '#home' },
    { icon: FaBriefcase, label: 'Portfolio', href: '#portfolio' },
    { icon: FaServicestack, label: 'Services', href: '#services' },
    { icon: FaUser, label: 'About', href: '#about' },
    { icon: FaEnvelope, label: 'Contact', href: '#contact' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light)] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">3D</span>
            </div>
            <span className="text-white font-bold text-xl">ModelPro</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-gray-300 hover:text-[var(--primary-color)] transition-colors duration-300"
              >
                <item.icon className="text-sm" />
                <span className="font-medium">{item.label}</span>
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-2 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light)] rounded-lg font-semibold text-white hover:from-[var(--primary-dark)] hover:to-[var(--primary-color)] transition-all duration-300"
          >
            Get Started
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isOpen ? 1 : 0, 
            height: isOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                whileHover={{ scale: 1.02, x: 10 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-white/10 hover:text-[var(--primary-color)] rounded-lg transition-all duration-300"
              >
                <item.icon className="text-lg" />
                <span className="font-medium">{item.label}</span>
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mx-4 px-6 py-3 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light)] rounded-lg font-semibold text-white hover:from-[var(--primary-dark)] hover:to-[var(--primary-color)] transition-all duration-300"
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar
