"use client"
import Projek1 from "@/projectreal/projek1"
import Dashboard from "./dashboard/page"
import Projek2 from "@/projectreal/projek2"
import Projek3 from "@/projectreal/projek3"
import { useEffect, useState } from "react"
import Getdata from "./api/getdata"
import { div, li } from "framer-motion/client"

interface props{
  email:string
}

function Home() {
  const [isidata,setisi]= useState([])
  const ambil= async()=>{
    const xx = await Getdata()
    return setisi(xx)
  }
  useEffect(()=>{
    ambil()
     
  },[])
  return (
   <>
  {/*<Projek1/>
 {/*

 <Projek3/>
   <Projek2/>
  */} 
<div className="bg-gray-950 text-white">
  {isidata.map(item=>
    <div>
      {item.email}
    </div>
  )}
  hello
</div>
  
   </>
   
  )
}

export default Home