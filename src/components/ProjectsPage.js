import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaSearch, FaFilter, FaEye, FaDownload, FaCalendar, FaUser, FaClock, FaHeart, FaExternalLinkAlt, FaTimes, FaShare, FaBookmark } from 'react-icons/fa'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Box, Sphere, Cylinder, Torus } from '@react-three/drei'
import { Suspense, useRef } from 'react'

// Import all 3D models from Portfolio component
function BuildingModel({ scale = 1 }) {
  const meshRef = useRef()
  useFrame((state) => {
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
  })
  
  return (
    <group ref={meshRef} scale={scale}>
      <Box args={[1.5, 2, 1.5]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#60a5fa" metalness={0.8} roughness={0.2} />
      </Box>
      <Box args={[2, 0.2, 2]} position={[0, -1, 0]}>
        <meshStandardMaterial color="#374151" />
      </Box>
      <Box args={[0.3, 0.8, 0.3]} position={[0.6, 0.3, 0.6]}>
        <meshStandardMaterial color="#fbbf24" />
      </Box>
    </group>
  )
}

function ProductModel({ scale = 1 }) {
  const meshRef = useRef()
  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
  })
  
  return (
    <group ref={meshRef} scale={scale}>
      <Cylinder args={[0.8, 0.8, 1.5, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#10b981" metalness={0.9} roughness={0.1} />
      </Cylinder>
      <Torus args={[1, 0.15, 16, 32]} position={[0, 0.8, 0]} rotation={[Math.PI/2, 0, 0]}>
        <meshStandardMaterial color="#f59e0b" />
      </Torus>
      <Sphere args={[0.2, 16, 16]} position={[0, -0.2, 0]}>
        <meshStandardMaterial color="#ef4444" />
      </Sphere>
    </group>
  )
}

function InteriorModel({ scale = 1 }) {
  const meshRef = useRef()
  useFrame((state) => {
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.15
  })
  
  return (
    <group ref={meshRef} scale={scale}>
      <Box args={[2, 0.1, 2]} position={[0, -0.8, 0]}>
        <meshStandardMaterial color="#8b5cf6" />
      </Box>
      <Box args={[0.08, 1.5, 0.08]} position={[-0.9, 0, -0.9]}>
        <meshStandardMaterial color="#6b7280" />
      </Box>
      <Box args={[0.08, 1.5, 0.08]} position={[0.9, 0, -0.9]}>
        <meshStandardMaterial color="#6b7280" />
      </Box>
      <Box args={[0.08, 1.5, 0.08]} position={[-0.9, 0, 0.9]}>
        <meshStandardMaterial color="#6b7280" />
      </Box>
      <Box args={[0.08, 1.5, 0.08]} position={[0.9, 0, 0.9]}>
        <meshStandardMaterial color="#6b7280" />
      </Box>
      <Box args={[1.8, 0.08, 0.08]} position={[0, 0.6, 0.9]}>
        <meshStandardMaterial color="#fbbf24" />
      </Box>
    </group>
  )
}

function AnimationModel({ scale = 1 }) {
  const meshRef = useRef()
  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.5
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2
  })
  
  return (
    <group ref={meshRef} scale={scale}>
      <Torus args={[0.8, 0.2, 16, 32]}>
        <meshStandardMaterial color="#ec4899" metalness={0.8} roughness={0.2} />
      </Torus>
      <Sphere args={[0.3, 16, 16]} position={[1, 0, 0]}>
        <meshStandardMaterial color="#06b6d4" />
      </Sphere>
      <Box args={[0.2, 0.2, 0.2]} position={[-1, 0, 0]}>
        <meshStandardMaterial color="#f59e0b" />
      </Box>
    </group>
  )
}

function VehicleModel({ scale = 1 }) {
  const meshRef = useRef()
  useFrame((state) => {
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.15
  })
  
  return (
    <group ref={meshRef} scale={scale}>
      <Box args={[2, 0.8, 1]} position={[0, 0.2, 0]}>
        <meshStandardMaterial color="#ef4444" metalness={0.7} roughness={0.3} />
      </Box>
      <Box args={[1.5, 0.6, 0.8]} position={[0, 0.5, 0]}>
        <meshStandardMaterial color="#dc2626" />
      </Box>
      <Cylinder args={[0.3, 0.3, 0.2, 16]} position={[-0.6, -0.2, 0.5]} rotation={[Math.PI/2, 0, 0]}>
        <meshStandardMaterial color="#1f2937" />
      </Cylinder>
      <Cylinder args={[0.3, 0.3, 0.2, 16]} position={[0.6, -0.2, 0.5]} rotation={[Math.PI/2, 0, 0]}>
        <meshStandardMaterial color="#1f2937" />
      </Cylinder>
      <Cylinder args={[0.3, 0.3, 0.2, 16]} position={[-0.6, -0.2, -0.5]} rotation={[Math.PI/2, 0, 0]}>
        <meshStandardMaterial color="#1f2937" />
      </Cylinder>
      <Cylinder args={[0.3, 0.3, 0.2, 16]} position={[0.6, -0.2, -0.5]} rotation={[Math.PI/2, 0, 0]}>
        <meshStandardMaterial color="#1f2937" />
      </Cylinder>
    </group>
  )
}

