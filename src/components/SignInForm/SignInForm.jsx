import React, {useState} from 'react'
import ReactModal from 'react-modal'
import './SignInForm.css'

function SignInForm ({visible,close}) {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
      });
    
      const [errors, setErrors] = useState({});
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        const validationErrors = {};
        if (!formData.username.trim()) {
          validationErrors.username = '* Username is required';
        }
        if (!formData.email.trim()) {
          validationErrors.email = '* Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
          validationErrors.email = 'Email is invalid';
        }
        if (!formData.password.trim()) {
          validationErrors.password = '* Password is required';
        }
    
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
        } else {
          console.log('Form submitted:', formData);
          alert(` Hi ${formData.username}, You just signed in.`);
        }
      };
    
    return (
<div>
<ReactModal 
isOpen={visible} 
onRequestClose={close}
style={{
    content: {
        height: "560px",
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
        <div className="signin-box">
            <h2>Create Account with</h2>
            <form className="sign-in" onSubmit={handleSubmit} >
                <div className="social-icons">
                  <div className="social-icons-buttons"><ion-icon name="logo-instagram"></ion-icon></div>
                  <div className="social-icons-buttons"><ion-icon name="logo-facebook"></ion-icon></div>
                  <div className="social-icons-buttons"><ion-icon name="logo-twitter"></ion-icon></div>
                </div>
                <div className="instruction">Or use your email for registration</div>
                <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Name"></input>
                {errors.username && <span>{errors.username}</span>}
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email"/>
                {errors.email && <span>{errors.email}</span>}
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password"/>
                {errors.password && <span>{errors.password}</span>}
                <button type="submit" className="signup-button"><span>Sign Up</span></button>
            </form>
        </div>  
    </section>
</ReactModal>
</div>)
}

export default SignInForm
