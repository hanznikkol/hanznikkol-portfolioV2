'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'

import ProjectCards from './ProjectCards'
import type { Project } from '@/data/projects'

interface ProjectsSliderProps {
  projects: Project[]
}

export default function ProjectsSlider({
  projects,
}: ProjectsSliderProps) {
  const [swiper, setSwiper] = useState<SwiperType | null>(null)
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  const updateNavigation = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning)
    setIsEnd(swiper.isEnd)
  }

  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-linear-to-b from-[#121212] to-[#0d0d0d] p-5">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h3 className="mt-1 text-md font-mono font-bold text-white/50">
            Projects
          </h3>
        </div>

        {/* Custom navigation */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => swiper?.slidePrev()}
            disabled={isBeginning}
            aria-label="Previous projects"
            className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/50 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white/5 disabled:hover:text-white/50"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() => swiper?.slideNext()}
            disabled={isEnd}
            aria-label="Next projects"
            className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/50 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white/5 disabled:hover:text-white/50"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Slider */}
      <Swiper
        onSwiper={(swiper) => {
          setSwiper(swiper)
          updateNavigation(swiper)
        }}
        onSlideChange={updateNavigation}
        onReachBeginning={updateNavigation}
        onReachEnd={updateNavigation}
        spaceBetween={12}
        slidesOffsetBefore={4}
        slidesOffsetAfter={4}
        slidesPerView="auto"
        className="overflow-visible!"
      >
        {projects.map((project) => (
          <SwiperSlide
            key={project.id}
            className="w-70! sm:w-75!"
          >
            <ProjectCards project={project} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_55%)] opacity-0 transition group-hover:opacity-100" />
    </div>
  )
}