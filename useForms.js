import {useState, useEffect} from "react";
import validateInfo from './validateInfo';

const useForms = (submitForm) => {
const [values, setValues] = useState({
    email: '',
    password: '',
    password2: ''
});

const[errors, setErrors] = useState({});
const[dataIsCorrect, setDataIsCorrect] = useState(false);

const handleChange = (event) => {
    setValues({
    ...values, [event.target.name]:event.target.value,
    });
};

const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(validateInfo(values));
    setDataIsCorrect(true);
};

useEffect(() => {
    if(Object.keys(errors).length === 0 && dataIsCorrect){
        submitForm(true);
    }
}, [errors]);

    return{handleChange, handleFormSubmit, values, errors};

};

export default useForms;