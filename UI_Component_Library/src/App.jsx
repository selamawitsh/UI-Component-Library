import React, { useMemo, useState, useEffect } from "react";
import Sidebar from "./Components/Sidebar.jsx";
import ComponentCard from "./Components/ComponentCard.jsx";

export default function App() {
  const components = [
    {
      title: "Modal Dialog",
      difficulty: "medium",
      tags: ["overlay", "dialog", "popup"],
      category: "overlays",
    },
    {
      title: "Dropdown Menu",
      difficulty: "easy",
      tags: ["dropdown", "menu", "select"],
      category: "interactive",
    },
    {
      title: "Navigation Sidebar",
      difficulty: "medium",
      tags: ["sidebar", "navigation", "menu"],
      category: "layout",
    },
    {
      title: "Card Layout",
      difficulty: "easy",
      tags: ["card", "layout", "ui"],
      category: "layout",
    },
    {
      title: "Form Input",
      difficulty: "easy",
      tags: ["form", "input", "validation"],
      category: "forms",
    },
    {
      title: "Form Textarea",
      difficulty: "easy",
      tags: ["form", "textarea", "input"],
      category: "forms",
    },
  ];

  const categories = useMemo(() => {
    const counts = { all: components.length };
    components.forEach(
      (c) => (counts[c.category] = (counts[c.category] || 0) + 1)
    );
    return Object.keys(counts).map((key) => ({
      key,
      label: key === "all" ? "All Components" : key,
      count: counts[key],
    }));
  }, [components]);

  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [displayed, setDisplayed] = useState(components);
  const [preview, setPreview] = useState(null);

  function applyFilter({ q = query, category = selectedCategory } = {}) {
    const qLower = q.trim().toLowerCase();
    const filtered = components.filter((c) => {
      if (category !== "all" && c.category !== category) return false;
      if (!qLower) return true;
      if (c.title.toLowerCase().includes(qLower)) return true;
      if (c.tags.join(" ").toLowerCase().includes(qLower)) return true;
      return false;
    });
    setDisplayed(filtered);
  }

  function handleCategorySelect(key) {
    setSelectedCategory(key);
    applyFilter({ category: key });
  }

  function handleFilterClick() {
    applyFilter({ q: query });
  }

  function handlePreviewOpen(component) {
    setPreview(component);
  }

  function handlePreviewClose() {
    setPreview(null);
  }

  // initialize displayed on mount
  useEffect(() => {
    setDisplayed(components);
  }, []);

  // apply filter live as user types or when category changes
  useEffect(() => {
    applyFilter({ q: query, category: selectedCategory });
  }, [query, selectedCategory]);

  return (
    <div className="w-full min-h-screen bg-neutral-900 text-white flex">
      <Sidebar
        categories={categories}
        selected={selectedCategory}
        onSelect={handleCategorySelect}
      />

      <main className="flex-1 p-10">
        <div className="flex items-center gap-4 mb-8">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search components..."
            className="flex-1 bg-neutral-800 border border-neutral-700 px-4 py-2 rounded focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleFilterClick}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
          >
            Filter
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {displayed.map((comp, i) => (
            <ComponentCard key={i} data={comp} onPreview={handlePreviewOpen} />
          ))}
        </div>
      </main>

      {preview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-neutral-850 rounded-lg w-11/12 max-w-2xl p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-semibold">{preview.title}</h2>
              <button
                onClick={handlePreviewClose}
                className="text-sm bg-neutral-700 hover:bg-neutral-600 px-3 py-1.5 rounded"
              >
                Close
              </button>
            </div>

            <div className="h-48 bg-neutral-800 flex items-center justify-center mb-4">
              <span className="text-neutral-500 text-sm">
                [ preview of {preview.title} ]
              </span>
            </div>

            <div className="text-sm text-neutral-300 mb-2">
              <strong>Category:</strong> {preview.category}
            </div>
            <div className="text-sm text-neutral-300 mb-4">
              <strong>Tags:</strong> {preview.tags.join(", ")}
            </div>
            <div className="text-sm text-neutral-300">
              <strong>Difficulty:</strong> {preview.difficulty}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
