import React from 'react';
import { Link } from 'react-router-dom';

export default function Navagation() {
  return (
    <>
    
    <div className='bg-[#FFFDD0] border-b-slate-50 shadow-md w-[100%] h-[4.5vh]  flex justify-start items-center'>

<ul className='h-[100%] w-[60%] flex justify-items-start items-center gap-5 pl-[3vw] '>
<li  className='text-[1.3vw] font-medium cursor-pointer'><Link to="/">All</Link></li>
<li  className='text-[1.3vw] font-medium cursor-pointer'><Link to="/History">History</Link></li>
<li  className='text-[1.3vw] font-medium cursor-pointer'><Link to="/Fantasy">Fantasy</Link></li>
<li  className='text-[1.3vw] font-medium cursor-pointer'><Link to="/Romance">Romance</Link></li>
<li  className='text-[1.3vw] font-medium cursor-pointer'><Link to="/Sci-Fi">Sci-Fi</Link></li>
<li  className='text-[1.3vw] font-medium cursor-pointer'><Link to="/Advanture">Advanture</Link></li>
<li  className='text-[1.3vw] font-medium cursor-pointer'><Link to="/Self-Dev">Self Development</Link></li>

</ul>

    </div>
    </>
  )
}
