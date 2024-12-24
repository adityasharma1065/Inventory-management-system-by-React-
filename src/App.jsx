import React from 'react'
import Cards from './components/Cards'
import Form from './components/Form'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  
   const loadProducts=()=>{
    try{
       const storedData=JSON.parse(localStorage.getItem("Products"))
       return storedData || []
    }catch(err){
        console.log(err);
        
    }
   }

   const [data,setData]=useState(loadProducts)

   useEffect(()=>{
    localStorage.setItem("Products",JSON.stringify(data))
   },[data])

   const AddDataHandler=(temp)=>{
         setData([...data,{img:temp.img,name:temp.name,price:temp.price,id:temp.id,isEditing:temp.isEditing}])
   }
   
   const EditDataHanlder=(id)=>{
    
    setData((prev)=>prev.map((item)=>{
        
       return item.id==id?{...item,isEditing:true}:item
        
    }))
   }

   const ChangeHandler=(id,priceUpdated)=>{
    setData((prev)=>prev.map((item)=>{
        
        return item.id==id?{...item,price:priceUpdated,isEditing:false}:item
         
     }))

     
    }
    const DeleteHandler=(id)=>{
       setData((prev)=>prev.filter((item)=>item.id!=id))
    }

  return (
      <div className='p-10 w-fll h-screen bg-zinc-300 flex flex-col items-center gap-20 justify-center'>
        <h1 className='text-[50px]'>STORE HOUSE</h1>
        <Cards editHandle={EditDataHanlder} changeHandle={ChangeHandler} deleteHandle={DeleteHandler} data={data} />
        <Form addData={AddDataHandler}/>
    </div>
  )
}

export default App