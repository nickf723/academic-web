export default function Heading({ text }) {
  return (
    <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-md">
      {text}
    </h1>
  );
}
