import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Product.css"; // you can keep CSS here or separate

function Cart() {
  const { id } = useParams();
  const [cartItem, setCartItem] = useState(null);

  useEffect(() => {
    const product = JSON.parse(localStorage.getItem("selectedProduct"));
    if (product && product.id == id) {
      setCartItem(product);
    }
  }, [id]);

  const saveProduct = (product) => {
    localStorage.setItem("selectedProduct", JSON.stringify(product));
  };

  if (!cartItem) return <h2 style={{ padding: "20px" }}>Loading...</h2>;

  return (
    <div className="cart-container">
      <div className="cart-item-box">
        <img src={cartItem.image} alt={cartItem.title} className="cart-img" />

        <div className="cart-info">
          <h2 className="cart-name">{cartItem.title}</h2>
          <div class="cart-buy-now">
            <div className="cart-price">₹ {cartItem.price}</div>

            <div className="cart-stock">In stock</div>
          </div>

          <div className="cart-desc">{cartItem.description}</div>

          <div className="cart-actions">
            <Link
              to={`/buynow/${cartItem.id}`}
              onClick={() => saveProduct(cartItem)}
            >
              <button className="btn-buy">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
