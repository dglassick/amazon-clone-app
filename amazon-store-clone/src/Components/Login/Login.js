import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();
    console.log('firebase stuff');
  };
  const register = e => {
    e.preventDefault();
    console.log('firebase stuff');
  };

  return (
    <div className='login'>
      <Link to='/'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon.logo.svg.png'
          alt=''
          className='login__image'
        />
      </Link>
      <div className='login__container'>
        <h1>Sign In</h1>
        <form action=''>
          <h5>E-mail</h5>
          <input
            type='text'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button
            className='login__signInButton'
            onClick={signIn}
            type='submit'
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to our company's Contitions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice, and our
          Interest-Based Ads
        </p>
        <button className='login__createButton' onClick={register}>
          Create an Account
        </button>
      </div>
    </div>
  );
}

export default Login;
