import React, { useState, useRef, Suspense } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Box, Sphere, Torus } from '@react-three/drei'
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight, FaEnvelope, FaPhone, FaProjectDiagram } from 'react-icons/fa'

// 3D Testimonial Elements
function TestimonialElements() {
  const groupRef = useRef()
  
  useFrame((state) => {
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.06
  })
  
  return (
    <group ref={groupRef}>
      {/* Quote Shape */}
      <Box args={[1.2, 0.8, 0.3]} position={[2, 1, 0]} rotation={[0, 0, Math.PI / 8]}>
        <meshStandardMaterial 
          color="var(--primary-color)" 
          metalness={0.7} 
          roughness={0.3}
          emissive="var(--primary-color)"
          emissiveIntensity={0.2}
        />
      </Box>
      
      {/* Star Shapes */}
      {[...Array(5)].map((_, i) => (
        <Sphere
          key={i}
          args={[0.15, 8, 8]}
          position={[
            Math.cos(i * Math.PI * 2 / 5) * 3,
            Math.sin(i * Math.PI * 2 / 5) * 2 + 1,
            Math.sin(i * Math.PI * 2 / 5) * 1
          ]}
        >
          <meshStandardMaterial 
            color="#fbbf24" 
            emissive="#fbbf24"
            emissiveIntensity={0.6}
          />
        </Sphere>
      ))}
      
      {/* Floating Reviews */}
      <Torus args={[0.5, 0.15, 16, 32]} position={[-2, -1, 1]} rotation={[Math.PI/3, 0, 0]}>
        <meshStandardMaterial 
          color="var(--primary-light)" 
          metalness={0.8} 
          roughness={0.2}
        />
      </Torus>
    </group>
  )
}

