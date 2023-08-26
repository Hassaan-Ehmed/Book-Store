import React from 'react';
import {useParams, useNavigate} from 'react-router-dom';

export default function User() {

const params  = useParams()

const navigation = useNavigate()


// setTimeout(()=>{

//     navigation("/Advanture");

// },4000)



    return (
    <div className='bg-slate-900 text-white h-[100vh] w-[100%]'>
        
      Hello, {params.name}


    <button className='block bg-slate-200 p-2 text-black'
    onClick={()=>{navigation("/Romance")}}
    >

        Click to Redirect</button>
    
    </div>
  )
}
