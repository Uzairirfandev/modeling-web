import React, { useState, useRef, Suspense } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Box, Sphere, Torus } from '@react-three/drei'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa'
import { IoSend } from 'react-icons/io5' // Alternative send icon from IonIcons

// 3D Contact Elements
function ContactElements() {
  const groupRef = useRef()
  
  useFrame((state) => {
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.08
  })
  
  return (
    <group ref={groupRef}>
      {/* Envelope Shape */}
      <Box args={[1.5, 1, 0.2]} position={[2, 2, 0]}>
        <meshStandardMaterial 
          color="var(--primary-color)" 
          metalness={0.7} 
          roughness={0.3}
        />
      </Box>
      
      {/* Phone Shape */}
      <Box args={[0.6, 1.2, 0.1]} position={[-2, 0, 1]}>
        <meshStandardMaterial 
          color="var(--primary-light)" 
          emissive="var(--primary-light)"
          emissiveIntensity={0.3}
        />
      </Box>
      
      {/* Location Pin */}
      <Torus args={[0.3, 0.1, 16, 32]} position={[0, -1, -1]} rotation={[Math.PI/2, 0, 0]}>
        <meshStandardMaterial 
          color="var(--primary-accent)" 
          metalness={0.8} 
          roughness={0.2}
        />
      </Torus>
      
      {/* Message Particles */}
      {[...Array(4)].map((_, i) => (
        <Sphere
          key={i}
          args={[0.1, 8, 8]}
          position={[
            Math.cos(i * Math.PI / 2) * 3,
            Math.sin(i * Math.PI / 2) * 2,
            Math.cos(i * Math.PI / 2) * 1
          ]}
        >
          <meshStandardMaterial 
            color="var(--primary-light)" 
            emissive="var(--primary-light)"
            emissiveIntensity={0.5}
          />
        </Sphere>
      ))}
    </group>
  )
}

// Animated Contact Background
function ContactBackground() {
  const meshRef = useRef()
  
  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.05
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.1
  })
  
  return (
    <group ref={meshRef}>
      {[...Array(8)].map((_, i) => (
        <Box
          key={i}
          args={[0.15, 0.15, 0.15]}
          position={[
            Math.cos(i * Math.PI / 4) * 5,
            Math.sin(i * Math.PI / 4) * 3,
            Math.sin(i * Math.PI / 4) * 2
          ]}
        >
          <meshStandardMaterial 
            color="var(--primary-color)" 
            emissive="var(--primary-color)"
            emissiveIntensity={0.2}
          />
        </Box>
      ))}
    </group>
  )
}

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'hello@3dmodelpro.com',
      href: 'mailto:hello@3dmodelpro.com'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Address',
      value: '123 Creative Street, Design City, DC 12345',
      href: '#'
    },
   
  ]

  const projectTypes = [
    'Architectural Visualization',
    'Product Modeling',
    'Animation & Motion',
    'Interior Design',
    'Other'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-20 relative overflow-hidden">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 opacity-25">
        <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="var(--primary-light)" />
            <ContactElements />
            <ContactBackground />
            <OrbitControls 
              enableZoom={false} 
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.4}
            />
          </Suspense>
        </Canvas>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your next 3D project? Let's discuss how we can bring your vision to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                  >
                    <option value="" className="bg-gray-800">Select a project type</option>
                    {projectTypes.map((type, index) => (
                      <option key={index} value={type} className="bg-gray-800">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <IoSend className="text-xl" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Quick Contact */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center">
                      <info.icon className="text-purple-500 text-lg" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">{info.label}</div>
                      <div className="text-white font-medium">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h2>
              <div className="space-y-4">
                {[
                  "Expert team with 5+ years experience",
                  "Quick turnaround times",
                  "Competitive pricing",
                  "24/7 customer support",
                  
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
           
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact