import React from "react";
import {validate} from "./validation.js"

export default function Form() {
    const [loginData, setLoginData] = React.useState({
        username: "",
        password: ""
    });

    const [errors, setErrors] = React.useState({
        username: "",
        password: ""
    })

    function handleInputChange (e){
        setLoginData({...loginData, [e.target.name]:e.target.value});
        setErrors(validate({...loginData, [e.target.name]:e.target.value}))
    }

    return (
        <div>
            <form >
                <label htmlFor="username">Username:</label>
                <input id="username" name="username" placeholder="Ingrese su usuario" type="text" 
                value={loginData.username} onChange={handleInputChange}/>
                <label htmlFor="">Password:</label>
                <p>{errors.username}</p>
                <input type="password" name="password" id="password" 
                value={loginData.password} onChange={handleInputChange}/>
                <input type="submit"/>
                <p>{errors.password}</p>
            </form>
        </div>
    )
}