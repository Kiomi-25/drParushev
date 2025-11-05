import { Carousel } from "./Carousel";
import Gallery1 from "../assets/gallery/gallery1.jpg";
import Gallery2 from "../assets/gallery/gallery2.jpg";
import Gallery3 from "../assets/gallery/gallery3.jpg";
import Gallery4 from "../assets/gallery/gallery4.jpg";
import Gallery5 from "../assets/gallery/gallery5.jpg";

export const Gallery = () => {
  const slides = [Gallery1, Gallery2, Gallery3, Gallery4, Gallery5];

  return (
    <section id="gallery" className="py-20 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#00A79D] font-semibold text-sm uppercase tracking-wide mb-2">
            Нашата клиника
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Галерия
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Разгледайте нашата модерна дентална практика и оборудване
          </p>
        </div>

        {/* Carousel Container - Centered */}
        <div className="max-w-5xl mx-auto">
          <Carousel>
            {slides.map((s, index) => (
              <img
                key={index}
                src={s}
                alt={`Галерия ${index + 1}`}
                className="w-full h-[400px] md:h-[600px] object-cover"
              />
            ))}
          </Carousel>
        </div>

        {/* Optional: Grid Preview Below Carousel */}
        <div className="mt-12 grid grid-cols-3 md:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {slides.map((s, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
              <img
                src={s}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
