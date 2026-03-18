import { VisualExperience } from "./VisualExperience"
import { HeroContent } from "./HeroContent"
// import { TechTicker } from "./TechTicker"

export const Hero = () => {
  return (
    <main className="flex flex-col lg:flex-row h-screen pt-20 relative bg-background-dark">
      <VisualExperience />
      <HeroContent />
      {/* <TechTicker /> */}
    </main>
  )
}
