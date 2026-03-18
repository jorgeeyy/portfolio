import { motion } from "framer-motion"

const techCategories = [
  {
    name: "Backend & Systems",
    techs: [
      { name: "Python", logo: "https://cdn.simpleicons.org/python" },
      { name: "FastAPI", logo: "https://cdn.simpleicons.org/fastapi" },
      { name: "Django", logo: "https://cdn.simpleicons.org/django" },
      { name: "Laravel", logo: "https://cdn.simpleicons.org/laravel" },
      { name: "PHP", logo: "https://cdn.simpleicons.org/php" },
      { name: ".NET", logo: "https://cdn.simpleicons.org/dotnet" },
    ],
  },
  {
    name: "Frontend & Mobile",
    techs: [
      { name: "React", logo: "https://cdn.simpleicons.org/react" },
      { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript" },
      { name: "Flutter", logo: "https://cdn.simpleicons.org/flutter" },
    ],
  },
  {
    name: "Database & Infrastructure",
    techs: [
      { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql" },
      { name: "Linux", logo: "https://cdn.simpleicons.org/linux/white" },
    ],
  },
]

export const EngineeringArsenal = () => {
  return (
    <section className="py-24 px-6 lg:px-40 max-w-[1400px] mx-auto w-full bg-background-dark overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
      >
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-primary font-bold mb-4 uppercase tracking-widest text-xs">
            <span className="h-[2px] w-8 bg-primary"></span>
            Technical Expertise
          </div>
          <h2 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight text-white mb-4">
            Engineering <span className="text-primary">Arsenal</span>
          </h2>
          <p className="text-slate-400 text-lg font-normal max-w-xl">
            A comprehensive stack of tools and frameworks utilized to build scalable, high-performance digital solutions.
          </p>
        </div>
      </motion.div>
      
      <div className="grid gap-12">
        {techCategories.map((category, catIdx) => (
          <motion.div 
            key={category.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIdx * 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest flex items-center gap-4">
              {category.name}
              <div className="h-px flex-1 bg-white/5"></div>
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {category.techs.map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group p-6 rounded-2xl bg-[#1a2234] border border-white/5 hover:border-primary/50 transition-all cursor-default overflow-hidden"
                >
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute -right-4 -top-4 w-12 h-12 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all"></div>
                  
                  <div className="relative z-10 flex flex-col items-center gap-4">
                    <div className="size-12 rounded-xl bg-background-dark/50 flex items-center justify-center border border-white/5 shadow-inner">
                      <img 
                        src={tech.logo} 
                        alt={tech.name} 
                        className="size-6 object-contain" 
                      />
                    </div>
                    <span className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
