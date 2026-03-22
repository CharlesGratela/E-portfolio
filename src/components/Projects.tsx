import { useState } from 'react'
import ImageCarousel from './ImageCarousel'
import MobileCarousel from './MobileCarousel'

interface Project {
  id: number
  title: string
  description: string
  images: string[]
  demoVideoUrl?: string
  demoVideoLabel?: string
  technologies: string[]
  roleSummary?: string
  contributions?: string[]
  features?: string[]
  growth?: string
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
    roleSummary: "Built a farm-to-buyer platform that combines marketplace workflows, analytics, and operational farm tooling in one system.",
    contributions: [
      "Developed marketplace and farm management flows for farmers and buyers.",
      "Integrated analytics and recommendation-driven features to support operational decisions.",
      "Connected mapping, weather, and backend services to enrich the platform experience.",
    ],
    features: [
      "Farmer and buyer dashboards",
      "Pig and farm detail management",
      "Real-time chat workflow",
      "Location-aware farm information",
      "Analytics and recommendations",
    ],
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
    technologies: ["Laravel", "Javascript", "HTML5", "MySQL", "Stripe", "Bootstrap"],
    roleSummary: "Created a marketplace experience for artisans to present products, connect with buyers, and grow community visibility.",
    contributions: [
      "Built storefront and member-facing product experiences.",
      "Implemented community-oriented flows such as chat and membership views.",
      "Supported commerce functionality with payment integration and catalog presentation.",
    ],
    features: [
      "Marketplace homepage",
      "Membership experience",
      "Product showcase pages",
      "Member chat",
      "Online payments",
    ],
  },
  {
    id: 3,
    title: "PetAdoptPh",
    description: "A basic crud project that was created using PHP, MySQL, vanilla JS CRUD app for managing pets (create, read, update, delete).",
    images: [
      "/images/projects/petadoptph/logo.jpg",
      "/images/projects/petadoptph/index.jpg",
      "/images/projects/petadoptph/add-pet.jpg",
      "/images/projects/petadoptph/update-pet.jpg",

    ],
    technologies: ["PHP", "JavaScript", "MySQL", "HTML5", "CSS3"],
    roleSummary: "Built a foundational CRUD application focused on practicing end-to-end data management and basic UI workflows.",
    contributions: [
      "Implemented create, read, update, and delete flows for pet records.",
      "Connected frontend forms to backend database operations.",
      "Structured the app to strengthen core full-stack fundamentals.",
    ],
    features: [
      "Pet listing",
      "Add pet flow",
      "Update pet flow",
      "Delete pet workflow",
    ],
  },
  {
    id: 4,
    title: "BudgetFlow",
    description: "BudgetFlow is a mobile-first full-stack budget tracking application focused on helping users manage transactions, savings, recurring expenses, and financial insights in a single platform.",
    images: [],
    demoVideoUrl: "/videos/budgetflow-demo.mp4",
    demoVideoLabel: "Product walkthrough",
    technologies: ["React", "TypeScript", "Supabase", "Tailwind CSS", "shadcn/ui"],
    roleSummary: "Built BudgetFlow as a mobile-first finance product, shaping both the frontend experience and the backend data flows that power budgeting and analytics.",
    contributions: [
      "Developed the frontend with React and TypeScript for a responsive, app-like budgeting experience.",
      "Integrated Supabase for backend and database workflows across transactions, budgeting, and user settings.",
      "Designed the UI with a mobile-first approach using Tailwind CSS and shadcn/ui.",
      "Handled state and data flows for analytics, savings goals, recurring transactions, and budget tracking.",
      "Implemented personalization features such as user preferences, alerts, and default landing behavior.",
    ],
    features: [
      "Income and expense tracking",
      "Analytics dashboard",
      "Custom categories",
      "Monthly budget goals",
      "Budget rollover",
      "Recurring transactions",
      "Savings goals",
      "User preferences and alert settings",
    ],
    growth: "This project strengthened my skills in full-stack development, product thinking, mobile-first design, and building scalable feature flows from database schema to frontend experience.",
  }
]

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = (project: Project) => {
    // Only open modal if it's a tap (not a swipe)
    if (Math.abs(touchStart - touchEnd) < 10) {
      setSelectedProject(project)
    }
  }

  const handleClick = (project: Project) => {
    setSelectedProject(project)
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of my recent projects that showcase my skills and experience.
        </p>
        
        <MobileCarousel className="mt-12">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={() => handleTouchEnd(project)}
            >
              <div 
                className="relative h-48 overflow-hidden group cursor-pointer"
                onClick={() => handleClick(project)}
              >
                {project.demoVideoUrl ? (
                  <video
                    src={project.demoVideoUrl}
                    className="w-full h-full object-cover bg-gray-100 dark:bg-gray-600 transition-transform duration-300 group-hover:scale-110"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label={`${project.title} demo preview`}
                  />
                ) : (
                  <img 
                    src={project.images[0]} 
                    alt={project.title}
                    className="w-full h-full object-contain bg-gray-100 dark:bg-gray-600 transition-transform duration-300 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                  >
                    {project.demoVideoUrl ? 'View Demo' : 'View Gallery'}
                  </button>
                </div>
                {project.demoVideoLabel && (
                  <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white">
                    {project.demoVideoLabel}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                {project.roleSummary && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                    {project.roleSummary}
                  </p>
                )}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors">
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
        </MobileCarousel>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-5" onClick={() => setSelectedProject(null)}>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 text-3xl text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">{selectedProject.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{selectedProject.description}</p>
            {selectedProject.roleSummary && (
              <div className="mb-6 rounded-lg bg-gray-50 dark:bg-gray-700/60 p-4">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">My Role</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{selectedProject.roleSummary}</p>
              </div>
            )}
            {selectedProject.demoVideoUrl && (
              <div className="mb-6 overflow-hidden rounded-xl bg-gray-950 shadow-lg">
                <video
                  src={selectedProject.demoVideoUrl}
                  className="w-full max-h-[700px] bg-black"
                  controls
                  playsInline
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
            {selectedProject.images.length > 0 && (
              <ImageCarousel 
                images={selectedProject.images} 
                projectName={selectedProject.title}
              />
            )}
            {selectedProject.contributions && selectedProject.contributions.length > 0 && (
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">What I Worked On</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  {selectedProject.contributions.map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {selectedProject.features && selectedProject.features.length > 0 && (
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">Key Features</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.features.map((feature, index) => (
                    <span key={index} className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {selectedProject.growth && (
              <div className="mt-6 rounded-lg border border-blue-100 dark:border-blue-900/50 bg-blue-50/70 dark:bg-blue-950/20 p-4">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">What This Strengthened</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{selectedProject.growth}</p>
              </div>
            )}
            <div className="flex flex-wrap gap-2 mt-6">
              {selectedProject.technologies.map((tech, index) => (
                <span key={index} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
