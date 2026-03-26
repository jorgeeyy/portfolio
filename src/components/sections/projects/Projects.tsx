import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

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
    link: "https://tipsymixergh.vercel.app",
    linkIcon: "external" as const,
  },
]

export const Projects = () => {
  return (
    <section className="py-12 lg:py-20 px-6 lg:px-40 max-w-[1400px] mx-auto w-full bg-background-dark">
      {/* Heading */}
      <div className="mb-16">
        <div className="flex items-center gap-2 text-primary font-bold mb-4 uppercase tracking-widest text-xs">
          <span className="h-[2px] w-8 bg-primary" />
          Selected Works
        </div>
        <h2 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight mb-6 text-white">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-slate-400 text-lg lg:text-xl font-normal max-w-xl">
          A selection of projects spanning server security, AI-powered verification, developer tooling, and full-stack web apps.
        </p>
      </div>

      {/* Project List */}
      <ul className="divide-y divide-white/5">
        {projects.map((project, i) => {
          const Icon = project.linkIcon === "github" ? Github : ExternalLink
          return (
            <motion.li
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col md:flex-row md:items-start gap-4 md:gap-10 py-8 md:hover:pl-2 transition-all duration-300 relative"
              >
                {/* Index & Title (grouped for mobile) */}
                <div className="flex items-center md:items-start gap-4 md:gap-0">
                  <span className="text-xs font-mono text-slate-600 group-hover:text-primary transition-colors duration-300 shrink-0 w-8 md:w-6 md:pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  
                  <div className="flex items-center justify-between flex-1 md:flex-none md:w-40 lg:w-52 md:pt-0.5">
                    <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    {/* Mobile icon */}
                    <Icon className="md:hidden size-5 text-slate-600 group-hover:text-primary transition-colors" />
                  </div>
                </div>

                {/* Description + Tags */}
                <div className="flex-1 min-w-0 md:pl-0 pl-12 md:ml-0">
                  <p className="text-slate-400 text-sm leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-slate-500 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Desktop Link icon */}
                <Icon className="hidden md:block size-5 text-slate-600 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0" />
              </a>
            </motion.li>
          )
        })}
      </ul>
    </section>
  )
}
