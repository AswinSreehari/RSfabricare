import { ArrowRight } from 'lucide-react';
import logo from '../../assets/Rs_logo.jpeg';
import { contactLinks } from '../../config/contact';
import { highlights } from '../../data/content';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Laundry care made simple</p>
          <h1>RS Fabricare for easy pickup, clean finishing, and trusted delivery.</h1>
          <p className="hero-description">
            Give your garments a cleaner, sharper, and more reliable care experience with
            professional washing, steam press, and doorstep service designed for busy homes
            and businesses.
          </p>

          <div className="hero-actions">
            <a
              className="primary-button"
              href={contactLinks.scheduling}
              target="_blank"
              rel="noreferrer"
            >
              Schedule Now
              <ArrowRight size={18} />
            </a>
          </div>

          <ul className="hero-highlights" aria-label="Service highlights">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-card">
            <img className="hero-logo-image" src={logo} alt="RS Fabricare logo" />
          </div>
        </div>
      </div>
    </section>
  );
}
