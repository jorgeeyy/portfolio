import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export const FooterCTA = () => {
  return (
    <section className="px-6 lg:px-40 max-w-[1400px] mx-auto w-full bg-background-dark pb-20">
      <div className="p-12 rounded-2xl bg-primary relative overflow-hidden group">
        <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl transition-transform duration-1000 group-hover:scale-125"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Have a project in mind?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl">
            Let's build something extraordinary together. I'm currently available for freelance projects and consulting.
          </p>
          
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 font-black rounded-full h-14 px-8 transition-all hover:scale-105 active:scale-95 shadow-xl"
          >
            Start a Conversation <Mail className="ml-2 size-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
