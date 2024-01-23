import React from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import "./CartProducts.css";

function CartProducts() {
  const {
    isEmpty,
    totalUniqueItems,
    totalItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  return (
    <div>
      <div className="totalpage">
        <h2 className="cartpage-title">Cart</h2>
        <h4 className="item-amount">
          {" "}
          Unique Total: ({totalUniqueItems}) Total items: ({totalItems})
        </h4>
        <hr className="line1" />
        <hr className="line2" />
        <table className="productdetail">
          <tr className="static">
            <th>Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>

          {isEmpty ? <h3 className="warning"> Your cart is empty :( </h3> : ""}

          {items.map((slide) => (
            <tr className="dynamic" key={slide.id}>
              <td>
                <div className="product-desc">
                  <img src={slide.image} alt={slide.title} />
                  <div className="text-desc">
                    <h4>{slide.title}</h4>
                    <p>Color:{slide.color}</p>
                    <p>Size: {slide.size}</p>
                  </div>
                </div>
              </td>
              <td>
                <p>${slide.price}</p>
              </td>
              <td className="counter">
                <div className="inner">
                  <button
                    onClick={() =>
                      updateItemQuantity(slide.id, slide.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <p>{slide.quantity}</p>
                  <button
                    onClick={() =>
                      updateItemQuantity(slide.id, slide.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
              </td>
              <td>${slide.price * slide.quantity}</td>
              <td onClick={() => removeItem(slide.id)}>
                <div className="remove-product">
                  <ion-icon name="bag-remove-outline"></ion-icon>
                </div>
              </td>
            </tr>
          ))}
        </table>
        <hr className="line3" />

        <div className="final-list1">
          <p className="total-amount">Subtotal: ${cartTotal}</p>
          <button className="remove-button" onClick={() => emptyCart()}>
            Remove all
          </button>
        </div>

        <div className="final-list2">
          <div>
            <input type="radio"></input>I agree to terms and conditions
          </div>
          <Link to="/billing">
            <button type="submit" className="checkout-button">
              Check Out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartProducts;
