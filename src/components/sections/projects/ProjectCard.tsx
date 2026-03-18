import { motion } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  // link: string
  isLarge?: boolean
  isTall?: boolean
  linkText?: string
  linkIcon?: "arrow" | "external"
}

export const ProjectCard = ({
  title,
  description,
  image,
  tags,
  // link,
  isLarge,
  isTall,
  linkText = "View Case Study",
  linkIcon = "arrow",
}: ProjectCardProps) => {
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-xl bg-[#1a2234] cursor-pointer
        ${isLarge ? "col-span-12 lg:col-span-8 row-span-2" : ""}
        ${isTall ? "col-span-12 lg:col-span-4 row-span-3" : ""}
        ${!isLarge && !isTall ? "col-span-12 md:col-span-6 lg:col-span-4 row-span-2" : ""}
      `}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90"
        style={{ backgroundImage: `url('${image}')` }}
      />
      
      {/* Reveal Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-[#101622]/95 via-[#101622]/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
        <div className="flex gap-2 mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          {tags.map((tag) => (
            <span 
              key={tag}
              className="px-3 py-1 bg-primary/20 backdrop-blur-md border border-primary/30 rounded text-primary text-xs font-bold uppercase tracking-tighter"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className={`font-black text-white mb-2 group-hover:text-primary transition-colors
          ${isLarge ? "text-3xl lg:text-4xl" : "text-2xl"}
        `}>
          {title}
        </h3>
        
        <p className="text-white/70 text-lg max-w-md line-clamp-2 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
          {description}
        </p>
        
        <div className="mt-6 flex items-center gap-3 text-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          {linkText} 
          {linkIcon === "arrow" ? <ArrowRight className="size-5" /> : <ExternalLink className="size-5" />}
        </div>
      </div>
    </motion.div>
  )
}
