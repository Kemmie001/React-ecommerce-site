import { FaInstagram, FaTwitter, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { BsFillThreadsFill } from "react-icons/bs";
import { Wrapper } from "./styles";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<Wrapper>
			<div className="footer">
				<div className="section1">
					<div className="">
						<h4>Help and FAQ'S</h4>
						<a href="">Delivery</a>
						<a href="/terms">Terms and condition</a>
						<a href="">Privacy policy</a>
						<a href="/faq">FAQ'S</a>
					</div>
					<div className="">
						<h4>
							Subscribe to our newsletter{" "}
							<span>
								<p>
									and have free access to our E-book
									<br /> on Footwear Maintenance
								</p>
							</span>
						</h4>

						<form>
							<div className="form-group">
								<label htmlFor="email">Enter your email</label>
								<input type="email" required name="email" id="" />
								<button className="btn-primary" type="submit">
									Subscribe
								</button>
							</div>
						</form>
					</div>
					<div className="">
						<h4>Popular categories </h4>
						<a href="">Corporate shoes</a>
						<a href="">Slides/palms</a>
						<a href="">Heels</a>
						<a href="">Sneakers</a>
						<a href="">Sandals</a>
					</div>
				</div>
				<div className="section2">
					<div className="">
						<h4>Contact us</h4>
						<span>
							Phone: <a href="tel:+2348035473583"> 09135255802</a>
						</span>
						<span>
							Whatsapp: <a href="tel:+2348035473583"> 09080788447</a>
						</span>
					</div>
					<div className="mid">
						<h4>Your voice matter </h4>
						<p>
							We’d love to learn more about your shopping experience on onibata.com and how we can improve{" "}
						</p>
						<button className="btn-primary" type="submit">
							Take a Survey
						</button>
					</div>
					<div className="">
						<h4>Social media page</h4>
						<span className="social-link">
							<a href="https://instagram.com/onibata_mall">
								<FaInstagram />{" "}
							</a>
							<a href="https://x.com/onibatang?s=11&t=qrY-C2qnWWt8sZkA1jVajw">
								<FaTwitter />
							</a>
							<a href=" https://wa.me/2349080788447">
								<FaWhatsapp />
							</a>
							<a href="https://www.linkedin.com/company/onibata-mall/">
								<FaLinkedin />
							</a>
							<a href="https://www.threads.net/@onibata_mall">
								<BsFillThreadsFill />
							</a>
						</span>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default Footer;
