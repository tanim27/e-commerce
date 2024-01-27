import React from 'react'
import './Footer.css'

function Footer () {
    return (
        <div>
            <footer>
                <div className="top-side">
                    <div className="left">
                    <div className="left-top">
                        <h4>Information</h4>
                        <li>Deliveries</li>
                        <li>Shipping FAQ</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </div>
                    <div className="left-top">
                        <h4>About Us</h4>
                        <li>Goals</li>
                        <li>Careers</li>
                        <li>Company</li>
                        <li>Factory</li>
                        </div>
                    <div className="left-top">
                        <h4>Address</h4>
                        <li>Find a location nearest you</li>
                        <li>See Our Stores</li>
                        <li>+9912991199</li>
                        <li>blaa@domain.com</li>
                    </div>
                    </div>
                    
                    <div className="right-top">
                        <h3>Good Emails</h3>
                        <p>Enter your email below and connect to be the first to know about our new collection and product launches</p>
                        <form>
                            <input name="emails" placeholder="Enter your email address"/>
                            <button><span>Connect</span></button>
                        </form>
                    </div>
                </div>

                <div className="bottom-side">
                    <div className="icons">
                        <li><a href=""><ion-icon name="logo-facebook"></ion-icon></a></li>
                        <li><a href=""><ion-icon name="logo-twitter"></ion-icon></a></li>
                        <li><a href=""><ion-icon name="logo-instagram"></ion-icon></a></li>
                        <li><a href=""><ion-icon name="logo-reddit"></ion-icon></a></li>
                        <li><a href=""><ion-icon name="logo-youtube"></ion-icon></a></li>
                    </div>
                    <div>
                        <p>@2023 All rights reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer