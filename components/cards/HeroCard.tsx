'use client'

import Image from 'next/image'
import { FileText, ArrowUpRight } from 'lucide-react'
import GithubIcon from '@iconify-react/mdi/github';
import FlagPhilippinesIcon from '@iconify-react/twemoji/flag-philippines';

export default function HeroCard() {
  return (
    <div className="relative flex min-h-72 items-center justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0e0e0e] p-6">

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
            href="https://github.com/hanznikkol"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60 transition-colors hover:bg-white/10 hover:text-white"
          >
            <GithubIcon height="1.5em" />
            GitHub
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60 transition-colors hover:bg-white/10 hover:text-white"
          >
            <FileText className="h-3.5 w-3.5" />
            Resume
            <ArrowUpRight className="h-3 w-3" />
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