import React from 'react'
import Heading from '../../../Other  Components/Heading'
import { TbHexagonNumber1, TbHexagonNumber4, TbHexagonNumber3, TbHexagonNumber2 } from "react-icons/tb";
import {PiFactory, PiPlant} from "react-icons/pi"
import {SlBadge} from "react-icons/sl"
import { BsTruck } from "react-icons/bs";

function Process() {
    const renderSteps = steps.map((step)=>{
        return(
            <div className={`w-80 h-50 p-4 flex flex-col items-center justifyy-center ${step.id % 2 ===0 ? 'md:-mt-40 md:ml-0 ml-15' : ""} `}  key={step.id}>
                {/* icon of number */}
                <div className='text-5xl outline-[3px] outline-dashed rounded-full w-fit'>{step.number}</div>
                {/* content */}
                <div className='flex gap-2 mt-2 justify-center items-center'>
                    <span className='flex w-fit h-fit p-3 rounded-full text-3xl bg-gradient-to-b from-green-500 to-green-600 text-white justify-center items-center'>{step.icon}</span>
                    <div>
                        <h2 className='text-2xl font-semibold text-zinc-900 mt-5'>{step.title}</h2>
                        <p>{step.para}</p>
                    </div>  
                    
                </div>
            </div>
        )
    })

  return (
    <section>
        <div className='max-w-[90%] h-fit mx-auto mb-15 mt-20'>
            <div className='w-fit mr-auto'>
                <Heading className="text-left" highlight="Our" heading="Process" />
            </div>
            <div className='flex md:flex-row flex-col justify-between md:gap-1 gap-10 md:mt-20 mt-12 md:pt-30'>
                {renderSteps}
            </div>
            
        </div>
    </section>
  )
}

export default Process

const steps =[
    {
        id: 1,
        number:<TbHexagonNumber1 />,
        icon:<PiPlant />,
        title:"Sourcing",
        para:"It is a long established fact that a reader",
    },
     {
        id: 2,
        number:<TbHexagonNumber2 />,
        icon:<PiFactory />,
        title:"Manufacturing",
        para:"It is a long established fact that a reader",
    },
     {
        id: 3,
        number:<TbHexagonNumber3 />,
        icon:<SlBadge />,
        title:"Quality Control",
        para:"It is a long established fact that a reader",
    },
     {
        id: 4,
        number:<TbHexagonNumber4 />,
        icon:<BsTruck />,
        title:"Logistics",
        para:"It is a long established fact that a reader",
    }
]
