import Dr from "../assets/dr.jpg"
import { useLanguage } from "../context/LanguageContext";


export const About = () => {
  const { translations } = useLanguage();

    return (
      <section id="about" className="py-30 px-15 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#02A69C] mb-12 text-center">
            {translations.aboutTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex justify-center md:justify-end">
              <img
                src={Dr}
                alt="Д-р Парушев"
                className="rounded-lg shadow-lg w-full max-w-md"
              />
            </div>
            <div className="space-y-4 text-gray-700 text-lg text-center md:text-left">
            <p>{translations.aboutParagraph1}</p>
            <p>{translations.aboutParagraph2}</p>
            <p>{translations.aboutParagraph3}</p>
            </div>
          </div>
        </div>
      </section>
    );
  };