import { Carousel } from "./Carousel";
import Gallery1 from "../assets/gallery/gallery1.jpg";
import Gallery2 from "../assets/gallery/gallery2.jpg";
import Gallery3 from "../assets/gallery/gallery3.jpg";
import Gallery4 from "../assets/gallery/gallery4.jpg";
import Gallery5 from "../assets/gallery/gallery5.jpg";
import { useLanguage } from "../context/LanguageContext";

export const Gallery = () => {
  const { translations } = useLanguage();
  const slides = [Gallery1, Gallery2, Gallery3, Gallery4, Gallery5];

  return (
    <section id="gallery" className="py-20 px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#014d7f] font-semibold text-sm uppercase tracking-wide mb-2">
            {translations.gallerySubheading}
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#02A69C] mb-4">
            {translations.galleryTitle}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {translations.gallerySubtitle}
          </p>
        </div>

        {/* Carousel Container - Centered */}
        <div className="max-w-3xl mx-auto">
          <Carousel>
            {slides.map((s, index) => (
              <div key={index} className="min-w-full flex-shrink-0">
                <img
                  src={s}
                  alt={`${translations.galleryAlt} ${index + 1}`}
                  className="w-full h-auto max-h-[400px] md:max-h-[500px] object-contain"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};
