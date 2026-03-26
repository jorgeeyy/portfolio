import { Button } from "@/components/ui/button"
import { GitBranch, Linkedin } from "lucide-react"
import { Link } from "react-router-dom"

export const HeroContent = () => {
  return (
    <section className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start px-6 md:px-12 lg:px-16 py-10 lg:py-12 relative">
      <div className="w-full max-w-[600px] flex flex-col gap-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            <span className="size-2 rounded-full bg-primary animate-ping" />
            <span className="text-xs font-bold text-primary tracking-widest uppercase">Available for projects</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tighter text-white text-center lg:text-left">
            Crafting Digital <br/>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-400">Experiences</span> <br/>
            with Code.
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-slate-400 font-normal max-w-lg leading-relaxed text-center lg:text-left">
            Software Engineer specializing in high-performance web and mobile applications with a focus on modern animations and motion.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
          <Link to="/projects">
            <Button size="lg" className="bg-primary text-white h-12 cursor-pointer px-6 text-base font-bold shadow-[0_10px_30px_rgba(19,91,236,0.4)] hover:-translate-y-1 transition-all">
              View Projects
            </Button>
          </Link>
          <div className="flex gap-3">
            <a href="#" className="flex items-center justify-center size-11 rounded-full border border-white/10 hover:bg-white/5 transition-all text-white/70 hover:text-white">
              <GitBranch className="size-5" />
            </a>
            <a href="#" className="flex items-center justify-center size-11 rounded-full border border-white/10 hover:bg-white/5 transition-all text-white/70 hover:text-white">
              <Linkedin className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
