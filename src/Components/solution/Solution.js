import React, { useState } from 'react'
import { cour } from '../constant'
import { Link } from 'react-router-dom'
import Cards from './Cards';


const Solution = () => {
  const [selectedPath, setSelectedPath] = useState("Graphic Design");

  return (
    <div id="solution" className='w-full py-4 bg-[#000000d3] px-8'>
        <h1 className='text-center text-4xl text-white font-medium'>Explore Inspiring Online Courses</h1>
        <div className='mt-4 w-full flex gap-4 flex-wrap md:justify-start justify-center'>
          {cour.map((item,index)=>(
            <div key={index}
            className={`w-40 p-2 rounded-full flex justify-center text-white cursor-pointer ${
              selectedPath === item.titre ? 'bg-blue-600' : 'border-[1px]'
            }`}
            onClick={() => setSelectedPath(item.titre)}
             >
              <Link>{item.titre}</Link>
            </div>
          ))}
        </div>
        <Cards/>
    </div>
  )
}

export default Solution