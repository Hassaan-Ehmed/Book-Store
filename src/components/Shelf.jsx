import React from 'react'
import BookBox from './BookBox'
import { Names } from './TextContent'
export default function Shelf() {
 
 
 
  return (
    <>
    
    {/* Main Section */}
    <div className='bg-[#473144] h-auto w-[100%] flex justify-center items-center'>


{/* Parent */}
<div className='bg-white h-[100%] w-[80%] p-4 flex justify-evenly gap-6 items-center flex-wrap shadow-md'>

{Names.history_books_name.map(( _ , index )=>(
<BookBox name={Names.history_books_name[index]}/>
))}

</div>

    </div>
    
    
    </>
  )
}
