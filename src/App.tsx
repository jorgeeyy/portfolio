import { Toaster } from "sonner"
import { Header } from "./components/layout/Header"
import { Hero } from "./components/sections/hero/Hero"
import { Projects } from "./components/sections/projects/Projects"
import { EngineeringArsenal } from "./components/sections/tech/EngineeringArsenal"
import { Contact } from "./components/sections/contact/Contact"
import { Footer } from "./components/layout/Footer"
import { FloatingOrbs } from "./components/FloatingOrbs"
import { CursorGlow } from "./components/CursorGlow"

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-bg text-fg font-display overflow-x-hidden">
      <FloatingOrbs />
      <CursorGlow />
      <Toaster position="bottom-right" />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <Projects />
          <EngineeringArsenal />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
