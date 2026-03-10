import { Mail, Github, Linkedin, MapPin, ArrowUpRight } from 'lucide-react'

const socials = [
  { icon: Github,   label: 'GitHub',   href: 'https://github.com/engfa21',                        handle: '@engfa21' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/maria-mapp-6b573022a',  handle: 'Aquana Harper' },
  { icon: Mail,     label: 'Email',    href: 'https://mail.google.com/mail/?view=cm&to=mariamapp00@gmail.com',                        handle: 'mariamapp00@gmail.com' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 px-5 sm:px-8 relative overflow-hidden">

      {/* BG glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full pointer-events-none
                      bg-[radial-gradient(circle,rgba(167,139,250,0.07)_0%,transparent_70%)]
                      top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-16">
          <p className="text-accent font-mono text-[0.78rem] tracking-[0.15em] uppercase mb-3">Get in touch</p>
          <h2 className="font-head font-bold text-[2rem] sm:text-[3.5rem] tracking-tight leading-tight mb-4">
            Let's build something<br/>
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent2">
              together.
            </span>
          </h2>
          <p className="text-muted font-light text-[0.95rem] sm:text-[1.05rem] max-w-[440px] mx-auto leading-relaxed">
            Whether you need a website built from scratch, a redesign, or just want to talk through an idea — I'd love to hear from you.
          </p>
        </div>

        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {socials.map(({ icon: Icon, label, href, handle }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer"
               className="group flex flex-col items-center gap-3 bg-surface border border-white/[0.07]
                          rounded-2xl p-6 text-center
                          hover:border-accent/30 hover:bg-accent/[0.04]
                          transition-all duration-300 hover:-translate-y-1">
              <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.07]
                              flex items-center justify-center text-muted
                              group-hover:bg-accent/10 group-hover:border-accent/20 group-hover:text-accent
                              transition-all duration-300">
                <Icon size={18} />
              </div>
              <div>
                <p className="text-[0.85rem] font-medium mb-0.5">{label}</p>
                <p className="text-muted text-[0.75rem] font-light">{handle}</p>
              </div>
              <ArrowUpRight size={13} className="text-muted group-hover:text-accent transition-colors duration-300" />
            </a>
          ))}
        </div>

        {/* Location note */}
        <div className="reveal flex items-center justify-center gap-2 mt-10 text-muted text-[0.82rem] font-light">
          <MapPin size={13} />
          Based in Grenada · Available for remote projects worldwide
        </div>
      </div>
    </section>
  )
}
