
import NextTopLoader from 'nextjs-toploader'
import React from 'react'

export default function TopLoader() {
  return (
    <>
      <NextTopLoader
        color="#FCFCFC"
        initialPosition={0.08}
        crawlSpeed={100}
        height={3}
        crawl={true}
        showSpinner={false}
        easing="ease"
        speed={500}
        shadow="0 0 10px #2299DD,0 0 5px #2299DD"
      />
    </>
  )
}