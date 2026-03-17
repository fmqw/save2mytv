interface NoResultsStateProps {
  onReset: () => void
}

export function NoResultsState({ onReset }: NoResultsStateProps) {
  return (
    <section className="mx-4 mt-6 rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-200">
      <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-2xl">🔎</div>
      <h2 className="text-base font-semibold text-slate-900">No encontramos coincidencias</h2>
      <p className="mt-2 text-sm text-slate-600">Prueba con otro término o limpia los filtros activos.</p>
      <button
        type="button"
        onClick={onReset}
        className="mt-4 rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
      >
        Limpiar búsqueda y filtros
      </button>
    </section>
  )
}
