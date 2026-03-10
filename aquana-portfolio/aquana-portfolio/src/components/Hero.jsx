import { useEffect, useRef } from 'react'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

const roles = ['Web Developer', 'React Developer', 'UI Designer', 'Frontend Engineer']

export default function Hero() {
  const roleRef = useRef(null)

  // Typewriter effect cycling through roles
  useEffect(() => {
    let roleIdx = 0, charIdx = 0, deleting = false
    const el = roleRef.current
    if (!el) return

    const type = () => {
      const current = roles[roleIdx]
      if (!deleting) {
        el.textContent = current.slice(0, charIdx + 1)
        charIdx++
        if (charIdx === current.length) {
          deleting = true
          setTimeout(type, 1800)
          return
        }
      } else {
        el.textContent = current.slice(0, charIdx - 1)
        charIdx--
        if (charIdx === 0) {
          deleting = false
          roleIdx = (roleIdx + 1) % roles.length
        }
      }
      setTimeout(type, deleting ? 55 : 90)
    }
    const t = setTimeout(type, 600)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center
                                   text-center px-5 sm:px-8 pt-24 overflow-hidden">

      {/* Background orbs */}
      <div className="absolute w-[600px] h-[600px] rounded-full pointer-events-none
                      bg-[radial-gradient(circle,rgba(167,139,250,0.08)_0%,transparent_70%)]
                      -top-32 -left-32" />
      <div className="absolute w-[500px] h-[500px] rounded-full pointer-events-none
                      bg-[radial-gradient(circle,rgba(244,114,182,0.06)_0%,transparent_70%)]
                      bottom-0 right-0" />

      {/* Rotating badge */}
      <div className="float mb-10 relative w-28 h-28">
        <div className="absolute inset-0 rounded-full border border-accent/20 animate-spin-slow" />
        <div className="absolute inset-[6px] rounded-full bg-surface border border-white/[0.07]
                        flex items-center justify-center">
          <span className="font-head font-bold text-[2rem] text-accent">AH</span>
        </div>
        {/* Orbiting dot */}
        <div className="absolute inset-0 animate-spin-slow">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2
                          w-3 h-3 rounded-full bg-accent2 shadow-[0_0_10px_rgba(244,114,182,0.8)]" />
        </div>
      </div>

      {/* Tag */}
      <div className="reveal inline-flex items-center gap-2 bg-accent/[0.07] border border-accent/20
                      text-accent text-[0.75rem] font-medium tracking-widest uppercase
                      px-4 py-[0.35rem] rounded-full mb-6">
        <span className="w-[5px] h-[5px] rounded-full bg-accent2 animate-pulse" />
        Available for freelance work
      </div>

      {/* Name */}
      <h1 className="reveal stagger-1 font-head font-bold leading-tight tracking-tight
                     text-[3rem] sm:text-[4.5rem] lg:text-[6rem] mb-4">
        Aquana<br/>
        <span className="italic text-transparent bg-clip-text
                         bg-gradient-to-r from-accent via-accent2 to-accent">
          Harper
        </span>
      </h1>

      {/* Typewriter role */}
      <div className="reveal stagger-2 flex items-center gap-2 mb-5 h-8">
        <span className="text-muted text-[1rem] sm:text-[1.1rem] font-light">—</span>
        <span ref={roleRef}
              className="text-light text-[1rem] sm:text-[1.1rem] font-medium font-mono" />
        <span className="w-[2px] h-5 bg-accent animate-pulse" />
      </div>

      {/* Bio */}
      <p className="reveal stagger-3 text-muted font-light text-[0.95rem] sm:text-[1.05rem]
                    max-w-[520px] leading-relaxed mb-10">
        I build custom websites that are fast, responsive, and actually enjoyable to use.
        Based in Grenada — working with clients worldwide.
      </p>

      {/* CTAs */}
      <div className="reveal stagger-4 flex flex-col sm:flex-row items-center gap-4 mb-14 w-full max-w-xs sm:max-w-none">
        <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full sm:w-auto bg-accent text-bg font-medium text-[0.95rem]
                     px-8 py-[0.85rem] rounded-full
                     hover:shadow-[0_0_30px_rgba(167,139,250,0.4)] hover:scale-105
                     transition-all duration-300">
          View my work
        </button>
        <a href="https://mail.google.com/mail/?view=cm&to=mariamapp00@gmail.com"
           className="w-full sm:w-auto text-center border border-white/[0.1] text-light
                      text-[0.95rem] px-8 py-[0.85rem] rounded-full font-light
                      hover:border-accent/40 hover:bg-accent/[0.05] transition-all duration-300">
          Get in touch
        </a>
      </div>

      {/* Social links */}
      <div className="reveal stagger-5 flex items-center gap-4">
        <a href="https://github.com/engfa21" target="_blank" rel="noreferrer"
           className="w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center
                      text-muted hover:text-white hover:border-accent/40 hover:bg-accent/[0.08]
                      transition-all duration-300">
          <Github size={16} />
        </a>
        <a href="https://www.linkedin.com/in/maria-mapp-6b573022a" target="_blank" rel="noreferrer"
           className="w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center
                      text-muted hover:text-white hover:border-accent/40 hover:bg-accent/[0.08]
                      transition-all duration-300">
          <Linkedin size={16} />
        </a>
        <a href="https://mail.google.com/mail/?view=cm&to=mariamapp00@gmail.com"
           className="w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center
                      text-muted hover:text-white hover:border-accent/40 hover:bg-accent/[0.08]
                      transition-all duration-300">
          <Mail size={16} />
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted">
        <span className="text-[0.7rem] tracking-[0.15em] uppercase">Scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </div>
    </section>
  )
}
