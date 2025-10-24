import { useState } from 'react'
import MobileCarousel from './MobileCarousel'

function Certifications() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null)

  const certifications = [
    {
      title: "Data Engineer",
      issuer: "Datacamp",
      date: "June 26, 2025",
      image: "/images/certifications/data-engineer.jpg",
      description: "Data engineering certification covering data pipelines, ETL processes, and database management."
    },
    {
      title: "Data Visualisation: Empowering Business with Effective Insights",
      issuer: "Forage",
      date: "March 18, 2025",
      image: "/images/certifications/tata-certificate.jpg",
      description: "Data visualisation certification focusing on transforming data into actionable insights for business decision-making."
    },
    // Add more certifications here
  ]

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">
          Professional certifications and achievements that validate my skills and expertise.
        </p>

        <MobileCarousel className="mt-12">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedCert(index)}
            >
              <div className="relative h-64 bg-gray-200 dark:bg-gray-600 overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{cert.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{cert.issuer}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</p>
              </div>
            </div>
          ))}
        </MobileCarousel>

        {/* Modal for viewing certificate */}
        {selectedCert !== null && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <div className="relative max-w-4xl w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 bg-white dark:bg-gray-700 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors z-10"
              >
                <svg className="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img 
                src={certifications[selectedCert].image} 
                alt={certifications[selectedCert].title}
                className="w-full h-auto"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="p-6 bg-white dark:bg-gray-800">
                <h3 className="text-2xl font-bold mb-2 dark:text-gray-100">{certifications[selectedCert].title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{certifications[selectedCert].issuer}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{certifications[selectedCert].date}</p>
                <p className="text-gray-700 dark:text-gray-300">{certifications[selectedCert].description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Certifications
