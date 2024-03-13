import "./footer.css";
import Email from "../images/icon-email.svg"; 
import Phone from "../images/icon-phone.svg";
import Location from "../images/icon-location.svg";
import Instagram from "../images/instagram.png";
import WhatsApp from "../images/whatsapp.png";
import Telegram from "../images/telegram.png";
import Facebook from "../images/facebook.png" 

function Footer(){
    return(
        <div className="footer">
            <div className="bottom">
                <section className="Info">
                    <h1>Event Hub</h1>
                    <p>Hub is an event managing platform</p>
                    <p>for memorable experiences in Nigeria.</p>
                </section>

                <section className="contact">
                    <h1>Contact Us</h1>
                    <div>
                        <nav>
                            <a href="mailto:sylvesterjessica012@gmail.com">
                                <img src={Email} alt=""/>
                            </a>
                            <span>Email</span>
                        </nav>
                        
                        <nav>
                            <a href="tel:+2348068703698">
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
                    <h1>Follow Us</h1>
                    <div className="section">
                        <nav>
                            <a href="https://www.facebook.com/profile.php?id=1000091924962914">
                                <img src={Facebook} alt=""/>
                            </a>
                            <span>Facebook</span>
                        </nav>

                        <nav>
                        <a href="https://www.instagram.com/jessicasylvester777?             igsh=MzRlNTN2dzQ3djc5&utm_source=qr">
                            <img src={Instagram} alt=""/>
                        </a>
                        <span>Instagram</span>
                        </nav>

                        <nav>
                            <a href=" https://wa.me/+2347059548812">
                                <img src={WhatsApp} alt=""/>
                            </a>
                            <span>WhatsApp</span>
                        </nav>

                        <nav>
                            <a href="https://t.me/jessicasylvester777">
                                <img src={Telegram} alt=""/>
                            </a>
                            <span>Telegram</span>
                        </nav>
                    </div>

                </section>
            </div>
        </div>
    )
}

export default Footer;