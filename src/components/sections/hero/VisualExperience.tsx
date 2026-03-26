import { motion } from "framer-motion"
import { Code, Smartphone } from "lucide-react"
import avatar from "@/assets/avatar.png"

export const VisualExperience = () => {
  return (
    <section className="relative w-full lg:w-1/2 flex items-center justify-center p-6 md:p-8 bg-linear-to-br from-background-dark via-[#111] to-background-dark overflow-hidden min-h-[280px] lg:min-h-0">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#135bec_0%,transparent_70%)] blur-[120px]"></div>
      </div>
      
      {/* Stylized 3D Abstract Object Visual */}
      <div className="relative z-10 w-[200px] h-[200px] md:w-[340px] md:h-[340px] lg:w-[450px] lg:h-[450px] group">
        <motion.div 
          className="absolute inset-0 rounded-3xl border-2 border-primary/40 shadow-[0_0_30px_rgba(19,91,236,0.2)]"
          initial={{ rotate: 12 }}
          whileHover={{ rotate: 45 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute inset-0 rounded-3xl border-2 border-white/10"
          initial={{ rotate: -6 }}
          whileHover={{ rotate: -12 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <motion.div 
          className="w-full h-full rounded-2xl bg-center bg-cover border border-white/20 shadow-2xl overflow-hidden"
          style={{ backgroundImage: `url(${avatar})` }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7 }}
        />

        {/* Floating Tech Badges */}
        <motion.div 
          className="absolute -top-4 -right-4 bg-background-dark p-3 rounded-xl border border-white/10 shadow-lg"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Code className="size-6 text-primary" />
        </motion.div>
        <motion.div 
          className="absolute -bottom-6 -left-6 bg-background-dark p-3 rounded-xl border border-white/10 shadow-lg"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Smartphone className="size-6 text-primary" />
        </motion.div>
      </div>
    </section>
  )
}
