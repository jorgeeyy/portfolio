import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import logo from "@/assets/logo-new.png"

export const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full flex items-center justify-between border-b border-white/10 bg-background-dark/80 backdrop-blur-md px-6 py-4 md:px-20">
      <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
        <div className="bg-transparent p-0">
          <img 
            src={logo} 
            alt="Logo" 
            className="h-10 w-auto object-contain mix-blend-multiply" 
          />
        </div>
      </Link>
      <div className="hidden md:flex flex-1 justify-end items-center gap-10">
        <nav className="flex items-center gap-8">
          <Link className="text-white/70 hover:text-white text-sm font-medium transition-colors" to="/projects">Projects</Link>
          {/* <a className="text-white/70 hover:text-white text-sm font-medium transition-colors" href="#">Experience</a> */}
          {/* <a className="text-white/70 hover:text-white text-sm font-medium transition-colors" href="#">Stack</a> */}
          <Link className="text-white/70 hover:text-white text-sm font-medium transition-colors" to="/contact">Contact</Link>
        </nav>
        <Button className="bg-primary text-white hover:bg-primary/90 shadow-[0_0_20px_rgba(19,91,236,0.4)]">
          Hire Me
        </Button>
      </div>
    </header>
  )
}
