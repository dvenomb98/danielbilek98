
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Form({language}) {


  const form = useRef();

  const [formData, setFormData] = React.useState({
    firstName: "", 
    lastName: "",
    email: "",
    text: ""
  })

  const [formErrors, setFormErrors] = React.useState({})
  const [isSubmit, setIsSubmit] = React.useState(false)
  const [isSubmited, setIsSubmited] = React.useState(false)
  

  function handleChange(event) {
    const {name, value, type} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: value
        }
    })
}

const notify = () => toast.success(`${!language ? "Zpráva byla úspěšně odeslána!" : "Your message was successfully sended!"}`, {
  position: "bottom-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  delay: 500
  });





function handleSubmit(event) {
  event.preventDefault()
  setFormErrors(validate(formData))
  setIsSubmit(true)
  
}

React.useEffect(() => {
  if(Object.keys(formErrors).length === 0 && isSubmit) {
    notify()
    setFormData({
      firstName: "", 
      lastName: "",
      email: "",
      text: ""})
    emailjs.sendForm('service_dvydk6b', 'template_sblvpxa', form.current, 'y0cIRT5JszJBG4Ig1')
    .then((result) => {
      console.log(result)
    }, (error) => {
        console.log(error.text);
    });

  }
  
},[formErrors])

const validate = (values) => {
  const errors = {}
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const alphaRegex = /^([ěščřžýáíéóúůďťňĎŇŤŠČŘŽÝÁÍÉÚŮĚÓa-zA-z]){0,20}$/
  

  if (!values.firstName) {
    errors.firstName = !language ? "Jméno je vyžadováno!" : "Name is required!"
    }
    
    else if(!alphaRegex.test(values.firstName)) {
      errors.firstName = !language ? "Jméno obsahuje nepovolené znaky!" : "Name contains disallowed characters!"
    }
  
  if (!values.lastName) {
    errors.lastName = !language ? "Příjmení je vyžadováno!" : "Surname is required!"
  }
  
  else if(!alphaRegex.test(values.lastName)) {
    errors.lastName = !language ? "Příjmení obsahuje nepovolené znaky!" : "Surname contains disallowed characters!"
  }

  if (!values.email) {
    errors.email = !language ? "Email je vyžadován!" : "Email is required!"
  }
  else if(!regex.test(values.email)) {
    errors.email = !language ? "Emailová adresa není správná!" : "Email adress is not correct!"
  }
  

  if (!values.text) {
    errors.text = !language ? "Zpráva je vyžadována!" : "Message is required!"
  }

  return errors;
}

  return (
    <div className="bg-slate-50">
    <div className="container mx-auto px-5 py-20">
        <h2 className="text-4xl font-bold md:text-5xl">{language ? "Let's build something together" : "Neváhejte mně kontaktovat"}</h2>
        
        <p className="text-gray-500 leading-8 py-10 md:py-16">{language ? "Feel free to reach out if you're looking for a developer, have a question, or just want to connect." : "Pokud máte nějakou otázku, hledáte developera, nebo cokoliv jiného, kontaktuje mně"}</p>
        

        <form ref={form} onSubmit={handleSubmit} className="flex flex-col w-full text-lg font-semibold">

          <div className="flex flex-col gap-1 ">
            <label htmlFor="name">{!language ? "Jméno" : "Name"}</label>
            <input className={`lg:w-2/3 bg-white  border ${formErrors.firstName ? "border-red-600" : "border-gray-300/50"} shadow-sm shadow-gray-300/50 px-5 py-2 rounded-sm`} onChange={handleChange} id="name" type="text" placeholder="Daniel" name="firstName" value={formData.firstName}/>
          </div>
          <p className="text-red-600 py-2 font-light ">{formErrors.firstName}</p>
          

          <div className="flex flex-col gap-1">
            <label htmlFor="lastName">{!language ? "Příjmení" : "Surname"}</label>
            <input className={` lg:w-2/3 bg-white    border ${formErrors.lastName ? "border-red-600" : "border-gray-300/50"} shadow-sm shadow-gray-300/50 px-5 py-2 rounded-sm`} onChange={handleChange} id="lastName" type="text" placeholder="Bílek" name="lastName" value={formData.lastName} />
          </div>
          <p className="text-red-600 py-2 font-light ">{formErrors.lastName}</p>
          
          
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input className={`lg:w-2/3 bg-white   border ${formErrors.email ? "border-red-600" : "border-gray-300/50"} shadow-sm shadow-gray-300/50 px-5 py-2 rounded-sm`} onChange={handleChange} id="email" type="email" placeholder="mujemail@seznam.cz" name="email" value={formData.email} />  
          </div>
          <p className="text-red-600 py-2 font-light ">{formErrors.email}</p>
          
          <div className="flex flex-col gap-1 ">
          <label htmlFor="text">{!language ? "Zpráva" : "Message"}</label>
          <textarea rows="6" className={` lg:w-2/3 bg-white    border ${formErrors.text ? "border-red-600" : "border-gray-300/50"} shadow-sm shadow-gray-300/50 px-5 py-2 rounded-sm`} onChange={handleChange} id="text" placeholder="Biscuit brownie caramels carrot cake pastry." name="text" value={formData.text} />
        </div>
        <p className="text-red-600 py-2 font-light">{formErrors.text}</p>
          <div className="flex flex-col">
          <button className={`text-white bg-neutral-800 font-bold my-5 uppercase py-3 px-10 self-center md:self-start `}>{!language ? "ODESLAT" : "SUBMIT"}</button>
          </div>
        </form>

        
    
        </div>
        <ToastContainer />
    </div>
  )
}

export default Form
