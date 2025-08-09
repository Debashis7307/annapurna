"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Logo from "./logo"

export default function Navbar(
  {
    sticky = true,
  }: {
    sticky?: boolean
  } = { sticky: true },
) {
  const [open, setOpen] = useState(false)

  return (
    <header
      className={`${
        sticky ? "sticky top-0" : ""
      } z-50 w-full border-b border-white/10 bg-slate-950/60 backdrop-blur supports-[backdrop-filter]:bg-slate-950/40`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-4" aria-label="Primary">
        <a href="#home" className="flex items-center gap-2">
          <Logo />
          <span className="sr-only">Annapurna Home</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-6 md:flex">
          <li>
            <a href="#features" className="text-sm text-slate-300 hover:text-white transition-colors">
              Features
            </a>
          </li>
          <li>
            <a href="#recipes" className="text-sm text-slate-300 hover:text-white transition-colors">
              Recipes
            </a>
          </li>
          <li>
            <a href="#demo" className="text-sm text-slate-300 hover:text-white transition-colors">
              Demo
            </a>
          </li>
          <li>
            <a href="#contact" className="text-sm text-slate-300 hover:text-white transition-colors">
              Contact
            </a>
          </li>
        </ul>

        <div className="hidden md:block">
          <Button asChild className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold">
            <a href="#recipes">Try Annapurna</a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden rounded-md p-2 text-slate-200 hover:bg-white/10"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/90 backdrop-blur">
          <ul className="flex flex-col gap-2 px-4 py-4">
            <li>
              <a
                href="#features"
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-slate-200 hover:bg-white/10"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#recipes"
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-slate-200 hover:bg-white/10"
              >
                Recipes
              </a>
            </li>
            <li>
              <a
                href="#demo"
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-slate-200 hover:bg-white/10"
              >
                Demo
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-slate-200 hover:bg-white/10"
              >
                Contact
              </a>
            </li>
            <li className="pt-2">
              <Button asChild className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold">
                <a href="#recipes">Try Annapurna</a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
