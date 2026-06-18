import { Mail, Send, GitHub, LinkedIn, WhatsApp } from "../../icons"

const waMsg = encodeURIComponent("Hi George, I'm interested in working with you on a project. Let me know if you're available!")

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-16 max-w-7xl mx-auto w-full">
      <div className="max-w-2xl mx-auto animate-fade-up">
        <p className="text-xs text-muted-fg tracking-[0.2em] uppercase mb-3">Contact</p>
        <h2 className="font-heading text-3xl font-semibold tracking-tight mb-3">Let's work together</h2>
        <p className="text-sm text-muted-fg leading-relaxed mb-12 max-w-md">
          Have a project in mind or just want to say hello? Drop me a message.
        </p>
      </div>

      <div className="grid md:grid-cols-[1fr_2fr] gap-12 max-w-2xl mx-auto">
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <Mail className="size-4 text-muted-fg mt-0.5 shrink-0" />
            <div>
              <p className="text-xs text-muted-fg uppercase tracking-wider mb-0.5">Email</p>
              <p className="text-sm text-fg/75">george@example.com</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <WhatsApp className="size-4 text-muted-fg mt-0.5 shrink-0" />
            <div>
              <p className="text-xs text-muted-fg uppercase tracking-wider mb-0.5">WhatsApp</p>
              <a
                href={`https://wa.me/233202994320?text=${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-fg/75 hover:text-fg transition-colors"
              >
                +233 20 299 4320
              </a>
            </div>
          </div>
          <div className="flex gap-3">
            <a href="https://github.com/jorgeeyy" target="_blank" rel="noopener noreferrer" className="text-muted-fg hover:text-fg transition-colors" aria-label="GitHub">
              <GitHub className="size-5" />
            </a>
            <a href="https://linkedin.com/george-inkoom/" target="_blank" rel="noopener noreferrer" className="text-muted-fg hover:text-fg transition-colors" aria-label="LinkedIn">
              <LinkedIn className="size-5" />
            </a>
            <a href={`https://wa.me/233202994320?text=${waMsg}`} target="_blank" rel="noopener noreferrer" className="text-muted-fg hover:text-fg transition-colors" aria-label="WhatsApp">
              <WhatsApp className="size-5" />
            </a>
          </div>
        </div>

        <form className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-muted-fg uppercase tracking-wider mb-1 block">Name</label>
              <input
                type="text"
                className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-sm text-fg placeholder:text-muted-fg focus:outline-none focus:border-fg/30 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs text-muted-fg uppercase tracking-wider mb-1 block">Email</label>
              <input
                type="email"
                className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-sm text-fg placeholder:text-muted-fg focus:outline-none focus:border-fg/30 transition-colors"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label className="text-xs text-muted-fg uppercase tracking-wider mb-1 block">Message</label>
            <textarea
              rows={4}
              className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-sm text-fg placeholder:text-muted-fg focus:outline-none focus:border-fg/30 transition-colors resize-none"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-fg text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            Send message
            <Send className="size-3.5" />
          </button>
        </form>
      </div>
    </section>
  )
}
