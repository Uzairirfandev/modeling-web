import React, { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Box, Sphere, Torus, Plane, Cylinder } from '@react-three/drei'
import { motion } from 'framer-motion'
import { FaCube, FaShapes, FaSave, FaTrash, FaUndo, FaRedo, FaDownload, FaUpload } from 'react-icons/fa'

// Animated 3D Object for workspace
function WorkspaceObject({ type, position, color, onPointerDown }) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)
  
  useFrame((state) => {
    if (meshRef.current && hovered) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
    }
  })
  
  const geometry = type === 'cube' ? <boxGeometry args={[1, 1, 1]} /> :
                   type === 'sphere' ? <sphereGeometry args={[0.5, 32, 32]} /> :
                   type === 'torus' ? <torusGeometry args={[0.5, 0.2, 16, 100]} /> :
                   type === 'cylinder' ? <cylinderGeometry args={[0.5, 0.5, 1, 32]} /> :
                   <boxGeometry args={[1, 1, 0.1]} />

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerDown={onPointerDown}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {geometry}
      <meshStandardMaterial 
        color={hovered ? '#ff6b6b' : color} 
        metalness={0.3}
        roughness={0.4}
      />
    </mesh>
  )
}

// Grid Helper
function WorkspaceGrid() {
  return (
    <gridHelper args={[20, 20, '#4a5568', '#2d3748']} position={[0, -0.01, 0]} />
  )
}

function ModelingWorkspace() {
  const [objects, setObjects] = useState([
    { id: 1, type: 'cube', position: [0, 0.5, 0], color: '#4299e1' },
    { id: 2, type: 'sphere', position: [2, 0.5, 0], color: '#48bb78' },
    { id: 3, type: 'torus', position: [-2, 0.5, 0], color: '#ed8936' }
  ])
  const [selectedTool, setSelectedTool] = useState('select')
  const [selectedObject, setSelectedObject] = useState(null)
  const [history, setHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)

  const addObject = (type) => {
    const newObject = {
      id: Date.now(),
      type,
      position: [Math.random() * 4 - 2, 0.5, Math.random() * 4 - 2],
      color: `#${Math.floor(Math.random()*16777215).toString(16)}`
    }
    const newObjects = [...objects, newObject]
    setObjects(newObjects)
    addToHistory(newObjects)
  }

  const deleteObject = (id) => {
    const newObjects = objects.filter(obj => obj.id !== id)
    setObjects(newObjects)
    addToHistory(newObjects)
    setSelectedObject(null)
  }

  const addToHistory = (newObjects) => {
    const newHistory = history.slice(0, historyIndex + 1)
    newHistory.push(JSON.parse(JSON.stringify(newObjects)))
    setHistory(newHistory)
    setHistoryIndex(newHistory.length - 1)
  }

  const undo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1)
      setObjects(JSON.parse(JSON.stringify(history[historyIndex - 1])))
    }
  }

  const redo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1)
      setObjects(JSON.parse(JSON.stringify(history[historyIndex + 1])))
    }
  }

  const clearWorkspace = () => {
    setObjects([])
    addToHistory([])
    setSelectedObject(null)
  }

  const exportProject = () => {
    const projectData = {
      objects,
      timestamp: new Date().toISOString(),
      version: '1.0'
    }
    const blob = new Blob([JSON.stringify(projectData, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = '3d-model-project.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Header */}
      <div className="bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">3D Modeling Workspace</h1>
            <div className="flex gap-2">
              <button
                onClick={() => window.history.back()}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-screen pt-16">
        {/* Sidebar Tools */}
        <div className="w-20 bg-black/30 backdrop-blur-md border-r border-white/10 p-4">
          <div className="space-y-4">
            <button
              onClick={() => setSelectedTool('select')}
              className={`w-full p-3 rounded-lg transition-all ${
                selectedTool === 'select' ? 'bg-blue-500 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
              title="Select"
            >
              <FaShapes className="mx-auto" />
            </button>
            
            <button
              onClick={() => addObject('cube')}
              className="w-full p-3 bg-white/10 text-gray-300 hover:bg-white/20 rounded-lg transition-all"
              title="Add Cube"
            >
              <FaCube className="mx-auto" />
            </button>
            
            <button
              onClick={() => addObject('sphere')}
              className="w-full p-3 bg-white/10 text-gray-300 hover:bg-white/20 rounded-lg transition-all"
              title="Add Sphere"
            >
              <Sphere args={[0.3, 16, 16]} />
            </button>
            
            <button
              onClick={() => addObject('torus')}
              className="w-full p-3 bg-white/10 text-gray-300 hover:bg-white/20 rounded-lg transition-all"
              title="Add Torus"
            >
              <Torus args={[0.3, 0.1, 16, 100]} />
            </button>
            
            <button
              onClick={() => addObject('cylinder')}
              className="w-full p-3 bg-white/10 text-gray-300 hover:bg-white/20 rounded-lg transition-all"
              title="Add Cylinder"
            >
              <Cylinder args={[0.3, 0.3, 0.6, 32]} />
            </button>
          </div>
        </div>

        {/* Main Canvas Area */}
        <div className="flex-1 relative">
          <Canvas camera={{ position: [5, 5, 5], fov: 60 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <pointLight position={[-10, -10, -5]} intensity={0.5} color="#4299e1" />
              
              <WorkspaceGrid />
              
              {objects.map((obj) => (
                <WorkspaceObject
                  key={obj.id}
                  type={obj.type}
                  position={obj.position}
                  color={obj.color}
                  onPointerDown={() => {
                    if (selectedTool === 'select') {
                      setSelectedObject(obj)
                    }
                  }}
                />
              ))}
              
              <OrbitControls 
                enablePan={true}
                enableZoom={true}
                enableRotate={true}
              />
            </Suspense>
          </Canvas>

          {/* Top Toolbar */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-md rounded-lg p-2 flex gap-2">
            <button
              onClick={undo}
              disabled={historyIndex <= 0}
              className="p-2 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded transition-all"
              title="Undo"
            >
              <FaUndo />
            </button>
            
            <button
              onClick={redo}
              disabled={historyIndex >= history.length - 1}
              className="p-2 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded transition-all"
              title="Redo"
            >
              <FaRedo />
            </button>
            
            <button
              onClick={clearWorkspace}
              className="p-2 bg-white/10 hover:bg-white/20 text-white rounded transition-all"
              title="Clear All"
            >
              <FaTrash />
            </button>
            
            <button
              onClick={exportProject}
              className="p-2 bg-white/10 hover:bg-white/20 text-white rounded transition-all"
              title="Export Project"
            >
              <FaDownload />
            </button>
          </div>

          {/* Object Properties Panel */}
          {selectedObject && (
            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md rounded-lg p-4 text-white">
              <h3 className="font-semibold mb-2">Object Properties</h3>
              <p className="text-sm text-gray-300">Type: {selectedObject.type}</p>
              <p className="text-sm text-gray-300">ID: {selectedObject.id}</p>
              <button
                onClick={() => deleteObject(selectedObject.id)}
                className="mt-2 px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded transition-colors"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ModelingWorkspace
