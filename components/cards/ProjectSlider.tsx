'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import ProjectCards from './ProjectCards'
import type { Project } from '@/data/projects'

interface ProjectsSliderProps {
  projects: Project[]
}

export default function ProjectsSlider({
  projects,
}: ProjectsSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  const handleScroll = () => {
    const el = scrollRef.current
    if (!el) return
    setIsBeginning(el.scrollLeft <= 0)
    // Small threshold (e.g. 1px) due to sub-pixel rounding
    setIsEnd(Math.ceil(el.scrollLeft + el.clientWidth) >= el.scrollWidth)
  }

  // Initial check
  useEffect(() => {
    handleScroll()
  }, [])

  const slidePrev = () => {
    const el = scrollRef.current
    if (el) {
      el.scrollBy({ left: -300, behavior: 'smooth' })
    }
  }

  const slideNext = () => {
    const el = scrollRef.current
    if (el) {
      el.scrollBy({ left: 300, behavior: 'smooth' })
    }
  }

  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-linear-to-b from-surface-4 to-surface-5 p-5">
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
            onClick={slidePrev}
            disabled={isBeginning}
            aria-label="Previous projects"
            className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/50 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white/5 disabled:hover:text-white/50"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={slideNext}
            disabled={isEnd}
            aria-label="Next projects"
            className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/50 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white/5 disabled:hover:text-white/50"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-3 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2 px-1 -mx-1"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-70 shrink-0 snap-start sm:w-75"
          >
            <ProjectCards project={project} />
          </div>
        ))}
      </div>

      {/* glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_55%)] opacity-0 transition group-hover:opacity-100" />
    </div>
  )
}