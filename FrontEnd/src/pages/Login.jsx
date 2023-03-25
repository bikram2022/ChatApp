import React , {useState} from 'react';
import "./login.css";
import login_image from "../assests/login-page-image.jpg"

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(e){
    e.preventDefault();
    // login Logic
  }

  return (
    <div className='login-wrapper'>
      <form onSubmit={handleLogin} className="login-form">
        <h2 className='login-header'>Login to Heychat</h2>
        <div className='form-wrapper'>
          <div className="form-group">
            {/* <label className='signup-label' htmlFor="signup-email-id">Email address</label><br /> */}
            <input id="login-email-id" type="email" placeholder='Email address' onChange={(e) => setEmail(e.target.value)} value={email} required></input>
          </div>
          <br/>
          <div className="form-group">
            {/* <label className='signup-label' htmlFor="signup-pass">Password</label><br /> */}
            <input id="login-pass" type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password} required></input>
          </div>
          <br />
          <button className='login-button' type='submit'>Login</button>
        </div>
      </form>
      <div className='login-image'>
        <img className='image' src={login_image} alt="login_image"/>
      </div>
    </div>
  )
}

export default Login