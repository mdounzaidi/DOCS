import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
    const data = [
  {
    desc: "This is the background color of the card that will be applied.",
    filesize: "0.9mb",
    close: true,
    tag: {
      isOpen: false,
      tagTitle: "Download Now",
      tagColor: "bg-green-600",
    },
  },
  {
    desc: "This card contains the primary document for user reference.",
    filesize: "1.2mb",
    close: false,
    tag: {
      isOpen: true,
      tagTitle: "View File",
      tagColor: "bg-blue-300",
    },
  },
  {
    desc: "High‑resolution asset used for marketing purposes.",
    filesize: "2.5mb",
    close: true,
    tag: {
      isOpen: false,
      tagTitle: "Coming Soon",
      tagColor: "bg-yellow-300",
    },
  },
  {
    desc: "Configuration file required for application setup.",
    filesize: "0.4mb",
    close: false,
    tag: {
      isOpen: true,
      tagTitle: "Install",
      tagColor: "bg-purple-300",
    },
  },
  {
    desc: "Final report generated after system analysis.",
    filesize: "3.1mb",
    close: true,
    tag: {
      isOpen: true,
      tagTitle: "Export",
      tagColor: "bg-red-300",
    },
  },
];
const ref=useRef(null)
  return (
    <div>
        <div ref={ref} className='z-[3] h-screen w-full fixed flex gap-5 flex-wrap p-5'>
        {data.map((item,idx)=>(
            <Card data={item } reference={ref}/>
        ))}
        </div>
    </div>
  )
}


export default Foreground