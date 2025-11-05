import { useState } from "react";

export const BookingForm = () => {
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
    <section id="booking" className="py-20 px-8 bg-gray-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#00A79D] mb-6">
          Запази час
        </h2>

        <div className="mb-8 text-gray-700">
          <p className="font-semibold mb-2">Работно време:</p>
          <p>Понеделник и Четвъртък - 8.30ч - 16.00ч</p>
          <p>Вторник и Сряда - 11.00ч - 18.30ч</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Имена"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A79D]"
          />

          <input
            type="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A79D]"
          />

          <input
            type="tel"
            placeholder="Телефон"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            required
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A79D]"
          />

          <textarea
            placeholder="Опишете Вашия проблем и желан ден за преглед."
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            rows="6"
            required
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A79D] resize-none"></textarea>

          <button
            type="submit"
            className="px-8 py-3 bg-[#00A79D] text-white font-semibold rounded-lg hover:bg-[#008a82] transition-all">
            Изпрати
          </button>
        </form>
      </div>
    </section>
  );
};
