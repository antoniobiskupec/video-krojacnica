import portfolioImg from "../images/portfolio.jpeg";

export default function Cijena() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="md:grid md:grid-cols-2 md:gap-8 md:items-center">
        {/* Image Section */}
        <div className="mb-8 md:mb-0">
          <img
            src={portfolioImg}
            alt="Wedding photography"
            className="w-full h-auto"
          />
        </div>

        {/* Content Section */}
        <div>
          <h2 className="text-red-800 text-3xl md:text-4xl text-center mb-6 ">
            Slikanje i snimanje vjenčanja
          </h2>

          <div className="text-gray-700 text-lg space-y-3 text-center">
            <p>Fotografiranje i snimanje na lokacijama po želji</p>
            <p>Sve fotografije u punom formatu na USB mediju</p>
            <p>Dolazak 1 fotografa i 1 snimatelja</p>
            <p>Video u trajanju po Vašoj želji (Max 90 min)</p>
            <p>Video 'Best Moments'</p>
            <p>Isporuka materijala na personaliziranom USB-u</p>
            <p>Kadrovi iz zraka dronom</p>
            <p>Foto album 30*30 u kutiji</p>
            <p>Photo session posebno neki drugi dan</p>
            <p>Online galerija dostupna 6 mjeseci</p>

            <h3 className="text-red-800 text-2xl mt-6 font-semibold">
              1.850,00€
            </h3>

            <button className="mt-6 px-8 py-3 bg-red-800 text-white text-base  hover:bg-red-700 transition-colors duration-200 cursor-pointer">
              Rezervirajte termin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
