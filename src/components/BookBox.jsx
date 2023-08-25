import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faHeart , faCircleDown, } from '@fortawesome/free-solid-svg-icons'
export default function BookBox(props) {
  return (
   <>
   
   {/* Book Box */}
<div className='bg-[#FFFDD0] h-[17vw] w-[12.7vw] flex flex-col justify-between shadow-xl mt-5'>

{/* Book Icon */}
<div className=' w-[100%] h-[80%]'>

<div className='  h-[100%] w-[100%] flex flex-col justify-center items-center gap-3'>
  
  <p className='text-center text-[1.5vw]'>{props.name}</p>
  <FontAwesomeIcon icon={faBook} className='text-[8vw] text-[#AF1B3F]'/></div>  
</div> 

{/* Heart-btn, Download-btn */}
<div className='bg-[#473144] h-[15%] w-[100%] flex justify-center items-center gap-8'>

<span><FontAwesomeIcon icon={faCircleDown}  className='text-[1.7vw] text-white cursor-pointer active:text-[#7cff5b] active:translate-y-[2px] transition-all'/></span>
<span><FontAwesomeIcon icon={faHeart} className='text-white cursor-pointer active:text-[#ff6969] text-[1.7vw] active:translate-y-[2px] transition-all' /></span>



</div>




</div>

   
   </>
  )
}
