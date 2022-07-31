import React, { useState } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import Banner from "./Banner/Banner";
import BestSeller from "./BestSeller/BestSeller";
import Blog from "./Blog/Blog";
import FemaleCollection from "./FemaleCollection/FemaleCollection";
import MaleCollection from "./MaleCollection/MaleCollection";
import Review from "./Reviews/Review";
import ProductData from "../../../data/product";

const HomePage = () => {
    const [product, setproduct] = useState(ProductData);
    return (
        <MainLayout>
        <Banner />
        <BestSeller product={product} />
        <MaleCollection />
        <FemaleCollection />
        <Blog />
        <Review />
        </MainLayout>
 
    );
}
 
export default HomePage;