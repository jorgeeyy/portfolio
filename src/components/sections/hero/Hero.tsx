import { VisualExperience } from "./VisualExperience"
import { HeroContent } from "./HeroContent"

export const Hero = () => {
  return (
    <main className="flex flex-col-reverse lg:flex-row min-h-screen pt-20 relative">
      <HeroContent />
      <VisualExperience />
    </main>
  )
}
