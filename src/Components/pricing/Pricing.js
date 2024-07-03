import React from 'react'
import entrepreneur from "../../assets/entrepreneur.jpg"
import img2 from "../../assets/img2.jpg"

import { experience } from '../constant'
import Carte from './Carte'
const Pricing = () => {
  return (
    <section className='relative w-full'>
    <div className='w-full mt-5 px-8 lg:flex justify-between relative'>
      <div className='flex gap-3 lg:w-1/2'>
        <div className='w-1/2 flex flex-col items-center gap-4'>
        <img src={entrepreneur} alt='entre' className='rounded-2xl w-full h-full'/>
        <div className='w-full h-40 p-2 bg-slate-300 rounded-2xl'>
          {experience.map((item,index)=>
          <div key={index} className='flex h-36 flex-col items-center justify-center bg-white shadow-2xl rounded-2xl'>
              <span className='font-bold'>{item.nombre}</span>
              <h2 className='text-gray-400 text-xs font-medium'>{item.titre}</h2>
              <div className='flex items-center'>
              <div className='w-8 h-8 rounded-full relative'><img src={item.im3} alt='image' className='w-full h-full rounded-full'/> </div>
              <div className='w-8 h-8 rounded-full relative'><img src={item.im4} alt='image' className='w-full h-full rounded-full'/> </div>
              <div className='w-8 h-8 rounded-full relative'><img src={item.im6} alt='image' className='w-full h-full rounded-full'/> </div>
              </div>
          </div>
          )}
        </div>
        </div>
        <div className='w-1/2 rounded-3xl p-3 bg-[#9b9999ae] flex flex-col  items-center '>
            <h1 className='text-xl font-bold'>Experience <br></br> Teachers</h1>
            <div className='w-full h-1/3 relative mt-24'>
              <img src={img2} alt='prof' className='rounded-3xl'/>
            </div>
        </div>
      </div>
      <div className='flex flex-col items-start lg:w-2/5 mt-8'>
          <h1 className='text-xl font-bold'><span className='text-blue-500'> Who </span>we are </h1>
          <p className='text-gray-400 font-medium'>Envie d'un changement radical dans ta vie ? Essaye ceci pendant 21 jours pour devenir une meilleure version de toi-même <br></br><br></br>
          Adopte ces habitudes pendant 21 jours et observe comment elles transforment ta vie. Commence dès aujourd'hui et deviens une meilleure version de toi-même !
          </p>
          <div className='w-44 bg-black p-2 mt-4 text-white rounded-3xl flex justify-center'>
            <p className='font-medium'>Decouvrer Nos Cours</p>
          </div>
      </div>
    </div>
    <Carte/>
    </section>
  )
}

export default Pricing