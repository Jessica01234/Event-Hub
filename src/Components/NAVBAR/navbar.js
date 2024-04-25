import './navbar.css';
import React from 'react';
import { NavbarItems } from './navbarItems';
import { Link } from 'react-router-dom';
import 'animate.css';
import MenuBar from '../images/hamburger.png';
import MenuTimes from '../images/download.png';
import { NavDropdown } from 'react-bootstrap';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Clicked: false, user: null };
  }

  componentDidMount() {
    // Retrieving user details from local storage upon component mount
    const userDetailsString = localStorage.getItem('user');
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



  HandleLogout = () => {
        const userEmail = localStorage.getItem('user');
        sessionStorage.removeItem(userEmail); 
        window.location.href = '/login'; 
    };


  //Rendering the components
  render() {
    const { user } = this.state;

    return (
      <>
        <div id={this.props.cName} className='NavbarItems'>
          <h1 className='NavLogo'>Hub</h1>

          <div onClick={this.HandleClick} className='MenuIcons'>
            <img className='menuBar' src={this.state.Clicked ? MenuTimes : MenuBar} alt='' />
          </div>

          <ul className={this.state.Clicked ? 'NavbarMenu active' : 'NavbarMenu'}>
            {NavbarItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    to={item.url}
                    className={`${item.cName} ${window.location.pathname === item.url ? 'active' : ''}`}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
            {user ? (               
                <NavDropdown title={user.fname} className={`NavLinks ${window.location.pathname === '/profile' ?    'active' : ''}`} id="basic-nav-dropdown">
                    {/* <NavDropdown.Item href="dashBoard">My Events</NavDropdown.Item> */}
                    <NavDropdown.Item href="inpersonGuests">My Guests</NavDropdown.Item>
                    <NavDropdown.Item onClick={this.HandleLogout} style={{color:"red"}}>Sign Out</NavDropdown.Item>
                </NavDropdown>
            ) : (
              <li>
                <Link to={'/signUp'} className={`NavLinks ${window.location.pathname === '/signUp' ? 'active' : ''}`}>
                  SignUp
                </Link>
              </li>
            )}
          </ul>
        </div>
      </>
    );
  }
}

export default NavBar;
