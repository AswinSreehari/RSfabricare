export default function PricingTable({ items }) {
  return (
    <div className="pricing-table-wrap pricing-table-wrap--desktop">
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
          {items.map((item) => (
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
  );
}
