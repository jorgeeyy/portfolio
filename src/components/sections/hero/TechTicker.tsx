import { motion } from "framer-motion"
import { Terminal, Smartphone, Database, Shield, Globe, Cloud } from "lucide-react"

const techs = [
  { name: "React", icon: Terminal },
  { name: "Flutter", icon: Smartphone },
  { name: "Node.js", icon: Database },
  { name: "TypeScript", icon: Shield },
  { name: "Next.js", icon: Globe },
  { name: "AWS", icon: Cloud },
]

export const TechTicker = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-white/5 bg-background-dark py-6">
      <motion.div 
        className="flex gap-12 px-6 whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {[...techs, ...techs, ...techs].map((tech, i) => (
          <div key={i} className="flex items-center gap-2">
            <tech.icon className="size-5 text-primary" />
            <span className="text-white/60 text-sm font-bold uppercase tracking-[0.2em]">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
