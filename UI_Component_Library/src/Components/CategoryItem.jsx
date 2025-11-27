import React from "react";

export default function CategoryItem({ title, count, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex justify-between w-full text-left py-2 px-3 rounded ${
        active
          ? "bg-neutral-800 text-white"
          : "text-neutral-300 hover:bg-neutral-800"
      }`}
    >
      <span>{title}</span>
      <span className="text-sm bg-neutral-700 px-2 rounded">{count}</span>
    </button>
  );
}
