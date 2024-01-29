import "./footer.css";
import Email from "../images/icon-email.svg"; 
import Phone from "../images/icon-phone.svg";
import Location from "../images/icon-location.svg";
import Facebook from "../images/facebook.jpeg";
import Twitter from "../images/twitter-logo-dark-2.png";
import Instagram from "../images/instagram.png";

function Footer(){
    return(
        <div className="footer">
            <div className="top">
                    <h1>Event Mgt</h1>
                    <h1>Contact Us</h1>
            </div>
            <div className="bottom">
                <section className="contact">
                    <h1>Contact Us</h1>
                    <div>
                        <nav>
                            <a href="/">
                                <img src={Email} alt=""/>
                            </a>
                            <span>email</span>
                        </nav>
                        
                        <nav>
                            <a href="/">
                                <img src={Phone} alt=""/>
                            </a>
                            <span>phone</span>
                        </nav>

                        <nav>
                            <a href="/">
                                <img src={Location} alt=""/>
                            </a>
                            <span>location</span>
                        </nav>
                    </div>
                </section>
                <section className="social">
                    <h1>Let's Get Social</h1>
                    <div>
                        <a href="/">
                            <img src={Facebook} alt=""/>
                        </a>
                        <a href="/">
                            <img src={Twitter} alt=""/>
                        </a>
                        <a href="/">
                            <img src={Instagram} alt=""/>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Footer;