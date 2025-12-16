import React from "react";
import { componentRegistry } from "../componentRegistry";

function getInitials(title) {
  if (!title) return "";
  return title
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function ComponentCard({ data, onPreview, onCode }) {
  const initials = getInitials(data.title);

  return (
    <div className="bg-neutral-850 border border-neutral-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-150">
      <div className="h-40 bg-neutral-800 flex items-center justify-center overflow-hidden">
        {componentRegistry[data.title] && data.title !== "Modal Dialog" ? (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-full h-full overflow-hidden flex items-center justify-center">
              {React.createElement(componentRegistry[data.title].Component, {
                compact: true,
              })}
            </div>
          </div>
        ) : data.image ? (
          <img
            src={data.image}
            alt={`${data.title} thumbnail`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center p-3">
            <div className="w-28 h-20 rounded-md bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center text-white text-xl font-semibold">
              {initials}
            </div>
          </div>
        )}
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
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-3 py-1.5 rounded text-sm text-white shadow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 10l4.553-2.276A2 2 0 0122 9.618v4.764a2 2 0 01-2.447 1.894L15 14v-4zM4 6v12a2 2 0 002 2h8"
              />
            </svg>
            Preview
          </button>

          <button
            onClick={() => onCode?.(data)}
            className="flex items-center gap-2 bg-neutral-700 hover:bg-neutral-600 px-3 py-1.5 rounded text-sm text-neutral-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16h8M8 12h8M8 8h8"
              />
            </svg>
            Code
          </button>
        </div>
      </div>
    </div>
  );
}
