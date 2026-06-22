import { Resend } from "resend"

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

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown"

    if (!checkRateLimit(ip)) {
      return Response.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 },
      )
    }

    const { name, email, subject, message, honeypot } = await request.json()

    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 },
      )
    }

    if (honeypot) {
      return Response.json({ success: true })
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "ginkoom31@gmail.com",
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `From: ${name} (${email})\nSubject: ${subject}\n\n${message}`,
    })

    return Response.json({ success: true })
  } catch {
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    )
  }
}
