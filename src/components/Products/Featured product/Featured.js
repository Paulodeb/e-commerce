import React, { lazy, Suspense } from 'react'

const FeaturedProducts = lazy(() => import('./FeatuedProducts'));


const Featured = () => {
  return (
    <>
    <Suspense
      fallback={<div className='linespinner'>loading...</div>}>
    <FeaturedProducts/>
    </Suspense>
    </>
  )
}

export default Featured