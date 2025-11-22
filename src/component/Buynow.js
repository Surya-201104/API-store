import { useEffect } from "react";
import "./Product.css"; // using same CSS file as product page

function BuyNow() {
  const product = JSON.parse(localStorage.getItem("buynow"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) return <h2>No product selected</h2>;

  return (
    <div className="details-container">
      <img src={product.image} alt={product.title} className="details-img" />

      <div className="details-info">
        <h1>{product.title}</h1>
        <p className="details-price">₹ {product.price}</p>
        <p className="details-desc">{product.description}</p>

        <button className="btn-buy">Proceed to Payment</button>
      </div>
    </div>
  );
}

export default BuyNow;
