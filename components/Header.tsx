'use client'

import { useEffect, useRef } from 'react'

interface HeaderProps {
  open: boolean
  onToggle: () => void
  onClose: () => void
}

const menuItems = ['Últimos guardados', 'Perfil', 'Configuración', 'Suscripción', 'Ayuda']

export function Header({ open, onToggle, onClose }: HeaderProps) {
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (open && panelRef.current && !panelRef.current.contains(event.target as Node)) {
        onClose()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open, onClose])

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-md items-center px-4">
        <button
          aria-label="Abrir menú"
          onClick={onToggle}
          className="rounded-md p-2 text-slate-700 transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
          type="button"
        >
          ☰
        </button>
        <p className="flex-1 text-center text-lg font-semibold tracking-tight">Save2myTV</p>
        <div className="w-9" />
      </div>

      {open && (
        <div className="absolute inset-x-0 top-14 bg-black/30 px-4 pb-3">
          <div ref={panelRef} className="mx-auto max-w-md rounded-xl bg-white p-2 shadow-lg">
            {menuItems.map((item) => (
              <button
                key={item}
                type="button"
                className="w-full rounded-lg px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-100"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
