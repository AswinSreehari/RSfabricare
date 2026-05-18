export default function PricingPagination({
  currentPage,
  totalPages,
  visiblePages,
  onPageChange,
}) {
  return (
    <div className="pricing-pagination">
      <button
        type="button"
        className="pagination-button"
        onClick={() => onPageChange((page) => Math.max(1, page - 1))}
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
              onClick={() => onPageChange(page)}
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
        onClick={() => onPageChange((page) => Math.min(totalPages, page + 1))}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}
