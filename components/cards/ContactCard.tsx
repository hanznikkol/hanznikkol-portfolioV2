'use client'
import { Mail, FileText } from 'lucide-react'
import FacebookIcon from '@iconify-react/devicon/facebook'
import InstagramIcon from '@iconify-react/skill-icons/instagram'
import LinkedinIcon from '@iconify-react/devicon/linkedin'
import GithubIcon from '@iconify-react/mdi/github'
import TiktokIcon from '@iconify-react/logos/tiktok-icon';

export default function ContactCard() {

  const socials = [
      { icon: FacebookIcon, href: 'https://www.facebook.com/hanznikkolbabatmaas/' },
      { icon: InstagramIcon, href: 'https://www.instagram.com/iamnikkol_/' },
      { icon: TiktokIcon, href: 'https://www.tiktok.com/@iamnikkol_'}
  ]

  return (
    <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#111111] p-6 w-full">

      {/* MAIN LAYOUT */}
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr_0.9fr]">

        {/* INTRO */}
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-white/50 font-bold">
            Contact
          </p>

          <p className="mt-2 text-sm leading-relaxed text-white/70">
            Open for freelance work, collaborations, internships,
            and developer opportunities.
          </p>
        </div>

        {/* PROFESSIONAL CONTACTS */}
        <div>
          <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-white/30">
            Professional
          </p>  

          <div className="flex flex-col gap-2">
            <a
              href="mailto:hanznikkolmaas@gmail.com"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-2 py-1.5 text-xs text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/hanznikkol"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-2 py-1.5 text-xs text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn
            </a>

            <a
              href="https://github.com/hanznikkol"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-2 py-1.5 text-xs text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-2 py-1.5 text-xs text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              <FileText className="h-4 w-4" />
              Resume
            </a>

          </div>
        </div>

        {/* SOCIALS */}
        <div>
          <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-white/30">
            Socials
          </p>

          <div className="flex flex-wrap gap-2">

            {socials.map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-xl border border-white/10
                  bg-white/5 text-white/60
                  transition-all duration-200
                  hover:border-white/20
                  hover:bg-white/10
                  hover:text-white
                "
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}

          </div>
        </div>

      </div>
    </div>
  )
}