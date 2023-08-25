import React from 'react'
import Listing from './Listing'
export default function Footer() {
  return (
    <>
    
    {/* parent */}
    <div className=' bg-[#AF1B3F] h-[23vw] w-[100%] flex justify-around items-center  shadow-inner  '>

<Listing list={{
        head:"Book Topics",
        name1:"History",
        name2:"Fantasy",
        name3:"Romance",
        name4:"Sci-Fi",
        name5:"Advanture",
        name6:"Self Developement",
              }
    
             }/>

<Listing list={{
        head:"Others",
        name1:"Favourites",
        name2:"Trending Topics",
        name3:"Sign In",
        name4:"FAQ's",
        name5:"Terms & Condition",
        name6:" Privacy Policy",
              }
    
             }/>

<Listing list={{
        head:"Social",
        name1:"Facebook",
        name2:"Instagram",
        name3:"Twitter",
        name4:"GitHub",
        name5:"Mail",
        name6:"Phone",
              }
    
             }/>

    </div>
    
    
    </>
  )
}
