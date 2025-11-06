import { useState } from "react";
import MainMenu from "../components/MainMenu";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const [current, setCurrent] = useState(null);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-purple-950 flex flex-col items-center gap-10 pt-8">
      <MainMenu onSelect={setCurrent} />

      {current && (
        <div className="glass p-10 w-full max-w-3xl text-center mt-8">
          <h1 className="text-4xl font-bold mb-4">{current}</h1>
          <p className="text-gray-300">
            Content for {current} will appear here.
          </p>
          <button
            onClick={() => setCurrent(null)}
            className="mt-8 px-6 py-2 rounded-lg bg-pink-500 hover:bg-pink-600 transition-all"
          >
            ← Back to Menu
          </button>
        </div>
      )}
    </div>
  );
}
