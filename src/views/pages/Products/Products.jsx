import { FaArrowRight } from "react-icons/fa";
import MainLayout from "../../components/Layout/MainLayout";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Wrapper } from "./styles";
import { useState, useEffect } from "react";
import axios from 'axios'

const Products = () => {
    const [isLoading, setisLoading] = useState(true)
    const [page, setpage] = useState(1)
    const [sandals, setsandals] = useState()
    const [shoes, setshoes] = useState()
    const [slippers, setslippers] = useState()
    useEffect(() => {   
        axios
          .get(`https://loftywebtech.com/onibata/api/products?page=${page}&category=sandals`)
          .then(response => setsandals(response.data))
          .catch((err) => {
            console.log(err)
            setisLoading(false)
          })
          .finally(() => {
            setisLoading(false)
          })
      }, [sandals]);
      useEffect(() => {   
        axios
          .get(`https://loftywebtech.com/onibata/api/products?page=${page}&category=shoes`)
          .then(response => setshoes(response.data))
          .catch((err) => {
            console.log(err)
            setisLoading(false)
          })
          .finally(() => {
            setisLoading(false)
          })
      }, [shoes]);
      useEffect(() => {   
        axios
          .get(`https://loftywebtech.com/onibata/api/products?page=${page}&category=slippers`)
          .then(response => setslippers(response.data))
          .catch((err) => {
            console.log(err)
            setisLoading(false)
          })
          .finally(() => {
            setisLoading(false)
          })
      }, [slippers]);
    return ( 
        <MainLayout>
            <Wrapper>
            <div className="products-container">
            <div className="category-product">
                <div>
                <h3 >
                    Shoes
                </h3>
                </div>
                {
            isLoading ? <p>loading</p> : 
                <div className="products">
                    {
                        shoes?.message.products.map((item) =>  <ProductCard key={item.id}  item={item}/>
                        )
                    }
                </div>
                }
                <div className="link">
                <a href="">See More  </a>
                <FaArrowRight className="icon"/>
                </div>
            </div>
            <div className="category-product">
                <div>
                <h3 >
                    Sandals
                </h3>
                </div>
                {
            isLoading ? <p>loading</p> : 
                <div className="products">
                    {
                        sandals?.message.products.map((item) =>  <ProductCard key={item.id}  item={item}/>
                        )
                    }
                </div>
                }
                <div className="link">
                <a href="">See More  </a>
                <FaArrowRight className="icon"/>
                </div>
            </div>
            <div className="category-product">
                <div>
                <h3 >
                    Slippers
                </h3>
                </div>
                {
            isLoading ? <p>loading</p> : 
                <div className="products">
                    {
                        slippers?.message.products.map((item) =>  <ProductCard key={item.id}  item={item}/>
                        )
                    }
                </div>
                }
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