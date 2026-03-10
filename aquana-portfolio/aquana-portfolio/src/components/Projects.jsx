import { useState } from 'react'
import { X, ExternalLink, Github, ChevronRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'One Stop Cafe',
    tag: 'Client Project',
    tagColor: 'text-[#FBBF24] bg-[#FBBF24]/10 border-[#FBBF24]/20',
    status: 'In Progress',
    stack: ['Custom Build', 'Responsive', 'HTML5', 'CSS3', 'JavaScript'],
    summary: 'A custom cafe website built mobile-first, with separate navigation systems for mobile and desktop.',
    color: '#FBBF24',
    challenge: `The client's customers were almost entirely on mobile devices, so the brief flipped the usual approach — mobile wasn't an afterthought, it was the primary screen. This meant designing two completely separate navigation experiences: a thumb-friendly bottom nav bar for mobile users and a traditional top nav for desktop.`,
    solution: `I built the mobile nav first using a fixed bottom bar with icon labels — the kind of pattern mobile users already know from apps. The desktop nav was built separately as a standard horizontal header. Using CSS media queries, only one renders at a time. This wasn't just a visual change — the entire layout hierarchy was restructured around mobile touch targets.`,
    learning: `This project taught me that "responsive design" doesn't always mean one layout that adapts — sometimes the right call is two distinct UIs that serve different contexts. It also pushed my understanding of touch interaction design significantly.`,
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: 2,
    title: 'KG9 Livestream',
    tag: 'Client Project',
    tagColor: 'text-[#A78BFA] bg-[#A78BFA]/10 border-[#A78BFA]/20',
    status: 'Live',
    stack: ['YouTube API', 'JavaScript', 'HTML5', 'CSS3', 'Admin Panel'],
    summary: 'A livestreaming platform with embedded YouTube video, live chat, payment integration, and a secure admin panel.',
    color: '#A78BFA',
    challenge: `The client ran regular YouTube livestreams and needed a branded platform where viewers could watch and pay for access. The first version had the YouTube video ID hardcoded directly in the source code — meaning every time a new stream started, I had to manually edit the code and redeploy. That wasn't sustainable.`,
    solution: `I built a secure admin panel that only the client could access. From there, he could paste a new YouTube video ID before each stream — no code editing, no developer needed. The viewer-facing page reads the current ID and renders the embed automatically. I also integrated payment processing so viewers had to pay before the video loaded, keeping the stream protected.`,
    learning: `This project was my first real lesson in separating content management from code. It introduced me to the concept of admin vs. user roles, protected routes, and why storing dynamic content in a database (or even a simple config) is always better than hardcoding it. The payment integration was also my first time working with a third-party payments API.`,
    liveUrl: null,
    githubUrl: 'https://github.com/engfa21',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    tag: 'Personal',
    tagColor: 'text-[#F472B6] bg-[#F472B6]/10 border-[#F472B6]/20',
    status: 'Live',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Netlify'],
    summary: 'My personal portfolio showcasing projects and skills, built and deployed on Netlify.',
    color: '#F472B6',
    challenge: `Building something that represents your own work is surprisingly harder than client projects — you're the client, the designer, and the developer all at once, and it's easy to either overthink it or never feel done.`,
    solution: `I kept the scope tight: clean layout, clear project descriptions, and a working contact form. Deployed to Netlify with continuous deployment from GitHub so updates go live automatically on every push.`,
    learning: `Taught me the value of shipping something real over waiting for perfect. Also my first time setting up CI/CD deployment — pushing to GitHub and seeing the site update live within seconds was a genuinely exciting moment.`,
    liveUrl: 'https://web-developer-a.netlify.app/',
    githubUrl: 'https://github.com/engfa21',
  },
  {
    id: 4,
    title: 'Flowi — SaaS Landing Page',
    tag: 'Portfolio Project',
    tagColor: 'text-[#00FF88] bg-[#00FF88]/10 border-[#00FF88]/20',
    status: 'Portfolio',
    stack: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Responsive'],
    summary: 'A full SaaS product landing page for a fictional workflow automation tool, built to showcase frontend skills.',
    color: '#00FF88',
    challenge: `SaaS landing pages are one of the most common freelance requests, and I wanted to build one that demonstrated I could handle the full scope — hero section, feature grid, pricing table, testimonials, and a polished mobile experience — without a design file or a client brief to follow.`,
    solution: `Built entirely with Tailwind CSS using a custom design system. Fully responsive with a working hamburger menu, animated dashboard mockup in the hero, scroll-reveal animations, and a clean 3-tier pricing section. The whole thing ships as a single HTML file.`,
    learning: `Deepened my Tailwind knowledge significantly — particularly around arbitrary values, responsive breakpoints, and the gap-px divider grid trick for feature cards. Also my first time implementing intersection observer for scroll-triggered animations.`,
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: 5,
    title: 'Finlo — Finance Dashboard',
    tag: 'Portfolio Project',
    tagColor: 'text-[#00FF88] bg-[#00FF88]/10 border-[#00FF88]/20',
    status: 'Portfolio',
    stack: ['React', 'Tailwind CSS', 'Recharts', 'Vite', 'Lucide'],
    summary: 'A personal finance dashboard built in React with live charts, transaction history, budget tracking, and a responsive sidebar.',
    color: '#34D399',
    challenge: `I wanted a project that would demonstrate React component architecture to potential employers — something more complex than a landing page, with real data visualisation and interactive UI elements that show I can structure a codebase properly.`,
    solution: `Split into clean, reusable components: Sidebar, StatCards, SpendingChart (area), CategoryChart (bar), Transactions list, and BudgetGoals with animated progress bars. Used Recharts for the charts with custom tooltips. Fully responsive with a slide-in mobile sidebar and hamburger menu.`,
    learning: `First time working with Recharts and building a proper multi-component React app from scratch using Vite. Learned a lot about prop passing, component composition, and how to keep data separate from UI by storing everything in a single data.js file.`,
    liveUrl: null,
    githubUrl: null,
  },
]

