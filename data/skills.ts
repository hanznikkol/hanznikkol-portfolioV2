export interface SkillGroup {
  category: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    category: 'Frontend',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Supabase', 'PostgreSQL', 'REST API'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Figma', 'VS Code', 'Vercel'],
  },
]