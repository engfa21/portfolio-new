import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = ['About', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [active,   setActive]     = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight nav link based on scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { threshold: 0.5 }
    )
    links.forEach(l => {
      const el = document.getElementById(l.toLowerCase())
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
      ${scrolled ? 'bg-bg/95 backdrop-blur-xl border-b border-white/[0.06] py-3' : 'py-5'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">

        {/* Logo */}
        <button onClick={() => scrollTo('hero')}
          className="font-head font-bold text-[1.2rem] tracking-tight group">
          <span className="text-accent">A</span>
          <span className="text-light">H</span>
          <span className="inline-block w-[6px] h-[6px] rounded-full bg-accent2 ml-1 mb-1 group-hover:scale-150 transition-transform duration-300" />
        </button>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l.toLowerCase())}
              className={`text-[0.85rem] font-medium tracking-wide transition-all duration-200 relative group
                ${active === l.toLowerCase() ? 'text-accent' : 'text-muted hover:text-light'}`}>
              {l}
              <span className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300
                ${active === l.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a href="https://mail.google.com/mail/?view=cm&to=mariamapp00@gmail.com"
           className="hidden md:inline-flex items-center gap-2 border border-accent/30 text-accent
                      text-[0.82rem] font-medium px-4 py-[0.4rem] rounded-full
                      hover:bg-accent hover:text-bg transition-all duration-300">
          Hire me
        </a>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl
                     border border-white/[0.08] text-muted hover:text-white transition-colors">
          {menuOpen ? <X size={17} /> : <Menu size={17} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-400
        ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="border-t border-white/[0.06] bg-bg/98 px-5 py-4 flex flex-col gap-1">
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l.toLowerCase())}
              className={`text-left py-3 px-4 rounded-xl text-[0.92rem] font-medium transition-all duration-200
                ${active === l.toLowerCase()
                  ? 'bg-accent/10 text-accent'
                  : 'text-muted hover:text-white hover:bg-white/[0.04]'}`}>
              {l}
            </button>
          ))}
          <a href="https://mail.google.com/mail/?view=cm&to=mariamapp00@gmail.com"
             className="mt-2 text-center py-3 border border-accent/30 text-accent rounded-xl text-[0.88rem] font-medium hover:bg-accent hover:text-bg transition-all duration-300">
            Hire me
          </a>
        </div>
      </div>
    </header>
  )
}
