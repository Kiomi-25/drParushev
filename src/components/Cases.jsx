import { CarouselBA } from "./CarouselBA";
import Case1a from "../assets/cases/Case1-A.jpg";
import Case1b from "../assets/cases/Case1-B.jpg";
import Case2a from "../assets/cases/Case2-A.jpg";
import Case2b from "../assets/cases/Case2-B.jpg";
import Case3a from "../assets/cases/Case3-A.jpg";
import Case3b from "../assets/cases/Case3-B.jpg";

import Case5a from "../assets/cases/Case5-A.jpg";
import Case5b from "../assets/cases/Case5-B.jpg";
import Case6a from "../assets/cases/Case6-A.jpg";
import Case6b from "../assets/cases/Case6-B.jpg";
import { useLanguage } from "../context/LanguageContext";

export const Cases = () => {
  const { translations } = useLanguage();

  // Group images into before/after pairs
  const cases = [
    {
      before: Case1a,
      after: Case1b,
      description: translations.caseDescription[0],
    },
    {
      before: Case2a,
      after: Case2b,
      description: translations.caseDescription[1],
    },
    {
      before: Case3a,
      after: Case3b,
      description: translations.caseDescription[2],
    },
    {
      before: Case5a,
      after: Case5b,
      description: translations.caseDescription[3],
    },
    {
      before: Case6a,
      after: Case6b,
      description: translations.caseDescription[4],
    },
  ];

  // Debug: Check if images are loaded
  console.log("Cases:", cases);
  console.log("Translations:", translations);

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
          <CarouselBA>
            {cases.map((caseItem, index) => (
              <div
                key={index}
                className="min-w-full px-4 flex items-center min-h-[500px] md:min-h-[600px]">
                <div className="w-full">
                  {/* Case Description */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-600">
                      {caseItem.description}
                    </h3>
                  </div>

                  {/* Images Grid */}
                  <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center">
                    {/* Before Image */}
                    <div className="relative flex items-center justify-center">
                      <img
                        src={caseItem.before}
                        alt={`${translations.caseAlt} ${index + 1} - преди`}
                        className="w-full h-auto object-cover rounded-lg shadow-md"
                      />
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-gray-800/80 text-white px-4 py-2 rounded-full font-semibold text-sm">
                        {translations.casesBefore}
                      </div>
                    </div>

                    {/* After Image */}
                    <div className="relative flex items-center justify-center">
                      <img
                        src={caseItem.after}
                        alt={`${translations.caseAlt} ${index + 1} - след`}
                        className="w-full h-auto object-cover rounded-lg shadow-md"
                      />
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-gray-800/80 text-white px-4 py-2 rounded-full font-semibold text-sm">
                        {translations.casesAfter}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CarouselBA>
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
