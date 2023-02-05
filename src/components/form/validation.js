const regexEmail =  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
let regexPassword = /\d/

 export function validate (loginData) {
    let errors ={};
    if(!loginData.username){
        errors.username = "Ingrese un correo"
    }else if(!regexEmail.test(loginData.username)){
        errors.username = "Ingrese un correo valido"
    }
    if(loginData.username.length > 35) errors.username = "Ingrese un usuario con menos caracteres"
    if(loginData.password.length > 10) errors.password = "Contraseña demasiado larga"
    if(loginData.password.length < 6) errors.password = "Contraseña demasiado corta"
    if(!loginData.password){
        errors.password = "Ingresa tu contraseña"
    }else if(!regexPassword.test(loginData.password)){
        errors.password = "La contraseña debe tener por lo menos un número"
    }
    return errors
 } 


// export function validate(loginData){

//     if(!regexPassword.test(loginData.password)){
//         console.log(".test2 ")
//         errors.password = "La contraseña tiene que tener al menos un número";
//     }
//     if(loginData.password.length < 6 || loginData.password.length > 8){
//         errors.password = "La contraseña tiene que tener entre 6 y 10 caracteres"
//     }
//     return errors;  
// }
