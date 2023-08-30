import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ContextStore } from '../context/Store';
export default function Navagation() {
  
  
  const abcd128 = "Hamza Khan";
  const store = useContext(ContextStore);
  return (
    <>
    
    <div className='bg-[#FFBCB1] border-b-slate-50 shadow-md w-[100%] h-[4.5vh]  flex justify-start items-center'>

<ul className='h-[100%] w-[60%] flex justify-items-start items-center gap-5 pl-[3vw] '>
<li  className='text-[1.3vw] font-medium cursor-pointer'><Link to="/" >All</Link></li>
<li  className='text-[1.3vw] font-medium cursor-pointer'><Link to="/History" onClick={()=>store.setSearchText("")}>History</Link></li>
<li  className='text-[1.3vw] font-medium cursor-pointer'><Link to="/Fantasy" onClick={()=>store.setSearchText("")}>Fantasy</Link></li>
<li  className='text-[1.3vw] font-medium cursor-pointer'><Link to="/Romance" onClick={()=>store.setSearchText("")}>Romance</Link></li>
<li  className='text-[1.3vw] font-medium cursor-pointer'><Link to="/Sci-Fi" onClick={()=>store.setSearchText("")}>Sci-Fi</Link></li>
<li  className='text-[1.3vw] font-medium cursor-pointer'><Link to="/Advanture" onClick={()=>store.setSearchText("")}>Advanture</Link></li>
<li  className='text-[1.3vw] font-medium cursor-pointer'><Link to="/Self-Dev" onClick={()=>store.setSearchText("")}>Self Development</Link></li>

{/* Dynamic Route in React JS */}
{/* <Link to={`/user/${abcd128}`}>User</Link> */}

<li  className='text-[1.3vw] font-medium cursor-pointer '>User</li>

</ul>

    </div>
    </>
  )
}
