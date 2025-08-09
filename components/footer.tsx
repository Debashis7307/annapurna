import Logo from "./logo"

export default function Footer() {
  return (
    <footer id="contact" className="relative z-10 border-t border-white/10 bg-slate-950/60">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Logo small />
            <p className="text-xs text-slate-400">{"Cook Smart, Eat Well, Live Better."}</p>
          </div>
          <div className="text-xs text-slate-400">© {new Date().getFullYear()} Annapurna. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
