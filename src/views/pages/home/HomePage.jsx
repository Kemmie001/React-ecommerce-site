import React from "react";
import MainLayout from "../../components/Layout/MainLayout";
import Banner from "./Banner/Banner";
import BestSeller from "./BestSeller/BestSeller";
import Blog from "./Blog/Blog";
import FemaleCollection from "./FemaleCollection/FemaleCollection";
import MaleCollection from "./MaleCollection/MaleCollection";
import Review from "./Reviews/Review";


const HomePage = () => {
    
    return (
        <MainLayout>
        <Banner />
        <BestSeller />
        <MaleCollection />
        <FemaleCollection />
        <Blog />
        <Review />
        </MainLayout>
 
    );
}
 
export default HomePage;