import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/logo/logo.png" 
                alt="Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional 3D modeling and visualization services for architects, designers, and creatives.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#modeling" className="text-gray-400 hover:text-white">3D Modeling</a></li>
              <li><a href="#animation" className="text-gray-400 hover:text-white">Animation</a></li>
              <li><a href="#rendering" className="text-gray-400 hover:text-white">Rendering</a></li>
              <li><a href="#design" className="text-gray-400 hover:text-white">Product Design</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white text-xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-xl">
                <FaLinkedin />
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-xl">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <p className="text-center text-gray-500 text-sm">
            © 2024 ModelPro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer