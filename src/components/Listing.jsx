import React from 'react'

export default function Listing(props) {
  return (
    <>
    
    {/* Child */}
<div className=' h-[100%] w-[23%] flex flex-col justify-center items-center '>

<div className=' w-[100%] h-[1.8vw]  flex justify-center items-center text-[2vw] font-medium text-[#452372]'><h1>{props.list.head}</h1></div>

<div className=' w-[70%] h-[18vw] flex justify-center items-center '>
    <ul className='text-center'>
        
         <li className='text-[1.5vw]  text-[#3B3B50] cursor-pointer'>{props.list.name1}</li>
        <li  className='text-[1.5vw]  text-[#3B3B50] cursor-pointer'>{props.list.name2}</li>
        <li  className='text-[1.5vw]  text-[#3B3B50] cursor-pointer'>{props.list.name3}</li>
        <li  className='text-[1.5vw]  text-[#3B3B50] cursor-pointer'>{props.list.name4}</li>
        <li  className='text-[1.5vw]  text-[#3B3B50] cursor-pointer'>{props.list.name5}</li>
        <li  className='text-[1.5vw]  text-[#3B3B50] cursor-pointer'>{props.list.name6}</li>
        
        </ul>
    
</div>


</div>
    </>
  )
}
