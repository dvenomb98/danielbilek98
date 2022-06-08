import { InboxIcon, PhoneIcon } from '@heroicons/react/outline'
import React from 'react'
import Aos from "aos"
import "aos/dist/aos.css"

function Contact({language}) {


  React.useEffect(() => {
    Aos.init({duration: 1000})
  
  },[])


  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    text: "",
  })


  function handleChange(event) {
    console.log(formData)
    const {name, email, text, value } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  return (
    <div id="Contact" className="text-darkPurple text-center bg-slate-100 flex flex-col items-center px-5">
      <div className="container mx-auto px-5">
      <div className="flex flex-col justify-center items-center ">
          <h2  className="text-4xl mt-20 font-bold lg:text-6xl">{language ? "Kontakt" : "Contact me"}</h2>
          <div className="border border-purple mt-2 border-2 w-48 rounded-t-md lg:w-72">
          </div>
      </div>

      <div data-aos="fade" className= "mt-16 w-full md:w-2/3 lg:w-1/2">
      
        <div className="flex flex-col items-start gap-3 justify-center mb-5 font-bold md:items-center md:flex-row md:gap-12 md:text-l xl:text-xl">
          <div className="flex flex-row justify-center items-center gap-2">
            <PhoneIcon className="w-6 h-6 text-purple" />
            <p>+420 774 500 143</p>
          </div>
          <div className="flex flex-row justify-center items-center gap-2">
            <InboxIcon className="w-6 h-6 text-purple" />
            <p>danielbilek98@seznam.cz</p>
          </div>
        
        
        </div>    
        
        <form>
          <label className="flex flex-col items-start gap-2 min-w-full" >
            <p className="text-xl font-bold">{language ? "Jméno:*" : "Name:*"}</p>
            <input
            className=" rounded-md p-2 border-2 border-zinc-300 placeholder:italic min-w-full"
            type="text" 
            placeholder="Daniel Bílek"
            onChange={handleChange}
            name="name"
            value={formData.name}
            required
            />
          </label>
          <label className="flex flex-col items-start gap-2 mt-4 min-w-full">
          <p className="text-xl font-bold">Email:*</p>
          <input
          className=" rounded-md border-2 border-zinc-300 p-2 placeholder:italic min-w-full"
          type="email" 
          placeholder="helloworld@gmail.com"
          onChange={handleChange}
          name="email"
          value={formData.email}
          required
          />
          </label>
          <label className="flex flex-col items-start gap-2 mt-4 min-w-full">
          <p className="text-xl font-bold">{language ? "Zpráva:*" : "Message:*"}</p>
          <textarea 
          className=" rounded-md border-2 border-zinc-300 p-2 placeholder:italic min-w-full"
          id="textData"
          value={formData.text}
          name="text"
          onChange={handleChange}
          placeholder={language ? "Tohle je moje první zpráva!" : "Very nice website!"}
          rows="8"
          required
          />
          </label>
          <button className="mt-7 mb-7 bg-cyan-400/90 text-white font-bold  rounded-lg hover:opacity-70
          py-3 px-10 text-l">{language ? "Odeslat" : "Sumbit"}</button>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Contact