import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const CARDS = [
  {
    videoUrl:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4',
    tag: 'Strategy',
    title: 'Research & Insight',
    description:
      'We dig deep into data, culture, and human behavior to surface the insights that drive meaningful, lasting change.',
  },
  {
    videoUrl:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4',
    tag: 'Craft',
    title: 'Design & Execution',
    description:
      'From concept to launch, we obsess over every detail to deliver experiences that feel effortless and look extraordinary.',
  },
]

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-black py-28 md:py-40 px-6 overflow-hidden">
      <div
        className="max-w-6xl mx-auto bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)]"
        ref={ref}
      >
        {/* Header row */}
        <motion.div
          className="flex items-end justify-between mb-16 md:mb-24"
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="text-3xl md:text-5xl text-white tracking-tight"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            What we do
          </h2>
          <span className="hidden md:block text-white/40 text-sm">
            Our services
          </span>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {CARDS.map((card, index) => (
            <motion.div
              key={card.title}
              className="liquid-glass rounded-3xl overflow-hidden group"
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              {/* Video area */}
              <div className="aspect-video overflow-hidden relative">
                <video
                  src={card.videoUrl}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Body */}
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white/40 text-xs tracking-widest uppercase">
                    {card.tag}
                  </span>
                  <div className="liquid-glass rounded-full p-2 text-white">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
                <h3
                  className="text-white text-xl md:text-2xl mb-3 tracking-tight"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {card.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
