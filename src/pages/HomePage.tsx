import { Hero } from "../components/sections/hero/Hero"
import { EngineeringArsenal } from "../components/sections/tech/EngineeringArsenal"
import { FooterCTA } from "../components/sections/cta/FooterCTA"

export const HomePage = () => {
  return (
    <>
      <Hero />
      <EngineeringArsenal />
      <FooterCTA />
    </>
  )
}
