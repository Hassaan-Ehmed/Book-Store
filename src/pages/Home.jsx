import React from 'react';
import Banner from '../components/Banner'
import Shelf from '../components/Shelf';
import { Names } from '../components/TextContent';

export default function Home() {
  return (
    <>
    
<Banner name={"All"}/>

{/* Shuffle Array in Random Order Please..........🥰😚 */}
<Shelf topic={Names.selfdev_books_name}/>

    
    
    </>
  )
}
