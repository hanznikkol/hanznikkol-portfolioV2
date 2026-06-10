"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import "swiper/css"
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

  return (
    <>
      <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-4 flex flex-col overflow-hidden">

        {/* header */}
        <div className="flex items-center justify-between mb-2">
          <p className=" font-mono text-xs uppercase tracking-widest text-white/50 font-bold">
            Gallery
          </p>

          <button className="gallery-next flex h-6 w-6 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/40 hover:bg-white/10 hover:text-white transition">
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* swiper */}
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          slidesPerView="auto"
          spaceBetween={8}
          loop
          navigation={{
            nextEl: ".gallery-next",
            prevEl: ".gallery-prev"
          }}
          className="w-full"
        >
          {images.map((src, i) => (
            <SwiperSlide key={i} style={{ width: "auto" }}>
              <div
                onClick={() => setSelected(src)}
                className="h-32 w-32 shrink-0 cursor-pointer overflow-hidden rounded-lg border border-white/10"
              >
                <Image
                  src={src}
                  alt={`gallery ${i + 1}`}
                  width={600}
                  height={600}
                  className="h-full w-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      <FullScreenModal selected={selected} onClose={() => setSelected(null)}/>
    </>
  )
}