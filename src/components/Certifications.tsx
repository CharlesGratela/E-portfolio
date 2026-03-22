import { useState } from 'react'
import MobileCarousel from './MobileCarousel'
import { certifications } from '../data/certifications'
import { useModalBehavior } from '../hooks/useModalBehavior'

function Certifications() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null)
  useModalBehavior(selectedCert !== null, () => setSelectedCert(null))

  return (
    <section id="certifications" className="section-shell py-24">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center">
          <span className="section-kicker">Credentials</span>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle mt-4">
            Professional certifications and achievements that validate my skills and expertise.
          </p>
        </div>

        <MobileCarousel className="mt-12">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="surface-card overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              onClick={() => setSelectedCert(index)}
            >
              <div className="relative h-64 bg-gray-200 dark:bg-gray-600 overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute left-4 top-4 rounded-full bg-slate-950/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                  {cert.issuer}
                </div>
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <div className="surface-card relative max-w-4xl w-full overflow-hidden" role="dialog" aria-modal="true" aria-labelledby="certification-modal-title">
              <button 
                onClick={() => setSelectedCert(null)}
                className="focus-ring absolute right-4 top-4 z-10 rounded-full bg-white p-2 shadow-lg hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
                aria-label="Close certification modal"
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
                <h3 id="certification-modal-title" className="text-2xl font-bold mb-2 dark:text-gray-100">{certifications[selectedCert].title}</h3>
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
