import React from 'react'
import Header from '../components/Header/Header';
import Deals from '../components/Deals/Deals';
import  FeaturedProducts  from '../components/FeaturedProducts/FeaturedProducts';
import Footer from '../components/Footer/Footer';
import PopularProducts from '../components/PopularProducts/PopularProducts';
import {PopularProductsdata} from '../components/PopularProducts/PopularProductsdata';
import ShopioProduct from '../components/ShopioProduct/ShopioProduct';
import SlideShow from '../components/SlideShow/SlideShow';
import { SlideShowdata } from '../components/SlideShow/SlideShowdata';

const Home = () => {

  return (
    <div>
    
        <Header products={ PopularProductsdata }/>
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