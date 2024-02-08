import MainLayout from "../../components/Layout/MainLayout";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Wrapper } from "./styles";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, getTotals } from "../../../features/cartSlice";
// import {useNavigate} from 'react-router-dom'

const URL = process.env.REACT_APP_BASE_URL;
console.log(URL);

const ProductPage = () => {
  const location = useLocation();
  const [product, setproduct] = useState(location.state);

  const sizes = [39, 40, 41, 42, 43, 44, 45];
  const colors = ["brown", "black", "#E5D2C4"];
  const [sizePic, setsizePic] = useState(false);
  const [colorPick, setcolorPick] = useState(false);
  const discount = product.regular_price - product.sale_price;
  const discountPercent = 100 - (discount / product.regular_price) * 100;
  const pickSize = (size) => {
    setsizePic(size);
    const newProduct = { ...product };
    newProduct.size = size;
    setproduct(newProduct);
  };

  const dispatch = useDispatch();
  // const navigate = useNavigate()
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    dispatch(getTotals());
    // navigate('/cart')
  };
  return (
    <MainLayout>
      <Wrapper>
        <div className="product-page">
          <div className="page-detail" key={product.id}>
            <div className="images">
              <div className="big-img">
                <img src={`${URL}` + product.image} alt="" />
              </div>
              <div className="small-img">
                <div className="">
                  <img src={`${URL}` + product.image} alt="" />
                </div>
                <div className="">
                  <img src={`${URL}` + product.image} alt="" />
                </div>
              </div>
            </div>
            <div className="product-details">
              <h5 className="name">{product.name}</h5>
              <h6 className="price">
                N
                {product.sale_price === null
                  ? product.regular_price
                  : product.sale_price}
              </h6>
              <span className="slash-price">
                <p>N{product.regular_price}</p>
                <span className="discount">{discountPercent}% off</span>
              </span>
              <div className="story">
                <h4>Product Details</h4>
                <div dangerouslySetInnerHTML={{ __html: product.content }} />

                <div className="sizes">
                  {sizes.map((size, index) => (
                    <div
                      key={index}
                      onClick={() => pickSize(size)}
                      className={`size ${sizePic === size && "size-spec"}`}
                    >
                      Eur {size}
                    </div>
                  ))}
                </div>
                <div className="colors">
                  <p> Color: </p>
                  {colors.map((color, index) => (
                    <div
                      style={{ backgroundColor: `${color}` }}
                      key={index}
                      onClick={() => setcolorPick(color)}
                      className={`color ${colorPick === color && "size-spec"}`}
                    ></div>
                  ))}
                </div>
                <div className="">
                  <button
                    disabled={!product.size}
                    className="btn-primary"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="sug-product">
            <div>
              <h3>Related products</h3>
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
};

export default ProductPage;
