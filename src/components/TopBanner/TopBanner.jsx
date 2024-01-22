import React from "react";
import "./TopBanner.css";

function TopBanner() {
    return (
        <div>
            <section className="top-banner">
            <div className="banner">
                <img className="top-img" src="./assets/slider_01.jpg" alt="top-img"/>
                <div className="moto">
                    <li>Shop better</li>
                    <li>get the best experience</li>
                    <a href="">Shop Now</a>
                </div>
            </div>
            </section>
        </div>
    );
}

export default TopBanner;