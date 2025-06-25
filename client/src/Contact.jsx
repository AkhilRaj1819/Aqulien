import React, { useState } from 'react';
import Navbar from './Navbar';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = `Message from ${name}`;
    const body = `From:${email}${message}`;

    // Open Gmail compose with pre-filled content
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=aqulien@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      '_blank'
    );
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-[#F8F9FF] text-[#1F1E55] px-6 md:px-16 py-20">
      <div className="max-w-4xl mx-auto space-y-12">

        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-lg text-[#555]">Have a question or want to get in touch? We'd love to hear from you.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-md space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8A151D]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8A151D]"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Type your message..."
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#8A151D]"
            />
          </div>
          <button
            type="submit"
            className="bg-[#8A151D] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#721219] transition duration-300"
          >
            Send via Gmail
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Contact;
