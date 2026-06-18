import { ArrowUpRight } from "../../icons"

const projects = [
  {
    title: "Security Bot",
    description:
      "A real-time server security system that detects and blocks brute-force attacks, monitors SSH intrusions, and fires instant Telegram alerts. Backed by MySQL for persistent logging and IP whitelisting.",
    tags: ["Python", "FastAPI", "Docker", "MySQL", "Redis", "Telegram"],
    link: "https://github.com/jorgeeyy/security-bot",
  },
  {
    title: "NexusOCR",
    description:
      "A fast, locally-hosted Document Parsing and OCR web app built with Django and Tailwind CSS. Extracts raw text from dense images and converts complex PDFs into editable Word files with zero layout loss.",
    tags: ["Python", "Django", "Tailwind CSS"],
    link: "https://github.com/jorgeeyy/NexusOCR",
  },
  {
    title: "epub2pdf",
    description:
      "A lightweight Python CLI utility for converting EPUB e-books to PDF with clean formatting. MIT-licensed and open source.",
    tags: ["Python", "CLI"],
    link: "https://github.com/jorgeeyy/epub2pdf",
  },
  {
    title: "TipsyMixer",
    description:
      "A cocktail recipe discovery web app with curated drink recipes, ingredient breakdowns, and an interactive mixing experience.",
    tags: ["PHP", "TypeScript", "MySQL"],
    link: "https://tipsymixergh.com",
  },
]

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-16 max-w-7xl mx-auto w-full">
      <div className="max-w-2xl mx-auto animate-fade-up">
        <p className="text-xs text-muted-fg tracking-[0.2em] uppercase mb-3">Work</p>
        <h2 className="font-heading text-3xl font-semibold tracking-tight mb-16">Selected projects</h2>
      </div>

      <ul className="max-w-2xl mx-auto">
        {projects.map((project, i) => (
          <li
            key={project.title}
            className="border-t border-border last:border-b animate-fade-up"
            style={{ animationDelay: `${i * 60}ms`, animationFillMode: "both" }}
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 sm:gap-6 py-6 hover:opacity-70 transition-opacity"
            >
              <span className="text-xs font-mono text-muted-fg shrink-0 pt-0.5 w-5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3 mb-1.5">
                  <h3 className="font-heading text-base font-medium">{project.title}</h3>
                  <ArrowUpRight className="size-4 text-muted-fg shrink-0 mt-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <p className="text-sm text-muted-fg leading-relaxed mb-3">{project.description}</p>
                <div className="flex gap-1.5 flex-wrap">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-xs font-mono text-fg/70 border border-border bg-muted/50 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
