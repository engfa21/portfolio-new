import Cursor         from './components/Cursor'
import Navbar         from './components/Navbar'
import Hero           from './components/Hero'
import Skills         from './components/Skills'
import Projects       from './components/Projects'
import Contact        from './components/Contact'
import Footer         from './components/Footer'
import useScrollReveal from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()

  return (
    <div className="min-h-screen bg-bg text-light font-body">
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
