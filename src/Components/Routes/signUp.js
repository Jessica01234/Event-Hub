import React from "react";
import NavBar from "../NAVBAR/navbar";
import Hero from "../Hero component/Hero";
import SignUpComponent from "../Body Components/signupComp";
import Footer from "../Footer Components/footer";

function SignUp(){

    return(
        <>
        <NavBar cName="SUNav"/>
            {/* <Hero 
                cName = "signUpHero" />         */}
                <SignUpComponent/>
                <Footer />
        </>
        )
}
export default SignUp;


// const createAccountForm = document.getElementsByClassName('signupForm');
// const input = document.getElementById("input");

// createAccountForm.addEventListener('submit', function(event){
//     event.preventDefault();
//     //Accessing the value in the input fields 
//     const value = input.value;
//     // const nameValue =  username.value;
//     // const emailValue = email.value;
//     // const numberValue = number.value;
//     // const passwordValue = password.value;
//     // const amountValue = amount.value;
    
//     const usersDetails = {
//         details : value,
//         // name : nameValue,
//         // email : emailValue,
//         // amount: amountValue,
//         // number : numberValue,
//         // password: passwordValue,
//     }
//     const usersDetailsString = JSON.stringify(usersDetails);
//     localStorage.setItem(`${value}`, usersDetailsString);
//     console.log(localStorage);
//     // location.href = 'home.js';
// })