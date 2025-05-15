import { useState } from "react";
import { AlertTriangle, Bug, Code, Copy, EyeOff, FileWarning, Zap } from "lucide-react";

function AccordionItem({ title, icon: Icon, color, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-2xl shadow-md border border-gray-200 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center w-full px-4 py-3 text-left bg-${color}-100 hover:bg-${color}-200 transition-colors`}
      >
        <Icon className={`w-5 h-5 mr-2 text-${color}-600`} />
        <span className="font-medium text-${color}-800">{title}</span>
        <span className="ml-auto text-${color}-600">{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && <div className="px-5 py-3 bg-white text-sm">{children}</div>}
    </div>
  );
}

export default function ResultAccordion({ result }) {
  if (!result) return null;

  return (
    <div className="max-w-4xl mx-auto mt-6 space-y-4">
      <AccordionItem title="Méthodes détectées" icon={Code} color="blue">
        <ul className="list-disc list-inside">
          {result.methods.map((method, index) => (
            <li key={index}>{method}</li>
          ))}
        </ul>
      </AccordionItem>

      <AccordionItem title="Méthodes identiques (doublons)" icon={Copy} color="yellow">
        <ul className="list-disc list-inside">
          {result.identicMethods.map((pair, index) => (
            <li key={index}>{pair.join(" & ")}</li>
          ))}
        </ul>
      </AccordionItem>

      <AccordionItem title="Fuites de ressources" icon={AlertTriangle} color="red">
        <ul className="list-disc list-inside text-red-600">
          {result.leakResources.map((leak, index) => (
            <li key={index}>{leak}</li>
          ))}
        </ul>
      </AccordionItem>

      <AccordionItem title="Variables détectées" icon={Bug} color="green">
        <ul className="list-disc list-inside">
          {result.variables.map((v, index) => (
            <li key={index}>{v}</li>
          ))}
        </ul>
      </AccordionItem>

      <AccordionItem title="Expressions utilisées" icon={Zap} color="purple">
        <ul className="list-disc list-inside">
          {result.expressions.map((expr, index) => (
            <li key={index}>{expr}</li>
          ))}
        </ul>
      </AccordionItem>

      <AccordionItem title="Variables non importantes" icon={EyeOff} color="gray">
        <ul className="list-disc list-inside text-gray-500">
          {result.notImportantVariables.map((v, index) => (
            <li key={index}>{v}</li>
          ))}
        </ul>
      </AccordionItem>
    </div>
  );
}
