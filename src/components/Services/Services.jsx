import { createElement } from 'react';
import { services } from '../../data/content';
import './Services.css';

function ServiceCard({ title, description, icon }) {
  return (
    <article className="service-card">
      <span className="service-icon">{createElement(icon, { size: 22 })}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">Services</p>
          <h2>Complete garment, linen, and specialty care services from RS Fabricare.</h2>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
