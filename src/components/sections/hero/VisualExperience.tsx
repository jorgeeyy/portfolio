import { motion } from "framer-motion"
import { Code2, Smartphone } from "lucide-react"
import avatar from "@/assets/avatar.png"

export const VisualExperience = () => {
  return (
    <section className="relative w-full lg:w-1/2 flex items-center justify-center lg:justify-start p-8 md:p-12 lg:pl-6 xl:pl-8 overflow-hidden min-h-80 lg:min-h-0">
      <motion.div
        className="relative w-60 h-60 md:w-80 md:h-80 lg:w-100 lg:h-100"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Rotating border frames */}
        <motion.div
          className="absolute inset-0 rounded-2xl border border-border"
          initial={{ rotate: 12 }}
          whileHover={{ rotate: 45 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-0 rounded-2xl border border-border/60"
          initial={{ rotate: -6 }}
          whileHover={{ rotate: -18 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />

        {/* Avatar */}
        <motion.div
          className="w-full h-full rounded-2xl bg-center bg-cover overflow-hidden"
          style={{ backgroundImage: `url(${avatar})` }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* Subtle gradient overlay at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-background/70 to-transparent rounded-b-2xl pointer-events-none" />

        {/* Floating badges */}
        <motion.div
          className="absolute -top-4 -right-4 flex items-center justify-center size-10 rounded-xl bg-background border border-border"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Code2 className="size-4 text-muted-foreground" />
        </motion.div>

        <motion.div
          className="absolute -bottom-4 -left-4 flex items-center justify-center size-10 rounded-xl bg-background border border-border"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        >
          <Smartphone className="size-4 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  )
}
