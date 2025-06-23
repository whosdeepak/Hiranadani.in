import { useState } from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const templateParams = {
      user_name: form.name,
      user_email: form.email,
      message: form.message,
    };

    emailjs
      .send(
        'service_vdn4gvb', // ✅ NEW Service ID
        'template_8hanr5e', // ✅ NEW Template ID
        templateParams,
        'BR0L7JmseCfPErM5Q' // ✅ NEW Public Key
      )
      .then(() => {
        setForm({ name: '', email: '', message: '' });
        setSuccess(true);
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        alert('❌ Failed to send message');
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="bg-gray-100 py-10" id="contact">
      <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
            rows={4}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          {success && <p className="text-green-600 mt-2">✅ Message sent!</p>}
        </form>
      </div>
    </section>
  );
};
