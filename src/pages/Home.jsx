import ImgHome from "../assets/c.jpg";
import Dr from "../assets/dr.jpg";
import Teeth1 from "../assets/teeth.svg";
import Teeth2 from "../assets/teeth2.svg";
import Teeth3 from "../assets/teeth3.svg";
import Teeth4 from "../assets/teeth4.svg";
import Teeth5 from "../assets/teeth5.svg";
import Teeth6 from "../assets/teeth6.svg";
import Teeth7 from "../assets/teeth7.svg";
import { Cases } from "../components/Cases";
import { Gallery } from "../components/Gallery";
import { Contact } from "../components/Contact";
import { BookingForm } from "../components/BookingForm";

export const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-left-bottom bg-no-repeat"
          style={{ backgroundImage: `url(${ImgHome})` }}>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content */}
        <div className="relative items-end z-10 flex justify-start min-h-screen  lg:pb-80 lg:pl-40">
          <div className="max-w-2xl flex flex-col items-center">
            <div className=" backdrop-blur-sm p-5 rounded-lg shadow-2xl flex flex-col items-center">
              <h1 className="text-xl lg:text-4xl font-bold text-gray-800 mb-2 uppercase tracking-wide">
                Дентална практика
              </h1>
              <p className="text-4xl text-[#014d7f] font-semibold italic">
                Д-р Парушев
              </p>
            </div>

            <div className="mt-6">
              <a
                href="#about"
                className="inline-block px-8 py-4 bg-[#0071BB] text-white font-semibold rounded-lg hover:bg-[#005a99] transform hover:-translate-y-1 transition-all duration-300 shadow-lg">
                Запази час
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-30 px-15 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#02A69C] mb-12 text-center">
            За мен
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img
                src={Dr}
                alt="Д-р Парушев"
                className="rounded-lg shadow-lg w-md place-self-end"
              />
            </div>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                Завърших средното си образование завърших в Испанската гимназия
                в София. Дипломирах се през 2016 с магистърска степен по
                дентална медицина в София.
              </p>
              <p>
                Интересите ми са насочени в областта на ендодонтията, естетични
                реставрации и алайнери. Посещавам множество квалификационни
                курсове в България и чужбина, по този начин се стремя да следя
                тенденциите в денталната медицина и да ги прилагам в практиката
                си.
              </p>
              <p>
                От 2016 до 2018 работих в дентална практика в Люлин. В края на
                2018 година стартирах своя собствена, която ръководя от тогава.
                Интересите ми извън стоматологията са свързани с планински
                преходи.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#02A69C] mb-12 text-center">
            Услуги
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Профилактика</h3>
              <div className="text-5xl mb-4">
                <img src={Teeth1} alt="Ендодонтия" className="rounded-lg " />
              </div>
              <p className="text-gray-600">
                Специализирани процедури за лечение на коренови канали
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4">
                Естетични възстановявания
              </h3>
              <div className="text-5xl mb-4">
                <img src={Teeth2} alt="Ендодонтия" className="rounded-lg " />
              </div>
              <p className="text-gray-600">
                Специализирани процедури за лечение на коренови канали
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Ендодонтия</h3>
              <div className="text-5xl mb-4">
                <img src={Teeth3} alt="Ендодонтия" className="rounded-lg " />
              </div>
              <p className="text-gray-600">
                Специализирани процедури за лечение на коренови канали
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Избелване</h3>
              <div className="text-5xl mb-4">
                <img src={Teeth4} alt="Ендодонтия" className="rounded-lg " />
              </div>
              <p className="text-gray-600">
                Специализирани процедури за лечение на коренови канали
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Протетика</h3>
              <div className="text-5xl mb-4">
                <img src={Teeth5} alt="Ендодонтия" className="rounded-lg " />
              </div>
              <p className="text-gray-600">
                Специализирани процедури за лечение на коренови канали
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Хирургия</h3>
              <div className="text-5xl mb-4">
                <img src={Teeth6} alt="Ендодонтия" className="rounded-lg " />
              </div>
              <p className="text-gray-600">
                Специализирани процедури за лечение на коренови канали
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Алайнери</h3>
              <div className="text-5xl mb-4">
                <img src={Teeth7} alt="Ендодонтия" className="rounded-lg " />
              </div>
              <p className="text-gray-600">
                Специализирани процедури за лечение на коренови канали
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="prices"
        className="py-20 px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-[#00A79D] font-semibold text-sm uppercase tracking-wide mb-2">
              Ценова листа
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Цени
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Прозрачни и достъпни цени за качествена дентална грижа
            </p>
          </div>

          {/* Price Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {/* Card 1 - Преглед */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-br from-[#0071BB] to-[#00A79D] p-6">
                <div className="flex items-center justify-between text-white">
                  <h3 className="text-2xl font-bold">Преглед</h3>
                  <div className="text-4xl">🦷</div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-5xl font-bold text-gray-800">60</span>
                  <span className="text-2xl font-semibold text-gray-600 ml-2">
                    лв
                  </span>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
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
                    <span>Пълен стоматологичен преглед</span>
                  </li>
                  <li className="flex items-start">
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
                    <span>Консултация</span>
                  </li>
                  <li className="flex items-start">
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
                    <span>Оценка на състоянието</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2 - Преглед и лечебен план */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-[#0071BB] relative">
              {/* Popular Badge */}
              <div className="absolute top-4 right-4 bg-[#00A79D] text-white text-xs font-bold px-3 py-1 rounded-full">
                ПОПУЛЯРЕН
              </div>
              <div className="bg-gradient-to-br from-[#0071BB] to-[#00A79D] p-6">
                <div className="flex items-center justify-between text-white">
                  <h3 className="text-2xl font-bold">
                    Преглед и<br />
                    лечебен план
                  </h3>
                  <div className="text-4xl">📋</div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-5xl font-bold text-gray-800">80</span>
                  <span className="text-2xl font-semibold text-gray-600 ml-2">
                    лв
                  </span>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
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
                    <span>Всичко от базовия преглед</span>
                  </li>
                  <li className="flex items-start">
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
                    <span>Детайлен лечебен план</span>
                  </li>
                  <li className="flex items-start">
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
                    <span>Посочени цени за манипулации</span>
                  </li>
                </ul>
              </div>
            </div>
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
                    Важна информация
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    *Лечебният план и посочените цени в него за манипулациите са
                    актуални 6 месеца от датата на получаването
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <a
              href="#contacts"
              className="inline-block px-10 py-4 bg-[#0071BB] text-white font-semibold rounded-lg hover:bg-[#005a99] transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              Запазете час за преглед
            </a>
          </div>
        </div>
      </section>

      <Cases />

      <Gallery />

      <Contact />
      <BookingForm />

      {/* Contact Section */}
      <section id="contacts" className="py-20 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Контакти</h2>
          <p className="text-xl text-gray-600 mb-8">
            Свържете се с нас за повече информация
          </p>
          <a
            href="tel:+359123456789"
            className="inline-block px-8 py-4 bg-[#0071BB] text-white font-semibold rounded-lg hover:bg-[#005a99] transition-all">
            Обадете се
          </a>
        </div>
      </section>
    </>
  );
};
