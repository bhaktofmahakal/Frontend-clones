import { useRef, useEffect } from 'react'
import { Globe, ArrowRight, Share2, MessageCircle } from 'lucide-react'

const HERO_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4'

export default function Index() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const fadeAnimRef = useRef<number | null>(null)

  const cancelFade = () => {
    if (fadeAnimRef.current !== null) {
      cancelAnimationFrame(fadeAnimRef.current)
      fadeAnimRef.current = null
    }
  }

  const animateOpacity = (
    el: HTMLVideoElement,
    from: number,
    to: number,
    durationMs: number,
    onDone?: () => void,
  ) => {
    cancelFade()
    const start = performance.now()
    el.style.opacity = String(from)

    const step = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1)
      el.style.opacity = String(from + (to - from) * progress)
      if (progress < 1) {
        fadeAnimRef.current = requestAnimationFrame(step)
      } else {
        fadeAnimRef.current = null
        onDone?.()
      }
    }
    fadeAnimRef.current = requestAnimationFrame(step)
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.style.opacity = '0'

    const handleCanPlay = () => {
      video.play().catch(() => {})
      animateOpacity(video, 0, 1, 500)
    }

    const handleTimeUpdate = () => {
      if (video.duration && video.duration - video.currentTime <= 0.55) {
        const currentOpacity = parseFloat(video.style.opacity ?? '1')
        if (currentOpacity > 0) {
          animateOpacity(video, currentOpacity, 0, 500)
        }
      }
    }

    const handleEnded = () => {
      video.style.opacity = '0'
      setTimeout(() => {
        video.currentTime = 0
        video.play().catch(() => {})
        animateOpacity(video, 0, 1, 500)
      }, 100)
    }

    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('ended', handleEnded)

    return () => {
      cancelFade()
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('ended', handleEnded)
    }
  }, [])

  return (
    <section className="min-h-screen overflow-hidden relative flex flex-col bg-black">
      {/* Background video */}
      <video
        ref={videoRef}
        src={HERO_VIDEO_URL}
        muted
        autoPlay
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-bottom"
        style={{ opacity: 0 }}
      />

      {/* Navbar */}
      <nav className="relative z-20 px-6 py-6">
        <div className="liquid-glass rounded-full max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center">
            <Globe size={24} className="text-white" />
            <span className="text-white font-semibold text-lg ml-2">Asme</span>
            <div className="hidden md:flex items-center gap-8 ml-8">
              <a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Features</a>
              <a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Pricing</a>
              <a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">About</a>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <button className="text-white text-sm font-medium">Sign Up</button>
            <button className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium hover:bg-white/5 transition-colors">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[20%]">
        {/* Heading */}
        <h1
          className="text-7xl md:text-8xl lg:text-9xl text-white tracking-tight whitespace-nowrap mb-8"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Know it then <em>all</em>.
        </h1>

        {/* Email input */}
        <div className="max-w-xl w-full mb-6">
          <div className="liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent text-white placeholder:text-white/40 text-sm outline-none border-none"
            />
            <button className="bg-white rounded-full p-3 text-black flex-shrink-0 hover:bg-white/90 transition-colors">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-white text-sm leading-relaxed px-4 max-w-md mb-8">
          Stay updated with the latest news and insights. Subscribe to our newsletter today and never miss out on exciting updates.
        </p>

        {/* Manifesto button */}
        <button className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors">
          Read our manifesto
        </button>
      </div>

      {/* Social icons footer */}
      <div className="relative z-10 flex justify-center gap-4 pb-12">
        <button className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
          <Share2 size={20} />
        </button>
        <button className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
          <MessageCircle size={20} />
        </button>
        <button className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
          <Globe size={20} />
        </button>
      </div>
    </section>
  )
}
