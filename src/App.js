import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectsPage from './components/ProjectsPage'
import ModelingWorkspace from './components/ModelingWorkspace'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <HeroSection />
              <Portfolio />
              <About />
              <Testimonials />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/workspace" element={<ModelingWorkspace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
