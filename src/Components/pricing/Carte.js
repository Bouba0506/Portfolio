import React from 'react'
import { carpricing } from '../constant'
import arbre from "../../assets/arbre.png"
const Carte = () => {
  return (
    <div className='mt-10 w-full flex flex-col justify-center items-center py-4 px-8 relative'>
        <h1 className='text-2xl font-bold text-center'>Why you should <br></br>select us over other?</h1>
        <div className='flex flex-wrap py-2 justify-between my-8 gap-4'>
            {carpricing.map((item,index)=>
            <div key={index} className='relative w-1/4 h-60 rounded-2xl shadow-2xl bg-slate-50 '>
                <div className='w-12 h-12 relative'>
                    <img src={arbre} alt='arbre'/>
                </div>
                <div className='flex flex-col mt-8 px-4 items-start'>
                    <h1 className='text-xl font-bold'>{item.titre} </h1>
                    <p className='text-xs text-gray-400'>{item.des}</p>
                </div>
            </div>
            )}
        </div>
        <div className='w-44 bg-black p-2 mt-4 text-white rounded-3xl flex justify-center'>
            <p className='font-medium'>Decouvrer Nos Cours</p>
          </div>
    </div>
  )
}

export default Carte