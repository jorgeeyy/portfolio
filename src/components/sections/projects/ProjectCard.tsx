import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  link?: string
  isLarge?: boolean
  isHalf?: boolean
  linkText?: string
  linkIcon?: "arrow" | "external" | "github"
}

export const ProjectCard = ({
  title,
  description,
  tags,
  link,
  isLarge,
  isHalf,
  linkText = "View on GitHub",
  linkIcon = "github",
}: ProjectCardProps) => {
  const colClass = isLarge
    ? "col-span-12 lg:col-span-8 row-span-3"
    : isHalf
    ? "col-span-12 md:col-span-6 row-span-2"
    : "col-span-12 md:col-span-6 lg:col-span-4 row-span-2"

  const LinkIcon = linkIcon === "arrow" ? ArrowRight : linkIcon === "external" ? ExternalLink : Github

  return (
    <motion.a
      href={link ?? "#"}
      target={link ? "_blank" : undefined}
      rel="noopener noreferrer"
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-8 lg:p-10 cursor-pointer ${colClass}`}
      whileHover={{ scale: 1.015, borderColor: "rgba(255,255,255,0.12)" }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      {/* Top accent line that animates in on hover */}
      <div className="absolute top-0 left-0 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-500 rounded-t-2xl" />

      {/* Subtle radial glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top left, rgba(99,102,241,0.07) 0%, transparent 70%)" }}
      />

      {/* Tags */}
      <div className="flex gap-2 flex-wrap mb-6">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-semibold uppercase tracking-wider"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title & Description */}
      <div className="flex-1">
        <h3
          className={`font-black text-foreground mb-3 group-hover:text-primary transition-colors duration-300 ${
            isLarge ? "text-3xl lg:text-4xl" : "text-2xl"
          }`}
        >
          {title}
        </h3>
        <p className="text-muted-foreground text-base leading-relaxed">
          {description}
        </p>
      </div>

      {/* Footer link */}
      <div className="mt-8 flex items-center gap-2 text-muted-foreground group-hover:text-primary font-semibold text-sm transition-colors duration-300">
        {linkText}
        <LinkIcon className="size-4 group-hover:translate-x-1 transition-transform duration-300" />
      </div>
    </motion.a>
  )
}
