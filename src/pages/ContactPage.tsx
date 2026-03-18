import { motion } from "framer-motion"
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export const ContactPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <div className="pt-32 pb-20 px-6 lg:px-40 min-h-screen bg-background-dark text-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 text-primary font-bold mb-4 uppercase tracking-widest text-xs">
            <span className="h-[2px] w-8 bg-primary"></span>
            Get In Touch
          </div>
          <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight">
            Let's Start a <span className="text-primary">Conversation</span>
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              <p className="text-slate-400 max-w-sm">
                Have a specific inquiry or just want to say hi? Fill out the form or reach out through these channels.
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "hello@devportfolio.com" },
                { icon: Phone, label: "Phone", value: "+1 (555) 000-0000" },
                { icon: MapPin, label: "Location", value: "San Francisco, CA" },
              ].map((info) => (
                <motion.div 
                  key={info.label}
                  variants={itemVariants}
                  className="flex items-center gap-4 group"
                >
                  <div className="size-12 rounded-xl bg-[#1a2234] flex items-center justify-center border border-white/5 group-hover:border-primary/50 transition-colors">
                    <info.icon className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter">{info.label}</p>
                    <p className="text-lg font-medium">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="pt-8 space-y-4">
              <p className="text-sm font-bold text-slate-500 uppercase tracking-tighter">Follow Me</p>
              <div className="flex gap-4">
                {[Github, Linkedin, Twitter].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="size-12 rounded-xl bg-[#1a2234] flex items-center justify-center border border-white/5 hover:border-primary/50 transition-colors"
                  >
                    <Icon className="size-5 text-white" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#1a2234] p-8 lg:p-12 rounded-3xl border border-white/5 shadow-2xl space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-background-dark/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-background-dark/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-400">Subject</label>
              <input 
                type="text" 
                className="w-full bg-background-dark/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                placeholder="Project Inquiry"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-400">Message</label>
              <textarea 
                rows={5}
                className="w-full bg-background-dark/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            
            <Button className="w-full h-14 bg-primary text-white font-black rounded-xl hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all active:scale-[0.98]">
              Send Message <Send className="ml-2 size-4" />
            </Button>
          </motion.form>
        </div>
      </div>
    </div>
  )
}
