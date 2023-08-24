import React from 'react'

export default function Navbar() {
  return (
   <>
   
   
<div className='bg-[#AF1B3F] w-[100vw] h-[10vh] flex justify-between items-center'>


<div className="child1 bg-slate-500 h-[100%] ">
<h1>Book Store</h1>
</div>


<div className="child2 bg-green-300">
    <input type="search" />
</div>

<div className="child3 bg-red-600">
    <button>Favourites</button>
    <button>Sign In</button>
</div>



</div>
   
   </>
  )
}
