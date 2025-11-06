import MenuItem from "./MenuItem";
import GlossaryLink from "./GlossaryLink";

export default function MainMenu({ onSelect }) {
  const sections = [
    { label: "Formal Sciences", color: "#3b82f6" },
    { label: "Natural Sciences", color: "#22c55e" },
    { label: "Social Sciences", color: "#f97316" },
    { label: "Applied Sciences", color: "#eab308" },
    { label: "Humanities", color: "#a855f7" },
    { label: "Interdisciplines", color: "#06b6d4" },
  ];

  return (
    <div className="glass w-full py-4 px-8 flex flex-col md:flex-row items-center justify-between rounded-2xl shadow-lg">
      <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-sm">
        The Academic Web
      </h1>

      <div className="flex flex-wrap justify-center gap-3 mt-4 md:mt-0">
        {sections.map((s) => (
          <MenuItem
            key={s.label}
            label={s.label}
            color={s.color}
            onClick={() => onSelect(s.label)}
          />
        ))}
      </div>

      <GlossaryLink />
    </div>
  );
}
