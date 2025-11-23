import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Product.css";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const saveProduct = (product) => {
    localStorage.setItem("selectedProduct", JSON.stringify(product));
  };

  return (
    <div className="product-container">
      {products.length === 0 && <h3>Products are Loading...</h3>}

      <div className="product-grid">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.title} />

            <h3>{item.title}</h3>
            <p className="price">₹ {item.price}</p>

            <Link
              to={`/cart/${item.id}`}
              onClick={() => saveProduct(item)} // ✅ store details
            >
              <button className="btn-cart">Add to Cart</button>
            </Link>

            <Link
              to={`/buynow/${item.id}`}
              onClick={() => saveProduct(item)} // ✅ store details
            >
              <button className="btn-buy-product">Buy Now</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
