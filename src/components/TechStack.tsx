import { 
  SiLaravel, 
  SiExpress, 
  SiNodedotjs, 
  SiReact, 
  SiVuedotjs, 
  SiHtml5, 
  SiCss3, 
  SiBootstrap, 
  SiTailwindcss,
  SiPhp,
  SiPython,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiJson,
  SiSelenium
} from 'react-icons/si'
import { FaCode, FaSpider, FaServer, FaJava } from 'react-icons/fa'

function TechStack() {
  const techCategories = [
    {
      title: "Backend Development",
      skills: [
        { name: "Laravel", level: "Proficient", icon: SiLaravel, color: "#FF2D20" },
        { name: "Express.js", level: "Working Knowledge", icon: SiExpress, color: "#000000" },
        { name: "Node.js", level: "Working Knowledge", icon: SiNodedotjs, color: "#339933" },
        { name: "RESTful APIs", level: "Experienced", icon: FaServer, color: "#0078D4" }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: "Knowledge", icon: SiReact, color: "#61DAFB" },
        { name: "Vue.js", level: "Knowledge", icon: SiVuedotjs, color: "#4FC08D" },
        { name: "HTML", level: "Skilled", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS", level: "Skilled", icon: SiCss3, color: "#1572B6" },
        { name: "Bootstrap", level: "Skilled", icon: SiBootstrap, color: "#7952B3" },
        { name: "Tailwind CSS", level: "Skilled", icon: SiTailwindcss, color: "#06B6D4" }
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: "Knowledge", icon: FaJava, color: "#007396" },
        { name: "PHP", level: "Knowledge", icon: SiPhp, color: "#777BB4" },
        { name: "Python", level: "Knowledge", icon: SiPython, color: "#3776AB" }
      ]
    },
    {
      title: "Database Management",
      skills: [
        { name: "MySQL", level: "Proficient", icon: SiMysql, color: "#4479A1" },
        { name: "MongoDB", level: "Proficient", icon: SiMongodb, color: "#47A248" },
        { name: "PostgreSQL", level: "Proficient", icon: SiPostgresql, color: "#4169E1" },
        { name: "JSON", level: "Proficient", icon: SiJson, color: "#000000" }
      ]
    },
    {
      title: "Web Scraping & Tools",
      skills: [
        { name: "Selenium", level: "Knowledge", icon: SiSelenium, color: "#43B02A" },
        { name: "BeautifulSoup", level: "Knowledge", icon: FaSpider, color: "#FF6B6B" },
        { name: "Scrapy", level: "Knowledge", icon: FaSpider, color: "#60A839" },
        { name: "Undetected-Chromedriver", level: "Knowledge", icon: FaCode, color: "#4285F4" },
        { name: "Requests", level: "Knowledge", icon: FaCode, color: "#2C8EBB" }
      ]
    }
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Proficient":
        return "bg-green-100 text-green-800 border-green-200"
      case "Experienced":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Working Knowledge":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Skilled":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "Knowledge":
        return "bg-gray-100 text-gray-800 border-gray-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <section id="tech-stack" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="section-title">Tech Stack</h2>
        <p className="section-subtitle">
          Here are the technologies and tools I work with, organized by category.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {techCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b border-gray-200 pb-2">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon
                  return (
                    <div key={skillIndex} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Icon className="text-2xl flex-shrink-0" style={{ color: skill.color }} />
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Additional Capabilities</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">System Analysis</h4>
                  <p className="text-gray-600 text-sm">Capable of interpreting complex systems and debugging efficiently</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Quick Learning</h4>
                  <p className="text-gray-600 text-sm">Capable of quickly learning and adapting to new technologies</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Collaboration</h4>
                  <p className="text-gray-600 text-sm">Capable of collaborating and providing insights on system implementation</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Responsive Design</h4>
                  <p className="text-gray-600 text-sm">Skilled in creating responsive and modern web designs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack
