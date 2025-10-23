import { useState } from 'react'
import ImageCarousel from './ImageCarousel'

interface Project {
  id: number
  title: string
  description: string
  images: string[]
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "PigConnect",
    description: "PigConnect is a comprehensive web-based platform designed to connect pig farmers with buyers, providing farm management tools, analytics, and AI-powered recommendations. The system helps optimize pig farming operations while facilitating transparent marketplace transactions.",
    images: [
      "/images/projects/pigconnect/logo.jpg",
      "/images/projects/pigconnect/homepage.jpg",
      "/images/projects/pigconnect/login.jpg",
      "/images/projects/pigconnect/register.jpg",
      "/images/projects/pigconnect/farmer-dashboard.jpg",
      "/images/projects/pigconnect/farm-details.jpg",
      "/images/projects/pigconnect/pig-details.jpg",
      "/images/projects/pigconnect/buyer-dashboard.jpg",
      "/images/projects/pigconnect/chat.jpg",

    ],
    technologies: ["Laravel", "PHP", "InertiaJS", "MySQL", "JavaScript", "Tailwind-CSS", "RESTful API", "FastAPI", "Google Maps API", "OpenWeatherAPI"],
    githubUrl: "https://github.com/CharlesGratela/pigconnect",
  },
  {
    id: 2,
    title: "ArtisanHub",
    description: "An innovative marketplace platform for artisans and craftspeople to showcase and sell their handmade products. Features include user profiles, product galleries, secure payments, and community features for connecting artisans with customers worldwide.",
    images: [
      "/images/projects/artisanhub/logo.png",
      "/images/projects/artisanhub/homepage.jpg",
      "/images/projects/artisanhub/member-product.jpg",
      "/images/projects/artisanhub/membership.jpg",
      "/images/projects/artisanhub/product-display.jpg",
      "/images/projects/artisanhub/member-chat.jpg",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/artisanhub",
    liveUrl: "https://artisanhub-demo.com"
  }
]

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of my recent projects that showcase my skills and experience.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden group">
                <img 
                  src={project.images[0]} 
                  alt={project.title}
                  className="w-full h-full object-contain bg-gray-100 transition-transform duration-300 group-hover:scale-110"
                  onClick={() => setSelectedProject(project)}
                />
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Gallery
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-5" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 text-3xl text-gray-500 hover:text-gray-700 transition-colors"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">{selectedProject.title}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">{selectedProject.description}</p>
            <ImageCarousel 
              images={selectedProject.images} 
              projectName={selectedProject.title}
            />
            <div className="flex flex-wrap gap-2 mt-6">
              {selectedProject.technologies.map((tech, index) => (
                <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
