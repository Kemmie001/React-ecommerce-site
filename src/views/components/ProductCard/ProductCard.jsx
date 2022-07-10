import { Wrapper } from "./styles";
import {FaCartPlus} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ProductCard = () => {
    return ( 
        <Wrapper>
            <Link to="/product-details">
            <div className="product-card">
                <span className="discount">
                    50%
                </span>
                <div className="product-img">
                    <img src="/assets/product1.png" alt="" />
                </div>
                <div className="">
                    <p className="product">Brown Leather palm</p>
                    <h6 className="price">N40,0000</h6>
                   <span className="cart">
                   <p className="slash-price">N40,0000</p>
                   <FaCartPlus />
                   </span>
                </div>
            </div></Link>
        </Wrapper>
     );
}
 
export default ProductCard;