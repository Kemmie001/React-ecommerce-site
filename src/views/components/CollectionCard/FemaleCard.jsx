import { Wrapper } from "./styles";

const CollectionCard = () => {
  return (
    <Wrapper>
      <div className="card-align">
        {footwear.map((f) => (
          <div className="collection-card" key={f.id}>
            <div className="product-img">
              <img src={f.img} alt="" />
            </div>
            <div className="">
              <p className="product">{f.name}</p>
              <h6 className="price">{f.price}</h6>
              <span className="cart">
                <p className="slash-price">{f.slash}</p>
                <button className="discount">Add to Cart</button>
              </span>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default CollectionCard;
