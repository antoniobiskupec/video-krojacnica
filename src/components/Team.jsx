import marioImg from "../images/mario.jpg";
import brankoImg from "../images/branko.jpg";

const people = [
  {
    name: "Mario",
    role: "Videographer, Photographer, Gazda",
    imageUrl: marioImg,
    bio: "Newly married and a proud dad of a little boy, Mario still enjoys a good beer, barbecues with friends, and the occasional hike—though editing often turns into naps on the couch. With over 300 weddings filmed since age 17, he’s the team’s perfectionist, always chasing the perfect shot (and dreading bad color grades). Outside work, he loves books, rock albums, and family trips into nature.",
  },
  {
    name: "Branko",
    role: "Photographer, Second Videographer (when needed), Graphic Designer, Kum",
    imageUrl: brankoImg,
    bio: "Happily married and father to a four-year-old, Branko loves spending time with his family, experimenting in the kitchen (with an ice-cold beer nearby), and trying out new recipes. With more than 15 years in photography, he’s the team’s photographer and editor, known for his humor and optimism. His creativity and easygoing spirit make him the heart of the duo, always ready to capture moments with joy.",
  },
];

export default function Team() {
  return (
    <div className="bg-white py-24 md:py-32 lg:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Our team
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            We’re more than just photographers and filmmakers — we’re
            storytellers. With passion, creativity, and years of experience, we
            dedicate ourselves to capturing love stories with authenticity and
            elegance.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <img
                alt=""
                src={person.imageUrl}
                className="w-full  object-cover outline-1 -outline-offset-1 outline-black/5 grayscale-50"
              />
              <h3 className="mt-6 text-lg/8 font-semibold text-gray-900">
                {person.name}
              </h3>
              <p className="text-base/7 text-gray-600">{person.role}</p>
              <p className="mt-4 text-base/7 text-gray-600">{person.bio}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
