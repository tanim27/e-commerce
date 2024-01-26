import React, {useEffect, useRef, useState} from 'react'
import { AllProductsData } from './../../LocalStorage/AllProductDetails'
import Card from './Card'
import './AllProducts.css'

function AllProducts() {
  const [allMenuOpen, setAllMenuOpen] = useState(false);
  const [selected, setSelected] = useState("All Products");
  const menuRef = useRef()
  const options = ["All Products", "Sweater", "Hoodie","Shirt"]
  const filteredData = selected === "All Products" ? AllProductsData : AllProductsData.filter((x) => x.category === selected.toLowerCase())
  
  useEffect(() => {
    let handler = (event) => {
      if(!menuRef.current.contains(event.target)){
        setAllMenuOpen(false);
      }
    }
    document.addEventListener("click", handler)
    return () => {document.removeEventListener("click", handler)}
  },[])

  function allmenuclick() {
    setAllMenuOpen(!allMenuOpen)
   }

  return (
  <div>

    <div className="product-showlist">
      <div className="title">
        <h2 className="category-title" ref={menuRef} onClick={allmenuclick}>{selected}<span><ion-icon name="chevron-down-sharp"></ion-icon></span></h2>
        <div className="menubar">
          {allMenuOpen && 
          <ul className="menu">
            {options.map((option) => (<li onClick={(e) => {setSelected(option)}}>{option}</li>))}
          </ul>}
        </div>
      </div>
      
      <div className="box-container">
        {filteredData.map(product => (
          <Card key={product.id} {...product} product={product}/>
        ))}
      </div>
    </div>

  </div>
  )
}

export default AllProducts
