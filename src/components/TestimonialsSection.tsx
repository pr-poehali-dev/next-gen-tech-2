import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const testimonials = [
  {
    name: "Артём К.",
    handle: "@artem_arb",
    avatar: "АК",
    color: "bg-violet-600",
    plan: "Стандарт",
    text: "За первые 2 недели обучения уже вышел в плюс на финофферах. Наставник разобрал мою связку по полочкам — сразу понял где терял деньги. Теперь ROI стабильно 180%+",
    result: "+42 000 ₽ за месяц",
  },
  {
    name: "Диана М.",
    handle: "@diana_traffic",
    avatar: "ДМ",
    color: "bg-pink-600",
    plan: "Базовый",
    text: "Пришла вообще без опыта, даже слова «арбитраж» не понимала. Через месяц уже залила первый оффер в TikTok и заработала 18к. Живые разборы ошибок — это огонь, сразу видишь где промахнулся.",
    result: "+18 000 ₽ первый месяц",
  },
  {
    name: "Максим Р.",
    handle: "@maxim_cpa",
    avatar: "МР",
    color: "bg-blue-600",
    plan: "VIP",
    text: "Взял VIP и не пожалел. Infidenty лично разобрал мою стратегию и показал связку, которую я бы сам не нашёл никогда. Окупил курс на третьей неделе. Закрытые инсайды рынка реально работают.",
    result: "+95 000 ₽ за месяц",
  },
  {
    name: "Никита В.",
    handle: "@nikita_fin",
    avatar: "НВ",
    color: "bg-green-600",
    plan: "Стандарт",
    text: "Созвоны с наставниками из топовых команд — это не просто обучение, это нетворкинг. Уже после курса нашёл партнёра для совместного залива. Команда живая, отвечают быстро.",
    result: "+55 000 ₽ за месяц",
  },
  {
    name: "Алина Т.",
    handle: "@alina_arb",
    avatar: "АТ",
    color: "bg-orange-600",
    plan: "Базовый",
    text: "Думала что арбитраж — это только для технарей. Оказалось нет. Связки объясняют просто, без воды. Уже со второго оффера вышла в плюс. Очень довольна соотношением цены и качества.",
    result: "+22 000 ₽ первый месяц",
  },
  {
    name: "Сергей Л.",
    handle: "@sergey_cpa",
    avatar: "СЛ",
    color: "bg-cyan-600",
    plan: "VIP",
    text: "Самое ценное в VIP — это прямой доступ к основателю. Задал вопрос в 23:00, ответ получил через 10 минут. Такого отношения нигде не встречал. Теперь работаю как партнёр команды.",
    result: "+120 000 ₽ за месяц",
  },
]

export function TestimonialsSection() {
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
          <div className="w-2 h-2 rounded-full bg-yellow-500" />
          <span className="text-zinc-400 text-sm">Отзывы учеников</span>
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
          Результаты говорят сами
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-zinc-400 text-lg mb-16 max-w-md"
        >
          Реальные отзывы учеников с цифрами — сколько заработали уже в первый месяц.
        </motion.p>

        {/* Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.handle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              className="break-inside-avoid bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors rounded-2xl p-6"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">{t.name}</div>
                    <div className="text-zinc-500 text-xs">{t.handle}</div>
                  </div>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700 flex-shrink-0">
                  {t.plan}
                </span>
              </div>

              {/* Text */}
              <p className="text-zinc-300 text-sm leading-relaxed mb-4">"{t.text}"</p>

              {/* Result */}
              <div className="flex items-center gap-2 pt-3 border-t border-zinc-800">
                <Icon name="TrendingUp" size={14} className="text-green-500" />
                <span className="text-green-400 text-sm font-medium">{t.result}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
