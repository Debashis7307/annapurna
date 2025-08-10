import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import FeatureCards from "@/components/feature-cards"
import RecipesExplorer from "@/components/recipes-explorer"
import HowItWorks from "@/components/how-it-works"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"

export default function Page() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-100 overflow-clip">
      <AnimatedBackground />
      <Navbar />
      <section id="home" className="relative z-10">
        <Hero />
      </section>
      <section id="features" className="relative z-10">
        <FeatureCards />
      </section>
      <section id="demo" className="relative z-10">
        <HowItWorks />
      </section>
      <section id="recipes" className="relative z-10">
        <RecipesExplorer />
      </section>
      <Footer />
    </main>
  )
}
