import React, { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Wiadomość została wysłana (symulacja)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Kontakt</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* FORMULARZ */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Imię i nazwisko"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Adres e-mail"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <textarea
            name="message"
            placeholder="Treść wiadomości"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            Wyślij
          </button>
        </form>

        {/* MAPA */}
        <div className="w-full h-64 md:h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1654.6796357844164!2d20.019420567456386!3d49.45697793213845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spl!2spl!4v1752961314070!5m2!1spl!2spl"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa ROD Nowy Targ"
          />
        </div>
      </div>
    </section>
  );
}
