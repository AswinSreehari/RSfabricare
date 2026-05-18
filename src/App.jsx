import { useEffect, useState } from 'react';
import { ArrowRight, Clock3, MapPin, PhoneCall, Search, Sparkles, Truck, Shirt } from 'lucide-react';
import logo from './assets/Rs_logo.jpeg';
import priceList from './assets/price-list.json';
import './App.css';
import { FaWhatsapp } from "react-icons/fa";

const services = [
  {
    title: 'PERC Dry Cleaning',
    description: 'Premium PERC cleaning technology for longer-lasting clothes with gentle fabric protection.',
    icon: Shirt,
  },
  {
    title: 'Dry Cleaning',
    description: 'Careful treatment for delicate garments, premium clothes, coats, and formal wear.',
    icon: Sparkles,
  },
  {
    title: 'Wash & Fold',
    description: 'Fresh, clean, and neatly folded laundry for daily wear and household garments.',
    icon: Shirt,
  },
  {
    title: 'Steam Ironing',
    description: 'Crisp finishing for shirts, uniforms, ethnic wear, and sharp presentation every time.',
    icon: Shirt,
  },
  {
    title: 'Linen Care',
    description: 'Professional care for bed sheets, towels, linens, and large household fabric items.',
    icon: Shirt,
  },
  {
    title: 'Curtains & Drapes',
    description: 'Special handling for curtains and drapes to keep them fresh, clean, and well maintained.',
    icon: Shirt,
  },
  {
    title: 'Blanket & Quilt Cleaning',
    description: 'Deep cleaning for blankets, quilts, and comforters with hygiene-focused fabric care.',
    icon: Sparkles,
  },
  {
    title: 'Saree & Ethnic Wear Care',
    description: 'Special care for silk, cotton, designer garments, sarees, and festive outfits.',
    icon: Shirt,
  },
  {
    title: 'Wedding & Party Wear',
    description: 'Expert care for bridal, wedding, and party wear that needs extra attention.',
    icon: Sparkles,
  },
  {
    title: 'Shoe Cleaning',
    description: 'Deep cleaning for everyday and specialty footwear to restore a neat finish.',
    icon: Sparkles,
  },
  {
    title: 'Bag & Accessory Cleaning',
    description: 'Dedicated care for handbags, purses, accessories, and related premium items.',
    icon: Sparkles,
  },
  {
    title: 'Sofa, Carpet & Curtain Cleaning',
    description: 'Targeted cleaning for upholstery, carpets, and soft furnishings to remove dust and stains.',
    icon: Sparkles,
  },
  {
    title: 'Stain Removal',
    description: 'Safe treatment for tough stains while protecting fabric texture, color, and finish.',
    icon: Sparkles,
  },
  {
    title: 'Pickup & Delivery',
    description: 'Convenient doorstep pickup and on-time delivery designed around your schedule.',
    icon: Truck,
  },
];

const highlights = [
  'Fabric-safe treatment for everyday and delicate garments',
  'Pickup, cleaning, quality check, and doorstep return',
  'Flexible support for homes, hostels, offices, and boutiques',
];

const steps = [
  {
    title: 'Schedule pickup',
    description: 'Choose your preferred time slot and share your garment count.',
  },
  {
    title: 'We process with care',
    description: 'Sorting, washing, steam finishing, and garment inspection happen in-house.',
  },
  {
    title: 'Fresh delivery',
    description: 'Your order is packed neatly and returned ready to wear or store.',
  },
];

const priceServices = ['All', ...new Set(priceList.map((item) => item.service))];
const priceItemsPerPage = 10;

const schedulingOrderNumber = import.meta.env.VITE_SCHEDULING_ORDER_NUMBER ?? '';
const callingNumber = import.meta.env.VITE_CALLING_NUMBER ?? '';
const queryNumber = import.meta.env.VITE_QUERY_NUMBER ?? '';

const scheduleMessage = encodeURIComponent(
  'Hello RS Fabricare, I would like to schedule an order. Please share the available pickup or service slots.'
);
const queryMessage = encodeURIComponent(
  'Hello RS Fabricare, I have a query regarding your services. Please assist me.'
);

const schedulingLink = schedulingOrderNumber
  ? `https://wa.me/${schedulingOrderNumber}?text=${scheduleMessage}`
  : '#contact';
const queryLink = queryNumber
  ? `https://wa.me/${queryNumber}?text=${queryMessage}`
  : '#contact';
const callingLink = callingNumber ? `tel:+${callingNumber}` : '#contact';
const displayCallingNumber = callingNumber ? `+${callingNumber}` : 'Number unavailable';
const displayQueryNumber = queryNumber ? `+${queryNumber}` : 'Query number unavailable';

function getVisiblePages(currentPage, totalPages) {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, 4, 5, 'ellipsis-right', totalPages];
  }

  if (currentPage >= totalPages - 3) {
    return [1, 'ellipsis-left', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
  }

  return [
    1,
    'ellipsis-left',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    'ellipsis-right',
    totalPages,
  ];
}

