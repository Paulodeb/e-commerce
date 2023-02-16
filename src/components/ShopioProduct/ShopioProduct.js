import React, { useEffect, useState } from "react";
import "./ShopioProductsStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { imageData } from '.././Data/imageData'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ShopioProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(imageData.Display);
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div className="container-fulid">
      <div className=" shopio-container align-items-center justify-content-center">
        <Slider {...settings}>
          {products.map((productObj) => (
            <div key={productObj.id}>
              <div className=" m-2">
                <img
                  className="shopio-img"
                  src={productObj.cover}
                  alt="product"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ShopioProduct;
