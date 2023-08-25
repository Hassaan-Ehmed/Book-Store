import React from 'react'
import Shelf from '../components/Shelf'
import Banner from '../components/Banner'
import { Names } from '../components/TextContent'

export default function History() {
  return (
<>

<Banner name={"Romance"}/>
<Shelf topic={Names.romance_books_name}/>



</>
  )
}
