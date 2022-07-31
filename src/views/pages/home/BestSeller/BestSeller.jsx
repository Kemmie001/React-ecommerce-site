import { FaArrowRight } from "react-icons/fa";
import ProductCard from "../../../components/ProductCard/ProductCard";
import PropTypes from 'prop-types';
import { Wrapper } from "./styles";

const BestSeller = ({product}) => {
  
    return (  
        <Wrapper>
            <div className="best-seller">
                <div className="title">
                <h3 >
                    Best Seller
                </h3>
                </div>
                <div className="products">
                    {
                        product.map((item) =>  <ProductCard key={item.id}  item={item}/>
                        )
                    }
                </div>
                <div className="link">
                <a href="">See More  </a>
                <FaArrowRight className="icon"/>
                </div>
            </div>
        </Wrapper>
    );
}

BestSeller.propTypes = {
    product: PropTypes.array
}
export default BestSeller;