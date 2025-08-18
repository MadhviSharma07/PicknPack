import React from 'react'

function Banner({title, image}) {
  return (
    <div className={`w-full h-100 bg-cover bg-center  flex justify-center items-center mt-10 relative`} 
    style={{
      backgroundImage: `url(${image})`
    }}>
      <h3 className='text-7xl p-2 text-zinc-900 rounded-md font-bold z-10 bg-white'>{title}</h3>
      <div className='bg-black/50 absolute inset-0'>
      </div>
    </div>
  )
}

export default Banner
