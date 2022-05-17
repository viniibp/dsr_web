import {
  Route,
  Routes,
} from "react-router-dom";

import Home from "../pages/home";
// import About from "../pages/about";
// import Products from "../pages/products";
import NotFound from "../pages/not_found";
// import Services from "../pages/services";
// import Clients from "../pages/clients";
// import Contact from "../pages/contact";
// import WorkWithUs from "../pages/workWithUs";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/services" element={<Services />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/workWithUs" element={<WorkWithUs />} /> */}
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}