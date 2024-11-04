'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name Input */}
        <div className="relative">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-lg focus:ring-2 focus:ring-customBlue/50 focus:border-transparent transition-all duration-300"
            placeholder="Your Name"
          />
        </div>

        {/* Email Input */}
        <div className="relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-lg focus:ring-2 focus:ring-customBlue/50 focus:border-transparent transition-all duration-300"
            placeholder="Your Email"
          />
        </div>
      </div>

      {/* Message Input */}
      <div className="relative">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-lg focus:ring-2 focus:ring-customBlue/50 focus:border-transparent transition-all duration-300 resize-none"
          placeholder="Your Message"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-customGreen to-green-500 text-white rounded-lg shadow-lg hover:shadow-xl hover:scale-102 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-customGreen/50"
      >
        Send Message
      </button>
    </form>
  );
}