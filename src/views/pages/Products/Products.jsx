import {MdOutlineArrowBackIos, MdOutlineArrowForwardIos} from "react-icons/md"
import MainLayout from "../../components/Layout/MainLayout";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Wrapper } from "./styles";
import { useState, useEffect } from "react";
import axios from 'axios'
import Spinner from "../../components/Spinner/Spinner";

const Products = () => {

    const [isLoading, setisLoading] = useState(true)
    const [isLoadingShoe, setisLoadingShoe] = useState(true)
    const [isLoadingSandal, setisLoadingSandal] = useState(true)
    const [currentShoePage, setCurrentShoePage] = useState(1)
    const [currentSandalsPage, setCurrentSandalsPage] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)
    const pageLimit = 5
    const dataLimit = 10  
    const [sandals, setsandals] = useState()
    const [shoes, setshoes] = useState()
    const [slippers, setslippers] = useState()

      const getShoe = async () => {
        setisLoadingShoe(true)

          try {
            const res = await axios.get(`https://loftywebtech.com/onibata/api/products?page=${currentShoePage}&category=shoes`)
            setshoes(res.data)
            setisLoadingShoe(false)
          } catch (err) {
            console.log(err)
            setisLoadingShoe(false)
          }
      }

      const getSandals = async () => {
        setisLoadingSandal(true)

          try {
            const resSandal = await axios.get(`https://loftywebtech.com/onibata/api/products?page=${currentSandalsPage}&category=sandals`)
            setsandals(resSandal.data)
            setisLoadingSandal(false)
          } catch (err) {
            console.log(err)
            setisLoadingSandal(false)
          }
      }

      const getSlippers = async () => {
        setisLoading(true)

          try {
            const resSlipper = await axios.get(`https://loftywebtech.com/onibata/api/products?page=${currentSandalsPage}&category=slippers`)
            setslippers(resSlipper.data)
            setisLoading(false)
          } catch (err) {
            console.log(err)
            setisLoading(false)
          }
      }
      

      useEffect(() => {   
        getShoe()
      }, [currentShoePage]);

      useEffect(() => {   
        getSandals()
      }, [currentSandalsPage]);

      useEffect(() => {   
        getSlippers()
      }, [currentPage]);

    const pages = Math.ceil(shoes?.message.total_products/ dataLimit)
    const sandalsPages = Math.ceil(sandals?.message.total_products/ dataLimit)
    const slippersPages = Math.ceil(slippers?.message.total_products/ dataLimit)

    function goToNextPage() {
        setCurrentShoePage((currentShoePage) => currentShoePage + 1);
      }
    function goToPreviousPage() {
        setCurrentShoePage((currentShoePage) => currentShoePage - 1);
      }
      function goToNextSandalsPage() {
        setCurrentSandalsPage((currentSandalsPage) => currentSandalsPage + 1);
      }
      function goToPreviousSandalsPage() {
        setCurrentSandalsPage((currentSandalsPage) => currentSandalsPage - 1);
      }
      function goToNextSlippersPage() {
        setCurrentPage((currentSlippersPage) => currentSlippersPage + 1);
      }
      function goToPreviousSlippersPage() {
        setCurrentPage((currentSlippersPage) => currentSlippersPage - 1);
      }


     
  
      function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentShoePage(pageNumber);
      }
      function changeSandalPage(event) {
        const pageSandalNumber = Number(event.target.textContent);
        setCurrentSandalsPage(pageSandalNumber);
      }
      function changeSlipperPage(event) {
        const pageSlipperNumber = Number(event.target.textContent);
        setCurrentPage(pageSlipperNumber);
      }
    
      const getPaginationGroup = () => {
        let start = Math.floor((currentShoePage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
        
      };
      const getSandalPaginationGroup = () => {
        let startSandal = Math.floor((currentSandalsPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => startSandal + idx + 1);
        
      };
      const getSlippersPaginationGroup = () => {
        let startSlipper = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => startSlipper + idx + 1);
      }
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
            isLoadingShoe ? <Spinner/> : 
                <div className="products">
                    {
                        shoes?.message.products.map((item) =>  <ProductCard key={item.id}  item={item}/>
                        )
                    }
                </div>
                }
                <div className="pagination">
                    {/* previous button */}
                    <button
                        onClick={goToPreviousPage}
                        className={`prev ${currentShoePage === 1 ? 'disabled' : ''}`}
                    >
                       <MdOutlineArrowBackIos />
                    </button>
                    
                    {/* show page numbers */}
                    {getPaginationGroup().map((item, index) => (
                        item <= pages && <button
                        key={index}
                        onClick={changePage}
                        className={`paginationItem ${currentShoePage === pages ? 'active' : null}`}
                        >
                        <span className={`${item === currentShoePage ? 'span-color' : null}`}> {item} </span>
                        </button>
                    ))}

                    {/* next button */}
                    <button
                        onClick={goToNextPage}
                        className={`next ${currentShoePage === pages ? 'disabled' : ''}`}
                    >
                        <MdOutlineArrowForwardIos />
                    </button>
                </div>
            </div>
            <div className="category-product">
                <div>
                <h3 >
                    Sandals
                </h3>
                </div>
                {
            isLoadingSandal ? <Spinner/>  : 
                <div className="products">
                    {
                        sandals?.message.products.map((item) =>  <ProductCard key={item.id}  item={item}/>
                        )
                    }
                </div>
                }
                <div className="pagination">
                    {/* previous button */}
                    <button
                        onClick={goToPreviousSandalsPage}
                        className={`prev ${currentSandalsPage === 1 ? 'disabled' : ''}`}
                    >
                       <MdOutlineArrowBackIos />
                    </button>
                    
                    {/* show page numbers */}
                    {getSandalPaginationGroup().map((item, index) => (
                        item <= sandalsPages && <button
                        key={index}
                        onClick={changeSandalPage}
                        className={`paginationItem ${currentSandalsPage === sandalsPages ? 'active' : null}`}
                        >
                        <span className={`${item === currentSandalsPage ? 'span-color' : null}`}> {item} </span>
                        </button>
                    ))}

                    {/* next button */}
                    <button
                        onClick={goToNextSandalsPage}
                        className={`next ${currentSandalsPage === sandalsPages ? 'disabled' : ''}`}
                    >
                        <MdOutlineArrowForwardIos />
                    </button>
                </div>
            </div>
            <div className="category-product">
                <div>
                <h3 >
                    Slippers
                </h3>
                </div>
                {
            isLoading ? <Spinner/>  : 
                <div className="products">
                    {
                        slippers?.message.products.map((item) =>  <ProductCard key={item.id}  item={item}/>
                        )
                    }
                </div>
                }
               <div className="pagination">
                    {/* previous button */}
                    <button
                        onClick={goToPreviousSlippersPage}
                        className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
                    >
                       <MdOutlineArrowBackIos />
                    </button>
                    
                    {/* show page numbers */}
                    {
                    getSlippersPaginationGroup().map((item, index) => (
                        item <= slippersPages && <button
                        key={index}
                        onClick={changeSlipperPage}
                        className={`paginationItem ${currentPage === slippersPages ? 'active' : null}`}
                        >
                        <span className={`${item === currentPage ? 'span-color' : null}`}> {item} </span>
                        </button>
                    ))
                    }

                    {/* next button */}
                    <button
                        onClick={goToNextSlippersPage}
                        className={`next ${currentPage === slippersPages ? 'disabled' : ''}`}
                    >
                        <MdOutlineArrowForwardIos />
                    </button>
                </div>
            </div>
            </div>
        </Wrapper>
        </MainLayout>
     );
}
 
export default Products;