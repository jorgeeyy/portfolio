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
    <section className="py-28 px-6 md:px-12 lg:px-20 max-w-350 mx-auto w-full">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-20"
      >
        <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase mb-4">Stack</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
          Tools & technologies
        </h2>
      </motion.div>

      <div className="flex flex-col gap-16">
        {techCategories.map((category, catIdx) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIdx * 0.08, duration: 0.4 }}
          >
            {/* Category label + divider */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs text-muted-foreground tracking-[0.15em] uppercase whitespace-nowrap">
                {category.name}
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            {/* Tech items */}
            <div className="flex flex-wrap gap-3">
              {category.techs.map((tech) => (
                <div
                  key={tech.name}
                  className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-border bg-muted/40 hover:border-foreground/20 hover:bg-muted/70 transition-all duration-200 cursor-default"
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="size-4 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-200"
                  />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
