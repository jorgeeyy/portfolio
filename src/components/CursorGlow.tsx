import { useEffect, useState } from "react"

export const CursorGlow = () => {
  const [pos, setPos] = useState({ x: -200, y: -200 })

  useEffect(() => {
    let rafId: number
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => setPos({ x: e.clientX, y: e.clientY }))
    }
    const onLeave = () => setPos({ x: -200, y: -200 })
    window.addEventListener("mousemove", onMove)
    document.addEventListener("mouseleave", onLeave)
    return () => {
      window.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseleave", onLeave)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 transition-[background] duration-200 ease-out"
      style={{
        background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, var(--accent-glow), transparent 60%)`,
      }}
    />
  )
}
