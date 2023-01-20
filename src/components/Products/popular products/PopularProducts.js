import React, { lazy, Suspense } from 'react'
import './products.css'
const Products = lazy(() => import('./products'));


const PopularProducts = () => {
  return (
    <Suspense
    fallback={<div>Loading...</div>}>
        <Products/>
    </Suspense>
  )
}

export default PopularProducts