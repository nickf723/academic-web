export default function Sidebar({ current, onSelect }) {
  const items = [
    { label: "Formal", color: "#3b82f6" },
    { label: "Natural", color: "#22c55e" },
    { label: "Social", color: "#f97316" },
    { label: "Applied", color: "#eab308" },
    { label: "Humanities", color: "#a855f7" },
    { label: "Interdisciplines", color: "#06b6d4" },
  ];

  return (
    <div className="fixed top-0 left-0 h-full w-64 p-6 glass flex flex-col justify-between">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-6 text-white text-center">
          Domains
        </h2>
        {items.map((item) => (
          <button
            key={item.label}
            onClick={() => onSelect(item.label)}
            className={`w-full py-2 rounded-lg font-medium transition-all duration-300 ${
              current === item.label ? "scale-[1.05]" : "hover:scale-[1.03]"
            }`}
            style={{
              background:
                current === item.label
                  ? `linear-gradient(135deg, ${item.color}cc, ${item.color}99)`
                  : `rgba(255,255,255,0.05)`,
              border: `1px solid ${item.color}55`,
              color: item.color,
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      <a
        href="#"
        className="text-pink-400 hover:text-pink-200 text-lg font-semibold underline underline-offset-4 transition-all"
      >
        Glossary
      </a>
    </div>
  );
}
