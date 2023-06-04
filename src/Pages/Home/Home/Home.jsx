import React from 'react';
import Dentist from '../../../components/Dentist/Dentist';
import Feature from '../../../components/Feature/Feature';
import LatestBlog from '../../../components/LatestBlog/LatestBlog';
import About from '../About/About';
import Promo from '../Appoinment-promo/Promo';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Slick from '../Slick/Slick';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {

    return (
        <>
           <Banner />
           <Feature />
           <About />
           <Dentist />
           <Gallery />
           <Testimonial />
           <LatestBlog />
           <Promo />
           <Slick />
        </>
    );
};

export default Home;