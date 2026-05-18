import { useMemo, useState } from 'react';
import priceList from '../assets/price-list.json';
import { getVisiblePages } from '../utils/pagination';

const PRICE_ITEMS_PER_PAGE = 10;
const priceServices = ['All', ...new Set(priceList.map((item) => item.service))];

export function usePriceList() {
  const [selectedService, setSelectedService] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPrices = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return priceList.filter((item) => {
      const matchesService = selectedService === 'All' || item.service === selectedService;
      const matchesSearch =
        query === '' ||
        item.productName.toLowerCase().includes(query) ||
        item.service.toLowerCase().includes(query);

      return matchesService && matchesSearch;
    });
  }, [selectedService, searchTerm]);

  const totalPages = Math.max(1, Math.ceil(filteredPrices.length / PRICE_ITEMS_PER_PAGE));
  const activePage = Math.min(currentPage, totalPages);

  const paginatedPrices = useMemo(
    () =>
      filteredPrices.slice(
        (activePage - 1) * PRICE_ITEMS_PER_PAGE,
        activePage * PRICE_ITEMS_PER_PAGE
      ),
    [filteredPrices, activePage]
  );

  const visiblePages = useMemo(
    () => getVisiblePages(activePage, totalPages),
    [activePage, totalPages]
  );

  const selectService = (service) => {
    setSelectedService(service);
    setCurrentPage(1);
  };

  const updateSearchTerm = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const goToPage = (page) => {
    const nextPage = typeof page === 'function' ? page(activePage) : page;
    setCurrentPage(Math.min(Math.max(1, nextPage), totalPages));
  };

  return {
    priceServices,
    selectedService,
    selectService,
    searchTerm,
    updateSearchTerm,
    currentPage: activePage,
    goToPage,
    filteredPrices,
    paginatedPrices,
    totalPages,
    visiblePages,
  };
}
