import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Wrapper } from "./styles";

const Footer = () => {
    return ( 
        <Wrapper>
            <div className="footer">
                <div className="section1">
                <div className="">
                    <h4>Help and FAQ'S</h4>
                    <a href="">Delivery</a>
                    <a href="">Terms and condition</a>
                    <a href="">Privacy policy</a>
                    <a href="">Terms and condition</a>
                    <a href="">FAQ'S</a>
                </div>
                <div className="">
                    <h4>Subscribe to our newsletter </h4>
                   <form>
                    <div className="form-group">
                        <label htmlFor="email">Enter your email</label>
                        <input type="email" required name="email" id="" />
                        <button className="btn-primary" type="submit">Subscribe</button>
                    </div>
                   </form>
                </div>
                <div className="">
                    <h4>Popular categories </h4>
                    <a href="">Coperate shoes</a>
                    <a href="">Slides/palms</a>
                    <a href="">Heels</a>
                    <a href="">Sneakers</a>
                    <a href="">Sandals</a>
                </div>
                </div>
                <div className="section2">
                <div className="">
                    <h4>Contact us</h4>
                    <span>Phone: <a href="tel:+2348035473583"> 08035473583</a></span>
                    <span>Phone: <a href="tel:+2348035473583"> 08035473583</a></span>
                </div>
                <div className="mid">
                    <h4>Your voice matter </h4>
                   <p>We’d love to learn more about your shopping experience on onibata.com and how we can improve </p>
                    <button className="btn-primary" type="submit">Take a Survey</button>
                </div>
                <div className="">
                    <h4>Social media page</h4>
                   <span className="social-link">
                   <a href=""><FaInstagram/> </a>
                    <a href=""><FaTwitter /></a>
                    <a href=""><FaWhatsapp /></a>
                   </span>
                </div>
                </div>
            </div>
        </Wrapper>
     );
}
 
export default Footer;