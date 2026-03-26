import React from 'react';
import { Shirt, Phone, Mail, MapPin, Globe, MessageCircle, Video, Share2 } from 'lucide-react';

const serviceLinks = [
  { label: 'Washing & Drying', href: '#service-washing-drying' },
  { label: 'Ironing / Steam Press', href: '#service-ironing' },
  { label: 'Dry Cleaning', href: '#service-dry-cleaning' },
  { label: 'Stain Removal', href: '#service-stain-removal' },
  { label: 'Pickup & Delivery', href: '#service-pickup-delivery' },
  { label: 'Express Service', href: '#service-express-service' },
];

const quickLinks = [
  { label: 'About Us', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Book Now', href: '#contact' },
];

const socials = [
  { icon: <Share2 size={18} />, href: '#', label: 'Instagram' },
  { icon: <Globe size={18} />, href: '#', label: 'Facebook' },
  { icon: <MessageCircle size={18} />, href: '#', label: 'Twitter/X' },
  { icon: <Video size={18} />, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-400">
      {/* CTA Banner */}
      {/* <div className="bg-gradient-to-r from-indigo-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-1">Ready for fresh, clean clothes?</h3>
            <p className="text-indigo-200">Schedule your first pickup today — it's free!</p>
          </div>
          <a
            href="#contact"
            id="footer-cta"
            className="flex-shrink-0 px-8 py-3.5 rounded-full text-sm font-bold text-indigo-700 bg-white hover:bg-indigo-50 shadow-xl hover:-translate-y-0.5 transition-all duration-200"
          >
            Get Started Free
          </a>
        </div>
      </div> */}

      {/* Main Footer */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <Shirt size={20} className="text-white" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                RS <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Fabric Solutions</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed mb-6 text-gray-400">
              Hyderabad's most trusted fabric care service. Premium cleaning, eco-friendly processes, doorstep convenience.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-gray-800 dark:bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Our Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-indigo-400 transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-indigo-400 transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-indigo-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Call / WhatsApp</p>
                  <a href="tel:+919876543210" className="text-sm text-gray-300 hover:text-indigo-400 transition-colors">+91 98765 43210</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-indigo-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Email</p>
                  <a href="mailto:hello@rsfabricsolutions.in" className="text-sm text-gray-300 hover:text-indigo-400 transition-colors">hello@rsfabricsolutions.in</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-indigo-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Location</p>
                  <p className="text-sm text-gray-300">12, Fabric Lane, Jubilee Hills,<br />Hyderabad — 500033</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} RS Fabric Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
