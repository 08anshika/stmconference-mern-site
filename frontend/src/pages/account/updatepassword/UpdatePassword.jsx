import React from 'react'
import './UpdatePassword.css';
const UpdatePassword = () => {
  return (
    <>
    
  <div className="container">
  <form className="Forget-Password" action="Forget.php" method="post">
    <h2>New Password</h2>
    <p className='m-3'>Please create a new password that you don't use on any other site.</p>
    <input type="text" name="Email" placeholder="Create new password" required />
    <input type="text" name="Email" placeholder="Confirm your password" required />
    <button type="submit">Update Password</button>
  </form>
</div>

    
    
    </>
  )
}

export default UpdatePassword