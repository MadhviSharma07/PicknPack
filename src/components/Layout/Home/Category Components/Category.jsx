import React from 'react'
import Heading from '../../../Other  Components/Heading'
import { Link } from 'react-router-dom'

function Category() {

    const renderCards = categories.map(card=>{
        return(
            <div className='bg-zinc-200 rounded-2xl flex-1' key={card.id}>
                {/* card image */}
                <div>
                    <img src={card.image} alt='card' className='p-2 w-full md:h-[38vh] h-[25vh] object-cover rounded-2xl' />
                </div>
                {/* card content */}
                <div className='md:pt-8 pt-5 md:p-5 p-3 rounded-md'>
                    <h3 className='text-zinc-900 text-3xl font-bold'>{card.title}</h3>
                    <p className='text-zinc-600 pt-3 mb-4'>{card.description}</p>
                    <div >
                        <Link to={card.path} className='px-3 py-2 bg-gradient-to-b from-green-500 to-green-600 rounded-md text-white md:mt-10 mt-2 hover:scale-105 hover:to-green-700 transition-all duration-300 cursor-pointer'>See all</Link>
                    </div>
                </div>
            </div>
        )
    })

  return (
    <section>
        <div className='max-w-[90%] md:h-screen h-[100%] md:m-auto m-10'> 
           <Heading highlight="Shop" heading="by Category"/>
        
        {/* cards */}
        <div className='flex md:flex-row flex-col gap-10 md:mt-15 mt-10'>
            {renderCards}
        </div>
        </div>
    </section>
  )
}

export default Category;

const categories =[
    {
        id:1,
        title:'Fruits & Veggies',
        description: 'Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.',
        image: 'https://i.pinimg.com/736x/54/fa/62/54fa62b54134e375eb93cb419f95e1a7.jpg',
        path: "./fruits"
    },
    {
        id:2,
        title:'Dairy & Eggs',
        description: 'Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.',
        image: 'https://img.freepik.com/premium-photo/png-dairy-products-with-eggs-isolated-white-background_185193-149086.jpg',
        path: "./dairy"
    },
    {
        id:3,
        title:'Meat & SeaFood',
        description:'High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.',
        image: 'https://i.pinimg.com/736x/bc/d1/6f/bcd16fff9dd02cdb23becde20c133f2e.jpg',
        path: "./seafood"
    }
]
