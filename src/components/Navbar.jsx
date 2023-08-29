import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart , faUser,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import Navagation from './Navagation';
import { ContextStore } from '../context/Store';

export default function Navbar() {

  const store = useContext(ContextStore)
  
const [text,setText] = useState("");

  return (
   <>


{/* Wrapper */}
<div className='flex '>
  
  </div>   
   
<div className='bg-[#AF1B3F] w-[100vw] h-[10vh] flex justify-between items-center'>


<div className="child1  h-[100%] w-[20%] flex justify-center items-center">
<h1 className='text-[3vw] font-bold tracking-tight text-white  cursor-pointer '>Book Store</h1>
</div>


<div className="child2 w-[35%] flex justify-center items-center gap-1">
    <input type="text" value={text}  className='w-[100%] text-lg py-[2px] focus:border-none rounded-l-md outline-none relative'
        
        onChange={(e)=>{setText(e.target.value)}}

    />
    <div className='bg-white mr-2 py-[2px] px-[5px] rounded-r-md'><FontAwesomeIcon className='text-2xl cursor-pointer active:translate-y-[1px]' icon={faMagnifyingGlass} 
    
onClick={function(){store.setSearchText(text);setText("")}}
    
    /></div>
</div>

<div className="child3 w-[32vw] h-[100%] flex justify-center items-center gap-5 ">
   <button className='bg-[#FFFDD0] py-[0.6vw] px-[12px] rounded-[5px] shadow-2xl active:translate-y-[1.5px] transition-all md-'>Favourites <span><FontAwesomeIcon icon={faHeart} style={{color:"red"}} /></span></button> 
    <button className='bg-white py-[0.6vw] px-[12px] rounded-[5px] shadow-2xl active:translate-y-[1.5px] transition-all'>Sign In <span><FontAwesomeIcon icon={faUser} /></span></button>
</div>


</div>

<Navagation/>

   </>
  )
}
