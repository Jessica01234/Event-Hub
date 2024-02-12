// import React, { useState, useEffect } from "react";
// import "./logInComp.css";
// import { Link } from "react-router-dom";

// function LogInComponent() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   useEffect(() => {
//     document.addEventListener('submit',function (event) {
//       event.preventDefault();

//       const userString = JSON.stringify({ email, password });
//       const isValidEmail = validateEmail(email);
      
//       if (isValidEmail) {
//         const isValidPassword = validatePassword(email, password);
//         if (isValidPassword) {
//           sessionStorage.setItem('email', userString);
//           console.log(sessionStorage);
//         } else {
//           alert('Password is not correct');
//           console.log('incorrect');
//         }
//       } else {
//         alert('Email is Invalid');
//       }
//     });

//     const validateEmail = (email) => {
//       const emails = localStorage.getItem(email);
//       const Email = JSON.parse(emails);
//       return Email && email === Email.email;
//     };

//     const validatePassword = (email, password) => {
//       const getUser = localStorage.getItem(email);
//       console.log(sessionStorage)
//       const userDetails = JSON.parse(getUser);
//       return userDetails && password === userDetails.password;
//     };
//   }, [email, password]); // email and password added as dependencies

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   return (
//     <>
//       <div className="LogIn">
//         <h1>LOG IN TO YOUR ACCOUNT</h1>
//         <form id="loginForm" className="logInForm">
//           <label className="logInLabel">Email</label>
//           <input
//             id="emailInput"
//             required
//             type="email"
//             placeholder="example@gmail.com"
//             value={email}
//             onChange={handleEmailChange}
//           />

//           <label className="logInLabel">Password</label>
//           <input
//             id="passwordInput"
//             type="password"
//             placeholder="must not be less than 8 characters"
//             value={password}
//             onChange={handlePasswordChange}
//           />
//         </form>
//         <button type="submit" form="loginForm" className="LogIn-Button">
//           <Link to={"/"}>Log In</Link>
//         </button>
//       </div>
//     </>
//   );
// }

// export default LogInComponent;



import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./logInComp.css";
// import ExpandArrow from '../images/Expand Arrow.png';

function LogInComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(localStorage);
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
