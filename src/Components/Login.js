import React from "react";
import {  useNavigate } from "react-router-dom";

function Login(){
   const navigate = useNavigate()

   function onSubmit(){
    // login logic here
    navigate('/dashboard')
   }
    return <div>
        <h1>Login page</h1>
        <button onClick={onSubmit}>Login</button>
    </div>
}
export default Login;