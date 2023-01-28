const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /(?=.*[a-zA-Z]){6,10}$/


export function validate(loginData){
    const errors = {};

    if(!regexEmail.test(loginData.userName)){
        errors.userName = "Ingrese un correo valido";
    }else if(!loginData.userName){
        errors.userName = "Ingrese un correo";
    }else if(loginData.userName.lenth > 35){
        errors.userName = "El usuario es demasiado largo";
    }
    if(!regexPassword.test(loginData.password)){
        errors.password = "La contraseña tiene que tener al menos un número";
    }else if(loginData.password.length < 6 || loginData.password.length > 8){
        errors.password = "La contraseña tiene que tener entre 6 y 10 caracteres"
    }
}