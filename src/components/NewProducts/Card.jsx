import React from 'react'
import { Link } from 'react-router-dom'
import './NewProducts.css'

function Card(props) {

  return (
    <div className="box">
    <Link to={`/productlist/${props.id}`}><img src={props.image} alt={props.title}/></Link>
    <img src={props.hoverimage} alt={props.title} className="hover-img"/>
    
    <Link to={`/productlist/${props.id}`}>
      <div className="hover-icons"><button><ion-icon name="eye-outline"></ion-icon><span>Preview</span></button></div>
    </Link>

    <div className="blank">.</div>
      <div className="product-title">
        <h5>{props.title}</h5>
        <div className="price">
          <p>${props.price}</p>
        </div>
      </div>
    </div>
  )
}

export default Card