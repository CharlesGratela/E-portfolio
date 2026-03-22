import Header from './components/Header'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <Hero />
      <TechStack />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  )
}

export default App
