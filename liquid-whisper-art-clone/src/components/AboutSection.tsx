import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className="bg-black pt-32 md:pt-44 pb-10 md:pb-14 px-6 overflow-hidden"
    >
      <div className="bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03)_0%,_transparent_70%)] max-w-6xl mx-auto">
        <motion.p
          className="text-white/40 text-sm tracking-widest uppercase mb-6"
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.p>

        <motion.h2
          className="text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight"
          style={{ fontFamily: "'Instrument Serif', serif" }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Pioneering then{' '}
          <em className="text-white/60">ideas for</em>
          <br className="hidden md:block" />
          <em className="text-white/60">minds that then </em>
          <span className="text-white/60">create, build, and inspire.</span>
        </motion.h2>
      </div>
    </section>
  )
}
