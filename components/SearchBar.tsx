interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="px-4 pt-4">
      <label htmlFor="video-search" className="sr-only">
        Buscar por título o fuente
      </label>
      <input
        id="video-search"
        aria-label="Buscar videos"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar por título o fuente"
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm shadow-sm placeholder:text-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
      />
    </div>
  )
}
