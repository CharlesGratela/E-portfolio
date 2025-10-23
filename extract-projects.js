// Script to help extract project information from PDF
// This is a helper script to organize your project data

const projectTemplates = {
  "Laravel E-Commerce System": {
    description: "A comprehensive e-commerce platform built with Laravel featuring user authentication, product management, shopping cart, and payment integration. Includes admin dashboard for order management and inventory control.",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript", "Stripe"],
    features: [
      "User Authentication & Authorization",
      "Product Catalog Management", 
      "Shopping Cart & Checkout",
      "Payment Gateway Integration",
      "Admin Dashboard",
      "Order Management System",
      "Inventory Tracking",
      "Responsive Design"
    ],
    images: [
      "homepage.png",
      "product-catalog.png", 
      "shopping-cart.png",
      "admin-dashboard.png",
      "mobile-view.png"
    ]
  },
  "React Task Management App": {
    description: "A modern task management application built with React featuring drag-and-drop functionality, real-time updates, and team collaboration. Includes user authentication and project organization.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
    features: [
      "Drag & Drop Task Management",
      "Real-time Collaboration",
      "Project Organization",
      "User Authentication",
      "Team Management",
      "Task Filtering & Search",
      "Progress Tracking",
      "Mobile Responsive"
    ],
    images: [
      "dashboard.png",
      "project-board.png",
      "team-collaboration.png",
      "mobile-view.png"
    ]
  },
  "Python Web Scraping Tool": {
    description: "A comprehensive web scraping application using Python with Selenium and BeautifulSoup. Features data extraction, processing, and export capabilities with support for various websites.",
    technologies: ["Python", "Selenium", "BeautifulSoup", "Pandas", "Flask", "Requests"],
    features: [
      "Multi-site Web Scraping",
      "Data Extraction & Processing",
      "Export to CSV/JSON",
      "Scheduled Scraping",
      "Proxy Support",
      "Data Validation",
      "Error Handling",
      "Web Interface"
    ],
    images: [
      "scraping-interface.png",
      "data-extraction.png",
      "export-results.png",
      "scheduled-tasks.png"
    ]
  },
  "Vue.js Portfolio Website": {
    description: "A responsive portfolio website built with Vue.js featuring modern design, smooth animations, and interactive components. Includes contact forms and project showcases.",
    technologies: ["Vue.js", "JavaScript", "CSS3", "Tailwind CSS", "Node.js", "Vue Router"],
    features: [
      "Modern Responsive Design",
      "Smooth Animations",
      "Interactive Components",
      "Contact Form",
      "Project Showcase",
      "Blog Integration",
      "SEO Optimized",
      "Fast Loading"
    ],
    images: [
      "homepage.png",
      "projects-showcase.png",
      "contact-form.png",
      "mobile-responsive.png"
    ]
  },
  "Django REST API": {
    description: "A robust RESTful API built with Django featuring user authentication, data serialization, and comprehensive CRUD operations. Includes API documentation and testing.",
    technologies: ["Django", "Python", "PostgreSQL", "Django REST Framework", "JWT", "Swagger"],
    features: [
      "RESTful API Endpoints",
      "User Authentication",
      "Data Serialization",
      "CRUD Operations",
      "API Documentation",
      "Testing Suite",
      "Rate Limiting",
      "Data Validation"
    ],
    images: [
      "api-documentation.png",
      "endpoints-overview.png",
      "testing-interface.png",
      "authentication-flow.png"
    ]
  },
  "Express.js Blog Platform": {
    description: "A full-featured blog platform built with Express.js and MongoDB. Features user registration, article management, comments system, and admin panel for content moderation.",
    technologies: ["Express.js", "Node.js", "MongoDB", "EJS", "Passport.js", "Multer"],
    features: [
      "User Registration & Login",
      "Article Management",
      "Comments System",
      "Admin Panel",
      "Content Moderation",
      "Search Functionality",
      "Categories & Tags",
      "Responsive Design"
    ],
    images: [
      "blog-homepage.png",
      "article-management.png",
      "comments-system.png",
      "admin-panel.png"
    ]
  }
};

// Export for use in your portfolio
console.log("Project Templates Created!");
console.log("Use these templates to update your Projects.tsx file with real project data.");

module.exports = projectTemplates;
