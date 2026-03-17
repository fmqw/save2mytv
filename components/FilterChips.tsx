import { VideoStatus } from '@/data/mockVideos'

export type FilterValue = 'todos' | VideoStatus

interface FilterChipsProps {
  value: FilterValue
  onChange: (value: FilterValue) => void
}

const filters: { label: string; value: FilterValue }[] = [
  { label: 'Todos', value: 'todos' },
  { label: 'Nuevo', value: 'nuevo' },
  { label: 'Empezado', value: 'empezado' },
  { label: 'Visto', value: 'visto' },
  { label: 'En TV', value: 'enviado_al_tv' }
]

export function FilterChips({ value, onChange }: FilterChipsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto px-4 py-3">
      {filters.map((filter) => {
        const active = filter.value === value
        return (
          <button
            key={filter.value}
            type="button"
            onClick={() => onChange(filter.value)}
            className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-medium transition ${
              active
                ? 'border-amber-500 bg-amber-500 text-white'
                : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'
            }`}
            aria-pressed={active}
          >
            {filter.label}
          </button>
        )
      })}
    </div>
  )
}
