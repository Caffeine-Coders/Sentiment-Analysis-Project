import React from 'react'
import { Bootstrapcard } from '../common/bootstrapcard'

export const Topics = ({topics}) => {
  return (
    <div className='topics'>
       { topics.map((item)=>
        {
         return  <Bootstrapcard img = {item.image} name = {item.name} desc = {item.desc}/>
        })
       }
    </div>
  )
}
