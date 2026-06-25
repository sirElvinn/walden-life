import { useState } from 'react'

import mapImg from '../assets/images/walden-minimap.png' // put your image in /public/
const MAP_SRC = mapImg

export default function WaldenMinimap() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Thumbnail — bottom right corner */}
      <div
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-40 h-24 rounded-[10px] overflow-hidden border-2 border-accent/60 shadow-lg cursor-pointer transition-transform duration-300 hover:scale-[1.08] hover:border-accent hover:shadow-xl"
      >
        <img src={MAP_SRC} alt="Walden Pond map" className="w-full h-full object-cover" />
        <span className="absolute bottom-1.5 left-2 text-[10px] text-[#faf9f6] bg-black/50 px-1.5 py-0.5 rounded tracking-wide">
          Walden Pond
        </span>
      </div>

      {/* Expanded modal */}
      {open && (
        <div
          className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center"
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          <div className="relative max-w-[min(92vw,860px)] max-h-[88vh] rounded-[14px] overflow-hidden border-2 border-accent/50 shadow-2xl">
            <img
              src={MAP_SRC}
              alt="Walden Pond illustrated map"
              className="block w-full h-auto max-h-[88vh] object-contain"
            />
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 w-8 h-8 bg-black/60 hover:bg-accent rounded-md text-[#faf9f6] text-lg leading-none flex items-center justify-center transition-colors"
            >
              ✕
            </button>
            <p className="absolute bottom-0 left-0 right-0 bg-black/65 px-4 py-2.5 text-[13px] text-[#d4cfc8] italic font-serif">
              Walden Pond, Concord · Thoreau's cabin site marked in red · Deepest point 102 feet
            </p>
          </div>
        </div>
      )}
    </>
  )
}