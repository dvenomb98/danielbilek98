import React from 'react'
import {ChevronDownIcon, ChevronUpIcon} from "@heroicons/react/outline"
import { CloudDownloadIcon } from '@heroicons/react/outline'
import pdf from "../files/DanielBilek.pdf"
import notebook from "../img/notebook.jpg"
import "aos/dist/aos.css"
import Aos from "aos"






function Header({language, setLanguage}) {


function switchLanguage() {
    setLanguage(prevState => !prevState)
}

React.useEffect(() => {
  Aos.init()

},[])

  return (
    <main className="bg-slate-50">
    <div className="container mx-auto px-5 py-10 relative">


        <div data-aos="fade-in" data-aos-easing="ease-in-out" className="pb-32 flex justify-between items-center">
            <div className="flex flex-col font-extrabold">
                <p className="leading-[0px]">DA</p>
                <p>NIEL.</p>
            </div>

            <div data-aos="fade-in" data-aos-easing="ease-in-out" onClick={switchLanguage} className="flex gap-1 text-zinc-500 cursor-pointer">
                {language ? <ChevronDownIcon className="w-5" /> : <ChevronUpIcon className='w-5' />}
                <p>{language ? "English" : "Čeština"}</p>
            </div>
        </div>

        
        <div data-aos="fade-down" data-aos-easing="ease-in-out" className="flex gap-5 items-center mb-5 md:w-80">
            <div className="border-b-2 border-zinc-400 w-1/2  relative">
            </div>
            <a href={pdf} target="_blank" rel="noopener noreferrer" className="font-light flex flex-row items-center gap-2 text-gray-500" download>
            <CloudDownloadIcon className="w-5 h-5 " />{language ? "my resume" : "můj životopis"}</a>
            
        </div>

        {language ? 
          <h1 data-aos="fade-left" data-aos-easing="ease-in-out"  className="hidden md:block text-4xl font-bold md:text-7xl">Hi there, I’m Daniel, <br></br>Front End Developer.</h1> 
        : <h1 data-aos="fade-left" data-aos-easing="ease-in-out"   className="hidden md:block text-4xl font-bold md:text-7xl">Ahoj, jsem Daniel,<br></br>Front End Developer.</h1>
        }

        {language ? 
            <h1 data-aos="fade-left" data-aos-easing="ease-in-out"  className=" md:hidden text-4xl font-bold md:text-7xl">Hi there, I’m Daniel, Front End Developer.</h1> 
          : <h1 data-aos="fade-left" data-aos-easing="ease-in-out"  className=" md:hidden text-4xl font-bold md:text-7xl">Ahoj, jsem Daniel, Front End Developer.</h1>
          }

        <div data-aos="fade-right" data-aos-easing="ease-in-out" className="flex flex-col gap-5 py-10 md:py-16 leading-8">
          <p className=" text-gray-500">
          {!language ? `Jsem front-end vývojář žijící v České republice. Miluju programování, vytváření intuitivních a přehledných webových stránek a aplikací.` :
          "I am a Front-end developer located in Brno. I have a serious passion for programming and creating intuitive, dynamic user experiences web sites and apps."} </p>
          <p className="text-gray-500"> {!language ? "Mám smysl pro organizovanou práci, kreativní řešením problémů a kritické myšlení. Pokud zrovna netvořím, tak se věnuji závodnímu grapplingu, seberozvoji a volnočasovým aktivitám. Největší ambice mám ve vytváření front endu, ale nebráním se zkušenostem ani z back endu." : "I have sense for organised work, creative problem solving and critical thinking. Competition grappler, fan of MMA, doing lot of self-education and healthy activites. Most of the time i am interested in the entire front end, but i would like to work on back end too." }</p>
        </div>

        <img data-aos="fade-up" data-aos-easing="ease-in-out" src={notebook} className="pb-10 md:pb-16" />
    </div>
    
    
    

    

    </main>

  )
}

export default Header