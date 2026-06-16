import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Icon from "@/components/ui/icon"

const TG_LINK = `https://t.me/cyxabo?text=${encodeURIComponent(
  "Запись на курс — хочу узнать подробнее о тарифах. Формат: онлайн + куратор, 1 месяц."
)}`

export function FloatingCTA() {
  const [visible, setVisible] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
          {/* Expanded card */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                className="bg-zinc-900 border border-zinc-700 rounded-2xl p-5 shadow-2xl w-72"
              >
                <p className="text-white font-semibold text-sm mb-1">Записаться на курс</p>
                <p className="text-zinc-400 text-xs mb-4 leading-relaxed">
                  Напиши нам — выберем тариф и забронируем место в потоке.
                </p>
                <a
                  href={TG_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium rounded-xl transition-colors"
                >
                  <Icon name="Send" size={14} />
                  Написать в Telegram
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* FAB button */}
          <button
            onClick={() => setExpanded((v) => !v)}
            className="w-14 h-14 rounded-full bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-900/40 flex items-center justify-center transition-colors relative"
          >
            <AnimatePresence mode="wait">
              {expanded ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Icon name="X" size={22} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Icon name="MessageCircle" size={22} />
                </motion.span>
              )}
            </AnimatePresence>

            {/* Pulse ring */}
            {!expanded && (
              <span className="absolute inset-0 rounded-full border-2 border-violet-500 animate-ping opacity-30" />
            )}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
