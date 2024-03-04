import React, { useState } from "react";
import "./signupComp.css";
import { Link, useNavigate } from "react-router-dom";

function SignUpComponent(){
  const [usersDetails, setusersDetails] = useState({
    Sname: "",
    fname: "",
    email: "",
    password: ""
  })

  const nav = useNavigate();

  const usersDetailsString = JSON.stringify(usersDetails);

  const HandleClicked = () =>{
    localStorage.setItem('email', usersDetailsString);
    console.log(localStorage);
    nav(`/?Sname=${encodeURIComponent(usersDetailsString)}`);
  }
    return(
        <>
          <div className = "signUp">
            
            <form className="formSignup">
            <h1>Sign UP</h1>
                <label>Surname</label>
                <input id="SnameInput" type="name" required placeholder="Sylvester" onChange={(e) => setusersDetails({...usersDetails, Sname: e.target.value})}/>

                <label>First Name</label>
                <input id="FnameInput" type="name" required placeholder="Jessica" onChange={(e) => setusersDetails({...usersDetails, fname: e.target.value})}/>

                <label>Email</label>
                <input id="emailInput"required type="email" placeholder="example@gmail.com" onChange={(e) => setusersDetails({...usersDetails, email: e.target.value})}/>

                <label>Password</label>
                <input id="passwordInput" type="password" required placeholder="must not be less than 5 character" onChange={(e) => setusersDetails({...usersDetails, password: e.target.value})}/>
               
                <Link to={"/createEvent"}>
                   <button  className="signup-Button" onClick={HandleClicked}>SignUp</button>
                </Link>
                <p className="logInLink">Already have an acount<Link className="loginLink" to={'/logIn'}>LogIn here</Link></p>
              </form>
          </div>
          
        </>
    )
}

export default SignUpComponent;