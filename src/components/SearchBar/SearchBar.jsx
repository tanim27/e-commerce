import React,{ useState } from "react";
import "./SearchBar.css";

export default function SearchBar () {
    const [searchBoxOpen, setsearchBoxOpen] = useState(false);

    function searchclick () {
        setsearchBoxOpen(!searchBoxOpen);
    }

    return (
<div className="searchbar">
    <div className="searchbox">
        <form action="">
        <div className="searchbox-icons"><ion-icon name="search-outline"></ion-icon></div>
        <input type="search" placeholder="find your product" />
        <div className="searchbox-icons" onClick={searchclick}><ion-icon name="close"></ion-icon></div>
        </form>
    </div>
</div>
    );
}