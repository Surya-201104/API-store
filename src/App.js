import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Product from "./component/Product";
import Cart from "./component/Cart";
import BuyNow from "./component/Buynow";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h2>SK Shops</h2>

          <Routes>
            {/* 🏠 Home page - product listing */}
            <Route path="/" element={<Product />} />

            {/* 🛒 Cart page - product ID comes from URL */}
            <Route path="/cart/:id" element={<Cart />} />

            {/* ⚡ Buy Now page - product ID comes from URL */}
            <Route path="/buynow/:id" element={<BuyNow />} />
          </Routes>
        </header>
      </Router>
    </div>
  );
}

export default App;
