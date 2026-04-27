import { GitBranch, Linkedin, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export const HeroContent = () => {
  return (
    <section className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-end px-6 md:px-12 lg:pl-12 lg:pr-6 xl:pr-8 py-10 lg:py-12">
      <motion.div
        className="w-full max-w-140 flex flex-col gap-10"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Status indicator */}
        <div className="flex items-center gap-2">
          <span className="relative flex size-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full size-2 bg-emerald-500" />
          </span>
          <span className="text-xs text-muted-foreground tracking-wide">Available for projects</span>
        </div>

        {/* Heading */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight text-foreground text-center lg:text-left">
            Crafting digital<br />
            <span className="text-foreground/45">experiences</span><br />
            with code.
          </h1>
          <p className="text-sm md:text-base text-muted-foreground font-normal max-w-md leading-relaxed text-center lg:text-left">
            Software Engineer focused on high-performance web and mobile applications. Clean code, modern interfaces.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-sm text-foreground hover:text-foreground/70 transition-colors duration-200"
          >
            View Projects
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>

          <div className="w-px h-4 bg-border" />

          <div className="flex gap-4">
            <a
              href="#"
              className="text-foreground/45 hover:text-foreground transition-colors duration-200"
              aria-label="GitHub"
            >
              <GitBranch className="size-4" />
            </a>
            <a
              href="#"
              className="text-foreground/45 hover:text-foreground transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
