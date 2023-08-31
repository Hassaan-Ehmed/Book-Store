import React from 'react';
import BookBox from '../components/BookBox';
import { useContext } from 'react';
import { ContextStore } from '../context/Store';


export default function Favourite(){

    const store = useContext(ContextStore);
    let fav_books = store.favList;

    let bool = true;


    // Filter Array Remove same names of book
    // Current index number check every index of an array and sath sath name check in every element
                        // kio ke name apne element se bhi check karega to ose duplicate miljayega
                        // to isi liye && ki condition he ke name same hain achaa ab jaon index check karo
                        // zahir si baat he apne element ko check karega to index same hoga condition false
                        // aur duplication mein name same milega lekin is baar index change hoga 
                        //(false se remove karege current {name} ko aur aage barega    )  

 let FilteredBooks =   fav_books.filter((name,i)=>  {

                    for(let x = 0; x < fav_books.length; x++ ){

                        if((name===fav_books[x] && i!==x)) {
                            return false //means remove current element from an array
                        }
                    }
                   
                        // Means add current Item from an array
                        return true

                        
                        })
let Books = FilteredBooks.filter((name,index)=>{

    for(let x=0; x<store.favList.length; x++){


        if(store.favList[index]!==FilteredBooks[x]) {
            return true;
        }else{
            return false;
        }
    
    }

})

return(
<>

<div className='h-[100vh] w-[100%] bg-[#3B3B50] '>


{/* Main Container */}
<div className='h-[100vh] w-[90%] bg-[#F8F6FB] m-[auto] flex flex-col justify-end items-center'>

<div className='h-[4vw] w-[100%] shadow-xl bg-[#F8F6FB] flex justify-center items-center'>
    <h1 className='text-center text-[40px] font-medium drop-shadow-lg  '>Favourite Books</h1>
</div>

{/* Book Sections */}
<div className='h-[96vh] w-[90%] pl-[30px] flex justify-start gap-[40px] flex-wrap  '>


{

Books.length > 0 ? ( Books.map((name,index)=>{

return <BookBox name={name} key={index} checkIcon={bool}/>
})

):("Empty")
}



</div>

</div>
</div>  
</>

);

}
