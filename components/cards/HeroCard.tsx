'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { FileText, ArrowUpRight } from 'lucide-react'
import GithubIcon from '@iconify-react/mdi/github';

export default function HeroCard() {
  return (
    <div className="flex h-full min-h-[200px] items-center justify-between rounded-2xl border border-white/10 bg-[#111111] p-6">
      <div className="flex flex-col gap-3">
        <div>
          <p className="font-mono text-xs tracking-widest text-white/40 uppercase">
            Available for work
          </p>
          <h1 className="mt-1 text-4xl font-semibold tracking-tight text-white lg:text-5xl">
            Hanz Nikkol
          </h1>
          <p className="mt-1 text-base text-white/50">
            Frontend Developer · Lucena City, PH
          </p>
        </div>
        <p className="max-w-sm text-sm text-white/40">
          Building clean interfaces and shipping real products.
        </p>
        <div className="flex gap-2">
         <Button
            variant="outline"
            size="sm"
            className="rounded-xl border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
            >
            <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className='flex gap-2 items-center'
            >
                <GithubIcon height='32'/>
                GitHub
            </a>
            </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex rounded-xl border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
          >
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className='flex items-center'>
              <FileText className="mr-1.5 h-3.5 w-3.5" />
              Resume
              <ArrowUpRight className="ml-1 h-3 w-3" />
            </a>
          </Button>
        </div>
      </div>

      {/* Avatar */}
      <div className="relative hidden shrink-0 md:block">
        <div className="h-24 w-24 overflow-hidden rounded-2xl border border-white/10 lg:h-28 lg:w-28">
          <Image
            src="/avatar.jpg"
            alt="Hanz Nikkol"
            width={112}
            height={112}
            className="h-full w-full object-cover"
          />
        </div>
        <span className=" animate-pulse absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full border border-black bg-emerald-500">
        </span>
      </div>
    </div>
  )
}