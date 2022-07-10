import { FaArrowRight } from "react-icons/fa";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { Wrapper } from "./styles";

const BestSeller = () => {
    return (  
        <Wrapper>
            <div className="best-seller">
                <div className="title">
                <h3 >
                    Best Seller
                </h3>
                </div>
                <div className="products">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
                <div className="link">
                <a href="">See More  </a>
                <FaArrowRight className="icon"/>
                </div>
            </div>
        </Wrapper>
    );
}
 
export default BestSeller;