import { Wrapper } from "./styles";
import {FaCartPlus} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

const ProductCard = ({item}) => {
    const discountPrice = item.price - (item.price * (item.discount/100))
    return ( 
        <Wrapper>
            <Link to={`/product-details/${item.id}`}>
            <div className="product-card">
                <span className="discount">
                    {item.discount}%
                </span>
                <div className="product-img">
                    <img src={item.image} alt="" />
                </div>
                <div className="">
                    <p className="product">{item.name}</p>
                    <h6 className="price">N{discountPrice}</h6>
                   <span className="cart">
                   <p className="slash-price">N{item.price}</p>
                   {/* <FaCartPlus /> */}
                   </span>
                </div>
            </div>
            </Link>
        </Wrapper>
     );
}
 
ProductCard.propTypes = {
	item: PropTypes.object.isRequired
}
export default ProductCard;