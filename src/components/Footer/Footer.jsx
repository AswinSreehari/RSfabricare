import { PhoneCall } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { contactInfo, contactLinks } from '../../config/contact';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer" id="support">
      <div className="container footer-grid" id="contact">
        <div className="footer-intro">
          <p className="section-label footer-label">RS Fabricare</p>
          <h2>Ready to book your next pickup?</h2>
          <p className="footer-copy">
            Contact us to schedule collection, ask about service areas, or plan recurring fabric
            care support.
          </p>
        </div>

        <div className="footer-card">
          <h3 className="footer-card-title">For Queries</h3>

          <div className="contact-links-row">
            <a href={contactLinks.calling} className="icon-link">
              <PhoneCall size={18} />
              <span>Call Us</span>
            </a>
            <a
              href={contactLinks.query}
              target="_blank"
              rel="noreferrer"
              className="icon-link whatsapp-link"
            >
              <FaWhatsapp size={18} />
              <span>WhatsApp</span>
            </a>
          </div>

          <a href={contactLinks.email} className="email-link">
            {contactInfo.email}
          </a>
          <p className="hours-text">{contactInfo.hours}</p>

          <a
            className="footer-button"
            href={contactLinks.scheduling}
            target="_blank"
            rel="noreferrer"
          >
            Schedule Now
          </a>
        </div>
      </div>
    </footer>
  );
}
