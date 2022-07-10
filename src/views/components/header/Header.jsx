import React from "react";
import { Content, Wrapper } from './styles';
import Nav from '../nav/Nav'
import { Link } from 'react-router-dom'

const Header = () => {
    return ( 
        <Wrapper>
            <Content>
            <div className="header">
            <div className="head-ad">
            <marquee>Free delivery on Orders Above N25,000 anywhere in Nigeria </marquee>
                <h3>Free delivery on Orders Above N25,000 anywhere in Nigeria</h3>
                <div className="head-signin">
                    <button>
                        <Link style={{color:"white"}} to="/signin">Sign in</Link>
                    </button>
                    <button className="btn-primary"><Link style={{color:"#9E005D"}} to="/signup">Register</Link></button>
                </div>
            </div>
           
            <Nav />
        </div>
            </Content>
        </Wrapper>
     );
}
 
export default Header;