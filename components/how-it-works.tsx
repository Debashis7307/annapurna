"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Camera, ChefHat, Activity } from "lucide-react"

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
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <Card className="h-full border-white/10 bg-white/5">
              <CardContent className="flex h-full flex-col items-center gap-4 p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400/20 via-fuchsia-400/20 to-amber-300/20">
                  <s.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-lg font-semibold text-white">{s.title}</div>
                <p className="text-sm text-slate-300">{s.text}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
