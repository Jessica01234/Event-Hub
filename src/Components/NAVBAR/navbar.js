import './navbar.css';
import React from 'react';
import { NavbarItems } from './navbarItems';
import { Link } from 'react-router-dom';
import 'animate.css';
// import { Container,Row,Col } from 'react-bootstrap';
import MenuBar from '../images/hamburger.png';
import MenuTimes from '../images/download.png';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Clicked: false, user: null };
  }

  componentDidMount() {
    // Retrieving user details from local storage upon component mount
    const userDetailsString = localStorage.getItem('email');
    const userDetails = JSON.parse(userDetailsString);
  
    // Checking if the user is signed in and has details
    if (userDetails && userDetails.fname) {
      // Set the user details in the state
      this.setState({ user: userDetails });
    }
  }
  

  HandleClick = () => {
    this.setState({ Clicked: !this.state.Clicked });
  };

  //Rendering the components 
  render() {
    const { user } = this.state;

    return (
      <>
        <div className='NavbarItems'>
          <h1 className='NavbarLogo'>
            <Link to={"/"} className='NavLogo'>
              Event MGT
            </Link>
          </h1>
 
          <div onClick={this.HandleClick} className='MenuIcons'>
            <img className='menuBar' src={this.state.Clicked ? MenuTimes : MenuBar} alt='' />
          </div>

          <ul className={this.state.Clicked ? 'NavbarMenu active' : 'NavbarMenu'}>
            {NavbarItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.url} className={item.cName}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
            {user ? <li className='NavLinks'>{user.fname}</li>: <li><Link to={'/logIn'} className='NavLinks'>LogIn</Link></li>}
          </ul>
        </div>
      </>
    );
  }
}

export default NavBar;



// class NavBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { Clicked: false, user: null };
//   }

//   componentDidMount() {
//     // Retrieve user details from local storage upon component mount
//     const userDetailsString = localStorage.getItem('email');
//     const userDetails = JSON.parse(userDetailsString);

//     // Check if the user is signed in and has details
//     if (userDetails && userDetails.email) {
//       // Set the user details in the state
//       this.setState({ user: userDetails });
//     }
//   }

//   HandleClick = () => {
//     this.setState({ Clicked: !this.state.Clicked });
//   };

//   handleLogout = () => {
//     // Clear user details from local storage and reload the page or navigate to the login page
//     localStorage.removeItem('userDetails');
//     window.location.reload(); // You can replace this with your preferred method of handling navigation
//   };

//   render() {
//     const { user } = this.state;

//     return (
//       <>
//         <div className='NavbarItems'>
//           <h1 className='NavbarLogo'>
//             <Link to={"/"} className='NavLogo'>
//               Event MGT
//             </Link>
//           </h1>

//           <div onClick={this.HandleClick} className='MenuIcons'>
//             <img className='menuBar' src={this.state.Clicked ? MenuTimes : MenuBar} alt='' />
//           </div>

//           <ul className={this.state.Clicked ? 'NavbarMenu active' : 'NavbarMenu'}>
//             {NavbarItems.map((item, index) => {
//               return (
//                 <li key={index}>
//                   <Link to={item.url} className={item.cName}>
//                     {item.title}
//                   </Link>
//                 </li>
//               );
//             })}
            
//             {user && (
//               <li>
//                 {user.fname}
//                 <ul className="Dropdown">
//                   {/* <li onClick={this.handleLogout}>Logout</li> */}
//                 </ul>
//               </li>
//             )}
//           </ul>
//         </div>
//       </>
//     );
//   }
// }

// export default NavBar;
