import React from 'react'
import Shelf from '../components/Shelf'
import Banner from '../components/Banner'
import { Names } from '../components/TextContent'
import Navagation from '../components/Navagation'

export default function History() {
  return (
<>

<Banner name={"History"}/>
<Shelf topic={Names.history_books_name}/>



</>
  )
}
