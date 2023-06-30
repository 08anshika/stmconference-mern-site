import React from 'react'
import './ForgetPassword.css';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
  return (
    <>
<div className="container">
  <form className="Forget-Password" action="Forget.php" method="post">
    <h2>Forget Password</h2>
    <p className='m-3'>Please enter your email  address</p>
    <input type="text" name="Email" placeholder="enter your Email" required />
    <div className="Change-password">
    </div>
    <Link to='/updatepassword'><button type="submit">Get New Password</button></Link>
  </form>
</div>

    
    
    
    </>
  )
}

export default ForgetPassword