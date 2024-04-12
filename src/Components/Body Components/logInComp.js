import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./logInComp.css";

function LogInComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is already logged in
    const storedEmail = sessionStorage.getItem('user');
    setIsLoggedIn(!!storedEmail);
  }, []);

  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();

    const storedUserString = localStorage.getItem('user');
    const storedUser = JSON.parse(storedUserString);

    if (storedUser && password === storedUser.password && email === storedUser.email) {
      sessionStorage.setItem('email', email);
      setIsLoggedIn(true);
      console.log(sessionStorage);
      navigate('/dashBoard');
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
                Log In
              </button>
            </form>
          </>
        )}
      </div>
    </>
  );
}

export default LogInComponent;
