import React from "react";
import CategoryItem from "./CategoryItem.jsx";
import QuickAction from "./QuickAction.jsx";

export default function Sidebar({
  categories = [],
  selected,
  onSelect,
  quickActions = {},
}) {
  return (
    <aside className="w-64 border-r border-neutral-800 p-6">
      <h2 className="text-xl font-semibold mb-6">Categories</h2>

      <div className="space-y-2">
        {categories.map((c) => (
          <CategoryItem
            key={c.key}
            title={c.label}
            count={c.count}
            active={selected === c.key}
            onClick={() => onSelect(c.key)}
          />
        ))}
      </div>

      <div className="mt-10">
        <h3 className="text-sm uppercase tracking-wide text-neutral-400 mb-3">
          Quick Actions
        </h3>

        <div className="space-y-3 text-neutral-300">
          <QuickAction
            icon="⬇️"
            label="Download All"
            onClick={quickActions.downloadAll}
          />
          <QuickAction
            icon="📘"
            label="Style Guide"
            onClick={quickActions.openStyleGuide}
          />
          <QuickAction
            icon="💻"
            label="GitHub"
            onClick={quickActions.openGitHub}
          />
        </div>
      </div>
    </aside>
  );
}
