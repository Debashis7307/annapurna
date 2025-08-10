import { Sprout } from "lucide-react"

export default function Logo(
  {
    small = false,
  }: {
    small?: boolean
  } = { small: false },
) {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-emerald-500 via-amber-400 to-fuchsia-500 blur opacity-40" />
        <Sprout className="relative h-7 w-7 text-emerald-400" aria-hidden />
      </div>
      <div className="leading-tight">
        <span className="block bg-gradient-to-r from-emerald-300 via-amber-200 to-fuchsia-300 bg-clip-text text-transparent font-extrabold tracking-tight">
          Annapurna
        </span>
        {!small && (
          <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Goddess of nourishment of your Health</span>
        )}
      </div>
    </div>
  )
}
