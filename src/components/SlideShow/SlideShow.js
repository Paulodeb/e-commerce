import React, { useEffect, useState } from "react";
import "./SlideShowStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlideShowdata } from "./SlideShowdata";

const SlideShow = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(SlideShowdata);
  }, []);

  const NextArrow = ({ onClick }) => (
    <RiArrowRightSLine
    className="nextArrow text-muted" 
      onClick={onClick}
      style={{
        fontSize: "36px",
        backgroundColor: "white",
        height: "40px",
        width: "40px",
        borderRadius: "50%",
        position: "absolute",
        top: "50%",
        right: "130px",
        boxShadow: "0px 0px 10px 0px rgb(54, 69, 79)",
        zIndex: "1"
      }}
    />
  );

  const PrevArrow = ({ onClick }) => (
    <RiArrowLeftSLine
      onClick={onClick}
      className='prevArrow text-muted'
      style={{
        backgroundColor: "white",
        height: "40px",
        width: "40px",
        borderRadius: "50%",
        fontSize: "36px",
        position: "absolute",
        top: "50%",
        left: "130px",
        zIndex: "1",
        boxShadow: "0px 0px 10px 0px rgb(54, 69, 79)"
      }}
    />
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
        breakpoint: 441,
        settings: {
          centerPadding: "0px",
          centerMode: false,
          arrows: false,
        }
      }
    ]
  };

  return (
    <div className="container-fluid ">
      <Slider {...settings}>
        {products.map((productObj, index) => (
          <div key={productObj.id} style={{ position: "relative" }}>
            <img
              className=" my-4 px-2"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src={productObj.cover}
              alt="product"
            />
            
            <div className="product-text container pe-5 m-5"
                
            >
              <h3  style={{  fontSize: '0.8rem'}}>{productObj.title}</h3>
              <p style={{  fontSize:'0.5rem' }} >{productObj.description}</p>
              <button className="px-3 " style={{  backgroundColor: 'white', border: 'none', fontSize:'0.3rem'  }}>
              <p className="justify-content-center mt-2 " style={{ color: "black", fontSize:'0.5rem' }} >Buy Now</p>
              </button>

            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlideShow;
