import React, { useEffect, useState } from 'react'



const FeaturedProducts = () => {
    const [products, setProducts] = useState([])
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(5)
    
    
    const getProducts =  () => {
        fetch(`https://api.escuelajs.co/api/v1/products/?categoryId=3`)
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
    <div className='slideshows'>
     <div className='heading'>

        <div className='text-contain'>
            <h1 className='popular'>Featured Products</h1>
        </div>
        <div className='pop-btn'>
        <div className='pop-prev'
          onClick={prevSlide}> 
            <i className="arrow prv"></i>
           </div>
        <div className='pop-next'
         onClick={nextSlide}> 
            <i className="arrow nxt"></i>
          </div>
     </div>
        
        </div>
        
        
        <div className='pop-image'>
            {products && products.length > 0 && products.slice(start, end).map((productObj, index) => (
                <div key={productObj.id} className="card">

                    <img className='popular-img' src={productObj.images} alt="product" />         
                           
                    <div className='txt-container'>
                     <h1 className='text'>{productObj.title}</h1>
                    <p className='txt'>{productObj.description}</p> 

                    <div className='price'>
                        <div className='stars'>
                            <i className="star"></i>
                            <i className="star"></i>
                            <i className="star"></i>
                            <i className="star"></i>
                            <i className="star"></i>
                        </div>
                        <h1 className='price-txt'>${productObj.price}</h1>

                        </div>
                    </div>

                </div>
            )
            )}

        </div>
           
    </div>
  )
}

export default FeaturedProducts