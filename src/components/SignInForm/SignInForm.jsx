import React from 'react'
import ReactModal from 'react-modal'
import './SignInForm.css'

function SignInForm ({visible,close}) {
    
    return (
        <div>
<ReactModal 
isOpen={visible} 
onRequestClose={close}
style={{
    content: {
        height: "500px",
        width: "400px",
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        borderRadius: "10px",
        zIndex: '1100',
        transform: 'translate(-50%, -50%)'
    },
    overlay: {
        background: "rgba(0, 0, 0, 0.6)"
    },
}}>
            <section className="container-signin">
            <div className="close-signin"><ion-icon name="close" onClick={close}></ion-icon></div>
            <form className="sign-in">
                <h1>Create Account with</h1>
                <div className="social-icons">
                    <a href=""><ion-icon name="logo-instagram"></ion-icon></a>
                    <a href=""><ion-icon name="logo-facebook"></ion-icon></a>
                    <a href=""><ion-icon name="logo-twitter"></ion-icon></a>
                </div>
                <span>Or use your email for registration</span>
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button type="submit"><a href="">Sign Up</a></button>
            </form>
            </section>
</ReactModal>
        </div>
    )
}

export default SignInForm
