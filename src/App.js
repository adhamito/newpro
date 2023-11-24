import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/product";
import Cart from "./components/cart";
import Login from "./components/login";
import Register from "./components/register";
import About from "./components/About";
import Contact from "./components/Contact";
import Checkout from "./components/checkout";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
