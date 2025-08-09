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
    color: "from-emerald-400/20 to-emerald-300/10 border-emerald-400/30",
  },
  {
    icon: ChefHat,
    title: "AI‑Powered Recipes",
    badge: "Personalized",
    desc: "Get recipes that fit your time, taste, and what's on hand. Dietary filters included.",
    color: "from-fuchsia-400/20 to-fuchsia-300/10 border-fuchsia-400/30",
  },
  {
    icon: Activity,
    title: "Nutrition Tracker",
    badge: "Insights",
    desc: "Track calories, macros, and nutrients seamlessly as you cook and log meals.",
    color: "from-amber-400/20 to-amber-300/10 border-amber-400/30",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Fast Lane",
    badge: "Chat",
    desc: "Log food, scan receipts, and get recipe cards—right from WhatsApp for ultimate convenience.",
    color: "from-violet-400/20 to-violet-300/10 border-violet-400/30",
  },
]

export default function FeatureCards() {
  return (
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
          >
            <Card
              className={`group h-full border ${f.color} bg-gradient-to-br transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-15px_rgba(16,185,129,0.35)]`}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <div className="flex items-center gap-2">
                  <f.icon className="h-5 w-5 text-white" />
                  <CardTitle className="text-white">{f.title}</CardTitle>
                </div>
                <Badge
                  variant="outline"
                  className="border-white/20 bg-white/5 text-[10px] uppercase tracking-wider text-slate-200"
                >
                  {f.badge}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-300">{f.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
