import React, { useState } from 'react'
import { AllProductsData } from './../../LocalStorage/AllProductDetails'
import Card from './Card'
import './ProductsCategory.css'

function ProductsCategory() {
  const options = ["All Products", "Sweater", "Hoodie", "Shirt"];
  const gendercategories = ["All", "Men", "Women"];
  const prices = ["All", "0-49", "50-99", "100-149", "150-199", "200+"];
  const sizes = ["All", "s", "m", "l", "xl", "xxl"];
  const colors = ["All", "Blue", "Green", "Brown", "Pink"];

  const [selected, setSelected] = useState("All Products");
  const [selectedGender, setSelectedGender] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [selectedSize, setSelectedSize] = useState("All")
  const [selectedColor, setSelectedColor] = useState("All");

  const [isLeftBarActive, setIsLeftBarActive] = useState()

  const toggleLeftBar = () => {
    setIsLeftBarActive(!isLeftBarActive)
  }

  const filteredData = AllProductsData.filter(
    (x) =>
      (selected === "All Products" || x.category === selected.toLowerCase()) &&
      (selectedGender === "All" || x.gendercategory === selectedGender.toLowerCase()) && 
      (selectedPrice === "All" || x.price === selectedPrice.toLowerCase()) &&
      (selectedSize === "All" || x.size === selectedSize.toLowerCase()) && 
      (selectedColor === "All" || x.color === selectedColor.toLowerCase())
  )

  return (
    <div>
      <div className="wholepage">
        <div className="recommended">
          <h3>Recommended</h3>
          {options.map((option) => (
            <button
              key={option}
              className="buttons"
              onClick={() => setSelected(option)}
            >
              {option}
            </button>
          ))}
        </div>

        <hr />
        <div className="box-container">
          {filteredData.map((product) => (
            <Card key={product.id} {...product} product={product} />
          ))}
        </div>
        
        <div className={`leftbar ${isLeftBarActive ? "leftbar-active" : ""}`}>
          <button className="leftbar-close-icon" onClick={toggleLeftBar}><ion-icon name="close"></ion-icon></button>
          <div className="filter">
            <h3>Filter</h3>
            <div className="categorylist">
              <h4>Category</h4>
              <ul>
                {gendercategories.map((gender) => (
                <li key={gender} onClick={(e) => setSelectedGender(gender)}>{gender}</li>
                ))}
              </ul>
            </div>

            <div className="categorylist">
              <h4>Price</h4>
              <ul>
                {prices.map((price)=>(
                <li key={price} onClick={(e) => setSelectedPrice(price)}>{price}</li>
                ))}
              </ul>
            </div>

            <div className="categorylist">
              <h4>Size</h4>
              <ul>
                {sizes.map((size)=>(
                <li key={size} onClick={(e) => setSelectedSize(size)}>{size}</li>
                ))}
              </ul>
            </div>

            <div className="categorylist">
              <h4>Color</h4>
              <ul>
                {colors.map((color) => (
                <li key={color} onClick={(e) => setSelectedColor(color)}>{color}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        <div className="filter-button" onClick={toggleLeftBar}><ion-icon name="funnel-outline"></ion-icon></div>
      </div>
      
    </div>
  )
}

export default ProductsCategory
