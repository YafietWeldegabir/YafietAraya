import { useTheme } from './useTheme.js'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <div className="wrap">
        <Hero theme={theme} />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Footer theme={theme} />
      </div>
    </>
  )
}
