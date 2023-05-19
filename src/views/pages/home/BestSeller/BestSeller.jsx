import { FaArrowRight } from "react-icons/fa";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { Wrapper } from "./styles";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../../../components/Spinner/Spinner";

const BestSeller = () => {
  const [isLoading, setisLoading] = useState(true);
  const [page, setpage] = useState(1);
  const [products, setproducts] = useState();
  useEffect(() => {
    axios
      .get(`https://onibata.loftywebtech.com/products.php?page=${page}`)
      .then((response) => {
        setproducts(response.data.message.products);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false);
      })
      .finally(() => {
        setisLoading(false);
      });
  }, []);
  return (
    <Wrapper>
      <div className="best-seller">
        <div className="title">
          <h3>Best Seller</h3>
        </div>
        {products ? (
          <div className="">
            {isLoading ? (
              <Spinner />
            ) : (
              <div className="products">
                {products.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="link">All products are unavailable</div>
        )}
        <div className="link">
          <Link to="/products">See More </Link>
          <FaArrowRight className="icon" />
        </div>
      </div>
    </Wrapper>
  );
};

export default BestSeller;
