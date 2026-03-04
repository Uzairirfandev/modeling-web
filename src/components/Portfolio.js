import React, { useRef, Suspense, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Box, Sphere, Cylinder, Torus } from '@react-three/drei'
import { motion } from 'framer-motion'
import { 
  FaBuilding, 
  FaCube, 
  FaIndustry, 
  FaPlay, 
  FaArrowRight, 
  FaEye, 
  FaDownload,
  FaRocket,
  FaGem,
  FaHandshake,
  FaCrown,
  FaStar,
  FaHeart
} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

// 3D Project Preview Models
// 3D Project Preview Models
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

// Project Card Component
function ProjectCard({ title, category, description, Model, delay, views, likes, onViewDetails }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white/5 backdrop-blur-md rounded-lg overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 group hover:scale-105 hover:shadow-xl"
      style={{ minHeight: '320px' }}
    >
      {/* 3D Model Preview */}
      <div className="h-40 relative overflow-hidden rounded-t-lg">
        <Canvas 
          camera={{ position: [0, 0, 8], fov: 50 }}
          style={{ width: '100%', height: '100%' }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} />
            <pointLight position={[-5, -5, -5]} intensity={0.4} color="var(--primary-light)" />
            <Model scale={0.8} />
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
        <div className="absolute top-2 left-2 flex gap-1 z-10">
          <div className="bg-black/70 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
            <FaEye className="text-xs text-white" />
            <span className="text-xs text-white">{views}</span>
          </div>
          <div className="bg-black/70 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
            <span className="text-xs text-white">❤️ {likes}</span>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-2 right-2 z-10">
          <span className="text-xs font-semibold text-[var(--primary-color)] bg-black/70 backdrop-blur-sm rounded-full px-2 py-1 uppercase tracking-wider">
            {category}
          </span>
        </div>
      </div>
      
      {/* Project Info */}
      <div className="p-3 flex flex-col flex-1">
        <h3 className="text-sm font-bold text-white mb-1 group-hover:text-[var(--primary-color)] transition-colors duration-300 line-clamp-1">
          {title}
        </h3>
        <p className="text-gray-400 text-xs mb-3 line-clamp-2 flex-1">{description}</p>
        
        <div className="flex gap-1">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onViewDetails && onViewDetails({ title, category, description, Model, views, likes })}
            className="flex-1 py-1.5 bg-[var(--primary-color)] text-white rounded-md font-semibold hover:bg-[var(--primary-dark)] transition-colors duration-300 flex items-center justify-center gap-1 text-xs"
          >
            <FaEye className="text-xs" />
            View
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="py-1.5 px-2 bg-white/10 text-white rounded-md hover:bg-white/20 transition-colors duration-300"
          >
            <FaDownload className="text-xs" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

