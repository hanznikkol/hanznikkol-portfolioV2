export interface Project {
  id: string
  title: string
  year: string
  shortDescription: string
  fullDescription: string
  features: string[]
  challenges?: string
  tech: string[]
  accentColor: string
  github?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    id: 'spontee',
    title: 'Spontee',
    year: '2024',
    shortDescription: 'Real-time group decision app for couples & friends.',
    fullDescription:
      'Spontee solves the "where should we go?" paralysis. Rooms are created, members swipe on options, and the engine surfaces the best match in real-time. Built with a phase system: lobby → voting → result.',
    features: [
      'Room creation with shareable invite codes',
      'Swipe-based voting engine with phase transitions',
      'Real-time result aggregation',
      'Supabase Realtime for live sync',
    ],
    challenges:
      'Stale closure bug in the swipe handler — fixed by using a ref to hold mutable voting state outside the closure.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
    accentColor: '#6ee7b7',
    github: 'https://github.com/yourusername/spontee',
  },
  {
    id: 'classpulse',
    title: 'ClassPulse AI',
    year: '2024',
    shortDescription: 'Full SaaS boilerplate with warm editorial design system.',
    fullDescription:
      'Production-ready SaaS starter — Next.js 14, TypeScript, Tailwind, Supabase. Includes complete auth pages, reusable component library, PostgreSQL schema with RLS policies, and a custom warm editorial design system.',
    features: [
      'Auth flow (sign up, sign in, forgot password)',
      'Custom design tokens & component library',
      'Supabase RLS policy setup',
      'PostgreSQL schema scaffolding',
    ],
    tech: ['Next.js 14', 'TypeScript', 'Supabase', 'Tailwind'],
    accentColor: '#fbbf24',
    github: 'https://github.com/yourusername/classpulse',
  },
  {
    id: 'conquest',
    title: 'ConQuest',
    year: '2023',
    shortDescription: 'Gamified quiz platform for classroom engagement.',
    fullDescription:
      'A gamified classroom quiz platform with real-time leaderboards, question banks, and session management. Designed for projected classroom use with accessible typography and high contrast.',
    features: [
      'Live leaderboard updates',
      'Question bank management',
      'Teacher dashboard for session control',
      'Optimized for projector readability',
    ],
    tech: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
    accentColor: '#a78bfa',
    github: 'https://github.com/yourusername/conquest',
  },
  {
    id: 'oneflow',
    title: 'ONEFlow',
    year: '2023',
    shortDescription: 'Unified task and workflow management dashboard.',
    fullDescription:
      'ONEFlow consolidates task tracking, workflow stages, and team status into a single dashboard. Emphasis on scan-ability — everything visible without drilling down.',
    features: [
      'Kanban + list view toggle',
      'Workflow stage editor',
      'Activity log per task',
    ],
    tech: ['React', 'TypeScript', 'Tailwind', 'REST API'],
    accentColor: '#38bdf8',
    github: 'https://github.com/yourusername/oneflow',
  },
  {
    id: 'healthme',
    title: 'HealthMe',
    year: '2023',
    shortDescription: 'Personal health tracking with symptom logging.',
    fullDescription:
      'A lightweight health tracker focused on daily symptom logging, hydration, and medication reminders. Mobile-first design with offline-first capability via localStorage.',
    features: [
      'Symptom log with severity scale',
      'Medication reminder system',
      'Weekly health summary export',
    ],
    tech: ['React', 'Tailwind', 'localStorage', 'PWA'],
    accentColor: '#f472b6',
    github: 'https://github.com/yourusername/healthme',
  },
]