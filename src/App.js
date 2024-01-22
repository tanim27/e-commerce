import React from 'react';
import {Routes, Route} from "react-router-dom";
import HomePage from './HomePage/Home';
import AllProductsPage from './AllProductsPage/AllProductsPage';
import CartPage from "./CartPage/CartPage";
import CheckOutPage from './CheckOutPage/CheckOutPage';
import SingleProductDetailsPage from './SingleProductDetailsPage/SingleProductDetailsPage';

function App() {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/productlist' element={<AllProductsPage/>}> </Route>
        <Route path='/productlist/:id' element={<SingleProductDetailsPage/>}></Route>
        <Route path='/cart' element={<CartPage/>}> </Route>
        <Route path='/billing' element={<CheckOutPage/>}></Route>
    </Routes>
  )
}

export default App