'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import ProjectCards from './ProjectCards'
import type { Project } from '@/data/projects'

interface ProjectsSliderProps {
  projects: Project[]
}

export default function ProjectsSlider({
  projects,
}: ProjectsSliderProps) {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-linear-to-b from-[#121212] to-[#0d0d0d] p-5">

      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h3 className="mt-1 text-md font-mono font-bold text-white/50">
            Projects
          </h3>
        </div>
      </div>

      {/* Slider */}
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={12}
        slidesOffsetBefore={12}
        slidesOffsetAfter={12}
        slidesPerView={'auto'}
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
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_55%)]" />
    </div>
  )
}