import React, { useState } from "react";
import { AllProductsData } from "../../LocalStorage/AllProductDetails";
import Card from "./Card";
import "./ProductsCategory.css";

import { Accordion } from "keep-react";
import { Plus } from "phosphor-react";

function ProductsCategory() {
  const options = ["All Products", "Sweater", "Hoodie", "Shirt"];
  const gendercategories = ["All", "Men", "Women"];
  const prices = ["All", "0-49", "50-99", "100-149", "150-199", "200+"];
  const sizes = ["All", "s", "m", "l", "xl", "xxl"];
  const colors = ["All", "Blue", "Green", "Brown", "Pink", "White", "Black"];

  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [selectedGender, setSelectedGender] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [selectedSize, setSelectedSize] = useState("All");
  const [selectedColor, setSelectedColor] = useState("All");

  const [isLeftBarActive, setIsLeftBarActive] = useState(false);

  const [panelOpen, setPanelOpen] = useState({
    sizes: false,
    colors: false,
    categories: false,
    prices: false,
  });

  const toggleLeftBar = () => {
    setIsLeftBarActive(!isLeftBarActive);
  };

  const togglePanel = (panel) => {
    setPanelOpen((prevState) => ({
      ...prevState,
      [panel]: !prevState[panel],
    }));
  };

  const compareArray = (a, b) => a.some((element) => b.includes(element));
  const currentCategory = selectedCategory === "All Products" ? options.map((x) => x.toLowerCase()) : [selectedCategory.toLowerCase()];
  const currentSize = selectedSize === "All" ? sizes.map((x) => x.toLowerCase()) : [selectedSize.toLowerCase()];
  const currentColor = selectedColor === "All" ? colors.map((x) => x) : [selectedColor];
  const currentGender = selectedGender === "All" ? gendercategories.map((x) => x.toLowerCase()) : [selectedGender.toLowerCase()];

  const filteredData = AllProductsData.filter(
    (x) =>
      currentCategory.includes(x.category) &&
      currentGender.includes(x.gendercategory) &&
      compareArray(currentSize, x.size) &&
      compareArray(currentColor, x.color)
  );

  return (
    <div>
      <div className="wholepage">
        <div className="recommended">
          <h3>Recommended</h3>
          {options.map((option) => (
            <button
            key={option}
            className="buttons"
            onClick={() => setSelectedCategory(option)}
          >
            {option}
          </button>
          ))}
        </div>

        <div className="box-container">
          {filteredData.map((product) => (
            <Card key={product.id} {...product} product={product} />
          ))}
        </div>

        <div className={`leftbar ${isLeftBarActive ? "leftbar-active" : ""}`}>
          <div className="leftbar-close-icon" onClick={toggleLeftBar}>
            <ion-icon name="close"></ion-icon>
          </div>
          <div className="filter">
            <h3>Filter</h3>
            <Accordion>
              <Accordion.Panel className="accordion-panel">
                {["sizes"].map((panel) => (
                  <Accordion.Container
                    className="accordion-container"
                    key={panel}
                    onClick={() => togglePanel(panel)}
                  >
                    <Accordion.Title
                      className="accordion-title"
                      onClick={() => togglePanel(panel)}
                    >
                      Sizes
                    </Accordion.Title>
                    <Accordion.Icon
                      className={`accordion-icon ${
                        panelOpen[panel] ? "rotate-icon" : ""
                      }`}
                      onClick={() => togglePanel(panel)}
                    >
                      <Plus size={20} color="#444" />
                    </Accordion.Icon>
                  </Accordion.Container>
                ))}
                <Accordion.Content>
                  <ul className="button-content">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={(e) => setSelectedSize(size)}
                        className={selectedSize === size ? "text-blue-600" : ""}
                      >
                        {size}
                      </button>
                    ))}
                  </ul>
                </Accordion.Content>
              </Accordion.Panel>

              <Accordion.Panel className="accordion-panel">
                {["colors"].map((panel) => (
                  <Accordion.Container
                    className="accordion-container"
                    key={panel}
                    onClick={() => togglePanel(panel)}
                  >
                    <Accordion.Title
                      className="accordion-title"
                      onClick={() => togglePanel(panel)}
                    >
                      Colors
                    </Accordion.Title>
                    <Accordion.Icon
                      className={`accordion-icon ${
                        panelOpen[panel] ? "rotate-icon" : ""
                      }`}
                      onClick={() => togglePanel(panel)}
                    >
                      <Plus size={20} color="#444" />
                    </Accordion.Icon>
                  </Accordion.Container>
                ))}
                <Accordion.Content>
                  <ul className="button-content color-buttons">
                    {colors.map((color) => (
                      <button
                        key={color}
                        onClick={(e) => setSelectedColor(color)}
                        className={
                          selectedColor === color ? "text-blue-600" : ""
                        }
                      >
                        {color}
                      </button>
                    ))}
                  </ul>
                </Accordion.Content>
              </Accordion.Panel>

              <Accordion.Panel className="accordion-panel">
                {["categories"].map((panel) => (
                  <Accordion.Container
                    className="accordion-container"
                    key={panel}
                    onClick={() => togglePanel(panel)}
                  >
                    <Accordion.Title
                      className="accordion-title"
                      onClick={() => togglePanel(panel)}
                    >
                      Categories
                    </Accordion.Title>
                    <Accordion.Icon
                      className={`accordion-icon ${
                        panelOpen[panel] ? "rotate-icon" : ""
                      }`}
                      onClick={() => togglePanel(panel)}
                    >
                      <Plus size={20} color="#444" />
                    </Accordion.Icon>
                  </Accordion.Container>
                ))}
                <Accordion.Content>
                  <ul>
                    {gendercategories.map((gender) => (
                      <li
                        key={gender}
                        onClick={(e) => setSelectedGender(gender)}
                        className={
                          selectedGender === gender ? "text-blue-600" : ""
                        }
                      >
                        {gender}
                      </li>
                    ))}
                  </ul>
                </Accordion.Content>
              </Accordion.Panel>

              <Accordion.Panel className="accordion-panel">
                {["prices"].map((panel) => (
                  <Accordion.Container
                    className="accordion-container"
                    key={panel}
                    onClick={() => togglePanel(panel)}
                  >
                    <Accordion.Title
                      className="accordion-title"
                      onClick={() => togglePanel(panel)}
                    >
                      Prices
                    </Accordion.Title>
                    <Accordion.Icon
                      className={`accordion-icon ${
                        panelOpen[panel] ? "rotate-icon" : ""
                      }`}
                      onClick={() => togglePanel(panel)}
                    >
                      <Plus size={20} color="#444" />
                    </Accordion.Icon>
                  </Accordion.Container>
                ))}
                <Accordion.Content>
                  <ul>
                    {prices.map((price) => (
                      <li key={price} onClick={(e) => setSelectedPrice(price)}>
                        {price}
                      </li>
                    ))}
                  </ul>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
        </div>

        <div className="filter-button" onClick={toggleLeftBar}>
          <ion-icon name="funnel-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
}

export default ProductsCategory;
