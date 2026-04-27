"use client"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, Moon, Sun, X } from "lucide-react"
import logo from "@/assets/logo-new.png"

const navLinks = [
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
]

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">("dark")
  const location = useLocation()

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const initialTheme = savedTheme ?? (systemPrefersDark ? "dark" : "light")

    setTheme(initialTheme)
    document.documentElement.classList.toggle("dark", initialTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark"
    setTheme(nextTheme)
    document.documentElement.classList.toggle("dark", nextTheme === "dark")
    localStorage.setItem("theme", nextTheme)
  }

  return (
    <header className="fixed top-0 z-50 w-full bg-background/90 border-b border-border/60 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-5 md:px-16 max-w-350 mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-70 transition-opacity duration-200" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Logo" className="h-8 w-auto object-contain" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-10">
            {navLinks.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className={`text-sm transition-colors duration-200 ${
                  location.pathname === to
                    ? "text-foreground"
                    : "text-foreground/50 hover:text-foreground/80"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <button
            onClick={toggleTheme}
            className="inline-flex items-center justify-center size-9 rounded-md border border-border/70 text-foreground/65 hover:text-foreground hover:border-border transition-colors"
            aria-label="Toggle light and dark mode"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center size-9 rounded-md border border-border/70 text-foreground/65 hover:text-foreground hover:border-border transition-colors"
            aria-label="Toggle light and dark mode"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>

          <button
            className="flex items-center justify-center size-9 text-foreground/65 hover:text-foreground transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-sm px-6 py-6 flex flex-col gap-5">
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm transition-colors duration-200 ${
                location.pathname === to
                  ? "text-foreground"
                  : "text-foreground/50 hover:text-foreground"
              }`}
            >
              {label}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="inline-flex w-fit items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
            Switch to {theme === "dark" ? "light" : "dark"} mode
          </button>
        </nav>
      )}
    </header>
  )
}
