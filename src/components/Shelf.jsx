import React, {  useContext, useEffect, useState } from 'react'
import BookBox from './BookBox';
import { ContextStore } from '../context/Store';
export default function Shelf(props) {

  
  const topic_name = props.topic ;
 
  const store = useContext(ContextStore);

  const [searchItem,setSearchItem] = useState([topic_name]);
let bool = false;


useEffect(()=>{
  
  const filterItems =  topic_name.filter((item)=>{
    
      if(store.searchText == ""){
      
        return true;  // if true then they automatically includes all items of array into     filterItems variable;    
      }
      else {
        
        return (item.toLowerCase()).includes(store.searchText.toLowerCase()); 

      }      
      })

      setSearchItem(filterItems);



},[store.searchText])  


  return (
  
    <>
    
    {/* Main Section */}
    <div className='bg-[#3B3B50] h-auto w-[100%] flex justify-center items-center'>


{/* Parent */}
<div className='bg-[#F8F6FB] h-[100%] w-[80%] p-4  pl-[57px] flex justify-start gap-6 items-center flex-wrap  shadow-sm shadow-white '>

{(searchItem.map((_,index)=>(

<BookBox name={searchItem[index]} key={index} checkIcon={bool} />


)))

}



</div>

    </div>
   
    
    </>
  )
}
