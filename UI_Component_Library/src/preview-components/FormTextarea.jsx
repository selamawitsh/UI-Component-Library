export default function FormTextarea({ compact = false }) {
  if (compact) {
    return (
      <div className="w-full flex items-center justify-center">
        <textarea
          rows={2}
          placeholder="Msg"
          className="px-2 py-1 rounded border text-sm w-40"
        />
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg">
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="px-4 py-3 flex items-start justify-between">
          <h3 className="text-sm font-medium text-gray-700">Your message</h3>
          <span className="text-xs text-gray-400">A note for extra info</span>
        </div>

        <div className="px-4 pb-3">
          <textarea
            rows={6}
            placeholder="Write text here ..."
            className="w-full rounded-md border border-gray-200 p-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 resize-none bg-white"
          />

          <div className="mt-3 flex items-center justify-between">
            <div />
            <button className="bg-gradient-to from-blue-500 to-blue-600 text-white px-4 py-2 rounded-md shadow hover:brightness-105 transition">
              Send message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconButton({ children, title }) {
  return (
    <button title={title} className="p-1 rounded hover:bg-gray-100 transition">
      {children}
    </button>
  );
}
