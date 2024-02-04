import React, { useContext } from "react"
import { Link } from 'react-router-dom'
import { CartContext } from './../../LocalStorage/CartContext'
import "./CartProducts.css";

function CartProducts() {
  const { AllProductsData, cartItems, addItem, removeItem, totalAmount } = useContext(CartContext)

  return (
  <div>
    <div className="cartitems">
      <hr/>
      <div className="cartitems-format-main">

        <div className="product">
          <h4>Products</h4>
          <h4>Description</h4>
        </div>
        <h4>Price</h4>
        <div className="responsive-lines">
          <h4>Quantity</h4>
          <h4>Total</h4>
          <h4>Remove</h4>
        </div>

      </div>
      <hr />
      {AllProductsData.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div>
              <div className="cartitems-format cartitems-format-main" key={product.id}>
                <div className="product">
                  <img src={product.image} alt={product.title} />
                  <div className="product-description">
                    <h5>{product.title}</h5>
                    <p>Size: M</p>
                    <p>Color: Yellow</p>
                  </div>
                </div>

                <p className="single-price">${product.price}</p>

                <div className="responsive-lines">
                  <div className="cartitems-counter">
                    <button onClick={() => removeItem(product.id)}>-</button>
                    <button>{cartItems[product.id]}</button>
                    <button onClick={() => addItem(product.id)}>+</button>
                  </div>
                  <p>${product.price * cartItems[product.id]}</p>
                  <p className="cartitems-remove-icon"><ion-icon name="close" onClick={() => removeItem(product.id)}></ion-icon></p>
                </div>
              </div>
              <hr />
            </div>
          )
        }
        return null
      })}
    <div className="total-price">Subtotal: ${totalAmount()}</div>
    </div>
    <div className="verify-section">
      <div>
        <input type="radio"></input>I agree to terms and conditions
      </div>
      <Link to="/billing">
        <button type="submit" className="checkout-button">Check Out</button>
      </Link>
    </div>
  </div>
  )
}

export default CartProducts
