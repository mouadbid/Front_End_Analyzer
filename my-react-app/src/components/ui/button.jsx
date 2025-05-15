import React from "react";

export function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`bg-pink-600 hover:pink text-white px-4 py-2 rounded ${className}`}
    >
      {children}
    </button>
  );
}
