export function EmptyState() {
  return (
    <section className="mx-4 mt-6 rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-200">
      <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-2xl">🎬</div>
      <h2 className="text-base font-semibold text-slate-900">Aún no tienes videos guardados</h2>
      <p className="mt-2 text-sm text-slate-600">
        Guarda videos para verlos luego en tu televisor o desde la app
      </p>
      <button
        type="button"
        className="mt-4 w-full rounded-xl bg-amber-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-600"
      >
        Explorar contenido
      </button>
    </section>
  )
}
