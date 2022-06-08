import React from "react"
import Header from "./Components/Header";
import Projects from "./Components/Projects";
import About from "./Components/About"
import Form from "./Components/Form"
import Footer from "./Components/Footer"





function App() {

const [language, setLanguage] = React.useState(true)

  return (
    <div className=" text-neutral-800 font-baseStyle md:text-lg tracking-wide">
        <Header
          language={language} 
          setLanguage={setLanguage} 
        />
        <Projects
        language={language}
        />

        <About
        language={language}
        />

        <Form
        language={language}
        />

        <Footer
        language={language}
        />

        
    </div>
    
  );
}

export default App;
