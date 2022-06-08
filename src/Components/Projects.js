import React from 'react'
import data from "../data"


function Projects({language}) {

    console.log(data[0])


console.log(data)


  return (
    <div className="bg-slate-50">
    <div className="container mx-auto px-5 py-20">

      <h2 className="text-4xl font-bold md:text-5xl">{language ? "What I've been working on" : "Projekty, na kterých jsem pracoval"}</h2>
      <p className="text-gray-500 leading-8 py-10 md:py-16">
      {language ? "I learned most of my knowlegde by working on projects. Take a look at some of the work I have dedicated my time to."
      : "Většinu svých znalostí jsem získal při práci na projektech. Zde je výběr mé práce, na kterou se můžete podívat." }
      </p>


      <div className="flex flex-col gap-16 md:grid md:grid-cols-2 lg:gap-32">
      {data.map(projekt => (

        <div key={projekt.id} className="group flex flex-col">

          <img src={projekt.img} alt={projekt.title} className="group-hover:scale-105 shadow shadow-xl" />
          <div className="flex flex-col gap-8 pt-8">
            <h3 className="font-bold text-3xl">{projekt.title}</h3>
            {!language ? 
            <p>{projekt.description_cz}</p>
            :
            <p className="text-gray-500">{projekt.description_en}</p>
            }
            <div className="flex justify-between">
              <a className=" uppercase group-hover:border-b-2 border-neutral-800" href={projekt.link} target="_blank">{language ? "View website" : "Webová stránka"} &gt;</a>
              {projekt.git && <a className=" uppercase group-hover:border-b-2 border-neutral-800" href={projekt.git} target="_blank">Github &gt;</a>}
            </div>
          </div>
        </div>


      ))}
      
      
      
      </div>

    </div>
    
    </div>

    
  )
}

export default Projects