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
  figma?: string
  liveUrl?: string
  status?: 'developing' | 'finished'
  preview?: string,
  images?: string[]
}

export const projects: Project[] = [

  {
    id: 'ak',
    title: 'AK Lights and Sounds',
    year: '2026',
    shortDescription: 'Event rental and booking management platform for a local lights and sounds business.',
    fullDescription:
      'A booking and event management platform designed for AK Lights and Sounds, an event rental business offering lights and sound systems, karaoke, and 360 booth services. The system centralizes client records, event bookings, services, payments, and schedules into one platform, with a public-facing website for inquiries and business showcasing.',
    features: [
      'Public-facing landing page and service showcase',
      'Event inquiry and booking management',
      'Client and booking records',
      'Calendar-based event scheduling',
      'Service and package management',
      'Payment and balance tracking',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Prisma', 'MySQL', 'Tailwind CSS'],
    accentColor: '#6ee7b7',
    github: 'https://github.com/hanznikkol/aklightsandsounds',
    status: 'developing',
    preview: '/gallery/projects/AK/AK-preview.png'
  },
  {
    id: 'spontee',
    title: 'Spontee',
    year: '2026',
    shortDescription: 'Real-time group decision app for couples & friends.',
    fullDescription:
      'Spontee solves the "where should we go?" paralysis. Rooms are created, members swipe on options, and the engine surfaces the best match in real-time. Built with a phase system: lobby → voting → result.',
    features: [
      'Room creation with shareable invite codes',
      'Swipe-based voting engine with phase transitions',
      'Real-time result aggregation',
      'Supabase Realtime for live sync',
    ],
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
    accentColor: '#6ee7b7',
    github: 'https://github.com/hanznikkol/spontee',
    status: 'developing',
    preview: '/gallery/projects/spontee/spontee-preview.png'
  },
  {
    id: 'oneflow',
    title: 'ONEFlow',
    year: '2024',
    shortDescription: 'Web-based self-service kiosk queue management system',
    fullDescription:
      'ONEFlow is a Queue Management System (QMS) designed for STI College Lucena that streamlines student transactions in the Cashier, Registrar, and Admissions departments. It introduces a self-service kiosk for queue registration, SMS notifications for queue updates, QR-based ticket tracking, and a real-time display dashboard to improve customer flow, reduce waiting inefficiencies, and enhance overall service experience.',
    features: [
      'Self-service kiosk for queue registration',
      'Department-based and transaction-type selection',
      'SMS notifications for queue status updates',
      'QR code ticket tracking via web app',
      'Real-time queue display dashboard',
      'Paperless or printed ticket options',
      'First-come-first-served queue system'
    ],
    tech: [
      'Vue',
      'Javascript',
      'Tailwind',
      'Node.js',
      'IoT Integration',
      'REST API',
    ],

    accentColor: '#38bdf8',
    github: 'https://github.com/randalllegend/oneflow',
    figma: 'https://www.figma.com/design/If7gAiGoNhnNvYyWwZHkf3/Capstone-ONEFlow?t=iopeMyeS2LV7CTTO-0',
    status: 'finished',
    preview: '/gallery/projects/ONEFlow/oneflow-preview.png',
    images: [
      '/gallery/projects/ONEFlow/image1.png',
      '/gallery/projects/ONEFlow/image2.png',
      '/gallery/projects/ONEFlow/image3.png',
    ]
  },
  {
    id: 'conquest',
    title: 'ConQuest',
    year: '2025',
    shortDescription: 'Gamified quest platform that turns goals into interactive challenges.',
    fullDescription:'ConQuest is a gamified web platform where users complete quests, earn badges, and track progress through a reward-based system. It features team collaboration, achievement tracking, and an engaging UI designed to turn tasks and goals into an adventure experience.',
    features: [
      'Quest-based task and challenge system',
      'Badge and achievement collection',
      'Real-time progress tracking',
      'Team collaboration and engagement features',
      'Interactive and modern gamified UI',
    ],
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
    accentColor: '#06b6d4',
    github: 'https://github.com/randallegend/quest',
    preview: '/gallery/projects/ConQuest/quest-preview.png',
    images: [
      '/gallery/projects/ConQuest/image1.png',
      '/gallery/projects/ConQuest/image2.png',
      '/gallery/projects/ConQuest/image3.png',
    ],
    figma: 'https://www.figma.com/design/ip4n30Kp26jErA1Y9GDBm7/OpenIT-Codefest?node-id=0-1&p=f&t=0ruqSEga0K4LHg2p-0'
  },
]