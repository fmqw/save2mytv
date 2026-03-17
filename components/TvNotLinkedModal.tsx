interface TvNotLinkedModalProps {
  open: boolean
  onClose: () => void
}

export function TvNotLinkedModal({ open, onClose }: TvNotLinkedModalProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-4 sm:items-center">
      <div className="w-full max-w-sm rounded-2xl bg-white p-5 shadow-xl">
        <h3 className="text-lg font-semibold text-slate-900">TV no vinculada</h3>
        <p className="mt-2 text-sm text-slate-600">
          Para enviar este video a tu televisor, primero vincula un dispositivo desde Configuración.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
          >
            Más tarde
          </button>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-amber-500 px-3 py-2 text-sm font-semibold text-white hover:bg-amber-600"
          >
            Vincular TV
          </button>
        </div>
      </div>
    </div>
  )
}
