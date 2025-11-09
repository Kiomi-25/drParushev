import LOGO from "../assets/LOGO.svg";
import { useLanguage } from "../context/LanguageContext";


export const Prices = () => {
  const { translations } = useLanguage();
    return (
      <section
      id="prices"
      className="py-20 px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl text-[#02A69C] font-bold mb-4">
            {translations.pricesTitle}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {translations.pricesSubtitle}
          </p>
        </div>


        {/* Price Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {translations.priceCards.map((card, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                index === 1
                  ? "border-3 border-[#014d7f] relative"
                  : "border border-gray-100"
              }`}>
              {/* Popular Badge (only for second card) */}
              {index === 1 && (
                <div className="absolute top-4 right-4 bg-[#014d7f] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {translations.popularBadge}
                </div>
              )}

          {/* Card Header */}
          <div className="border-b border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {card.title}
                  </h3>
                  <div className="w-14 h-14">
                    <img
                      src={LOGO}
                      alt="Dental Practice Logo"
                      className="w-full h-full object-contain transform transition-transform hover:scale-105"
                    />
                  </div>
                </div>
              </div>

          {/* Card Body */}
          <div className="p-8">
          <div className="flex items-baseline justify-center mb-4">
                  <span className="text-5xl font-bold text-gray-800">
                    {card.price}
                  </span>
                  <span className="text-2xl font-semibold text-gray-600 ml-2">
                    {translations.currency}
                  </span>
                </div>
                <ul className="space-y-3 text-gray-600">
                  {card.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-[#00A79D] mr-2 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20">
                        <path
                         fillRule="evenodd"
                         d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                         clipRule="evenodd"
                       />
                     </svg>
                     <span>{feature}</span>
                   </li>
                 ))}
               </ul>
             </div>
           </div>
         ))}
       </div>

{/* Important Note */}
<div className="max-w-3xl mx-auto">
          <div className="bg-blue-50 border-l-4 border-[#0071BB] p-6 rounded-lg">
            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-[#0071BB] mr-3 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <p className="font-semibold text-gray-800 mb-1">
                  {translations.importantInfoTitle}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {translations.importantInfoText}
                </p>
              </div>
            </div>
          </div>
        </div>

{/* CTA Button */}
<div className="text-center mt-12">
          <a
          href="#book"
          className="inline-block px-10 py-4 bg-[#0071BB] text-white font-semibold rounded-lg hover:bg-[#005a99] transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
          {translations.ctaButton}
        </a>
      </div>
    </div>
  </section>
);
};

