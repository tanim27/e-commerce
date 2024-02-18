import React, { useState } from 'react';
import ReactModal from 'react-modal';
import './LogInForm.css';

function LogInForm({ visible, close }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!email) {
      errors.email = '* Email is required';
    }

    if (!password) {
      errors.password = '* Password is required';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    console.log('Form submitted with:', { email, password });

    alert(`Hi ${email}, you just logged in`)

    setEmail('');
    setPassword('');
    setErrors({});
    close();
  };

  return (
    <div>
      <ReactModal
        isOpen={visible}
        onRequestClose={close}
        style={{
          content: {
            height: "550px",
            width: "400px",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "50%",
            borderRadius: "10px",
            zIndex: "1100",
            transform: "translate(-50%, -50%)",
          },
          overlay: {
            background: "rgba(0, 0, 0, 0.6)",
          },
        }}>
        <section className="container-login">
          <div className="close-login"><ion-icon name="close" onClick={close}></ion-icon></div>
          <div className="login-box">
            <h2>Sign In with</h2>
            <form className="log-in" onSubmit={handleSubmit}>
              <div className="social-icons">
                <div className="social-icons-buttons"><ion-icon name="logo-instagram"></ion-icon></div>
                <div className="social-icons-buttons"><ion-icon name="logo-facebook"></ion-icon></div>
                <div className="social-icons-buttons"><ion-icon name="logo-twitter"></ion-icon></div>
              </div>
              <div className="instruction">Or use your email & password to login</div>
              <input type="email" name="email" placeholder="Email" value={email} onChange={handleEmailChange} />
              {errors.email && <span className="error">{errors.email}</span>}
              <input type="password" name="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
              {errors.password && <span className="error">{errors.password}</span>}
              <div className="forgot-pass">Forgot your password?</div>
              <button type="submit"><span>Sign In</span></button>
            </form>
          </div>
        </section>
      </ReactModal>
    </div>
  );
}

export default LogInForm;
