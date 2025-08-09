"use client"

import { motion } from "framer-motion"

export default function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Gradient beams */}
      <motion.div
        className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-60px] top-24 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl"
        animate={{ y: [0, 24, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 9, ease: "easeInOut", delay: 0.2 }}
      />
      <motion.div
        className="absolute bottom-[-60px] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl"
        animate={{ y: [0, -18, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 7.5, ease: "easeInOut", delay: 0.1 }}
      />
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:36px_36px]" />
    </div>
  )
}
