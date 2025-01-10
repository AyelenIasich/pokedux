import React from 'react'

function CardSkeleton() {
  return (
    <div className="bg-white w-56 h-60 rounded-lg shadow-md animate-pulse">
    <figure className="relative mb-2 w-full h-4/5 bg-gray-200 rounded-lg">
      <div className="absolute bottom-0 left-0 bg-gray-300 rounded-lg w-16 h-4 m-2"></div>
      <div className="absolute top-0 right-0 bg-gray-300 rounded-full h-6 w-6 m-2"></div>
    </figure>
    <div className="flex justify-between px-2 mt-2">
      <div className="bg-gray-200 h-4 w-full rounded"></div>
      {/* <div className="bg-gray-200 h-5 w-12 rounded"></div> */}
    </div>
  </div>
  )
}

export default CardSkeleton