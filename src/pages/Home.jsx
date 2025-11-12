import ImgHome from "../assets/c.jpg";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Prices } from "../components/Prices";
import { Cases } from "../components/Cases";
import { Gallery } from "../components/Gallery";
import { Contact } from "../components/Contact";
import { BookingForm } from "../components/BookingForm";
import { useLanguage } from "../context/LanguageContext";

export const Home = () => {
  const { translations } = useLanguage();
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat "
          style={{
            backgroundImage: `url(${ImgHome})`,
            backgroundPosition: "60% 100%",
          }}>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 flex justify-center lg:justify-start lg:items-center min-h-screen lg:pl-20 pt-[190px] lg:pt-0">
            <div className="max-w-xl flex flex-col items-center">
              <div className="backdrop-blur-sm p-5 rounded-lg shadow-2xl flex flex-col items-center">
                <h1 className="text-xl lg:text-4xl font-bold text-gray-800 mb-2 uppercase tracking-wide">
                  {translations.homeTitle}
                </h1>
                <p className="text-4xl text-[#014d7f] font-semibold italic">
                  {translations.homeSubtitle}
                </p>
              </div>

              <div className="mt-6">
                <a
                  href="#book"
                  className="inline-block px-8 py-4 bg-[#0071BB] text-white font-semibold rounded-lg hover:bg-[#005a99] transform hover:-translate-y-1 transition-all duration-300 shadow-lg">
                  {translations.homeButton}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />

      <Services />

      <Prices />

      <Cases />

      <Gallery />

      <Contact />

      <BookingForm />
    </>
  );
};
