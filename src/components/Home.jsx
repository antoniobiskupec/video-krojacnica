import loopVideo from "../videos/loop.mp4";
import marioImg from "../images/mario.jpg";
import brankoImg from "../images/branko.jpg";
import hero1 from "../images/hero/hero1.jpg";
import hero2 from "../images/hero/hero2.jpg";
import hero3 from "../images/hero/hero3.jpg";
import portfolioImg from "../images/portfolio.jpeg";
import promoImg from "../images/promo.jpg";
import { Link } from "react-router-dom";

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
      <div className="flex flex-col gap-4" style={{ height: "90%" }}>
        <p className="flex justify-center text-red-800 font-quicksand text-4xl p-4 text-center pt-8">
          Vjenčana fotografija skrojena po Vašoj mjeri
        </p>
        <div className="flex justify-center">
          <button className="m-8 px-6 py-4 bg-red-800 text-white text-base  hover:bg-red-700 transition-all duration-300 cursor-pointer ">
            Rezervirajte termin
          </button>
        </div>
      </div>
      <div>
        <div className="grid md:grid-cols-2 mx-auto max-w-7xl px-4 py-16">
          <div className="flex flex-col gap-6 justify-center text-xl">
            <p>
              <span className="text-red-800">Vaša</span> priča zaslužuje više od
              običnih uspomena. Zamislite vjenčanje zabilježeno kao film –
              prepun nježnih pogleda, istinskih emocija, dodira koji govore više
              od riječi.
            </p>
            <p>
              Svaki trenutak pretočen u bezvremenske fotografije i video koji će
              vas, i desetljećima kasnije, vratiti na dan kada je započela vaša
              zauvijek priča.
            </p>
            <p>
              Upravo to dobivate: luksuzno vizualno iskustvo koje priča vašu
              priču – autentično, sofisticirano i s dušom (po vašoj mjeri!).
              Umjetnički fotografirani i snimljeni trenuci koji odišu
              elegancijom, pažljivo krojeni da odraze tko ste vi i što zaista
              osjećate. Vaše uspomene nisu samo dokument – one su umjetnost. I
              zato ih oblikujemo s pažnjom da vas dugo vraćaju u dan kad ste
              započeli svoje putovanje.
            </p>
          </div>
          <section className="relative w-full h-[90vh] max-h-[800px] overflow-hidden">
            {/* 1) Groom image – top right */}
            <img
              src={hero1}
              alt="Groom adjusting watch"
              className="
          absolute
          top-30
          right-10
          w-[30%]
          object-cover
          z-30
        "
            />

            {/* 2) Seated bride – center-left */}
            <img
              src={hero2}
              alt="Bride seated"
              className="
          absolute
          top-[20%]
          left-40
          w-[50%]
          object-cover
          z-20
        "
            />

            {/* 3) Backlit bride – bottom right */}
            <img
              src={hero3}
              alt="Bride backlit"
              className="
          absolute
          bottom-20
          left-3
          w-[40%]
          object-cover
          z-22
        "
            />
          </section>
        </div>
        <div className="grid grid-cols-1 gap-10 md:gap-4 px-4 py-10 md:grid-cols-2">
          <button className="relative w-full h-64 cursor-pointer group overflow-hidden">
            <img
              src={portfolioImg}
              alt="Portfolio, bride doing makeup in a car"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-101"
            />
            <div className="absolute top-4 left-4 md:top-2  text-red-800 text-3xl md:text-4xl px-4 py-2 ">
              Portfolio
            </div>
          </button>

          <button className="relative w-full h-64 cursor-pointer group overflow-hidden">
            <img
              src={promoImg}
              alt="Promo with bottles of alcohol"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-101 grayscale-100"
            />
            <div className="absolute top-4 right-4 md:top-2  text-red-800 text-3xl md:text-4xl px-4 py-2 ">
              Promo
            </div>
          </button>
        </div>
        <div className="pt-16">
          <div className="grid grid-cols-2 p-4 group">
            <img
              className="w-1/2 mx-auto grayscale-100 md:group-hover:grayscale-0 fade-in transition-all duration-300"
              src={marioImg}
            ></img>
            <div className="text-left">
              <h3 className="text-3xl text-red-800">Mario</h3>
              <p className="italic text-xs">Snimatelj, Fotograf, Gazda</p>
              <div className="pt-6 flex flex-col gap-3 text-gray-700">
                <p className="">
                  Mario je nedavno uplovio u bračne vode i postao ponosni tata
                  malog sina – noćno editiranje sad zamjenjuje drijemanjem na
                  kauču. I dalje obožava pivo (ne mora biti ledeno) i povremeni
                  roštilj s ekipom, ali planinarenje je postalo rijetka
                  avantura.
                </p>
                <p className="">
                  Profesionalno snima i montira videa od svoje 17. godine, s
                  više od 300 vjenčanja iza sebe. U timu ga svi znaju kao
                  perfekcionista koji bez milosti lovi savršeni kadar – njegova
                  najveća fobija? Loš color grade.
                </p>
                <p className="">
                  Kad nije za kamerom, najradije se izgubi u dobroj knjizi ili
                  “odsluša” neki rock album dok spava na kauču, a vikendom
                  povede obitelj na kratke izlete u prirodu.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:p-4 md:pt-16 group">
          <img
            className="w-1/2 order-2 mx-auto grayscale-100 md:group-hover:grayscale-0 fade-in transition-all duration-300"
            src={brankoImg}
          ></img>
          <div className="text-right">
            <h3 className="text-3xl text-red-800">Branko</h3>
            <div className="pt-6 flex flex-col gap-3 text-gray-700">
              <p className="itali text-xs">
                Fotograf, Po potrebi drugi snimatelj, Grafički dizajner, Kum
              </p>
              <p>
                Branko je sretno oženjen i otac četverogodišnjeg dječaka. U
                slobodno vrijeme najviše uživa u igri sa sinom i provođenju
                vremena s obitelji.
              </p>
              <p>
                Za razliku od Marija, pivo mora biti jako hladno. Voli
                isprobavati nove recepte, posebno različite vrste mesa, što se i
                vidi po njegovoj figuri.
              </p>
              <p>
                Fotografijom se bavi više od 15 godina, u početku amaterski, a
                posljednjih godina profesionalno. U timu je zadužen za
                fotografiranje i editiranje fotografija, često ponavljajući
                editiranje nakon perfekcionističkih prigovora kuma Marija. Sam
                sebe smatra humorističnijim dijelom tima.
              </p>
              <p>
                Svoj posao voli jer mu omogućuje da izrazi svoju kreativnost i
                uhvati posebne trenutke, prateći trendove iz svijeta industrije.
                Njegov optimističan i vedar pristup čini ga omiljenim članom
                tima, uvijek spremnim za smijeh i zabavu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
