import { useEffect, useRef } from 'react'

const skills = [
  { name: 'HTML5',       level: 95, color: '#E34F26' },
  { name: 'CSS3',        level: 90, color: '#1572B6' },
  { name: 'Tailwind',    level: 88, color: '#38BDF8' },
  { name: 'JavaScript',  level: 82, color: '#F7DF1E' },
  { name: 'React',       level: 70, color: '#61DAFB' },
  { name: 'Python',      level: 65, color: '#3776AB' },
  { name: 'WordPress',   level: 85, color: '#21759B' },
  { name: 'Squarespace', level: 80, color: '#000000' },
]

const marqueeItems = ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'React', 'Python', 'WordPress', 'Squarespace', 'Responsive Design', 'UI/UX', 'Git', 'Netlify', 'Vercel']

export default function Skills() {
  const barRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const idx = parseInt(e.target.dataset.idx)
          setTimeout(() => {
            e.target.style.width = skills[idx].level + '%'
          }, idx * 80)
        }
      })
    }, { threshold: 0.3 })

    barRefs.current.forEach(el => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-24 sm:py-32">

      {/* Marquee strip */}
      <div className="overflow-hidden border-y border-white/[0.06] py-4 mb-20 bg-surface/50">
        <div className="marquee-inner flex gap-12 whitespace-nowrap w-max">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="text-[0.8rem] font-mono text-muted tracking-widest uppercase">
              {item} <span className="text-accent mx-4">·</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="reveal text-center mb-16">
          <p className="text-accent font-mono text-[0.78rem] tracking-[0.15em] uppercase mb-3">My toolkit</p>
          <h2 className="font-head font-bold text-[2rem] sm:text-[3rem] tracking-tight">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <div key={skill.name} className="reveal" style={{ transitionDelay: `${i * 0.07}s` }}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[0.88rem] font-medium">{skill.name}</span>
                <span className="font-mono text-[0.78rem] text-muted">{skill.level}%</span>
              </div>
              <div className="h-[5px] bg-white/[0.05] rounded-full overflow-hidden">
                <div
                  ref={el => barRefs.current[i] = el}
                  data-idx={i}
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: '0%', background: skill.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
