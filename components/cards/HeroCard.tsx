'use client'

import Image from 'next/image'
import { FileText, ArrowUpRight } from 'lucide-react'
import GithubIcon from '@iconify-react/mdi/github';
import LinkedInIcon from '@iconify-react/devicon/linkedin'
import FlagPhilippinesIcon from '@iconify-react/twemoji/flag-philippines';

export default function HeroCard() {
  return (
    <div className="relative flex min-h-72 h-full items-center justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0e0e0e] p-6">

      {/* glow */}
      <div className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

      {/* LEFT CONTENT */}
      <div className="relative flex flex-col gap-4">

        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-white lg:text-5xl">
            Hanz Nikkol Maas
          </h1>
          <p className="mt-1.5 text-sm text-white/40 flex items-center gap-2">
            Developer · Lucena City, PH
            <FlagPhilippinesIcon height="1em" />
          </p>
        </div>

        <p className="max-w-xs text-sm leading-relaxed text-white/40">
          Building clean interfaces and shipping real products.
        </p>

        <div className="flex gap-2">
          <a
            href="mailto:hanznikkolmaas@gmail.com"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl px-4 py-2 text-xs font-medium text-black transition"
          >
            {/* glow background */}
            <span className="absolute inset-0 bg-gradient-to-r from-white via-white to-white/80" />

            {/* subtle hover sheen */}
            <span className="absolute -left-full top-0 h-full w-full bg-white/40 transition-all duration-500 group-hover:left-full" />

            <span className="relative flex items-center gap-2">
              Contact Me
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>

          <a
            href="https://linkedin.com/in/hanznikkol"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60 transition-colors hover:bg-white/10 hover:text-white"
          >
            <LinkedInIcon height="1.4em"/>
          </a>
          
          <a
            href="https://github.com/hanznikkol"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60 transition-colors hover:bg-white/10 hover:text-white"
          >
            <GithubIcon height="1.4em" />
          </a>
          
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60 transition-colors hover:bg-white/10 hover:text-white"
          >
            <FileText className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* AVATAR */}
      <div className="absolute top-5 right-5 md:static md:block shrink-0">
        <div className="relative">
          <div className="absolute inset-0 scale-110 rounded-2xl bg-blue-500/10 blur-xl" />

          <div className="relative h-14 w-14 overflow-hidden rounded-xl border border-white/10 md:h-24 md:w-24 lg:h-28 lg:w-28">
            <Image
              src="/avatar.jpg"
              alt="Hanz Nikkol"
              width={112}
              height={112}
              className="h-full w-full object-cover"
            />
          </div>

          <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full border border-black bg-emerald-500 md:h-4 md:w-4">
            <span className="h-1.5 w-1.5 animate-ping rounded-full bg-emerald-300 opacity-75" />
          </span>
        </div>
      </div>
      
    </div>
  )
}