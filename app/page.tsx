"use client";
import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleConvert = async () => {
    if (!file) {
      setError("Please choose a file first.");
      return;
    }
    setError("");
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/convert", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Conversion failed");
      }

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "converted.pdf";
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const otherTools = [
    { name: "Image Background Remover", desc: "Remove image backgrounds in one click" },
    { name: "File Compressor", desc: "Shrink your file size without losing quality" },
    { name: "Video to Subtitles", desc: "Auto transcription & subtitle generation" },
  ];

  return (
    <div className="min-h-screen bg-[#F7F9F9]">
      <header className="bg-[#0F6E6E] py-6 px-6">
        <h1 className="text-white text-2xl font-bold">Doneo</h1>
        <p className="text-white/80 text-sm mt-1">
          Upload. Process. Delivered. Automatically.
        </p>
      </header>

      <main className="px-6 py-10 max-w-3xl mx-auto">
        <h2 className="text-[#1E2A2A] text-xl font-semibold mb-6">
          Choose a tool
        </h2>

        <div className="grid gap-4">
          <div className="bg-white border border-[#E1E8E8] rounded-xl p-5 shadow-sm">
            <h3 className="text-[#1E2A2A] font-medium text-lg">
              Word → PDF
            </h3>
            <p className="text-[#6B7A7A] text-sm mt-1">
              Convert your Word file to PDF instantly
            </p>

            <input
              type="file"
              accept=".doc,.docx"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="mt-4 block w-full text-sm text-[#1E2A2A]"
            />

            <button
              onClick={handleConvert}
              disabled={loading}
              className="mt-4 bg-[#FF7A33] text-white px-4 py-2 rounded-lg font-medium disabled:opacity-50"
            >
              {loading ? "Converting..." : "Convert to PDF"}
            </button>

            {error && (
              <p className="text-[#EF4444] text-sm mt-2">{error}</p>
            )}
          </div>

          {otherTools.map((tool) => (
            <div
              key={tool.name}
              className="bg-white border border-[#E1E8E8] rounded-xl p-5 shadow-sm"
            >
              <h3 className="text-[#1E2A2A] font-medium text-lg">
                {tool.name}
              </h3>
              <p className="text-[#6B7A7A] text-sm mt-1">{tool.desc}</p>
              <button className="mt-4 bg-[#E1E8E8] text-[#6B7A7A] px-4 py-2 rounded-lg font-medium">
                Coming Soon
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
