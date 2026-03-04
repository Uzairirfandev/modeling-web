import React, { useState, useRef, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Box, Sphere, Torus } from '@react-three/drei'
import { 
  FaAward, 
  FaUsers, 
  FaProjectDiagram, 
  FaClock, 
  FaCheckCircle, 
  FaLightbulb,
  FaRocket,
  FaGem,
  FaHandshake,
  FaCrown,
  FaStar,
  FaHeart,
  FaArrowLeft
} from 'react-icons/fa'

// 3D Floating Elements for About Section - Optimized
function FloatingAboutElements() {
  const groupRef = useRef()
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })
  
  return (
    <group ref={groupRef}>
      {/* Simplified Floating Elements */}
      <Box args={[0.3, 0.3, 0.3]} position={[2, 1.5, 0]}>
        <meshStandardMaterial 
          color="var(--primary-color)" 
          metalness={0.6} 
          roughness={0.4}
        />
      </Box>
      
      {/* Floating Sphere */}
      <Sphere args={[0.2, 8, 8]} position={[-2, 0.5, 0.5]}>
        <meshStandardMaterial 
          color="var(--primary-light)" 
        />
      </Sphere>
    </group>
  )
}

// Animated 3D Stats Background
function StatsBackground() {
  const meshRef = useRef()
  
  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.1
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.15
  })
  
  return (
    <group ref={meshRef}>
      {[...Array(6)].map((_, i) => (
        <Box
          key={i}
          args={[0.2, 0.2, 0.2]}
          position={[
            Math.cos(i * Math.PI / 3) * 4,
            Math.sin(i * Math.PI / 3) * 2,
            Math.sin(i * Math.PI / 3) * 1
          ]}
        >
          <meshStandardMaterial 
            color="var(--primary-light)" 
            emissive="var(--primary-light)"
            emissiveIntensity={0.2}
          />
        </Box>
      ))}
    </group>
  )
}

