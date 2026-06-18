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
      { name: "Linux", logo: "https://cdn.simpleicons.org/linux" },
      { name: "Docker", logo: "https://cdn.simpleicons.org/docker" },
    ],
  },
]

export const EngineeringArsenal = () => {
  return (
    <section id="stack" className="py-24 px-6 md:px-16 max-w-7xl mx-auto w-full">
      <div className="max-w-2xl mx-auto animate-fade-up">
        <p className="text-xs text-muted-fg tracking-[0.2em] uppercase mb-3">Stack</p>
        <h2 className="font-heading text-3xl font-semibold tracking-tight mb-16">Tools & technologies</h2>
      </div>

      <div className="flex flex-col gap-12 max-w-2xl mx-auto">
        {techCategories.map((category, catIdx) => (
          <div
            key={category.name}
            className="animate-fade-up"
            style={{ animationDelay: `${catIdx * 80}ms`, animationFillMode: "both" }}
          >
            <div className="flex items-center gap-4 mb-5">
              <span className="text-xs text-muted-fg tracking-[0.15em] uppercase whitespace-nowrap">
                {category.name}
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="flex flex-wrap gap-2">
              {category.techs.map((tech) => (
                <span
                  key={tech.name}
                  className="inline-flex items-center gap-2 px-3 py-1.5 text-sm text-fg/75 border border-border/80 bg-muted/40 rounded-full hover:border-fg/40 hover:text-fg transition-colors cursor-default"
                >
                  <img src={tech.logo} alt={tech.name} className="size-4 object-contain opacity-70 dark:invert" />
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
