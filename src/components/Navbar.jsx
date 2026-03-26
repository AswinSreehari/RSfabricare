import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Shirt } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
];

export default function Navbar({ darkMode, toggleDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl transition-all duration-300 ${scrolled
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-2xl border border-white/20 dark:border-white/5 rounded-2xl'
        : 'bg-white/40 dark:bg-gray-900/40 backdrop-blur-md rounded-2xl border border-white/10 dark:border-white/5'
        }`}
    >
      <div className="px-6">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform duration-200">
              <Shirt size={18} className="text-white" />
            </div>
            <span className="font-bold text-lg text-gray-900 dark:text-white tracking-tight">
              RS <span className="gradient-text">Fabricare</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {/* {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))} */}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Dark mode toggle */}
            <button
              id="theme-toggle"
              onClick={toggleDark}
              aria-label="Toggle dark mode"
              className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-110"
            >
              {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} />}
            </button>

            {/* <a
              href="#contact"
              className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              Get a Quote
            </a> */}

            {/* Mobile menu button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMenuOpen(v => !v)}
              className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Pill adapted */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 mt-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-white/20 dark:border-white/5 transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          {/* <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md"
          >
            Get a Quote
          </a> */}
        </div>
      </div>
    </nav>
  );
}
