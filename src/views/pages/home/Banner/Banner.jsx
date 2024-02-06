import { Content, Wrapper, Wrapper2 } from "./styles";
import { register } from "swiper/element/bundle";

const Banner = () => {
	register();
	return (
		<>
			<swiper-container
				slides-per-view="1"
				speed="5"
				loop="true"
				css-mode="true"
				autoplay
				className="slider"
				style={{ zIndex: "-1" }}
			>
				<swiper-slide>
					<Wrapper>
						<div>
							<div className="banner">
								<div className="">
									{/* <h2 className="banner-head">

                Nigeria-made Hand-Crafted Footwears That <span className="yellow">Command</span> Immediate Respect From Anyone and Boost Your <span className="yellow">
                Confidence </span> Anywhere You Go. 
                </h2> */}
                  <h1>
                    Competent Nigerian Shoemakers <br />
                    are difficult to find online
                  </h1>
                  <p>Onibata Mall connects you to the best in the industry</p>
                  <button className="btn-primary">Shop now</button>
                </div>
              </div>
              <div className="feats">
                <div className="feat">
                  <div className="feat-img">
                    <img src="/assets/swift.svg" alt="swift" />
                  </div>
                  <div className="">
                    <h6>Swift delivery </h6>
                    <p>Free delivery on orders above 50,000</p>
                  </div>
                </div>
                <div className="feat">
                  <div className="feat-img">
                    <img src="/assets/payment.svg" alt="swift" />
                  </div>
                  <div className="">
                    <h6>Secured payments </h6>
                    <p>We accept all major credit cards</p>
                  </div>
                </div>
                <div className="feat">
                  <div className="feat-img">
                    <img src="/assets/customer.svg" alt="swift" />
                  </div>
                  <div className="">
                    <h6>Customer service </h6>
                    <p>Customer service top notch</p>
                  </div>
                </div>
              </div>
            </div>
          </Wrapper>
        </swiper-slide>
        <swiper-slide>
          <Wrapper2>
            <div>
              <div className="banner">
                <div className="">
                  {/* <h2 className="banner-head">
                Nigeria-made Hand-Crafted Footwears That <span className="yellow">Command</span> Immediate Respect From Anyone and Boost Your <span className="yellow">
                Confidence </span> Anywhere You Go. 
                </h2> */}
                  <h1>
                    Get easy access to various Nigeria
                    <br /> Made Footwears
                  </h1>
                  <p>
                    Quality, Refined and Comfortable shoes guaranteed to last
                    you for years
                  </p>
                  <button className="btn-primary">Shop now</button>
                </div>
              </div>
              <div className="feats">
                <div className="feat">
                  <div className="feat-img">
                    <img src="/assets/swift.svg" alt="swift" />
                  </div>
                  <div className="">
                    <h6>Swift delivery </h6>
                    <p>Free delivery on orders above 50,000</p>
                  </div>
                </div>
                <div className="feat">
                  <div className="feat-img">
                    <img src="/assets/payment.svg" alt="swift" />
                  </div>
                  <div className="">
                    <h6>Secured payments </h6>
                    <p>We accept all major credit cards</p>
                  </div>
                </div>
                <div className="feat">
                  <div className="feat-img">
                    <img src="/assets/customer.svg" alt="swift" />
                  </div>
                  <div className="">
                    <h6>Customer service </h6>
                    <p>Customer service top notch</p>
                  </div>
                </div>
              </div>
            </div>
          </Wrapper2>
        </swiper-slide>
      </swiper-container>
    </>
  );
};

export default Banner;
