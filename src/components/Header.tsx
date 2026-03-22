import { useEffect, useState } from 'react'
import { useTheme } from '../contexts/useTheme'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'tech-stack', label: 'Tech Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.2, 0.45, 0.7],
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (id: string) => {
    setActiveSection(id)
    setIsMenuOpen(false)
  }

  const renderThemeIcon = () =>
    theme === 'light' ? (
      <svg className="h-5 w-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ) : (
      <svg className="h-5 w-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/60 bg-white/75 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/70">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
        <a href="#home" onClick={() => handleNavClick('home')} className="focus-ring flex items-center gap-3 rounded-full">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white shadow-lg shadow-slate-950/20 dark:bg-sky-500 dark:text-slate-950">
            CG
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-semibold uppercase tracking-[0.28em] text-sky-700 dark:text-sky-300">Portfolio</span>
            <span className="block text-sm text-slate-500 dark:text-slate-400">Charles Gratela</span>
          </span>
        </a>

        <div className="hidden items-center gap-2 rounded-full border border-white/60 bg-white/80 p-2 shadow-lg shadow-slate-900/5 backdrop-blur md:flex dark:border-slate-800/80 dark:bg-slate-900/85">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`nav-link ${activeSection === item.id ? 'nav-link-active' : ''}`}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="focus-ring ml-2 rounded-full border border-slate-200 bg-white p-3 hover:-translate-y-0.5 hover:border-sky-200 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-sky-800 dark:hover:text-sky-300"
            aria-label="Toggle theme"
          >
            {renderThemeIcon()}
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="focus-ring rounded-full border border-slate-200 bg-white p-3 hover:-translate-y-0.5 dark:border-slate-700 dark:bg-slate-900"
            aria-label="Toggle theme"
          >
            {renderThemeIcon()}
          </button>
          <button
            type="button"
            className="focus-ring flex h-12 w-12 flex-col items-center justify-center rounded-full border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation menu"
          >
            <span className={`h-0.5 w-5 bg-slate-700 transition-all dark:bg-slate-200 ${isMenuOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
            <span className={`my-1 h-0.5 w-5 bg-slate-700 transition-all dark:bg-slate-200 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-5 bg-slate-700 transition-all dark:bg-slate-200 ${isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div id="mobile-navigation" className="border-t border-white/60 bg-white/90 px-5 pb-5 pt-3 shadow-xl shadow-slate-900/10 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/95 md:hidden">
          <div className="surface-card flex flex-col gap-2 p-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`nav-link text-base ${activeSection === item.id ? 'nav-link-active' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Header
