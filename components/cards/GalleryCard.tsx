'use client'

import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { ChevronRight } from "lucide-react"
import FullScreenModal from "../modals/FullScreenModal"

const images = [
  "/gallery/g1.jpg",
  "/gallery/g2.jpg",
  "/gallery/g3.jpg",
  "/gallery/g4.jpg",
  "/gallery/g5.jpg",
]

export default function GalleryCard() {
  const [selected, setSelected] = useState<string | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollNext = () => {
    const el = scrollRef.current
    if (!el) return
    
    // If at the end, scroll back to beginning
    if (Math.ceil(el.scrollLeft + el.clientWidth) >= el.scrollWidth) {
      el.scrollTo({ left: 0, behavior: "smooth" })
    } else {
      el.scrollBy({ left: 136, behavior: "smooth" }) // 132px width + 8px gap approx
    }
  }

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(scrollNext, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-4 flex flex-col overflow-hidden">
        {/* header */}
        <div className="flex items-center justify-between mb-2">
          <p className="font-mono text-xs uppercase tracking-widest text-white/50 font-bold">
            Gallery
          </p>

          <button 
            onClick={scrollNext}
            className="flex h-6 w-6 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/40 hover:bg-white/10 hover:text-white transition"
            aria-label="Next image"
          >
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* slider */}
        <div 
          ref={scrollRef}
          className="flex w-full gap-2 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2"
        >
          {images.map((src, i) => (
            <div
              key={i}
              onClick={() => setSelected(src)}
              className="h-32 w-32 shrink-0 snap-start cursor-pointer overflow-hidden rounded-lg border border-white/10"
            >
              <Image
                src={src}
                alt={`gallery ${i + 1}`}
                width={600}
                height={600}
                className="h-full w-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <FullScreenModal selected={selected} onClose={() => setSelected(null)}/>
    </>
  )
}