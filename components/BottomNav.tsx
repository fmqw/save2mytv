const items = [
  { label: 'Inicio', icon: '🏠' },
  { label: 'Guardados', icon: '🔖', active: true },
  { label: 'TV', icon: '📺' },
  { label: 'Perfil', icon: '👤' }
]

export function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-md grid-cols-4">
        {items.map((item) => (
          <button
            key={item.label}
            type="button"
            aria-label={item.label}
            className={`flex flex-col items-center gap-0.5 px-2 py-2 text-xs ${
              item.active ? 'text-amber-600' : 'text-slate-500'
            }`}
          >
            <span>{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}
