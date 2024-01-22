import React, {useEffect, useRef, useState} from 'react';
import AllProductDetails from './AllProductDetails'; 
import Card from './Card'; 

function AllProducts() {
  const [allMenuOpen, setAllMenuOpen] = useState(false);

  function allmenuclick() {
   setAllMenuOpen(!allMenuOpen); 
  }

  const options = ["All Products", "Sweater", "Hoodie","Shirt"];
  const [selected, setSelected] = useState("All Products");
  const filteredData = selected === "All Products" ? AllProductDetails : AllProductDetails.filter((x) => x.category === selected.toLowerCase());

  let menuRef = useRef();
  
  useEffect(() => {
    let handler = (event) => {
      if(!menuRef.current.contains(event.target)){
        setAllMenuOpen(false);
      }
    }

    document.addEventListener("click", handler);

    return () => {document.removeEventListener("click", handler);};
  },[]);
  
  return (
    <div>
      <div className="title" ref={menuRef} onClick={allmenuclick}>
        <h2>{selected}
          <span><ion-icon name="chevron-down-sharp"></ion-icon></span>
          <span>
            {
              allMenuOpen && 
              <ul className="menu">
                {options.map((option) => (<li onClick={(e) => {setSelected(option)}}>{option}</li>))}
              </ul>
            }
          </span>
        </h2>
      </div>
  
      <div className="box-container">
        {filteredData.map(product => (
          <Card key={product.id} {...product} product={product}/>
        ))}
      </div>
  </div>
  );
}

export default AllProducts;
