import { Resend } from "resend"
import type { VercelRequest, VercelResponse } from "@vercel/node"

const resend = new Resend(process.env.RESEND_API_KEY)

const rateLimit = new Map<string, { count: number; resetAt: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimit.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + 60000 })
    return true
  }
  if (entry.count >= 3) return false
  entry.count++
  return true
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  try {
    const ip =
      (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ??
      (req.headers["x-real-ip"] as string) ??
      "unknown"

    if (!checkRateLimit(ip)) {
      return res.status(429).json({ error: "Too many requests. Please try again later." })
    }

    const { name, email, subject, message, honeypot } = req.body

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required." })
    }

    if (honeypot) {
      return res.json({ success: true })
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "ginkoom31@gmail.com",
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `From: ${name} (${email})\nSubject: ${subject}\n\n${message}`,
    })

    return res.json({ success: true })
  } catch {
    return res.status(500).json({ error: "Something went wrong. Please try again." })
  }
}
