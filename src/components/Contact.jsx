export const Contact = () => {
  return (
    <section id="contacts" className="py-20 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#00A79D] mb-4">
            Контакти
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            {/* Address */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Адрес:</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                гр. София, 1606,
                <br />
                Петте Кьошета, ул. "Доспат" 14
              </p>
            </div>

            {/* Phone */}
            <div>
              <a
                href="tel:+359899187641"
                className="text-lg text-gray-700 hover:text-[#0071BB] transition-colors inline-flex items-center group">
                <svg
                  className="w-5 h-5 mr-2 text-[#00A79D]"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="group-hover:underline">0899187641</span>
              </a>
            </div>

            {/* Email */}
            <div>
              <a
                href="mailto:info@drparushev.bg"
                className="text-lg text-gray-700 hover:text-[#0071BB] transition-colors inline-flex items-center group">
                <svg
                  className="w-5 h-5 mr-2 text-[#00A79D]"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="group-hover:underline">
                  info@drparushev.bg
                </span>
              </a>
            </div>

            {/* Working Hours (Optional) */}
            <div className="pt-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Работно време:
              </h3>
              <div className="space-y-2 text-gray-700">
                <p className="flex justify-between max-w-xs">
                  <span>Понеделник - Петък:</span>
                  <span className="font-semibold">9:00 - 18:00</span>
                </p>
                <p className="flex justify-between max-w-xs">
                  <span>Събота:</span>
                  <span className="font-semibold">По договаряне</span>
                </p>
                <p className="flex justify-between max-w-xs">
                  <span>Неделя:</span>
                  <span className="font-semibold">Почивен ден</span>
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <a
                href="tel:+359899187641"
                className="inline-block px-10 py-4 bg-[#0071BB] text-white font-semibold rounded-lg hover:bg-[#005a99] transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
                Обадете се сега
              </a>
            </div>
          </div>

          {/* Right Side - Map */}
          <div className="h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.0!2d23.3!3d42.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDQyJzAwLjAiTiAyM8KwMTgnMDAuMCJF!5e0!3m2!1sen!2sbg!4v1234567890!5m2!1sen!2sbg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Дентална практика Д-р Парушев"></iframe>
          </div>
        </div>

        {/* Optional: Social Media or Additional Info */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600 mb-4">
            Последвайте ни в социалните мрежи
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="w-12 h-12 bg-[#0071BB] hover:bg-[#005a99] text-white rounded-full flex items-center justify-center transition-all hover:scale-110"
              aria-label="Facebook">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-[#0071BB] hover:bg-[#005a99] text-white rounded-full flex items-center justify-center transition-all hover:scale-110"
              aria-label="Instagram">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
