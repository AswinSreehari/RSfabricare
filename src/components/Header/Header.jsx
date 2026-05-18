import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/Rs_logo.jpeg';
import { contactLinks } from '../../config/contact';
import { navLinks } from '../../data/content';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-row">
        <a className="brand" href="#home" aria-label="RS Fabricare home" onClick={closeMenu}>
          <span className="brand-mark">
            <img src={logo} alt="RS Fabricare logo" />
          </span>
          <span className="brand-text">
            <strong>RS Fabricare</strong>
            <small>Premium laundry and fabric care</small>
          </span>
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav
          id="primary-navigation"
          className={`site-nav ${menuOpen ? 'is-open' : ''}`}
          aria-label="Primary"
        >
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a
            className="header-cta header-cta--mobile"
            href={contactLinks.scheduling}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Schedule Now
          </a>
        </nav>

        <a
          className="header-cta header-cta--desktop"
          href={contactLinks.scheduling}
          target="_blank"
          rel="noreferrer"
        >
          Schedule Now
        </a>
      </div>
    </header>
  );
}
