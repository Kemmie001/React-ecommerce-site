import { FaArrowRight } from "react-icons/fa";
import CollectionCard from "../../../components/CollectionCard/CollectionCard";
import { Wrapper } from "./styles";

const MaleCollection = () => {
	return (
		<Wrapper>
			<div className="male-collection">
				<div className="advert">
					<p>
						Free shipping on selected orders: Get free shipping when you spend 50,000 on Onibata Mall
					</p>
				</div>
				<div className="title">
					<h3>Shop Male Footwear</h3>
				</div>
				<div className="products">
					<div className="spec-col">
						<div className="text-arrangement">
							<p>TOP COLLECTIONS </p>
							<h4>Up to 50% discount </h4>
						</div>
						<CollectionCard />
					</div>
					<div className=""></div>
				</div>
				<div className="link">
					<a href="">See More </a>
					<FaArrowRight className="icon" />
				</div>
			</div>
		</Wrapper>
	);
};

export default MaleCollection;
