export const Footer = () => {
  return (
    <footer className="border-t border-[#232f48] py-10 px-6 lg:px-40 bg-[#0a0f1a] w-full">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm font-medium text-slate-500">
          © {new Date().getFullYear()} DevPortfolio. Built with Precision.
        </div>
        
        <div className="flex gap-6">
          {["GitHub", "LinkedIn", "Twitter", "Dribbble"].map((social) => (
            <a 
              key={social}
              href="#" 
              className="text-slate-500 text-sm font-medium hover:text-primary transition-all"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
