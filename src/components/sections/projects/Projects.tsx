import { ProjectCard } from "./ProjectCard"

const projects = [
  {
    title: "NovaCommerce Dashboard",
    description: "A high-performance e-commerce management system with real-time analytics and multi-store support.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjtkQ8wyOheht6ar5UE0H0PRIr6xh7ZTCBxZviRnpP7ZuVOWd7HN0mtZcmISG7cbr_HqoT9u_Xorceg_odFvw8QWEe5-ytgnSuhdnIg9nAuc4KZx2ReXn4n4Lo3UavZiQ17K5bN-uwS-zIilkGrh4Pr5_-dSCtmj2R_x27isL05oFw0tw6YfcUtQB0hWBL8K04UkajJBUkq5ezA0PcQHAmV7_s0Fd1SinaCIh0H_KdMdg_zQRvwJ2b5LRkpBxglodlzyNJl6XWYlB2",
    tags: ["Next.js", "Tailwind CSS", "Stripe"],
    link: "#",
    isLarge: true,
  },
  {
    title: "Zenith Finance App",
    description: "Personalized wealth tracking and investment insights with smooth native animations.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpu2uwZ1QUyTUG53Dztj-SBGCZnSxaz9iPK_YmCrP3m3Zsv_p9jkFJso_2dh_inTCF5lgSr1YCGdF8ZiCiEm0b9_VgoBz-qLoaBLNMBWJx299K3KFc9r17lSG3FHd_3z4XE6TZLx8Sv0OvAA4mXuXaOxZK5flJOG319Iw_F6sz_r-UMUwalsNiV-wO5ha5wwp1NGM90fif2dWHW6OmIPRL_wVy-7lgkt9i20V8ci1lYtwVvUYjLbkK3lB-kh3Qkj0xu0ZKBREY2guj",
    tags: ["React Native", "TypeScript"],
    link: "#",
    isTall: true,
    linkText: "Open App",
    linkIcon: "external" as const,
  },
  {
    title: "EtherView Analytics",
    description: "Blockchain visualization and wallet explorer tool.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhiu5iWJvuNzs2B_cGIggWW9ur__mz2AeE1n8Kxk_AESP2MjpGbIqw7Fo1LgppwffajOgk-KThgo4Ciik8698csxmDHw129D3Ixum4s_FkjMiS6-uXZfX5yNCtgaFzOkeQqShbb9OFG3mqlnBK0b9CrmJn1eoNyke3zE_HrzEZPS_7XeB8KnoLmxR2HzOznVe3agCqHBYHIWpjKrq7VOqyUgdCTRZwxwSbTkE__LBP4J3ItSoKCYHMetF9aVLCGCoVpkrvVnfeiTjn",
    tags: ["Web3"],
    link: "#",
  },
  {
    title: "Scale CRM",
    description: "Enterprise-ready customer relation management platform.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCX4SPFt8zgmaJ7cervj2cDynXuzcL3vazQJ1mdOqLrecUVRI3Rn5Tx1nHOlFd3rhT8hVtUM5Y5wT4_RqKembdeM58JExqz2wJDKp7P2-TGejeBmrGRqcu1kULiGSfg8xmjuL6tEF4jgfQdK5jFtRH4MvmlNLYbas6KjaZBebV1ugzTN3Xu3srb62nHlNenmwhBTXBKIEyMuqE_DjhgIga62g0k8Dkh7VAIiQAvcllXABIXlcnY8crv3aZZ2Y-mdNkCRrH3TPAQWXoh",
    tags: ["SaaS"],
    link: "#",
  },
]

export const Projects = () => {
  return (
    <section className="py-12 lg:py-20 px-6 lg:px-40 max-w-[1400px] mx-auto w-full bg-background-dark">
      {/* Page Heading */}
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl text-left">
          <div className="flex items-center gap-2 text-primary font-bold mb-4 uppercase tracking-widest text-xs">
            <span className="h-[2px] w-8 bg-primary"></span>
            Selected Works
          </div>
          <h2 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight mb-6 text-white">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg lg:text-xl font-normal max-w-xl">
            A curation of high-performance web and mobile applications focusing on interactive experiences and scalable architecture.
          </p>
        </div>

        {/* Category Chips */}
        <div className="flex gap-2 flex-wrap pb-2">
          <button className="flex h-10 items-center justify-center rounded-full bg-primary text-white px-6 text-sm font-semibold cursor-pointer">
            All
          </button>
          {["Web", "Mobile", "UI/UX"].map((cat) => (
            <button 
              key={cat}
              className="flex h-10 items-center justify-center rounded-full bg-[#232f48] text-slate-300 px-6 text-sm font-medium hover:bg-primary/20 transition-colors cursor-pointer"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Asymmetrical Grid Gallery */}
      <div className="grid grid-cols-12 gap-6 auto-rows-[100px]">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}
