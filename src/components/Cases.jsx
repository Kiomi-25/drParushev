import { Carousel } from "./Carousel";
import Case1 from "../assets/cases/Case1.png";
import Case2 from "../assets/cases/Case2.png";
import Case3 from "../assets/cases/Case3.png";
import Case4 from "../assets/cases/Case4.png";
import Case5 from "../assets/cases/Case5.png";
import Case6 from "../assets/cases/Case6.png";
import { useLanguage } from "../context/LanguageContext";


export const Cases = () => {
  const { translations } = useLanguage();
  const slides = [Case1, Case2, Case3, Case4, Case5, Case6];

  return (
    <section id="cases" className="py-20 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#014d7f] font-semibold text-sm uppercase tracking-wide mb-2">
            {translations.casesPortfolio}
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#02A69C] mb-4">
            {translations.casesTitle}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {translations.casesSubtitle}
          </p>
        </div>

        {/* Carousel Container - Centered and Smaller */}
        <div className="max-w-4xl mx-auto">
          <Carousel>
            {slides.map((s, index) => (
              <img
                key={index}
                src={s}
                alt={`${translations.caseAlt} ${index + 1}`}
                className="w-full h-auto object-contain"
              />
            ))}
          </Carousel>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="#book"
            className="inline-block px-10 py-4 bg-[#0071BB] text-white font-semibold rounded-lg hover:bg-[#005a99] transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
             {translations.casesCtaButton}
          </a>
        </div>
      </div>
    </section>
  );
};
