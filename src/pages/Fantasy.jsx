import React from 'react'
import Shelf from '../components/Shelf'
import Banner from '../components/Banner'
import { Names } from '../components/TextContent'

export default function History() {
  return (
<>


<Banner name={"Fantasy"}/>
<Shelf topic={Names.fantasy_books_name}/>

</>
  )
}
