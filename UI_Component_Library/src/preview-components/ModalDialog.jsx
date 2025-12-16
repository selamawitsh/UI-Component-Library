export default function ModalDialog({ onClose, compact = false }) {
  if (compact) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="bg-white text-gray-900 rounded-lg p-3 shadow-sm w-36 text-center">
          <div className="text-sm font-semibold">Confirm</div>
          <div className="text-xs text-gray-500 mt-1">Are you sure?</div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 p-6">
      <div className="bg-gradient-to-b from-white to-gray-50 rounded-3xl p-8 w-full max-w-lg shadow-2xl border border-gray-100">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            Confirm Action
          </h2>
          <p className="max-w-prose mx-auto text-sm text-gray-600 leading-relaxed">
            We else a the acton hianels go and ioatique elution of itales and
            tiive with breemer and echened congresitmation propertite
            Unaraliened reaism.
          </p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-white rounded-full shadow-lg text-gray-800 hover:translate-y-0.5 transform transition duration-150"
            style={{ boxShadow: "0 8px 18px rgba(0,0,0,0.08)" }}
          >
            Confirm
          </button>

          <button
            onClick={onClose}
            className="px-6 py-2 bg-rose-400 rounded-full text-white shadow-lg hover:brightness-95 transform transition duration-150"
            style={{ boxShadow: "0 8px 18px rgba(229, 62, 62, 0.18)" }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
