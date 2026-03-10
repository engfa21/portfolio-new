export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-5 sm:px-8 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <span className="font-head font-bold text-[1rem] text-white/30">
          <span className="text-accent/50">A</span>H
        </span>
        <p className="text-muted text-[0.78rem] font-light">
          © 2025 Aquana Harper. Built with React & Tailwind CSS.
        </p>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-muted text-[0.78rem] hover:text-accent transition-colors duration-200">
          Back to top ↑
        </button>
      </div>
    </footer>
  )
}
