import { skills } from "@/data/skills"
import { Icon } from "@iconify/react"
import { X } from "lucide-react"

export default function SkillsModal({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* modal box */}
      <div className="relative w-full m-4 md:m-0 md:max-w-2xl rounded-2xl border border-white/10 bg-surface-3 p-6">

        {/* header */}
        <div className="flex items-center justify-between">
          <p className="text-xs font-mono tracking-widest text-white/30 uppercase">
            All Skills
          </p>

          <button
            onClick={onClose}
            className="text-white/40 hover:text-white transition"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* content */}
        <div className="mt-5 flex flex-col gap-5 max-h-[60vh] overflow-y-auto pr-1">

          {skills.map((group) => (
            <div key={group.category}>

              <p className="mb-2 text-[10px] font-medium text-white/30 tracking-wider">
                {group.category}
              </p>

              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="
                      flex items-center gap-1.5
                      rounded-lg border border-white/10
                      bg-white/5 px-2 py-1
                      text-xs text-white/60
                      hover:bg-white/10 hover:text-white
                    "
                  >
                    <Icon
                      icon={skill.icon}
                      className="h-3.5 w-3.5"
                      style={{ color: skill.color }}
                    />
                    {skill.name}
                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  )
}