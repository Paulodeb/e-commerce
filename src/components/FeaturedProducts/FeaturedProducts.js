import React, { useEffect, useState } from "react";
import "./FeaturedProductsStyles.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Card from "react-bootstrap/Card";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FeaturedProductsdata} from "./FeaturedProductsdata";
import Rating from '../PopularProducts/Rating';


const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  
const slider = React.useRef(null);


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

 
  
    const getProducts = () => {
      setProducts(FeaturedProductsdata);
    }

  useEffect(() => {
    getProducts();
  }, []);

  const nextSlide = () => slider?.current?.slickNext()
  const prevSlide = () => slider?.current?.slickPrev()

  return (
    <div className="featured container-fluid px-5 py-2 my-2 ">
      <div className="d-flex my-4 justify-content-between">
        <div className="  ">
          <h1 className="h4 text-muted text-start">Featured Products</h1>
        </div>
        
        <div className=" col-2 ">
          <div className=" d-flex  justify-content-end">

          <div className="  me-2 next" onClick={prevSlide} >
            
              <button className=" border-0 text-muted text-center button bg-white">

            <RiArrowLeftSLine size={25}/>
              </button>
          </div>
          <div className=" me-3 " onClick={nextSlide}>  
              <button className=" border-0 button text-muted text-centerd bg-white">
            <RiArrowRightSLine size={25}/>
              </button>
          </div>
          </div>
        </div>
      </div>

      <div className=".slider-container">
            <Slider ref={slider} { ...settings}>

        {
          products.map((productObj, index) => {
          return(
            <div key={productObj.id} className=' ' >
            

              <Card className=" card border-0 justify-content-between">
              <Card.Img variant="top"
                className=" img  mt-1 pt-3 "
                src={productObj.cover}
                alt="product"
              />

              <Card.Body className=" rounded-0  ">
                <Card.Title className=" fs-6 text-center">{productObj.title}</Card.Title>
                <Card.Text className=" text-center text-muted fw-light text">
                      {productObj.description.substring(0, 45)}
                    </Card.Text>

                    <div className=" d-flex  justify-content-between">
                      <div>

                      <Rating rating={productObj.rating}  />
                      </div>
                     
                      <h3 className=" fs-6 pt-1 fw-bolder text-center">₹{productObj.price}</h3>
                      </div>

              </Card.Body>
              </Card>
           
            </div>
          )
        })}
     
      
      </Slider>
      </div>
    </div>
  );
};

export default FeaturedProducts;
