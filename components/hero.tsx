"use client"

import { Button } from "@/components/ui/button"
import { ChefHat, PlayCircle, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden" aria-labelledby="hero-title">
      {/* Gradient spotlight */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.25),rgba(99,102,241,0.08)_45%,transparent_70%)] blur-2xl" />

      <div className="container mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:py-24 lg:py-28">
        <div className="flex flex-col items-start justify-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
          >
            <Sparkles className="h-4 w-4 text-amber-300" />
            <span>{"Cook Smart, Eat Well, Live Better."}</span>
          </motion.div>

          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.05 }}
            viewport={{ once: true }}
            className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
          >
            <span className="bg-gradient-to-br from-emerald-300 via-amber-200 to-fuchsia-300 bg-clip-text text-transparent">
              Annapurna
            </span>
            <span className="block text-slate-300">Recipes That Fit Your Life</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-5 max-w-xl text-slate-400"
          >
            Scan groceries, plan meals with AI, and track nutrition without the hassle. Designed for busy people who
            still want to eat beautifully.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true }}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold">
              <a href="#recipes" aria-label="Open Recipe Explorer">
                <ChefHat className="mr-2 h-5 w-5" />
                Try Recipe Explorer
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 bg-white/5 text-slate-100 hover:bg-white/10"
            >
              <a href="#demo" aria-label="Watch product demo">
                <PlayCircle className="mr-2 h-5 w-5" />
                Watch Demo
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Visuals */}
        <motion.div
          initial={{ opacity: 0, y: 24, rotate: 0 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-emerald-500/10 via-fuchsia-400/10 to-amber-300/10 blur-2xl" />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 shadow-2xl">
            <img
              src="/modern-recipe-app.png"
              alt="Annapurna app preview"
              className="h-full w-full object-cover opacity-90"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            {/* Floating chips */}
            <motion.div
              className="absolute left-4 top-4 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200 backdrop-blur"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3.4, ease: "easeInOut" }}
            >
              Smart OCR
            </motion.div>
            <motion.div
              className="absolute right-4 top-10 rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-3 py-1 text-xs text-fuchsia-200 backdrop-blur"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3.6, ease: "easeInOut", delay: 0.2 }}
            >
              AI Recipes
            </motion.div>
            <motion.div
              className="absolute bottom-6 left-6 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs text-amber-200 backdrop-blur"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3.2, ease: "easeInOut", delay: 0.1 }}
            >
              Nutrition
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
