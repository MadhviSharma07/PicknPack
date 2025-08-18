import React, { useContext } from 'react'
import { FaHeart , FaPlus} from 'react-icons/fa'
import Button from '../Other  Components/Button'
import { GroceryContext } from '../Context/GroceryContext'

function Cards({image, title, price, onclick, addToWishlist, clickColor, quantityIncrement}) {
  const {handlePanel} = useContext(GroceryContext)
  return (
  <div className='md:w-60 md:h-90 w-45 h-85 bg-zinc-200 rounded p-4 hover:scale-105 transition-all duration-200 '>
    {/* card icons */}
    <div className='flex justify-between items-center'>
      <span className={`text-2xl ${clickColor}`} onClick={addToWishlist}><FaHeart /></span>
      <button className='text-lg text-white p-2 bg-gradient-to-b from-green-500 to-green-600 rounded-md hover:scale-105 transition-all duration-200 hover:to-green-700' onClick={quantityIncrement}><FaPlus /></button>
    </div>
    {/* card image */}
    <div className='mt-3'>
      <img className='w-50 md:h-40 h-30 rounded-md object-cover ml-1' src={image} alt='Groceries'/>
    </div>
   {/* Card content */}
    <div className='text-center mt-2'>
      <h2 className='text-xl font-semibold'>{title}</h2>
      <h2 className='text-lg font-bold'>${price.toFixed(2)}</h2>
      <span onClick={onclick}><Button content="Add to Cart" /></span>
    </div>
    
  </div>
  )
}

export default Cards