function About() {
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [currentX, setCurrentX] = useState(0)
  const [selectedMember, setSelectedMember] = useState(null)
  const [showMemberModal, setShowMemberModal] = useState(false)
  
  const stats = [
    { icon: FaCrown, number: "500+", label: "Projects Completed" },
    { icon: FaStar, number: "200+", label: "Happy Clients" },
    { icon: FaAward, number: "15+", label: "Awards Won" },
    { icon: FaHeart, number: "5+", label: "Years Experience" }
  ]

  const values = [
    {
      icon: FaRocket,
      title: "Innovation",
      description: "Pushing creative boundaries with cutting-edge 3D technology and innovative design solutions."
    },
    {
      icon: FaGem,
      title: "Quality",
      description: "Delivering exceptional results with attention to detail and commitment to excellence in every project."
    },
    {
      icon: FaHandshake,
      title: "Collaboration",
      description: "Working closely with clients to bring their vision to life through effective communication and teamwork."
    }
  ]

  const team = [
    {
      name: "Alex Johnson",
      role: "Lead 3D Artist",
      image: "https://img.freepik.com/free-photo/cheerful-young-caucasian-businessman_171337-727.jpg?semt=ais_hybrid&w=740&q=80",
      expertise: "Architectural Visualization"
    },
    {
      name: "Sarah Chen",
      role: "Senior Modeler",
      image: "https://www.primeit.pt/public/uploads/2022/03/Business-Manager-o-que-faz.jpg",
      expertise: "Product Design"
    },
    {
      name: "Mike Williams",
      role: "Animation Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      expertise: "Motion Graphics"
    },
    {
      name: "Emma Davis",
      role: "Creative Director",
      image: "https://s44783.pcdn.co/in/wp-content/uploads/sites/3/2022/09/business-manager.jpg.optimal.jpg",
      expertise: "Art Direction"
    }
  ]

  // Manual navigation only - no auto-slide
  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentTeamIndex((prev) => (prev + 1) % team.length)
  //   }, 4000) // Change slide every 4 seconds (slower)

  //   return () => clearInterval(interval)
  // }, [])

  // Handle team member click
  const openMemberDetails = (member) => {
    setSelectedMember(member)
    setShowMemberModal(true)
  }

  const closeMemberDetails = () => {
    setShowMemberModal(false)
    setTimeout(() => setSelectedMember(null), 300)
  }

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.clientX)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    
    const deltaX = e.clientX - startX
    const slideWidth = window.innerWidth
    const slideThreshold = slideWidth / 4
    
    if (Math.abs(deltaX) > slideThreshold) {
      if (deltaX > 0) {
        // Drag right - previous slide
        prevSlide()
      } else {
        // Drag left - next slide
        nextSlide()
      }
      setIsDragging(false)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Add global mouse event listeners
  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, startX])

  // Manual navigation functions
  const nextSlide = () => {
    setCurrentTeamIndex((prev) => (prev + 1) % team.length)
  }

  const prevSlide = () => {
    setCurrentTeamIndex((prev) => (prev - 1 + team.length) % team.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 pt-20 pb-12 md:py-20 relative overflow-hidden">
      {/* 3D Canvas Background - Optimized & Mobile Responsive */}
      <div className="absolute inset-0 opacity-20 hidden md:block">
        <Canvas 
          camera={{ position: [0, 0, 10], fov: 45 }}
          dpr={window.devicePixelRatio > 1 ? 1.5 : 1}
          performance={{ min: 0.5, max: 1 }}
          gl={{ 
            antialias: false,
            alpha: true,
            powerPreference: "high-performance"
          }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={0.5} />
            <pointLight position={[-10, -10, -10]} intensity={0.3} color="var(--primary-light)" />
            <FloatingAboutElements />
            <OrbitControls 
              enableZoom={false} 
              enablePan={false}
              autoRotate={false}
              enableRotate={false}
            />
          </Suspense>
        </Canvas>
      </div>
      
      {/* Mobile: Simple gradient background instead of 3D */}
      <div className="absolute inset-0 md:hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[var(--primary-color)] via-[var(--primary-light)] to-[var(--primary-accent)] bg-clip-text text-white"
          >
            About Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4"
          >
            We are a team of passionate 3D artists and designers dedicated to bringing your creative visions to life
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center"
            >
              <stat.icon className="text-3xl text-[var(--primary-color)] mb-3 mx-auto" />
              <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Story</h2>
            <p className="text-gray-300 mb-4">
              Founded in 2019, our studio started as a small team of passionate 3D artists with a shared vision: 
              to create stunning visual experiences that inspire and captivate audiences.
            </p>
            <p className="text-gray-300 mb-4">
              Over the years, we've grown into a full-service 3D modeling and animation studio, working with 
              clients across various industries from architecture and product design to entertainment and marketing.
            </p>
            <p className="text-gray-300">
              Our commitment to innovation and quality has earned us recognition as one of the leading 3D 
              visualization studios in the industry.
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--primary-light)]/20 rounded-xl p-8 border border-white/20"
          >
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white/10 rounded-lg h-32 flex items-center justify-center">
                  <span className="text-white/50 text-sm">Project {i}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-xl p-8 border border-white/20 text-center hover:from-white/15 hover:to-white/10 transition-all duration-300 group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--primary-light)]/20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="text-3xl text-[var(--primary-color)]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--primary-color)] transition-colors duration-300">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Meet Our Team</h2>
          
          {/* Team Slider */}
          <div className="relative"
               onMouseDown={handleMouseDown}
               style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            {/* Slider Container */}
            <div className="overflow-hidden rounded-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTeamIndex}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                  {team.map((member, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      onClick={() => openMemberDetails(member)}
                      className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 cursor-pointer"
                    >
                      <div className="h-48 bg-gradient-to-br from-[var(--primary-color)]/30 to-[var(--primary-light)]/30 flex items-center justify-center overflow-hidden relative">
                        <img 
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                        <p className="text-[var(--primary-color)] text-sm mb-2">{member.role}</p>
                        <p className="text-gray-400 text-xs">{member.expertise}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {team.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTeamIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTeamIndex 
                      ? 'bg-[var(--primary-color)] w-12' 
                      : 'bg-white/30 hover:bg-white/50 hover:w-8'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Team Member Details Modal */}
      {showMemberModal && selectedMember && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeMemberDetails}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h3 className="text-2xl font-bold text-white">Team Member Details</h3>
              <button
                onClick={closeMemberDetails}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
              >
                ×
              </button>
            </div>

            {/* Member Details */}
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Member Image */}
                <div className="md:w-1/2">
                  <div className="h-64 bg-gradient-to-br from-[var(--primary-color)]/30 to-[var(--primary-light)]/30 rounded-xl overflow-hidden relative">
                    <img 
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="md:w-1/2 space-y-4">
                  <div>
                    <h4 className="text-3xl font-bold text-white mb-2">{selectedMember.name}</h4>
                    <p className="text-xl text-[var(--primary-color)] mb-1">{selectedMember.role}</p>
                    <p className="text-gray-300 text-sm">{selectedMember.expertise}</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[var(--primary-color)]/20 rounded-full flex items-center justify-center">
                        <FaUsers className="text-[var(--primary-color)]" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Department</p>
                        <p className="text-white font-medium">Creative Team</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[var(--primary-color)]/20 rounded-full flex items-center justify-center">
                        <FaAward className="text-[var(--primary-color)]" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Experience</p>
                        <p className="text-white font-medium">5+ Years</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[var(--primary-color)]/20 rounded-full flex items-center justify-center">
                        <FaProjectDiagram className="text-[var(--primary-color)]" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Projects Completed</p>
                        <p className="text-white font-medium">50+ Projects</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <p className="text-gray-300 leading-relaxed">
                      {selectedMember.name} is a talented {selectedMember.role.toLowerCase()} with extensive experience in {selectedMember.expertise.toLowerCase()}. 
                      They bring creativity and innovation to every project, ensuring exceptional results that exceed client expectations.
                    </p>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 bg-[var(--primary-color)] text-white rounded-lg font-medium hover:bg-[var(--primary-dark)] transition-colors duration-300"
                    >
                      Contact
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors duration-300"
                    >
                      View Portfolio
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default About
