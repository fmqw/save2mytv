'use client'

import { useMemo, useState } from 'react'
import { BottomNav } from '@/components/BottomNav'
import { EmptyState } from '@/components/EmptyState'
import { FilterChips, FilterValue } from '@/components/FilterChips'
import { Header } from '@/components/Header'
import { NoResultsState } from '@/components/NoResultsState'
import { ScreenTitle } from '@/components/ScreenTitle'
import { SearchBar } from '@/components/SearchBar'
import { SortDropdown, SortValue } from '@/components/SortDropdown'
import { TvNotLinkedModal } from '@/components/TvNotLinkedModal'
import { VideoCard } from '@/components/VideoCard'
import { SavedVideo, mockVideos } from '@/data/mockVideos'

type DemoMode = 'normal' | 'vacio'

function parseDuration(value: string) {
  const [m, s] = value.split(':').map(Number)
  return m * 60 + s
}

export default function HomePage() {
  const [videos, setVideos] = useState<SavedVideo[]>(mockVideos)
  const [menuOpen, setMenuOpen] = useState(false)
  const [tvModalOpen, setTvModalOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<FilterValue>('todos')
  const [sort, setSort] = useState<SortValue>('recent')
  const [mode, setMode] = useState<DemoMode>('normal')

  const visibleVideos = useMemo(() => {
    if (mode === 'vacio') return []

    let result = [...videos]

    if (query.trim()) {
      const q = query.toLowerCase().trim()
      result = result.filter((video) => video.title.toLowerCase().includes(q) || video.source.toLowerCase().includes(q))
    }

    if (filter !== 'todos') {
      result = result.filter((video) => video.status === filter)
    }

    result.sort((a, b) => {
      if (sort === 'recent') return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      if (sort === 'oldest') return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      if (sort === 'az') return a.title.localeCompare(b.title)
      return parseDuration(b.duration) - parseDuration(a.duration)
    })

    return result
  }, [videos, query, filter, sort, mode])

  const hasNoResults = mode === 'normal' && videos.length > 0 && visibleVideos.length === 0
  const showEmpty = mode === 'vacio' || videos.length === 0

  return (
    <main className="mx-auto min-h-screen max-w-md bg-slate-100 pb-24">
      <Header open={menuOpen} onToggle={() => setMenuOpen((prev) => !prev)} onClose={() => setMenuOpen(false)} />
      <ScreenTitle />

      <div className="px-4 pt-3">
        <div className="flex items-center justify-between rounded-xl bg-white p-2 text-xs ring-1 ring-slate-200">
          <span className="font-medium text-slate-600">Modo demo</span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setMode('normal')}
              className={`rounded-md px-2.5 py-1 ${mode === 'normal' ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-600'}`}
            >
              Normal
            </button>
            <button
              type="button"
              onClick={() => setMode('vacio')}
              className={`rounded-md px-2.5 py-1 ${mode === 'vacio' ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-600'}`}
            >
              Vacío
            </button>
          </div>
        </div>
      </div>

      {!showEmpty && (
        <>
          <SearchBar value={query} onChange={setQuery} />
          <FilterChips value={filter} onChange={setFilter} />
          <SortDropdown value={sort} onChange={setSort} />
        </>
      )}

      {showEmpty ? (
        <EmptyState />
      ) : hasNoResults ? (
        <NoResultsState
          onReset={() => {
            setQuery('')
            setFilter('todos')
          }}
        />
      ) : (
        <section className="space-y-3 px-4 py-4">
          {visibleVideos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onDelete={(id) => setVideos((prev) => prev.filter((item) => item.id !== id))}
              onOpenTvModal={() => setTvModalOpen(true)}
              onToggleReminder={(id) =>
                setVideos((prev) => prev.map((item) => (item.id === id ? { ...item, reminded: !item.reminded } : item)))
              }
            />
          ))}
        </section>
      )}

      <TvNotLinkedModal open={tvModalOpen} onClose={() => setTvModalOpen(false)} />
      <BottomNav />
    </main>
  )
}
