import React, {useRef, useEffect, useState} from 'react'
import { useCart } from 'react-use-cart'
import { Link } from 'react-router-dom'
import { AllProductsData } from './../../LocalStorage/AllProductDetails'

import DropDownPerson from '../DropDownPerson/DropDownPerson'
import LogInForm from '../LogInForm/LogInForm'
import SignInForm from '../SignInForm/SignInForm'

import SearchProductCard from './SearchProductCard'
import './Navigation.css'

function Navigation() {
    const [isNavbarActive, setIsNavbarActive] = useState(false)
    const [searchBoxOpen, setsearchBoxOpen] = useState(false)
    const [isPersonOpen, setIsPersonOpen] = useState(false)
    const [loginModalOpen, setLoginModalOpen] = useState(false)
    const [signupModalOpen, setSignupModalOpen] = useState(false)
    const [products, setProducts] = useState([])
    const {totalItems} = useCart()

    function toggleNavbar () {
        setIsNavbarActive(!isNavbarActive)
    }

    function searchclick () {
        setsearchBoxOpen(!searchBoxOpen)
    }

    function personclick () {
        setIsPersonOpen(!isPersonOpen)
    }

    const handleSearch = (e) => {
        if (e.target.value.length === 0) {
            setProducts([])
            return
        }        

        const filteredProducts = AllProductsData.filter(x =>
            x.title.toLowerCase().includes(e.target.value.toLowerCase())
          )

        setProducts(filteredProducts)
    }

    return (
<div>
<header>

<div className="header-left">
    <div className="left-inline">
        <div className="disclaimer"><a href="">Disc.</a></div>
        <div className="heart-icon"><a href=""><ion-icon name="heart-outline"></ion-icon></a></div>
    </div>
    <div className="menu-icon" onClick={toggleNavbar}><ion-icon name="menu"></ion-icon></div>
</div>

<div className="header-center">
    <div className={`navbar ${isNavbarActive ? "navbar-active" : ""}`}>
        <div className="close-icon" onClick={toggleNavbar}><ion-icon name="close"></ion-icon></div>
        <div className="navigations">
            <Link to="/"><li className="navigation-bottom">Home</li></Link>
            <Link to="/productlist"><li className="navigation-bottom">Products</li></Link>  
        </div>
        <div className="navigations">
            <li className="navigation-bottom">Specials</li>
            <li className="navigation-bottom">Sale</li>
        </div>
    </div>
    <div className="branding">BiShop</div>
</div>

<div className="header-right">
    <div className="right-inline">
        <div className="right-icon"  onClick={searchclick}><ion-icon name="search-outline"></ion-icon></div>
        <div className="right-icon" onClick={personclick} onRequestClose={personclick}><ion-icon name="person-outline"></ion-icon></div>
        
        <Link to="/cart"><div className="right-icon"><ion-icon name="bag-check"></ion-icon><span>({totalItems})</span></div></Link>
    </div>
</div>

</header>

{
   isPersonOpen && 
   <DropDownPerson signupModalOpen={()=>setSignupModalOpen(true)} loginModalOpen={()=>setLoginModalOpen(true)} closepopup={()=>setIsPersonOpen(false)}/>
}

{loginModalOpen && <LogInForm visible={loginModalOpen} close={()=>setLoginModalOpen(false)} />}
{signupModalOpen && <SignInForm visible={signupModalOpen} close={()=>setSignupModalOpen(false)} />}

{
    searchBoxOpen && 
<div className="searchbar">
    <div className="searchbox">
        <form action="">
        <div className="searchbox-icons"><ion-icon name="search-outline"></ion-icon></div>
        <input type="text" placeholder="find your product" onChange={handleSearch}/>
        <div className="searchbox-icons" onClick={searchclick}><ion-icon name="close"></ion-icon></div>
        </form>
    </div>
    {products.map(prod => (
        <SearchProductCard key={prod.id} {...prod} prod={prod} />
    ))}
</div>
}

</div>
)
}

export default Navigation