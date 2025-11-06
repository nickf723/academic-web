export default function Term({ term, definition }) {
  return (
    <span className="text-yellow-300 cursor-help border-b border-dotted border-yellow-300" title={definition}>
      {term}
    </span>
  );
}
