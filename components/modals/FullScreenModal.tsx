import Image from "next/image"
import { X } from "lucide-react"

type FullScreenModalProps = {
  selected: string | null
  onClose: () => void
}

export default function FullScreenModal({
  selected,
  onClose,
}: FullScreenModalProps) {
  if (!selected) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      {/* close button */}
      <button
        className="absolute top-5 right-5 text-white/70 hover:text-white"
        onClick={onClose}
      >
        <X size={28} />
      </button>

      {/* image container */}
      <div
        className="relative w-[95vh] h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={selected}
          alt="fullscreen"
          fill
          unoptimized
          className="object-contain"
        />
      </div>
    </div>
  )
}