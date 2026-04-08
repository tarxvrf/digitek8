import React, { FC } from 'react'

interface Props{
    nama:string
}
 const Title:React.FC<Props>= ({nama})=>{
       return <h2 className="text-3xl font-bold mb-4 text-center text-white">{nama}</h2>
}
export default Title