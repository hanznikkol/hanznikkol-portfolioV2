'use client'

import { useState } from 'react'
import type { Project } from '@/data/projects'
import ProjectModal from '../modals/ProjectModal'
import ProjectStatus from '../sub-components/ProjectStatus'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCards({ project }: ProjectCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
    <div onClick={() => setOpen(true)}
      className="group cursor-pointer relative h-70 overflow-hidden rounded-2xl border border-white/10 bg-black transition-all duration-300 hover:scale-[1.03] hover:border-white/20">
      
      <div className="absolute right-3 top-3 z-20">
        <ProjectStatus status={project.status!} />
      </div>


      {/* Bg preview */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 transition duration-500 group-hover:scale-110"
        style={{
          backgroundImage: project.preview
            ? `url(${project.preview})`
            : `linear-gradient(135deg, ${project.accentColor}, #000)`
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-4">
        <h3 className="text-sm font-semibold text-white">
          {project.title}
        </h3>

        <p className="text-[11px] text-white/60 line-clamp-2">
          {project.shortDescription}
        </p>

        <div className="mt-2 flex gap-2 opacity-0 transition group-hover:opacity-100">
          {project.tech.slice(0, 2).map((t) => (
            <span key={t} className="text-[10px] text-white/50">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>

    <ProjectModal project={project} open={open} onOpenChange={setOpen} />
    </>
  )
}