// Service Card Component
function ServiceCard({ icon: Icon, title, description, features, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:from-white/15 hover:to-white/10 transition-all duration-300 group"
    >
      <div className="w-16 h-16 bg-[var(--primary-color)] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="text-2xl text-white" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full mr-3"></div>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

// 3D Services Section Elements
function ServicesElements() {
  const groupRef = useRef()
  
  useFrame((state) => {
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.04
  })
  
  return (
    <group ref={groupRef}>
      {/* Service Icons 3D */}
      <Box args={[0.8, 0.8, 0.8]} position={[3, 2, 0]}>
        <meshStandardMaterial 
          color="var(--primary-color)" 
          metalness={0.8} 
          roughness={0.2}
          emissive="var(--primary-color)"
          emissiveIntensity={0.3}
        />
      </Box>
      
      <Torus args={[0.6, 0.2, 16, 32]} position={[-2, 1, 1]} rotation={[Math.PI/2, 0, 0]}>
        <meshStandardMaterial 
          color="var(--primary-light)" 
          metalness={0.7} 
          roughness={0.3}
        />
      </Torus>
      
      <Sphere args={[0.4, 16, 16]} position={[0, -1, -1]}>
        <meshStandardMaterial 
          color="var(--primary-accent)" 
          emissive="var(--primary-accent)"
          emissiveIntensity={0.4}
        />
      </Sphere>
      
      {/* Floating Service Particles */}
      {[...Array(6)].map((_, i) => (
        <Box
          key={i}
          args={[0.15, 0.15, 0.15]}
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

// 3D Projects Section Elements
function ProjectsElements() {
  const groupRef = useRef()
  
  useFrame((state) => {
    groupRef.current.rotation.x = state.clock.elapsedTime * 0.03
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.05
  })
  
  return (
    <group ref={groupRef}>
      {/* Project Showcase Elements */}
      <Box args={[1.2, 0.6, 0.3]} position={[2, 1, 0]}>
        <meshStandardMaterial 
          color="var(--primary-color)" 
          metalness={0.7} 
          roughness={0.3}
        />
      </Box>
      
      <Cylinder args={[0.3, 0.3, 1, 16]} position={[-2, 0, 1]}>
        <meshStandardMaterial 
          color="var(--primary-light)" 
          emissive="var(--primary-light)"
          emissiveIntensity={0.3}
        />
      </Cylinder>
      
      <Torus args={[0.5, 0.15, 16, 32]} position={[0, 2, -1]} rotation={[Math.PI/3, Math.PI/4, 0]}>
        <meshStandardMaterial 
          color="var(--primary-accent)" 
          metalness={0.8} 
          roughness={0.2}
        />
      </Torus>
      
      {/* Project Particles */}
      {[...Array(8)].map((_, i) => (
        <Sphere
          key={i}
          args={[0.1, 8, 8]}
          position={[
            Math.cos(i * Math.PI / 4) * 5,
            Math.sin(i * Math.PI / 4) * 3,
            Math.cos(i * Math.PI / 4) * 2
          ]}
        >
          <meshStandardMaterial 
            color="var(--primary-color)" 
            emissive="var(--primary-color)"
            emissiveIntensity={0.2}
          />
        </Sphere>
      ))}
    </group>
  )
}

function Portfolio() {
  const navigate = useNavigate()
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const projects = [
    {
      title: "Modern Office Complex",
      category: "Architecture",
      description: "Contemporary commercial building with sustainable design and glass facade",
      Model: BuildingModel,
      delay: 0.1,
      views: "2.3k",
      likes: "156"
    },
    {
      title: "Luxury Smartwatch",
      category: "Product",
      description: "High-end wearable device with premium materials and detailed components",
      Model: ProductModel,
      delay: 0.2,
      views: "1.8k",
      likes: "203"
    },
    {
      title: "Minimalist Apartment",
      category: "Interior",
      description: "Scandinavian-style living space with natural light and clean aesthetics",
      Model: InteriorModel,
      delay: 0.3,
      views: "3.1k",
      likes: "289"
    },
    {
      title: "Abstract Motion",
      category: "Animation",
      description: "Dynamic 3D animation showcasing fluid motion and vibrant colors",
      Model: AnimationModel,
      delay: 0.4,
      views: "4.5k",
      likes: "412"
    },
    {
      title: "Sports Car Concept",
      category: "Vehicle",
      description: "Futuristic sports car design with aerodynamic curves and premium finish",
      Model: VehicleModel,
      delay: 0.5,
      views: "5.2k",
      likes: "567"
    },
    {
      title: "Executive Desk Set",
      category: "Furniture",
      description: "Luxury wooden desk with modern design and functional workspace layout",
      Model: FurnitureModel,
      delay: 0.6,
      views: "1.9k",
      likes: "178"
    },
    {
      title: "Smart Home Hub",
      category: "Technology",
      description: "IoT control center with touchscreen interface and connectivity features",
      Model: TechModel,
      delay: 0.7,
      views: "3.8k",
      likes: "342"
    },
    {
      title: "Botanical Garden",
      category: "Nature",
      description: "Lush green landscape with diverse flora and peaceful environment design",
      Model: NatureModel,
      delay: 0.8,
      views: "2.7k",
      likes: "234"
    }
  ]

  const services = [
    {
      icon: FaCrown,
      title: "Architectural Visualization",
      description: "Photorealistic building renderings and immersive walkthroughs",
      features: [
        "Exterior visualization",
        "Interior walkthroughs",
        "Virtual reality tours",
        "Day/night lighting studies"
      ]
    },
    {
      icon: FaGem,
      title: "Product Modeling",
      description: "Detailed 3D product models for marketing and prototyping",
      features: [
        "Photorealistic rendering",
        "360° product views",
        "Technical illustrations",
        "Packaging visualization"
      ]
    },
    {
      icon: FaHandshake,
      title: "Animation & Motion",
      description: "Professional 3D animations and motion graphics",
      features: [
        "Product animations",
        "Mechanical simulations",
        "Visual effects",
        "Character animation"
      ]
    }
  ]

  // Handle project detail view
  const openProjectDetail = (projectData) => {
    setSelectedProject(projectData)
    setIsModalOpen(true)
  }

  const closeProjectDetail = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <div className="hero-section relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
      {/* Project Detail Modal */}
      {isModalOpen && selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeProjectDetail}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div>
                <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
                <p className="text-[var(--primary-color)] text-sm">{selectedProject.category}</p>
              </div>
              <button
                onClick={closeProjectDetail}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
              >
                <FaArrowRight className="rotate-180 text-lg" />
              </button>
            </div>

            {/* 3D Model Viewer */}
            <div className="h-96 relative">
              <Canvas 
                camera={{ position: [0, 0, 6], fov: 50 }}
                style={{ width: '100%', height: '100%' }}
              >
                <Suspense fallback={null}>
                  <ambientLight intensity={0.6} />
                  <directionalLight position={[5, 5, 5]} intensity={0.8} />
                  <pointLight position={[-5, -5, -5]} intensity={0.4} color="var(--primary-light)" />
                  <selectedProject.Model scale={1.5} />
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
            </div>

            {/* Project Info */}
            <div className="p-6">
              <p className="text-gray-300 mb-4">{selectedProject.description}</p>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <FaEye className="text-[var(--primary-color)]" />
                  <span>{selectedProject.views} views</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[var(--primary-color)]">❤️</span>
                  <span>{selectedProject.likes} likes</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Services Section */}
      <section className="py-20 relative overflow-hidden">
        {/* 3D Canvas Background for Services */}
        <div className="absolute inset-0 opacity-25">
          <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="var(--primary-light)" />
              <ServicesElements />
              <OrbitControls 
                enableZoom={false} 
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.4}
              />
            </Suspense>
          </Canvas>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-var(--primary-color) via-var(--primary-light) to-var(--primary-accent) bg-clip-text text-white">Our Services</h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Professional 3D modeling services tailored to your industry needs
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  delayChildren: 0.3,
                  staggerChildren: 0.2
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut"
                    }
                  }
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <ServiceCard {...service} delay={index * 0.1} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 relative overflow-hidden">
        {/* 3D Canvas Background for Projects */}
        <div className="absolute inset-0 opacity-20">
          <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="var(--primary-light)" />
              <ProjectsElements />
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-var(--primary-color) via-var(--primary-light) to-var(--primary-accent) bg-clip-text text-white">Featured Projects</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover our latest 3D modeling work across different industries
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index} 
                {...project} 
                onViewDetails={openProjectDetail}
              />
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/projects')}
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg font-semibold text-white hover:bg-white/20 transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              Load More Projects
              <FaArrowRight className="text-sm" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
