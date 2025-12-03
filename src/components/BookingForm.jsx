import { useState, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import emailjs from "@emailjs/browser";
import { Toast } from "./Toast";

export const BookingForm = () => {
  const { translations } = useLanguage();

  const form = useRef();

  const [toast, setToast] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_y7memsr", "template_sb4j0i8", form.current, {
        publicKey: "C-TJhkyZSdgrsufBb",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          console.log("Message sent");

          form.current.reset();
          setToast({
            message: translations.formSubmitSuccess,
            type: "success",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);

          setToast({
            message: translations.formSubmitFail,
            type: "error",
          });
        }
      );
  };

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      <section
        id="book"
        className="py-20 px-8 bg-gradient-to-b from-gray-50 to-gray-100">
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
              <svg
                className="w-6 h-6 mr-3 text-[#00A79D]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {translations.bookingWorkingHours}
            </h3>
            <div className="space-y-4 text-gray-700">
              <p className="flex justify-between max-w-md ">
                <span>{translations.bookingMonWenFri}</span>
                <span className="font-semibold  "> 14:00 - 19:30</span>
              </p>
              <p className="flex justify-between max-w-md">
                <span>{translations.bookingTueThu}</span>
                <span className="font-semibold">08:00 - 13:00 </span>
              </p>
              <p className="flex justify-between max-w-md">
                <span>{translations.bookingSaturday}</span>
                <span className="font-semibold">
                  {translations.bookingSaturdayTime}
                </span>
              </p>
              <p className="flex justify-between max-w-md">
                <span>{translations.bookingSunday}</span>
                <span className="font-semibold">
                  {translations.bookingSundayTime}
                </span>
              </p>
            </div>
          </div>

          {/* Form */}
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-2">
                {translations.bookingNameLabel}
              </label>
              <input
                id="name"
                type="text"
                name="user_name"
                placeholder={translations.bookingNamePlaceholder}
                required
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#00A79D] focus:bg-white transition-all"
              />
            </div>

            {/* Email and Phone Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2">
                  {translations.bookingEmailLabel}
                </label>
                <input
                  id="email"
                  type="email"
                  name="user_email"
                  placeholder={translations.bookingEmailPlaceholder}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#00A79D] focus:bg-white transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-700 mb-2">
                  {translations.bookingPhoneLabel}
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="user_phone"
                  placeholder={translations.bookingPhonePlaceholder}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#00A79D] focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Message Textarea */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700 mb-2">
                {translations.bookingMessageLabel}
              </label>
              <textarea
                id="message"
                name="message"
                placeholder={translations.bookingMessagePlaceholder}
                rows="5"
                required
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#00A79D] focus:bg-white transition-all resize-none"></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              value="Send"
              className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-[#00A79D] to-[#008a82] text-white font-bold text-lg rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              <span>{translations.bookingSubmitButton}</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
