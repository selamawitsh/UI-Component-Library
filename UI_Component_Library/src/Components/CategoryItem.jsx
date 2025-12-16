import React from "react";

export default function CategoryItem({ title, count, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-between w-full text-left py-2 px-3 rounded transition-colors duration-150 ${
        active
          ? "bg-gradient-to-r from-neutral-800 to-neutral-700 text-white shadow-inner"
          : "text-neutral-300 hover:bg-neutral-800"
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-2 h-8 rounded ${
            active ? "bg-blue-500" : "bg-transparent"
          }`}
        />
        <span className="capitalize">{title}</span>
      </div>
      <span className="text-sm bg-neutral-700 px-2 rounded">{count}</span>
    </button>
  );
}
