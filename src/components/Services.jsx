import Teeth1 from "../assets/teeth.svg";
import Teeth2 from "../assets/teeth2.svg";
import Teeth3 from "../assets/teeth3.svg";
import Teeth4 from "../assets/teeth4.svg";
import Teeth5 from "../assets/teeth5.svg";
import Teeth6 from "../assets/teeth6.svg";
import Teeth7 from "../assets/teeth7.svg";
import { useLanguage } from "../context/LanguageContext";


export const Services = () => {
  const { translations } = useLanguage();

  const teethImages = [Teeth1, Teeth2, Teeth3, Teeth4, Teeth5, Teeth6, Teeth7];


    return (
    <section id="services" className="py-20 px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-[#02A69C] mb-12 text-center">
          {translations.servicesTitle}
          </h2>
         
          <div className="grid md:grid-cols-3 gap-8">
          {translations.services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <div className="text-5xl mb-4">
                <img 
                  src={teethImages[index]} 
                  alt={service.title} 
                  className="rounded-lg" 
                />
              </div>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        </div>
      </section>
)
}