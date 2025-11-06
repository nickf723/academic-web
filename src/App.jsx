import DummyLesson from "./pages/DummyLesson";
import Home from "./pages/Home";

function GlowLayer() {
  return (
    <div className="pointer-events-none fixed inset-0 opacity-40">
      <div className="absolute top-[-20%] left-[30%] w-[60%] h-[60%] bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-700 rounded-full blur-[150px] animate-pulse"></div>
    </div>
  );
}

export default function App() {
  return (
  <>
  <GlowLayer />
  <Home />
  </>);
}
