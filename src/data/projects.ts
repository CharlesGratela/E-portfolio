export interface Project {
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

export const projects: Project[] = [
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
