import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./pages/home";
import FoodDetails from "./pages/foodDetails";
import Cart from "./pages/cart";
import About from "./pages/about";
import Contact from "./pages/contact";
import Menu from "./pages/menu";

import Header from "./components/Header";
import Footer from "./components/footer";


function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/food/:id" element={<FoodDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;