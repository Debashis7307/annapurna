"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import {
  Link2,
  Upload,
  Camera,
  ChefHat,
  Activity,
  Apple,
  CalendarRange,
  ListChecks,
  List,
  Utensils,
  ShieldCheck,
} from "lucide-react"
import { useState } from "react"

const stepCards = [
  { icon: Link2, title: "Connect", text: "Link your Puch AI MCP server with URL and secret token." },
  { icon: Upload, title: "Scan", text: "Upload a grocery bill or snap a photo (mobile camera)." },
  { icon: ChefHat, title: "Cook", text: "Pick recipes suggested from your pantry and time." },
  { icon: Activity, title: "Track", text: "View nutrition and log meals to your daily history." },
]

const uiBlocks = [
  { icon: Link2, title: "ConnectModal", text: "Enter MCP URL and token, then connect. Clear success/failed states." },
  { icon: Upload, title: "BillUploader", text: "Upload/drag or use camera. Preview and Process Bill CTA." },
  { icon: ListChecks, title: "OcrResultEditor", text: "Confirm extracted items, edit quantities, add/remove lines." },
  { icon: Utensils, title: "RecipeList / Card", text: "Recipe cards with time and macro highlights, quick actions." },
  { icon: Apple, title: "NutritionModal", text: "View a clear per-serving breakdown of your meal — Calories, Protein, Carbs & Fat. " },
  { icon: CalendarRange, title: "Diet Lock", text: "Secure and save your meal plan in the Diet Board, so you can lock in your daily intake and track it with ease." },
]

export default function HowItWorks() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-16">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">How it works</h2>
        <p className="mt-2 text-slate-400">Simple flow, powerful outcomes.</p>
      </div>

      {/* Center image showcase */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative mx-auto mb-10 w-full max-w-2xl"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-[22px] bg-gradient-to-tr from-emerald-500/15 via-fuchsia-400/15 to-amber-300/15 blur-2xl" />
        <div className="relative overflow-hidden rounded-[22px] shadow-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/lap-photoroom.png" alt="Demo laptop" className="w-full h-auto object-cover" />

          {/* Responsive video placed within the laptop screen area */}
          <div className="pointer-events-none absolute left-[8.5%] right-[12.5%] top-[9%] bottom-[25%] rounded-[5px] overflow-hidden shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
            <video
              src="/annapurna.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </motion.div>

      {/* Step cards: Connect → Scan → Cook → Track */}
      <div className="mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stepCards.map((s, i) => (
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
                <div className="pointer-events-none absolute -inset-0.5 -z-10 rounded-xl bg-gradient-to-br from-emerald-400/15 via-fuchsia-400/15 to-amber-300/15 blur-xl opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-white/0 via-white/10 to-white/0"
                  initial={{ x: "-120%" }}
                  whileHover={{ x: "160%" }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                />
                <CardContent className="flex h-full flex-col gap-3 p-5">
                  <div className="flex items-center gap-3" style={{ transform: "translateZ(24px)" }}>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                      <s.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-base font-semibold text-white">{s.title}</div>
                  </div>
                  <p className="text-sm text-slate-300" style={{ transform: "translateZ(14px)" }}>{s.text}</p>
                </CardContent>
              </Card>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      {/* Product UI blocks */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {uiBlocks.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <Card className="group h-full overflow-hidden border-white/10 bg-white/5">
              <CardContent className="flex h-full flex-col gap-3 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                    <b.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-base font-semibold text-white">{b.title}</div>
                </div>
                <p className="text-sm text-slate-300">{b.text}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Security & Privacy */}
      <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-5">
        <div className="mb-3 flex items-center gap-2 text-white">
          <ShieldCheck className="h-5 w-5" />
          <span className="font-semibold">Security & Privacy</span>
        </div>
        <ul className="grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
          <li>• Do not store raw images unencrypted; persist text outputs only.</li>
          <li>• Keep MCP tokens in server .env; never expose in client.</li>
          <li>• Use HTTPS (ngrok is fine for development).</li>
          <li>• Rate‑limit OCR and model calls to control costs.</li>
        </ul>
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
