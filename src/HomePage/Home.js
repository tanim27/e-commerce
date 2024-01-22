import React from "react";
import Navigation from "../components/Header/Navigation";
import TopBanner from "../components/TopBanner/TopBanner";
import AllProducts from '../components/AllProducts/AllProducts';
import NewProducts from "../components/NewProducts/NewProducts";
import Exclusive from "../components/Exclusive/Exclusive";
import Tips from "../components/Tips/Tips";
import Footer from "../components/Footer/Footer";
import { CartProvider } from "react-use-cart";

function HomePage() {
  return (
    <div>
      <CartProvider>
        <Navigation/>
        <TopBanner/>
        <NewProducts/>
        <AllProducts/>
        <Exclusive/>
        <Tips/>
        <Footer/>
      </CartProvider>
    </div>
  );
}

export default HomePage;
