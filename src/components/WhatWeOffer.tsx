'use client'

import React from 'react'
import { FeaturesSectionWithHoverEffects } from './feature-section-with-hover-effects'

function WhatWeOffer() {
    return (
        <div className="min-h-screen w-full">
            {/* <h1 className='flex justify-center text-4xl mt-10 font-semibold'>What we Offer</h1> */}
            {/* <div className="absolute top-0 left-0 w-full"> */}
                <FeaturesSectionWithHoverEffects />
            {/* </div> */}
        </div> 
  )
}

export default WhatWeOffer