import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import Default from "./pages/Default";
import SingleProductPage from "./pages/SingleProductPage";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import SideCart from "./components/CartPage/SideCart";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      {/* navbar, sidebar, cart and footer*/}
      <Navbar />
      <Sidebar />
      <SideCart />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/products" exact component={ProductsPage} />
        <Route path="/products/:id" component={SingleProductPage} />
        <Route path="/cart" component={CartPage} />
        <Route component={Default} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
