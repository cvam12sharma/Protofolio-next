import React from 'react';
import { BiCodeAlt, } from "react-icons/bi";
import { AiTwotoneEye, } from "react-icons/ai"; // Correct import for AiTwotoneEye
import Link from 'next/link';

// Rest of your code...
;




const ProjectCard = ({ imgUrl, title, description,gitUrl,  previewUrl }) => {
  return (
    <div>
      <div
        className='h-52 md:h-72 rounded-t-xl relative group'
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className=' overlay  flex items-center justify-center absolute top-0 left-0 w-full h-full bg-black  bg-opacity-0  group-hover:bg-opacity-80 transition-all duration-500  '>
        <Link
        href={gitUrl}
        className="h-14 w-14  mr-2 border-2 relative rounded-full  border-gray-50   hover:border-white  group/link">
          <BiCodeAlt className='h-10 w-10  text-yellow-50  absolute top-1/2  left-1/2  transform  -translate-x-1/2  -translate-y-1/2 cursor-pointer group-hover/link:text-white'></BiCodeAlt>
        </Link>
        <Link
        href={previewUrl}
        className="h-14 w-14 border-2 relative rounded-full  border-gray-50   hover:border-white  group/link">
          <AiTwotoneEye className='h-10 w-10  text-yellow-50  absolute top-1/2  left-1/2  transform  -translate-x-1/2  -translate-y-1/2 cursor-pointer group-hover/link:text-white'></AiTwotoneEye>
        </Link>
        </div>
      </div>
      <div className='text-white  rounded-b-xl  mt-3 bg-slate-500 py-6 px-4'>
        <h5 className='text-xl font-semibold mb-2 '>{title}</h5>
        <p className='text-gray-50 '>{description}</p>

      </div>

    </div>
  );
};

export default ProjectCard;







