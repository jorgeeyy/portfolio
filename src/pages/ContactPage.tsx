import { motion } from "framer-motion"
import { Send, Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react"

export const ContactPage = () => {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 lg:px-20 min-h-screen text-foreground">
      <div className="max-w-225 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase mb-4">Contact</p>
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
            Let's work together
          </h1>
          <p className="mt-4 text-sm text-muted-foreground max-w-md leading-relaxed">
            Have a project in mind or just want to say hello? Fill out the form or reach out directly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-10"
          >
            <div className="space-y-5">
              {[
                { icon: Mail, label: "Email", value: "hello@devportfolio.com" },
                { icon: MapPin, label: "Location", value: "San Francisco, CA" },
              ].map((info) => (
                <div key={info.label} className="flex items-start gap-3">
                  <info.icon className="size-4 text-muted-foreground mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">{info.label}</p>
                    <p className="text-sm text-foreground/75">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Follow</p>
              <div className="flex gap-4">
                {[
                  { Icon: Github, label: "GitHub" },
                  { Icon: Linkedin, label: "LinkedIn" },
                  { Icon: Twitter, label: "Twitter" },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="text-muted-foreground hover:text-foreground/70 transition-colors duration-200"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs text-muted-foreground uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/20 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs text-muted-foreground uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/20 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-muted-foreground uppercase tracking-wider">Subject</label>
              <input
                type="text"
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/20 transition-colors"
                placeholder="Project Inquiry"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-muted-foreground uppercase tracking-wider">Message</label>
              <textarea
                rows={6}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/20 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-medium rounded-lg hover:opacity-90 transition-opacity duration-200"
            >
              Send message
              <Send className="size-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  )
}