function App() {
  const [selectedService, setSelectedService] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPrices = priceList.filter((item) => {
    const matchesService = selectedService === 'All' || item.service === selectedService;
    const query = searchTerm.trim().toLowerCase();
    const matchesSearch =
      query === '' ||
      item.productName.toLowerCase().includes(query) ||
      item.service.toLowerCase().includes(query);

    return matchesService && matchesSearch;
  });

  const totalPages = Math.max(1, Math.ceil(filteredPrices.length / priceItemsPerPage));
  const paginatedPrices = filteredPrices.slice(
    (currentPage - 1) * priceItemsPerPage,
    currentPage * priceItemsPerPage
  );
  const visiblePages = getVisiblePages(currentPage, totalPages);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedService, searchTerm]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-row">
          <a className="brand" href="#home" aria-label="RS Fabricare home">
            <span className="brand-mark">
              <img src={logo} alt="RS Fabricare logo" />
            </span>
            <span className="brand-text">
              <strong>RS Fabricare</strong>
              <small>Premium laundry and fabric care</small>
            </span>
          </a>

          <nav className="site-nav" aria-label="Primary">
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#pricing">Price List</a>
            <a href="#support">Help &amp; Support</a>
          </nav>

            <a
              className="header-cta"
              href={schedulingLink}
              target="_blank"
              rel="noreferrer"
            >
            Schedule Now
          </a>
        </div>
      </header>

      <main>
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
                  href={schedulingLink}
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

        <section className="info-section" id="about">
          <div className="container info-grid">
            <div>
              <p className="section-label">About RS Fabricare</p>
              <h2>A dependable fabric care partner for everyday wear and special garments.</h2>
            </div>
            <p className="section-text">
              RS Fabricare is built around clean handling, organized processing, and consistent
              doorstep convenience. From regular laundry loads to carefully finished clothes for
              work, events, and uniforms, the goal is simple: make garment care feel effortless.
            </p>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="container">
            <div className="section-heading">
              <p className="section-label">Services</p>
              <h2>Complete garment, linen, and specialty care services from RS Fabricare.</h2>
            </div>

            <div className="service-grid">
              {services.map(({ title, description, icon: Icon }) => (
                <article className="service-card" key={title}>
                  <span className="service-icon">
                    <Icon size={22} />
                  </span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pricing-section" id="pricing">
          <div className="container">
            <div className="section-heading pricing-heading">
              <p className="section-label">Price List</p>
              <h2>RS fabric care pricing</h2>
              <p className="section-text">
                Browse the current service prices by item type, search for a garment, or filter
                the table by service category.
              </p>
            </div>

            <div className="pricing-shell">
              <div className="pricing-toolbar">
                <div className="pricing-search">
                  <Search size={18} />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Search by garment or service"
                    aria-label="Search price list"
                  />
                </div>

                <div className="pricing-filters" aria-label="Price list service filters">
                  {priceServices.map((service) => (
                    <button
                      key={service}
                      type="button"
                      className={service === selectedService ? 'filter-chip active' : 'filter-chip'}
                      onClick={() => setSelectedService(service)}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pricing-meta">
                <p>
                  Showing <strong>{paginatedPrices.length}</strong> of <strong>{filteredPrices.length}</strong> items
                </p>
              </div>

              <div className="pricing-table-wrap">
                <table className="pricing-table">
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Service</th>
                      <th>UOM</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedPrices.map((item) => (
                      <tr key={`${item.productName}-${item.service}-${item.price}`}>
                        <td>{item.productName}</td>
                        <td>{item.service}</td>
                        <td>{item.uom}</td>
                        <td>{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="pricing-pagination">
                <button
                  type="button"
                  className="pagination-button"
                  onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>

                <div className="pagination-pages" aria-label="Pricing pages">
                  {visiblePages.map((page) =>
                    typeof page === 'number' ? (
                      <button
                        key={page}
                        type="button"
                        className={page === currentPage ? 'page-chip active' : 'page-chip'}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </button>
                    ) : (
                      <span key={page} className="page-ellipsis" aria-hidden="true">
                        ...
                      </span>
                    )
                  )}
                </div>

                <button
                  type="button"
                  className="pagination-button"
                  onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="process-section">
          <div className="container">
            <div className="section-heading">
              <p className="section-label">How it works</p>
              <h2>Simple steps from booking to delivery.</h2>
            </div>

            <div className="process-grid">
              {steps.map((step, index) => (
                <article className="process-card" key={step.title}>
                  <span className="step-number">0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="support">
        <div className="container footer-grid" id="contact">
          <div>
            <p className="section-label footer-label">RS Fabricare</p>
            <h2>Ready to book your next pickup?</h2>
            <p className="footer-copy">
              Contact us to schedule collection, ask about service areas, or plan recurring fabric
              care support.
            </p>
          </div>

          <div className="footer-card">
            <h3 className="section-heading">For Queries</h3>
          {/* Row for the icons */}
          <div className="contact-links-row">
            <a href={callingLink} className="icon-link">
              <PhoneCall size={18} />
              <span>Call Us</span>
            </a>
            <a href={queryLink} target="_blank" rel="noreferrer" className="icon-link whatsapp-link">
              <FaWhatsapp size={18} /> 
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Email and Hours */}
          <a href="mailto:rsfabricare@gmail.com" className="email-link">rsfabricare@gmail.com</a>
          <p className="hours-text">Mon - Sat, 9:00 AM - 7:00 PM</p>
          
          {/* Schedule Button */}
          <a
            className="footer-button"
            href={schedulingLink}
            target="_blank"
            rel="noreferrer"
          >
            Schedule Now
          </a>
        </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
