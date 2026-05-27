export interface SkillItem {
  name: string
  icon: string
  color?: string
}

export interface SkillGroup {
  category: string
  items: SkillItem[]
}

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", icon: "devicon:html5", color: "#E34F26" },
      { name: "CSS3", icon: "devicon:css3", color: "#1572B6" },
      { name: "JavaScript", icon: "devicon:javascript", color: "#F7DF1E" },
      { name: "TypeScript", icon: "devicon:typescript", color: "#3178C6" },
      { name: "React", icon: "devicon:react", color: "#61DAFB" },
      { name: "Next.js", icon: "devicon:nextjs", color: "#ffffff" },
      { name: "Vue.js", icon: "devicon:vuejs", color: "#42B883" },
      { name: "Tailwind CSS", icon: "devicon:tailwindcss", color: "#38BDF8" },
      { name: "Vite", icon: "devicon:vitejs", color: "#646CFF" },
      { name: "ESLint", icon: "devicon:eslint", color: "#4B32C3" },
    ],
  },

  {
    category: "Backend",
    items: [
      { name: "Java", icon: "devicon:java", color: "#007396" },
      { name: "C# (.NET)", icon: "devicon:csharp", color: "#9B4F96" },
      { name: "PostgreSQL (SQL)", icon: "devicon:postgresql", color: "#4169E1" },
      { name: "Supabase", icon: "simple-icons:supabase", color: "#3ECF8E" },
      { name: "Microsoft SQL Server", icon: "devicon:microsoftsqlserver", color: "#CC2927" },
      { name: "REST API", icon: "devicon:fastapi", color: "#009688" }, 
    ],
  },

  {
    category: "Developer Tools",
    items: [
      { name: "Git", icon: "devicon:git", color: "#F05032" },
      { name: "GitHub", icon: "mdi:github", color: "#eeeee" },
      { name: "VS Code", icon: "devicon:vscode", color: "#007ACC" },
      { name: "Visual Studio", icon: "devicon:visualstudio"},
      { name: "Trello", icon: "devicon:trello", color: "#0052CC" },
      { name: "Slack", icon: "devicon:slack", color: "#4A154B" },
      { name: "Microsoft Teams", icon: "devicon:azuredevops", color: "#6264A7" },

    ],
  },
]