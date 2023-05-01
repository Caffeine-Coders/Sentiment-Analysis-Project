import React from 'react'
import { Bootstrapcard } from '../common/bootstrapcard'

export const Person = ({persons}) => {
  return (
    <div className='persons'>
       { persons.map((item)=>
        {
         return  <Bootstrapcard img = {item.image} name = {item.name} desc = {item.desc}/>
        })
       }
    </div>
  )
}
