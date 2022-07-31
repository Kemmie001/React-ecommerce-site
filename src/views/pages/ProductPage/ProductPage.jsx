import { Link } from 'react-router-dom'
import { useState } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Wrapper } from "./styles";
import ProductData from "../../../data/product";
import { useParams } from 'react-router-dom';

const  ProductPage = () => {
    const  productId  = useParams()
    const [product, setproduct] = useState(ProductData);
    const [shoe, setShoe] = useState(product.filter(p => p.id == productId.id))
    const sizes = [39, 40, 41, 42, 43, 44, 45]
    const colors = ['brown', 'black', '#E5D2C4']
    const [sizePic, setsizePic] = useState(false)
    const [colorPick, setcolorPick] = useState(false)
    const discountPrice = shoe[0].price - (shoe[0].price * (shoe[0].discount/100))
    const [cart, setCart] = useState([])
    const addToCart = (item) =>{
        cart.push(item)
        console.log(cart)
    }
    return ( 
        <MainLayout>
            <Wrapper>
               
            <div className="product-page">
                {
                    shoe.map((item) => 
                    
                    <div className="page-detail" key={item.id}>
                <div className="images">
                    <div className="big-img">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="small-img">
                        <div className="">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="">
                            <img src={item.image} alt="" />
                        </div>
                    </div>
                </div>
                <div className="product-details">
                    <h5 className="name">
                        {item.name}
                    </h5>
                    <h6 className="price">N{discountPrice}</h6>
                    <span className="slash-price">
                        <p>N{item.price}</p>
                        <span className="discount">
                            {item.discount}% off
                        </span>
                    </span>
                    <div className="story">
                        <h4>Product Details</h4>
                        <p >
                        {item.detail}
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
                        <button className="btn-primary" onClick={() => addToCart(item)}>
                        Add to Cart
                        </button>
                        </div>
                    </div>
                </div>
                </div>)
                }
                

                <div className="sug-product">
                <div>
                <h3 >
                   Related products
                </h3>
                </div>
                {/* <div className="products">
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                </div> */}
</div>
            </div>
        </Wrapper>
        </MainLayout>
     );
}
 
export default  ProductPage;