function Modal({ project, onClose }) {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8"
         onClick={onClose}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div className="relative bg-surface border border-white/[0.08] rounded-2xl
                      w-full max-w-2xl max-h-[90vh] overflow-y-auto z-10"
           onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="sticky top-0 bg-surface border-b border-white/[0.06] px-6 py-4 flex items-start justify-between z-10">
          <div>
            <div className={`inline-flex items-center gap-1.5 text-[0.7rem] font-medium tracking-wide
                            uppercase px-2.5 py-0.5 rounded-full border mb-2 ${project.tagColor}`}>
              {project.tag}
            </div>
            <h3 className="font-head font-bold text-[1.3rem] tracking-tight">{project.title}</h3>
          </div>
          <button onClick={onClose}
            className="w-8 h-8 rounded-full border border-white/[0.08] flex items-center justify-center
                       text-muted hover:text-white hover:bg-white/[0.06] transition-all flex-shrink-0 ml-4">
            <X size={14} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 flex flex-col gap-6">

          {/* Stack */}
          <div className="flex flex-wrap gap-2">
            {project.stack.map(s => (
              <span key={s} className="font-mono text-[0.72rem] bg-white/[0.04] border border-white/[0.07]
                                       text-muted px-3 py-1 rounded-full">{s}</span>
            ))}
          </div>

          {/* Sections */}
          {[
            { label: 'The Challenge', content: project.challenge },
            { label: 'The Solution', content: project.solution },
            { label: 'What I Learned', content: project.learning },
          ].map(({ label, content }) => (
            <div key={label}>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-[3px] h-4 rounded-full" style={{ background: project.color }} />
                <h4 className="font-head font-bold text-[0.95rem]">{label}</h4>
              </div>
              <p className="text-muted text-[0.88rem] leading-relaxed font-light pl-5">{content}</p>
            </div>
          ))}

          {/* Links */}
          {(project.liveUrl || project.githubUrl) && (
            <div className="flex gap-3 pt-2">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer"
                   className="flex items-center gap-2 bg-accent text-bg text-[0.82rem] font-medium
                              px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
                  <ExternalLink size={13} /> Live site
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer"
                   className="flex items-center gap-2 border border-white/[0.1] text-light text-[0.82rem]
                              font-medium px-4 py-2 rounded-full hover:bg-white/[0.05] transition-colors">
                  <Github size={13} /> GitHub
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="py-24 sm:py-32 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">

        <div className="reveal text-center mb-16">
          <p className="text-accent font-mono text-[0.78rem] tracking-[0.15em] uppercase mb-3">My work</p>
          <h2 className="font-head font-bold text-[2rem] sm:text-[3rem] tracking-tight">Featured Projects</h2>
          <p className="text-muted font-light text-[0.95rem] mt-3 max-w-[420px] mx-auto">
            Click any project to read the full case study — the challenge, solution, and what I learned.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <div key={p.id}
                 className="reveal group relative bg-surface border border-white/[0.07] rounded-2xl
                            overflow-hidden hover:border-white/[0.15] transition-all duration-400
                            hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                 style={{ transitionDelay: `${i * 0.07}s` }}
                 data-hover>

              {/* Colour accent bar */}
              <div className="h-[3px] w-full transition-all duration-500"
                   style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }} />

              <div className="p-6">
                {/* Tag + status */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[0.68rem] font-medium tracking-wide uppercase
                                   px-2.5 py-0.5 rounded-full border ${p.tagColor}`}>
                    {p.tag}
                  </span>
                  <span className={`text-[0.68rem] font-mono ${
                    p.status === 'Live' ? 'text-[#00FF88]' :
                    p.status === 'In Progress' ? 'text-[#FBBF24]' : 'text-muted'
                  }`}>
                    {p.status === 'Live' && '● '}{p.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-head font-bold text-[1.1rem] tracking-tight mb-2 group-hover:text-accent transition-colors duration-300">
                  {p.title}
                </h3>

                {/* Summary */}
                <p className="text-muted text-[0.84rem] leading-relaxed font-light mb-5">
                  {p.summary}
                </p>

                {/* Stack pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.stack.slice(0, 3).map(s => (
                    <span key={s} className="font-mono text-[0.68rem] bg-white/[0.03] border border-white/[0.06]
                                            text-muted px-2.5 py-0.5 rounded-full">{s}</span>
                  ))}
                  {p.stack.length > 3 && (
                    <span className="font-mono text-[0.68rem] text-muted">+{p.stack.length - 3}</span>
                  )}
                </div>

                {/* Read more */}
                <button onClick={() => setSelected(p)}
                  className="flex items-center gap-1.5 text-[0.8rem] font-medium text-accent/70
                             hover:text-accent transition-colors duration-200 group/btn">
                  Read case study
                  <ChevronRight size={13} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
