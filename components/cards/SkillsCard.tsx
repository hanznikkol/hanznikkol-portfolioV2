import { skills } from '@/data/skills'
import { Badge } from '@/components/ui/badge'

export default function SkillsCard() {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#111111] p-6">
      <p className="font-mono text-xs tracking-widest text-white/30 uppercase">
        Skills
      </p>
      <div className="mt-4 flex flex-col gap-4">
        {skills.map((group) => (
          <div key={group.category}>
            <p className="mb-2 text-xs text-white/30">{group.category}</p>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="rounded-lg border-white/10 bg-white/5 text-xs text-white/60"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}