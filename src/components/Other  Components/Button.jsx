import React from 'react'

function Button(props) {
  return (
    <div>
      <button className='px-3 py-2 bg-gradient-to-b from-green-500 to-green-600 rounded-md text-white md:mt-3 mt-2 hover:scale-105 hover:to-green-700 transition-all duration-300 cursor-pointer'>{props.content}</button>
    </div>
  )
}

export default Button;
