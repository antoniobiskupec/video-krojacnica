import image3 from "../images/hero/image3.jpg";

const storyIntro = [
  {
    title: "More than memories",
    text: "Your story deserves more than ordinary memories. Imagine a wedding captured like a film – filled with tender glances, genuine emotions, and touches that speak louder than words.",
  },
  {
    title: "Timeless photographs & films",
    text: "Every moment transformed into timeless photographs and film that will, even decades from now, bring you back to the day your forever story began.",
  },
  {
    title: "Luxury experience",
    text: "That’s exactly what you receive: a luxurious visual experience that tells your story – authentic, sophisticated, and full of soul (crafted just for you!). Moments captured with artistry and elegance, carefully tailored to reflect who you are and what you truly feel.",
  },
  {
    title: "Art, not just documents",
    text: "Your memories are not just a document – they are art. And that’s why we shape them with such care, so they will always take you back to the day your journey began.",
  },
];

export default function Features() {
  return (
    <div className="bg-white pt-20">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div>
            <div className="border-b border-gray-200 pb-10">
              <h2 className="font-medium text-gray-500">
                The Art of Love in Every Frame
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Where emotion meets timeless elegance
              </p>
            </div>

            <dl className="mt-10 space-y-10">
              {storyIntro.map((section) => (
                <div key={section.title}>
                  <dt className="text-sm font-medium text-gray-900">
                    {section.title}
                  </dt>
                  <dd className="mt-3 text-sm text-gray-500">{section.text}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <img
              alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
              src={image3}
              className="aspect-square w-full  object-cover grayscale-100"
            />
            <div className="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
              <img
                alt="Detail of temperature setting button on kettle bass with digital degree readout."
                src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-feature-09-detail-01.jpg"
                className="aspect-square w-full object-cover grayscale-100"
              />
              <img
                alt="Kettle spout pouring boiling water into coffee grounds in pour-over mug."
                src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-feature-09-detail-02.jpg"
                className="aspect-square w-full object-cover grayscale-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
