import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Deals from "../components/Deals/Deals";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import Footer from "../components/Footer/Footer";
import PopularProducts from "../components/PopularProducts/PopularProducts";
import ShopioProduct from "../components/ShopioProduct/ShopioProduct";
import SlideShow from "../components/SlideShow/SlideShow";
import { imageData } from "../components/Data/imageData";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(
      imageData.Deals,
      imageData.Display,
      imageData.SlideShow,
      imageData.featuredProducts,
      imageData.popularProducts
    );
  }, []);

  return (
    <div>
      <Header products={products} />
      <SlideShow />
      <PopularProducts />
      <FeaturedProducts />
      <Deals />
      <ShopioProduct />
      <Footer />
    </div>
  );
};

export default Home;
