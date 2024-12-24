import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useRef } from 'react';


const Card = ({values,editHandle,key,changeHandle,deleteHandle}) => {

    const{img,name,price,id,isEditing}=values

    const priceUpdated=useRef(null)

    const SubmitHandler=(e)=>{
        e.preventDefault();
        changeHandle(id,priceUpdated.current.value)
        
        
    }

    
  return (
    <div key={key} className='h-72 p-4 w-40 shrink-0 flex flex-col gap-4 items-center justify-center rounded-md bg-zinc-100'>
     <img className='h-1/2 w-full object-cover object-center rounded-md' src={img} alt="" />
     <h1>item: {name}</h1>
     {isEditing?
     
     <form className="w-full h-fit flex flex-col items-center justify-center gap-2" onSubmit={SubmitHandler}      action="">
        
        <input ref={priceUpdated} required className='rounded-md w-full' type="text" placeholder='Price' />
        <input className='rounded-md text-sm text-white bg-blue-500 px-2 py-1' type="submit" />
     </form>
     
     :<>
    
     <h1>Price: ${price}</h1>
     <span className='flex items-center justify-center gap-5'>
     <button onClick={()=>editHandle(id)}>

     <FaEdit size="1.3em"/>
     </button>


     <button onClick={()=>deleteHandle(id)}>
     <MdDelete size="1.5em" />

     </button>
     </span>
     </>
     }

     

    </div>
  )
}

export default Card