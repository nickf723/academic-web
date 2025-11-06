export default function Applet({ name = "Demo Applet" }) {
  return (
    <div className="glass-accent p-8 text-center my-8">
      <p className="text-xl font-semibold mb-2">{name}</p>
      <p className="text-gray-300">[Interactive content will appear here]</p>
    </div>
  );
}
