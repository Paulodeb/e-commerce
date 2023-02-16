import React, { useEffect, useState } from "react";
import Timer from "./Timer";
import "./DealsStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imageData } from '.././Data/imageData'
import Rating from "../PopularProducts/Rating";

const Deals = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(imageData.Deals);
  }, []);

  const NextArrow = ({ onClick }) => (
    <RiArrowRightSLine className="nextArrow" onClick={onClick} />
  );

  const PrevArrow = ({ onClick }) => (
    <RiArrowLeftSLine className="prevArrow" onClick={onClick} />
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
        breakpoint: 480,
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
      <div className=" d-flex flex-wrap justify-content-start py-5">
        <div className=" timer pt-4 mt-5 justify-content-start text-start">
          <Timer />
        </div>

        <div className="pe-2 slider-container ">
          <Slider {...settings}>
            {products.map((productObj) => (
              <div key={productObj.id} className=" ">
                <Card className="card">
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
                    <Card.Text className=" txt text-center fw-light text-muted ">
                      {productObj.description}
                    </Card.Text>

                    <div className=" d-flex justify-content-between">
                      <div className="  ">
                        <Rating rating={productObj.rating} />
                      </div>
                      <h3 className=" fs-6 pt-1 fw-bolder text-center">
                        ₹{productObj.price}
                      </h3>
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
