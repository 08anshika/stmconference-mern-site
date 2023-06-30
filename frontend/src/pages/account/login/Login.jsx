import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
    
    <div className="container">
  <form className="login-form" action="login.php" method="post">
    <h2>Login</h2>
    <input type="text" name="username" placeholder="Username" required />
    <input type="password" name="password" placeholder="Password" required />
    <div className="forgot-password">
      <Link to="/forgetpassword">Forgot Password</Link>
    </div>
    <button type="submit">Log In</button>
  </form>
</div>
    
    
    
    </>
  )
}

export default Login