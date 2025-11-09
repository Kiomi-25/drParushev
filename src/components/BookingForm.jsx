import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";


export const BookingForm = () => {
  const { translations } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
    alert("Вашето запитване е изпратено!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="book" className="py-20 px-8 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#00A79D] mb-4">
            {translations.bookingTitle}
          </h2>
          <p className="text-gray-600 text-lg">
            {translations.bookingSubtitle}
          </p>
        </div>

        <div className="mb-10 pb-8 border-b border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <svg className="w-6 h-6 mr-3 text-[#00A79D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {translations.bookingWorkingHours}
          </h3>
          <div className="space-y-2 text-gray-700">
            <p className="flex justify-between max-w-xs">
              <span>{translations.bookingMonFri}</span>
              <span className="font-semibold">9:00 - 18:00</span>
            </p>
            <p className="flex justify-between max-w-xs">
              <span>{translations.bookingSaturday}</span>
              <span className="font-semibold">{translations.bookingSaturdayTime}</span>
            </p>
            <p className="flex justify-between max-w-xs">
              <span>{translations.bookingSunday}</span>
              <span className="font-semibold">{translations.bookingSundayTime}</span>
            </p>
          </div>
        </div>

{/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
           {/* Name Input */}
        <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              {translations.bookingNameLabel}
            </label>
            <input
              id="name"
              type="text"
              placeholder={translations.bookingNamePlaceholder}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#00A79D] focus:bg-white transition-all"
            />
          </div>

            {/* Email and Phone Row */}
            <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                {translations.bookingEmailLabel}
              </label>
              <input
                id="email"
                type="email"
                placeholder={translations.bookingEmailPlaceholder}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#00A79D] focus:bg-white transition-all"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                {translations.bookingPhoneLabel}
              </label>
              <input
                id="phone"
                type="tel"
                placeholder={translations.bookingPhonePlaceholder}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#00A79D] focus:bg-white transition-all"
              />
            </div>
          </div>

 {/* Message Textarea */}
 <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
              {translations.bookingMessageLabel}
            </label>
            <textarea
              id="message"
              placeholder={translations.bookingMessagePlaceholder}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows="5"
              required
              className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#00A79D] focus:bg-white transition-all resize-none"
            ></textarea>
          </div>

         {/* Submit Button */}
         <button
            type="submit"
            className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-[#00A79D] to-[#008a82] text-white font-bold text-lg rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>{translations.bookingSubmitButton}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>


         
        </form>


        </div>
    </section>
  );
};
