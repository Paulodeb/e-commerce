import React, { lazy, Suspense } from 'react'
import './Slide.css'
const Slider = lazy(() => import('./Slider'));


const Slide = () => {
  return (
    <Suspense
      fallback={<div>Loading...</div>}>
        <Slider/>
    </Suspense>
  )
}

export default Slide