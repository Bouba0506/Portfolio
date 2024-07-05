import React from 'react'
import { GiStopwatch } from "react-icons/gi";
import man from "../../assets/man.png"
import pexel from "../../assets/pexel.jpg"
import { IoMdVideocam } from "react-icons/io";
import { abonner } from '../constant';
import { FaPlus } from "react-icons/fa6";
import Solution from '../solution/Solution';
import Pricing from '../pricing/Pricing';
import Login from '../log/Login';



const Courses = () => {
  return (
    <section className='w-full'>
    <div className='w-full mt-20 flex flex-col py-4 px-8'>
    <div className='my-20 w-full lg:flex  justify-between lg:space-y-0 space-y-8'>
      {/* left */}
      <div className='flex flex-col lg:w-[40%] w-full '>
        <h1 className='text-5xl font-mono leading-tight'><span className='text-blue-500'>Grow</span> your skills<br></br> and advance <span className='text-blue-500'>your <br></br>career</span></h1>
        <p className='my-4 text-xl'>The best online course platform for creating, selling and promoting your online courses. Start monetizing your skills, experience and your audience. </p>
        <div className='flex items-center gap-6'>
          <div className='w-36 text-center rounded-full bg-black text-white p-2'>
            <p className='text-xl'>Sign Up</p>
          </div>
          <div className='flex text-black p-2 items-center gap-2'>
            <div className='w-6 h-6 rounded-full border-[1px] border-black '><GiStopwatch /></div>
            <h1 className='font-semibold'>Watch a Demo</h1>
          </div>
        </div>
      </div>

      {/* right */}
      <div className='flex lg:w-[50%] w-full lg:justify-center'>
        <div className='w-1/3  rounded-2xl'>
        <img src={pexel} alt='entrepe' className='rounded-3xl shadow-2xl h-[98%] '/>
        </div>
        <div className='flex flex-col gap-2 p-3 items-center w-[40%] '>
        {/* div 1 */}
          <div className='flex w-full p-2 flex-col bg-[#d3d1d1] rounded-3xl shadow-2xl '>
            <div className='flex items-center justify-between'>
              <div className='bg-slate-400 w-6 h-6 flex items-center justify-center rounded-full text-center'><IoMdVideocam /></div>
              <div className='bg-white w-16 p-1 flex items-center justify-center rounded-full text-center'><h1 className='text-blue-400'>Online</h1> </div>
            </div>
              <h1 className='text-xl my-5'>The Learning <br></br>Process Is Simple</h1>
          </div>
          {/* div 2 */}
          <div className='flex w-full h-1/2 flex-col rounded-3xl shadow-2xl '>
            <img src={man} alt='man' className='rounded-3xl shadow-2xl'/>
          </div>
        </div>
      </div>
    </div>
    {/* --------------cards------------------------- */}
    <div className='w-full p-4 bg-slate-300 rounded-xl lg:flex  justify-between items-center'>
      {/* ---------paragraphe----------------- */}
      <div className='flex flex-col items-start lg:w-1/3'>
        <h1>Empower Yourself with Knowledge, Anytime, Anywhere</h1>
        <div className='w-40 p-1 border-[1px] my-4 border-gray-400 flex justify-center rounded-3xl'>
          <p>Explore more</p>
        </div>
      </div>
      {/* --------------------Abonner------------------ */}
      <div className='flex gap-8 justify-center lg:w-1/2 items-center p-4 bg-slate-50 rounded-2xl'>
      {abonner.map((abo,index)=>(
        <div key={index} className='flex w-1/4 flex-col items-start'>
            <div className='flex items-center gap-1 font-bold'>
              <span className='text-4xl'>{abo.numero}</span>
              <FaPlus className='mt-2'/>
            </div>
            <p className='text-xs text-gray-400'>{abo.titre} </p>
        </div>
      ))}
      </div>
    </div>
    </div>
    <Solution/>
    <Pricing/>
    <Login/>
    </section>
  )
}

export default Courses