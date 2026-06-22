import { useState } from "react"
import { Mail, Send, GitHub, LinkedIn, WhatsApp } from "../../icons"

const waMsg = encodeURIComponent("Hi George, I'm interested in working with you on a project. Let me know if you're available!")

type Status = "idle" | "loading" | "success" | "error"

export const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [honeypot, setHoneypot] = useState("")
  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const canSubmit = name && email && subject && message

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!canSubmit) return

    setStatus("loading")
    setErrorMsg("")

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message, honeypot }),
      })

      if (!res.ok) {
        let msg = "Something went wrong."
        try {
          const body = await res.json()
          msg = body.error ?? msg
        } catch {
          msg = res.statusText || msg
        }
        throw new Error(msg)
      }

      setStatus("success")
      setName("")
      setEmail("")
      setSubject("")
      setMessage("")
      setHoneypot("")
    } catch (err) {
      setStatus("error")
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    }
  }

  return (
    <section id="contact" className="py-24 px-6 md:px-16 max-w-7xl mx-auto w-full">
      <div className="max-w-2xl mx-auto animate-fade-up">
        <p className="text-xs text-muted-fg tracking-[0.2em] uppercase mb-3">Contact</p>
        <h2 className="font-heading text-3xl font-semibold tracking-tight mb-12">Get in touch</h2>
      </div>

      <div className="grid md:grid-cols-[1fr_2fr] gap-12 max-w-2xl mx-auto">
        <div className="space-y-8">
          <div>
            <p className="text-sm text-muted-fg leading-relaxed mb-6">
              I'm currently open to new opportunities and collaborations. Reach out and I'll get back to you as soon as I can.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="size-4 text-muted-fg mt-0.5 shrink-0" />
            <div>
              <p className="text-xs text-muted-fg mb-0.5">Email</p>
              <p className="text-sm text-fg/80">ginkoom31@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <WhatsApp className="size-4 text-muted-fg mt-0.5 shrink-0" />
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

          <div className="flex gap-4 pt-2">
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

        {status === "success" ? (
          <div className="flex flex-col items-center justify-center text-center py-12">
            <div className="size-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
              <Send className="size-5 text-emerald-500" />
            </div>
            <h3 className="font-heading text-lg font-semibold mb-1">Message sent!</h3>
            <p className="text-sm text-muted-fg">I'll get back to you as soon as I can.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="text-sm text-fg/80 mb-1.5 block">Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-surface border border-border rounded-md px-4 py-2.5 text-sm text-fg placeholder:text-muted-fg focus:outline-none focus:border-fg/40 transition-colors"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm text-fg/80 mb-1.5 block">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-surface border border-border rounded-md px-4 py-2.5 text-sm text-fg placeholder:text-muted-fg focus:outline-none focus:border-fg/40 transition-colors"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="text-sm text-fg/80 mb-1.5 block">Subject</label>
              <input
                id="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-surface border border-border rounded-md px-4 py-2.5 text-sm text-fg placeholder:text-muted-fg focus:outline-none focus:border-fg/40 transition-colors"
                placeholder="What's this about?"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm text-fg/80 mb-1.5 block">Message</label>
              <textarea
                id="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-surface border border-border rounded-md px-4 py-2.5 text-sm text-fg placeholder:text-muted-fg focus:outline-none focus:border-fg/40 transition-colors resize-none"
                placeholder="Tell me about your project or idea..."
                required
              />
            </div>

            <div aria-hidden="true" className="absolute -left-2499.75 opacity-0">
              <label htmlFor="honeypot">Leave this empty</label>
              <input id="honeypot" name="honeypot" type="text" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} tabIndex={-1} autoComplete="off" />
            </div>

            {status === "error" && (
              <p className="text-sm text-red-500">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={!canSubmit || status === "loading"}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-fg text-sm font-medium rounded-md hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Sending..." : "Send message"}
              <Send className="size-3.5" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
