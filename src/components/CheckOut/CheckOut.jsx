import React from 'react'
import "./CheckOut.css"
import { useCart } from 'react-use-cart'

function CheckOut() {
  const {items,isEmpty,cartTotal} = useCart();
  const vat = cartTotal*0.1;

  return (
    <div>
      <div className="checkout">

        <h2 className="checkoutpage-title">Checkout</h2>
        <div className="major">
          <div className="major-left">
            <h2 className="billing-detail-title">Billing Details</h2>
            <form className="billing-details" action="">
              <div className='top'>
                <div className='top1'>
                  <label htmlFor="">First name *</label>
                  <input name="name" type="text" placeholder="First name"/>
                </div>
                <div className='top2'>
                  <label htmlFor="">Last name *</label>
                  <input name="name" type="text" placeholder="Last name"/>
                </div>
              </div>

              <label htmlFor="">Company Name</label>
              <input name="name" type="text" placeholder="Company Name"/>
              <label htmlFor="">Country/Region *</label>
              <input autofocus="" type="text" placeholder="Country"/>
              <label htmlFor="">State *</label>
              <input type="text" placeholder="State"/>
              <label htmlFor="">Town/City *</label>
              <input type="text" placeholder="Town/City"/>
              <label htmlFor="">Street Address *</label>
              <input type="text" placeholder="Street Address"/>
              <label htmlFor="">Zip Code *</label>
              <input type="text" placeholder="Zip Code"/>

              <div className='bottom'>
                <div className='bottom1'>
                  <label htmlFor="">Contact No *</label>
                  <input type="text" placeholder="Contact"/>
                </div>

                <div className='bottom2'>
                  <label htmlFor="">Email Address *</label>
                  <input type="email" placeholder="Email Address"/>
                </div>
              </div>
              <span>
                <input type='radio'/>
                <p>Create an account?</p>
              </span>
              
            </form>
          </div>

          <div className="major-right">
            
            <div className="order-summary">
              <h2 className="order-summary-title">Order Summary</h2>
              {isEmpty ? <h4>Your cart is empty  :(</h4> : ""}
              {items.map((slide) => 
                (<tr key={slide.id} className="item-detail">
                  <img src={slide.image} alt={slide.title} />
                  <p className="pieces">{slide.quantity}x</p>
                  <div>
                    <h4>{slide.title}</h4>
                    <p>Color: {slide.color}</p>
                    <p>${slide.price*slide.quantity}</p>
                  </div>  
                </tr>))}
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
                <input type="text" placeholder="Apply coupon"/>
                <button>Apply</button>
              </span>
              <span>
                <p>Subtotal:</p>
                <p>${cartTotal}</p>
              </span>
              <span>
                <p>VAT:</p>
                <p>${vat}</p>
              </span>
              <span>
                <p>Promo discount:</p>
                <p>$0.00</p>
              </span>
              <hr />
              <span>
                <p>Total:</p>
                <p>${cartTotal+vat}</p>
              </span>
              </div>
              <button type='submit'>Place order</button>
            </div>
          </div>     
        </div>
        
      </div>
    </div>
  )
}

export default CheckOut