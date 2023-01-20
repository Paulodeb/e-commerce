import React, { lazy, Suspense } from 'react'
import "./SlideShow.css";
const Products = lazy(() => import('./Products'));


const SlideShow = () => {
  return (
    <>
    <Suspense
    fallback={<div className='linespinner'>loading...</div>}>
        <Products/>
      </Suspense>
    </>
  )
}

export default SlideShow