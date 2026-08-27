import ExperienceContent from '../modals/ExperienceContent'

interface ExperienceModalProps {
  open: boolean
  onClose: () => void
}

export default function ExperienceModal({ open, onClose }: ExperienceModalProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 p-0 sm:p-4">

      {/* BACKDROP */}
      <div
        className="absolute inset-0"
        onClick={onClose}
      />

      {/* MODAL */}
      <div
        className="
          relative w-full sm:max-w-xl
          h-[85vh] sm:h-auto
          max-h-[90vh]
          overflow-hidden
          flex flex-col
          rounded-t-2xl sm:rounded-2xl
          border border-white/10
          bg-surface-3
        "
      >

        {/* HEADER (sticky for mobile UX) */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-white/10">

          <h2 className="text-sm font-semibold text-white">
            Experience
          </h2>

          <button
            onClick={onClose}
            className="text-white/40 hover:text-white text-lg"
          >
            ✕
          </button>

        </div>

        {/* CONTENT (scroll area) */}
        <div className="flex-1 overflow-y-auto custom-scrollbar px-5 sm:px-6 py-4">
          <ExperienceContent />
        </div>

      </div>
    </div>
  )
}