function FurnitureModel({ scale = 1 }) {
  const meshRef = useRef()
  useFrame((state) => {
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.1
  })
  
  return (
    <group ref={meshRef} scale={scale}>
      <Box args={[1.5, 0.1, 0.8]} position={[0, 0.4, 0]}>
        <meshStandardMaterial color="#92400e" />
      </Box>
      <Box args={[0.1, 0.8, 0.1]} position={[-0.7, 0, -0.35]}>
        <meshStandardMaterial color="#78350f" />
      </Box>
      <Box args={[0.1, 0.8, 0.1]} position={[0.7, 0, -0.35]}>
        <meshStandardMaterial color="#78350f" />
      </Box>
      <Box args={[0.1, 0.8, 0.1]} position={[-0.7, 0, 0.35]}>
        <meshStandardMaterial color="#78350f" />
      </Box>
      <Box args={[0.1, 0.8, 0.1]} position={[0.7, 0, 0.35]}>
        <meshStandardMaterial color="#78350f" />
      </Box>
      <Box args={[1.3, 0.05, 0.6]} position={[0, -0.35, 0]}>
        <meshStandardMaterial color="#92400e" />
      </Box>
    </group>
  )
}

function TechModel({ scale = 1 }) {
  const meshRef = useRef()
  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
  })
  
  return (
    <group ref={meshRef} scale={scale}>
      <Box args={[1.2, 0.8, 0.05]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.1} />
      </Box>
      <Box args={[1.1, 0.7, 0.02]} position={[0, 0, 0.03]}>
        <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.2} />
      </Box>
      <Box args={[0.3, 0.4, 0.5]} position={[0, -0.6, 0]}>
        <meshStandardMaterial color="#475569" />
      </Box>
      <Sphere args={[0.05, 16, 16]} position={[0.4, -0.6, 0.2]}>
        <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={0.5} />
      </Sphere>
    </group>
  )
}

