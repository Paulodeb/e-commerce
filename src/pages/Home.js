import React from 'react'
import Header from '../components/Header/Header';
import Deals from '../components/Deals/Deals';
import  FeaturedProducts  from '../components/FeaturedProducts/FeaturedProducts';
import Footer from '../components/Footer/Footer';

import PopularProducts from '../components/PopularProducts/PopularProducts';
import ShopioProduct from '../components/ShopioProduct/ShopioProduct';
import SlideShow from '../components/SlideShow/SlideShow';

const Home = () => {
  return (
    <div>
        <Header/>
    <SlideShow/>
         <PopularProducts/>
         <FeaturedProducts/>
         <Deals/>
         <ShopioProduct/>
         <Footer/>

    </div>
  )
}

export default Home