const images = import.meta.glob("../images/portfolio/*.jpg", {
  eager: true,
  import: "default",
});

export default function Portfolio() {
  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <h2 className="text-red-800 text-3xl md:text-4xl lg:text-5xl mb-4">
          Umjetnost ljubavi u svakom kadru
        </h2>
        <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto italic">
          Kolekcija pažljivo odabranih trenutaka, gdje se emocija i estetika
          susreću u bezvremenskoj eleganciji.
        </p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-0.5">
        {Object.values(images).map((src, index) => (
          <div key={index} className="mb-0.5 break-inside-avoid">
            <img
              src={src}
              alt={`Wedding photo ${index + 1}`}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
