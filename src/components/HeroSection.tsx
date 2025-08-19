'use client'

import React from 'react'

function HeroSection() {
  return (
    <>
      <main className="relative h-[90.3vh] w-full overflow-hidden bg-black">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
          src="/CNC_Machine_Operations_Video.mp4"
        >
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10  flex flex-col h-full w-full">
          <h1
            className="
              text-center text-2xl md:text-3xl font-bold 
              leading-tight  
              bg-gradient-to-b from-white to-gray-100 
              bg-clip-text
              p-8 rounded-lg
              backdrop-blur-sm bg-white/5
              border border-white/10
              shadow-2xl shadow-black/20
              animate-float text-white
              w-3/5
              mx-auto
              mt-20
            "
          >
            Your Trusted Partner in Precision Manufacturing.
          </h1>
         
        </div>
      </main>
    </>
  )
}

export default HeroSection