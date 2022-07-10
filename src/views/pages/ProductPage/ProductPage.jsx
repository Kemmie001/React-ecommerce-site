import { Link } from 'react-router-dom'
import { useState } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Wrapper } from "./styles";

const  ProductPage = () => {
    const sizes = [39, 40, 41, 42, 43, 44, 45]
    const colors = ['brown', 'black', '#E5D2C4']
    const [sizePic, setsizePic] = useState(false)
    const [colorPick, setcolorPick] = useState(false)
    return ( 
        <MainLayout>
            <Wrapper>
            <div className="product-page">
                <div className="page-detail">
                <div className="images">
                    <div className="big-img">
                        <img src="/assets/product3.png" alt="" />
                    </div>
                    <div className="small-img">
                        <div className="">
                            <img src="/assets/product3.png" alt="" />
                        </div>
                        <div className="">
                            <img src="/assets/product3.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="product-details">
                    <h5 className="name">
                        Monkstrap shoe
                    </h5>
                    <h6 className="price">N20,000</h6>
                    <span className="slash-price">
                        <p>N10,000</p>
                        <span className="discount">
                            50% off
                        </span>
                    </span>
                    <div className="story">
                        <h4>Product Details</h4>
                        <p>
                        Brown leather shoe, which can be worn comfortably to any outing,one of our best product also ,it last long and makes you feel comfortable.
                        </p>
                        <div className="sizes">
                            {
                            sizes.map((size, index) => <div key={index} onClick={() => setsizePic(size)} className={`size ${sizePic === size && 'size-spec'}`}>
                                Eur {size}
                            </div> )
                            }
                        </div>
                        <div className="colors">
                           <p> Color: </p>
                            {
                            colors.map((color, index) => <div style={{backgroundColor: `${color}`}} key={index} onClick={() => setcolorPick(color)} className={`color ${colorPick === color && 'size-spec'}`}>
                            </div> )
                            }
                        </div>
                        <div className="">
                        <button className="btn-primary">
                        <Link style={{color:"#9E005D"}} to="/cart"> Add to Cart</Link> 
                        </button>
                        </div>
                    </div>
                </div>
                </div>

                <div className="sug-product">
                <div>
                <h3 >
                   Related products
                </h3>
                </div>
                <div className="products">
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                </div>
</div>
            </div>
        </Wrapper>
        </MainLayout>
     );
}
 
export default  ProductPage;