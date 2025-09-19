import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Category, Home, Item, NotFound, Checkout, Payment, Busqueda } from "../pages";
import { NavBar } from "../components";

export const PublicRouter = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/item/:id" element={<Item />} />
        <Route exact path="/category/:id" element={<Category />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/busqueda" element={<Busqueda />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};