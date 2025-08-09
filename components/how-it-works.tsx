"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Camera, ChefHat, Activity } from "lucide-react"
import { useState } from "react"

const steps = [
  {
    icon: Camera,
    title: "Scan",
    text: "Upload a grocery bill or snap your fridge. We’ll extract items automatically.",
  },
  {
    icon: ChefHat,
    title: "Plan & Cook",
    text: "Get curated recipes that fit your pantry, time, and dietary preferences.",
  },
  {
    icon: Activity,
    title: "Track",
    text: "Log meals and see nutrition summaries without extra work.",
  },
]

export default function HowItWorks() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-16">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">How it works</h2>
        <p className="mt-2 text-slate-400">Simple flow, powerful outcomes.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <TiltCard>
              <Card className="group relative h-full overflow-hidden border-white/10 bg-white/5" style={{ transformStyle: "preserve-3d" }}>
                {/* Glow frame */}
                <div className="pointer-events-none absolute -inset-0.5 -z-10 rounded-xl bg-gradient-to-br from-emerald-400/15 via-fuchsia-400/15 to-amber-300/15 blur-xl opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
                {/* Shine sweep */}
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-white/0 via-white/10 to-white/0"
                  initial={{ x: "-120%" }}
                  whileHover={{ x: "160%" }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                />
                <CardContent className="flex h-full flex-col items-center gap-3 p-5 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400/20 via-fuchsia-400/20 to-amber-300/20" style={{ transform: "translateZ(30px)" }}>
                    <s.icon className="h-6 w-6 text-white drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)]" />
                  </div>
                  <div className="text-lg font-semibold text-white" style={{ transform: "translateZ(20px)" }}>{s.title}</div>
                  <p className="text-sm text-slate-300" style={{ transform: "translateZ(10px)" }}>
                    {s.text}
                  </p>
                </CardContent>
              </Card>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function TiltCard({ children }: { children: React.ReactNode }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rotateY = (px - 0.5) * 18 // left/right
    const rotateX = (0.5 - py) * 12 // up/down
    setTilt({ x: rotateX, y: rotateY })
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      transition={{ type: "spring", stiffness: 200, damping: 18, mass: 0.3 }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  )
}
