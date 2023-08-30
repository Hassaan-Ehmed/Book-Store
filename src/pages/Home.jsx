import React,{useContext} from 'react';
import Banner from '../components/Banner'
import Shelf from '../components/Shelf';
import { Names } from '../components/TextContent';
import { ContextStore } from '../context/Store';

export default function Home() {

  const store = useContext(ContextStore);
  
  console.log(store.favList);

// 1 have 6 topics of each topic have 20 books and I extract some books of all topics and shuffled randomly 
// so i have now all topics in Home Page
  const history_books = Names?.history_books_name.slice(0,3);
  const fantasy_books = Names?.fantasy_books_name.slice(3,7);
  const romance_books = Names?.romance_books_name.slice(7,10);
  const scifi_books = Names?.scifi_books_name.slice(10,13);
  const advanture_books = Names?.advanture_books_name.slice(13,17);
  const selfdev_books = Names?.selfdev_books_name.slice(17);

  const Random_Books = [...history_books,...fantasy_books,... romance_books,...scifi_books,...advanture_books,...selfdev_books]  

  //Now we Shuffled Array in Random Order with Knuth Algorithm


  // Step 1. Loop on Array From Last index to first index (Loop through array in reverse order)
  // Step 2. For each iteration i at index , generate random number for j 
  // Step 3. Swapping i to j that's mean the element of an array at index i is now assign
  //to random generated index Like [arr[i],array[j] = arr[j],arr[i] ] shortest way to Swapp variables 
 
function ShuffledArray(Random_Books){
for(let i= Random_Books.length-1; i > 0; i--){

  // Generate Random number for j
  let j = Math.floor((Math.random() * (i + 1)));  

  //tradiotional way to swapp the variable
  let Temp = Random_Books[i];
  Random_Books[i] = Random_Books[j];
  Random_Books[j] = Temp;
 
}

return Random_Books

}

const Books = ShuffledArray(Random_Books)

  return (
    <>
    
<Banner name={"All"}/>

{/* Shuffle Array in Random Order Please..........🥰😚 */}
{/* Okay 🙌🏻 */}

<Shelf topic={Books}/>

    
    
    </>
  )
}
