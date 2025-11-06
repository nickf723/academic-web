export default function ImageBlock({ src, caption, alt }) {
  return (
    <figure className="my-6 flex flex-col items-center">
      <img src={src} alt={alt} className="rounded-xl shadow-lg max-w-full w-[80%]" />
      {caption && (
        <figcaption className="mt-2 text-sm text-gray-400 italic">{caption}</figcaption>
      )}
    </figure>
  );
}
