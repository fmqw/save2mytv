export type SortValue = 'recent' | 'oldest' | 'az' | 'duration'

interface SortDropdownProps {
  value: SortValue
  onChange: (value: SortValue) => void
}

export function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <div className="px-4">
      <label className="mb-1 block text-xs font-medium text-slate-600" htmlFor="sort-videos">
        Ordenar por
      </label>
      <select
        id="sort-videos"
        aria-label="Ordenar videos"
        value={value}
        onChange={(e) => onChange(e.target.value as SortValue)}
        className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
      >
        <option value="recent">Más recientes</option>
        <option value="oldest">Más antiguos</option>
        <option value="az">Título (A-Z)</option>
        <option value="duration">Duración</option>
      </select>
    </div>
  )
}
