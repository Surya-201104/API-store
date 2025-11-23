import { useEffect } from "react";
import "./Product.css";

function BuyNow() {
  const product = JSON.parse(localStorage.getItem("selectedProduct"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) return <h2>No product selected</h2>;

  return (
    <div className="buy-wrapper">
      {/* LEFT SECTION — Image + Description */}
      <div className="buy-left">
        <img src={product.image} alt={product.title} className="buy-img" />

        <div className="buy-details-box">
          <p className="buy-desc">{product.description}</p>

          <h3 className="sub-heading">Return Policy</h3>
          <p className="sub-text">✔ 7-day Replacement</p>
          <p className="sub-text">✔ Full Refund Available</p>
        </div>
      </div>

      {/* RIGHT SECTION — Price, Delivery, Offers, Buttons */}
      <div className="buy-right">
        <h1 className="buy-title">{product.title}</h1>

        <p className="buy-price">₹ {product.price}</p>

        <p className="buy-delivery">
          <div>FREE delivery — Tomorrow 10AM</div>
          <div className="buy-stock">In stock</div>
        </p>

        {/* OFFERS MOVED HERE */}
        <div className="offer-box">
          <h3 className="sub-heading">Available Offers</h3>
          <ul className="offer-list">
            <li>💳 5% Cashback with online payment</li>
            <li>🏦 No Cost EMI Available</li>
            <li>🎁 Extra 50% OFF on checkout</li>
          </ul>
        </div>

        <button className="buy-btn-orange">Proceed to Payment</button>

        <p className="secure-text">🔒 Safe & Secure Checkout</p>
      </div>
    </div>
  );
}

export default BuyNow;
