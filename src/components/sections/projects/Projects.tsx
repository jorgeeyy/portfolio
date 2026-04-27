import { motion } from "framer-motion"
// import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Security Bot",
    description:
      "A real-time server security system that detects and blocks brute-force attacks, monitors SSH intrusions, and fires instant Telegram alerts. Backed by MySQL for persistent logging and IP whitelisting.",
    tags: ["Python", "FastAPI", "Docker", "MySQL", "Redis", "Telegram"],
    link: "https://github.com/jorgeeyy/security-bot",
    linkIcon: "github" as const,
  },
  {
    title: "NexusOCR",
    description:
      "A fast, locally-hosted Document Parsing and OCR web app built with Django and Tailwind CSS. Extracts raw text from dense images and converts complex PDFs into editable Word files with zero layout loss.",
    tags: ["Python", "Django", "Tailwind CSS"],
    link: "https://github.com/jorgeeyy/NexusOCR",
    linkIcon: "github" as const,
  },
  {
    title: "epub2pdf",
    description:
      "A lightweight Python CLI utility for converting EPUB e-books to PDF with clean formatting. MIT-licensed and open source.",
    tags: ["Python", "CLI"],
    link: "https://github.com/jorgeeyy/epub2pdf",
    linkIcon: "github" as const,
  },
  {
    title: "TipsyMixer",
    description:
      "A cocktail recipe discovery web app with curated drink recipes, ingredient breakdowns, and an interactive mixing experience.",
    tags: ["Web", "PHP", "Typescript", "MySQL"],
    link: "https://tipsymixergh.com",
    linkIcon: "external" as const,
  },
]

export const Projects = () => {
  return (
    <section className="py-16 lg:py-24 px-6 md:px-12 lg:px-20 max-w-350 mx-auto w-full">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-20"
      >
        <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase mb-4">Work</p>
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
          Selected projects
        </h1>
      </motion.div>

      {/* Project list */}
      <ul>
        {projects.map((project, i) => {
          // const Icon = project.linkIcon === "github" ? Github : ExternalLink
          return (
            <motion.li
              key={project.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="border-t border-border last:border-b"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 py-8 hover:pl-1 transition-all duration-300"
              >
                {/* Index */}
                <span className="text-xs font-mono text-muted-foreground shrink-0 sm:pt-0.5 sm:w-6">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-base font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-200">
                      {project.title}
                    </h2>
                    <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-foreground/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0 mt-0.5" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex gap-2 flex-wrap pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-muted-foreground font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.li>
          )
        })}
      </ul>
    </section>
  )
}
