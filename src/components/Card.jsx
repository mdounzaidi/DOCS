import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { motion, scale } from "motion/react"
function Card({data ,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} className='bg-zinc-700 h-72 w-60 rounded-[40px] px-8 py-10 relative overflow-hidden' >
        <div className=''>
            <FaFileAlt/>
        </div>
        <p className='text-white text-xs mt-5 lading-none tracking-normal font-semibold'>{data.desc}</p>
        <div className='footer absolute w-full bottom-0 left-0'>
            <div className='flex items-center justify-between mb-2 py-3 px-8 '>
                <h1>{data.filesize}</h1>
                <span className='bg-zinc-400 h-8 w-8 rounded-full flex items-center justify-center ' >
                    {data.close?<IoClose/>:<FiDownload color='black'/>}
                    
                </span>
            </div>
            {data.tag.isOpen&&(
                <div className={`${data.tag.tagColor} w-full flex items-center justify-center py-4`}>
                    <h3 className='font-semibold text-sm'>{data.tag.tagTitle}</h3>
                </div>)}
            
        </div>
    </motion.div>

  )
}

export default Card