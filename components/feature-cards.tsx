"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Image as ImageIcon, Receipt, Database, Lock, BookOpen, Plug } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: ImageIcon,
    title: "Image Processing",
    badge: "B&W",
    desc: "Convert images to black & white. Upload any image and get a clean monochrome version.",
    gradient: "from-fuchsia-400/25 via-fuchsia-300/10 to-transparent",
    chip: "border-fuchsia-400/30 bg-fuchsia-400/10 text-fuchsia-200",
    hoverShadow: "hover:shadow-[0_18px_56px_-18px_rgba(232,121,249,0.45)]",
    tags: ["Monochrome", "Contrast", "Preview"],
  },
  {
    icon: Receipt,
    title: "Grocery Bill OCR",
    badge: "Azure Vision",
    desc: "Scan grocery bills and extract purchased items using Microsoft Azure AI Vision OCR.",
    gradient: "from-emerald-400/25 via-emerald-300/10 to-transparent",
    chip: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
    hoverShadow: "hover:shadow-[0_18px_56px_-18px_rgba(52,211,153,0.45)]",
    tags: ["Receipts", "Line Items", "Totals"],
  },
  {
    icon: Database,
    title: "Persistent Inventory",
    badge: "Per‑User",
    desc: "Detected items are stored per user in inventory.txt for reliable, repeatable results.",
    gradient: "from-amber-400/25 via-amber-300/10 to-transparent",
    chip: "border-amber-400/30 bg-amber-400/10 text-amber-200",
    hoverShadow: "hover:shadow-[0_18px_56px_-18px_rgba(251,191,36,0.45)]",
    tags: ["Per‑User Store", "File‑Backed", "Reliable"],
  },
  {
    icon: Lock,
    title: "Authentication",
    badge: "Bearer",
    desc: "Bearer token auth required by Puch AI, including a validation tool that returns your phone number.",
    gradient: "from-violet-400/25 via-violet-300/10 to-transparent",
    chip: "border-violet-400/30 bg-violet-400/10 text-violet-200",
    hoverShadow: "hover:shadow-[0_18px_56px_-18px_rgba(167,139,250,0.45)]",
    tags: ["Bearer", "Puch AI", "Validation"],
  },
  {
    icon: BookOpen,
    title: "What is MCP?",
    badge: "Protocol",
    desc: "A safe way for assistants like Puch to connect to tools and data—extra capabilities without sacrificing security.",
    gradient: "from-sky-400/25 via-sky-300/10 to-transparent",
    chip: "border-sky-400/30 bg-sky-400/10 text-sky-200",
    hoverShadow: "hover:shadow-[0_18px_56px_-18px_rgba(56,189,248,0.45)]",
    tags: ["Secure", "Extensible", "Standard"],
  },
  {
    icon: Plug,
    title: "Puch AI Starter",
    badge: "Template",
    desc: "Starter MCP server tailored for Puch AI with prewired tools for job search and image processing.",
    gradient: "from-rose-400/25 via-rose-300/10 to-transparent",
    chip: "border-rose-400/30 bg-rose-400/10 text-rose-200",
    hoverShadow: "hover:shadow-[0_18px_56px_-18px_rgba(251,113,133,0.45)]",
    tags: ["Template", "Prewired Tools", "Jobs + Images"],
  },
]

export default function FeatureCards() {
  return (
    <section className="relative">
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="mb-10 flex justify-center">
          <div className="space-y-3 text-center mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Built for real life</h2>
            <p className="text-slate-400">Tools that save time and elevate your kitchen flow.</p>
          </div>
        </div>

        <div className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.05, ease: "easeOut" }}
              viewport={{ once: true, margin: "-80px" }}
              className="group h-full"
            >
              {/* Make Card transparent; build our own dark glass surface inside */}
              <Card className="!bg-transparent !border-0 p-0 h-full">
                <div
                  className={[
                    "relative h-full overflow-hidden rounded-2xl border border-white/10",
                    "bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5",
                    "transition-all duration-300 will-change-transform",
                    f.hoverShadow,
                    "group-hover:-translate-y-1",
                    "flex flex-col min-h-[200px] md:min-h-[200px]",
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
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 px-5 pt-4 pb-1.5">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                        <f.icon className="h-5 w-5 text-white" />
                      </div>
                      <CardTitle className="text-white text-base sm:text-lg">{f.title}</CardTitle>
                    </div>

                    <Badge
                      variant="outline"
                      className={`border-white/20 bg-white/5 text-[10px] uppercase tracking-wider text-slate-200`}
                    >
                      {f.badge}
                    </Badge>
                  </CardHeader>
                  <CardContent className="flex-1 px-5 pt-2 pb-4 flex flex-col">
                    <p className="text-sm leading-relaxed text-slate-300">{f.desc}</p>

                    {/* Feature-specific tag row (last row) */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {f.tags?.map((tag) => (
                        <span key={tag} className={`rounded-full border px-2.5 py-1 text-xs ${f.chip} backdrop-blur-sm`}>
                          {tag}
                        </span>
                      ))}
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
