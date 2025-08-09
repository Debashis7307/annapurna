"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, ChefHat, Activity, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Camera,
    title: "Smart Inventory Scan",
    badge: "OCR",
    desc: "Snap a grocery bill or fridge photo; Annapurna extracts items automatically for instant pantry updates.",
    gradient: "from-emerald-400/25 via-emerald-300/10 to-transparent",
    chip: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
    hoverShadow: "hover:shadow-[0_18px_56px_-18px_rgba(52,211,153,0.45)]",
  },
  {
    icon: ChefHat,
    title: "AI‑Powered Recipes",
    badge: "Personalized",
    desc: "Get recipes that fit your time, taste, and what's on hand. Dietary filters included.",
    gradient: "from-fuchsia-400/25 via-fuchsia-300/10 to-transparent",
    chip: "border-fuchsia-400/30 bg-fuchsia-400/10 text-fuchsia-200",
    hoverShadow: "hover:shadow-[0_18px_56px_-18px_rgba(232,121,249,0.45)]",
  },
  {
    icon: Activity,
    title: "Nutrition Tracker",
    badge: "Insights",
    desc: "Track calories, macros, and nutrients seamlessly as you cook and log meals.",
    gradient: "from-amber-400/25 via-amber-300/10 to-transparent",
    chip: "border-amber-400/30 bg-amber-400/10 text-amber-200",
    hoverShadow: "hover:shadow-[0_18px_56px_-18px_rgba(251,191,36,0.45)]",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Fast Lane",
    badge: "Chat",
    desc: "Log food, scan receipts, and get recipe cards—right from WhatsApp for ultimate convenience.",
    gradient: "from-violet-400/25 via-violet-300/10 to-transparent",
    chip: "border-violet-400/30 bg-violet-400/10 text-violet-200",
    hoverShadow: "hover:shadow-[0_18px_56px_-18px_rgba(167,139,250,0.45)]",
  },
]

export default function FeatureCards() {
  return (
    <section className="relative">
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Built for real life</h2>
            <p className="mt-2 text-slate-400">Tools that save time and elevate your kitchen flow.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.05, ease: "easeOut" }}
              viewport={{ once: true, margin: "-80px" }}
              className="group"
            >
              {/* Make Card transparent; build our own dark glass surface inside */}
              <Card className="!bg-transparent !border-0 p-0">
                <div
                  className={[
                    "relative h-full overflow-hidden rounded-2xl border border-white/10",
                    "bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5",
                    "transition-all duration-300 will-change-transform",
                    f.hoverShadow,
                    "group-hover:-translate-y-1",
                  ].join(" ")}
                >
                  {/* Ambient gradient accent */}
                  <div
                    className={`pointer-events-none absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-br ${f.gradient} blur-2xl opacity-50`}
                    aria-hidden
                  />

                  {/* Hover shine sweep */}
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-white/0 via-white/10 to-white/0"
                    initial={{ x: "-120%" }}
                    whileHover={{ x: "160%" }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                  />

                  <CardHeader className="flex flex-row items-center justify-between space-y-0 px-6 pt-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                        <f.icon className="h-5 w-5 text-white" />
                      </div>
                      <CardTitle className="text-white">{f.title}</CardTitle>
                    </div>

                    <Badge
                      variant="outline"
                      className={`border-white/20 bg-white/5 text-[10px] uppercase tracking-wider text-slate-200`}
                    >
                      {f.badge}
                    </Badge>
                  </CardHeader>

                  <CardContent className="pb-6 pt-2">
                    <p className="text-sm text-slate-300">{f.desc}</p>

                    {/* Feature chip row */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className={`rounded-full border px-2.5 py-1 text-xs ${f.chip} backdrop-blur-sm`}>
                        Modern
                      </span>
                      <span className={`rounded-full border px-2.5 py-1 text-xs ${f.chip} backdrop-blur-sm`}>Fast</span>
                      <span className={`rounded-full border px-2.5 py-1 text-xs ${f.chip} backdrop-blur-sm`}>
                        Practical
                      </span>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
