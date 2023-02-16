import React, { useEffect, useState } from "react";
import "./SlideShowStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imageData } from '.././Data/imageData'


const SlideShow = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(imageData.SlideShow);
  }, []);

  const NextArrow = ({ onClick }) => (
    <RiArrowRightSLine className="slideNext text-muted" onClick={onClick} />
  );

  const PrevArrow = ({ onClick }) => (
    <RiArrowLeftSLine onClick={onClick} className="slidePrev text-muted" />
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: "130px",
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          centerPadding: "0px",
          centerMode: false,
          dots: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 6000,
          pauseOnHover: true
        }
      }
    ]
  };

  return (
    <div className="container-fluid ">
      <Slider {...settings}>
        {products.map((productObj, index) => (
          <div key={productObj.id}>
            <img
              className=" my-4 slide-img px-2"
              src={productObj.cover}
              alt="product"
            />

            <div className="product-text container pe-5 m-5">
              <h3>{productObj.title}</h3>
              <p>{productObj.description}</p>
              <button className="px-3 py-1">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlideShow;
