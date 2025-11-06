export default function BackLinks({ links }) {
  return (
    <div className="mt-10">
      <h3 className="text-blue-300 text-lg mb-2">Related Lessons</h3>
      <ul className="list-disc ml-6 text-gray-300">
        {links.map((link, i) => (
          <li key={i}>
            <a href={link.url} className="text-cyan-400 hover:underline">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
