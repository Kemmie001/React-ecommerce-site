
import MainLayout from "../../components/Layout/MainLayout";
import { Wrapper } from "./styles";

const AboutUs = () => {
    return ( 
        <MainLayout>
<Wrapper>
            
            <div className="about">
                <div className="about-title">
                    <h4>About Us</h4>
                </div>
                <div className="about-story">
                    <p>Onibata mall is a home of authentic handcraftyed footwares made by only expectional and credible Nigerian Footware brand.</p><br />
                    <p> Our product are mainly Nigerian - made Hand-Crafted Footwares that commands respect from anyone and boost your confidence any where you go</p><br />
                    <p>Buying shoes in Nigerian is very 89% risky .At Onibat Mall , our priority is to help you save time and aviod the uncertaintaies and risks that comes with buying shoes online </p>
                </div>
                <div className="about-title">
                    <h4>Paternerships </h4>
                    
                </div>
                <div className="partner">
                        <div className="partner-logo">
                            <img src="/assets/partner1.png" alt="" />
                        </div>
                        <div className="partner-logo">
                            <img src="/assets/partner2.png" alt="" />
                        </div>
                        <div className="partner-logo">
                            <img src="/assets/partner3.png" alt="" />
                        </div>
                        <div className="partner-logo">
                            <img src="/assets/partner4.png" alt="" />
                        </div>
                        <div className="partner-logo">
                            <img src="/assets/partner5.png" alt="" />
                        </div>
                        <div className="partner-logo">
                            <img src="/assets/partner6.png" alt="" />
                        </div>
                    </div>
            </div>
        </Wrapper>
        </MainLayout>
        
     );
}
 
export default AboutUs;