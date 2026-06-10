'use client'

import { useState } from "react"
import { skills } from "@/data/skills"
import { Icon } from "@iconify/react"
import SkillsModal from "../modals/SkillsModal"

// curated preview
const previewSkills = [
  // Frontend core
  "React",
  "Next.js",
  "TypeScript",
  "Vue.js",

  // Backend proof
  "Supabase",
  "PostgreSQL (SQL)",
  "REST API",

  // Tools / workflow credibility
  "Git",
  "GitHub",
  "VS Code",
]

export default function SkillsCard() {
  const [open, setOpen] = useState(false)

  const displayedSkills = skills.map(group => ({
    ...group,
    items: group.items.filter(skill =>
      previewSkills.includes(skill.name)
    ),
  }))

  return (
    <>
      <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#111111] p-6 select-none">

        {/* header */}
        <div className="flex items-center justify-between">
          <p className="font-mono text-xs tracking-widest text-white/50 font-bold uppercase">
            Tech Stack
          </p>

          <button
            onClick={() => setOpen(true)}
            className="text-xs text-white/40 hover:text-white transition"
          >
            View all →
          </button>
        </div>

        {/* preview only */}
        <div className="mt-5 flex flex-col gap-5">

          {displayedSkills.map((group) => (
            group.items.length > 0 && (
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
                        transition
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
            )
          ))}

        </div>

      </div>

      {/* modal */}
      <SkillsModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}