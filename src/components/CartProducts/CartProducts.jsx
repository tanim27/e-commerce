import React, { useState } from 'react';
import "./CartProducts.css";
import {useCart} from "react-use-cart"
import { Link } from 'react-router-dom';

function CartProducts() {
  const {
    isEmpty,
    totalUniqueItems,
    totalItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();

  return (
    <div>
      <div className="totalpage">
        <h2 className="cartpage-title">Cart</h2>
        <h4 className="item-amount">Unique Total: ({totalUniqueItems})  Total items: ({totalItems})</h4>
        <hr className="line1"/>
        <hr className="line2"/>
        <table className="productdetail">

          <tr className="static">
            <th>Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        
        {isEmpty ? <h3>Your cart is Empty</h3> : ""}

        {items.map((slide) => (
          <tr className="dynamic" key={slide.id}>
            <td>
              <div className="product-title">
                <img src={slide.image} alt={slide.title}/>
                <h5>{slide.title}</h5>
              </div>
            </td>
            <td><p>${slide.price}</p></td>
            <td>
              <div className="counter">
                <button onClick={() => updateItemQuantity(slide.id, slide.quantity - 1)}>-</button>
                <p>{slide.quantity}</p>
                <button onClick={() => updateItemQuantity(slide.id, slide.quantity + 1)}>+</button>
              </div>
            </td>
            <td>${slide.price*slide.quantity}</td>
            <td onClick={() => removeItem(slide.id)}><div className="remove-product"><ion-icon name="bag-remove-outline"></ion-icon></div></td>
          </tr>
        ))}

        </table>
        <hr className="line3"/>
        
        <div className="final-list1">
          <div className="total-amount">Subtotal: ${cartTotal}</div>
          <button className="remove-button" onClick={() => emptyCart()}>Remove all</button>
        </div>

        <div className="final-list2">
          <div><input type="radio"></input>I agree to terms and conditions</div>
          <Link to="/billing"><button type="submit" className="checkout-button">Check Out</button></Link>
        </div>
        
      </div>
    </div>
  )
}

export default CartProducts;