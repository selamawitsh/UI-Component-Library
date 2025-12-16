import React, { useMemo, useState, useEffect } from "react";
import Sidebar from "./Components/Sidebar.jsx";
import ComponentCard from "./Components/ComponentCard.jsx";
import { componentRegistry } from "./componentRegistry";

export default function App() {
  const components = [
    {
      title: "Modal Dialog",
      difficulty: "medium",
      tags: ["overlay", "dialog", "popup"],
      category: "overlays",
      image: "/previews/modal-dialog.svg",
    },
    {
      title: "Dropdown Menu",
      difficulty: "easy",
      tags: ["dropdown", "menu", "select"],
      category: "interactive",
      image: "/previews/dropdown-menu.svg",
    },
    {
      title: "Navigation Sidebar",
      difficulty: "medium",
      tags: ["sidebar", "navigation", "menu"],
      category: "layout",
      image: "/previews/navigation-sidebar.svg",
    },
    {
      title: "Card Layout",
      difficulty: "easy",
      tags: ["card", "layout", "ui"],
      category: "layout",
      image: "/previews/card-layout.svg",
    },
    {
      title: "Form Input",
      difficulty: "easy",
      tags: ["form", "input", "validation"],
      category: "forms",
      image: "/previews/form-input.svg",
    },
    {
      title: "Form Textarea",
      difficulty: "easy",
      tags: ["form", "textarea", "input"],
      category: "forms",
      image: "/previews/form-textarea.svg",
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
  const [codeView, setCodeView] = useState(null);

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

  function handleCodeOpen(component) {
    const entry = componentRegistry[component.title];
    if (entry)
      setCodeView({
        title: component.title,
        source: entry.source,
        filename: entry.filename,
      });
    else
      setCodeView({
        title: component.title,
        source: "// no source available",
        filename: `${component.title}.jsx`,
      });
  }

  function handleCodeClose() {
    setCodeView(null);
  }

  function handlePreviewClose() {
    setPreview(null);
  }

  function downloadComponent(title) {
    const entry = componentRegistry[title];
    if (!entry) return;

    const blob = new Blob([entry.source], { type: "text/jsx" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = entry.filename;
    a.click();

    URL.revokeObjectURL(url);
  }

  // initialize displayed on mount
  useEffect(() => {
    setDisplayed(components);
  }, []);

  // apply filter live as user types or when category changes
  useEffect(() => {
    applyFilter({ q: query, category: selectedCategory });
  }, [query, selectedCategory]);

  // --- Quick action handlers ---
  function handleDownloadAll() {
    try {
      // download each registered component as a separate .jsx file
      Object.values(componentRegistry).forEach((entry) => {
        try {
          const blob = new Blob([entry.source], { type: "text/jsx" });
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = entry.filename;
          document.body.appendChild(a);
          a.click();
          a.remove();
          URL.revokeObjectURL(url);
        } catch (err) {
          console.error("Failed to download", entry.filename, err);
        }
      });
    } catch (err) {
      console.error("Download all failed", err);
    }
  }

  function handleOpenStyleGuide() {
    window.open("/style-guide.html", "_blank");
  }

  function handleOpenGitHub() {
    window.open("https://github.com/selamawitsh/UI-Component-Library", "_blank");
  }

  return (
    <div className="w-full min-h-screen bg-neutral-900 text-white flex">
      <Sidebar
        categories={categories}
        selected={selectedCategory}
        onSelect={handleCategorySelect}
        quickActions={{
          downloadAll: handleDownloadAll,
          openStyleGuide: handleOpenStyleGuide,
          openGitHub: handleOpenGitHub,
        }}
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
            <ComponentCard
              key={i}
              data={comp}
              onPreview={handlePreviewOpen}
              onCode={handleCodeOpen}
            />
          ))}
        </div>
      </main>

      {preview && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
          <div className="bg-neutral-900 rounded-lg p-6 w-11/12 max-w-2xl">
            <div className="flex justify-between mb-4">
              <h2 className="text-lg font-semibold">{preview.title}</h2>
              <button
                onClick={handlePreviewClose}
                className="bg-neutral-700 px-3 py-1 rounded"
              >
                Close
              </button>
            </div>
            <div className="bg-neutral-800 p-6 rounded flex justify-center">
              {componentRegistry[preview.title] ? (
                (() => {
                  const PreviewComponent =
                    componentRegistry[preview.title].Component;
                  return <PreviewComponent onClose={handlePreviewClose} />;
                })()
              ) : preview.image ? (
                <img
                  src={preview.image}
                  alt={`${preview.title} preview`}
                  className="w-full max-h-64 object-contain"
                />
              ) : (
                <span className="text-neutral-500">No preview available</span>
              )}
            </div>

            <button
              onClick={() => downloadComponent(preview.title)}
              className="mt-4 bg-blue-600 px-4 py-2 rounded"
            >
              Download Component
            </button>
          </div>
        </div>
      )}

      {codeView && (
        <div className="fixed inset-0 z-60 bg-black/60 flex items-center justify-center">
          <div className="bg-neutral-900 rounded-lg p-6 w-11/12 max-w-3xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">
                {codeView.title} — Source
              </h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCodeClose}
                  className="bg-neutral-700 px-3 py-1 rounded"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const blob = new Blob([codeView.source], {
                      type: "text/jsx",
                    });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = codeView.filename || `${codeView.title}.jsx`;
                    a.click();
                    URL.revokeObjectURL(url);
                  }}
                  className="bg-blue-600 px-3 py-1 rounded text-white"
                >
                  Download
                </button>
              </div>
            </div>

            <pre className="bg-neutral-800 p-4 rounded max-h-[60vh] overflow-auto text-sm">
              <code>{codeView.source}</code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
