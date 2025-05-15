// 📁 src/components/All/CodeAnalyzer.jsx
import React, { useState } from "react";
import CodeUploader from "./CodeUploader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";
import toast from "react-hot-toast";
import GlobalInfo from "./GlobalInfo";
import TabbedResult from "./TabbedResult";
import { Textarea } from "@/components/ui/textarea";
import IconPositionTabs from "./IconPositionTabs";

export default function CodeAnalyzer() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);
  const [code, setCode] = useState("");

  const handleAnalyze = async () => {
    if (!selectedFile || !selectedFile.name.endsWith(".java")) {
      toast.error("Veuillez sélectionner un fichier .java valide");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("http://localhost:8080/analyze", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.error) toast.error(data.error);
      else setResult(data);
    } catch (error) {
      toast.error("Erreur lors de l'analyse");
    }
  };

  return (
    <div className="p-4 max-w-7xl mx-auto space-y-6">

    <Card className="mt-6">
      <CardContent className="p-4 space-y-2">
        <h2 className="text-lg font-semibold">Éditeur de code</h2>
        <Textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Collez ici votre code Java..."
          rows={12}
        />
      </CardContent>
    </Card>

      <Card>
        <CardContent className="space-y-3 p-4">
          <CodeUploader onFileSelect={setSelectedFile} />
          <Button onClick={handleAnalyze} className="flex items-center gap-2">
            <Play className="w-4 h-4" />
            Analyser le code
          </Button>
        </CardContent>
      </Card>

      {result && (
        <Card>
          <CardContent className="p-4">
            <IconPositionTabs result={result} />
            <GlobalInfo result={result} />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
