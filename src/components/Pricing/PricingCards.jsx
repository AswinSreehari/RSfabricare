export default function PricingCards({ items }) {
  return (
    <div className="pricing-cards" aria-label="Price list">
      {items.map((item) => (
        <article
          className="pricing-card"
          key={`${item.productName}-${item.service}-${item.price}`}
        >
          <h3 className="pricing-card__name">{item.productName}</h3>
          <dl className="pricing-card__details">
            <div>
              <dt>Service</dt>
              <dd>{item.service}</dd>
            </div>
            <div>
              <dt>UOM</dt>
              <dd>{item.uom}</dd>
            </div>
            <div>
              <dt>Price</dt>
              <dd className="pricing-card__price">{item.price}</dd>
            </div>
          </dl>
        </article>
      ))}
    </div>
  );
}
