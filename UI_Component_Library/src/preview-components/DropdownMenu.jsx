import { useState, useRef, useEffect } from "react";

export default function DropdownMenu({ compact = false }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    function onDoc(e) {
      if (rootRef.current && !rootRef.current.contains(e.target))
        setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const items = ["Principle", "Sketch", "Photoshop", "Framer"];

  if (compact) {
    return (
      <div
        className="w-full h-full flex items-center justify-center"
        ref={rootRef}
      >
        <div className="relative w-36">
          <button
            onClick={() => setOpen((s) => !s)}
            className={`w-full bg-white rounded-lg shadow-sm px-3 py-2 flex items-center justify-between text-sm transition-colors duration-150 ${
              open ? "ring-2 ring-violet-200" : "hover:bg-violet-50"
            }`}
            aria-expanded={open}
          >
            <span className="text-gray-600">Add tools</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 text-purple-400 transform transition-transform duration-200 ${
                open ? "rotate-180" : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {open && (
            <div className="absolute left-0 mt-2 w-full bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden z-20">
              <ul className="divide-y">
                {items.map((it) => (
                  <li
                    key={it}
                    className="px-3 py-2 text-sm text-gray-700 hover:bg-violet-50 hover:text-gray-900 transition-colors cursor-pointer"
                    onClick={() => setOpen(false)}
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="w-72" ref={rootRef}>
      <label className="sr-only">Add tools</label>
      <div>
        <button
          onClick={() => setOpen((s) => !s)}
          className={`w-full bg-white rounded-2xl px-4 py-3 shadow-md flex items-center justify-between transition-colors duration-150 ${
            open ? "ring-2 ring-violet-200" : "hover:bg-violet-50"
          }`}
          aria-expanded={open}
        >
          <span className="flex-1 text-sm placeholder-gray-300 text-gray-700 text-left">
            Add tools
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 text-purple-400 ml-3 transform transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {open && (
          <div className="mt-4 bg-white rounded-2xl shadow-lg p-2 z-20">
            <ul className="divide-y rounded-lg overflow-hidden">
              {items.map((it) => (
                <li
                  key={it}
                  className="px-4 py-3 text-base text-gray-700 hover:bg-violet-50 hover:text-gray-900 transition-colors cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  {it}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
