export default function SideNote({ title = "Note", content }) {
  return (
    <div className="glass-accent p-4 mb-4 border-l-4 border-blue-400">
      <h3 className="text-lg font-semibold text-blue-300 mb-1">{title}</h3>
      <p className="text-gray-200 text-sm">{content}</p>
    </div>
  );
}
