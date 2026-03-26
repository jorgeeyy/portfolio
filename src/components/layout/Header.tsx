"use client"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import logo from "@/assets/logo-new.png"

const navLinks = [
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
]

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background-dark/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-4 md:px-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Logo" className="h-10 w-auto object-contain mix-blend-multiply" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm font-medium transition-colors ${
                location.pathname === to ? "text-white" : "text-white/60 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center size-10 rounded-lg border border-white/10 text-white/70 hover:text-white hover:bg-white/5 transition-all"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className="md:hidden border-t border-white/10 bg-background-dark/95 backdrop-blur-md px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={`text-base font-semibold py-2 transition-colors ${
                location.pathname === to ? "text-white" : "text-white/60 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
