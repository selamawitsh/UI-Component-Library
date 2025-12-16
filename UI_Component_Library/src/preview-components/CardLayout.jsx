export default function CardLayout({ compact = false }) {
  if (compact) {
    return (
      <div className="bg-white rounded-md p-2 w-full h-full flex flex-col items-start justify-center">
        <div className="text-sm font-semibold text-gray-800">Card</div>
        <div className="text-xs text-gray-500 mt-1">Compact</div>
      </div>
    );
  }
  return (
    <div className="w-full flex items-center justify-center py-8">
      <div className="bg-emerald-50 rounded-3xl p-6 shadow-xl w-full max-w-4xl">
        <div className="bg-white rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start">
          {/* Left content: heading + text lines */}
          <div className="flex-1">
            <div className="h-6 bg-emerald-100 rounded-full w-3/5 mb-4"></div>
            <div className="h-3 bg-emerald-100 rounded-full w-1/2 mb-2"></div>
            <div className="h-3 bg-emerald-100 rounded-full w-2/3 mb-6"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="h-24 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center text-gray-300">
                Preview
              </div>
              <div className="h-24 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center text-gray-300">
                Preview
              </div>
            </div>
          </div>

          {/* Right column: two stacked cards */}
          <div className="w-full md:w-64 flex flex-col gap-4">
            <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm">
              <div className="h-3 bg-gray-100 rounded w-2/3 mb-3"></div>
              <div className="h-10 bg-gray-50 rounded" />
            </div>

            <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm">
              <div className="h-3 bg-gray-100 rounded w-1/2 mb-3"></div>
              <div className="h-10 bg-gray-50 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
