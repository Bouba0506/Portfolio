import React from 'react'
import { carpricing } from '../constant'
import arbre from "../../assets/arbre.png"
import CustomeBtn from '../CustomeBtn'
const Carte = () => {
  return (
    <div className='mt-10 w-full flex flex-col justify-center items-center py-4 px-8 relative'>
        <h1 className='text-2xl font-bold text-center'>Why you should <br></br>select us over other?</h1>
        <div className='md:flex flex-wrap py-2 justify-between my-8 md:space-y-0 space-y-4'>
            {carpricing.map((item,index)=>
            <div key={index} className='relative md:w-1/4 pb-4 rounded-2xl shadow-2xl bg-slate-50 '>
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
          <CustomeBtn title="Decouvrer Nos Cours" stylebtn="w-44 mt-4"/>
    </div>
  )
}

export default Carte