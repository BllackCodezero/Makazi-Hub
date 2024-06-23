// LoginForm.jsx
import React, { useState } from 'react';
import './Login.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="title">Welcome Back</div>
        <h1 style= {{color: "black"}}>Login to Your Account</h1>
        <p>Login using social networks</p>
        <div className="social-buttons">
          <button className="social-btn facebook">f</button>
          <button className="social-btn google">G+</button>
          <button className="social-btn linkedin">in</button>
        </div>
        <div className="divider">OR</div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <button type="submit" className="sign-in-btn">Sign In</button>
        </form>
      </div>
      <div className="signup-section">
        <h2>New Here?</h2>
        <p>Sign up and discover a great amount of new opportunities!</p>
        <button className="sign-up-btn">Sign Up</button>
      </div>
    </div>
  );
};

export default LoginForm;