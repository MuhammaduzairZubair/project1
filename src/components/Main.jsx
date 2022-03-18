import Form from "./Form";
import { useState } from "react";


function Main() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
  
    const handleTitle =(e) => {
      setTitle(e.target.value)
    }
  
    const handleDescription =(e) => {
      setDescription(e.target.value)
    }
  
    const handleSubmit = (e) => {
      e.preventDefault(); 
      console.log(title, description)
    }
    return(
        <>
        <Form handleTitle={handleTitle}
        handleDescription={handleDescription}
        handleSubmit={handleSubmit}
        title={title}
        description={description}
         />
        </>
    );
}

export default Main;