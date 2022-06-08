import React from 'react'
import { CloudDownloadIcon } from '@heroicons/react/outline'
import pdf from "../files/DanielBilek.pdf"

function Footer({language}) {
  return (
    <div className="bg-slate-50">
        <div className="container py-20 px-5 mx-auto flex flex-row justify-between items-center">

        <div className="flex flex-col font-extrabold">
                <p className="leading-[0px]">DA</p>
                <p>NIEL.</p>
        </div>


        <div className="flex flex-row gap-10">
        <a href={pdf} target="_blank" rel="noopener noreferrer" className="font-light flex flex-row items-center gap-2 text-gray-500" download>
        <CloudDownloadIcon className="w-5 h-5 " />{language ? "my resume" : "můj životopis"}</a>
        </div>
        
        </div>
    
    </div>
    
  )
}

export default Footer