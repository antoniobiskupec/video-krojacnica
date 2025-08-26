import image2 from "../images/hero/image2.jpg";

export default function Example() {
  return (
    <div className="relative bg-white pt-30">
      <div className="relative h-80 overflow-hidden  md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2 rounded-md">
        <img
          alt="branko"
          src={image2}
          className="size-full object-cover grayscale-100"
        />
      </div>
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pr-0 lg:pl-24 xl:pl-32">
          <h2 className="text-base/7 font-semibold text-red-900">
            Capturing timeless love
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Your wedding, your story
          </p>
          <p className="mt-6 text-base/7 text-gray-600">
            Every look, every smile, every touch — we preserve the beauty of
            your wedding day with elegance and soul. From heartfelt vows to
            joyful celebrations, our photography and films turn fleeting moments
            into memories you’ll cherish forever.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-flex rounded-md bg-red-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-red-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800"
            >
              Book a session
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
