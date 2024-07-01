import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Cart from "./pages/Cart";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<About />} />
        <Route path="/" element={<ContactUs />} />
        <Route path="/" element={<Products />} />
        <Route path="/" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
