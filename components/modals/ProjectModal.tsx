'use client'

import Image from 'next/image'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Globe, ArrowUpRight, Sparkles, Layers3, Wrench, CalendarDays, CircleDot, Rocket, ShieldAlert, ImageIcon } from 'lucide-react'
import GithubIcon from '@iconify-react/mdi/github';
import FigmaIcon from '@iconify-react/devicon/figma'
import type { Project } from '@/data/projects'

interface ProjectModalProps {
  project: Project
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="no-scrollbar max-h-[92vh] overflow-y-auto overflow-x-hidden border border-white/10 bg-[#0b0b0b] p-0 text-white shadow-2xl shadow-black/40 sm:max-w-4xl">

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-30 h-72 w-72 rounded-full blur-3xl" style={{ background: `${project.accentColor}25` }} />
          <div className="absolute -bottom-30 -left-25 h-72 w-72 rounded-full blur-3xl" style={{ background: `${project.accentColor}15` }} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_35%)]" />
        </div>

        {project.preview && (
          <div className="relative h-[320px] w-full overflow-hidden border-b border-white/10">
            <Image src={project.preview} alt={project.title} fill priority className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-black/40 to-black/10" />
            <div className="absolute -bottom-16 right-0 h-56 w-56 rounded-full blur-3xl" style={{ background: `${project.accentColor}50` }} />

            <div className="absolute bottom-0 left-0 w-full p-7">
              <div className="flex items-end gap-5">

                <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl">
                  <div className="absolute inset-0 bg-black/20" />
                  <Image src={project.preview} alt={project.title} width={88} height={88} className="h-[88px] w-[88px] object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>

                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full" style={{ background: project.accentColor }} />
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/50">{project.year}</span>
                  </div>

                  <DialogTitle className="text-4xl font-semibold tracking-tight text-white">{project.title}</DialogTitle>

                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/65">{project.shortDescription}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="relative p-7">
          <DialogHeader className="space-y-5">
            <div className="flex items-start justify-between gap-4">

              <div>
                <div className="mb-3 flex items-center gap-2">

                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10" style={{ background: `${project.accentColor}20` }}>
                    <Rocket className="h-4 w-4" style={{ color: project.accentColor }} />
                  </div>

                  <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
                    <CalendarDays className="h-3 w-3 text-white/40" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">{project.year}</span>
                  </div>
                </div>

                <p className="max-w-2xl text-sm leading-relaxed text-white/60">{project.fullDescription}</p>
              </div>

              {project.status === 'developing' ? (
                <div className="flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1.5 text-xs text-yellow-300 backdrop-blur-xl">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-400" />
                  </span>
                  Developing
                </div>
              ) : (
                <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-300">
                  <CircleDot className="h-3 w-3 fill-emerald-300" />
                  Finished
                </div>
              )}
            </div>
          </DialogHeader>

          <div className="mt-8 space-y-8">

            {project.features?.length > 0 && (
              <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm">
                <div className="mb-4 flex items-center gap-2">
                  <Sparkles className="h-4 w-4" style={{ color: project.accentColor }} />
                  <h3 className="font-medium text-white">Key Features</h3>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {project.features.map((feature, i) => (
                    <div key={i} className="group flex items-start gap-3 rounded-2xl border border-white/5 bg-black/20 p-4 transition-all hover:border-white/10 hover:bg-white/[0.04]">
                      <div className="mt-1 h-2 w-2 rounded-full" style={{ background: project.accentColor }} />
                      <p className="text-sm leading-relaxed text-white/65 transition-colors group-hover:text-white/90">{feature}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {project.images && project.images.length > 0 && (
              <section>
                <div className="mb-4 flex items-center gap-2">
                  <ImageIcon className="h-4 w-4" style={{ color: project.accentColor }} />
                  <h3 className="font-medium text-white">UI Preview</h3>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {project.images.map((image, i) => (
                    <div key={i} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/3">
                      <div className="relative h-60 w-full overflow-hidden">
                        <Image src={image} alt={`${project.title} UI ${i + 1}`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {project.challenges && (
              <section className="rounded-3xl border border-orange-500/10 bg-orange-500/[0.03] p-5">
                <div className="mb-3 flex items-center gap-2">
                  <ShieldAlert className="h-4 w-4 text-orange-300" />
                  <h3 className="font-medium text-white">Challenges</h3>
                </div>

                <p className="text-sm leading-relaxed text-white/60">{project.challenges}</p>
              </section>
            )}

            <section>
              <div className="mb-4 flex items-center gap-2">
                <Layers3 className="h-4 w-4" style={{ color: project.accentColor }} />
                <h3 className="font-medium text-white">Tech Stack</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/70 transition-all hover:border-white/20 hover:bg-white/[0.08] hover:text-white">
                    <Wrench className="mr-1.5 h-3 w-3 opacity-60" />
                    {tech}
                  </Badge>
                ))}
              </div>
            </section>

            <div className="flex flex-wrap gap-3 border-t border-white/[0.06] pt-6">

              {project.github && (
                <Button variant="outline" className="h-11 rounded-2xl border border-white/10 bg-white/[0.05] px-5 text-white/80 transition-all hover:bg-white/10 hover:text-white">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 items-center">
                    <GithubIcon height="2em"/>
                    Repository
                  </a>
                </Button>
              )}

              {project.figma && (
                <Button variant="outline" className="h-11 rounded-2xl border border-white/10 bg-white/[0.05] px-5 text-white/80 transition-all hover:bg-white/10 hover:text-white">
                  <a href={project.figma} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    <FigmaIcon height="2em"/>
                    Figma
                  </a>
                </Button>
              )}

              {project.liveUrl && (
                <Button className="h-11 rounded-2xl border-0 px-5 text-black shadow-lg transition-all hover:scale-[1.02]" style={{ background: project.accentColor }}>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                    <Globe className="mr-2 h-4 w-4" />
                    Live Demo
                    <ArrowUpRight className="ml-2 h-4 w-4" />
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