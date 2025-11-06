import { useState } from "react";

export default function Quiz({ question, options, answer }) {
  const [selected, setSelected] = useState(null);
  const [show, setShow] = useState(false);

  const checkAnswer = () => setShow(true);

  return (
    <div className="glass p-6 mt-8">
      <h3 className="text-xl font-semibold mb-4">{question}</h3>
      <div className="flex flex-col gap-3">
        {options.map((opt, i) => (
          <button
            key={i}
            onClick={() => setSelected(opt)}
            className={`transition-all duration-200 rounded-lg px-4 py-2 bg-transparent border border-gray-500 hover:bg-cyan-600/40 hover:border-cyan-400 ${
                selected === opt ? "bg-cyan-700/50 border-cyan-400" : ""}`}>
            {opt}
        </button>
        ))}
      </div>
      <button
        onClick={checkAnswer}
        className="btn mt-4 bg-blue-500 hover:bg-blue-600"
      >
        Check
      </button>
      {show && (
        <p className="mt-3 text-lg">
          {selected === answer
            ? "✅ Correct!"
            : `❌ Incorrect. The answer is ${answer}.`}
        </p>
      )}
    </div>
  );
}
