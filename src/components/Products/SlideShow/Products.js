import React, { useEffect, useState } from 'react'
import './SlideShow.css'

const Products = () => {
    const [products, setProducts] = useState([])
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(3)
    
    
    
    const getProducts =  () => {
        fetch(`https://api.escuelajs.co/api/v1/products/?categoryId=2`)
        .then((response) => response.json())
        .then((data) => setProducts(data))
    }
    
    useEffect(() => {
        getProducts()
    }, []);
        


const nextSlide = () => {
    
    if (end < products.length) {
        setEnd(end + 1)
        setStart(start + 1)
    }
}
const prevSlide = () => {
    
    if (start > 0) {
        setEnd(end - 1)
        setStart(start - 1)
    } 
}

  return (
    <div className='slideshows '>
        
        
        <div className='btn'>
        <div className='prev'
          onClick={prevSlide}> 
            <i className="arrow prv"></i>
           </div>
        <div className='next'
         onClick={nextSlide}> 
            <i className="arrow nxt"></i>
          </div>
        </div>
        
        <div className='imageRow'>
        
            {products && products.length > 0 && products.slice(start, end).map((productObj, index) => (
                <div key={productObj.id}>

                    <img className='image' src={productObj.images} alt="product" />         
                           
                    
                </div>
            )
            )}

           
        </div>
    </div>
  )
}

export default Products