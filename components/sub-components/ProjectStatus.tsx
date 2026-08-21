import { CircleDot } from 'lucide-react'

interface ProjectStatusProps {
  status: 'developing' | 'finished'
}

export default function ProjectStatus({ status }: ProjectStatusProps) {
  if (status === 'developing') {
    return (
      <div className="group relative flex items-center gap-2 overflow-hidden rounded-full border border-yellow-400/30 bg-black/60 px-3 py-1.5 text-xs font-medium text-yellow-200 shadow-lg backdrop-blur-md">
        {/* Subtle shimmer */}
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

        {/* Status dot */}
        <span className="relative flex h-2 w-2 shrink-0">
          {/* Outer glow */}
          <span className="absolute -inset-1 animate-[ping_2s_ease-in-out_infinite] rounded-full bg-yellow-400/20" />

          {/* Soft breathing glow */}
          <span className="absolute inset-0 animate-pulse rounded-full bg-yellow-400/40 blur-[2px]" />

          {/* Core dot */}
          <span className="relative h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
        </span>

        <span className="relative">
          Developing
        </span>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2 rounded-full border border-emerald-400/30 bg-black/60 px-3 py-1.5 text-xs font-medium text-emerald-200 shadow-lg backdrop-blur-md">
      <CircleDot className="h-3 w-3 fill-emerald-300" />
      Finished
    </div>
  )
}