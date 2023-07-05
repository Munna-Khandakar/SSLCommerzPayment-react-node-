import React from "react";

export default function Button({ children }) {
  return (
    <button className="rounded bg-green px-6 py-2 text-white transition-colors hover:bg-green-600">
      {children}
    </button>
  );
}
