import { useState } from "react";
import { AlertTriangle, Copy, EyeOff } from "lucide-react";

const tabs = [
  { id: "identicMethods", title: "Méthodes identiques", icon: Copy },
  { id: "leakResources", title: "Fuites de ressources", icon: AlertTriangle },
  { id: "notImportantVariables", title: "Variables inutiles", icon: EyeOff },
];

export default function TabbedResult({ result }) {
  const [activeTab, setActiveTab] = useState("identicMethods");

  const renderContent = () => {
    const data = result[activeTab];
    if (!data || data.length === 0) return <p className="text-gray-500">Aucune donnée</p>;

    if (activeTab === "identicMethods") {
      return (
        <ul className="list-disc list-inside">
          {data.map((pair, i) => <li key={i}>{pair.join(" & ")}</li>)}
        </ul>
      );
    }

    return (
      <ul className="list-disc list-inside">
        {data.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    );
  };

  return (
    <div>
      <div className="flex space-x-4 mb-4 border-b pb-2">
        {tabs.map(({ id, title, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center px-4 py-2 rounded-xl transition-colors ${
              activeTab === id ? "bg-gray-200" : "bg-gray-100"
            }`}
          >
            <Icon className="w-4 h-4 mr-2" />
            {title}
          </button>
        ))}
      </div>

      <div className="bg-white p-4 rounded-xl shadow">{renderContent()}</div>
    </div>
  );
}
