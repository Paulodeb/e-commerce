import React, { useEffect, useState } from 'react'
import './ShopioProductsStyles.css'
import "bootstrap/dist/css/bootstrap.min.css"
import {Sliderdata} from "./Sliderdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ShopioProduct = () => {
    const [products, setProducts] = useState([])
    
    
    
    
    useEffect(() => {
        setProducts(Sliderdata)
    }, []);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        // centerMode: true,
        // centerPadding: "40px",
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        
          };
    

        
  return (
    <div className='container-fulid'>
         
        <div className=' align-items-center justify-content-center'
        style={{ width: "90%", margin: "2rem auto" }}
        >
            <Slider { ...settings} >
            {products.map((productObj, index) => (
                <div key={productObj.id} 
               
                className="" >
                <div className=' m-2'>

                   
                    <img className=''
                     style={{  
                        width: "100%",
                     height: "100%",
                     borderRadius: "10px",
                     objectFit: "cover" }}
                     src={productObj.cover} alt="product" />         
                           
                    
                </div>
                </div>
            )
            )}
            </Slider>
        </div>
           
    </div>
  )
}

export default ShopioProduct;