import { Button } from "@/components/ui/button"
import { GitBranch, Linkedin } from "lucide-react"

export const HeroContent = () => {
  return (
    <section className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-16 py-12 relative">
      <div className="max-w-[600px] flex flex-col gap-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            <span className="size-2 rounded-full bg-primary animate-ping"></span>
            <span className="text-xs font-bold text-primary tracking-widest uppercase">Available for projects</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter text-white">
            Crafting Digital <br/>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-400">Experiences</span> <br/>
            with Code.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 font-normal max-w-lg leading-relaxed">
            Software Engineer specializing in high-performance web and mobile applications with a focus on modern animations and motion.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <Button size="lg" className="bg-primary text-white h-14 px-8 text-lg font-bold shadow-[0_10px_30px_rgba(19,91,236,0.4)] hover:-translate-y-1 transition-all">
            View Projects
          </Button>
          <div className="flex gap-4">
            <a href="#" className="flex items-center justify-center size-12 rounded-full border border-white/10 hover:bg-white/5 transition-all text-white/70 hover:text-white">
              <GitBranch className="size-5" />
            </a>
            <a href="#" className="flex items-center justify-center size-12 rounded-full border border-white/10 hover:bg-white/5 transition-all text-white/70 hover:text-white">
              <Linkedin className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
