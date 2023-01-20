import React, { useEffect, useState } from 'react'
import './Slide.css'
const Slider = () => {
    const [products, setProducts] = useState([])
    const [start ] = useState(0)
    const [end ] = useState(3)
    
    const getProducts =  () => {
        fetch(`https://api.escuelajs.co/api/v1/categories`)
        .then((response) => response.json())
        .then((data) => setProducts(data))
    }
    
    useEffect(() => {
        getProducts()
    }, []);

        
  return (
    <div className='slide-container'>
         
        <div className='pop-image'>
            {products && products.length > 0 && products.slice(start, end).map((productObj, index) => (
                <div key={productObj.id} className="slide-card" >

                    <img className='slide-img' src={productObj.image} alt="product" />         
                           
                    
                </div>
            )
            )}

        </div>
           
    </div>
  )
}

export default Slider;