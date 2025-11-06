export default function OutsideLinks({ links }) {
  return (
    <div className="mt-6">
      <h3 className="text-green-300 text-lg mb-2">External Resources</h3>
      <ul className="list-disc ml-6 text-gray-300">
        {links.map((link, i) => (
          <li key={i}>
            <a
            href={link.url}
            className="text-cyan-400 hover:text-cyan-200 transition-colors duration-200 underline-offset-2 hover:underline">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
