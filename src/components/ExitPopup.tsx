import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Icon from "@/components/ui/icon"

const TG_LINK = `https://t.me/cyxabo?text=${encodeURIComponent(
  "Хочу получить бесплатный урок по арбитражу трафика!"
)}`

export function ExitPopup() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (dismissed) return

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !dismissed) {
        setVisible(true)
      }
    }

    // On mobile — show after 40s of inactivity
    const mobileTimer = setTimeout(() => {
      if (!dismissed) setVisible(true)
    }, 40000)

    document.addEventListener("mouseleave", handleMouseLeave)
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave)
      clearTimeout(mobileTimer)
    }
  }, [dismissed])

  const close = () => {
    setVisible(false)
    setDismissed(true)
  }

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={close}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="fixed z-[101] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md px-4"
          >
            <div className="relative bg-zinc-900 border border-zinc-700 rounded-2xl p-8 shadow-2xl">
              {/* Close */}
              <button
                onClick={close}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
              >
                <Icon name="X" size={14} className="text-zinc-400" />
              </button>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 mb-5">
                <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
                <span className="text-violet-400 text-xs font-medium">Подожди!</span>
              </div>

              {/* Heading */}
              <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                Забери бесплатный урок перед уходом
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Напиши нам в Telegram и получи вводный урок по финансовым офферам бесплатно — без
                обязательств и регистраций.
              </p>

              {/* Perks */}
              <ul className="flex flex-col gap-2 mb-7">
                {[
                  "Как выбрать первый оффер с ROI 150%+",
                  "Топ-3 связки, которые работают прямо сейчас",
                  "Чек-лист запуска первой кампании за 1 день",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-zinc-300">
                    <Icon name="Check" size={14} className="text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={TG_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-violet-600 hover:bg-violet-500 text-white font-medium rounded-xl transition-colors text-sm"
              >
                <Icon name="Send" size={16} />
                Получить бесплатный урок
              </a>

              <button
                onClick={close}
                className="w-full mt-3 text-zinc-600 hover:text-zinc-400 text-xs transition-colors"
              >
                Нет, я не хочу зарабатывать
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
