import React from 'react'
import { Bootstrapcard } from '../common/bootstrapcard'
import {useNavigate} from 'react-router-dom'

export const Person = ({persons}) => {
  var navigate = useNavigate();
  return (
    <div className='persons'>
       { persons.map((item)=>
        {
         return  (
          <div onClick={()=> {
            localStorage.setItem("data", JSON.stringify(item))
            navigate("/analysis")
          }}>
                <Bootstrapcard img = {item.image} name = {item.name} desc = {item.desc}/>
          </div>
          )})
       }
    </div>
  )
}
