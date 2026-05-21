'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import ProjectModal from './ProjectModal'
import type { Project } from '@/data/projects'
import { ArrowUpRight } from 'lucide-react'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-[#111111] p-5 transition-colors hover:border-white/20 hover:bg-[#161616]">
        <div>
          <div className="flex items-start justify-between">
            <div
              className="h-8 w-8 rounded-xl"
              style={{ backgroundColor: project.accentColor + '20', border: `1px solid ${project.accentColor}30` }}
            />
            <span className="font-mono text-[10px] tracking-widest text-white/20 uppercase">
              {project.year}
            </span>
          </div>
          <h3 className="mt-3 text-sm font-medium text-white/90">{project.title}</h3>
          <p className="mt-1 text-xs leading-relaxed text-white/40">{project.shortDescription}</p>
        </div>
        <div className="mt-4">
          <div className="flex flex-wrap gap-1 mb-3">
            {project.tech.slice(0, 3).map((t) => (
              <Badge
                key={t}
                variant="outline"
                className="rounded-md border-white/[0.07] bg-white/[0.04] px-1.5 py-0 text-[10px] text-white/40"
              >
                {t}
              </Badge>
            ))}
            {project.tech.length > 3 && (
              <Badge
                variant="outline"
                className="rounded-md border-white/[0.07] bg-white/[0.04] px-1.5 py-0 text-[10px] text-white/30"
              >
                +{project.tech.length - 3}
              </Badge>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setOpen(true)}
            className="h-7 rounded-lg px-2.5 text-xs text-white/40 hover:bg-white/5 hover:text-white/80"
          >
            View more
            <ArrowUpRight className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </div>

      <ProjectModal project={project} open={open} onOpenChange={setOpen} />
    </>
  )
}