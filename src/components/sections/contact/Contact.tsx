import { Mail, GitHub, LinkedIn, WhatsApp } from "../../icons"

const waMsg = encodeURIComponent("Hi George, I'm interested in working with you on a project. Let me know if you're available!")

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-16 max-w-7xl mx-auto w-full">
      <div className="max-w-md mx-auto text-center animate-fade-up">
        <p className="text-xs text-muted-fg tracking-[0.2em] uppercase mb-3">Contact</p>
        <h2 className="font-heading text-3xl font-semibold tracking-tight mb-4">Get in touch</h2>
        <p className="text-sm text-muted-fg leading-relaxed mb-10">
          I'm currently open to new opportunities and collaborations. Reach out and I'll get back to you as soon as I can.
        </p>

        <div className="space-y-5 mb-10">
          <div className="flex items-center justify-center gap-3">
            <Mail className="size-4 text-muted-fg shrink-0" />
            <div>
              <p className="text-xs text-muted-fg mb-0.5">Email</p>
              <p className="text-sm text-fg/80">jqubez@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <WhatsApp className="size-4 text-muted-fg shrink-0" />
            <div>
              <p className="text-xs text-muted-fg mb-0.5">WhatsApp</p>
              <a
                href={`https://wa.me/233202994320?text=${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-fg/80 hover:text-fg transition-colors"
              >
                +233 20 299 4320
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <a href="https://github.com/jorgeeyy" target="_blank" rel="noopener noreferrer" className="text-muted-fg hover:text-fg transition-colors" aria-label="GitHub">
            <GitHub className="size-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-fg hover:text-fg transition-colors" aria-label="LinkedIn">
            <LinkedIn className="size-5" />
          </a>
          <a href={`https://wa.me/233202994320?text=${waMsg}`} target="_blank" rel="noopener noreferrer" className="text-muted-fg hover:text-fg transition-colors" aria-label="WhatsApp">
            <WhatsApp className="size-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
