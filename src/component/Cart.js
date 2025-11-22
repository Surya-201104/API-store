import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Cart() {
  const { id } = useParams();
  const [cartItem, setCartItem] = useState(null);

  useEffect(() => {
    const product = JSON.parse(localStorage.getItem("selectedProduct"));
    if (product && product.id == id) {
      setCartItem(product);
    }
  }, [id]);

  if (!cartItem) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>Cart Page</h1>
      <h2>{cartItem.title}</h2>
      <p>₹ {cartItem.price}</p>
      <img src={cartItem.image} width="150" alt="" />
    </div>
  );
}

export default Cart;
