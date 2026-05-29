'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { MessageCircle, X, Send } from 'lucide-react'
import { sendChatMessage } from '@/lib/chat'

function FloatingChat() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [showScrollButton, setShowScrollButton] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [messages, setMessages] = useState([
    {
      role: 'ai',
      text: 'Hi! I am Hanz 👋 Ask me anything about my portfolio.'
    }
  ])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = input

    setMessages(prev => [
      ...prev,
      { role: 'user', text: userMessage }
    ])

    setInput('')
    setTyping(true)

    try {
      const data = await sendChatMessage(userMessage)

      setMessages(prev => [
        ...prev,
        { role: 'me', text: data.reply }
      ])
    } catch (err: unknown) {
      setMessages(prev => [
        ...prev,
        { role: 'me', text: "Something went wrong 😅" }
      ])
    }

    setTyping(false)
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, typing])

  const handleScroll = () => {
    const el = containerRef.current
    if (!el) return

    const isNearBottom =
      el.scrollHeight - el.scrollTop - el.clientHeight < 80

    setShowScrollButton(!isNearBottom)
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-white text-black shadow-xl transition hover:scale-105"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 flex w-80 sm:w-96 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b]/90 shadow-2xl backdrop-blur-xl">

          {/* HEADER */}
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">

            {/* Left side */}
            <div className="flex items-center gap-3">

              {/* Avatar */}
              <div className="relative h-9 w-9 overflow-hidden rounded-full border border-white/10">
                <Image
                  src="/avatar.jpg"
                  alt="Hanz"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Name + status */}
              <div className="leading-tight">
                <p className="text-sm font-medium text-white">Hanz</p>

                <div className="flex items-center gap-2 text-[11px] text-white/60">
                  
                  {/* blinking online dot */}
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                  </span>

                  online • replies instantly
                </div>
              </div>
            </div>

          </div>

          {/* MESSAGES */}
          <div ref={containerRef} onScroll={handleScroll} className="flex-1 max-h-80 space-y-3 overflow-y-auto p-3 custom-scrollbar">

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-end gap-2 ${
                  msg.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >

                {/* avatar for Hanz */}
                {msg.role !== 'user' && (
                  <div className="h-6 w-6 overflow-hidden rounded-full border border-white/10">
                    <Image
                      src="/avatar.jpg"
                      alt="Hanz"
                      width={24}
                      height={24}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}

                {/* bubble */}
                <div
                  className={`max-w-[75%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-white text-black'
                      : 'bg-white/10 text-white border border-white/10'
                  }`}
                >
                  {msg.text}
                </div>

              </div>
            ))}

            {/* typing indicator */}
            {typing && (
              <div className="flex items-center gap-2 text-white/50 text-xs px-2">
                <span className="flex gap-1">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/40"></span>
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/40 [animation-delay:0.1s]"></span>
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/40 [animation-delay:0.2s]"></span>
                </span>
                Hanz is replying...
              </div>
            )}

          </div>

          {/* INPUT */}
          <div className="flex items-center gap-2 border-t border-white/10 bg-black/40 p-3 backdrop-blur">

            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Message Hanz..."
              className="flex-1 rounded-xl bg-white/5 px-3 py-2 text-sm text-white outline-none placeholder:text-white/30"
            />

            <button
              onClick={handleSend}
              className="rounded-xl bg-white p-2 text-black transition hover:opacity-80"
            >
              <Send size={16} />
            </button>

          </div>

        </div>
      )}
    </>
  )
}

export default FloatingChat