import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Icon from "@/components/ui/icon"

const plans = [
  {
    name: "Базовый",
    price: "10 000",
    period: "1 месяц",
    description: "Старт в арбитраже с поддержкой команды",
    features: [
      "Обучение от опытных наставников",
      "Разбор твоих ошибок",
      "Новые рабочие связки",
      "Доступ к закрытому чату потока",
      "Видеоуроки по финансовым офферам",
    ],
    notIncluded: ["Созвоны с владельцем", "Конфиденциальные консультации"],
    cta: "Записаться — Базовый",
    highlight: false,
    badge: null,
  },
  {
    name: "Стандарт",
    price: "15 000",
    period: "1 месяц",
    description: "Обучение с наставниками из топовых команд",
    features: [
      "Наставники из известных арбитражных команд",
      "Регулярные созвоны с куратором",
      "Конфиденциальные консультации",
      "Дружеские отношения и нетворкинг",
      "Разбор связок и ошибок",
      "Новые рабочие связки каждую неделю",
      "Закрытый чат потока",
    ],
    notIncluded: [],
    cta: "Записаться — Стандарт",
    highlight: true,
    badge: "Популярный",
  },
  {
    name: "VIP",
    price: "27 000",
    period: "1 месяц",
    description: "Личное обучение с основателем Infidenty",
    features: [
      "Личное обучение с Infidenty",
      "Все включено из Стандарта",
      "Прямой доступ в личку к основателю",
      "Индивидуальный разбор стратегии залива",
      "Приоритетная проверка связок",
      "Закрытые материалы и инсайды рынка",
      "Гарантия выхода в плюс или возврат",
    ],
    notIncluded: [],
    cta: "Записаться — VIP",
    highlight: false,
    badge: "Максимум",
  },
]

function getTelegramLink(planName: string, price: string) {
  const text = encodeURIComponent(
    `Запись на курс ${price} ₽ — тариф «${planName}». Формат: онлайн + куратор, 1 месяц.`
  )
  return `https://t.me/cyxabo?text=${text}`
}

export function PricingSection() {
  return (
    <section className="relative py-32 px-6" style={{ backgroundColor: "#09090B" }}>
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05), transparent 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-6"
        >
          <div className="w-2 h-2 rounded-full bg-violet-500" />
          <span className="text-zinc-400 text-sm">Тарифы</span>
          <Icon name="ChevronRight" size={16} className="text-zinc-600" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-[56px] font-medium text-white mb-4 max-w-2xl"
          style={{ letterSpacing: "-0.0325em", fontWeight: 538, lineHeight: 1.1 }}
        >
          Выбери свой уровень
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-zinc-400 text-lg mb-16 max-w-md"
        >
          Все форматы — онлайн, 1 месяц, с поддержкой куратора. Разница в глубине обучения.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.highlight
                  ? "border-violet-500/50 bg-violet-950/20"
                  : "border-zinc-800 bg-zinc-900/40"
              }`}
            >
              {plan.badge && (
                <div
                  className={`absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-medium ${
                    plan.highlight
                      ? "bg-violet-500 text-white"
                      : "bg-zinc-700 text-zinc-300"
                  }`}
                >
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-white font-semibold text-xl mb-1">{plan.name}</h3>
                <p className="text-zinc-500 text-sm mb-5">{plan.description}</p>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold text-white">{plan.price} ₽</span>
                  <span className="text-zinc-500 text-sm mb-1">/ {plan.period}</span>
                </div>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-zinc-300">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
                {plan.notIncluded.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-zinc-600">
                    <span className="w-4 h-4 mt-0.5 flex-shrink-0 flex items-center justify-center">
                      <span className="w-3 h-px bg-zinc-700 block" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={getTelegramLink(plan.name, plan.price)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-xl text-sm font-medium text-center transition-colors ${
                  plan.highlight
                    ? "bg-violet-600 hover:bg-violet-500 text-white"
                    : "bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
