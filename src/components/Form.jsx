import React from 'react'
import { useState } from 'react'
import {useForm} from 'react-hook-form'
import {v4 as uuidv4} from "uuid"

const Form = ({addData}) => {

    const{register,handleSubmit}=useForm()

    
  return (
    <div className='h-fit w-fit mt-10 justify-self-end '>
         <form className='flex gap-2 ' action="" onSubmit={handleSubmit(data=>{
            const temp={...data,id:uuidv4(),idEditing:false}
            document.querySelector("#hhh").value=""
            document.querySelector("#hha").value=""
            document.querySelector("#hhb").value=""
            
            
            addData(temp)
            
         } )}>
            <input id="hhh" {...register("img")}  className='rounded-md' type="text" placeholder='image url' />
            <input id='hha' {...register("name")} required className='rounded-md' type="text" placeholder='Name' />
            <input id='hhb' {...register("price")} required className='rounded-md' type="text" placeholder='Price' />
            <input className='rounded-md text-sm text-white bg-blue-500 px-2 py-1' type="submit" />
         </form>
    </div>
  )
}

export default Form