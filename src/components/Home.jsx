import loopVideo from "../videos/loop.mp4";
import portfolioImg from "../images/portfolio.jpeg";
import promoImg from "../images/promo.jpg";
import { Link } from "react-router-dom";
import GoogleReviewsWidget from "google-reviews-widget";
import Team from "../components/Team";
import CTA from "./CTA.jsx";
import Divider from "./Divider.jsx";
import DividerFull from "./DividerFull.jsx";
import Features from "./Features.jsx";

export default function Main() {
  return (
    <div className="w-full flex flex-col ">
      <video
        src={loopVideo}
        autoPlay
        loop
        muted
        playsInline
        style={{ width: "100%", display: "block", height: "90%" }}
        className="w-full block object-cover"
      />

      <Divider>Scroll for more info</Divider>

      <div className="grid grid-cols-1 gap-10 md:gap-20 px-10 py-20 md:grid-cols-2">
        <Link to={"/portfolio"}>
          <button className="relative w-full h-64 cursor-pointer group overflow-hidden">
            <img
              src={portfolioImg}
              alt="Portfolio, bride doing makeup in a car"
              className="w-full h-full object-cover transition-transform duration-300 "
            />
            <div className="absolute top-1 left-2 md:top-2  text-red-800 text-3xl md:text-4xl px-4 py-2 ">
              Portfolio
            </div>
          </button>
        </Link>
        <Link to={"/promo"}>
          <button className="relative w-full h-64 cursor-pointer group overflow-hidden">
            <img
              src={promoImg}
              alt="Promo with bottles of alcohol"
              className="w-full h-full object-cover transition-transform duration-300  grayscale-100"
            />
            <div className="absolute top-1 right-2 md:top-2  text-red-800 text-3xl md:text-4xl px-4 py-2 ">
              Promo
            </div>
          </button>
        </Link>
      </div>

      <CTA />

      <Features />

      <DividerFull />

      <Team />
      <GoogleReviewsWidget instanceId="KidEAFYbqqG64Z3aPKko" />
    </div>
  );
}