function NatureModel({ scale = 1 }) {
  const meshRef = useRef()
  useFrame((state) => {
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.05
  })
  
  return (
    <group ref={meshRef} scale={scale}>
      <Cylinder args={[0.1, 0.15, 1.5, 8]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#92400e" />
      </Cylinder>
      <Sphere args={[0.8, 16, 16]} position={[0, 0.8, 0]}>
        <meshStandardMaterial color="#16a34a" />
      </Sphere>
      <Sphere args={[0.6, 16, 16]} position={[-0.3, 0.6, -0.2]}>
        <meshStandardMaterial color="#22c55e" />
      </Sphere>
      <Sphere args={[0.5, 16, 16]} position={[0.4, 0.7, 0.3]}>
        <meshStandardMaterial color="#15803d" />
      </Sphere>
    </group>
  )
}

// Extended project data with more details
const allProjects = [
  {
    id: 1,
    title: "Modern Office Complex",
    category: "Architecture",
    description: "Contemporary commercial building with sustainable design and glass facade",
    Model: BuildingModel,
    views: "2.3k",
    likes: "156",
    date: "2024-01-15",
    client: "TechCorp Industries",
    duration: "3 months",
    software: ["3ds Max", "V-Ray", "Photoshop"],
    tags: ["Commercial", "Modern", "Sustainable"],
    featured: true,
    detailedDescription: "A state-of-the-art office complex featuring sustainable architecture with integrated green spaces, smart building systems, and energy-efficient glass facade designed for maximum natural light."
  },
  {
    id: 2,
    title: "Luxury Smartwatch",
    category: "Product",
    description: "High-end wearable device with premium materials and detailed components",
    Model: ProductModel,
    views: "1.8k",
    likes: "203",
    date: "2024-02-20",
    client: "Luxury Watch Co.",
    duration: "6 weeks",
    software: ["SolidWorks", "KeyShot", "Illustrator"],
    tags: ["Luxury", "Wearable", "Technology"],
    featured: true,
    detailedDescription: "Premium smartwatch design combining traditional craftsmanship with modern technology, featuring titanium case, sapphire crystal, and advanced health monitoring capabilities."
  },
  {
    id: 3,
    title: "Minimalist Apartment",
    category: "Interior",
    description: "Scandinavian-style living space with natural light and clean aesthetics",
    Model: InteriorModel,
    views: "3.1k",
    likes: "289",
    date: "2024-01-28",
    client: "Private Residence",
    duration: "2 months",
    software: ["SketchUp", "V-Ray", "Lightroom"],
    tags: ["Residential", "Minimalist", "Scandinavian"],
    featured: true,
    detailedDescription: "Scandinavian-inspired apartment design emphasizing clean lines, natural materials, and optimal use of space with custom furniture and integrated smart home features."
  },
  {
    id: 4,
    title: "Abstract Motion",
    category: "Animation",
    description: "Dynamic 3D animation showcasing fluid motion and vibrant colors",
    Model: AnimationModel,
    views: "4.5k",
    likes: "412",
    date: "2024-03-10",
    client: "Creative Agency",
    duration: "4 weeks",
    software: ["Cinema 4D", "After Effects", "Octane Render"],
    tags: ["Abstract", "Motion Graphics", "Artistic"],
    featured: true,
    detailedDescription: "Experimental animation project exploring fluid dynamics and abstract forms, created for a digital art exhibition featuring particle systems and procedural generation."
  },
  {
    id: 5,
    title: "Sports Car Concept",
    category: "Vehicle",
    description: "Futuristic sports car design with aerodynamic curves and premium finish",
    Model: VehicleModel,
    views: "5.2k",
    likes: "567",
    date: "2024-02-15",
    client: "AutoVision Studio",
    duration: "8 weeks",
    software: ["Blender", "Substance Painter", "Photoshop"],
    tags: ["Automotive", "Concept", "Futuristic"],
    featured: true,
    detailedDescription: "Next-generation electric sports car concept with advanced aerodynamics, sustainable materials, and autonomous driving capabilities designed for the luxury market."
  },
  {
    id: 6,
    title: "Executive Desk Set",
    category: "Furniture",
    description: "Luxury wooden desk with modern design and functional workspace layout",
    Model: FurnitureModel,
    views: "1.9k",
    likes: "178",
    date: "2024-01-10",
    client: "Office Furniture Ltd.",
    duration: "3 weeks",
    software: ["Rhino 3D", "KeyShot", "InDesign"],
    tags: ["Furniture", "Office", "Luxury"],
    featured: true,
    detailedDescription: "Executive office furniture collection featuring premium hardwood construction, integrated cable management, and ergonomic design principles for modern workspaces."
  },
  {
    id: 7,
    title: "Smart Home Hub",
    category: "Technology",
    description: "IoT control center with touchscreen interface and connectivity features",
    Model: TechModel,
    views: "3.8k",
    likes: "342",
    date: "2024-03-01",
    client: "SmartHome Inc.",
    duration: "5 weeks",
    software: ["Fusion 360", "SolidWorks", "After Effects"],
    tags: ["IoT", "Smart Home", "Technology"],
    featured: true,
    detailedDescription: "Centralized smart home control hub with intuitive touchscreen interface, voice control capabilities, and seamless integration with popular home automation systems."
  },
  {
    id: 8,
    title: "Botanical Garden",
    category: "Nature",
    description: "Lush green landscape with diverse flora and peaceful environment design",
    Model: NatureModel,
    views: "2.7k",
    likes: "234",
    date: "2024-02-05",
    client: "City Parks Department",
    duration: "6 weeks",
    software: ["Lumion", "SketchUp", "Photoshop"],
    tags: ["Landscape", "Nature", "Public Space"],
    featured: true,
    detailedDescription: "Urban botanical garden design featuring diverse plant collections, educational spaces, and sustainable water management systems for community engagement."
  },
  // Additional projects for "Load More" functionality
  {
    id: 9,
    title: "Industrial Factory",
    category: "Architecture",
    description: "Modern manufacturing facility with optimized workflow and safety features",
    Model: BuildingModel,
    views: "1.5k",
    likes: "98",
    date: "2024-01-20",
    client: "Manufacturing Corp",
    duration: "4 months",
    software: ["AutoCAD", "3ds Max", "V-Ray"],
    tags: ["Industrial", "Manufacturing", "Commercial"],
    featured: false,
    detailedDescription: "Advanced manufacturing facility designed for operational efficiency, featuring automated production lines, sustainable energy systems, and comprehensive safety protocols."
  },
  {
    id: 10,
    title: "Wireless Earbuds",
    category: "Product",
    description: "Compact audio device with premium sound quality and ergonomic design",
    Model: ProductModel,
    views: "2.1k",
    likes: "187",
    date: "2024-02-25",
    client: "AudioTech Company",
    duration: "3 weeks",
    software: ["SolidWorks", "KeyShot", "Illustrator"],
    tags: ["Audio", "Wireless", "Consumer Electronics"],
    featured: false,
    detailedDescription: "Premium wireless earbuds featuring active noise cancellation, spatial audio, and ergonomic design optimized for extended wear comfort."
  },
  {
    id: 11,
    title: "Restaurant Interior",
    category: "Interior",
    description: "Fine dining restaurant with ambient lighting and sophisticated decor",
    Model: InteriorModel,
    views: "1.8k",
    likes: "145",
    date: "2024-01-30",
    client: "Gourmet Dining Group",
    duration: "5 weeks",
    software: ["SketchUp", "V-Ray", "Lightroom"],
    tags: ["Hospitality", "Restaurant", "Fine Dining"],
    featured: false,
    detailedDescription: "Upscale restaurant interior design featuring intimate dining spaces, custom lighting installations, and open kitchen concept for culinary theater."
  },
  {
    id: 12,
    title: "Product Animation",
    category: "Animation",
    description: "Commercial product showcase with dynamic camera movements and effects",
    Model: AnimationModel,
    views: "3.2k",
    likes: "298",
    date: "2024-03-05",
    client: "Marketing Agency",
    duration: "2 weeks",
    software: ["Cinema 4D", "After Effects", "Redshift"],
    tags: ["Commercial", "Product", "Marketing"],
    featured: false,
    detailedDescription: "High-impact product animation for marketing campaign featuring photorealistic rendering, dynamic camera work, and cinematic visual effects."
  }
]

// Project Detail Modal Component
function ProjectDetailModal({ project, isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative h-64 md:h-80">
            <Canvas 
              camera={{ position: [0, 0, 6], fov: 50 }}
              style={{ width: '100%', height: '100%' }}
            >
              <Suspense fallback={null}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[5, 5, 5]} intensity={0.8} />
                <pointLight position={[-5, -5, -5]} intensity={0.4} color="var(--primary-light)" />
                <project.Model scale={1.2} />
                <OrbitControls 
                  enableZoom={true} 
                  enablePan={true}
                  autoRotate
                  autoRotateSpeed={1}
                  minDistance={3}
                  maxDistance={15}
                />
              </Suspense>
            </Canvas>
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors duration-300"
            >
              <FaTimes className="text-lg" />
            </button>

            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="text-sm font-semibold text-[var(--primary-color)] bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 uppercase tracking-wider">
                {project.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-20rem)]">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{project.title}</h2>
                <p className="text-gray-400 text-lg">{project.description}</p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-2 mt-4 md:mt-0">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors duration-300"
                >
                  <FaShare className="text-lg" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors duration-300"
                >
                  <FaBookmark className="text-lg" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-[var(--primary-color)] text-white rounded-lg hover:bg-[var(--primary-dark)] transition-colors duration-300"
                >
                  <FaDownload className="text-lg" />
                </motion.button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <div className="flex items-center gap-2 text-[var(--primary-color)] mb-1">
                  <FaEye className="text-sm" />
                  <span className="text-xs uppercase tracking-wider">Views</span>
                </div>
                <div className="text-2xl font-bold text-white">{project.views}</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <div className="flex items-center gap-2 text-[var(--primary-color)] mb-1">
                  <FaHeart className="text-sm" />
                  <span className="text-xs uppercase tracking-wider">Likes</span>
                </div>
                <div className="text-2xl font-bold text-white">{project.likes}</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <div className="flex items-center gap-2 text-[var(--primary-color)] mb-1">
                  <FaCalendar className="text-sm" />
                  <span className="text-xs uppercase tracking-wider">Date</span>
                </div>
                <div className="text-lg font-bold text-white">{new Date(project.date).toLocaleDateString()}</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <div className="flex items-center gap-2 text-[var(--primary-color)] mb-1">
                  <FaClock className="text-sm" />
                  <span className="text-xs uppercase tracking-wider">Duration</span>
                </div>
                <div className="text-lg font-bold text-white">{project.duration}</div>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-3">Project Overview</h3>
              <p className="text-gray-300 leading-relaxed">{project.detailedDescription}</p>
            </div>

            {/* Project Details Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Client Information</h3>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <FaUser className="text-[var(--primary-color)]" />
                    <span className="text-gray-400">Client:</span>
                    <span className="text-white font-semibold">{project.client}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className="text-[var(--primary-color)]" />
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-white font-semibold">{project.duration}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">Software Used</h3>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <div className="flex flex-wrap gap-2">
                    {project.software.map((tool, index) => (
                      <span key={index} className="bg-[var(--primary-color)]/20 text-[var(--primary-color)] px-3 py-1 rounded-full text-sm font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span key={index} className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// Enhanced Project Card Component
function ProjectCard({ project, index, onViewDetails }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 group hover:scale-105 hover:shadow-2xl"
      style={{ minHeight: '400px' }}
    >
      {/* 3D Model Preview */}
      <div className="h-48 relative overflow-hidden rounded-t-lg">
        <Canvas 
          camera={{ position: [0, 0, 8], fov: 50 }}
          style={{ width: '100%', height: '100%' }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} />
            <pointLight position={[-5, -5, -5]} intensity={0.4} color="var(--primary-light)" />
            <project.Model scale={0.8} />
            <OrbitControls 
              enableZoom={false} 
              enablePan={false}
              autoRotate
              autoRotateSpeed={2}
              minDistance={5}
              maxDistance={10}
            />
          </Suspense>
        </Canvas>
        
        {/* Overlay Stats */}
        <div className="absolute top-2 left-2 flex gap-2 z-10">
          <div className="bg-black/70 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
            <FaEye className="text-xs text-white" />
            <span className="text-xs text-white">{project.views}</span>
          </div>
          <div className="bg-black/70 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
            <span className="text-xs text-white">❤️ {project.likes}</span>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-2 right-2 z-10">
          <span className="text-xs font-semibold text-[var(--primary-color)] bg-black/70 backdrop-blur-sm rounded-full px-2 py-1 uppercase tracking-wider">
            {project.category}
          </span>
        </div>
      </div>
      
      {/* Project Info */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[var(--primary-color)] transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-3 line-clamp-2 flex-1">{project.description}</p>
        
        {/* Project Meta */}
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <FaCalendar className="text-[var(--primary-color)]" />
            <span>{new Date(project.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaClock className="text-[var(--primary-color)]" />
            <span>{project.duration}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {project.tags.slice(0, 3).map((tag, idx) => (
            <span key={idx} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onViewDetails(project)}
            className="flex-1 py-2 bg-[var(--primary-color)] text-white rounded-lg font-semibold hover:bg-[var(--primary-dark)] transition-colors duration-300 flex items-center justify-center gap-2 text-sm"
          >
            <FaEye className="text-sm" />
            View Details
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="py-2 px-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors duration-300"
          >
            <FaDownload className="text-sm" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

function ProjectsPage() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('featured')
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Get unique categories
  const categories = ['All', ...new Set(allProjects.map(p => p.category))]

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = allProjects

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(project => project.category === selectedCategory)
    }

    // Sort projects
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'featured':
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
        case 'views':
          return parseInt(b.views.replace('k', '000')) - parseInt(a.views.replace('k', '000'))
        case 'likes':
          return parseInt(b.likes) - parseInt(a.likes)
        case 'date':
          return new Date(b.date) - new Date(a.date)
        default:
          return 0
      }
    })

    return filtered
  }, [searchTerm, selectedCategory, sortBy])

  // Handle project detail view
  const openProjectDetail = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeProjectDetail = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Project Detail Modal */}
      <ProjectDetailModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={closeProjectDetail} 
      />
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-white hover:text-[var(--primary-color)] transition-colors duration-300"
            >
              <FaArrowLeft className="text-lg" />
              <span className="font-semibold">Back to Home</span>
            </motion.button>
            
            <h1 className="text-2xl md:text-3xl font-bold text-white bg-gradient-to-r from-var(--primary-color) via-var(--primary-light) to-var(--primary-accent) bg-clip-text text-transparent">
              All Projects
            </h1>
            
            <div className="text-white font-semibold">
              {filteredProjects.length} Projects
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[var(--primary-color)] transition-colors duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[var(--primary-color)] transition-colors duration-300 appearance-none cursor-pointer"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-gray-800">
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[var(--primary-color)] transition-colors duration-300 appearance-none cursor-pointer"
            >
              <option value="featured" className="bg-gray-800">Featured First</option>
              <option value="views" className="bg-gray-800">Most Viewed</option>
              <option value="likes" className="bg-gray-800">Most Liked</option>
              <option value="date" className="bg-gray-800">Latest First</option>
            </select>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} onViewDetails={openProjectDetail} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-gray-400 text-xl mb-4">No projects found</div>
            <p className="text-gray-500">Try adjusting your filters or search terms</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectsPage
