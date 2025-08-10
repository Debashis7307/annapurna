"use client"

import { useMemo, useState } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Timer, Flame, Utensils } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { mockRecipes } from "@/lib/recipes"

type Diet = "Any" | "Vegetarian" | "Vegan" | "Gluten-Free" | "Keto"

export default function RecipesExplorer() {
  const [query, setQuery] = useState("")
  const [diet, setDiet] = useState<Diet>("Any")
  const [liked, setLiked] = useState<Record<string, boolean>>({})

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return mockRecipes.filter((r) => {
      const matchesQuery =
        !q ||
        r.title.toLowerCase().includes(q) ||
        r.tags.some((t) => t.toLowerCase().includes(q)) ||
        r.diet.toLowerCase().includes(q)
      const matchesDiet = diet === "Any" || r.diet === diet
      return matchesQuery && matchesDiet
    })
  }, [query, diet])

  return (
    <div className="container mx-auto max-w-7xl px-4 py-16">
      <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Recipe Explorer</h2>
          <p className="mt-2 text-slate-400">Search, filter, and discover recipes that fit your time and taste.</p>
        </div>
        <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, tag, diet..."
            className="w-full border-white/15 bg-white/5 text-slate-100 placeholder:text-slate-400 hover:text-white"
            aria-label="Search recipes"
          />
          <div className="flex flex-wrap gap-2">
            {(["Any", "Vegetarian", "Vegan", "Gluten-Free", "Keto"] as Diet[]).map((d) => (
              <Button
                key={d}
                variant={diet === d ? "default" : "outline"}
                onClick={() => setDiet(d)}
                className={
                  diet === d
                    ? "bg-cyan-500 hover:bg-cyan-400 text-slate-900 shadow-[0_8px_24px_-8px_rgba(34,211,238,0.55)] hover:shadow-[0_12px_32px_-8px_rgba(34,211,238,0.65)]"
                    : "border-white/20 bg-white/5 text-slate-100 hover:bg-white/10 hover:text-white"
                }
              >
                {d}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence mode="popLayout">
        {filtered.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="rounded-xl border border-white/10 bg-white/5 p-8 text-center text-slate-300"
          >
            No recipes found. Try a different search or clear filters.
          </motion.div>
        ) : (
          <motion.div key="grid" layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((r) => (
              <motion.div
                layout
                key={r.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Card className="group overflow-hidden border-white/10 bg-white/5 transition-transform hover:-translate-y-1">
                  <div className="relative aspect-video w-full overflow-hidden">
                    <img
                      src={r.image || "/placeholder.svg"}
                      alt={r.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute left-3 top-3 flex gap-2">
                      <Badge className="bg-emerald-500 text-slate-900 hover:bg-emerald-500">{r.diet}</Badge>
                      <Badge variant="secondary" className="bg-black/40 text-white backdrop-blur">
                        <Timer className="mr-1 h-3.5 w-3.5" />
                        {r.time}m
                      </Badge>
                      <Badge variant="secondary" className="bg-black/40 text-white backdrop-blur">
                        <Flame className="mr-1 h-3.5 w-3.5" />
                        {r.calories} kcal
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-white">{r.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2">
                      {r.tags.map((t) => (
                        <Badge key={t} variant="outline" className="border-white/15 text-slate-300">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between">
                     <Button asChild variant="ghost" className="text-slate-200 hover:bg-white/10 hover:text-white">
                      <a href="https://puch.ai/mcp/m1U90lbPgz" target="_blank" rel="noopener noreferrer">
                        <Utensils className="mr-2 h-4 w-4" />
                        View Recipe
                      </a>
                    </Button>
                    <button
                      aria-label={liked[r.id] ? "Unlike recipe" : "Like recipe"}
                      onClick={() => setLiked((prev) => ({ ...prev, [r.id]: !prev[r.id] }))}
                      className="rounded-full p-2 text-pink-300 transition hover:bg-white/10"
                    >
                      <Heart className={`h-5 w-5 ${liked[r.id] ? "fill-pink-400 text-pink-400" : ""}`} />
                    </button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
