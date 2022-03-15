import React , {useState} from "react";
import FormsSingup from "./FormsSingup";
import FormsSuccess from "./FormsSuccess"

const Forms = () => {
    const[formIsSubmitted, setFormIsSubmitted] = useState(false)
    const submitForm = () => {
        setFormIsSubmitted(true);
    }
    return(
        <div>
            {!formIsSubmitted ? ( <FormsSingup submitForm={submitForm}/> 
            ) : ( <FormsSuccess />)}</div>
        )
};

export default Forms;
