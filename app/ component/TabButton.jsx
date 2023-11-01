"use client"
import React from 'react'
import { motion } from 'framer-motion'


 const variants={
  default:{width:0},
  active:{width:"calc(100%-0.75rem)"},
 }

export const TabButton = ({active, onClick,children}) => {
    const buttonClasses = active? "text-white border-b border-purple-500":'text-gray-400'
  return (
    <button onClick={onClick}>
        <p className={`className='mr font-semibold hover:text-white ${buttonClasses}`}>
   {children}
     </p>

</button>
  )
}
