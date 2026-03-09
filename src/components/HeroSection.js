import React, { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Box, Sphere, Torus } from '@react-three/drei'
import { motion } from 'framer-motion'
import { FaCube, FaShapes, FaRocket } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

// 3D Modeling Tools Icons
function ModelingTools() {
  return (
    <group>
      {/* Hammer */}
      <mesh position={[-3, 2, 0]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.1, 1, 0.1]} />
        <meshStandardMaterial color="var(--primary-color)" />
      </mesh>
      <mesh position={[-3, 2.6, 0]}>
        <boxGeometry args={[0.4, 0.2, 0.1]} />
        <meshStandardMaterial color="var(--primary-dark)" />
      </mesh>
      
      {/* Ruler */}
      <mesh position={[3, 2, 0]}>
        <boxGeometry args={[2, 0.1, 0.1]} />
        <meshStandardMaterial color="var(--primary-light)" />
      </mesh>
      
      {/* Pencil */}
      <mesh position={[0, 3, 0]} rotation={[0, 0, Math.PI / 6]}>
        <cylinderGeometry args={[0.05, 0.05, 1]} />
        <meshStandardMaterial color="#fbbf24" />
      </mesh>
    </group>
  )
}

// Animated 3D Cube Component
function AnimatedCube() {
  const meshRef = useRef()
  
  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.5
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
  })
  
  return (
    <Box ref={meshRef} args={[2, 2, 2]} position={[0, 0, 0]}>
      <meshStandardMaterial 
        color="var(--primary-color)" 
        metalness={0.8} 
        roughness={0.2}
        emissive="var(--primary-color)"
        emissiveIntensity={0.2}
      />
    </Box>
  )
}

// Floating Particles
function FloatingParticles() {
  const particlesRef = useRef()
  
  useFrame((state) => {
    particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1
  })
  
  return (
    <group ref={particlesRef}>
      {[...Array(8)].map((_, i) => (
        <Sphere
          key={i}
          args={[0.08, 16, 16]}
          position={[
            Math.cos(i * Math.PI / 4) * 5,
            Math.sin(i * Math.PI / 4) * 3,
            Math.sin(i * Math.PI / 4) * 2
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

// 3D Grid Floor
function GridFloor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
      <planeGeometry args={[20, 20, 20, 20]} />
      <meshStandardMaterial 
        color="var(--bg-color)" 
        wireframe
        opacity={0.3}
        transparent
      />
    </mesh>
  )
}

function HeroSection() {
  const navigate = useNavigate()

  return (
    <div className="hero-section relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden pt-16 md:pt-0">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="var(--primary-light)" />
            <AnimatedCube />
            <FloatingParticles />
            <ModelingTools />
            <GridFloor />
            <OrbitControls 
              enableZoom={false} 
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-16 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl"
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-var(--primary-color) via-var(--primary-light) to-var(--primary-accent) bg-clip-text text-white px-2"
          >
            3D Modeling Platform
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 px-4"
          >
            Create, design, and bring your 3D visions to life
          </motion.p>

          {/* Platform Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <FaCube className="text-4xl text-[var(--primary-color)] mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Model Creation</h3>
              <p className="text-gray-400 text-sm">Build 3D models with powerful tools</p>
              <ul className="text-xs text-gray-500 mt-2 space-y-1">
                <li>• Intuitive interface</li>
                <li>• Real-time preview</li>
                <li>• Multiple formats</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <FaShapes className="text-4xl text-[var(--primary-light)] mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Advanced Features</h3>
              <p className="text-gray-400 text-sm">Professional-grade modeling capabilities</p>
              <ul className="text-xs text-gray-500 mt-2 space-y-1">
                <li>• Animation tools</li>
                <li>• Material editor</li>
                <li>• Lighting system</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <FaRocket className="text-4xl text-[var(--primary-accent)] mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Export & Share</h3>
              <p className="text-gray-400 text-sm">Export your creations in any format</p>
              <ul className="text-xs text-gray-500 mt-2 space-y-1">
                <li>• Multiple export options</li>
                <li>• Cloud storage</li>
                <li>• Team collaboration</li>
              </ul>
            </div>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/workspace')}
              className="px-8 py-4 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light)] rounded-lg font-semibold text-white hover:from-[var(--primary-dark)] hover:to-[var(--primary-color)] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Creating
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg font-semibold text-white hover:bg-white/20 transition-all duration-300"
            >
              View Gallery
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection
