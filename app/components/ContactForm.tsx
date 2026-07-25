'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-elindo-light p-10 text-center">
        <h3 className="text-2xl font-light text-gray mb-4">Vielen Dank!</h3>
        <p className="text-dark-gray">
          Ihre Nachricht wurde gesendet. Wir melden uns in Kürze bei Ihnen.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-light-gray p-8 md:p-10 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstname" className="block text-sm font-medium text-gray mb-2">
            Vorname *
          </label>
          <input
            type="text"
            id="firstname"
            required
            className="w-full px-4 py-3 border border-gray-300 focus:border-elindo focus:outline-none bg-white"
          />
        </div>
        <div>
          <label htmlFor="lastname" className="block text-sm font-medium text-gray mb-2">
            Nachname *
          </label>
          <input
            type="text"
            id="lastname"
            required
            className="w-full px-4 py-3 border border-gray-300 focus:border-elindo focus:outline-none bg-white"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray mb-2">
          E-Mail *
        </label>
        <input
          type="email"
          id="email"
          required
          className="w-full px-4 py-3 border border-gray-300 focus:border-elindo focus:outline-none bg-white"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray mb-2">
          Telefon
        </label>
        <input
          type="tel"
          id="phone"
          className="w-full px-4 py-3 border border-gray-300 focus:border-elindo focus:outline-none bg-white"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray mb-2">
          Nachricht *
        </label>
        <textarea
          id="message"
          rows={5}
          required
          className="w-full px-4 py-3 border border-gray-300 focus:border-elindo focus:outline-none bg-white resize-none"
        />
      </div>

      <button type="submit" className="btn-primary w-full md:w-auto">
        Nachricht senden
      </button>
    </form>
  );
}
