import { useState } from "react";
import { Upload } from "lucide-react";
import { toast } from "react-hot-toast";

export default function CodeUploader({ onFileSelect }) {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.name.endsWith(".java")) {
      toast.error("❌ Seuls les fichiers .java sont autorisés.");
      e.target.value = "";
      return;
    }

    setFileName(file.name);
    onFileSelect(file);
  };

  return (
    <div className="w-full">
      <label className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg cursor-pointer transition-all duration-150 shadow-md">
        <Upload className="w-4 h-4 mr-2" />
        <span>Uploader un fichier Java</span>
        <input
          type="file"
          accept=".java"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>

      {fileName && (
        <p className="mt-2 text-sm text-gray-700">
           <span className="font-medium">Fichier sélectionné :</span> {fileName}
        </p>
      )}
    </div>
  );
}

