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
            <h1>CREATE AN ACCOUNT</h1>
            <form className="formSignup">
                <label className="signupLabel">Surname</label>
                <input id="SnameInput" type="name" placeholder="Sylvester" onChange={(e) => setusersDetails({...usersDetails, Sname: e.target.value})}/>

                <label className="signupLabel">First Name</label>
                <input id="FnameInput" type="name" placeholder="Jessica" onChange={(e) => setusersDetails({...usersDetails, fname: e.target.value})}/>

                <label className="signupLabel">Email</label>
                <input id="emailInput"required type="email" placeholder="example@gmail.com" onChange={(e) => setusersDetails({...usersDetails, email: e.target.value})}/>

                <label className="signupLabel">Password</label>
                <input id="passwordInput" type="password" placeholder="must not be less than 8 character" onChange={(e) => setusersDetails({...usersDetails, password: e.target.value})}/>
            </form>
            <button onClick={HandleClicked}>
              <Link to={"/"} className="signup-Button">SignUp</Link>
            </button>
          </div>
        </>
    )
}

export default SignUpComponent;