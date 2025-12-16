export default function NavigationSidebar({ compact = false }) {
  if (compact) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="bg-white text-gray-900 rounded-md p-2 shadow-sm w-full text-center">
          <div className="text-sm font-semibold">Nav</div>
          <div className="text-xs text-gray-500">Dash • Proj • Set</div>
        </div>
      </div>
    );
  }

  return (
    <aside className="w-56 bg-white text-gray-900 rounded-lg shadow p-4">
      <div className="mb-4">
        <h4 className="text-sm font-semibold">Navigation</h4>
        <p className="text-xs text-gray-500">Quick links</p>
      </div>

      <ul className="space-y-2">
        <li className="flex items-center gap-3 p-2 rounded hover:bg-gray-50 cursor-pointer">
          <span className="w-8 h-8 rounded bg-indigo-100 flex items-center justify-center text-indigo-600">
            D
          </span>
          <span className="text-sm">Dashboard</span>
        </li>
        <li className="flex items-center gap-3 p-2 rounded hover:bg-gray-50 cursor-pointer">
          <span className="w-8 h-8 rounded bg-green-100 flex items-center justify-center text-green-600">
            P
          </span>
          <span className="text-sm">Projects</span>
        </li>
        <li className="flex items-center gap-3 p-2 rounded hover:bg-gray-50 cursor-pointer">
          <span className="w-8 h-8 rounded bg-yellow-100 flex items-center justify-center text-yellow-600">
            S
          </span>
          <span className="text-sm">Settings</span>
        </li>
      </ul>
    </aside>
  );
}
