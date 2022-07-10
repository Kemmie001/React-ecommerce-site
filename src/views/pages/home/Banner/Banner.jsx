import { Content, Wrapper } from './styles';
const Banner = () => {
    return ( 
        <Wrapper>
            <div>
            <div className="banner">
                <div className="">
                <h2 className="banner-head">
                Nigeria-made Hand-Crafted Footwears That <span className="yellow">Command</span> Immediate Respect From Anyone and Boost Your <span className="yellow">
                Confidence </span> Anywhere You Go. 
                </h2>
                <p>
                Refined, Quality, and comfortable shoes guaranteed to last for years 
                </p>
                <button className='btn-primary'>
                    Shop now
                </button>
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
                        <h6>Customer service  </h6>
                        <p>Customer service top notch</p>
                    </div>
                </div>
            </div>
        </div>
        </Wrapper>
     );
}
 
export default Banner;