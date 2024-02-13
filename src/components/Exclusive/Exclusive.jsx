import React from 'react'
import './Exclusive.css'

function Exclusive() {
    return (
        <div>
            <section className="exclusive">
                <h2>Exclusive</h2>
                <div className="features">
                <div className="left">
                    <div className="promotion about-box">
                        <img src="./assets/feature-1.jpg" alt=""/>
                        <div className="description">
                            <h4>Promotions and Discounts</h4>
                            <p>Get 60% off on every spring collection product</p>
                            <button><span>Grab It<ion-icon name="arrow-forward-outline"></ion-icon></span></button>
                        </div>
                    </div>
                    <div className="trending about-box">
                        <img src="./assets/feature-2.jpg" alt="aaa"/>
                        <div className="description">
                            <h4>Trending Now</h4>
                            <p>Explore the trending world of our products</p>
                            <button><span>Explore<ion-icon name="arrow-forward-outline"></ion-icon></span></button>
                        </div>
                    </div>
                </div>

                <div className="right">
                    <div className="custom about-box">
                        <img src="./assets/feature-3.jpg" alt=""/>
                        <div className="description">
                            <h4>Customize Product</h4>
                            <p>You can customize your design from us.</p>
                            <button><span>Let's Do<ion-icon name="arrow-forward-outline"></ion-icon></span></button>
                        </div>
                    </div>
                    <div className="blog about-box">
                        <img src="./assets/feature-4.jpg" alt=""/>
                        <div className="description">
                            <h4>Blogs On Socials</h4>
                            <p>Explore the influencers on social media</p>
                            <button><span>Explore<ion-icon name="arrow-forward-outline"></ion-icon></span></button>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default Exclusive