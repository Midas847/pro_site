import React from 'react';

import '../../App.css';
import { Button } from '../Button';

function SignUp() {
    return (
    <div className="sign-up">
      <h3 className="heading">SIGN UP</h3>
      <form>
        <input 
          className = "first_name"
          name = "name"
          type = "name"
          placeholder = "First name"
        /><br/>
        <input 
          className = "last_name"
          name = "name"
          type = "name"
          placeholder = "Last name"
        /><br/>
        <input 
          className = "signup_email"
          name = "email"
          type = "email"
          placeholder = "Your email"
        /><br/>
        <input 
          className = "Password"
          name = "password"
          type = "password"
          placeholder = "Password"
        /><br/>
        <input 
          className = "confirm_Password"
          name = "password"
          type = "password"
          placeholder = "Confirm Password"
        /><br/>
        <Button classname = "signup_button" buttonStyle="btn--outline" buttonSize="btn--large">Submit</Button><br/>
      </form>
    </div>
    );
}

export default SignUp;