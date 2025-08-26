import mladenciImg from "../images/mladenci.jpg";
import { Link } from "react-router-dom";

export default function Cijena() {
  return (
    <div className="grid align-middle container mx-auto px-4 py-12 h-dvh">
      <div className="md:grid md:grid-cols-2 md:gap-8 md:items-center">
        <div className="mb-8 md:mb-0">
          <img
            src={mladenciImg}
            alt="mladenka i mladenac u prirodi na automobilu"
            className="w-full h-auto"
          />
        </div>

        <div>
          <h2 className="text-red-800 text-3xl md:text-4xl text-center mb-6 ">
            Wedding Photography & Videography
          </h2>

          <div className="text-gray-700 text-lg space-y-3 text-center">
            <p>Photo & video sessions at locations of your choice</p>
            <p>All photos delivered in full resolution on USB</p>
            <p>Coverage by 1 photographer & 1 videographer</p>
            <p>Wedding film with custom length (up to 90 min)</p>
            <p>Highlight film – “Best Moments”</p>
            <p>Delivery on a personalized USB drive</p>
            <p>Aerial drone footage</p>
            <p>30x30 premium photo album in a keepsake box</p>
            <p>Optional photo session on a separate day</p>
            <p>Online gallery available for 6 months</p>

            <h3 className="text-red-800 text-2xl mt-6 font-semibold">
              1.850,00€
            </h3>

            <Link to="/kontakt">
              <button className="mt-6 px-8 py-3 bg-red-800 text-white text-base  hover:bg-red-700 transition-colors duration-200 cursor-pointer">
                Book your wedding session
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
