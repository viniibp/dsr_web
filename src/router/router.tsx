import {
  Route,
  Routes,
} from "react-router-dom";

import About from "../pages/about";
import Home from "../pages/home";
import Products from "../pages/products";
import NotFound from "../pages/not_found";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}