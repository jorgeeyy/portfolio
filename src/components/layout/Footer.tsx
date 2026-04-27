export const Footer = () => {
  return (
    <footer className="border-t border-border/70 py-8 px-6 md:px-12 lg:px-20 w-full">
      <div className="max-w-350 mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} — Built with precision.
        </span>

        <div className="flex gap-6">
          {["GitHub", "LinkedIn", "Twitter"].map((social) => (
            <a
              key={social}
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground/75 transition-colors duration-200"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
