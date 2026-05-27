export default function AboutCard() {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-[#111111] p-6">
      <p className="font-mono text-xs tracking-widest text-white/30 uppercase">
        About
      </p>
      <div className="mt-4 space-y-2 text-sm leading-relaxed text-white/60">
        <p>I build modern web applications with a focus on clarity, usability, and performance. </p>
        <p> I enjoy turning ideas into simple, functional interfaces and improving them through iteration.</p>
        <p> Currently working with Next.js, TypeScript, and Supabase. </p>
      </div>
    </div>
  )
}