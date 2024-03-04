import "./footer.css";
import Email from "../images/icon-email.svg"; 
import Phone from "../images/icon-phone.svg";
import Location from "../images/icon-location.svg";
import Facebook from "../images/facebook.jpeg";
import Twitter from "../images/twitter-logo-dark-2.png";
import Instagram from "../images/instagram.png";
import WhatsApp from "../images/whatsapp-icon.png";
import Telegram from "../images/Telegram-logo.png";
import SnapChat from "../images/snapchat-icon.jpg";

function Footer(){
    return(
        <div className="footer">
            <div className="top">
                    {/* <h1>Event Mgt</h1> */}
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
                            <span>Email</span>
                        </nav>
                        
                        <nav>
                            <a href="/">
                                <img src={Phone} alt=""/>
                            </a>
                            <span>Phone</span>
                        </nav>

                        <nav>
                            <a href="/">
                                <img src={Location} alt=""/>
                            </a>
                            <span>Location</span>
                        </nav>
                    </div>
                </section>
                <section className="social">
                    <h1>Let's Get Social</h1>
                    <div className="section">
                        <nav className="sect1">
                            <a href="https://www.facebook.com/profile.php?id=1000091924962914">
                                <img src={Facebook} alt=""/>
                            </a>
                            <a href="/">
                                <img src={Twitter} alt=""/>
                            </a>
                            <a href="https://www.instagram.com/jessicasylvester777?igsh=MzRlNTN2dzQ3djc5&utm_source=qr">
                                <img src={Instagram} alt=""/>
                            </a>
                        </nav>

                        <nav className="sect2">
                            <a href=" https://wa.me/+2347059548812">
                                <img src={WhatsApp} alt=""/>
                            </a>

                            <a href="https://t.me/jessicasylvester777">
                                <img src={Telegram} alt=""/>
                            </a>

                            <a href="https://t.snapchat.com/GjMWbCt5">
                                <img src={SnapChat} alt=""/>
                            </a>
                        </nav>      
                    </div>

                </section>
            </div>
        </div>
    )
}

export default Footer;