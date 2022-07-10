import { Wrapper } from "./styles";

const CollectionCard = () => {
    return ( 
        <Wrapper>
            <div className="collection-card">
                <div className="product-img">
                    <img src="/assets/collection1.png" alt="" />
                </div>
                <div className="">
                    <p className="product">Black Loafers</p>
                    <h6 className="price">N25,0000</h6>
                   <span className="cart">
                   <p className="slash-price">N50, 0000</p>
                   <button className="discount">
                    Add to Cart
                </button>
                   </span>
                  
                </div>
            </div>
        </Wrapper>
     );
}
 
export default CollectionCard;