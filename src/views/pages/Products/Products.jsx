import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import MainLayout from "../../components/Layout/MainLayout";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Wrapper } from "./styles";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner/Spinner";

const Products = () => {
  const [isLoading, setisLoading] = useState(true);
  const [isLoadingShoe, setisLoadingShoe] = useState(true);
  const [isLoadingSandal, setisLoadingSandal] = useState(true);
  const [isLoadingSlippers, setisLoadingSlippers] = useState(true);
  const [isLoadingFemaleShoe, setisLoadingFemaleShoe] = useState(true);
  const [isLoadingBelts, setisLoadingBelts] = useState(true);
  const [currentShoePage, setCurrentShoePage] = useState(1);
  const [currentSandalsPage, setCurrentSandalsPage] = useState(1);
  const [currentSlippersPage, setCurrentSlippersPage] = useState(1);
  const [currentBeltsPage, setCurrentBeltsPage] = useState(1);
  const [currentFemaleShoesPage, setCurrentFemaleShoesPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const pageLimit = 5;
  const dataLimit = 10;
  const [sandals, setsandals] = useState();
  const [shoes, setshoes] = useState();
  const [belts, setbelts] = useState();
  const [fshoes, setfshoes] = useState();
  const [slippers, setslippers] = useState();

  const getShoe = async () => {
    setisLoadingShoe(true);

    try {
      const res = await axios.get(
        `https://onibata.loftywebtech.com/products.php?page=${currentShoePage}&category=male-shoes`
      );
      setshoes(res.data);
      setisLoadingShoe(false);
    } catch (err) {
      console.log(err);
      setisLoadingShoe(false);
    }
  };

  const getSandals = async () => {
    setisLoadingSandal(true);

    try {
      const resSandal = await axios.get(
        `https://onibata.loftywebtech.com/products.php?page=${currentSandalsPage}&category=sandals`
      );
      setsandals(resSandal.data);
      setisLoadingSandal(false);
    } catch (err) {
      console.log(err);
      setisLoadingSandal(false);
    }
  };

  const getSlippers = async () => {
    setisLoadingSlippers(true);

    try {
      const resSlipper = await axios.get(
        `https://onibata.loftywebtech.com/products.php?page=${currentSlippersPage}&category=slippers`
      );
      setslippers(resSlipper.data);
      setisLoadingSlippers(false);
    } catch (err) {
      console.log(err);
      setisLoadingSlippers(false);
    }
  };
  const getBelts = async () => {
    setisLoadingBelts(true);

    try {
      const resBelt = await axios.get(
        `https://onibata.loftywebtech.com/products.php?page=${currentBeltsPage}&category=belts`
      );
      setbelts(resBelt.data);
      setisLoadingBelts(false);
    } catch (err) {
      console.log(err);
      setisLoadingBelts(false);
    }
  };
  const getFemaleShoes = async () => {
    setisLoadingFemaleShoe(true);

    try {
      const resBelt = await axios.get(
        `https://onibata.loftywebtech.com/products.php?page=${currentFemaleShoesPage}&category=female-shoes`
      );
      setfshoes(resBelt.data);
      setisLoadingFemaleShoe(false);
    } catch (err) {
      console.log(err);
      setisLoadingFemaleShoe(false);
    }
  };

  useEffect(() => {
    getShoe();
  }, [currentShoePage]);

  useEffect(() => {
    getSandals();
  }, [currentSandalsPage]);

  useEffect(() => {
    getSlippers();
  }, [currentSlippersPage]);
  useEffect(() => {
    getBelts();
  }, [currentBeltsPage]);
  useEffect(() => {
    getFemaleShoes();
  }, [currentFemaleShoesPage]);

  const pages = Math.ceil(shoes?.message.total_products / dataLimit);
  const sandalsPages = Math.ceil(sandals?.message.total_products / dataLimit);
  const slippersPages = Math.ceil(slippers?.message.total_products / dataLimit);
  const beltsPages = Math.ceil(belts?.message.total_products / dataLimit);
  const FemaleShoePages = Math.ceil(fshoes?.message.total_products / dataLimit);

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
    setCurrentSlippersPage((currentSlippersPage) => currentSlippersPage + 1);
  }
  function goToPreviousSlippersPage() {
    setCurrentSlippersPage((currentSlippersPage) => currentSlippersPage - 1);
  }
  function goToNextBeltsPage() {
    setCurrentBeltsPage((currentBeltsPage) => currentBeltsPage + 1);
  }
  function goToPreviousBeltsPage() {
    setCurrentBeltsPage((currentBeltsPage) => currentBeltsPage - 1);
  }
  function goToNextFemaleShoesPage() {
    setCurrentFemaleShoesPage(
      (currentFemaleShoesPage) => currentFemaleShoesPage + 1
    );
  }
  function goToPreviousFemaleShoesPage() {
    setCurrentFemaleShoesPage(
      (currentFemaleShoesPage) => currentFemaleShoesPage - 1
    );
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
  function changeFemalePage(event) {
    const pageFemaleShoeNumber = Number(event.target.textContent);
    setCurrentPage(pageFemaleShoeNumber);
  }
  function changeBeltPage(event) {
    const pageBeltNumber = Number(event.target.textContent);
    setCurrentPage(pageBeltNumber);
  }

  const getPaginationGroup = () => {
    let start = Math.floor((currentShoePage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };
  const getSandalPaginationGroup = () => {
    let startSandal =
      Math.floor((currentSandalsPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => startSandal + idx + 1);
  };
  const getSlippersPaginationGroup = () => {
    let startSlipper = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => startSlipper + idx + 1);
  };
  const getBeltsPaginationGroup = () => {
    let startBelt = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => startBelt + idx + 1);
  };
  const getFemaleShoesPaginationGroup = () => {
    let startFemaleShoe = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit)
      .fill()
      .map((_, idx) => startFemaleShoe + idx + 1);
  };
  return (
    <MainLayout>
      <Wrapper>
        <div className="products-container">
          <div className="category-product">
            <div>
              <h3>Male Shoes</h3>
            </div>
            {isLoadingShoe ? (
              <Spinner />
            ) : (
              <div className="products">
                {shoes?.message.products.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </div>
            )}
            <div className="pagination">
              {/* previous button */}
              <button
                onClick={goToPreviousPage}
                className={`prev ${currentShoePage === 1 ? "disabled" : ""}`}
              >
                <MdOutlineArrowBackIos />
              </button>

              {/* show page numbers */}
              {getPaginationGroup().map(
                (item, index) =>
                  item <= pages && (
                    <button
                      key={index}
                      onClick={changePage}
                      className={`paginationItem ${
                        currentShoePage === pages ? "active" : null
                      }`}
                    >
                      <span
                        className={`${
                          item === currentShoePage ? "span-color" : null
                        }`}
                      >
                        {" "}
                        {item}{" "}
                      </span>
                    </button>
                  )
              )}

              {/* next button */}
              <button
                onClick={goToNextPage}
                className={`next ${
                  currentShoePage === pages ? "disabled" : ""
                }`}
              >
                <MdOutlineArrowForwardIos />
              </button>
            </div>
          </div>
          <div className="category-product">
            <div>
              <h3>Female shoes</h3>
            </div>
            {isLoadingFemaleShoe ? (
              <Spinner />
            ) : (
              <div className="products">
                {fshoes?.message.products.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </div>
            )}
            <div className="pagination">
              {/* previous button */}
              <button
                onClick={goToPreviousFemaleShoesPage}
                className={`prev ${currentPage === 1 ? "disabled" : ""}`}
              >
                <MdOutlineArrowBackIos />
              </button>

              {/* show page numbers */}
              {getFemaleShoesPaginationGroup().map(
                (item, index) =>
                  item <= FemaleShoePages && (
                    <button
                      key={index}
                      onClick={changeFemalePage}
                      className={`paginationItem ${
                        currentPage === FemaleShoePages ? "active" : null
                      }`}
                    >
                      <span
                        className={`${
                          item === currentPage ? "span-color" : null
                        }`}
                      >
                        {" "}
                        {item}{" "}
                      </span>
                    </button>
                  )
              )}

              {/* next button */}
              <button
                onClick={goToNextFemaleShoesPage}
                className={`next ${
                  currentPage === FemaleShoePages ? "disabled" : ""
                }`}
              >
                <MdOutlineArrowForwardIos />
              </button>
            </div>
          </div>
          <div className="category-product">
            <div>
              <h3>Sandals</h3>
            </div>
            {isLoadingSandal ? (
              <Spinner />
            ) : (
              <div className="products">
                {sandals?.message.products.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </div>
            )}
            <div className="pagination">
              {/* previous button */}
              <button
                onClick={goToPreviousSandalsPage}
                className={`prev ${currentSandalsPage === 1 ? "disabled" : ""}`}
              >
                <MdOutlineArrowBackIos />
              </button>

              {/* show page numbers */}
              {getSandalPaginationGroup().map(
                (item, index) =>
                  item <= sandalsPages && (
                    <button
                      key={index}
                      onClick={changeSandalPage}
                      className={`paginationItem ${
                        currentSandalsPage === sandalsPages ? "active" : null
                      }`}
                    >
                      <span
                        className={`${
                          item === currentSandalsPage ? "span-color" : null
                        }`}
                      >
                        {" "}
                        {item}{" "}
                      </span>
                    </button>
                  )
              )}

              {/* next button */}
              <button
                onClick={goToNextSandalsPage}
                className={`next ${
                  currentSandalsPage === sandalsPages ? "disabled" : ""
                }`}
              >
                <MdOutlineArrowForwardIos />
              </button>
            </div>
          </div>
          <div className="category-product">
            <div>
              <h3>Slippers</h3>
            </div>
            {isLoadingSlippers ? (
              <Spinner />
            ) : (
              <div className="products">
                {slippers?.message.products.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </div>
            )}
            <div className="pagination">
              {/* previous button */}
              <button
                onClick={goToPreviousSlippersPage}
                className={`prev ${currentPage === 1 ? "disabled" : ""}`}
              >
                <MdOutlineArrowBackIos />
              </button>

              {/* show page numbers */}
              {getSlippersPaginationGroup().map(
                (item, index) =>
                  item <= slippersPages && (
                    <button
                      key={index}
                      onClick={changeSlipperPage}
                      className={`paginationItem ${
                        currentPage === slippersPages ? "active" : null
                      }`}
                    >
                      <span
                        className={`${
                          item === currentPage ? "span-color" : null
                        }`}
                      >
                        {" "}
                        {item}{" "}
                      </span>
                    </button>
                  )
              )}

              {/* next button */}
              <button
                onClick={goToNextSlippersPage}
                className={`next ${
                  currentPage === slippersPages ? "disabled" : ""
                }`}
              >
                <MdOutlineArrowForwardIos />
              </button>
            </div>
          </div>
          <div className="category-product">
            <div>
              <h3>Belts</h3>
            </div>
            {isLoadingBelts ? (
              <Spinner />
            ) : (
              <div className="products">
                {belts?.message.products.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </div>
            )}
            <div className="pagination">
              {/* previous button */}
              <button
                onClick={goToPreviousBeltsPage}
                className={`prev ${currentPage === 1 ? "disabled" : ""}`}
              >
                <MdOutlineArrowBackIos />
              </button>

              {/* show page numbers */}
              {getBeltsPaginationGroup().map(
                (item, index) =>
                  item <= beltsPages && (
                    <button
                      key={index}
                      onClick={changeBeltPage}
                      className={`paginationItem ${
                        currentPage === beltsPages ? "active" : null
                      }`}
                    >
                      <span
                        className={`${
                          item === currentPage ? "span-color" : null
                        }`}
                      >
                        {" "}
                        {item}{" "}
                      </span>
                    </button>
                  )
              )}

              {/* next button */}
              <button
                onClick={goToNextBeltsPage}
                className={`next ${
                  currentPage === beltsPages ? "disabled" : ""
                }`}
              >
                <MdOutlineArrowForwardIos />
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    </MainLayout>
  );
};

export default Products;
