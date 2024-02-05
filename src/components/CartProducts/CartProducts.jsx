import React, { useContext } from "react"
import { Link } from 'react-router-dom'
import { CartContext } from './../../LocalStorage/CartContext'
import "./CartProducts.css"

function CartProducts() {
  const { AllProductsData, cartItems, addItem, removeItem, totalAmount } = useContext(CartContext)

  const filterCartItems = Object.keys(cartItems).filter(cartItemId => cartItems[cartItemId]>0)

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
        {filterCartItems.map((cartItemId) => {
          const [id, color, size] = cartItemId.split('-');
          const product = AllProductsData.find(product => product.id === parseInt(id))

          if (product) {
            return (
              <div key={cartItemId}>
                <div className="cartitems-format cartitems-format-main">
                  <div className="product">
                    <img src={product.image} alt={product.title} />
                    <div className="product-description">
                      <h5>{product.title}</h5>
                      <p>Size: {size}</p>
                      <p>Color: {color}</p>
                    </div>
                  </div>
                  <p className="single-price">${product.price}</p>
                  <div className="responsive-lines">
                    <div className="cartitems-counter">
                      <button onClick={() => removeItem(id, color, size)}>-</button>
                      <button>{cartItems[cartItemId]}</button>
                      <button onClick={() => addItem(id, color, size)}>+</button>
                    </div>
                    <p>${product.price * cartItems[cartItemId]}</p>
                    <p className="cartitems-remove-icon">
                      <ion-icon name="close" onClick={() => removeItem(id, color, size)}></ion-icon>
                    </p>
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
