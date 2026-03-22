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
  tag?: string
  technologies: string[]
  roleSummary?: string
  contributions?: string[]
  features?: string[]
  spotlights?: string[]
  growth?: string
  githubUrl?: string
  liveUrl?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'PigConnect',
    description:
      'PigConnect is a comprehensive web-based platform designed to connect pig farmers with buyers, providing farm management tools, analytics, and AI-powered recommendations. The system helps optimize pig farming operations while facilitating transparent marketplace transactions.',
    images: [
      '/images/projects/pigconnect/logo.jpg',
      '/images/projects/pigconnect/homepage.jpg',
      '/images/projects/pigconnect/login.jpg',
      '/images/projects/pigconnect/register.jpg',
      '/images/projects/pigconnect/farmer-dashboard.jpg',
      '/images/projects/pigconnect/farm-details.jpg',
      '/images/projects/pigconnect/pig-details.jpg',
      '/images/projects/pigconnect/buyer-dashboard.jpg',
      '/images/projects/pigconnect/chat.jpg',
    ],
    tag: 'Agritech platform',
    technologies: ['Laravel', 'PHP', 'InertiaJS', 'MySQL', 'JavaScript', 'Tailwind-CSS', 'RESTful API', 'FastAPI', 'Google Maps API', 'OpenWeatherAPI'],
    roleSummary: 'Built a farm-to-buyer platform that combines marketplace workflows, analytics, and operational farm tooling in one system.',
    contributions: [
      'Developed marketplace and farm management flows for farmers and buyers.',
      'Integrated analytics and recommendation-driven features to support operational decisions.',
      'Connected mapping, weather, and backend services to enrich the platform experience.',
    ],
    features: [
      'Farmer and buyer dashboards',
      'Pig and farm detail management',
      'Real-time chat workflow',
      'Location-aware farm information',
      'Analytics and recommendations',
    ],
    spotlights: ['Marketplace + operations in one app', 'Integrated external APIs for richer workflows', 'Built for multiple user roles'],
    githubUrl: 'https://github.com/CharlesGratela/pigconnect',
  },
  {
    id: 2,
    title: 'ArtisanHub',
    description:
      'An innovative marketplace platform for artisans and craftspeople to showcase and sell their handmade products. Features include user profiles, product galleries, secure payments, and community features for connecting artisans with customers worldwide.',
    images: [
      '/images/projects/artisanhub/logo.png',
      '/images/projects/artisanhub/homepage.jpg',
      '/images/projects/artisanhub/member-product.jpg',
      '/images/projects/artisanhub/membership.jpg',
      '/images/projects/artisanhub/product-display.jpg',
      '/images/projects/artisanhub/member-chat.jpg',
    ],
    tag: 'Marketplace experience',
    technologies: ['Laravel', 'Javascript', 'HTML5', 'MySQL', 'Stripe', 'Bootstrap'],
    roleSummary: 'Created a marketplace experience for artisans to present products, connect with buyers, and grow community visibility.',
    contributions: [
      'Built storefront and member-facing product experiences.',
      'Implemented community-oriented flows such as chat and membership views.',
      'Supported commerce functionality with payment integration and catalog presentation.',
    ],
    features: ['Marketplace homepage', 'Membership experience', 'Product showcase pages', 'Member chat', 'Online payments'],
    spotlights: ['Commerce and community blended together', 'Showcase-driven product browsing', 'Built around artisan visibility'],
  },
  {
    id: 3,
    title: 'PetAdoptPh',
    description: 'A basic crud project that was created using PHP, MySQL, vanilla JS CRUD app for managing pets (create, read, update, delete).',
    images: [
      '/images/projects/petadoptph/logo.jpg',
      '/images/projects/petadoptph/index.jpg',
      '/images/projects/petadoptph/add-pet.jpg',
      '/images/projects/petadoptph/update-pet.jpg',
    ],
    tag: 'CRUD foundation project',
    technologies: ['PHP', 'JavaScript', 'MySQL', 'HTML5', 'CSS3'],
    roleSummary: 'Built a foundational CRUD application focused on practicing end-to-end data management and basic UI workflows.',
    contributions: [
      'Implemented create, read, update, and delete flows for pet records.',
      'Connected frontend forms to backend database operations.',
      'Structured the app to strengthen core full-stack fundamentals.',
    ],
    features: ['Pet listing', 'Add pet flow', 'Update pet flow', 'Delete pet workflow'],
    spotlights: ['Solid CRUD fundamentals', 'Database-connected forms', 'Practical entry point into full-stack workflows'],
  },
  {
    id: 4,
    title: 'BudgetFlow',
    description:
      'BudgetFlow is a mobile-first full-stack budget tracking application focused on helping users manage transactions, savings, recurring expenses, and financial insights in a single platform.',
    images: [],
    demoVideoUrl: '/videos/budgetflow-demo.mp4',
    demoVideoLabel: 'Product walkthrough',
    tag: 'Finance product',
    technologies: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'shadcn/ui'],
    roleSummary: 'Built BudgetFlow as a mobile-first finance product, shaping both the frontend experience and the backend data flows that power budgeting and analytics.',
    contributions: [
      'Developed the frontend with React and TypeScript for a responsive, app-like budgeting experience.',
      'Integrated Supabase for backend and database workflows across transactions, budgeting, and user settings.',
      'Designed the UI with a mobile-first approach using Tailwind CSS and shadcn/ui.',
      'Handled state and data flows for analytics, savings goals, recurring transactions, and budget tracking.',
      'Implemented personalization features such as user preferences, alerts, and default landing behavior.',
    ],
    features: [
      'Income and expense tracking',
      'Analytics dashboard',
      'Custom categories',
      'Monthly budget goals',
      'Budget rollover',
      'Recurring transactions',
      'Savings goals',
      'User preferences and alert settings',
    ],
    spotlights: ['Mobile-first product thinking', 'Recurring budgets + savings workflows', 'Frontend and backend shaped together'],
    growth:
      'This project strengthened my skills in full-stack development, product thinking, mobile-first design, and building scalable feature flows from database schema to frontend experience.',
  },
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
    if (Math.abs(touchStart - touchEnd) < 10) {
      setSelectedProject(project)
    }
  }

  return (
    <section id="projects" className="section-shell py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <span className="section-kicker">Selected Work</span>
          <h2 className="section-title">Projects That Show How I Build</h2>
          <p className="section-subtitle mt-4">
            A mix of full-stack products, learning projects, and practical builds that highlight how I think through workflows, interfaces, and implementation.
          </p>
        </div>

        <MobileCarousel className="mt-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="surface-card overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={() => handleTouchEnd(project)}
            >
              <div className="relative h-52 cursor-pointer overflow-hidden group" onClick={() => setSelectedProject(project)}>
                {project.demoVideoUrl ? (
                  <video
                    src={project.demoVideoUrl}
                    className="h-full w-full object-cover bg-gray-100 transition-transform duration-300 group-hover:scale-105 dark:bg-gray-600"
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
                    className="h-full w-full object-contain bg-gray-100 transition-transform duration-300 group-hover:scale-105 dark:bg-gray-600"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  {project.demoVideoLabel && (
                    <span className="rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white">
                      {project.demoVideoLabel}
                    </span>
                  )}
                  {project.tag && (
                    <span className="rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                      {project.tag}
                    </span>
                  )}
                </div>

                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-1 text-sm text-slate-200">Tap to explore the project story</p>
                  </div>
                  <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                    {project.demoVideoUrl ? 'View Demo' : 'View Gallery'}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-300">{project.description}</p>
                {project.roleSummary && <p className="mb-5 text-sm leading-relaxed text-gray-500 dark:text-gray-400">{project.roleSummary}</p>}

                {project.spotlights && (
                  <div className="mb-5 grid gap-2 sm:grid-cols-3">
                    {project.spotlights.map((item) => (
                      <div key={item} className="rounded-2xl border border-slate-200/80 bg-slate-50 px-3 py-3 text-sm font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200">
                        {item}
                      </div>
                    ))}
                  </div>
                )}

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-600 dark:text-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="focus-ring rounded-full text-blue-600 font-medium transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="focus-ring rounded-full text-blue-600 font-medium transition-colors hover:text-blue-700">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </MobileCarousel>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-5 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
          <div className="surface-card relative max-h-[90vh] w-full max-w-4xl overflow-y-auto p-8" onClick={(e) => e.stopPropagation()}>
            <button
              className="focus-ring absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-xl text-gray-500 hover:text-gray-700 dark:border-slate-700 dark:bg-slate-900 dark:text-gray-400 dark:hover:text-gray-200"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project modal"
            >
              &times;
            </button>
            <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">{selectedProject.title}</h3>
            <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">{selectedProject.description}</p>
            {selectedProject.roleSummary && (
              <div className="mb-6 rounded-2xl bg-gray-50 p-4 dark:bg-gray-700/60">
                <h4 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-100">My Role</h4>
                <p className="leading-relaxed text-gray-600 dark:text-gray-300">{selectedProject.roleSummary}</p>
              </div>
            )}
            {selectedProject.demoVideoUrl && (
              <div className="mb-6 overflow-hidden rounded-2xl bg-gray-950 shadow-lg">
                <video src={selectedProject.demoVideoUrl} className="w-full max-h-[700px] bg-black" controls playsInline preload="metadata">
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
            {selectedProject.images.length > 0 && <ImageCarousel images={selectedProject.images} projectName={selectedProject.title} />}
            {selectedProject.contributions && selectedProject.contributions.length > 0 && (
              <div className="mt-6">
                <h4 className="mb-3 text-lg font-semibold text-gray-800 dark:text-gray-100">What I Worked On</h4>
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
                <h4 className="mb-3 text-lg font-semibold text-gray-800 dark:text-gray-100">Key Features</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.features.map((feature, index) => (
                    <span key={index} className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-200">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {selectedProject.growth && (
              <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50/70 p-4 dark:border-blue-900/50 dark:bg-blue-950/20">
                <h4 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-100">What This Strengthened</h4>
                <p className="leading-relaxed text-gray-600 dark:text-gray-300">{selectedProject.growth}</p>
              </div>
            )}
            <div className="mt-6 flex flex-wrap gap-2">
              {selectedProject.technologies.map((tech, index) => (
                <span key={index} className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
