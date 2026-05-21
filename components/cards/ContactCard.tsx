import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'

export default function ContactCard() {
  return (
    <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/10 bg-[#111111] p-6 sm:flex-row sm:items-center">
      <div>
        <p className="font-mono text-xs tracking-widest text-white/30 uppercase">
          Contact
        </p>
        <p className="mt-1 text-sm text-white/50">
          Open for internships &amp; junior roles ·{' '}
          <span className="text-emerald-400/80">Available now</span>
        </p>
      </div>
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          className="rounded-xl border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
        >
          <a href="mailto:your@email.com">
            <Mail className="mr-1.5 h-3.5 w-3.5" />
            Email
          </a>
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="rounded-xl border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
        >
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="rounded-xl border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
        >
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </Button>
      </div>
    </div>
  )
}