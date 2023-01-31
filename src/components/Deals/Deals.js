import React, { useEffect, useState } from "react";
import Timer from "./Timer";
import "./DealsStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Dealsdata } from "./Dealsdata";
import Rating from "../PopularProducts/Rating";

const Deals = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(Dealsdata);
  }, []);

 
  

  const NextArrow = ({ onClick }) => (
    <RiArrowRightSLine
      onClick={onClick}
      style={{
        fontSize: "36px",
        backgroundColor: "white",
        height: "40px",
        width: "40px",
        borderRadius: "50%",
        position: "absolute",
        top: "50%",
        right: "10px",
        boxShadow: "0px 0px 10px 0px rgb(54, 69, 79)",
        zIndex: "1"
      }}
    />
  );

  const PrevArrow = ({ onClick }) => (
    <RiArrowLeftSLine
      onClick={onClick}
      style={{
        backgroundColor: "white",
        height: "40px",
        width: "40px",
        borderRadius: "50%",
        fontSize: "36px",
        position: "absolute",
        top: "50%",
        left: "-20px",
        zIndex: "1",
        boxShadow: "0px 0px 10px 0px rgb(54, 69, 79)",
      }}
    />
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          
          centerMode: true,
          centerPadding: "0px",
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className="container-fluid background">
      <div className=" row justify-content-start py-5">
        <div
         style={{ width: '20%', margin: '0 auto' }}
         className="pt-4 mt-5 justify-content-center"
        >
          <Timer />
        </div>

        <div 
        style={{ width: '80%', margin: '0 auto' }}
        className="pe-2 "
        >
          <Slider {...settings}>
            {products.map((productObj, index) => (
              <div key={productObj.id} className=" ">
                <Card style={{ width: "15rem", height: "20rem", border: "none" }}>
                  <Card.Img
                    variant="top"
                    className="img pt-3"
                    src={productObj.cover}
                    alt="product"
                  />

                  <Card.Body className=" rounded-0 ">
                    <Card.Title className=" fs-6 text-center">
                      {productObj.title}
                    </Card.Title>
                    <Card.Text className=" text-center fw-light text-muted " style={{ width: "11rem", height: '12vh', fontSize: '0.9em'  }}>
                      {productObj.description}
                    </Card.Text>

                    <div className=" d-flex pb-3 justify-content-between">
                      <div className="  ">
                        <Rating rating={productObj.rating} />
                      </div>
                      <h3 className=" fs-6 pt-1 fw-bolder text-center">₹{productObj.price}</h3>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Deals;
