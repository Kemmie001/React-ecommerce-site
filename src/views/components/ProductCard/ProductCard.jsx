import { Wrapper } from "./styles";
import {FaCartPlus} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

const ProductCard = ({item}) => {

    const discount = item.regular_price - item.sale_price
    const discountPercent = 100 - (discount/item.regular_price * 100) 
    return ( 
        <Wrapper>
            <Link state={item} to={`/product-details/${item.id}`}>
            <div className="product-card">
                <span className="discount">
                    {discountPercent}%
                </span>
                <div className="product-img">
                    <img src={item.image} alt={item.name} />
                </div>
                <div className="">
                    <p className="product">{item.name}</p>
                    <h6 className="price">N{item.sale_price === null ? item.regular_price : item.sale_price}</h6>
                   <span className="cart">
                   <p className="slash-price">N {item.regular_price}</p>
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