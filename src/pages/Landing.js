import React, { useState } from "react";
import main from "../assests/images/main.svg";
import eye from "../assests/images/eye.svg";
import LandingStylesComponents from "../assests/wrappers/LandingStyledComponents";

const Landing = () => {
  const [passwordType, setPasswordType] = useState("password");
  const revealPassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  return (
    <LandingStylesComponents className='container'>
      <img className='image' src={main} alt='main' />
      <form className='form'>
        <h2>Login</h2>
        <div>
          <label htmlFor='loginId'>Login ID</label>
          <input
            className='inputfield'
            type='text'
            name='name'
            placeholder='Enter Login ID'
          />
        </div>
        <div className='passwordLabel'>
          <label htmlFor='password'>Password</label>
          <input
            className='inputfield password'
            type={passwordType}
            name='password'
            placeholder='Enter Password'
          />
          <img onClick={revealPassword} className='eye' src={eye} alt='eye' />
        </div>
        <div className='space'>
          <div className='first'>
            <input className='checkbox' type='checkbox' name='checkbox' />
            <p>Remember Me</p>
          </div>
          <p>
            <a className='cpText' href='#'>
              Change Password
            </a>
          </p>
        </div>
        <p className='checkbox2'>
          <input type='checkbox' name='checkbox' />
          Agree to
          <a href='#'>&nbsp;Terms & Condition</a>
        </p>
        <button type='submit'>Login</button>
        <p className='register'>
          Don't have an account? <a href='#'>Register Here</a>
        </p>
      </form>
    </LandingStylesComponents>
  );
};

export default Landing;
