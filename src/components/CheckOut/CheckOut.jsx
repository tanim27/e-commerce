import React, { useContext } from "react"
import { CartContext } from './../../LocalStorage/CartContext'
import "./CheckOut.css"

function CheckOut() {
  const {AllProductsData, cartItems, totalAmount } = useContext(CartContext)

  return (
    <div>
      <div className="checkout">
        <h2 className="checkoutpage-title">Checkout</h2>
        <div className="major">
          <div className="major-left">
            <h3 className="billing-detail-title">Billing Details</h3>
            <form className="billing-details" action="">
              <div className="top">
                <div className="top1">
                  <label htmlFor="">First name *</label>
                  <input name="name" type="text" placeholder="First name" />
                </div>
                <div className="top2">
                  <label htmlFor="">Last name *</label>
                  <input name="name" type="text" placeholder="Last name" />
                </div>
              </div>

              <label htmlFor="">Company Name</label>
              <input name="name" type="text" placeholder="Company Name" />
              <label htmlFor="">Country/Region *</label>
              <input autofocus="" type="text" placeholder="Country" />
              <label htmlFor="">State *</label>
              <input type="text" placeholder="State" />
              <label htmlFor="">Town/City *</label>
              <input type="text" placeholder="Town/City" />
              <label htmlFor="">Street Address *</label>
              <input type="text" placeholder="Street Address" />
              <label htmlFor="">Zip Code *</label>
              <input type="text" placeholder="Zip Code" />

              <div className="bottom">
                <div className="bottom1">
                  <label htmlFor="">Contact No *</label>
                  <input type="text" placeholder="Contact" />
                </div>

                <div className="bottom2">
                  <label htmlFor="">Email Address *</label>
                  <input type="email" placeholder="Email Address" />
                </div>
              </div>
              <span>
                <input type="radio" />
                <p>Create an account?</p>
              </span>
            </form>
          </div>

          <div className="major-right">
            <div className="order-summary">
              <h3 className="order-summary-title">Order Summary</h3>
              
              {Object.keys(cartItems).map((cartItemId) => {
                const [id, color, size] = cartItemId.split('-')
                const product = AllProductsData.find(product => product.id === parseInt(id))

                if (product && cartItems[cartItemId] > 0){
                  return (
                    <div key={cartItemId} className="item-detail">
                      <img src={product.image} alt={product.title} />
                      <p className="pieces">{cartItems[cartItemId]}x</p>
                      <div className="text-detail">
                        <h3>{product.title}</h3>
                        <p>Size: {size}</p>
                        <p>Color: {color}</p>
                        <p>Price: ${product.price}</p>
                      </div>
                    </div>)}
                    return null
              })}
            </div>

            <div className="payment-summary">
              <div className="bill-info">
                <div>
                  <input type="radio" />
                  <p>Credit card</p>
                </div>
                <div>
                  <input type="radio" />
                  <p>Cash on delivery</p>
                </div>
                <span className="coupon">
                  <input type="text" placeholder="Apply coupon" />
                  <button>Apply</button>
                </span>
                <span>
                  <p>Subtotal:</p>
                  <p>${totalAmount()}</p>
                </span>
                <span>
                  <p>VAT:</p>
                  <p>$</p>
                </span>
                <span>
                  <p>Promo discount:</p>
                  <p>$0.00</p>
                </span>
                <hr />
                <span>
                  <p>Total:</p>
                  <p>$</p>
                </span>
              </div>
              <button type="submit">Place order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckOut
