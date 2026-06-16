import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const stats = [
  { value: 500, suffix: "+", label: "Учеников прошли курс", color: "text-violet-400" },
  { value: 180, suffix: "%", label: "Средний ROI в первый месяц", color: "text-green-400" },
  { value: 30, suffix: " дней", label: "До первых выплат", color: "text-blue-400" },
  { value: 97, suffix: "%", label: "Выходят в плюс", color: "text-orange-400" },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1800
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="relative py-20 px-6" style={{ backgroundColor: "#09090B" }}>
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: "1px",
          background: "linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: "1px",
          background: "linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)",
        }}
      />

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-zinc-500 text-sm leading-snug max-w-[140px]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
