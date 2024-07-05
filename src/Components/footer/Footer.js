import React from 'react'
import { Link } from 'react-router-dom'
import { footer } from '../constant'

export const Footer = () => {
  return (
    <div className='mt-10 w-full relative px-8 flex flex-wrap justify-between'>
         <div className='flex flex-col gap-4  lg:w-1/3'>
         <Link to="/" className="text-2xl font-bold">
            Career <span className="text-blue-600">***</span>{" "}
          </Link>
          <p className='text-gray-500 '>Created by Boubacar &copy;2024</p>
         </div>
         <div className='flex flex-wrap items-center lg:w-2/3 gap-14 justify-between'>
           {footer.map((item,index)=>
        <div key={index} className='flex flex-col items-start gap-4'>
            <h1 className='text-blue-600 font-medium'>{item.titre}</h1>
           {item.list &&(
            <div className='flex flex-col gap-4'>
                {item.list.map((list,index)=>
                <div key={index}>
                    <p>{list} </p>
                </div>
                )}
            </div>
           )}
        </div>
        )}
         </div>
    </div>
  )
}