// Animated Background Particles
function TestimonialBackground() {
  const meshRef = useRef()
  
  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.03
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.08
  })
  
  return (
    <group ref={meshRef}>
      {[...Array(10)].map((_, i) => (
        <Box
          key={i}
          args={[0.1, 0.1, 0.1]}
          position={[
            Math.cos(i * Math.PI / 5) * 6,
            Math.sin(i * Math.PI / 5) * 4,
            Math.cos(i * Math.PI / 5) * 2
          ]}
        >
          <meshStandardMaterial 
            color="var(--primary-accent)" 
            emissive="var(--primary-accent)"
            emissiveIntensity={0.3}
          />
        </Box>
      ))}
    </group>
  )
}

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showProjectForm, setShowProjectForm] = useState(false)
  const [projectData, setProjectData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    description: ''
  })

  const testimonials = [
    {
      name: "David Martinez",
      role: "CEO, TechStart Inc.",
      company: "Technology",
      image: "/api/placeholder/100/100",
      rating: 5,
      content: "ModelPro transformed our product visualization completely. Their attention to detail and creative approach exceeded our expectations. The 3D models they created helped us secure major funding rounds.",
      project: "Product Modeling & Animation"
    },
    {
      name: "Sarah Thompson",
      role: "Lead Architect",
      company: "Architecture",
      image: "/api/placeholder/100/100",
      rating: 5,
      content: "Working with ModelPro was a game-changer for our architectural presentations. The photorealistic renderings and walkthroughs helped our clients visualize spaces before construction began.",
      project: "Architectural Visualization"
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      company: "E-commerce",
      image: "/api/placeholder/100/100",
      rating: 5,
      content: "The 3D product models created by ModelPro significantly increased our conversion rates. Customers love being able to see products from every angle before purchasing.",
      project: "E-commerce Product Models"
    },
    {
      name: "Emily Rodriguez",
      role: "Creative Director",
      company: "Advertising",
      image: "/api/placeholder/100/100",
      rating: 5,
      content: "ModelPro's animation work brought our campaign to life. The motion graphics and 3D animations were exactly what we needed to stand out in a crowded market.",
      project: "Commercial Animation"
    },
    {
      name: "James Wilson",
      role: "Interior Designer",
      company: "Design Studio",
      image: "/api/placeholder/100/100",
      rating: 5,
      content: "The interior visualizations helped our clients make confident decisions about their spaces. ModelPro understands how to capture the mood and atmosphere we're looking for.",
      project: "Interior Design Visualization"
    },
    {
      name: "Lisa Anderson",
      role: "Product Manager",
      company: "Manufacturing",
      image: "/api/placeholder/100/100",
      rating: 5,
      content: "ModelPro's technical modeling expertise helped us prototype products faster than ever. Their attention to mechanical details and materials is unmatched.",
      project: "Technical Product Modeling"
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index) => {
    setCurrentIndex(index)
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`text-sm ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
      />
    ))
  }

  // Handle project form submission
  const handleProjectSubmit = (e) => {
    e.preventDefault()
    console.log('Project submitted:', projectData)
    // Here you can send email, API call, etc.
    alert('Thank you for your project inquiry! We will contact you soon.')
    setShowProjectForm(false)
    setProjectData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      description: ''
    })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setProjectData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-20 relative overflow-hidden">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 opacity-20">
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="var(--primary-light)" />
            <TestimonialElements />
            <TestimonialBackground />
            <OrbitControls 
              enableZoom={false} 
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.3}
            />
          </Suspense>
        </Canvas>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[var(--primary-color)] via-[var(--primary-light)] to-[var(--primary-accent)] bg-clip-text text-white">
            Client Testimonials
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear what our clients have to say about their experience working with us
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 relative">
            {/* Quote Icon */}
            <div className="absolute top-4 left-4 text-[var(--primary-color)]/20">
              <FaQuoteLeft className="text-6xl" />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                {renderStars(testimonials[currentIndex].rating)}
              </div>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 text-center leading-relaxed">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Client Info */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary-color)] to-[var(--primary-light)] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-white">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-[var(--primary-color)] text-sm">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-gray-400 text-xs">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>

              {/* Project Type */}
              <div className="text-center">
                <span className="inline-block px-4 py-2 bg-[var(--primary-color)]/20 rounded-full text-[var(--primary-color)] text-sm font-medium">
                  {testimonials[currentIndex].project}
                </span>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[var(--primary-color)] w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { number: "98%", label: "Client Satisfaction" },
            { number: "500+", label: "Projects Completed" },
            { number: "50+", label: "Industry Awards" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center"
            >
              <div className="text-3xl font-bold text-[var(--primary-color)] mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[var(--primary-color)]/20 to-[var(--primary-light)]/20 rounded-2xl p-12 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Join Our Satisfied Clients?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how we can help bring your vision to life with our expert 3D modeling services.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowProjectForm(true)}
              className="px-8 py-4 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light)] rounded-lg font-semibold text-white hover:from-[var(--primary-dark)] hover:to-[var(--primary-color)] transition-all duration-300"
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Project Form Modal */}
      {showProjectForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowProjectForm(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h3 className="text-2xl font-bold text-white">Start Your Project</h3>
              <button
                onClick={() => setShowProjectForm(false)}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
              >
                ×
              </button>
            </div>

            {/* Form Content */}
            <form onSubmit={handleProjectSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={projectData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[var(--primary-color)] transition-colors duration-300"
                  placeholder="John Doe"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={projectData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[var(--primary-color)] transition-colors duration-300"
                  placeholder="john@example.com"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={projectData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[var(--primary-color)] transition-colors duration-300"
                  placeholder="+1 (555) 123-4567"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Project Type</label>
                <select
                  name="projectType"
                  value={projectData.projectType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[var(--primary-color)] transition-colors duration-300"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                >
                  <option value="" className="bg-gray-800 text-white">Select a project type</option>
                  <option value="3d-modeling" className="bg-gray-800 text-white">3D Modeling</option>
                  <option value="animation" className="bg-gray-800 text-white">Animation</option>
                  <option value="visualization" className="bg-gray-800 text-white">Architectural Visualization</option>
                  <option value="product-design" className="bg-gray-800 text-white">Product Design</option>
                  <option value="other" className="bg-gray-800 text-white">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Project Description</label>
                <textarea
                  name="description"
                  value={projectData.description}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[var(--primary-color)] transition-colors duration-300 resize-none"
                  placeholder="Describe your project requirements..."
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                />
              </div>

              <div className="flex gap-4 pb-4">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 py-3 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light)] rounded-lg font-semibold text-white hover:from-[var(--primary-dark)] hover:to-[var(--primary-color)] transition-all duration-300"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                >
                  Submit Project
                </motion.button>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowProjectForm(false)}
                  className="flex-1 py-3 bg-white/10 border border-white/20 rounded-lg text-white font-semibold hover:bg-white/20 transition-colors duration-300"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                >
                  Cancel
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default Testimonials
