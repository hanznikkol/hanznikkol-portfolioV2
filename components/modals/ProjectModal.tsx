'use client'

import Image from 'next/image'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Globe, ArrowUpRight, Sparkles, Layers3, Wrench, CalendarDays, CircleDot, Rocket, ShieldAlert, ImageIcon, X } from 'lucide-react'
import GithubIcon from '@iconify-react/mdi/github';
import FigmaIcon from '@iconify-react/devicon/figma'
import type { Project } from '@/data/projects'
import ProjectStatus from '../sub-components/ProjectStatus'

interface ProjectModalProps {
  project: Project
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="no-scrollbar max-h-[92vh] overflow-y-auto overflow-x-hidden border border-white/10 bg-[#0b0b0b] p-0 text-white shadow-2xl shadow-black/40 sm:max-w-4xl">
        {/* Gradient background */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -right-30 -top-24 h-72 w-72 rounded-full blur-3xl" style={{ background: `${project.accentColor}25` }}/>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_35%)]" />
        </div>

        {project.preview && (
          <div className="relative h-80 w-full overflow-hidden border-b border-white/10">
            {/* Background Overlay */}
            <Image src={project.preview} alt={project.title} fill priority className="object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-[#0b0b0b] via-black/40 to-black/10" />
            <div className="absolute -bottom-16 right-0 h-56 w-56 rounded-full blur-3xl" style={{ background: `${project.accentColor}50` }} />

            {/* Main Header */}
            <div className="absolute bottom-0 left-0 w-full p-7">
              <div className="flex items-end justify-between gap-5 w-full">

                {/* LEFT SIDE: image + title */}
                <div className="flex items-end gap-5">

                  <div className="group relative hidden md:block overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl">
                    <div className="absolute inset-0 bg-black/20" />
                    <Image
                      src={project.preview}
                      alt={project.title}
                      width={88}
                      height={88}
                      className="h-22 w-22 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <div
                        className="h-2 w-2 rounded-full"
                        style={{ background: project.accentColor }}
                      />
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/50">
                        {project.year}
                      </span>
                    </div>

                    <DialogTitle className="text-4xl font-semibold tracking-tight text-white">
                      {project.title}
                    </DialogTitle>

                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/65">
                      {project.shortDescription}
                    </p>
                  </div>
                </div>

                {/* RIGHT SIDE: BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-2 sm:items-center">

                  {project.github && (
                    <Button
                      variant="outline"
                      className="h-10 rounded-2xl border border-white/10 bg-white/5 px-4 text-white/80 hover:bg-white/10 hover:text-white"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                        <GithubIcon height="1.5em" />
                        <span className="hidden sm:inline">Repo</span>
                      </a>
                    </Button>
                  )}

                  {project.figma && (
                    <Button
                      variant="outline"
                      className="h-10 rounded-2xl border border-white/10 bg-white/5 px-4 text-white/80 hover:bg-white/10 hover:text-white"
                    >
                      <a href={project.figma} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                        <FigmaIcon height="1.5em" />
                        <span className="hidden sm:inline">Figma</span>
                      </a>
                    </Button>
                  )}

                  {project.liveUrl && (
                    <Button
                      className="h-10 rounded-2xl px-4 text-black"
                      style={{ background: project.accentColor }}
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                        <Globe className="h-4 w-4" />
                        <span className="hidden sm:inline">Live</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </Button>
                  )}

                </div>

              </div>
            </div>
          </div>
        )}

        {/* Main */}
        <div className="relative p-7">
          <DialogHeader className="w-full space-y-5">
            {/* TOP: LEFT + RIGHT */}
            <div className="flex items-center gap-4">

              {/* STATUS */}
              <div className="shrink-0">
                <ProjectStatus status={project.status!} />
              </div>

            </div>

            {/* FULL WIDTH DESCRIPTION */}
            <div className="w-full">
              <p className="w-full text-sm leading-relaxed text-white/60">
                {project.fullDescription}
              </p>
            </div>

          </DialogHeader>

          <div className="mt-8 space-y-8">
            
            {/* Images */}
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
                        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
            
            {/* Key Features */}
            {project.features?.length > 0 && (
              <section className="rounded-3xl border border-white/10 bg-white/3 p-5 backdrop-blur-sm">
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
            
            

            {/* Challenges */}
            {project.challenges && (
              <section className="rounded-3xl border border-orange-500/10 bg-orange-500/[0.03] p-5">
                <div className="mb-3 flex items-center gap-2">
                  <ShieldAlert className="h-4 w-4 text-orange-300" />
                  <h3 className="font-medium text-white">Challenges</h3>
                </div>

                <p className="text-sm leading-relaxed text-white/60">{project.challenges}</p>
              </section>
            )}

            {/* Tech Stacks */}
            <section>
              <div className="mb-4 flex items-center gap-2">
                <Layers3 className="h-4 w-4" style={{ color: project.accentColor }} />
                <h3 className="font-medium text-white">Tech Stack</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} className="rounded-xl border border-white/10 bg-white/4 px-3 py-1 text-xs font-medium text-white/70 transition-all hover:border-white/20 hover:bg-white/[0.08] hover:text-white">
                    <Wrench className="mr-1.5 h-3 w-3 opacity-60" />
                    {tech}
                  </Badge>
                ))}
              </div>
            </section>
            
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}