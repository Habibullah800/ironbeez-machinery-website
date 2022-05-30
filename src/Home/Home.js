import React from 'react';
import Footer from '../Share/Footer';
import Navbar from '../Share/Navbar';
import AboutSection from './AboutSection';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Details from './Details';
import Recommended from './Recommended';
import SocialLink from './SocialLink';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Details></Details>
            <Recommended></Recommended>
            <AboutSection></AboutSection>
            <SocialLink></SocialLink>
            <BusinessSummary></BusinessSummary>
            <Footer></Footer>

        </div>
    );
};

export default Home;