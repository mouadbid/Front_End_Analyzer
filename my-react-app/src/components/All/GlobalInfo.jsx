// src/components/analyzer/GlobalInfo.jsx
import React from "react";

export default function GlobalInfo({ result }) {
  if (!result) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-blue-100 p-4 rounded-xl shadow">
        <h3 className="font-bold text-blue-700 mb-2">Méthodes détectées</h3>
        <ul className="text-sm list-disc list-inside">
          {result.methods?.map((m, i) => <li key={i}>{m}</li>)}
        </ul>
      </div>

      <div className="bg-green-100 p-4 rounded-xl shadow">
        <h3 className="font-bold text-green-700 mb-2">Variables détectées</h3>
        <ul className="text-sm list-disc list-inside">
          {result.variables?.map((v, i) => <li key={i}>{v}</li>)}
        </ul>
      </div>

      <div className="bg-purple-100 p-4 rounded-xl shadow">
        <h3 className="font-bold text-purple-700 mb-2">Expressions utilisées</h3>
        <ul className="text-sm list-disc list-inside">
          {result.expressions?.map((e, i) => <li key={i}>{e}</li>)}
        </ul>
      </div>
    </div>
  );
}