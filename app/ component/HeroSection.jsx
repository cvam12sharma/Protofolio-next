"use client";
import Image from 'next/image';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';


export const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="col-span-7 place-self-center">
<h1 className='text-white mb-4 text-4xl   sm:text-lg  lg:text-6xl font-extralight'>

      <span className=" text-transparent bg-clip-text bg-gradient-to-r from bg-orange-400 to to-blue-500" >
       hellllo I'm  </span>
       <br></br>
       <TypeAnimation
sequence={[
  // Same substring at the start will only be typed out once, initially
  'Shivam ',
  1000, // wait 1s before replacing "Mice" with "Hamsters"
  'Web developer',
  1000,
  'Data structue ',
  1000,

]}
wrapper="span"
speed={50}
style={{ fontSize: '2em', display: 'inline-block' }}
repeat={Infinity}
/> 
     </h1>

    <p className='text-slate-200 text-lg  sm:text-5xl  lg:text-xl'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam quas fuga quo quam doloremque hic dolore ducimus reiciendis aliquid, dignissimos animi tempore doloribus corrupti sint autem, aut, odit explicabo deserunt.
    </p>
    <button className='px-6 py-3 w-full lg:w-fit rounded-full mr-4 bg-gradient-to-r from-orange-500 to-blue-800 hover:bg-green-500 text-black'>Hire me</button>

<button className='px-1 py-1 w-full lg:w-fit rounded-full mr-4 bg-gradient-to-r from-orange-500 to-blue-800 hover:bg-slate-800 text-white mt-2'>

  <span className='block bg-black rounded-full px-5 py-2   '> Download cv</span>
</button> 

      
    </div>
    <div className="col-span-5   place-self-center">
        <div className="rounded-full bg-slate-700 w-[250px] h-[250px] relative lg:w-[400px]  lg:h[400px]">
    <img src="images/goku.jpeg"
     width={200}
      height={200} 
      className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
      alt="Goku"/> 
    </div>
    </div>
    </div>
 
    </section>
  )
}
