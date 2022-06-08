import React from 'react'




function About({language}) {

  const skills = ["React","Tailwind","Sass","Html","Css","Jquery","Firebase"]

  

  return (
    <div className="bg-slate-50">
      <div className="container mx-auto px-5 py-20">

      <h2 className="text-4xl font-bold md:text-5xl">{language ? "My skills" : "Moje dovednosti"}</h2>
      <p className="text-gray-500 leading-8 py-10 md:py-16">{language ? "Through courses and building projects, I've gained a solid understanding of computer science and web development concepts. There are a technologies that i have been using:" : 
        "Během kurzů a budování projektů jsem získal solidní vědomosti ohledně informačních technologií a web vývoji. Zde jsou vypsané technologie, s kterými mám zkušenost:"}
      </p>

      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
      {skills.map(skill => (
        <li className="font-bold list-disc text-xl uppercase lg:text-2xl">{skill}</li>
      ))}  
      </div>
      
      
      </div>
    
    </div>
    
  )
}

export default About