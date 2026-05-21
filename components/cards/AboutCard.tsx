export default function AboutCard() {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-[#111111] p-6">
      <p className="font-mono text-xs tracking-widest text-white/30 uppercase">
        About
      </p>
      <div className="mt-4 space-y-2 text-sm leading-relaxed text-white/60">
        <p>
          Magna Cum Laude IT grad. Former instructor turned developer.
        </p>
        <p>
          I build full-stack products — from auth flows to UI systems — with
          a bias for shipping.
        </p>
        <p>
          Currently deep in Next.js, TypeScript, and Supabase.
        </p>
      </div>
    </div>
  )
}