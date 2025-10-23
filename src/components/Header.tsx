import { useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-5 flex justify-between items-center h-16">
        <div className="text-2xl font-bold text-blue-600">
          <a href="#home" className="hover:text-blue-700 transition-colors">Portfolio</a>
        </div>
        <div className={`md:flex md:space-x-8 ${isMenuOpen ? 'flex flex-col absolute top-16 left-0 w-full bg-white shadow-lg py-4 space-y-4' : 'hidden'}`}>
          <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
          <a href="#tech-stack" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Tech Stack</a>
          <a href="#projects" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Projects</a>
          <a href="#certifications" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Certifications</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
        </div>
        <div className="md:hidden flex flex-col cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-700 my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
        </div>
      </div>
    </nav>
  )
}

export default Header
