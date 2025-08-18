import React from 'react'

function Heading(props) {
  return (
    <div className='w-fit mx-auto'>
        <h2 className='text-center text-zinc-900 font-bold md:text-4xl text-3xl'><span className='h-1 text-green-500'>{props.highlight}</span> {props.heading}</h2>
        <div className='md:w-30 w-20 h-1 bg-green-500 md:mt-4 mt-2 ml-auto'></div>
    </div>
           
  )
}

export default Heading
