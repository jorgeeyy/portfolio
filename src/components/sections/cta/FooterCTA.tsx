import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export const FooterCTA = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 max-w-350 mx-auto w-full pb-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="border-t border-border pt-20"
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div className="space-y-4 max-w-lg">
            <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase">Get in touch</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight leading-snug">
              Have a project in mind?<br />
              <span className="text-foreground/55">Let's build it together.</span>
            </h2>
          </div>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 shrink-0"
          >
            Start a conversation
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
