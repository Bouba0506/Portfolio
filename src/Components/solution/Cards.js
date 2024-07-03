import React from 'react'
import { card } from '../constant'
import { CiStar } from "react-icons/ci";
const Cards = () => {
  return (
    <div className='my-3  grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4'>
        {card.map((item,index)=>(
            <div key={index} className='flex flex-col items-start w-52 h-72 rounded-xl p-2 bg-[#272525ba] '>
                <div className='relative w-full rounded-xl '><img src={item.Ai} alt='ai' width={400} height={400} className='rounded-xl'/> </div>
                <div className='flex w-full mt-2 justify-between items-center'>
                    <div className='flex items-center gap-1 text-white font-bold text-xs'>
                        <CiStar />
                        <span>{item.star} </span>
                    </div>
                    <h4 className='text-xs text-gray-300 font-bold'>{item.nombre}</h4>
                </div>
                <h1 className='text-[16px] font-light mt-2 text-white'>{item.des}</h1>
                <div className='flex items-center gap-2 mt-4'>
                    <div className='w-8 h-8 rounded-full relative'><img src={item.im} alt='image' className='w-full h-full rounded-full'/> </div>
                <h3 className='text-xs text-white font-medium'>{item.name}</h3>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Cards