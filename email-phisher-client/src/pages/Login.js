import React, { useRef, useState } from 'react'
import classes from './Login.module.css'

const Login = () => {

    const passwordRef = useRef();
    const emailRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
    }

    return (
        <form className={classes.login} onSubmit={handleSubmit}>
            <label for="email">Email:</label>
            <input type="text" id="email" name="email" ref={emailRef}/>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" ref={passwordRef}/>
            <button>Login</button>
        </form>
    )
}

export default Login