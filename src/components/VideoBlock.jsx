export default function VideoBlock({ src, caption }) {
  return (
    <div className="my-6 flex flex-col items-center">
      <video controls className="rounded-xl shadow-lg max-w-full w-[80%]">
        <source src={src} type="video/mp4" />
      </video>
      {caption && <p className="text-gray-400 mt-2 text-sm italic">{caption}</p>}
    </div>
  );
}
