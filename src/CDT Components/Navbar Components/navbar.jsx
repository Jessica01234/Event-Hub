import './navbar.css';
import React from 'react';
import { NavbarItems } from './navbarItems';
import { Link } from 'react-router-dom';
import 'animate.css';
import { Container,Row,Col } from 'react-bootstrap';
import MenuBar from '../images/hamburger.png';
import MenuTimes from '../images/download.png';

class NavBar extends React.Component{
    constructor(){
        super();
        this.state ={Clicked:false}
    }
    HandleClick = ()=>{
        this.setState({Clicked: !this.state.Clicked})
    }

    render(){
    return(
        <>
        <Container className='NavbarItems'>
            <h1 className='NavbarLogo'>
                <Link to={"/"} className='NavLogo'>CDT</Link>
            </h1>

            <div onClick={this.HandleClick} className='MenuIcons'>
                <img className="menuBar" src={this.state.Clicked ? MenuTimes : MenuBar} alt=''/>
            </div>

            <Row className={this.state.Clicked ? "NavbarMenu active" : "NavbarMenu" }>
                {NavbarItems.map((item,index) =>{
                    return(
                      <Col key={index}>
                        <Link to={item.url} className={item.cName}>{item.title}</Link>
                      </Col>
                    )
                })}
                
            </Row>

        </Container>
        </>
    )
   }
}
export default NavBar;