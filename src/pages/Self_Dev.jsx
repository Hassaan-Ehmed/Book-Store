import React from 'react'
import Shelf from '../components/Shelf'
import Banner from '../components/Banner'
import { Names } from '../components/TextContent'

export default function History() {
  return (
<>

<Banner name={"Self Development"}/>
<Shelf topic={Names.selfdev_books_name}/>



</>
  )
}
