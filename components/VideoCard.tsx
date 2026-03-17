'use client'

import { useEffect, useRef, useState } from 'react'
import { SavedVideo } from '@/data/mockVideos'

interface VideoCardProps {
  video: SavedVideo
  onDelete: (id: string) => void
  onOpenTvModal: () => void
  onToggleReminder: (id: string) => void
}

const statusLabel: Record<SavedVideo['status'], string> = {
  nuevo: 'Nuevo',
  empezado: 'Empezado',
  visto: 'Visto',
  enviado_al_tv: 'Enviado al TV'
}

function getPrimaryCta(status: SavedVideo['status']) {
  if (status === 'nuevo') return 'Ver ahora'
  if (status === 'empezado') return 'Continuar'
  if (status === 'visto') return 'Ver de nuevo'
  return 'Abrir en móvil'
}

export function VideoCard({ video, onDelete, onOpenTvModal, onToggleReminder }: VideoCardProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onOutsideClick(e: MouseEvent) {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', onOutsideClick)
    return () => document.removeEventListener('mousedown', onOutsideClick)
  }, [menuOpen])

  return (
    <article className="relative rounded-2xl bg-white p-3 shadow-sm ring-1 ring-slate-200">
      <div className="flex gap-3">
        <div className="relative aspect-video w-28 flex-none rounded-lg bg-slate-300">
          <div className="absolute inset-0 flex items-center justify-center p-1 text-center text-[10px] font-semibold text-slate-700">
            {video.thumbnailLabel}
          </div>
          <span className="absolute bottom-1 right-1 rounded bg-black/70 px-1.5 py-0.5 text-[10px] text-white">{video.duration}</span>
        </div>
        <div className="min-w-0 flex-1">
          <p className="line-clamp-2 text-sm font-semibold leading-tight text-slate-900">{video.title}</p>
          <p className="mt-1 text-xs text-slate-600">{video.source}</p>
          <span className="mt-2 inline-block rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600">
            {statusLabel[video.status]}
          </span>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a
            href={video.videoUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-300 px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-100"
            aria-label={`Ver ${video.title} en móvil`}
          >
            📱 {getPrimaryCta(video.status)}
          </a>
          <button
            type="button"
            onClick={onOpenTvModal}
            className="rounded-lg border border-slate-300 px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-100"
            aria-label={`Enviar ${video.title} al TV`}
          >
            📺 TV
          </button>
          <button
            type="button"
            onClick={() => onToggleReminder(video.id)}
            className={`rounded-lg border px-2.5 py-1.5 text-xs ${
              video.reminded ? 'border-amber-500 text-amber-600' : 'border-slate-300 text-slate-700'
            }`}
            aria-label={`Recordar más tarde ${video.title}`}
          >
            ⏰
          </button>
        </div>

        <div className="relative" ref={menuRef}>
          <button
            type="button"
            aria-label="Abrir acciones"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-md p-1.5 text-slate-600 hover:bg-slate-100"
          >
            ⋮
          </button>
          {menuOpen && (
            <div className="absolute right-0 top-8 z-20 w-40 rounded-lg border border-slate-200 bg-white p-1 shadow-lg">
              <button
                type="button"
                onClick={() => {
                  onDelete(video.id)
                  setMenuOpen(false)
                }}
                className="w-full rounded-md px-2 py-1.5 text-left text-sm text-red-600 hover:bg-red-50"
              >
                🗑 Eliminar video
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
