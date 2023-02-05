import React from "react";
import {validate} from "./validation.js"
import styles from "./Form.module.css"

export default function Form(props) {
    const [loginData, setLoginData] = React.useState({
        username: "andres@henry.com",
        password: "henry123"
    });

    const [errors, setErrors] = React.useState({
        username: "",
        password: ""
    })

    function handleInputChange (e){
        e.preventDefault();
        setLoginData({...loginData, [e.target.name]:e.target.value});
        setErrors(validate({...loginData, [e.target.name]:e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.login(loginData);
    }

    return (
        <div className={styles.form} onSubmit={handleSubmit}>
            <form className="">
                <label htmlFor="username">Username: </label>
                <input id="username" type="email" name="username" placeholder="Ingrese su usuario" 
                value={loginData.userame} onChange={handleInputChange}/>
                <p>{errors.username}</p>
                <label htmlFor="">Password:</label>
                <input type="password" name="password" id="password" 
                value={loginData.password} onChange={handleInputChange}/>
                <p>{errors.password}</p>
                <input type="submit"/>
            </form>
        </div>
    )
}