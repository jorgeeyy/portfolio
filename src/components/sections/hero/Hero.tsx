import { VisualExperience } from "./VisualExperience"
import { HeroContent } from "./HeroContent"
// import { TechTicker } from "./TechTicker"

export const Hero = () => {
  return (
    <main className="flex flex-col-reverse lg:flex-row min-h-screen pt-20 relative bg-background-dark">
      <HeroContent />
      <VisualExperience />
    </main>
  )
}
