import { Search } from 'lucide-react';
import { usePriceList } from '../../hooks/usePriceList';
import PricingCards from './PricingCards';
import PricingPagination from './PricingPagination';
import PricingTable from './PricingTable';
import './Pricing.css';

export default function Pricing() {
  const {
    priceServices,
    selectedService,
    selectService,
    searchTerm,
    updateSearchTerm,
    currentPage,
    goToPage,
    filteredPrices,
    paginatedPrices,
    totalPages,
    visiblePages,
  } = usePriceList();

  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <div className="section-heading pricing-heading">
          <p className="section-label">Price List</p>
          <h2>RS fabric care pricing</h2>
          <p className="section-text">
            Browse the current service prices by item type, search for a garment, or filter the
            table by service category.
          </p>
        </div>

        <div className="pricing-shell">
          <div className="pricing-toolbar">
            <div className="pricing-search">
              <Search size={18} />
              <input
                type="text"
                value={searchTerm}
                onChange={(event) => updateSearchTerm(event.target.value)}
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
                  onClick={() => selectService(service)}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          <div className="pricing-meta">
            <p>
              Showing <strong>{paginatedPrices.length}</strong> of{' '}
              <strong>{filteredPrices.length}</strong> items
            </p>
          </div>

          <PricingTable items={paginatedPrices} />
          <PricingCards items={paginatedPrices} />

          <PricingPagination
            currentPage={currentPage}
            totalPages={totalPages}
            visiblePages={visiblePages}
            onPageChange={goToPage}
          />
        </div>
      </div>
    </section>
  );
}
