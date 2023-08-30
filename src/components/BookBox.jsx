import React,{useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faHeart , faCircleDown,faTrash } from '@fortawesome/free-solid-svg-icons'
import { ContextStore } from '../context/Store'


export default function BookBox(props) {

const store  = useContext(ContextStore);

  return (
   <>
   
   {/* Book Box */}
<div className='bg-[white] h-[17vw] w-[12.7vw] flex flex-col justify-between shadow-xl mt-5 ' key={props.key}>

{/* Book Icon */}
<div className=' w-[100%] h-[80%]'>

<div className='  h-[100%] w-[100%] flex flex-col justify-center items-center gap-3'>
  
  <p className='text-center text-[1.5vw]'>{props.name}</p>
  <FontAwesomeIcon icon={faBook} className='text-[8vw] text-[#452372]'/></div>  
</div> 

{/* Heart-btn, Download-btn, Delete-btn */}
<div className='bg-[#ffb1b1] h-[15%] w-[100%] flex justify-center items-center gap-8'>
    
<span><FontAwesomeIcon icon={faCircleDown}  className='text-[1.7vw] text-white cursor-pointer active:text-black hover:text-black active:translate-y-[2px] transition-all'/></span>

<span>

{props.checkIcon == true ? ( <FontAwesomeIcon icon={faTrash} className='text-white cursor-pointer hover:text-red-600 active:text-red-700 text-[1.7vw] active:translate-y-[2px]  transition-all'
 
 onClick={()=>{store.setForDelete(props.name)}}

  />)
  
  :( <FontAwesomeIcon icon={faHeart} className='text-white cursor-pointer hover:text-red-600 active:text-red-600 text-[1.7vw] active:translate-y-[2px]  transition-all'
  onClick={()=>{store.setFavList([...store.favList,props.name])}}
  />)}

 </span>



</div>




</div>

   
   </>
  )
}
