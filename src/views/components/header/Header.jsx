import React from "react";
import { Content, Wrapper } from './styles';
import Nav from '../nav/Nav'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { FaHouseUser } from "react-icons/fa";

const Header = () => {
    const {cartTotalQuantity} = useSelector(state => state.cart)
    const isAuthenticated = localStorage.getItem("onibata-user");
    const main = JSON.parse(isAuthenticated)
    return ( 
        <Wrapper>
            <Content>
            <div className="header">
            <div className="head-ad">
            {/* <marquee>Free delivery on Orders Above N25,000 anywhere in Nigeria </marquee> */}
                <h3>Free delivery on Orders Above N25,000 anywhere in Nigeria</h3>
                
{ (!main?.isLoggedIn) ?
  
  <div className="head-signin">
  <button>
      <Link style={{color:"white"}} to="/signin">Sign in</Link>
  </button>
  <button className="btn-primary"><Link style={{color:"#9E005D"}} to="/signup">Register</Link></button>
</div> :

            <span className="cart-icon">
                    <Link to='/my-profile'>
                        <FaHouseUser />
                    </Link>
                </span>
}
                
                <span className="cart-icon">
                    <Link to='/cart'>
                        <FiShoppingCart /><span className="num">{cartTotalQuantity}</span>
                    </Link>
                </span>
            </div>
           
            <Nav />
        </div>
            </Content>
        </Wrapper>
     );
}
 
export default Header;