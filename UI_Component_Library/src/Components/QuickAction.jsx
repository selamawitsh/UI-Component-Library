import React from "react";

export default function QuickAction({ icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-neutral-800 transition-colors duration-150 text-neutral-300"
    >
      <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-sm">
        {icon}
      </div>
      <div className="flex-1 text-sm">{label}</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-neutral-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
}
