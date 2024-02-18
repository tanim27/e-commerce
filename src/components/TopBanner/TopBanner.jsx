import React from 'react'
import './TopBanner.css'
import { Link } from 'react-router-dom'

function TopBanner() {
    return (
        <div>
            <section className="top-banner">
            <div className="banner">
                <img className="top-img" src="assets/slider_01.jpg" alt="top-img"/>
                <div className="moto">
                    <div>
                        <li>Shop better</li>
                        <li>get the best experience</li>
                    </div>
                    <Link to="/productlist"><p>Shop Now</p></Link>
                </div>
            </div>
            </section>
        </div>
    )
}

export default TopBanner