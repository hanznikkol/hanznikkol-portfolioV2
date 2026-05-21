'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Globe, ArrowUpRight } from 'lucide-react'
import type { Project } from '@/data/projects'

interface ProjectModalProps {
  project: Project
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function ProjectModal({
  project,
  open,
  onOpenChange,
}: ProjectModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="rounded-2xl border border-white/10 bg-[#111111] p-0 text-white sm:max-w-lg">
        {/* Header accent */}
        <div
          className="h-1 w-full rounded-t-2xl"
          style={{ background: `linear-gradient(to right, ${project.accentColor}60, transparent)` }}
        />

        <div className="p-6">
          <DialogHeader>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] tracking-widest text-white/30 uppercase">
                {project.year}
              </span>
            </div>
            <DialogTitle className="mt-1 text-lg font-medium text-white">
              {project.title}
            </DialogTitle>
          </DialogHeader>

          <div className="mt-4 space-y-5">
            {/* Description */}
            <p className="text-sm leading-relaxed text-white/60">
              {project.fullDescription}
            </p>

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <div>
                <p className="mb-2 font-mono text-[10px] tracking-widest text-white/30 uppercase">
                  Features
                </p>
                <ul className="space-y-1">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/50">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/30" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Challenges */}
            {project.challenges && (
              <div>
                <p className="mb-2 font-mono text-[10px] tracking-widest text-white/30 uppercase">
                  Challenges
                </p>
                <p className="text-sm leading-relaxed text-white/50">
                  {project.challenges}
                </p>
              </div>
            )}

            {/* Tech stack */}
            <div>
              <p className="mb-2 font-mono text-[10px] tracking-widest text-white/30 uppercase">
                Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <Badge
                    key={t}
                    variant="outline"
                    className="rounded-lg border-white/10 bg-white/5 text-xs text-white/50"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-2 border-t border-white/[0.07] pt-4">
              {project.github && (
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-xl border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-xl border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Globe className="mr-1.5 h-3.5 w-3.5" />
                    Live Demo
                    <ArrowUpRight className="ml-1 h-3 w-3" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}