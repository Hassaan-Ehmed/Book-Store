import React from 'react'
import BookBox from './BookBox'
import { Names } from './TextContent'
export default function Shelf(props) {
 

  const topic_name = props.topic 
  return (


    
    <>
    
    {/* Main Section */}
    <div className='bg-[#473144] h-auto w-[100%] flex justify-center items-center'>


{/* Parent */}
<div className='bg-white h-[100%] w-[80%] p-4 flex justify-evenly gap-6 items-center flex-wrap shadow-md'>

{topic_name.map(( _ , index )=>(
<BookBox name={topic_name[index]}/>
))}

</div>

    </div>
    
    
    </>
  )
}
