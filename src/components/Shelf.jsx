import React, { useContext, useState } from 'react'
import BookBox from './BookBox'
import { ContextStore } from '../context/Store';
export default function Shelf(props) {
  const topic_name = props.topic ;
 
  const store = useContext(ContextStore);

  // const [searchItem,setSearchItem] = useState([topic_name]);
 
 

  const searchItem =  topic_name.filter((item)=>{
    
      if(store.searchText == ""){
      
        return true;      
      }
      else if((item.toLowerCase()).includes(store.searchText.toLowerCase())){
        
        return item;


      }      
      })
    

  return (

    <>
    
    {/* Main Section */}
    <div className='bg-[#473144] h-auto w-[100%] flex justify-center items-center'>


{/* Parent */}
<div className='bg-white h-[100%] w-[80%] p-4 flex justify-evenly gap-6 items-center flex-wrap shadow-md'>

{searchItem.map((_,index)=>(

<BookBox name={searchItem[index]}/>

))

}
{store.setSearchText("")}

</div>

    </div>
   
    
    </>
  )
}
