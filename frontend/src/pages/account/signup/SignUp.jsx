import React from 'react'
import './SignUp.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <>
   <div className="container">
     
   <div className="registerform">  
  <div className="title">Registation Form</div>
  <form action="#">
    <div className="user_details">
      <div className="input_pox">
        <span className="datails">Full Name</span>
        <input type="text" placeholder="enter your name" required />
      </div>
      <div className="input_pox">
        <span className="datails">Username</span>
        <input type="text" placeholder="enter your Username" required />
      </div>
      <div className="input_pox">
        <span className="datails">Email</span>
        <input type="text" placeholder="enter your Email" required />
      </div>
      <div className="input_pox">
        <span className="datails">Phone Number</span>
        <input type="text" placeholder="enter your Phone" required />
      </div>
      <div className="input_pox">
        <span className="datails">Password</span>
        <input type="text" placeholder="enter your Password" required />
      </div>
      <div className="input_pox">
        <span className="datails">Confirm Password</span>
        <input type="text" placeholder="Confirm your Password" required />
      </div>
    </div>
    <div className="gender_details">
      <input type="radio" name="gender" id="dot-1" />
      <input type="radio" name="gender" id="dot-2" />
      <input type="radio" name="gender" id="dot-3" />
      <span className="gender_title"> Gender</span>
      <div className="category">
        <label htmlFor="dot-1">
          <span className="dot one" />
          <span className="gender">Male</span>
        </label>
        <label htmlFor="dot-2">
          <span className="dot two" />
          <span className="gender">Female</span>
        </label>
        <label htmlFor="dot-3">
          <span className="dot three" />
          <span className="gender">Other</span>
        </label>
      </div>
    </div>
    <div className="forgot-password mx-3">
      <Link to="/login">Already have an account</Link>
    </div>
    <div className="button">
      <input type="submit" defaultValue="Register" />
    </div>
  </form>
</div>
   </div>
    
    
    
    </>
  )
}

export default SignUp