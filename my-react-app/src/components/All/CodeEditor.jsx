import { Textarea } from "@/components/ui/textarea"; // ou remplace par un `<textarea>` normal si tu n'utilises pas shadcn

export default function CodeEditor({ code, setCode }) {
  return (
    <Textarea
      rows={15}
      value={code}
      onChange={(e) => setCode(e.target.value)}
      placeholder="Collez ici votre code Java..."
      className="w-full border rounded p-2"
    />
  );
}
