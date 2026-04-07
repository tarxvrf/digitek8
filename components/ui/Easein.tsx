 "use client"
 
 import { motion } from 'framer-motion'
import React from 'react'
  
  function Easein({children}:{children:React.ReactNode}) {
    return (
     <>
     <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >  
    {children}
   </motion.div>
     
     </>
    )
  }
  
  export default Easein