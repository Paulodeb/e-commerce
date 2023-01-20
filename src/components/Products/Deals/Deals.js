import React, { lazy, Suspense } from 'react';
import './Deals.css';
const DealsProduct = lazy(() => import('./DealsProduct'));

const Deals = () => {
  return (
    <>
    <Suspense
      fallback ={<div className='linespiner'>Loading...</div>}
    >

    <DealsProduct/>
    </Suspense>
    </>
  )
}

export default Deals