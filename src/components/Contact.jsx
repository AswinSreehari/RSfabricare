import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const services = [
    'Washing & Drying',
    'Ironing / Steam Press',
    'Dry Cleaning',
    'Stain Removal',
    'Pickup & Delivery',
    'Express Service',
  ];

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 dark:bg-rose-900/40 border border-rose-200 dark:border-rose-700/50 mb-5">
            <Phone size={14} className="text-rose-600 dark:text-rose-400" />
            <span className="text-sm font-medium text-rose-700 dark:text-rose-300">Get In Touch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-5">
            Book a <span className="gradient-text">Service</span> Today
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Schedule a pickup, get a quote, or simply ask us anything. We respond within 2 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 text-white shadow-2xl shadow-indigo-500/30">
              <h3 className="text-2xl font-bold mb-2">RS Fabric Solutions</h3>
              <p className="text-indigo-200 mb-8 leading-relaxed">
                Your trusted fabric care partner. We pick up, clean, and deliver — so you spend time on what you love.
              </p>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-indigo-300 mb-0.5">Call / WhatsApp</p>
                    <p className="font-semibold">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-indigo-300 mb-0.5">Email Us</p>
                    <p className="font-semibold">hello@rsfabricsolutions.in</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-indigo-300 mb-0.5">Our Store</p>
                    <p className="font-semibold">12, Fabric Lane, Jubilee Hills,<br />Hyderabad — 500033</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-sm text-indigo-200 mb-3">Business Hours</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span className="text-white font-medium">Mon – Sat</span>
                  <span className="text-indigo-200">8:00 AM – 9:00 PM</span>
                  <span className="text-white font-medium">Sunday</span>
                  <span className="text-indigo-200">9:00 AM – 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-50 dark:bg-gray-800/50 rounded-3xl p-8 border border-gray-100 dark:border-gray-700/50 shadow-lg">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center mb-5">
                  <CheckCircle2 size={40} className="text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Request Sent!</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Thank you! We'll reach out within 2 hours to confirm your booking.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: '', message: '' }); }}
                  className="mt-6 text-sm text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                >
                  Submit another request →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Schedule a Pickup</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Fill in your details and we'll get back to you promptly.</p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">Full Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">Phone *</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">Service Required *</label>
                  <select
                    id="contact-service"
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all appearance-none"
                  >
                    <option value="">Select a service</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your items, special requirements, preferred pickup time..."
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  id="contact-submit"
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Send size={16} /> Send Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
