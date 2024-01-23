import React from 'react'
import './DropDownPerson.css'

function DropDownPerson({closepopup,loginModalOpen,signupModalOpen}) {
  
  function loginclick() {
    loginModalOpen()
    closepopup()
  }

  function signupclick() {
    signupModalOpen()
    closepopup()
  }

  return (
    <div className="dropdown" >
      <ul>
        <li className="login" onClick={loginclick}>Login</li>
        <li className="signup" onClick={signupclick}>SignUp</li>
      </ul>
    </div>
  )
}

export default DropDownPerson
