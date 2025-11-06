export default function MenuItem({ label, color, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-sm md:text-base px-4 py-2 font-semibold rounded-lg transition-all duration-300 border border-transparent hover:scale-[1.05] shadow-md"
      style={{
        background: `linear-gradient(135deg, ${color}33, ${color}99)`,
        borderColor: `${color}55`,
        color: "#fff",
        boxShadow: `0 0 10px ${color}55`,
      }}
    >
      {label}
    </button>
  );
}
