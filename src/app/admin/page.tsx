"use client";
import { useEffect, useState } from "react";

type ContentItem = {
  id: string;
  section: "explorer" | "academy";
  slug: string;
  title: string;
  subtitle?: string;
  blocks: any[];
  version?: number;
  updatedAt: string;
};

export default function Admin() {
  const [section, setSection] = useState<"explorer" | "academy">("explorer");
  const [slug, setSlug] = useState<string>("");
  const [jsonText, setJsonText] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    setStatus("");
  }, [section, slug]);

  const load = async () => {
    setStatus("Loading...");
    try {
      const res = await fetch(`/v1/content/${section}/${slug}`, {
        cache: "no-store",
      });
      const json = await res.json();
      setJsonText(JSON.stringify(json.data, null, 2));
      setStatus("Loaded");
    } catch (e: any) {
      setStatus(e?.message || "Failed to load");
    }
  };

  const save = async () => {
    setStatus("Saving...");
    try {
      const body: ContentItem = JSON.parse(jsonText);
      const res = await fetch(`/v1/content/${section}/${slug}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });
      const json = await res.json();
      setStatus(res.ok ? "Saved" : `Error: ${json?.message || res.status}`);
    } catch (e: any) {
      setStatus(e?.message || "Failed to save");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-semibold">CMS Admin (MVP)</h1>
      <div className="flex gap-2 items-center">
        <select
          value={section}
          onChange={(e) => setSection(e.target.value as any)}
          className="border px-2 py-1"
        >
          <option value="explorer">explorer</option>
          <option value="academy">academy</option>
        </select>
        <input
          className="border px-2 py-1 flex-1"
          placeholder="slug"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
        />
        <button
          className="bg-fixnix-lightpurple text-white px-3 py-1 rounded"
          onClick={load}
        >
          Load
        </button>
      </div>
      <div className="flex gap-2 items-center">
        <input
          className="border px-2 py-1 flex-1"
          placeholder="admin token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <button
          className="bg-fixnix-darkpurple text-white px-3 py-1 rounded"
          onClick={save}
        >
          Save
        </button>
      </div>
      <textarea
        className="w-full h-[500px] border font-mono text-sm p-2"
        value={jsonText}
        onChange={(e) => setJsonText(e.target.value)}
      />
      <div className="text-sm text-gray-600">{status}</div>
    </div>
  );
}
