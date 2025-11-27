import React from "react";

export default function QuickAction({ icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 hover:text-white"
    >
      <span>{icon}</span> {label}
    </button>
  );
}
