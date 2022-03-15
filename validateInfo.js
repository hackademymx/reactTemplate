const validateInfo = (values) => {

let errors={};

if(!values.email){
    errors.email="Correo requerido."
} else if(!/\S+@\S+\.\S+/.test(values.email)){
    errors.email="El correo es invalido."
}

if(!values.password){
    errors.password = "Contraseña requerida."
}else if(values.password.leght < 6){
    errors.password="La contraseña debe tener al menos 6 o más caracteres."
}

if(!values.password2){
    errors.password2 = "Contraseña requerida."
}else if(values.password2.leght !== values.password){
    errors.password2="La contraseña debe tener al menos 6 o más caracteres."
}

return errors;
};

export default validateInfo