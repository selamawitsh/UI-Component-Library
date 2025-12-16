import ModalDialog from "./preview-components/ModalDialog";
import DropdownMenu from "./preview-components/DropdownMenu";
import NavigationSidebar from "./preview-components/NavigationSidebar";
import CardLayout from "./preview-components/CardLayout";
import FormInput from "./preview-components/FormInput";
import FormTextarea from "./preview-components/FormTextarea";

export const componentRegistry = {
  "Modal Dialog": {
    Component: ModalDialog,
    filename: "ModalDialog.jsx",
    source: `export default function ModalDialog({ onClose, compact = false }) {
  if (compact) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="bg-white text-gray-900 rounded-lg p-2 shadow-sm w-36 text-center">
          <div className="text-sm font-semibold">Modal</div>
          <div className="text-xs text-gray-500 mt-1">Confirm?</div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 p-4">
      <div className="bg-white text-gray-900 rounded-2xl p-6 w-full max-w-md shadow-2xl transform transition-all duration-200">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-1">Confirm Action</h3>
            <p className="text-sm text-gray-600">Are you sure you want to perform this action? This cannot be undone.</p>
          </div>
          <button onClick={onClose} aria-label="Close" className="text-gray-400 hover:text-gray-600">✕</button>
        </div>

        <div className="mt-5 bg-gray-50 rounded-md p-4 border border-gray-100">
          <p className="text-sm text-gray-700">This modal demonstrates typical dialog layout: title, message, and actions. Use it as a preview.</p>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">Cancel</button>
          <button className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow hover:opacity-95">Confirm</button>
        </div>
      </div>
    </div>
  );
}
`,
  },
  "Dropdown Menu": {
    Component: DropdownMenu,
    filename: "DropdownMenu.jsx",
    source: `export default function DropdownMenu({ compact = false }) {
  if (compact) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <select className="bg-white border border-gray-200 px-2 py-1 rounded text-sm w-32">
          <option>Profile</option>
          <option>Settings</option>
        </select>
      </div>
    );
  }

  return (
    <div className="inline-block">
      <label className="sr-only">Options</label>
      <div className="relative">
        <select className="appearance-none border border-gray-200 px-4 py-2 rounded-lg pr-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white">
          <option>Profile</option>
          <option>Settings</option>
          <option>Logout</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 01.832.445l4.5 6a1 1 0 01-1.664 1.11L10 5.868 6.332 10.555a1 1 0 01-1.664-1.11l4.5-6A1 1 0 0110 3z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
}
`,
  },
  "Navigation Sidebar": {
    Component: NavigationSidebar,
    filename: "NavigationSidebar.jsx",
    source: `export default function NavigationSidebar({ compact = false }) {
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
          <span className="w-8 h-8 rounded bg-indigo-100 flex items-center justify-center text-indigo-600">D</span>
          <span className="text-sm">Dashboard</span>
        </li>
        <li className="flex items-center gap-3 p-2 rounded hover:bg-gray-50 cursor-pointer">
          <span className="w-8 h-8 rounded bg-green-100 flex items-center justify-center text-green-600">P</span>
          <span className="text-sm">Projects</span>
        </li>
        <li className="flex items-center gap-3 p-2 rounded hover:bg-gray-50 cursor-pointer">
          <span className="w-8 h-8 rounded bg-yellow-100 flex items-center justify-center text-yellow-600">S</span>
          <span className="text-sm">Settings</span>
        </li>
      </ul>
    </aside>
  );
}
`,
  },
  "Card Layout": {
    Component: CardLayout,
    filename: "CardLayout.jsx",
    source: `export default function CardLayout({ compact = false }) {
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
              <div className="h-24 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center text-gray-300">Preview</div>
              <div className="h-24 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center text-gray-300">Preview</div>
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
`,
  },
  "Form Input": {
    Component: FormInput,
    filename: "FormInput.jsx",
    source: `export default function FormInput({ compact = false }) {
  if (compact) {
    return (
      <div className="w-full flex items-center justify-center">
        <input placeholder="Name" className="px-2 py-1 rounded border text-sm w-32" />
      </div>
    );
  }

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-1">Your name</label>
      <input
        placeholder="Enter text..."
        className="w-full bg-white border border-gray-200 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
      />
      <p className="mt-2 text-xs text-gray-500">This is a friendly input field with focus ring and soft shadow.</p>
    </div>
  );
}
`,
  },
  "Form Textarea": {
    Component: FormTextarea,
    filename: "FormTextarea.jsx",
    source: `export default function FormTextarea({ compact = false }) {
  if (compact) {
    return (
      <div className="w-full flex items-center justify-center">
        <textarea rows={2} placeholder="Msg" className="px-2 py-1 rounded border text-sm w-40" />
      </div>
    );
  }

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
      <textarea
        rows={4}
        placeholder="Enter message..."
        className="w-full bg-white border border-gray-200 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
      />
      <p className="mt-2 text-xs text-gray-500">Use this textarea for longer messages. It shows clear focus and spacing.</p>
    </div>
  );
}
`,
  },
};
