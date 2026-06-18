const orbs = [
  { anim: "animate-float-1", top: "10%", left: "5%", size: "w-48 h-48", delay: "0s" },
  { anim: "animate-float-2", top: "55%", right: "8%", size: "w-36 h-36", delay: "-3s" },
  { anim: "animate-float-3", top: "70%", left: "50%", size: "w-40 h-40", delay: "-6s" },
  { anim: "animate-float-1", top: "25%", right: "20%", size: "w-28 h-28", delay: "-8s" },
  { anim: "animate-float-2", top: "80%", left: "8%", size: "w-32 h-32", delay: "-2s" },
  { anim: "animate-float-3", top: "40%", left: "35%", size: "w-24 h-24", delay: "-10s" },
]

export const FloatingOrbs = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    {orbs.map((orb, i) => (
      <div
        key={i}
        className={`absolute ${orb.anim} ${orb.size} rounded-full bg-linear-to-br from-accent/20 to-accent/8 blur-3xl`}
        style={{
          top: orb.top,
          [orb.right ? "right" : "left"]: orb.right ?? orb.left,
          animationDelay: orb.delay,
        }}
      />
    ))}
  </div>
)
