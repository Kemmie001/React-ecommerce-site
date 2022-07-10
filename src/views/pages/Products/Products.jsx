import { FaArrowRight } from "react-icons/fa";
import MainLayout from "../../components/Layout/MainLayout";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Wrapper } from "./styles";

const Products = () => {
    return ( 
        <MainLayout>
            <Wrapper>
            <div className="products-container">
            <div className="category-product">
                <div>
                <h3 >
                    Shoes(men)
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
            <div className="category-product">
                <div>
                <h3 >
                    Shoes(women)
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
            <div className="category-product">
                <div>
                <h3 >
                    Palm (men)
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
            </div>
        </Wrapper>
        </MainLayout>
     );
}
 
export default Products;