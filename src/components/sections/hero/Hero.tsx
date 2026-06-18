import { GitHub, LinkedIn, WhatsApp, ArrowRight } from "../../icons"

const waMsg = encodeURIComponent("Hi George, I'm interested in working with you on a project. Let me know if you're available!")

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 max-w-7xl mx-auto pt-24 pb-16">
      <div className="relative max-w-2xl mx-auto animate-fade-up">
        <div className="flex items-center gap-2 mb-6">
          <span className="relative flex size-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full size-2 bg-emerald-500" />
          </span>
          <span className="text-xs text-muted-fg">Available for projects</span>
        </div>

        <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight mb-6">
          George Inkoom
        </h1>
        <p className="text-lg sm:text-xl text-muted-fg max-w-lg mb-10 leading-relaxed">
          Software engineer building high-performance web, mobile, and AI applications — bridging complex business logic with scalable digital ecosystems.
        </p>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-fg text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            View projects
            <ArrowRight className="size-4" />
          </a>

          <div className="flex gap-4">
            <a href="https://github.com/jorgeeyy" target="_blank" rel="noopener noreferrer" className="text-muted-fg hover:text-fg transition-colors" aria-label="GitHub">
              <GitHub className="size-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-fg hover:text-fg transition-colors" aria-label="LinkedIn">
              <LinkedIn className="size-5" />
            </a>
            <a href={`https://wa.me/233202994320?text=${waMsg}`} target="_blank" rel="noopener noreferrer" className="text-muted-fg hover:text-fg transition-colors" aria-label="WhatsApp">
              <WhatsApp className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
