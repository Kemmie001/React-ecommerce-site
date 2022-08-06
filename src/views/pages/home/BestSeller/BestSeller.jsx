import { FaArrowRight } from "react-icons/fa";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { Wrapper } from "./styles";
import { useState, useEffect } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

const BestSeller = () => {
    const [isLoading, setisLoading] = useState(true)
    const [page, setpage] = useState(1)
    const [products, setproducts] = useState()
    useEffect(() => {   
        axios
          .get(`https://loftywebtech.com/onibata/api/products?page=${page}`)
          .then(response => setproducts(response.data))
          .catch((err) => {
            console.log(err)
            setisLoading(false)
          })
          .finally(() => {
            setisLoading(false)
          })
      }, [products]);
    return (  
        <Wrapper>
            <div className="best-seller">
                <div className="title">
                <h3 >
                    Best Seller
                </h3>
                </div>
                {
            isLoading ? <p>loading</p> : 
                <div className="products">
                    {
                        products?.message.products.map((item) =>  <ProductCard key={item.id}  item={item}/>
                        )
                    }
                </div>
                }
                <div className="link">
                <Link to="/products">See More  </Link>
                <FaArrowRight className="icon"/>
                </div>
            </div>
        </Wrapper>
    );
}

export default BestSeller;