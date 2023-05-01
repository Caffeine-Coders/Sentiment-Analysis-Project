import React from 'react'
import { Bootstrapcard } from '../common/bootstrapcard'

export const Entertainment = ({entertainment}) => {
  return (
    <div className='entertainment'>
       { entertainment.map((item)=>
        {
         return  <Bootstrapcard img = {item.image} name = {item.name} desc = {item.desc}/>
        })
       }
    </div>
  )
}
