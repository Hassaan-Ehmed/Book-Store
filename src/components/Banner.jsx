import React from 'react';
import bg_op from '../images/bg_original.jpg';

export default function Banner() {
  return (
    <>
    
    {/* Wrapper */}
<div className='flex justify-center items-center mt-3'>



    <div className='h-[22vw] w-[100%] relative flex justify-center items-center '>
        <img src={bg_op} alt="" className='  h-[100%] w-[100%] bg-no-repeat bg-cover object-cover absolute -z-[1] brightness-[0.4]' />

      <div className=' w-[55%] h-[40vh]  flex justify-center items-center '><h1 className='z-[1]  text-center  text-6xl text-white'>History Books</h1></div>


    </div>
    

    </div>    
    </>
  )
}
