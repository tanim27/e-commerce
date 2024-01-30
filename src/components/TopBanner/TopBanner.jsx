import React from 'react'
import './TopBanner.css'

function TopBanner() {
    return (
        <div>
            <section className="top-banner">
            <div className="banner">
                <img className="top-img" src="images/slider_01.jpg" alt="top-img"/>
                <div className="moto">
                    <div>
                        <li>Shop better</li>
                        <li>get the best experience</li>
                    </div>
                    <p>Shop Now</p>
                </div>
            </div>
            </section>
        </div>
    )
}

export default TopBanner