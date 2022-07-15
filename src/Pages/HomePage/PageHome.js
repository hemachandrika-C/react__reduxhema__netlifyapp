import React from 'react'
import "./PageHome.scss"
import SliderImage from "./../../Component/SliderComponent/storeSlider";
import DirectoryWomen from "./../../Component/DirectoryComponent/HomePageDirectory/WomenSectionDirectory/storeWomenhomePage";
import MiddleSection from "./../../Component/HomePageMiddleComponent/Middlesection1/StoreMiddleSection";
import DirectoryMen from "./../../Component/DirectoryComponent/HomePageDirectory/MenSectionDirectory/storeMensectionDirectory";
import Middleanothersection from "./../../Component/HomePageMiddleComponent/Middlesection2/StoreMiddleSection2";
import OtherSection from "./../../Component/DirectoryComponent/HomePageDirectory/OtherSectionDirectory/storeOtherSectionDirectory";
import Navigation from "./../Navigation/StoreNavigation";
import Footer from "./../Footer/storeFooter";

function PageHome() {
    return (
    <div>
    <Navigation />
    <SliderImage />
    <DirectoryWomen />
    <MiddleSection />
    <DirectoryMen />
    <Middleanothersection/>
    <OtherSection />
    <Footer />
    {/*
    <SliderImage />
    <DirectoryWomen />
    <MiddleSection />
    <DirectoryMen />
    <Middlesection1 />
    <OtherSection />
    <Footer />
    */}
    </div>
    )
    }
    export default PageHome



