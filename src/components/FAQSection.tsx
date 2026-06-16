import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Icon from "@/components/ui/icon"

const faqs = [
  {
    q: "Нужен ли опыт в арбитраже для старта?",
    a: "Нет. Программа построена с нуля — от понятия «оффер» до первых выплат. Большинство учеников приходят без опыта и выходят в плюс уже в первый месяц.",
  },
  {
    q: "Когда стартует следующий поток?",
    a: "Набор в новый поток идёт прямо сейчас. Места ограничены — берём не более 30 человек, чтобы каждый получил внимание куратора. Напиши нам в Telegram, чтобы забронировать место.",
  },
  {
    q: "Что такое финансовые офферы и как на них зарабатывать?",
    a: "Финансовые офферы — это партнёрские программы банков, МФО и брокеров. Ты приводишь человека по своей ссылке, он открывает счёт или берёт кредит — ты получаешь фиксированную выплату от 500 до 5000 ₽ за одного лида.",
  },
  {
    q: "Сколько денег нужно для старта помимо оплаты курса?",
    a: "На тестовый бюджет для запуска первых кампаний достаточно 3 000–5 000 ₽. Мы учим работать с минимальными бюджетами и масштабироваться только после подтверждения ROI.",
  },
  {
    q: "Как проходит обучение — есть ли живые занятия?",
    a: "Формат: видеоуроки + живая поддержка куратора в Telegram. На тарифах Стандарт и VIP — регулярные созвоны. Весь материал остаётся у тебя навсегда после окончания курса.",
  },
  {
    q: "Что если я не выйду в плюс за месяц?",
    a: "На тарифе VIP действует гарантия результата: если не выйдешь в плюс — вернём деньги. На других тарифах куратор продолжает работать с тобой до первой прибыльной связки.",
  },
  {
    q: "Можно ли совмещать обучение с работой?",
    a: "Да. Достаточно 1–2 часа в день. Видеоуроки можно смотреть в любое время, а кампании запускаются и работают без твоего постоянного участия.",
  },
  {
    q: "В чём разница между тарифами Базовый и Стандарт?",
    a: "Базовый — обучение от наставников, разборы ошибок, новые связки. Стандарт добавляет наставников из известных команд, личные созвоны и конфиденциальные консультации. VIP — личная работа с Infidenty и приоритет во всём.",
  },
]

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="relative py-32 px-6" style={{ backgroundColor: "#09090B" }}>
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05), transparent 100%)",
        }}
      />

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-6"
        >
          <div className="w-2 h-2 rounded-full bg-cyan-500" />
          <span className="text-zinc-400 text-sm">Частые вопросы</span>
          <Icon name="ChevronRight" size={16} className="text-zinc-600" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-medium text-white mb-4"
          style={{ letterSpacing: "-0.0325em", fontWeight: 538, lineHeight: 1.1 }}
        >
          Всё что хочешь знать
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 text-lg mb-16"
        >
          Если не нашёл ответ — напиши напрямую в{" "}
          <a
            href="https://t.me/cyxabo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline underline-offset-2 hover:text-zinc-300 transition-colors"
          >
            Telegram
          </a>
          .
        </motion.p>

        {/* Items */}
        <div className="flex flex-col divide-y divide-zinc-800/60">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * index }}
            >
              <button
                className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                onClick={() => setOpen(open === index ? null : index)}
              >
                <span
                  className={`text-base font-medium transition-colors ${
                    open === index ? "text-white" : "text-zinc-300 group-hover:text-white"
                  }`}
                >
                  {faq.q}
                </span>
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
                    open === index
                      ? "border-zinc-500 bg-zinc-800 rotate-45"
                      : "border-zinc-700 bg-transparent"
                  }`}
                >
                  <Icon name="Plus" size={12} className="text-zinc-400" />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-zinc-400 text-sm leading-relaxed pb-5 pr-10">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
