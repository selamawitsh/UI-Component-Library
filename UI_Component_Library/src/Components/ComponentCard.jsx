import React from "react";

export default function ComponentCard({ data, onPreview }) {
  return (
    <div className="bg-neutral-850 border border-neutral-800 rounded-xl overflow-hidden shadow">
      <div className="h-40 bg-neutral-800 flex items-center justify-center">
        <span className="text-neutral-500 text-sm">[ component preview ]</span>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">{data.title}</h3>
          <span
            className={`text-xs px-2 py-1 rounded ${
              data.difficulty === "easy"
                ? "bg-green-700"
                : data.difficulty === "medium"
                ? "bg-yellow-700"
                : "bg-red-700"
            }`}
          >
            {data.difficulty}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {data.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs bg-neutral-700 px-2 py-1 rounded text-neutral-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onPreview?.(data)}
            className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded text-sm"
          >
            Preview
          </button>

          <button className="bg-neutral-700 hover:bg-neutral-600 px-3 py-1.5 rounded text-sm">
            {"< />"}
          </button>
        </div>
      </div>
    </div>
  );
}
