export const Footer = () => {
  return (
    <footer className="border-t border-border/70 py-8 px-6 md:px-16 max-w-7xl mx-auto w-full">
      <p className="text-xs text-muted-fg text-center">
        &copy; {new Date().getFullYear()} George Inkoom. Built with precision.
      </p>
    </footer>
  )
}
