import { FaArrowRight } from "react-icons/fa";
import CollectionCard from "../../../components/CollectionCard/FemaleCard";
import { Wrapper } from "./styles";

const FemaleCollection = () => {
  return (
    <Wrapper>
      <div className="male-collection">
        <div className="title">
          <h3>Shop Female Footwear</h3>
        </div>
        <div className="products">
          <div className="spec-col">
            <p>TOP COLLECTIONS 2022 </p>
            <h4>Up to 50% discount </h4>
            <CollectionCard />
          </div>
          <div className="">
            <CollectionCard />
            <CollectionCard />
          </div>
        </div>
        <div className="link">
          <a href="">See More </a>
          <FaArrowRight className="icon" />
        </div>
      </div>
    </Wrapper>
  );
};

export default FemaleCollection;
