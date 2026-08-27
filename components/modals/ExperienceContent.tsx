import { timeline } from "@/data/timeline"

export default function ExperienceContent() {
  return (
    <div className="relative">

      {/* Timeline line (desktop only feel) */}
      <div className="absolute left-2 top-0 bottom-0 w-px bg-white/10" />

      <div className="space-y-10">

        {timeline.map((item, i) => (
          <div key={i} className="relative pl-8">

            {/* DOT */}
            <div className="absolute left-0 top-1 h-3 w-3 rounded-full bg-blue-500 ring-4 ring-surface-3" />

            {/* HEADER */}
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">

              <h3 className="text-sm sm:text-base font-semibold text-white leading-tight">
                {item.title}
              </h3>

              <span className="text-[10px] sm:text-xs text-white/40 tracking-wider uppercase">
                {item.year}
              </span>

            </div>

            {/* COMPANY */}
            <p className="mt-1 text-xs sm:text-sm text-white/50">
              {item.company}
            </p>

            {/* DESCRIPTION CARD FEEL */}
            <div className="mt-3 rounded-xl border border-white/10 bg-white/3 p-3 sm:p-4">
              <p className="text-xs sm:text-sm leading-relaxed text-white/60">
                {item.description}
              </p>
            </div>

          </div>
        ))}

      </div>
    </div>
  )
}