import { useLanguage } from "../context/LanguageContext";

export const Contact = () => {
  const { translations } = useLanguage();
  return (
    <section id="contacts" className="py-20 px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#02A69C] mb-4">
            {translations.contactTitle}
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Contact Info */}
          <div className="space-y-8 flex flex-col justify-center items-center text-center">
            {/* Address */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {translations.contactAddressLabel}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                {translations.contactAddress}
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
                <span className="group-hover:underline">+359 899187641</span>
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
          </div>

          {/* Right Side - Map */}
          <div className="h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.0945744799406!2d23.308799776544947!3d42.68868917116633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa85f700ae0fcb%3A0x979f6db912841efb!2sDental%20practice%20Dr.%20Parushev!5e0!3m2!1sen!2sbg!4v1731167890123!5m2!1sen!2sbg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Дентална практика Д-р Парушев"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
