import React from 'react'
import { Navbar } from '../../components/navbar/Navbar'
import  Item  from '../../components/item/Item'
import { useParams } from 'react-router-dom'

export const Product = () => {
  let id =useParams()
  console.log(id);
  return (
    <div>
      <Navbar />
      <Item id={id.id}/>
    </div>
  )
}
