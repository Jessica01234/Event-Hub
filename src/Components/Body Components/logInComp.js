import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./logInComp.css";
// import ExpandArrow from '../images/Expand Arrow.png';

function LogInComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    // Check if the user is already logged in
    const storedEmail = sessionStorage.getItem('email');
    setIsLoggedIn(!!storedEmail);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();

    const storedUserString = localStorage.getItem(email);
    const storedUser = JSON.parse(storedUserString);

    if (storedUser && password === storedUser.password) {
      sessionStorage.setItem('email', email);
      setIsLoggedIn(true);
    } else {
      alert('Invalid email or password');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('email');
    setIsLoggedIn(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <div className="LogIn">
        {isLoggedIn ? (
          <>
            <h1>Welcome back!</h1>
            <button onClick={handleLogout} className="LogIn-Button">
              Logout
            </button>
          </>
        ) : (
          <>
            {/* <div className="homeBtn">
             <button>Home
              <Link to={'/'}>
                  <img src={ExpandArrow} alt=""/>
                </Link>
             </button>
            </div> */}
            <form onSubmit={handleLogin} className="logInForm">
              <h1>LOG IN</h1>
              <label className="logInLabel">Email</label>
              <input
                id="emailInput"
                required
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={handleEmailChange}
              />

              <label className="logInLabel">Password</label>
              <input
                id="passwordInput"
                type="password"
                placeholder="not less than 8 characters"
                value={password}
                onChange={handlePasswordChange}
              />

              <button type="submit" className="LogIn-Button">
                <Link to={'/'}>Log In</Link>
              </button>
            </form>
          </>
        )}
      </div>
    </>
  );
}

export default LogInComponent;
